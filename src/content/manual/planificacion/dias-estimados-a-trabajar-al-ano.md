---
schemaVersion: "1.0"
contentId: "planificacion-dias-estimados-a-trabajar-al-ano"
title: "Días estimados a trabajar al año"
description: "Información sobre días estimados a trabajar al año, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Días estimados a trabajar al año"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "ano"
    label: "Ano"
  - id: "dias"
    label: "Dias"
  - id: "estimados"
    label: "Estimados"
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
    - "https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-al-ano/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-al-ano/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre días estimados a trabajar al año?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "db5157b36f9557def9f7bdbc6fc3770318983e545ef4f20141799f89b0e05990"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre días estimados a trabajar al año, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Es la estimación de los días de trabajo al año, se calcula con los días de alta en el año (365 si el trabajador es alta todo el año), menos según la configuración: los festivos, menos la parte proporcional de las vacaciones y/o los turnos V´s planificados, menos el descanso semana que el trabajador tengan informado. Todos estos datos son configurables a nivel de empleado.
