---
schemaVersion: "1.0"
contentId: planificacion-turno-extraordinario
title: Turno extraordinario
description: Tipo de turno que tiene un computo de 0 horas, pero si tiene duración total. Si suman como horas planificadas, pero no como computadas.
contentType: concept
module: Planificación
submodule: Contratos
intent: Turno extraordinario
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: extraordinario
    label: Extraordinario
  - id: turno
    label: Turno
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
    - https://manual.aturnos.com/knowledgebase/turno-extraordinario/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/turno-extraordinario/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre turno extraordinario?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/turno-extraordinario/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/turno-extraordinario/
  contentHash: 3273539fb1d7757565ed0f05b75646483b37183dab73f585f1bb7913415ac443
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Tipo de turno que tiene un computo de 0 horas, pero si tiene duración total. Si suman como horas planificadas, pero no como computadas.

## Qué debes saber
Se utiliza para planificar turnos, como por ejemplo un turno de guardia, para que no sumen al computo del trabajador (horas computadas), que al final es lo que se compara con las horas contrato para obtener un balance.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
