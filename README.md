# Nuevo manual de aTurnos · piloto Astro

Piloto navegable del nuevo manual estructurado para publicación web, búsqueda y recuperación por IA.

## Decisiones del modelo

- Astro como generador del sitio público.
- Markdown/MDX + YAML como fuente canónica en Git.
- Esquema de colección validado con Zod.
- Todos los perfiles ven el contenido; el perfil seleccionado destaca relevancia.
- Pagefind genera el índice local después de compilar.
- La IA solo podrá utilizar contenido aprobado y deberá citar las fuentes.
- WordPress se mantiene durante una migración progresiva con redirecciones 301.

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

## Contenido del piloto

- Portada y navegación por módulos.
- Página del módulo Planificación.
- Artículo MDX «Crear y utilizar un cuadrante borrador».
- Componentes para avisos, pasos, imágenes y vídeo con transcripción.
- Búsqueda con Pagefind.
- Demostración del asistente con cita de fuente.
- Primer mapa de redirección desde WordPress.

El texto del procedimiento piloto sigue en estado `functional-review`: Producto debe validar nombres de interfaz, permisos, visibilidad y efectos antes de aprobarlo. Las imágenes y los vídeos se incorporarán posteriormente.

## Migración completa del manual público

La carpeta `src/content/manual/` contiene la migración del contenido público encontrado en los sitemaps de `manual.aturnos.com`:

- 969 URL de origen trazadas.
- 614 artículos canónicos.
- 355 duplicados exactos o casi idénticos consolidados.
- 969 redirecciones registradas en `redirects/redirects.csv`.
- 11 fuentes vacías o inválidas conservadas como borradores señalizados.

Todos los artículos generados tienen estado `draft` para que Producto los revise. La migración elimina imágenes, vídeos, reproductores y referencias editoriales que dependían exclusivamente de esos medios.

El informe completo está en `migration/migration-report.json`. Incluye el Markdown de destino y todas las URL que fueron consolidadas en él.

### Repetir la migración

El migrador espera un rastreo público con `manifest.json`, `inventory.json` y una carpeta `html/`. Por defecto lo busca en `../crawl`:

```bash
python3 -m pip install -r requirements-migration.txt
npm run migrate
npm run validate:migration
npm run build
```

Los controles comprueban cobertura de redirecciones, duplicados de cuerpo, estructura mínima, párrafos excesivamente largos y ausencia de imágenes o vídeos migrados.
