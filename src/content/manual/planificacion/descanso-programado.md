---
schemaVersion: "1.0"
contentId: planificacion-descanso-programado
title: Descanso programado
description: Estadísticamente es el tiempo descanso que le corresponde al trabajador según la planificación y la configuración.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
intent: Descanso programado
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: descanso
    label: Descanso
  - id: programado
    label: Programado
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
    - https://manual.aturnos.com/knowledgebase/descanso-programado/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/descanso-programado/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre descanso programado?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/descanso-programado/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/descanso-programado/
  contentHash: 66e601c27f4dba9b9a7985b28ecb0c5c329ab2709ccbb9d3758e61356b638772
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre descanso programado, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Estadísticamente es el tiempo descanso que le corresponde al trabajador según la planificación y la configuración. Tiene prioridad para la definición de este descanso el turno planificado, después si tuviera el descanso informado el trabajador y finalmente el descanso por defecto de la configuración.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
