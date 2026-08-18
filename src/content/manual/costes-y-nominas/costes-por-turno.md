---
schemaVersion: "1.0"
contentId: "costes-y-nominas-costes-por-turno"
title: "Costes por turno"
description: "Información sobre costes por turno, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Costes y nóminas"
submodule: "Vacaciones y ausencias"
intent: "Costes por turno"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "costes"
    label: "Costes"
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
    - "https://manual.aturnos.com/knowledgebase/costes-por-turno/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/costes-por-turno/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre costes por turno?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "94c9ad7dccda40b82baad4f0ff081b7356f889820695c44c0ab595ba4e6f3288"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre costes por turno, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

La configuración de este tipo de costes se recomienda cuando el coste que necesita controlar va al total de horas realizadas en un tipo de turno u horario específico independientemente del trabajador que lo realice. Se podrá mantener un control de costes según un turno u horario existente en aTurnos, con opción a relacionarlo a una localización también definida, ejemplo Turno M (Mañanas), Turno T (Tardes), Turno N (Noches) (Ver mas en Tipos de Turno ).

Esta configuración de coste de por turno se realiza desde el menú Planificador – Tipos de turno, al crear o entrar a editar un turno:

* Para ver más información de cómo crear o editar un Tipo de turno puedes consultar los siguientes enlaces: ¿Cómo crear los turnos de trabajo en mi equipo? y ¿Cómo editar un tipo de turno?

Al tener activado el módulo de Costes aparecerán las siguientes opciones relacionadas con el módulo:

- Coste por turno: se debe indicar el valor a imputar por el turno planificado, es decir, cada vez que se planifique ese turno en el cuadrante imputará el valor que se indique en el campo.
- Suplemento: el valor que se indique en este punto se imputará adicionalmente a otros valores de costes que se tengan informados en aTurnos, es decir, si tengo ya informado un coste por categoría e indico un valor al suplemente de un turno, tomará en cuenta ambos valores (por categoría y suplemento del turno) imputando ambos en los informes.
