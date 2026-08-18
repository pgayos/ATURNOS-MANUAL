---
schemaVersion: "1.0"
contentId: planificacion-horas-trabajadas
title: Horas trabajadas
description: Son el total de las horas presenciales menos el tiempo de descanso en caso de no fichar los descansos según configuración.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
intent: Horas trabajadas
audience:
  - role: Trabajador
    access: applicable
entities:
  - id: horas
    label: Horas
  - id: trabajadas
    label: Trabajadas
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
    - https://manual.aturnos.com/knowledgebase/horas-trabajadas-2/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/horas-trabajadas-2/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre horas trabajadas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/horas-trabajadas-2/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/horas-trabajadas-2/
  contentHash: 92beca801db69f44470007498b95cd277068398426f7269e3850bffbdf592277
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Información sobre horas trabajadas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Son el total de las horas presenciales menos el tiempo de descanso en caso de no fichar los descansos según configuración. Si los descansos se fichan por configuración las horas presenciales y trabajadas son iguales. En cambio si en la configuración, se indica que los descansos no se tienen que fichar se descontará el descanso correspondiente automáticamente.

Para el cálculo del descanso es un día determinado, tiene prioridad el descanso del turno planificado, después si tuviera el descanso informado el trabajador, y finalmente, el descanso por defecto de la configuración.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
