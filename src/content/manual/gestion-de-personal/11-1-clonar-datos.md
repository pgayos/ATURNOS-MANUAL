---
schemaVersion: "1.0"
contentId: "gestion-de-personal-11-1-clonar-datos"
title: "Clonar datos"
description: "Una vez configurados los conceptos de cálculo, los conceptos en nómina y las plantillas, desde RRHH → ACCIONES, se puede clonar la parametrización de la nómina a los equipos que se seleccionen, indicando:."
contentType: procedure
module: "Gestión de personal"
submodule: "General"
intent: "Clonar datos"
audience:
  - role: "RRHH"
    access: applicable
entities:
  - id: "clonar"
    label: "Clonar"
  - id: "datos"
    label: "Datos"
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
    - "https://manual.aturnos.com/knowledgebase/11-1-clonar-datos-2/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/11-1-clonar-datos-2/"
ai:
  answerableQuestions:
    - "¿Cómo puedo clonar datos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "9b7e27813bb919d2ef5b1303085a8fe5fa15721ae4e29d73217c6ac23f80ba48"
  migratedAt: 2026-08-17
---
## Resumen

Una vez configurados los conceptos de cálculo, los conceptos en nómina y las plantillas, desde RRHH → ACCIONES, se puede clonar la parametrización de la nómina a los equipos que se seleccionen, indicando:.

## Contenido

- aTurno origen: Nombre del equipo desde el que se quiere copiar los conceptos de cálculo, nómina y plantilla.
- aTurno destino: Seleccionar los equipos en los que se quiere clonar la parametrización del aTurno origen,
- Marcar los campos a clonar: Plantillas de nómina Cónceptos de cálculo: Las acciones permitidas en los conceptos de cálculo son: Añadir. Solo añade los conceptos de cálculo del equipo de origen al equipo/s de destino siempre que no existan en el equipo/s de destino. Añadir y modificar: Añade los conceptos de cálculo del equipo de origen al equipo/s de destino que no existan en el equipo/s de destino y modifica los existentes. Clonar: Borra todos los conceptos de cálculo del equipo de destino y añade todos los conceptos del equipo de origen al equipo de destino. Se pueden seleccionar todos los conceptos o solo los que se indiquen. Cónceptos de nómina: Se pueden seleccionar todos los conceptos o solo los que se indiquen.
