---
schemaVersion: "1.0"
contentId: control-horario-app-como-fichar
title: Cómo fichar desde la aplicación móvil
description: Artículo de prueba para validar que el módulo "Control horario" puede tener contenido propio en la app, separado del contenido web del mismo módulo.
contentType: procedure
module: Control horario
submodule: General
intent: Fichar desde la app móvil
audience:
  - role: Trabajador
    access: applicable
entities:
  - id: fichaje
    label: Fichaje
synonyms: []
prerequisites: []
platforms:
  - app
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/knowledgebase/como-fichar/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Cómo ficho desde la app móvil?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/como-fichar/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/como-fichar/
  contentHash: "1914a829c943aef29d6d5069f854754250a4dc6891ce6f8c83d13dfc48f5c32e"
  migratedAt: 2026-08-25
labels: []
order: 1
---

## Resumen

Contenido de prueba: la versión app del módulo "Control horario" vive en su propia carpeta (`control-horario-app/`), separada de la versión web (`control-horario/`), aunque comparten el mismo `module`.

## Procedimiento

Desde la app, el trabajador puede fichar tocando el botón de fichaje en la pantalla principal — el flujo es distinto al de la versión web.
