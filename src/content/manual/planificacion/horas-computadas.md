---
schemaVersion: "1.0"
contentId: "planificacion-horas-computadas"
title: "Horas computadas"
description: "Información sobre horas computadas, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Horas computadas"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "computadas"
    label: "Computadas"
  - id: "horas"
    label: "Horas"
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
    - "https://manual.aturnos.com/knowledgebase/horas-computadas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/horas-computadas/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre horas computadas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "0676c1984ce15658cfbd636e5d6feecdbc88c14659378263fc28ccc3050db613"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre horas computadas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Total de las horas computadas de los turnos y horas informadas en cuadrante (no incluye horas extras ni complementarias). Son las horas que se comparan con los contratos, las horas legales de los turnos y horas informadas en el cuadrante. Específicamente, se tiene en cuenta la duración computada del turno y el coeficiente del tipo de horas que se planifica. Se excluyen las horas de los turnos y las horas afectadas por absentismos no computables.

Estas horas computadas son las que se comparan con las horas contrato del trabajador para poder obtener el balance de horas.
