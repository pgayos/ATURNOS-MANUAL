#!/usr/bin/env node
/** Download, optimize, deduplicate and reference public documentation images. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const inventoryPath = process.argv[2] ?? 'migration/media-source-inventory.json';
const outputRoot = path.resolve('public/media/manual');
const reportPath = path.resolve('migration/media-migration-report.json');
const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
fs.mkdirSync(outputRoot, { recursive: true });

const clean = (value = '') => value.replace(/<[^>]+>/g, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
const slug = (value) => clean(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70) || 'vista-aturnos';
const weakLabel = /(?:^\s*(?:image|imagen|captura|screenshot|img|foto)\b|\.(?:png|jpe?g|webp)$|^\s*\d+\s*$)/i;
const labelFor = (entry) => {
  const candidates = [entry.caption, entry.context, entry.sourceAlt].map(clean).filter((x) => x && !weakLabel.test(x));
  const label = candidates[0] ?? `Vista de ${path.basename(entry.article).replace(/\.mdx?$/, '').replace(/-/g, ' ')} en aTurnos`;
  return label.length > 140 ? `${label.slice(0, 137)}…` : label;
};
const extensionAllowed = /\.(?:png|jpe?g|webp|gif)(?:$|\?)/i;
const isVideo = /\.(?:mp4|webm|mov|m4v|avi)(?:$|\?)/i;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const cache = new Map();
const hashFiles = new Map();
const failures = [];
let discarded = 0;

async function obtain(entry) {
  const url = entry.sourceImage;
  if (isVideo.test(url) || !extensionAllowed.test(url)) { discarded++; return null; }
  if (cache.has(url)) return cache.get(url);
  const promise = (async () => {
    try {
      const candidates = [url];
      if (url.includes('832760.smushcdn.com/1690972/wp-content/')) {
        candidates.push(url.replace(/^https:\/\/832760\.smushcdn\.com\/1690972/, 'https://manual.aturnos.com'));
      }
      let response;
      let lastError;
      for (const candidate of candidates) {
        try {
          response = await fetch(candidate, { headers: { 'User-Agent': 'aTurnos-manual-media-migration/1.0' }, signal: AbortSignal.timeout(45000) });
          if (response.ok) break;
          lastError = new Error(`HTTP ${response.status}`);
        } catch (error) {
          lastError = error;
        }
      }
      if (!response?.ok) throw lastError ?? new Error('No se pudo descargar');
      const contentType = response.headers.get('content-type') ?? '';
      if (!contentType.startsWith('image/')) throw new Error(`tipo ${contentType || 'desconocido'}`);
      const input = Buffer.from(await response.arrayBuffer());
      if (input.length < 1500) { discarded++; return null; }
      const source = sharp(input, { animated: false, failOn: 'none' }).rotate();
      const meta = await source.metadata();
      if ((meta.width ?? 0) < 120 || (meta.height ?? 0) < 80) { discarded++; return null; }
      const hasAlpha = Boolean(meta.hasAlpha);
      const pipeline = source.resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true });
      const output = hasAlpha
        ? await pipeline.png({ compressionLevel: 9, palette: true, quality: 90 }).toBuffer()
        : await pipeline.webp({ quality: 84, effort: 5, smartSubsample: true }).toBuffer();
      const digest = crypto.createHash('sha256').update(output).digest('hex');
      if (hashFiles.has(digest)) return hashFiles.get(digest);
      const ext = hasAlpha ? 'png' : 'webp';
      const filename = `${slug(labelFor(entry))}-${digest.slice(0, 10)}.${ext}`;
      fs.writeFileSync(path.join(outputRoot, filename), output);
      const asset = { url: `/media/manual/${filename}`, bytes: output.length, width: meta.width, height: meta.height, hash: digest };
      hashFiles.set(digest, asset);
      return asset;
    } catch (error) {
      failures.push({ sourceImage: url, sourcePage: entry.sourcePage, error: String(error.message ?? error) });
      return null;
    }
  })();
  cache.set(url, promise);
  return promise;
}

const articleImages = new Map();
const queue = [...inventory.entries];
const workers = Array.from({ length: 8 }, async () => {
  while (queue.length) {
    const entry = queue.shift();
    const asset = await obtain(entry);
    if (!asset) continue;
    const item = { ...asset, alt: labelFor(entry), sourceImage: entry.sourceImage, sourcePage: entry.sourcePage };
    const list = articleImages.get(entry.article) ?? [];
    if (!list.some((existing) => existing.hash === item.hash)) list.push(item);
    articleImages.set(entry.article, list);
    await sleep(10);
  }
});
await Promise.all(workers);

let articlesUpdated = 0;
let referencesAdded = 0;
for (const [article, images] of [...articleImages.entries()].sort()) {
  if (!images.length) continue;
  let text = fs.readFileSync(article, 'utf8');
  text = text.replace(/\n## Imágenes de referencia\n[\s\S]*$/, '');
  const lines = ['## Imágenes de referencia', '', 'Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.', ''];
  for (const image of images) {
    lines.push(`![${image.alt.replace(/[\[\]]/g, '')}](${image.url})`, '');
  }
  fs.writeFileSync(article, `${text.trim()}\n\n${lines.join('\n').trim()}\n`);
  articlesUpdated++;
  referencesAdded += images.length;
}

const report = {
  generatedAt: new Date().toISOString(),
  sourceReferences: inventory.imageReferences,
  sourceImagesRequested: cache.size,
  assetsCreated: hashFiles.size,
  articlesUpdated,
  referencesAdded,
  discarded,
  failures,
  assets: Object.fromEntries([...articleImages.entries()].map(([article, images]) => [article, images])),
};
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ ...report, failures: failures.length, assets: undefined }, null, 2));
