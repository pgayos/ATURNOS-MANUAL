---
schemaVersion: "1.0"
contentId: "planificacion-dias-estimados-a-trabajar-en-el-mes"
title: "Días estimados a trabajar en el mes"
description: "Información sobre días estimados a trabajar en el mes, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Días estimados a trabajar en el mes"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "dias"
    label: "Dias"
  - id: "estimados"
    label: "Estimados"
  - id: "mes"
    label: "Mes"
  - id: "trabajar"
    label: "Trabajar"
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
    - "https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-en-el-mes/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-en-el-mes/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre días estimados a trabajar en el mes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "ecfb21c330cf72eb13d51a12a49f1a6eaebdd478696a6c206ba0948ba601ee19"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre días estimados a trabajar en el mes, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Es la estimación de los días de trabajo al mes, se calcula con los días de alta en el mes, menos según la configuración: los festivos, menos la parte proporcional de las vacaciones y/o los turnos V´s planificados, menos el descanso semana que el trabajador tengan informado. Todos estos datos son configurables a nivel de empleado.
