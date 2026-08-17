---
schemaVersion: "1.0"
contentId: "general-estado-diario"
title: "Estado diario"
description: "Diferencia en horas entre las horas planificadas menos las horas de absentismos y menos las horas presenciales."
contentType: concept
module: "General"
submodule: "General"
intent: "Estado diario"
audience:
  - role: "Administrador"
    access: applicable
entities:
  - id: "diario"
    label: "Diario"
  - id: "estado"
    label: "Estado"
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
    - "https://manual.aturnos.com/knowledgebase/estado-diario/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/estado-diario/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre estado diario?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "066ee2e8595bd5b89de281c781d126ad3559b374aa58f2ef17237ed525b3b6cd"
  migratedAt: 2026-08-17
---
## Resumen

Diferencia en horas entre las horas planificadas menos las horas de absentismos y menos las horas presenciales.

## Contenido

Estado diario= Horas planificadas – (horas de absentismos +horas presenciales)

## Revisión requerida

La fuente pública de **Estado diario** contiene muy poca información textual. Se ha conservado todo el texto útil disponible, pero el equipo de Producto debe ampliar y validar este borrador antes de aprobarlo.
