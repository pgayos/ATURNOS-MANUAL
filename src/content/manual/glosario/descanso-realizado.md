---
schemaVersion: "1.0"
contentId: control-horario-descanso-realizado
title: Descanso realizado
description: Estadísticamente es el tiempo de descanso realizado en toda la jornada.
contentType: reference
module: Glosario
submodule: Configuración
subtopic: ""
intent: Descanso realizado
audience:
  - role: Administrador
    access: applicable
entities:
  - id: descanso
    label: Descanso
  - id: realizado
    label: Realizado
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
    - https://manual.aturnos.com/knowledgebase/descanso-realizado/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/descanso-realizado/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre descanso realizado?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/descanso-realizado/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/descanso-realizado/
  contentHash: f10a633241ff15e62893de5d4d907d783a61ab3e224905dd3c736f1dd2f78092
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre descanso realizado, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Estadísticamente es el tiempo de descanso realizado en toda la jornada. Se consideran descansos los tramos dentro de la jornada de marcajes de salida y entrada computables. Pueden existir varios descansos en la jornada, considerándolo descanso cuando se vuelve a tener otro marcaje de entrada en la misma jornada. Se tiene en cuenta el tiempo máximo de descanso en la configuración del Control de Presencia para controlar máximos de tiempo de descanso.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
