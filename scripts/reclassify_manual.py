#!/usr/bin/env python3
"""Audit and optionally apply a consistent product-module taxonomy.

Classification is deterministic and intentionally requires a clear score lead.
The default mode only writes an audit report; use --apply after reviewing it.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import unicodedata
from collections import Counter
from pathlib import Path

from migrate_manual import slugify


ROOT = Path("src/content/manual")

MODULE_TERMS = {
    "App móvil": ["app movil", "aplicacion movil", "dispositivo movil", "inicia sesion en la app"],
    "Cita previa": ["cita previa", "citas", "kiosko", "servicios", "colas de espera"],
    "Configuración y cuenta": ["ajustes", "configuracion", "cuenta", "contrasena", "notificaciones", "seguridad", "roles", "permisos funcionales", "crear equipo", "datos del equipo"],
    "Control horario": ["control horario", "control de presencia", "fichaje", "fichajes", "fichar", "marcaje", "entrada y salida", "horas presenciales", "geolocalizacion", "biometr", "teletrabajo", "puntualidad", "pausas"],
    "Costes y nóminas": ["nomina", "nominas", "coste", "costes", "conceptos de calculo", "conceptos de comparacion", "conceptos que operan", "exportar a nominas"],
    "Documentos": ["documento", "documentos", "gestion documental", "tipo de documento"],
    "Gestión de personal": ["trabajador", "trabajadores", "empleado", "empleados", "perfil", "rrhh", "recursos humanos", "contrato", "alta", "baja", "sustitucion", "estructura jerarquica", "superusuario"],
    "Integraciones y API": ["api", "webhook", "integracion", "personio", "powerbi", "erp", "sistema externo", "ids external"],
    "Peticiones y cambios": ["peticion", "peticiones", "cambio de turno", "cambios de turno", "cambios pendientes", "oferta de turno", "ofertas de horas", "debe haber turno"],
    "Planificación": ["planificacion", "cuadrante", "turno", "turnos", "patron", "patrones", "vacaciones", "absentismo", "absentismos", "restriccion", "restricciones", "cobertura", "demanda", "jornada", "calendario", "festivo"],
    "Recursos y partes": ["recursos", "recurso", "parte de trabajo", "partes de trabajo", "localizacion", "localizaciones"],
    "Tareas": ["tarea", "tareas", "plantilla de tareas", "asignacion de tareas", "catalogo de tareas"],
}

STRONG_TITLE_RULES = [
    ("Control horario", r"\b(fich(?:ar|aje|ajes)|control (?:horario|de presencia)|marcajes?|horas presenciales|geolocalizaci[oó]n|biom[eé]tric|puntualidad)\b"),
    ("Costes y nóminas", r"\b(n[oó]minas?|costes?|conceptos? de (?:c[aá]lculo|n[oó]mina|comparaci[oó]n))\b"),
    ("Integraciones y API", r"\b(api|webhooks?|personio|power\s*bi|integraci[oó]n con|ids? external)\b"),
    ("Documentos", r"\b(documentos?|gesti[oó]n documental)\b"),
    ("Cita previa", r"\b(cita previa|citas?|kiosko|colas de espera)\b"),
    ("Tareas", r"\b(tareas?|cat[aá]logo de tareas)\b"),
    ("Peticiones y cambios", r"\b(peticiones?|cambios? de turno|cambios? pendientes|ofertas? de (?:turno|horas))\b"),
    ("Recursos y partes", r"\b(recursos?|partes? de trabajo|localizaciones?)\b"),
]

TITLE_OVERRIDES = {
    "acciones automaticas": "Configuración y cuenta",
    "tolerancia": "Control horario",
    "delegacion de administradores": "Gestión de personal",
    "clonar datos": "Gestión de personal",
    "modo de validacion para la exportacion": "Costes y nóminas",
    "calculo estimado de horas": "Planificación",
    "mas de 5 hrs fichadas sin descanso": "Control horario",
    "trabajadores sin descanso realizado": "Control horario",
    "importar planificacion con turnos absentismos vacaciones y o localizaciones": "Planificación",
    "crear nueva oferta": "Peticiones y cambios",
    "tareas app": "Cita previa",
    "que valor indica y para que sirve el status presencia horas contrato": "Control horario",
    "tootilp del trabajador": "Recursos y partes",
}


def normalize(value: str) -> str:
    value = "".join(char for char in unicodedata.normalize("NFKD", value.lower()) if not unicodedata.combining(char))
    return re.sub(r"[^a-z0-9]+", " ", value).strip()


def field(source: str, name: str) -> str:
    match = re.search(rf"^{re.escape(name)}:\s+\"([^\"]*)\"", source, re.M)
    if match:
        return match.group(1)
    match = re.search(rf"^{re.escape(name)}:\s+([^\n]+)", source, re.M)
    return match.group(1).strip() if match else ""


def classify(source: str) -> tuple[str, int, int, dict[str, int], str]:
    title = field(source, "title")
    current = field(source, "module")
    description = field(source, "description")
    submodule = field(source, "submodule")
    body = source.split("---", 2)[-1]
    normalized_title = normalize(title)

    if normalized_title in TITLE_OVERRIDES:
        module = TITLE_OVERRIDES[normalized_title]
        return module, 20, 0, {module: 20}, "reviewed-title-override"

    for module, pattern in STRONG_TITLE_RULES:
        if re.search(pattern, title, re.I):
            return module, 12, 5, {module: 12}, "strong-title-rule"

    weighted_text = [(normalize(title), 5), (normalize(description + " " + submodule), 2), (normalize(body[:3500]), 1)]
    scores = Counter()
    for module, terms in MODULE_TERMS.items():
        for term in terms:
            normalized_term = normalize(term)
            for text, weight in weighted_text:
                occurrences = len(re.findall(rf"\b{re.escape(normalized_term)}\b", text))
                scores[module] += min(occurrences, 4) * weight

    ranked = scores.most_common()
    best_module, best_score = ranked[0] if ranked else (current, 0)
    runner_up = ranked[1][1] if len(ranked) > 1 else 0
    if best_score < 7 or best_score - runner_up < 3:
        return current, best_score, runner_up, dict(scores), "insufficient-confidence"
    return best_module, best_score, runner_up, dict(scores), "weighted-keywords"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=Path("migration/taxonomy-audit.json"))
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    entries = []
    for path in sorted(ROOT.rglob("*.md*")):
        source = path.read_text()
        current = field(source, "module")
        proposed, score, runner_up, scores, reason = classify(source)
        entries.append({
            "file": str(path), "title": field(source, "title"), "currentModule": current,
            "proposedModule": proposed, "changed": proposed != current, "score": score,
            "runnerUpScore": runner_up, "reason": reason, "scores": scores,
        })

    payload = {
        "entryCount": len(entries),
        "proposedChanges": sum(entry["changed"] for entry in entries),
        "currentModules": dict(Counter(entry["currentModule"] for entry in entries)),
        "proposedModules": dict(Counter(entry["proposedModule"] for entry in entries)),
        "entries": entries,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({key: payload[key] for key in ("entryCount", "proposedChanges", "currentModules", "proposedModules")}, ensure_ascii=False, indent=2))

    if not args.apply:
        return

    moves: dict[str, str] = {}
    occupied = {str(path) for path in ROOT.rglob("*.md*")}
    for entry in entries:
        if not entry["changed"]:
            continue
        old_path = Path(entry["file"])
        source = old_path.read_text()
        new_module = entry["proposedModule"]
        source = re.sub(r"^module:\s+\"[^\"]+\"", f'module: "{new_module}"', source, count=1, flags=re.M)
        destination = ROOT / slugify(new_module) / old_path.name
        suffix = 2
        while str(destination) in occupied and destination != old_path:
            destination = destination.with_name(f"{old_path.stem}-{suffix}{old_path.suffix}")
            suffix += 1
        old_content_id = field(source, "contentId")
        new_content_id = f"{slugify(new_module)}-{destination.stem}"
        source = re.sub(rf'^contentId:\s+\"{re.escape(old_content_id)}\"', f'contentId: "{new_content_id}"', source, count=1, flags=re.M)
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(source)
        if destination != old_path:
            old_path.unlink()
        occupied.discard(str(old_path))
        occupied.add(str(destination))
        old_route = "/manual/" + "/".join(old_path.relative_to(ROOT).with_suffix("").parts) + "/"
        new_route = "/manual/" + "/".join(destination.relative_to(ROOT).with_suffix("").parts) + "/"
        moves[old_route] = new_route

    redirects_path = Path("redirects/redirects.csv")
    with redirects_path.open(newline="") as handle:
        redirect_rows = list(csv.DictReader(handle))
    for row in redirect_rows:
        row["target"] = moves.get(row["target"], row["target"])
    for old_route, new_route in moves.items():
        redirect_rows.append({"source": old_route, "target": new_route, "status": "301"})
    with redirects_path.open("w", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=["source", "target", "status"], lineterminator="\n")
        writer.writeheader()
        writer.writerows(sorted(redirect_rows, key=lambda row: row["source"]))

    report_path = Path("migration/migration-report.json")
    report = json.loads(report_path.read_text())
    for item in report["entries"]:
        if item.get("target") in moves:
            old_file = Path(item["file"])
            item["target"] = moves[item["target"]]
            relative = item["target"].removeprefix("/manual/").rstrip("/")
            extension = old_file.suffix
            item["file"] = str(ROOT / f"{relative}{extension}")
            item["module"] = next((entry["proposedModule"] for entry in entries if entry["file"] == str(old_file)), item.get("module"))
    report["redirects"] = len(redirect_rows)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"appliedMoves": len(moves), "redirects": len(redirect_rows)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
