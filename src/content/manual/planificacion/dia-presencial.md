---
schemaVersion: "1.0"
contentId: planificacion-dia-presencial
title: Día presencial
description: Horas presenciales dentro del tiempo planificado.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Día presencial
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: dia
    label: Dia
  - id: presencial
    label: Presencial
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
    - https://manual.aturnos.com/knowledgebase/dia/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/dia/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre día presencial?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/dia/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/dia/
  contentHash: 0965351abec0525e40ee8ccc605c2cd715918f550fb2e85c39166546114c417e
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre día presencial, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Horas presenciales dentro del tiempo planificado. Es el tiempo fichado dentro del inicio y fin del turno planificado. Corresponde con un día natural y un mismo trabajador. Puede haber planificado varios turnos en un mismo día, por ejemplo, si hace el turno de mañana y de tarde.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
