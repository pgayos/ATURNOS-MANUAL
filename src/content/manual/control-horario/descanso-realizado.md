---
schemaVersion: "1.0"
contentId: "control-horario-descanso-realizado"
title: "Descanso realizado"
description: "Información sobre descanso realizado, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Control horario"
submodule: "Configuración"
intent: "Descanso realizado"
audience:
  - role: "Administrador"
    access: applicable
entities:
  - id: "descanso"
    label: "Descanso"
  - id: "realizado"
    label: "Realizado"
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - "https://manual.aturnos.com/knowledgebase/descanso-realizado/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/descanso-realizado/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre descanso realizado?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "232b0f88e83340704722b6b829acbe2222f5677086ebd0ea87206668eca26d99"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre descanso realizado, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Estadísticamente es el tiempo de descanso realizado en toda la jornada. Se consideran descansos los tramos dentro de la jornada de marcajes de salida y entrada computables. Pueden existir varios descansos en la jornada, considerándolo descanso cuando se vuelve a tener otro marcaje de entrada en la misma jornada. Se tiene en cuenta el tiempo máximo de descanso en la configuración del Control de Presencia para controlar máximos de tiempo de descanso.
