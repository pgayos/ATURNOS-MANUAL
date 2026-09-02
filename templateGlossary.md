# Plantilla de término de glosario

Este archivo es solo de referencia — NO vive dentro de `src/content/manual/`,
así que Astro nunca lo lee, valida ni renderiza (el loader de la colección
solo mira `./src/content/manual`, ver `content.config.ts`). Sirve para
copiar el bloque de abajo al crear un término real en
`src/content/manual/glosario/<slug-del-termino>.md`.

---

```yaml
---
schemaVersion: "1.0"                     # Obligatorio. Fijo, siempre "1.0".
contentId: glosario-<slug-del-termino>   # Obligatorio, único. Ej: glosario-absentismo
title: <Nombre del término>              # Obligatorio, mínimo 8 caracteres.
order: 1                                 # Opcional (default: 1). No afecta el orden del glosario:
                                          # la página siempre ordena por `title`, así que este campo
                                          # es irrelevante acá, pero hay que dejarlo igual.
description: <definición breve>          # Obligatorio, PERO sin mínimo de 30 caracteres para
                                          # contentType: glossary (ver el superRefine en
                                          # content.config.ts). Puede ser tan corta como sea
                                          # la definición real.
contentType: glossary                    # Obligatorio. Este valor es el que activa la excepción
                                          # del mínimo de `description`.
module: Glosario                         # Obligatorio. Fijo, siempre "Glosario" — es lo que hace
                                          # que el término entre a /manual/glosario/ en vez de al
                                          # sistema módulo→submódulo→subtopic normal.
submodule: <cualquier texto>             # Obligatorio POR SCHEMA (no puede faltar), pero DECORATIVO
                                          # para el glosario: la letra real de agrupación se calcula
                                          # sola desde `title` (src/lib/slug.ts → firstLetter). Este
                                          # valor no se lee en ningún lado — no hace falta que coincida.
# subtopic:                              # NO SE USA. Es opcional en el schema, así que se omite
                                          # directamente (el glosario no tiene tercer nivel).
intent: <qué busca alguien al leer esto> # Obligatorio, igual que en cualquier artículo.
audience:                                # Obligatorio, al menos 1 entrada.
  - role: Trabajador                     # El glosario no distingue por rol en el original, así que
    access: applicable                   # lo razonable es marcarlo aplicable a todos los roles.
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
entities: []                             # Obligatorio (el array en sí), pero puede ir vacío.
                                          # Útil si querés mapear acá los "Related Articles" del
                                          # glosario original.
synonyms: []                             # Opcional (default: []).
prerequisites: []                        # Opcional (default: []). El glosario normalmente no tiene.
platforms:                               # Obligatorio.
  - web
governance:                              # Obligatorio, objeto completo.
  status: draft                          # Obligatorio.
  owner: Equipo de Producto de aTurnos   # Obligatorio.
  reviewer: null                         # Obligatorio (puede ser null).
  reviewedAt: null                       # Obligatorio (puede ser null).
  reviewDueAt: null                      # Obligatorio (puede ser null).
  sourceUrls:                            # Obligatorio, la URL real del término en el glosario viejo.
    - https://manual.aturnos.com/glosario/<slug-original>/
  redirectsFrom: []                      # Opcional (default: []).
ai:                                      # Obligatorio, objeto completo.
  answerableQuestions:                   # Obligatorio (array, puede tener 0+ preguntas).
    - ¿Qué es <término>?
  excludedQuestions: []                  # Obligatorio (el array en sí).
  sensitivity: public                    # Obligatorio.
  chunking: by-section                   # Obligatorio. Fijo, siempre "by-section".
readingTime: 1                           # Obligatorio. Las definiciones son cortas, casi siempre 1.
featured: false                          # Opcional (default: false).
migration:                               # Obligatorio, objeto completo.
  sourceCount: 1                         # Obligatorio.
  originUrls:                            # Obligatorio, mínimo 1 URL.
    - https://manual.aturnos.com/glosario/<slug-original>/
  redirectFrom:                          # Obligatorio, mínimo 1 URL.
    - https://manual.aturnos.com/glosario/<slug-original>/
  contentHash: <sha256, 64 caracteres>   # Obligatorio, exactamente 64 caracteres.
  migratedAt: 2026-09-02                 # Obligatorio.
labels: []                               # Opcional (default: []). Usar ["PENDIENTE"] si el término
                                          # necesita revisión editorial antes de publicarse.
---

## Resumen

<Definición del término, tal como aparece en la fuente>
```

## Lo mínimo que hay que decidir por término

Todo lo demás de arriba es boilerplate repetible entre términos. Lo que realmente cambia
cada vez es: `contentId`, `title`, `description`, `intent`, `sourceUrls`/`originUrls`/
`redirectFrom` (la URL del término original), `contentHash`, y el cuerpo con la definición.
