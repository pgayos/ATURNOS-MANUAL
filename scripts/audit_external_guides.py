#!/usr/bin/env python3
"""Download and normalize the public aTurnos guides for editorial comparison.

The output is a compact JSON snapshot containing text only. Images, videos,
iframes and downloadable assets are deliberately ignored.
"""

from __future__ import annotations

import argparse
import json
import re
import time
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urljoin, urlparse

from lxml import etree, html

from migrate_manual import blocks_to_markdown, clean, extract_blocks


SITEMAP = "https://guias.aturnos.com/docs-sitemap.xml"
USER_AGENT = "aTurnos-manual-migration/1.0 (public documentation audit)"


def fetch(url: str) -> bytes:
    request = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=45) as response:
        return response.read()


def sitemap_urls() -> list[tuple[str, str]]:
    root = etree.fromstring(fetch(SITEMAP))
    namespace = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    return [
        (clean(node.findtext("s:loc", namespaces=namespace) or ""), clean(node.findtext("s:lastmod", namespaces=namespace) or ""))
        for node in root.xpath("//s:url", namespaces=namespace)
    ]


def parse_guide(url: str, sitemap_lastmod: str) -> dict:
    document = html.fromstring(fetch(url))
    title = clean(" ".join(document.xpath("//*[contains(@class,'betterdocs-entry-title')][1]//text()")))
    content = document.xpath("//*[contains(concat(' ',normalize-space(@class),' '),' betterdocs-entry-content ')][1]")
    if not title or not content:
        return {"url": url, "sitemapLastmod": sitemap_lastmod, "invalid": True}

    for selector in (".//img", ".//picture", ".//video", ".//audio", ".//iframe", ".//figure", ".//script", ".//style"):
        for node in content[0].xpath(selector):
            parent = node.getparent()
            if parent is not None:
                parent.remove(node)

    blocks, first = extract_blocks(content[0], title)
    summary = first if len(first) >= 40 else f"Guía práctica sobre {title[:1].lower() + title[1:]}."
    markdown = blocks_to_markdown(blocks, title, summary)
    breadcrumbs = [clean(value) for value in document.xpath("//*[@id='betterdocs-breadcrumb']//li//text()")]
    breadcrumbs = [value for value in breadcrumbs if value and value not in {"Inicio", "Guías"}]
    modified = document.xpath("//meta[@property='article:modified_time']/@content")
    manual_links = []
    for href in content[0].xpath(".//a/@href"):
        absolute = urljoin(url, href).split("#", 1)[0]
        if urlparse(absolute).netloc == "manual.aturnos.com" and "/wp-content/" not in absolute:
            manual_links.append(absolute.rstrip("/") + "/")
    return {
        "url": url,
        "title": title,
        "breadcrumbs": breadcrumbs,
        "sitemapLastmod": sitemap_lastmod,
        "modifiedAt": modified[0] if modified else sitemap_lastmod,
        "wordCount": len(re.findall(r"\b\w+\b", markdown)),
        "manualLinks": sorted(set(manual_links)),
        "markdown": markdown,
        "invalid": False,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=Path("migration/external-guides.json"))
    parser.add_argument("--delay", type=float, default=0.08)
    args = parser.parse_args()

    guides = []
    for index, (url, lastmod) in enumerate(sitemap_urls(), 1):
        try:
            guides.append(parse_guide(url, lastmod))
        except Exception as error:  # keep the audit complete and reviewable
            guides.append({"url": url, "sitemapLastmod": lastmod, "invalid": True, "error": str(error)})
        print(f"[{index:02}] {url}")
        time.sleep(args.delay)

    payload = {
        "source": SITEMAP,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "guideCount": len(guides),
        "validGuideCount": sum(not guide["invalid"] for guide in guides),
        "guides": guides,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({key: payload[key] for key in ("guideCount", "validGuideCount")}, ensure_ascii=False))


if __name__ == "__main__":
    main()
