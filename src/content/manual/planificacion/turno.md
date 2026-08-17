---
schemaVersion: "1.0"
contentId: "planificacion-turno"
title: "Turno en aTurnos"
description: "Es la unidad mínima de trabajo de planificación en aTurnos. Cada tipo de turno representa una duración de tiempo, este tiempo puede computar o no computar en horas según configuración del turno."
contentType: procedure
module: "Planificación"
submodule: "Cuadrante"
intent: "Turno en aTurnos"
audience:
  - role: "Planificador"
    access: applicable
entities:
  - id: "turno"
    label: "Turno"
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
    - "https://manual.aturnos.com/knowledgebase/turno/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/turno/"
ai:
  answerableQuestions:
    - "¿Cómo puedo turno en aTurnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "f6ee33abaf15f3064aadd5edc26bf7f7a9a85fb539969c97dcee0996dc82c7a6"
  migratedAt: 2026-08-17
---
## Resumen

Es la unidad mínima de trabajo de planificación en aTurnos. Cada tipo de turno representa una duración de tiempo, este tiempo puede computar o no computar en horas según configuración del turno.

## Contenido

En un equipo de trabajo se pueden crear todos los tipos de turnos que se estimen necesarios, se verán planificados en el Cuadrante identificados con letras y/o números a modo de abreviatura.

(Ver en el manual los tipos de turno y cómo crear/editar un tipo de turno )

A nivel estadísticos, los turnos se define como el total de turnos en un periodo de tiempo seleccionado. Incluye los turnos con cualquier tipo de absentismo. No incluye ningún tipo de horas. Por ejemplo, si en un mismo día tiene un turno de mañana y otro de tarde, contará dos turnos.

(Ver en el manual listado de variables de reportes )
