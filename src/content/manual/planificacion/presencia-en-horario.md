---
schemaVersion: "1.0"
contentId: planificacion-presencia-en-horario
title: Presencia en horario
description: Total de horas presenciales dentro del tiempo planificado. Es el tiempo fichado dentro del inicio y fin del turno planificado.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Presencia en horario
audience:
  - role: Trabajador
    access: applicable
entities:
  - id: horario
    label: Horario
  - id: presencia
    label: Presencia
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
    - https://manual.aturnos.com/knowledgebase/presencia-en-horario/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/presencia-en-horario/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre presencia en horario?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/presencia-en-horario/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/presencia-en-horario/
  contentHash: 7193e511ba6bc2e63dcab7ce3ecb8c9acab3953f90d5cf50df15895597f8e78c
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Total de horas presenciales dentro del tiempo planificado. Es el tiempo fichado dentro del inicio y fin del turno planificado.

## Qué debes saber
Es una variable estadística del reporte por detalle del trabajador en el control de presencia.

## Revisión requerida

La fuente pública de **Presencia en horario** contiene muy poca información textual. Se ha conservado todo el texto útil disponible, pero el equipo de Producto debe ampliar y validar este borrador antes de aprobarlo.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
