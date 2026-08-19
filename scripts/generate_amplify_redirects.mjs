#!/usr/bin/env node
/** Convert the canonical redirect CSV into Amplify custom-rule JSON. */
import fs from 'node:fs';

const input = process.argv[2] ?? 'redirects/redirects.csv';
const output = process.argv[3] ?? 'amplify-redirects.json';
const rows = fs.readFileSync(input, 'utf8').trim().split(/\r?\n/).slice(1);

const parseCsvRow = (row) => {
  const values = [];
  let value = '';
  let quoted = false;
  for (let index = 0; index < row.length; index++) {
    const char = row[index];
    if (char === '"' && quoted && row[index + 1] === '"') { value += '"'; index++; }
    else if (char === '"') quoted = !quoted;
    else if (char === ',' && !quoted) { values.push(value); value = ''; }
    else value += char;
  }
  values.push(value);
  return values;
};

const asPath = (value) => {
  if (/^https?:\/\//i.test(value)) {
    const parsed = new URL(value);
    return `${parsed.pathname}${parsed.search}` || '/';
  }
  return value.startsWith('/') ? value : `/${value}`;
};

const rules = new Map();
const conflicts = [];
for (const row of rows) {
  const [rawSource, rawTarget, status = '301'] = parseCsvRow(row);
  const source = asPath(rawSource);
  const target = asPath(rawTarget);
  if (source === target) continue;
  const rule = { source, status: String(status), target, condition: null };
  const existing = rules.get(source);
  if (existing && existing.target !== target) conflicts.push({ source, targets: [existing.target, target] });
  else rules.set(source, rule);
}

if (conflicts.length) {
  console.error(JSON.stringify({ conflicts }, null, 2));
  process.exit(1);
}

const result = [...rules.values()].sort((a, b) => a.source.localeCompare(b.source, 'es'));
result.push({ source: '/<*>', status: '404', target: '/404.html', condition: null });
fs.writeFileSync(output, `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify({ csvRows: rows.length, redirects: result.length - 1, notFoundRule: true, output }, null, 2));
