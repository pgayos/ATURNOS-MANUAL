---
schemaVersion: "1.0"
contentId: "gestion-de-personal-turno-extraordinario"
title: "Turno extraordinario"
description: "Tipo de turno que tiene un computo de 0 horas, pero si tiene duración total. Si suman como horas planificadas, pero no como computadas."
contentType: concept
module: "Gestión de personal"
submodule: "Contratos"
intent: "Turno extraordinario"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "extraordinario"
    label: "Extraordinario"
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
    - "https://manual.aturnos.com/knowledgebase/turno-extraordinario/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/turno-extraordinario/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre turno extraordinario?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "72cbec0672426fe629e07547dc50230e83deef18838771cd061b782fbadee358"
  migratedAt: 2026-08-17
---
## Resumen

Tipo de turno que tiene un computo de 0 horas, pero si tiene duración total. Si suman como horas planificadas, pero no como computadas.

## Contenido

Se utiliza para planificar turnos, como por ejemplo un turno de guardia, para que no sumen al computo del trabajador (horas computadas), que al final es lo que se compara con las horas contrato para obtener un balance.
