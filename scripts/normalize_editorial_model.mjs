#!/usr/bin/env node
/** Normalize editorial metadata and flag source-poor drafts without inventing product behaviour. */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import YAML from 'yaml';

const root = path.resolve('src/content/manual');
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.mdx?$/.test(entry.name)) files.push(full);
  }
}
walk(root);

const genericDescription = /con instrucciones y contexto revisables|Información sobre .* en aTurnos/i;
const headings = {
  procedure: 'Procedimiento', concept: 'Qué debes saber', reference: 'Opciones y datos disponibles',
  faq: 'Respuesta', troubleshooting: 'Diagnóstico y solución'
};
const clean = (s) => s.replace(/\[(.*?)\]\([^)]*\)/g, '$1').replace(/[*_`>#]/g, '')
  .replace(/\s+/g, ' ').trim();
const words = (s) => clean(s).split(/\s+/).filter(Boolean).length;
const firstUsefulSentence = (body) => {
  const text = body.split('\n').filter((line) => line.trim() && !/^#{1,6}\s/.test(line) && !/^[-*]\s/.test(line) && !/^\d+[.)]\s/.test(line))
    .map(clean).find((line) => line.length >= 55 && !genericDescription.test(line));
  if (!text) return null;
  const sentence = text.match(/^.{45,190}?[.!?](?:\s|$)/)?.[0] ?? text.slice(0, 190);
  return sentence.replace(/[.!?]?$/, '.');
};
let pending = 0, descriptions = 0, headingsChanged = 0;

for (const file of files.sort()) {
  const original = fs.readFileSync(file, 'utf8');
  const match = original.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`Frontmatter no válido: ${file}`);
  const data = YAML.parse(match[1]);
  let body = match[2].trim();
  body = body.replace(/^## Contenido\s*$/m, `## ${headings[data.contentType] ?? 'Contenido'}`);
  if (body !== match[2].trim()) headingsChanged++;

  const sourceUrls = [...new Set(data.governance?.sourceUrls ?? [])];
  if (!sourceUrls.length) throw new Error(`Sin URL de origen: ${file}`);
  const redirects = [...new Set([...(data.governance?.redirectsFrom ?? []), ...sourceUrls])];
  data.governance.redirectsFrom = [...new Set(data.governance?.redirectsFrom ?? [])];

  if (genericDescription.test(data.description ?? '')) {
    const sourced = firstUsefulSentence(body);
    const fallback = data.contentType === 'procedure'
      ? `Explica cómo ${String(data.intent || data.title).replace(/^./, (c) => c.toLowerCase())} en aTurnos y qué debes comprobar durante el proceso.`
      : `Explica ${String(data.title).replace(/^./, (c) => c.toLowerCase())} y su aplicación en aTurnos.`;
    data.description = sourced ?? fallback;
    descriptions++;
  }
  data.description = String(data.description).replace(/\s+([,.;:!?])/g, '$1').replace(/\.\s*\.$/, '.');

  const evidenceBody = body.replace(/\n## PENDIENTE de validación\n[\s\S]*$/, '');
  const bodyWords = words(evidenceBody);
  const weak = bodyWords < 110 || (evidenceBody.match(/^##\s+/gm) ?? []).length < 2;
  data.labels = weak ? ['PENDIENTE'] : [];
  if (weak) {
    pending++;
    if (!/^## PENDIENTE de validación$/m.test(body)) {
      body += `\n\n## PENDIENTE de validación\n\nEl equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.`;
    }
  }

  data.migration = {
    sourceCount: sourceUrls.length,
    originUrls: sourceUrls,
    redirectFrom: redirects,
    contentHash: crypto.createHash('sha256').update(body).digest('hex'),
    migratedAt: data.migration?.migratedAt ?? '2026-08-18'
  };
  data.readingTime = Math.max(1, Math.ceil(words(body) / 220));

  const output = `---\n${YAML.stringify(data, { lineWidth: 0 }).trim()}\n---\n${body}\n`;
  fs.writeFileSync(file, output);
}
console.log(JSON.stringify({ files: files.length, descriptionsImproved: descriptions, headingsChanged, pending }, null, 2));
