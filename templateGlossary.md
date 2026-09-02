---
schemaVersion: "1.0"
contentId: glosario-<slug-del-termino> # único, ej: glosario-absentismo
title: <Nombre del término> # mínimo 8 caracteres
order: 1
description: <Definición breve, mínimo 30 caracteres>
contentType: concept # o procedure/reference/faq/troubleshooting según aplique
module: Glosario # fijo, siempre "Glosario"
submodule: Glosario # obligatorio, pero decorativo (no se usa)
# subtopic:                                      # opcional, se omite si no aplica
intent: <qué busca alguien al leer esto>
audience:
  - role: Trabajador
    access: applicable
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
entities: []
synonyms: [] # otros nombres del mismo término, si los hay
prerequisites: []
platforms:
  - web
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/knowledgebase/<slug-original>/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué es <término>?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/<slug-original>/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/<slug-original>/
  contentHash: <sha256, 64 caracteres>
  migratedAt: 2026-09-02
labels: []
---

## Resumen

<Definición del término>

```

## 6. Pasos

1. Copiar la plantilla de arriba.
2. Completar `contentId`, `title`, `description`, `intent`, `sourceUrls`/`originUrls`/
   `redirectFrom` y `contentHash` (si el término viene de una fuente real), y el cuerpo.
3. Guardarlo como `src/content/manual/glosario/<slug-del-termino>.md`.
4. Verificar con `npm run dev` (o `npm run build`) que aparece en `/manual/glosario/`,
   en la letra correcta, y que `/manual/glosario/<slug-del-termino>/` carga bien.

## Lo mínimo que hay que decidir por término

`contentId`, `title`, `description`, `intent`, la fuente (`sourceUrls`/`originUrls`/
`redirectFrom`/`contentHash`) y el cuerpo con la definición. Todo lo demás es
boilerplate repetible.
```
