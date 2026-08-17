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


ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "src/content/manual"
REPORT = ROOT / "migration/migration-report.json"
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
    files = sorted([*CONTENT.rglob("*.md"), *CONTENT.rglob("*.mdx")])
    generated = [p for p in files if p.suffix == ".md"]
    if len(files) != report["canonicalEntries"]:
        failures.append(f"canonical file count {len(files)} != report {report['canonicalEntries']}")
    with REDIRECTS.open(encoding="utf-8") as fh:
        redirects = list(csv.DictReader(fh))
    if len(redirects) != report["sourceUrls"]:
        failures.append(f"redirect count {len(redirects)} != source count {report['sourceUrls']}")
    sources = [r["source"] for r in redirects]
    if len(sources) != len(set(sources)):
        failures.append("duplicate source URL in redirects")
    media_pattern = re.compile(r"<\s*(?:img|video|audio|iframe|embed|object|picture|Media|Video)\b|!\[[^\]]*\]\([^)]*\)|youtube(?:-nocookie)?\.com|youtu\.be", re.I)
    hashes: dict[str, list[str]] = defaultdict(list)
    long_paragraphs = 0
    tiny_bodies = 0
    for path in generated:
        text = path.read_text(encoding="utf-8")
        body = body_of(text)
        if media_pattern.search(body):
            failures.append(f"media reference found: {path.relative_to(ROOT)}")
        if not re.search(r"^##\s+", body, re.M):
            failures.append(f"missing H2: {path.relative_to(ROOT)}")
        if "governance:\n  status: draft" not in text:
            failures.append(f"generated entry is not draft: {path.relative_to(ROOT)}")
        normalized = norm(body)
        hashes[hashlib.sha256(normalized.encode()).hexdigest()].append(str(path.relative_to(ROOT)))
        words = len(normalized.split())
        if words < 25:
            tiny_bodies += 1
        for paragraph in re.split(r"\n\s*\n", body):
            if not paragraph.startswith(("#", "-", "1.", "2.", "3.")) and len(paragraph) > 620:
                long_paragraphs += 1
    duplicate_bodies = [paths for paths in hashes.values() if len(paths) > 1]
    if duplicate_bodies:
        failures.append(f"{len(duplicate_bodies)} duplicate canonical body groups remain")
    if long_paragraphs:
        failures.append(f"{long_paragraphs} paragraphs exceed 620 characters")
    if tiny_bodies:
        warnings.append(f"{tiny_bodies} generated drafts contain fewer than 25 words")
    status_counts = Counter("invalid" if entry.get("invalidSource") else "content" for entry in report["entries"])
    result = {
        "sourceUrls": report["sourceUrls"], "canonicalFiles": len(files), "generatedMarkdown": len(generated),
        "redirects": len(redirects), "duplicateBodies": len(duplicate_bodies), "mediaReferences": sum("media reference" in f for f in failures),
        "longParagraphs": long_paragraphs, "veryShortDrafts": tiny_bodies, "entryTypes": status_counts,
        "warnings": warnings, "failures": failures,
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
