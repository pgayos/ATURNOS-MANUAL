---
schemaVersion: "1.0"
contentId: "planificacion-horas-festivas"
title: "Horas festivas"
description: "Información sobre horas festivas, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Planificación"
submodule: "Cuadrante"
intent: "Horas festivas"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
entities:
  - id: "festivas"
    label: "Festivas"
  - id: "horas"
    label: "Horas"
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
    - "https://manual.aturnos.com/knowledgebase/horas-festivas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/horas-festivas/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre horas festivas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "e8172eba611a745d6d808fd510098a1e788141b4a258857319b7e313cdcc957a"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre horas festivas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Son las horas planificadas en días festivos del cuadrante, están afectadas por el día que consideramos festivo según configuración del equipo: “Inicio o fin del turno para identificar el festivo”. Respecto de las planificadas no incluye las horas asociadas a un tipo de absentismos justificado (no productivo para plus de festivos y nocturnidad) ni los absentismos de tipo no justificados, es la diferencia con las horas planificadas al volcar estos datos a nómina.
