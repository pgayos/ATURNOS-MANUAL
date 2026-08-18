---
schemaVersion: "1.0"
contentId: planificacion-4-incremento-de-la-jornada-laboral
title: Incremento de la jornada laboral
description: Complementaría a la función de “Añadir horas “, existe la posibilidad de incrementar la jornada en horas al inicio o al fin de la misma. Este incremento se realiza en base a los tipos de horas creados.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Incremento de la jornada laboral
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: incremento
    label: Incremento
  - id: jornada
    label: Jornada
  - id: laboral
    label: Laboral
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
    - https://manual.aturnos.com/knowledgebase/4-incremento-de-la-jornada-laboral/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-incremento-de-la-jornada-laboral/
ai:
  answerableQuestions:
    - ¿Cómo puedo incremento de la jornada laboral?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-incremento-de-la-jornada-laboral/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-incremento-de-la-jornada-laboral/
  contentHash: cbb3ab68452a144a649ce69cd44ef35919dbdfe445a1559abf4738cdbb46f6ee
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Complementaría a la función de “Añadir horas “, existe la posibilidad de incrementar la jornada en horas al inicio o al fin de la misma. Este incremento se realiza en base a los tipos de horas creados.

## Procedimiento
Incrementa el número de horas de la jornada de los trabajadores visualizados en el cuadrante o filtrados en el día seleccionado. En el formulario, se define el tipo de hora y si se encuentra asociada o no a una localización y una descripción del motivo del incremento de la jornada.

A continuación, puedes visualizar cómo se incrementa la jornada a los trabajadores del cuadrante en un día concreto

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
