# Cómo agregar un artículo nuevo al manual (fuera del glosario)

Para el glosario existe una guía aparte: [templateGlossary.md](templateGlossary.md).
Esta es para el resto del manual: artículos normales, organizados por
módulo → submódulo → tema.

No hace falta tocar ningún otro archivo del proyecto — con crear el `.md`
en el lugar correcto, el artículo aparece solo en su módulo.

## Los 4 campos que deciden cómo se ve un artículo

Todos los `.md` del manual usan la misma plantilla — por eso puede parecer
que "todo es lo mismo". La diferencia está en 4 campos del frontmatter, no
en el archivo en sí:

| Campo         | Qué controla                                                                 |
|---------------|-------------------------------------------------------------------------------|
| `module`      | El nombre visible del módulo (el pill/eyebrow). Debe ser **idéntico, carácter a carácter**, en todos los artículos de un mismo módulo. |
| `submodule`   | El primer nivel del índice lateral dentro del módulo.                        |
| `subtopic`    | (Opcional) Un segundo nivel, agrupa varios artículos bajo un mismo submódulo. |
| `order`       | El orden dentro de su submódulo/tema. Sin esto, dos artículos del mismo grupo se ordenan por título. |

**La carpeta física, en cambio, solo decide la URL** (y, salvo el caso de
App móvil de más abajo, cuál es "su" módulo a efectos de navegación) — no
decide el nombre del módulo ni el agrupamiento. Esto es justo lo que puede
generar confusión: si dos artículos de la misma carpeta usan un `module:`
distinto (por un typo, o por copiar mal la plantilla), aparecerán en dos
sitios distintos del menú aunque estén en la misma carpeta; si uno de ellos
tiene un `module:` que no coincide con ningún otro artículo, puede quedar
huérfano o generar una entrada de menú duplicada/rota. Ya nos pasó dos veces
en este proyecto (un artículo de App móvil con `module: Pruebas` en vez de
`module: App móvil`, y varios artículos de Biostar con `module` de otros 3
módulos distintos) — por eso conviene revisar esto al cargar contenido, no
solo copiar y pegar.

**Regla práctica al cargar un artículo nuevo:** copia el `module`/`submodule`
exactos de otro artículo ya existente de ese módulo (no los escribas de
memoria), y no dejes valores de plantilla sin rellenar (`title: "Nombre del
artículo"`, `subtopic: "Elemento de pruebas"`, etc.) en un archivo que vaya
a quedar publicado — si es una prueba, bórralo antes de hacer commit.

## Paso 1 — Elige dónde va el archivo

Dentro de `src/content/manual/` hay 5 carpetas principales, una por cada
acceso del menú de arriba del sitio:

```
src/content/manual/
├── empezar-en-aturnos/        → pill "Cómo empezar en aTurnos"
├── manual/                    → pill "Documentación" (los módulos "normales")
│   └── <carpeta-del-módulo>/
├── app-movil/                 → pill "App móvil"
├── gestion-de-proyectos/      → pill "Gestión de proyectos"
├── integraciones-y-hardware/  → agrupa integraciones (hoy: Biostar)
│   └── <carpeta-del-módulo>/
└── glosario/                  → pill "Glosario" (ver templateGlossary.md)
```

`manual/` e `integraciones-y-hardware/` son **carpetas contenedoras
puramente organizativas**: agrupan en disco los módulos que quedan bajo esos
accesos del menú, pero no forman parte de la URL ni de la lógica de
navegación — el código las quita automáticamente (`routeIdOf` en
[guideNav.ts](src/lib/guideNav.ts)). Así que un artículo de "Control
horario" (que vive bajo el pill "Documentación") va en:

```
src/content/manual/manual/control-horario/mi-articulo.md
```

y su URL sigue siendo `/manual/control-horario/mi-articulo/` (sin el
segmento `manual/` repetido). Lo mismo con Biostar: vive en
`src/content/manual/integraciones-y-hardware/integracion-biostar/…` pero su
URL sigue siendo `/manual/integracion-biostar/…`.

**Contenido específico de la app móvil:** ver la sección "El caso de App"
más abajo — es un poco distinto.

El **nombre del archivo** también define la URL, así que usa minúsculas,
sin tildes ni espacios, separado por guiones.

Si necesitas crear un módulo nuevo: si va a vivir bajo "Documentación",
créale su carpeta dentro de `manual/`; si es una integración/hardware
nuevo, dentro de `integraciones-y-hardware/`; si es otra cosa completamente
distinta (un nuevo acceso propio en el menú, como pasó con "Gestión de
proyectos"), habla primero de cómo debe verse en el menú antes de crear la
carpeta — eso sí requiere tocar código (`siteNav.ts`).

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

- El menú lateral persistente (visible en todo el sitio): tu artículo
  aparece dentro de su módulo, agrupado por `submodule` y, si lo usaste,
  por `subtopic` — en el orden real de lectura (según `order`).
- `/manual/<módulo>/` no es una página de cards: redirige directo al primer
  artículo del módulo (por eso no hace falta crear una "portada" a mano,
  salvo el artículo de introducción que ya exista).
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

Esto hace que el artículo viva en
`/manual/app-movil/control-horario/como-fichar-en-la-app/` y aparezca en el
menú del pill "App móvil" bajo un grupo con el nombre real del módulo web
("Control horario"), con su `submodule` como tema dentro de ese grupo —
mientras que la versión web de "Control horario" sigue intacta y separada
en su propio pill/módulo.

**Regla simple**: la carpeta física decide la URL (y, en el caso de App
móvil, si el artículo cuelga del pill "App móvil"); `module`/`submodule`
deciden qué nombre se muestra y en qué grupo cae dentro de ese pill.
`platforms: [app]` es lo que hace que Astro lo trate como contenido de la
app, no de la web.

**Importante:** dentro de `app-movil/`, cualquier archivo suelto en la raíz
(caso A) o en una subcarpeta (caso B) es válido — pero no dejes archivos de
prueba o carpetas vacías ahí; cada subcarpeta debe corresponder a un módulo
web real que exista en `src/content/manual/`.

## Carpetas actuales

```
src/content/manual/
├── empezar-en-aturnos/
├── manual/
│   ├── cita-previa/
│   ├── configuracion-y-cuenta/
│   ├── control-horario/
│   ├── costes-y-nominas/
│   ├── documentos/
│   ├── general/
│   ├── gestion-de-personal/
│   ├── integraciones-y-api/
│   ├── peticiones-y-cambios/
│   ├── planificacion/
│   ├── pruebas/
│   ├── recursos-y-partes/
│   └── tareas/
├── app-movil/                (ver "El caso de App" — puede tener subcarpetas)
├── gestion-de-proyectos/
├── integraciones-y-hardware/
│   └── integracion-biostar/
└── glosario/                 (ver templateGlossary.md — formato distinto)
```

Si vas a cargar contenido de un módulo de "Documentación" que no está en
esta lista, créale su carpeta dentro de `manual/` — nunca suelta al mismo
nivel que `manual/` ni dentro de otra carpeta de módulo existente (la única
excepción real es `app-movil/`, por el caso B explicado arriba).

## Paso 3 — Guarda y comprueba

Si el sitio está corriendo (`npm run dev`), entra al módulo correspondiente
y confirma que el artículo aparece en su submódulo, con el `title` y la
`description` correctos.
