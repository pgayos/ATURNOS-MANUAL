---
schemaVersion: "1.0"
contentId: planificacion-horas-festivas
title: Horas festivas
description: "Son las horas planificadas en días festivos del cuadrante, están afectadas por el día que consideramos festivo según configuración del equipo: “Inicio o fin del turno para identificar el fes."
contentType: reference
module: Planificación
submodule: Cuadrante
intent: Horas festivas
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: festivas
    label: Festivas
  - id: horas
    label: Horas
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
    - https://manual.aturnos.com/knowledgebase/horas-festivas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/horas-festivas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre horas festivas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/horas-festivas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/horas-festivas/
  contentHash: 8ec91e0e557b554c32de49fe0037cf1d7627810ee0491fa80173c1ce096c51c7
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre horas festivas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Son las horas planificadas en días festivos del cuadrante, están afectadas por el día que consideramos festivo según configuración del equipo: “Inicio o fin del turno para identificar el festivo”. Respecto de las planificadas no incluye las horas asociadas a un tipo de absentismos justificado (no productivo para plus de festivos y nocturnidad) ni los absentismos de tipo no justificados, es la diferencia con las horas planificadas al volcar estos datos a nómina.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
