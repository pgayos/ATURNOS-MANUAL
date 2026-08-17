---
schemaVersion: "1.0"
contentId: "planificacion-descanso-programado"
title: "Descanso programado"
description: "Información sobre descanso programado, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Descanso programado"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "descanso"
    label: "Descanso"
  - id: "programado"
    label: "Programado"
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
    - "https://manual.aturnos.com/knowledgebase/descanso-programado/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/descanso-programado/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre descanso programado?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "aa2cdacebe89b4b1864617767f293bbfb21da8521ad85be7e38b90a394746de2"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre descanso programado, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Estadísticamente es el tiempo descanso que le corresponde al trabajador según la planificación y la configuración. Tiene prioridad para la definición de este descanso el turno planificado, después si tuviera el descanso informado el trabajador y finalmente el descanso por defecto de la configuración.
