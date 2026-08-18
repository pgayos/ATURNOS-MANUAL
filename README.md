# Nuevo manual de aTurnos · Astro

Piloto navegable del nuevo manual estructurado para publicación web, búsqueda y recuperación por IA.

## Decisiones del modelo

- Astro como generador del sitio público.
- Markdown/MDX + YAML como fuente canónica en Git.
- Esquema de colección validado con Zod.
- Todos los perfiles ven el contenido; el perfil seleccionado destaca relevancia.
- Pagefind genera el índice local después de compilar.
- La IA solo podrá utilizar contenido aprobado y deberá citar las fuentes.
- WordPress se mantiene durante una migración progresiva con redirecciones 301.

Cada artículo conserva trazabilidad explícita para la puesta en producción:

- `migration.originUrls`: páginas públicas utilizadas como fuente.
- `migration.redirectFrom`: URLs antiguas que deberán redirigir a la nueva ruta.
- `migration.contentHash`: huella del cuerpo migrado para detectar cambios.
- `labels: [PENDIENTE]`: el borrador es útil, pero necesita validación funcional de Producto.

Los campos equivalentes de `governance` se mantienen por compatibilidad con el flujo editorial existente.

## Desarrollo

```bash
npm install
npm run dev
```

Validación y compilación completa:

```bash
npm run build
```

La compilación valida TypeScript y el esquema de contenido, genera HTML estático y construye el índice de Pagefind.

## Interfaz inicial

- Portada y navegación por módulos.
- Páginas dinámicas para todos los módulos.
- Artículo MDX «Crear y utilizar un cuadrante borrador».
- Componentes para avisos, pasos, imágenes y vídeo con transcripción.
- Búsqueda con Pagefind.
- Demostración del asistente con cita de fuente.
- Primer mapa de redirección desde WordPress.

El texto del procedimiento piloto sigue en estado `functional-review`: Producto debe validar nombres de interfaz, permisos, visibilidad y efectos antes de aprobarlo. Las imágenes y los vídeos se incorporarán posteriormente.

## Migración y revisión del contenido público

La carpeta `src/content/manual/` contiene la migración del contenido público encontrado en los sitemaps de `manual.aturnos.com`:

- 969 URL de origen trazadas.
- 614 artículos canónicos procedentes del manual de referencia.
- 65 guías prácticas adicionales procedentes de `guias.aturnos.com`.
- 679 documentos Markdown/MDX en total.
- 355 duplicados exactos o casi idénticos consolidados.
- 969 redirecciones desde el manual anterior y 160 redirecciones internas por reclasificación.
- 11 fuentes vacías o inválidas conservadas como borradores señalizados.
- 160 artículos reclasificados mediante una taxonomía reproducible y revisada.

Todos los artículos generados tienen estado `draft` para que Producto los revise. La migración elimina imágenes, vídeos, reproductores y referencias editoriales que dependían exclusivamente de esos medios.

El informe del manual original está en `migration/migration-report.json`. La captura normalizada de las guías, su integración y la auditoría de módulos se documentan respectivamente en `migration/external-guides.json`, `migration/external-guides-integration.json` y `migration/taxonomy-audit.json`.

### Repetir la migración

El migrador espera un rastreo público con `manifest.json`, `inventory.json` y una carpeta `html/`. Por defecto lo busca en `../crawl`:

```bash
python3 -m pip install -r requirements-migration.txt
npm run migrate
npm run audit:guides
npm run reclassify
npm run integrate:guides
npm run clean:content
npm run validate:migration
npm run build
```

`audit:guides` consulta únicamente el sitemap y las páginas públicas de `guias.aturnos.com`; requiere acceso a Internet. Los demás pasos trabajan sobre archivos locales.

Los controles comprueban cobertura y destino de redirecciones, identificadores, correspondencia entre módulo y ruta, duplicados de cuerpo, estructura mínima, párrafos excesivamente largos y ausencia de imágenes o vídeos migrados.
