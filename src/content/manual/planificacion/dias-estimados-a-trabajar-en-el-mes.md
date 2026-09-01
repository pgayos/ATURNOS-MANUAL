---
schemaVersion: "1.0"
contentId: planificacion-dias-estimados-a-trabajar-en-el-mes
title: Días estimados a trabajar en el mes
description: "Es la estimación de los días de trabajo al mes, se calcula con los días de alta en el mes, menos según la configuración: los festivos, menos la parte proporcional de las vacaciones y/o los t."
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Días estimados a trabajar en el mes
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: dias
    label: Dias
  - id: estimados
    label: Estimados
  - id: mes
    label: Mes
  - id: trabajar
    label: Trabajar
synonyms: []
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
    - https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-en-el-mes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-en-el-mes/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre días estimados a trabajar en el mes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-en-el-mes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-en-el-mes/
  contentHash: a794c11f8f209680041b78c5d31861a01575a3fce5ca05b4434e684828a77782
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre días estimados a trabajar en el mes, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Es la estimación de los días de trabajo al mes, se calcula con los días de alta en el mes, menos según la configuración: los festivos, menos la parte proporcional de las vacaciones y/o los turnos V´s planificados, menos el descanso semana que el trabajador tengan informado. Todos estos datos son configurables a nivel de empleado.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
