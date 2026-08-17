#!/usr/bin/env python3
"""Migrate the public aTurnos manual crawl into canonical Markdown entries.

The script is deterministic and deliberately conservative about near-duplicate
merges. It never emits images, video, iframes, embeds, or binary assets.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import re
import unicodedata
from collections import Counter, defaultdict
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

from lxml import html


MEDIA_WORDS = re.compile(r"\b(imagen(?:es)?|captura(?:s)?|v[ií]deo(?:s)?|videotutorial(?:es)?|reproductor|youtube)\b", re.I)
STOP = set("de la el los las un una unos unas y o en para por con como que se su sus al del a es son puede puedo aturnos".split())


def ascii_text(value: str) -> str:
    return "".join(c for c in unicodedata.normalize("NFKD", value.lower()) if not unicodedata.combining(c))


def clean(value: str) -> str:
    value = re.sub(r"\[(?:/?vc_|/?mkdf_|/?qode_)[^\]]*\]", " ", value or "", flags=re.I)
    value = re.sub(r"\s+", " ", value).strip()
    value = re.sub(r"\s+([,.;:!?])", r"\1", value)
    return re.sub(r"\s*>\s*", " → ", value)


def slugify(value: str) -> str:
    value = re.sub(r"[^a-z0-9]+", "-", ascii_text(value)).strip("-")
    return value[:96] or "contenido"


def title_from_url(url: str) -> str:
    part = urlparse(url).path.rstrip("/").split("/")[-1]
    part = re.sub(r"^\d+(?:-\d+)*-", "", part)
    text = part.replace("-", " ").strip()
    return text[:1].upper() + text[1:]


def normalize_title(value: str) -> str:
    value = re.sub(r"^\d+(?:[. -]\d+)*[. -]*", "", ascii_text(value))
    return re.sub(r"[^a-z0-9]+", " ", value).strip()


def tokens(value: str) -> list[str]:
    return [w for w in re.findall(r"[a-z0-9]{3,}", ascii_text(value)) if w not in STOP]


def normalized_body(value: str) -> str:
    return " ".join(tokens(value))


def simhash(value: str) -> int:
    counts = Counter(tokens(value))
    vector = [0] * 64
    for word, count in counts.items():
        digest = int(hashlib.blake2b(word.encode(), digest_size=8).hexdigest(), 16)
        for bit in range(64):
            vector[bit] += count if digest & (1 << bit) else -count
    result = 0
    for bit, score in enumerate(vector):
        if score >= 0:
            result |= 1 << bit
    return result


def yaml_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def yaml_list(values: list[str], indent: int = 0) -> list[str]:
    prefix = " " * indent
    return [f"{prefix}- {yaml_string(value)}" for value in values]


def choose_title(page_title: str, h1: str, url: str) -> str:
    candidate = clean(page_title.split("–")[0] if "–" in page_title else page_title)
    if not candidate:
        candidate = clean(h1)
    if len(normalize_title(candidate)) < 5:
        candidate = title_from_url(url)
    return candidate.rstrip(". ")


def content_type(title: str, text: str) -> str:
    norm = ascii_text(title + " " + text[:700])
    if title.rstrip().endswith("?") or norm.startswith(("como ", "que es ", "por que ", "puedo ")):
        return "faq"
    if any(term in norm for term in ("haz clic", "selecciona", "accede a", "paso 1", "para crear", "para modificar")):
        return "procedure"
    if any(term in norm for term in ("error", "no puedo", "problema", "no aparece")):
        return "troubleshooting"
    if any(term in norm for term in ("configuracion", "ajustes", "opciones")):
        return "reference"
    return "concept"


def question_for(kind: str, title: str) -> str:
    base = title.rstrip("?.")
    if title.rstrip().endswith("?"):
        return title.rstrip()
    if kind == "procedure":
        return f"¿Cómo puedo {base[:1].lower() + base[1:]}?"
    if kind == "troubleshooting":
        return f"¿Cómo resuelvo el problema: {base}?"
    return f"¿Qué debo saber sobre {base[:1].lower() + base[1:]}?"


def description_for(title: str, first_paragraph: str, kind: str) -> str:
    paragraph = clean(first_paragraph)
    if 45 <= len(paragraph) <= 220:
        return paragraph.rstrip(".") + "."
    verb = "Aprende a" if kind == "procedure" else "Información sobre"
    return f"{verb} {title[:1].lower() + title[1:]}, con instrucciones y contexto revisables por el equipo de aTurnos."


def extract_blocks(main, page_title: str) -> tuple[list[tuple[str, str | list[str]]], str]:
    blocks: list[tuple[str, str | list[str]]] = []
    paragraphs: list[str] = []
    accepted = {"h1", "h2", "h3", "p", "ul", "ol", "table"}
    skip_media_level: int | None = None
    for node in main.iter():
        tag = node.tag.lower() if isinstance(node.tag, str) else ""
        if tag not in accepted:
            continue
        if any(isinstance(parent.tag, str) and parent.tag.lower() in accepted for parent in node.iterancestors() if parent is not main):
            continue
        text = clean(" ".join(node.itertext()))
        if not text or text == page_title or len(text) < 2:
            continue
        if tag in {"h1", "h2", "h3"}:
            level_number = int(tag[1])
            if skip_media_level is not None and level_number <= skip_media_level:
                skip_media_level = None
            if MEDIA_WORDS.search(text):
                skip_media_level = level_number
                continue
            if skip_media_level is not None:
                continue
            level = "h2" if tag == "h1" else tag
            blocks.append((level, text))
        elif tag == "p":
            if skip_media_level is not None or MEDIA_WORDS.search(text):
                continue
            if ascii_text(text).rstrip(":") in {"tabla de contenido", "sin marcar la opcion", "marcando la opcion"}:
                continue
            if text.lower() in {"compartir", "siguiente", "anterior", "volver"}:
                continue
            blocks.append(("p", text))
            paragraphs.append(text)
        elif tag in {"ul", "ol"}:
            if skip_media_level is not None:
                continue
            items = [clean(" ".join(li.itertext())) for li in node.xpath("./li")]
            items = [item for item in items if item and not MEDIA_WORDS.search(item)]
            if items:
                blocks.append((tag, items))
        elif tag == "table":
            if skip_media_level is not None:
                continue
            rows = []
            for tr in node.xpath(".//tr"):
                cells = [clean(" ".join(cell.itertext())) for cell in tr.xpath("./th|./td")]
                if any(cells):
                    rows.append(" | ".join(cells))
            if rows:
                blocks.append(("table", rows))
    first = next((p for p in paragraphs if len(p) >= 40), paragraphs[0] if paragraphs else "")
    return blocks, first


def blocks_to_markdown(blocks: list[tuple[str, str | list[str]]], title: str, summary: str) -> str:
    output = ["## Resumen", "", summary, ""]
    saw_heading = False
    skipped_summary = False
    for kind, value in blocks:
        if kind in {"h2", "h3"}:
            heading = clean(str(value)).rstrip(".")
            if normalize_title(heading) == normalize_title(title) or heading.lower() == "resumen":
                continue
            level = "##" if kind == "h2" else "###"
            output.extend([f"{level} {heading}", ""])
            saw_heading = True
        elif kind == "p":
            paragraph = clean(str(value))
            if not skipped_summary and normalize_title(paragraph) == normalize_title(summary):
                skipped_summary = True
                continue
            if paragraph.startswith("▪"):
                output.extend([f"- {paragraph.lstrip('▪ ').strip()}", ""])
                continue
            sentences = re.split(r"(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÜÑ¿¡])", paragraph)
            chunks, current = [], ""
            for sentence in sentences:
                if current and len(current) + len(sentence) + 1 > 520:
                    chunks.append(current)
                    current = sentence
                else:
                    current = f"{current} {sentence}".strip()
            if current:
                chunks.append(current)
            for chunk in chunks:
                output.extend([chunk, ""])
        elif kind in {"ul", "ol"}:
            items = value if isinstance(value, list) else []
            for index, item in enumerate(items, 1):
                marker = f"{index}." if kind == "ol" else "-"
                output.append(f"{marker} {item}")
            output.append("")
        elif kind == "table":
            rows = value if isinstance(value, list) else []
            output.extend([f"- {row}" for row in rows] + [""])
    if not saw_heading and len(output) > 4:
        output.insert(4, "## Contenido")
        output.insert(5, "")
    text = "\n".join(output).strip() + "\n"
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text


@dataclass
class Page:
    index: int
    url: str
    source_type: str
    lastmod: str
    title: str
    h1: str
    text: str
    blocks: list[tuple[str, str | list[str]]]
    first_paragraph: str
    module: str
    submodule: str
    profiles: list[str]
    quality: int
    invalid: bool
    body_hash: str
    simhash: int


def parse_pages(crawl: Path) -> list[Page]:
    manifest = json.loads((crawl / "manifest.json").read_text())
    inventory = {row["url"]: row for row in json.loads((crawl / "inventory.json").read_text())}
    pages: list[Page] = []
    for index, item in enumerate(manifest):
        raw = (crawl / "html" / item["file"]).read_bytes()
        source = raw.decode("utf-8-sig", "ignore")
        invalid = len(raw) < 1000 or "Please assign category" in source
        if invalid:
            title = title_from_url(item["url"])
            pages.append(Page(index, item["url"], item["kind"], item["sitemapLastmod"], title, "", "", [], "", "General", "General", ["Administrador"], 1, True, "", 0))
            continue
        doc = html.fromstring(source)
        original_title = clean(" ".join(doc.xpath("//title/text()")))
        h1 = clean(" ".join(doc.xpath("//h1[1]//text()")))
        title = choose_title(original_title, h1, item["url"])
        candidates = doc.xpath('//*[contains(concat(" ",normalize-space(@class)," ")," entry-content ")]') or doc.xpath("//article") or doc.xpath("//main")
        main = candidates[0] if candidates else doc
        for bad in main.xpath(".//script|.//style|.//nav|.//footer|.//header|.//form|.//picture|.//img|.//video|.//audio|.//iframe|.//embed|.//object|.//figure"):
            bad.drop_tree()
        blocks, first = extract_blocks(main, title)
        text = clean(" ".join(main.itertext()))
        norm = normalized_body(text)
        row = inventory.get(item["url"], {})
        profiles = [p.strip() for p in row.get("profiles", "Administrador").split(",") if p.strip()]
        pages.append(Page(index, item["url"], item["kind"], item["sitemapLastmod"], title, h1, text, blocks, first, row.get("module", "General"), row.get("submodule", "General"), profiles, int(row.get("quality", 5)), False, hashlib.sha256(norm.encode()).hexdigest(), simhash(norm)))
    return pages


class DSU:
    def __init__(self, n: int): self.parent = list(range(n))
    def find(self, x: int) -> int:
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, a: int, b: int):
        a, b = self.find(a), self.find(b)
        if a != b: self.parent[b] = a


def deduplicate(pages: list[Page]) -> tuple[list[list[int]], dict[str, int]]:
    valid = [i for i, p in enumerate(pages) if not p.invalid and len(tokens(p.text)) >= 20]
    dsu = DSU(len(pages))
    exact: dict[str, int] = {}
    for i in valid:
        key = pages[i].body_hash
        if key in exact: dsu.union(i, exact[key])
        else: exact[key] = i
    # Conservative near-duplicate pass. Simhash prefilter keeps this cheap;
    # token Jaccard and title/slug agreement prevent generic template merges.
    token_sets = {i: set(tokens(pages[i].text)) for i in valid}
    title_sets = {i: set(tokens(pages[i].title)) for i in valid}
    slug_sets = {i: set(tokens(title_from_url(pages[i].url))) for i in valid}
    for pos, i in enumerate(valid):
        a = pages[i]
        for j in valid[pos + 1:]:
            b = pages[j]
            if (a.simhash ^ b.simhash).bit_count() > 5:
                continue
            len_ratio = min(len(a.text), len(b.text)) / max(len(a.text), len(b.text))
            if len_ratio < 0.82:
                continue
            ta, tb = token_sets[i], token_sets[j]
            jac = len(ta & tb) / max(1, len(ta | tb))
            if jac < 0.90:
                continue
            title_jac = len(title_sets[i] & title_sets[j]) / max(1, len(title_sets[i] | title_sets[j]))
            slug_jac = len(slug_sets[i] & slug_sets[j]) / max(1, len(slug_sets[i] | slug_sets[j]))
            if title_jac >= 0.65 or slug_jac >= 0.65:
                dsu.union(i, j)
    groups: dict[int, list[int]] = defaultdict(list)
    for i in valid: groups[dsu.find(i)].append(i)
    invalid = [[i] for i, p in enumerate(pages) if p.invalid or len(tokens(p.text)) < 20]
    ordered = list(groups.values()) + invalid
    source_to_group = {pages[i].url: gi for gi, group in enumerate(ordered) for i in group}
    return ordered, source_to_group


def canonical_index(group: list[int], pages: list[Page]) -> int:
    return max(group, key=lambda i: (pages[i].source_type == "knowledge_base", pages[i].quality, len(pages[i].text), pages[i].lastmod))


def write_entry(path: Path, page: Page, sources: list[str], migration_hash: str):
    display_title = re.sub(r"^(?:(?:\d+(?:[.-]\d+)*)|[a-z])[. -]+", "", page.title, flags=re.I).strip()
    if len(display_title) < 8:
        display_title = f"{display_title or page.title} en aTurnos"
    kind = content_type(display_title, page.text)
    summary = description_for(display_title, page.first_paragraph, kind)
    profiles = [p for p in page.profiles if p in {"Trabajador", "Planificador", "Administrador", "RRHH", "Nóminas", "Desarrollador API"}] or ["Administrador"]
    front = [
        "---", 'schemaVersion: "1.0"', f"contentId: {yaml_string(slugify(page.module) + '-' + path.stem)}", f"title: {yaml_string(display_title)}",
        f"description: {yaml_string(summary)}", f"contentType: {kind}", f"module: {yaml_string(page.module)}",
        f"submodule: {yaml_string(page.submodule)}", f"intent: {yaml_string(display_title)}", "audience:",
    ]
    for profile in profiles:
        front.extend([f"  - role: {yaml_string(profile)}", "    access: applicable"])
    entities = sorted(set(tokens(display_title)))[:8] or ["aturnos"]
    front.append("entities:")
    for entity in entities:
        front.extend([f"  - id: {yaml_string(slugify(entity))}", f"    label: {yaml_string(entity.capitalize())}"])
    front.extend(["synonyms: []", "prerequisites: []", "platforms: [web]", "governance:", "  status: draft", "  owner: \"Equipo de Producto de aTurnos\"", "  reviewer: null", "  reviewedAt: null", "  reviewDueAt: null", "  sourceUrls:"])
    front.extend(yaml_list(sources, 4))
    front.append("  redirectsFrom:")
    front.extend(yaml_list(sources, 4))
    front.extend(["ai:", "  answerableQuestions:", f"    - {yaml_string(question_for(kind, display_title))}", "  excludedQuestions: []", "  sensitivity: public", "  chunking: by-section", f"readingTime: {max(1, round(len(tokens(page.text)) / 180))}", "featured: false", "migration:", f"  sourceCount: {len(sources)}", f"  contentHash: {yaml_string(migration_hash)}", f"  migratedAt: {date.today().isoformat()}", "---", ""])
    body = blocks_to_markdown(page.blocks, display_title, summary) if not page.invalid else f"## Estado de la fuente\n\nLa URL pública original de **{display_title}** no devolvió contenido utilizable durante la migración. No se ha generado una explicación que no estuviera respaldada por la fuente. Este borrador debe completarse o archivarse durante la revisión editorial.\n"
    if len(tokens(body)) < 25:
        body += f"\n## Revisión requerida\n\nLa fuente pública de **{display_title}** contiene muy poca información textual. Se ha conservado todo el texto útil disponible, pero el equipo de Producto debe ampliar y validar este borrador antes de aprobarlo.\n"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("\n".join(front) + body, encoding="utf-8")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--crawl", type=Path, default=Path("../crawl"))
    parser.add_argument("--output", type=Path, default=Path("src/content/manual"))
    parser.add_argument("--redirects", type=Path, default=Path("redirects/redirects.csv"))
    parser.add_argument("--report", type=Path, default=Path("migration/migration-report.json"))
    args = parser.parse_args()
    pages = parse_pages(args.crawl)
    groups, _ = deduplicate(pages)
    # Preserve the hand-crafted pilot and rebuild every generated file.
    pilot = args.output / "planificacion" / "cuadrante-borrador.mdx"
    for path in args.output.rglob("*.md"):
        path.unlink()
    used_paths: set[str] = {"planificacion/cuadrante-borrador"}
    redirects: list[tuple[str, str, int]] = []
    report_entries = []
    for group in sorted(groups, key=lambda g: min(g)):
        canonical = pages[canonical_index(group, pages)]
        sources = sorted({pages[i].url for i in group})
        if "https://manual.aturnos.com/knowledgebase/2-2-cuadrante-borrador/" in sources:
            target = "/manual/planificacion/cuadrante-borrador/"
            for source in sources: redirects.append((source, target, 301))
            report_entries.append({"target": target, "file": str(pilot), "sourceUrls": sources, "status": "preserved-pilot"})
            continue
        module_slug = slugify(canonical.module)
        base_slug = slugify(canonical.title)
        key = f"{module_slug}/{base_slug}"
        suffix = 2
        while key in used_paths:
            key = f"{module_slug}/{base_slug}-{suffix}"
            suffix += 1
        used_paths.add(key)
        target = f"/manual/{key}/"
        output = args.output / f"{key}.md"
        write_entry(output, canonical, sources, canonical.body_hash or hashlib.sha256(canonical.url.encode()).hexdigest())
        for source in sources: redirects.append((source, target, 301))
        report_entries.append({"target": target, "file": str(output), "title": canonical.title, "module": canonical.module, "sourceUrls": sources, "sourceCount": len(sources), "invalidSource": canonical.invalid})
    args.redirects.parent.mkdir(parents=True, exist_ok=True)
    with args.redirects.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.writer(fh); writer.writerow(["source", "target", "status"]); writer.writerows(sorted(redirects))
    args.report.parent.mkdir(parents=True, exist_ok=True)
    stats = {"sourceUrls": len(pages), "canonicalEntries": len(report_entries), "duplicatesConsolidated": len(pages) - len(report_entries), "invalidSources": sum(p.invalid for p in pages), "redirects": len(redirects), "entries": report_entries}
    args.report.write_text(json.dumps(stats, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({k: v for k, v in stats.items() if k != "entries"}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
