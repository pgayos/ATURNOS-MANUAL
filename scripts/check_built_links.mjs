#!/usr/bin/env node
/** Fail CI when a generated HTML page references a missing local route or asset. */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] ?? 'dist');
const htmlFiles = [];
const walk = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
};
walk(root);

const missing = [];
const checked = new Set();
const exists = (pathname) => {
  const relative = decodeURIComponent(pathname).replace(/^\/+/, '');
  const direct = path.join(root, relative);
  return fs.existsSync(direct) || fs.existsSync(path.join(direct, 'index.html')) || fs.existsSync(`${direct}.html`);
};

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const reference = match[1];
    if (!reference.startsWith('/') || reference.startsWith('//')) continue;
    const pathname = reference.split(/[?#]/, 1)[0] || '/';
    if (checked.has(pathname)) continue;
    checked.add(pathname);
    if (!exists(pathname)) missing.push({ reference: pathname, foundIn: path.relative(root, file) });
  }
}

if (missing.length) {
  console.error(JSON.stringify({ checked: checked.size, missing }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({ htmlFiles: htmlFiles.length, localReferences: checked.size, missing: 0 }, null, 2));
