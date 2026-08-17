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

El texto del procedimiento y el vídeo siguen en estado `functional-review`: Producto debe validar nombres de interfaz, permisos, visibilidad y efectos antes de aprobarlo.
