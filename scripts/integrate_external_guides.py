#!/usr/bin/env python3
"""Create role-oriented Markdown guides from the public guides snapshot."""

from __future__ import annotations

import json
import re
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

from migrate_manual import content_type, description_for, question_for, slugify, tokens, yaml_string


SOURCE = Path("migration/external-guides.json")
OUTPUT = Path("src/content/manual")

CATEGORY_MAP = {
    "configuracion-inicial-del-equipo": ("Configuración y cuenta", "Configuración inicial"),
    "crear-y-asignar-turnos": ("Planificación", "Turnos y cuadrantes"),
    "gestion-de-permisos-y-absentismos": ("Planificación", "Permisos y absentismos"),
    "gestion-de-vacaciones": ("Planificación", "Vacaciones"),
    "empoderamiento-del-mando-y-del-trabajador": ("Peticiones y cambios", "Autogestión"),
    "empoderamiento-del-empleado": ("Peticiones y cambios", "Autogestión del trabajador"),
    "comunicacion-con-el-equipo": ("Configuración y cuenta", "Comunicación y notificaciones"),
    "control-de-horas-trabajadas-y-extras": ("Control horario", "Horas trabajadas"),
    "control-horario": ("Control horario", "Uso por el trabajador"),
    "creacion-de-informes-personalizados": ("General", "Informes y estadísticas"),
    "restricciones-mas-comunes-y-su-uso": ("Planificación", "Restricciones"),
    "ejercicios-practicos-conocer-aturnos": ("Planificación", "Ejercicios prácticos"),
    "resolucion-de-dudas-frecuentes": ("General", "Soporte"),
    "perfil-del-trabajador": ("Gestión de personal", "Perfil del trabajador"),
    "integracion-con-sistemas-externos": ("Integraciones y API", "Sistemas externos"),
    "recursos-humanos-aturnos": ("Gestión de personal", "Recursos humanos"),
    "modulo-de-tareas-aturnos-optimiza-tu-planificacion": ("Tareas", "Gestión de tareas"),
    "aturnos-app": ("App móvil", "Aplicación móvil"),
    "nominas": ("Costes y nóminas", "Nóminas"),
}

TITLE_CATEGORY_OVERRIDES = {
    "alertas de control horario": ("Control horario", "Alertas"),
    "comentarios en el cuadrante": ("Planificación", "Cuadrante"),
    "configuración de estructura organizativa": ("Gestión de personal", "Estructura organizativa"),
    "configuración de perfiles, roles y creación de usuarios": ("Gestión de personal", "Usuarios y roles"),
    "gestión documental": ("Documentos", "Gestión documental"),
    "absentismos": ("Planificación", "Absentismos"),
    "vacaciones": ("Planificación", "Vacaciones"),
    "turnos y horas": ("Planificación", "Turnos y horas"),
    "actividad 2. añade a los trabajadores": ("Gestión de personal", "Alta de trabajadores"),
    "solicitar, aprobar y gestionar permisos, bajas": ("Peticiones y cambios", "Permisos y bajas"),
}


def category_for(url: str) -> tuple[str, str]:
    parts = urlparse(url).path.strip("/").split("/")
    for part in reversed(parts[:-1]):
        if part in CATEGORY_MAP:
            return CATEGORY_MAP[part]
    return "General", "Guías"


def role_for(url: str) -> str:
    if "/guias-trabajador/" in url:
        return "Trabajador"
    if "/guias-rr-hh/" in url:
        return "RRHH"
    return "Administrador"


def contextual_title(title: str, url: str, submodule: str, role: str) -> str:
    if title.lower() == "introducción":
        title = f"Introducción a {submodule.lower()}"
    if title.lower() in {"preguntas frecuentes", "faqs"}:
        title = f"Preguntas frecuentes sobre {submodule.lower()}"
    suffix = {"Trabajador": "para trabajadores", "Administrador": "para administradores", "RRHH": "para RR. HH."}[role]
    return f"{title.rstrip('.')} {suffix}"


