---
schemaVersion: "1.0"
contentId: "planificacion-horas-trabajadas"
title: "Horas trabajadas"
description: "Información sobre horas trabajadas, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Horas trabajadas"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "horas"
    label: "Horas"
  - id: "trabajadas"
    label: "Trabajadas"
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
    - "https://manual.aturnos.com/knowledgebase/horas-trabajadas-2/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/horas-trabajadas-2/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre horas trabajadas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "ddfba67cbaf96f9e61f5e764e48ff72f99d733e23fc6b160b87b993f260ed6ef"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre horas trabajadas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Son el total de las horas presenciales menos el tiempo de descanso en caso de no fichar los descansos según configuración. Si los descansos se fichan por configuración las horas presenciales y trabajadas son iguales. En cambio si en la configuración, se indica que los descansos no se tienen que fichar se descontará el descanso correspondiente automáticamente.

Para el cálculo del descanso es un día determinado, tiene prioridad el descanso del turno planificado, después si tuviera el descanso informado el trabajador, y finalmente, el descanso por defecto de la configuración.
