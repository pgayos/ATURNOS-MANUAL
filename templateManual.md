# Cómo agregar un artículo nuevo al manual (fuera del glosario)

Para el glosario existe una guía aparte: [templateGlossary.md](templateGlossary.md).
Esta es para el resto del manual: artículos normales, organizados por
módulo → submódulo → tema.

No hace falta tocar ningún otro archivo del proyecto — con crear el `.md`
en el lugar correcto, el artículo aparece solo en su módulo.

## Paso 1 — Elige dónde va el archivo

La carpeta que elijas determina la URL final y el módulo al que pertenece.

**Contenido normal (web):**

```
src/content/manual/<carpeta-del-modulo>/<archivo>.md
```

Por ejemplo, un artículo de "Control horario" va en
`src/content/manual/control-horario/mi-articulo.md`, y queda en
`/manual/control-horario/mi-articulo/`.

**Contenido específico de la app móvil:** ver la sección "El caso de App"
más abajo — es un poco distinto.

El **nombre del archivo** también define la URL, así que usa minúsculas,
sin tildes ni espacios, separado por guiones.

## Paso 2 — Copia esta plantilla

Las líneas marcadas con 👉 son las que tienes que decidir por artículo.
El resto se deja como está.

```yaml
---
schemaVersion: "1.0"
contentId: control-horario-mi-articulo          # 👉 "<carpeta-del-módulo>-<nombre-del-archivo>"
title: Nombre del artículo                      # 👉 mínimo 5 caracteres
order: 1                                        # 👉 orden dentro de su submódulo (los artículos se listan por este número, luego por título)
description: Resumen de una frase de qué trata el artículo, mínimo 30 caracteres.  # 👉
contentType: procedure                          # 👉 procedure | concept | reference | faq | troubleshooting
module: Control horario                         # 👉 el nombre visible del módulo (define el "eyebrow" y el breadcrumb)
submodule: General                              # 👉 el área dentro del módulo (genera su propia página con cards automáticamente)
# subtopic: Nombre del tema                     # 👉 opcional, solo si quieres agrupar varios artículos de un mismo submódulo bajo un tema común
intent: Nombre del artículo                     # 👉 normalmente lo mismo que "title"
audience:
  - role: Trabajador                            # 👉 quién necesita este artículo: Trabajador | Administrador | RRHH | Nóminas | Desarrollador API
    access: applicable                          # 👉 required | recommended | applicable
entities: []                                    # 👉 opcional, ayuda a la búsqueda/IA
synonyms: []
prerequisites: []
platforms:
  - web                                         # 👉 web, o app (ver "El caso de App" abajo)
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls: []
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Pregunta que este artículo responde?     # 👉
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1                                  # 👉 minutos estimados de lectura
featured: false                                 # 👉 true si quieres que aparezca en "Contenido destacado" de la home
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/glosario/
  redirectFrom:
    - https://manual.aturnos.com/glosario/
  contentHash: "0000000000000000000000000000000000000000000000000000000000000000"
  migratedAt: 2026-09-02                        # 👉 la fecha de hoy, formato AAAA-MM-DD
labels:
  - PENDIENTE
---

## Resumen

Texto de introducción del artículo.  <!-- 👉 -->

## Procedimiento

<!-- 👉 el contenido real: pasos, explicación, capturas, etc. -->
```

## Qué se genera solo (no lo toques a mano)

- La página del módulo (`/manual/<módulo>/`) con las cards de sus submódulos.
- La página del submódulo (`/manual/<módulo>/<submódulo>/`), con sus temas
  (si usaste `subtopic`) y sus artículos sueltos.
- El breadcrumb y el índice de búsqueda.

## El caso de App

Un mismo módulo puede tener contenido **solo para web**, **solo para la
app**, o ambos por separado — nunca se mezclan en un mismo artículo. Hay
dos situaciones distintas:

### A. Contenido general de la app (no ligado a un módulo existente)

Va directo en `src/content/manual/app-movil/<archivo>.md` (sin subcarpeta),
con:

```yaml
module: App móvil
platforms:
  - app
```

### B. Contenido de la app para un módulo que ya existe en web

Por ejemplo, "Control horario" ya tiene su versión web
(`src/content/manual/control-horario/`), pero además necesita una guía
propia de cómo se usa desde la app. En ese caso, va en una **subcarpeta**
dentro de `app-movil/`:

```
src/content/manual/app-movil/control-horario/como-fichar-en-la-app.md
```

Y en el frontmatter, `module` y `submodule` llevan el nombre real del
módulo web (no "App móvil"):

```yaml
module: Control horario
submodule: General
platforms:
  - app
```

Esto hace que el artículo aparezca en `/manual/app-movil/control-horario/`
(su propia sección dentro de App móvil) y en el bloque "App móvil" de la
página de inicio, mientras que la versión web de "Control horario" sigue
intacta y separada.

**Regla simple**: la carpeta física decide la URL; `module`/`submodule`
deciden qué nombre se muestra y en qué grupo cae. `platforms: [app]` es lo
que hace que Astro lo trate como contenido de la app, no de la web.

## Paso 3 — Guarda y comprueba

Si el sitio está corriendo (`npm run dev`), entra al módulo correspondiente
y confirma que el artículo aparece en su submódulo, con el `title` y la
`description` correctos.
