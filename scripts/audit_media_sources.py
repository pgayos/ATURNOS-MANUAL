#!/usr/bin/env python3
"""Inventory public article images and map them to canonical Markdown files."""

from __future__ import annotations

import argparse
import json
import re
import time
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urljoin, urlparse, urlunparse
from urllib.request import Request, urlopen

from lxml import html

USER_AGENT = "aTurnos-manual-media-migration/1.0 (public documentation migration)"
CONTENT = Path("src/content/manual")


def clean(value: str) -> str:
    return re.sub(r"\s+", " ", value or "").strip()


def canonical_url(value: str, base: str) -> str:
    parsed = urlparse(urljoin(base, value))
    path = re.sub(r"-\d+x\d+(?=\.[a-zA-Z0-9]+$)", "", parsed.path)
    return urlunparse(parsed._replace(path=path, query="", fragment=""))


def source_mapping() -> dict[str, str]:
    mapping: dict[str, str] = {}
    for path in sorted([*CONTENT.rglob("*.md"), *CONTENT.rglob("*.mdx")]):
        text = path.read_text(encoding="utf-8")
        front = text.split("---", 2)[1]
        block = re.search(r"\n\s+originUrls:\n((?:\s+- https?://[^\n]+\n?)+)", front)
        if not block:
            continue
        for url in re.findall(r"^\s+- (https?://\S+)\s*$", block.group(1), re.M):
            mapping[url.rstrip("/") + "/"] = str(path)
    return mapping


def best_source(node, page_url: str) -> str:
    values = [node.get(key) for key in ("data-src", "data-lazy-src", "data-original", "src") if node.get(key)]
    values = [value for value in values if not value.startswith("data:") and "placeholder" not in value.lower()]
    return canonical_url(values[0], page_url) if values else ""


def relevant_image(node, url: str) -> bool:
    clue = " ".join([url, node.get("class") or "", node.get("alt") or ""]).lower()
    blocked = ("emoji", "smilie", "avatar", "gravatar", "logo", "icon", "loader", "spinner", "pixel", "blank.gif")
    return bool(url and urlparse(url).scheme in {"http", "https"} and not any(word in clue for word in blocked))


def extract(document: bytes, page_url: str, article: str, source: str) -> list[dict]:
    doc = html.fromstring(document)
    candidates = doc.xpath('//*[contains(concat(" ",normalize-space(@class)," ")," entry-content ")]') or doc.xpath("//article") or doc.xpath("//main")
    if not candidates:
        return []
    root = candidates[0]
    result = []
    for index, node in enumerate(root.xpath(".//img"), 1):
        url = best_source(node, page_url)
        if not relevant_image(node, url):
            continue
        heading = node.xpath("preceding::h2[1]//text() | preceding::h3[1]//text()")
        figure = node.xpath("ancestor::figure[1]//figcaption//text()")
        result.append({
            "article": article,
            "sourcePage": source,
            "sourceImage": url,
            "sourceAlt": clean(node.get("alt") or node.get("title") or ""),
            "caption": clean(" ".join(figure)),
            "context": clean(" ".join(heading[-1:])),
            "position": index,
        })
    return result


def fetch(url: str) -> bytes:
    request = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=45) as response:
        return response.read()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--crawl", type=Path, default=Path("../crawl"))
    parser.add_argument("--guides", type=Path, default=Path("migration/external-guides.json"))
    parser.add_argument("--output", type=Path, default=Path("migration/media-source-inventory.json"))
    parser.add_argument("--delay", type=float, default=0.05)
    args = parser.parse_args()
    mapping = source_mapping()
    entries: list[dict] = []
    errors: list[dict] = []

    manifest = json.loads((args.crawl / "manifest.json").read_text(encoding="utf-8"))
    for item in manifest:
        source = item["url"].rstrip("/") + "/"
        article = mapping.get(source)
        if not article:
            continue
        raw = (args.crawl / "html" / item["file"]).read_bytes()
        try:
            entries.extend(extract(raw, source, article, source))
        except Exception as error:
            errors.append({"url": source, "error": str(error)})

    guide_data = json.loads(args.guides.read_text(encoding="utf-8"))
    for guide in guide_data["guides"]:
        source = guide["url"].rstrip("/") + "/"
        article = mapping.get(source)
        if not article or guide.get("invalid"):
            continue
        try:
            entries.extend(extract(fetch(source), source, article, source))
        except Exception as error:
            errors.append({"url": source, "error": str(error)})
        time.sleep(args.delay)

    unique = {(entry["article"], entry["sourceImage"]): entry for entry in entries}
    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "sourcePages": len({entry["sourcePage"] for entry in unique.values()}),
        "articleCount": len({entry["article"] for entry in unique.values()}),
        "imageReferences": len(unique),
        "uniqueSourceImages": len({entry["sourceImage"] for entry in unique.values()}),
        "entries": list(unique.values()),
        "errors": errors,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({key: value for key, value in payload.items() if key not in {"entries", "errors", "generatedAt"}}, ensure_ascii=False, indent=2))
    print(json.dumps({"errors": len(errors)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
