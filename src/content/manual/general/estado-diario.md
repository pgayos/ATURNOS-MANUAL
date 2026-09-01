---
schemaVersion: "1.0"
contentId: general-estado-diario
title: Estado diario
description: Diferencia en horas entre las horas planificadas menos las horas de absentismos y menos las horas presenciales.
contentType: concept
module: General
submodule: General
subtopic: ""
intent: Estado diario
audience:
  - role: Administrador
    access: applicable
entities:
  - id: diario
    label: Diario
  - id: estado
    label: Estado
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
    - https://manual.aturnos.com/knowledgebase/estado-diario/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/estado-diario/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre estado diario?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/estado-diario/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/estado-diario/
  contentHash: a100dc21a33804d62a0cf1ae0136761dd3c9734d88e86a67b0575749cb06a16c
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Diferencia en horas entre las horas planificadas menos las horas de absentismos y menos las horas presenciales.

## Qué debes saber
Estado diario= Horas planificadas – (horas de absentismos +horas presenciales)

## Revisión requerida

La fuente pública de **Estado diario** contiene muy poca información textual. Se ha conservado todo el texto útil disponible, pero el equipo de Producto debe ampliar y validar este borrador antes de aprobarlo.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
