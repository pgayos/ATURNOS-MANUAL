---
schemaVersion: "1.0"
contentId: gestion-de-personal-11-1-clonar-datos
title: Clonar datos
description: Una vez configurados los conceptos de cálculo, los conceptos en nómina y las plantillas, desde RRHH → ACCIONES, se puede clonar la parametrización de la nómina a los equipos que se seleccionen, indicando:.
contentType: procedure
module: Gestión de personal
submodule: General
intent: Clonar datos
audience:
  - role: RRHH
    access: applicable
entities:
  - id: clonar
    label: Clonar
  - id: datos
    label: Datos
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
    - https://manual.aturnos.com/knowledgebase/11-1-clonar-datos-2/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/11-1-clonar-datos-2/
ai:
  answerableQuestions:
    - ¿Cómo puedo clonar datos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/11-1-clonar-datos-2/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/11-1-clonar-datos-2/
  contentHash: 6c086faa2273540a3dc52ed5502537b347af07261ccd3b147267ac78899c8081
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Una vez configurados los conceptos de cálculo, los conceptos en nómina y las plantillas, desde RRHH → ACCIONES, se puede clonar la parametrización de la nómina a los equipos que se seleccionen, indicando:.

## Procedimiento
- aTurno origen: Nombre del equipo desde el que se quiere copiar los conceptos de cálculo, nómina y plantilla.
- aTurno destino: Seleccionar los equipos en los que se quiere clonar la parametrización del aTurno origen,
- Marcar los campos a clonar: Plantillas de nómina Cónceptos de cálculo: Las acciones permitidas en los conceptos de cálculo son: Añadir. Solo añade los conceptos de cálculo del equipo de origen al equipo/s de destino siempre que no existan en el equipo/s de destino. Añadir y modificar: Añade los conceptos de cálculo del equipo de origen al equipo/s de destino que no existan en el equipo/s de destino y modifica los existentes. Clonar: Borra todos los conceptos de cálculo del equipo de destino y añade todos los conceptos del equipo de origen al equipo de destino. Se pueden seleccionar todos los conceptos o solo los que se indiquen. Cónceptos de nómina: Se pueden seleccionar todos los conceptos o solo los que se indiquen.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![11.1 Clonar datos](/media/manual/11-1-clonar-datos-bb1288ac1c.png)
