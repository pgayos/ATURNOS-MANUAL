// Sirve dist/ aplicando las cabeceras de customHttp.yml, para probar en local
// la CSP de producción (astro dev y astro preview no la aplican).
//
//   npm run build   (o npx astro build)
//   npm run preview:headers   →  http://localhost:4329
//
// Si varios patrones definen la misma cabecera, gana el último, que es lo que
// esperamos de Amplify (pendiente de confirmar en un despliegue real). Lee
// customHttp.yml al arrancar: reinícialo tras cambiarlo.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const PORT = Number(process.env.PORT ?? 4329);
const rules = YAML.parse(fs.readFileSync(path.join(ROOT, 'customHttp.yml'), 'utf8')).customHeaders;

// '**' = cualquier ruta, '*' = un tramo sin '/'.
const toRegExp = (pattern) =>
  new RegExp(
    '^' +
      pattern
        .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
        .replace(/\*\*/g, '\0')
        .replace(/\*/g, '[^/]*')
        .replace(/\0/g, '.*') +
      '$',
  );
const matchers = rules.map((rule) => ({ ...rule, re: rule.pattern === '**' ? /.*/ : toRegExp(rule.pattern) }));

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.yml': 'text/yaml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

http
  .createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = path.join(DIST, url);
    if (!file.startsWith(DIST)) return res.writeHead(403).end();
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) file = path.join(DIST, '404.html');

    const headers = { 'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream' };
    for (const rule of matchers) {
      if (rule.re.test(url)) for (const { key, value } of rule.headers) headers[key] = value;
    }
    res.writeHead(file.endsWith('404.html') ? 404 : 200, headers);
    fs.createReadStream(file).pipe(res);
  })
  .listen(PORT, () => console.log(`dist/ con cabeceras de customHttp.yml en http://localhost:${PORT}`));
