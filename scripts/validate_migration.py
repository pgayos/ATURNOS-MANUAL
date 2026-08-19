#!/usr/bin/env python3
"""Quality gates for the generated manual migration."""

from __future__ import annotations

import csv
import hashlib
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

from migrate_manual import slugify


ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "src/content/manual"
REPORT = ROOT / "migration/migration-report.json"
GUIDES_REPORT = ROOT / "migration/external-guides-integration.json"
REDIRECTS = ROOT / "redirects/redirects.csv"


def body_of(text: str) -> str:
    parts = text.split("---", 2)
    return parts[2].strip() if len(parts) == 3 else text.strip()


def norm(text: str) -> str:
    text = re.sub(r"[#*_>`\[\]()]", " ", text.lower())
    return re.sub(r"\s+", " ", text).strip()


def main() -> int:
    failures: list[str] = []
    warnings: list[str] = []
    report = json.loads(REPORT.read_text())
    guides_report = json.loads(GUIDES_REPORT.read_text()) if GUIDES_REPORT.exists() else {"created": 0}
    files = sorted([*CONTENT.rglob("*.md"), *CONTENT.rglob("*.mdx")])
    generated = [p for p in files if p.suffix == ".md"]
    expected_files = report["canonicalEntries"] + guides_report["created"]
    if len(files) != expected_files:
        failures.append(f"canonical file count {len(files)} != expected {expected_files}")
    with REDIRECTS.open(encoding="utf-8") as fh:
        redirects = list(csv.DictReader(fh))
    external_redirects = [row for row in redirects if row["source"].startswith("http")]
    if len(external_redirects) != report["sourceUrls"]:
        failures.append(f"external redirect count {len(external_redirects)} != source count {report['sourceUrls']}")
    sources = [r["source"] for r in redirects]
    if len(sources) != len(set(sources)):
        failures.append("duplicate source URL in redirects")
    forbidden_media_pattern = re.compile(r"<\s*(?:video|audio|iframe|embed|object|Video)\b|youtube(?:-nocookie)?\.com|youtu\.be|\.(?:mp4|webm|mov|m4v)(?:\)|$)", re.I)
    image_pattern = re.compile(r"!\[([^\]]+)\]\((/media/manual/[^)]+)\)")
    hashes: dict[str, list[str]] = defaultdict(list)
    content_ids: dict[str, list[str]] = defaultdict(list)
    long_paragraphs = 0
    tiny_bodies = 0
    missing_traceability = 0
    generic_descriptions = 0
    pending_labels = 0
    image_references = 0
    missing_images = 0
    for path in generated:
        text = path.read_text(encoding="utf-8")
        body = body_of(text)
        if not re.search(r"^\s+originUrls:\s*$", text, re.M) or not re.search(r"^\s+redirectFrom:\s*$", text, re.M):
            missing_traceability += 1
        description = re.search(r"^description:\s*(.+)$", text, re.M)
        if description and re.search(r"con instrucciones y contexto revisables|Información sobre .* en aTurnos", description.group(1), re.I):
            generic_descriptions += 1
        if re.search(r"^\s+- PENDIENTE\s*$", text, re.M):
            pending_labels += 1
            if "## PENDIENTE de validación" not in body:
                failures.append(f"PENDIENTE label without review section: {path.relative_to(ROOT)}")
        if forbidden_media_pattern.search(body):
            failures.append(f"forbidden video/audio reference found: {path.relative_to(ROOT)}")
        for alt, source in image_pattern.findall(body):
            image_references += 1
            if not alt.strip():
                failures.append(f"empty image label: {path.relative_to(ROOT)}")
            if not (ROOT / "public" / source.lstrip("/")).exists():
                missing_images += 1
                failures.append(f"missing local image: {source}")
        markdown_images = re.findall(r"!\[[^\]]*\]\(([^)]+)\)", body)
        if any(not source.startswith("/media/manual/") for source in markdown_images):
            failures.append(f"non-local image reference found: {path.relative_to(ROOT)}")
        if not re.search(r"^##\s+", body, re.M):
            failures.append(f"missing H2: {path.relative_to(ROOT)}")
        if "governance:\n  status: draft" not in text:
            failures.append(f"generated entry is not draft: {path.relative_to(ROOT)}")
        normalized = norm(body)
        hashes[hashlib.sha256(normalized.encode()).hexdigest()].append(str(path.relative_to(ROOT)))
        content_id = re.search(r'^contentId:\s+"([^"]+)"', text, re.M)
        module = re.search(r'^module:\s+"?([^"\n]+)"?', text, re.M)
        if content_id:
            content_ids[content_id.group(1)].append(str(path.relative_to(ROOT)))
        if module and path.relative_to(CONTENT).parts[0] != slugify(module.group(1).strip()):
            failures.append(f"module/path mismatch: {path.relative_to(ROOT)}")
        words = len(normalized.split())
        if words < 25:
            tiny_bodies += 1
        for paragraph in re.split(r"\n\s*\n", body):
            if not paragraph.startswith(("#", "-", "1.", "2.", "3.")) and len(paragraph) > 620:
                long_paragraphs += 1
    duplicate_bodies = [paths for paths in hashes.values() if len(paths) > 1]
    if duplicate_bodies:
        failures.append(f"{len(duplicate_bodies)} duplicate canonical body groups remain")
    duplicate_ids = [paths for paths in content_ids.values() if len(paths) > 1]
    if duplicate_ids:
        failures.append(f"{len(duplicate_ids)} duplicate contentId groups remain")
    valid_targets = {
        "/manual/" + "/".join(path.relative_to(CONTENT).with_suffix("").parts) + "/"
        for path in files
    }
    missing_targets = sorted({row["target"] for row in redirects if row["target"] not in valid_targets})
    if missing_targets:
        failures.append(f"{len(missing_targets)} redirect targets do not resolve")
    if long_paragraphs:
        failures.append(f"{long_paragraphs} paragraphs exceed 620 characters")
    if missing_traceability:
        failures.append(f"{missing_traceability} articles lack origin/redirect traceability")
    if generic_descriptions:
        failures.append(f"{generic_descriptions} generic descriptions remain")
    if tiny_bodies:
        warnings.append(f"{tiny_bodies} generated drafts contain fewer than 25 words")
    status_counts = Counter("invalid" if entry.get("invalidSource") else "content" for entry in report["entries"])
    result = {
        "sourceUrls": report["sourceUrls"], "externalGuides": guides_report["created"], "canonicalFiles": len(files), "generatedMarkdown": len(generated),
        "redirects": len(redirects), "duplicateBodies": len(duplicate_bodies), "duplicateContentIds": len(duplicate_ids),
        "missingRedirectTargets": len(missing_targets), "imageReferences": image_references, "missingImages": missing_images,
        "longParagraphs": long_paragraphs, "veryShortDrafts": tiny_bodies, "pendingReview": pending_labels,
        "missingTraceability": missing_traceability, "genericDescriptions": generic_descriptions, "entryTypes": status_counts,
        "warnings": warnings, "failures": failures,
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
