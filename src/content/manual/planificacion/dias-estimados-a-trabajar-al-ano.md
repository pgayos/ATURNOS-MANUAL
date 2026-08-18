---
schemaVersion: "1.0"
contentId: planificacion-dias-estimados-a-trabajar-al-ano
title: Días estimados a trabajar al año
description: "Es la estimación de los días de trabajo al año, se calcula con los días de alta en el año (365 si el trabajador es alta todo el año), menos según la configuración: los festivos, menos la par."
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
intent: Días estimados a trabajar al año
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: ano
    label: Ano
  - id: dias
    label: Dias
  - id: estimados
    label: Estimados
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
    - https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-al-ano/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-al-ano/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre días estimados a trabajar al año?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-al-ano/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/dias-estimados-a-trabajar-al-ano/
  contentHash: b01089b239a84e25288ed4b1ec1048405bb679977d3562deb7feb0f74d2eb258
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Información sobre días estimados a trabajar al año, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Es la estimación de los días de trabajo al año, se calcula con los días de alta en el año (365 si el trabajador es alta todo el año), menos según la configuración: los festivos, menos la parte proporcional de las vacaciones y/o los turnos V´s planificados, menos el descanso semana que el trabajador tengan informado. Todos estos datos son configurables a nivel de empleado.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