def split_long_paragraphs(markdown: str) -> str:
    output = []
    for block in re.split(r"\n\s*\n", markdown):
        if len(block) <= 600 or block.startswith(("#", "-", "1.", "2.", "3.")):
            output.append(block)
            continue
        pieces = re.split(r"(?<=[.;!?])\s+(?=[A-ZÁÉÍÓÚÜÑ¿¡–])", block)
        chunks, current = [], ""
        for piece in pieces:
            if current and len(current) + len(piece) + 1 > 560:
                chunks.append(current)
                current = piece
            else:
                current = f"{current} {piece}".strip()
        if current:
            chunks.append(current)
        output.extend(chunks)
    return "\n\n".join(output)


def main() -> None:
    payload = json.loads(SOURCE.read_text())
    previous_report = Path("migration/external-guides-integration.json")
    if previous_report.exists():
        for entry in json.loads(previous_report.read_text()).get("entries", []):
            previous = Path(entry["file"])
            if previous.exists():
                previous.unlink()
    created = []
    skipped = []
    occupied = {str(path.relative_to(OUTPUT).with_suffix("")) for path in OUTPUT.rglob("*.md*")}
    for guide in payload["guides"]:
        if guide.get("invalid") or guide.get("wordCount", 0) < 100 or "documento-de-pruebas" in guide["url"] or "prueba-faqs" in guide["url"]:
            skipped.append({"url": guide["url"], "reason": "invalid-or-insufficient-content", "wordCount": guide.get("wordCount", 0)})
            continue
        module, submodule = TITLE_CATEGORY_OVERRIDES.get(guide["title"].lower(), category_for(guide["url"]))
        role = role_for(guide["url"])
        title = contextual_title(guide["title"], guide["url"], submodule, role)
        slug = "guia-" + slugify(title)
        relative = f"{slugify(module)}/{slug}"
        suffix = 2
        while relative in occupied:
            relative = f"{slugify(module)}/{slug}-{suffix}"
            suffix += 1
        occupied.add(relative)
        path = OUTPUT / f"{relative}.md"
        kind = content_type(title, guide["markdown"])
        paragraphs = [line for line in guide["markdown"].splitlines() if line and not line.startswith("#") and not line.startswith("-")]
        first = next((line for line in paragraphs if len(line) >= 40), "")
        description = description_for(title, first, kind)
        modified = (guide.get("modifiedAt") or guide.get("sitemapLastmod") or date.today().isoformat())[:10]
        word_count = len(tokens(guide["markdown"]))
        frontmatter = [
            "---", 'schemaVersion: "1.0"', f'contentId: {yaml_string(relative.replace("/", "-"))}',
            f'title: {yaml_string(title)}', f'description: {yaml_string(description)}', f"contentType: {kind}",
            f'module: {yaml_string(module)}', f'submodule: {yaml_string(submodule)}',
            f'intent: {yaml_string(guide["title"])}', "audience:", f"  - role: {yaml_string(role)}", "    access: applicable",
            "entities: []", "synonyms: []", "prerequisites: []", "platforms: [web]", "governance:",
            "  status: draft", '  owner: "Equipo de Producto de aTurnos"', "  reviewer: null",
            f"  reviewedAt: {modified}", "  reviewDueAt: null", "  sourceUrls:", f'    - {yaml_string(guide["url"])}',
            "  redirectsFrom: []", "ai:", "  answerableQuestions:", f"    - {yaml_string(question_for(kind, title))}",
            "  excludedQuestions: []", "  sensitivity: public", "  chunking: by-section",
            f"readingTime: {max(1, round(word_count / 180))}", "featured: false", "---", "",
        ]
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("\n".join(frontmatter) + split_long_paragraphs(guide["markdown"].strip()) + "\n")
        created.append({"file": str(path), "url": guide["url"], "title": title, "module": module, "wordCount": guide["wordCount"]})

    report = {"created": len(created), "skipped": len(skipped), "entries": created, "skippedEntries": skipped}
    Path("migration/external-guides-integration.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"created": len(created), "skipped": len(skipped)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
