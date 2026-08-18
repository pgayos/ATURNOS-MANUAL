---
schemaVersion: "1.0"
contentId: planificacion-15-borrar-cuadrante
title: Borrar cuadrante
description: La opción ‘Borrar cuadrante’ permite al administrador borrar la planificación de turnos que tenga el trabajador.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Borrar cuadrante
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: borrar
    label: Borrar
  - id: cuadrante
    label: Cuadrante
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
    - https://manual.aturnos.com/knowledgebase/15-borrar-cuadrante/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/15-borrar-cuadrante/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre borrar cuadrante?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/15-borrar-cuadrante/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/15-borrar-cuadrante/
  contentHash: 757cf271a0fc1450f2306096b0ce2c34528970bd123501362e1831632918df6c
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre borrar cuadrante, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
La opción ‘Borrar cuadrante’ permite al administrador borrar la planificación de turnos que tenga el trabajador. Únicamente se borrarán los turnos visibles en el cuadrante. Si el cuadrante tiene la vista de una semana, solo se eliminará la planificación de esa semana.

Se puede borrar:

- Planificación: como turnos, horas, absentismos y recursos asociados (este último si el equipo tiene el Módulo de Recursos activado).
- Vacaciones: borrará las vacaciones planificadas dentro del período visible.
- Turnos de 0 horas: es aquel que su duración total y computada es de cero horas (turno sin horas), estos turnos se identifican en el cuadrante con el color naranja.

Cada vez que se borre el cuadrante, el sistema preguntará si se quiere actualizar la fecha fin de planificación.

A continuación, se puede ver cómo borrar el cuadrante de un trabajador.
