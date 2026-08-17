---
schemaVersion: "1.0"
contentId: "planificacion-10-8-listado-de-comprobacion"
title: "Listado de comprobación"
description: "A través de RRHH → NOMINA → LISTADO DE COMPROBACION se si la planificación del trabajador genera un concepto en nómina."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Listado de comprobación"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "comprobacion"
    label: "Comprobacion"
  - id: "listado"
    label: "Listado"
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
    - "https://manual.aturnos.com/knowledgebase/10-8-listado-de-comprobacion/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/10-8-listado-de-comprobacion/"
ai:
  answerableQuestions:
    - "¿Cómo puedo listado de comprobación?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "7a51ac21791ced5d505540c5b9fb020003006634aedf6d031a20b7a6c3be7215"
  migratedAt: 2026-08-17
---
## Resumen

A través de RRHH → NOMINA → LISTADO DE COMPROBACION se si la planificación del trabajador genera un concepto en nómina.

## Contenido

Se utiliza cuando en el cálculo no se utilizan conceptos complejos (ya comentado en los puntos 5, 6, 10.4 y 10. 5 de este Manual).

En el listado que se ejecute se comprueba por trabajador, día y turno, horas, si alguno de ellos genera un concepto de nómina.

Se solicita indicando la fecha de inicio, fin y seleccionando los equipos

Al solicitar, la aplicación genera un reporte

Que se encuentra disponible una vez termine la ejecución en RRHH → PETICIONES DE REPORTE

Siguiendo el ejemplo, en el listado se visualizan los trabajadores con turno G17 que abona solo el concepto K285
