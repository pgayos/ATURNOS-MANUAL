---
schemaVersion: "1.0"
contentId: "planificacion-presencia-en-horario"
title: "Presencia en horario"
description: "Total de horas presenciales dentro del tiempo planificado. Es el tiempo fichado dentro del inicio y fin del turno planificado."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Presencia en horario"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "horario"
    label: "Horario"
  - id: "presencia"
    label: "Presencia"
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
    - "https://manual.aturnos.com/knowledgebase/presencia-en-horario/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/presencia-en-horario/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre presencia en horario?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "ddc9c73ca40190bb69eb5c6da8b8540555faba1e9a0e8be3721fedc17bf9a4ca"
  migratedAt: 2026-08-17
---
## Resumen

Total de horas presenciales dentro del tiempo planificado. Es el tiempo fichado dentro del inicio y fin del turno planificado.

## Contenido

Es una variable estadística del reporte por detalle del trabajador en el control de presencia.

## Revisión requerida

La fuente pública de **Presencia en horario** contiene muy poca información textual. Se ha conservado todo el texto útil disponible, pero el equipo de Producto debe ampliar y validar este borrador antes de aprobarlo.
