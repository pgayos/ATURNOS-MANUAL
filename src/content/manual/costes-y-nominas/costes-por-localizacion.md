---
schemaVersion: "1.0"
contentId: costes-y-nominas-costes-por-localizacion
title: Costes por localización
description: Explica costes por localización y su aplicación en aTurnos.
contentType: concept
module: Costes y nóminas
submodule: General
intent: Costes por localización
audience:
  - role: Planificador
    access: applicable
entities:
  - id: costes
    label: Costes
  - id: localizacion
    label: Localizacion
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
    - https://manual.aturnos.com/knowledgebase/costes-por-localizacion/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/costes-por-localizacion/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre costes por localización?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/costes-por-localizacion/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/costes-por-localizacion/
  contentHash: 4f976abc63adeb137e3906bb802cafd282780e0d26912a9be29d424ac04b0ee1
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre costes por localización, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
El menú cuenta con dos tipos de tabla:

- Tabla por localizaciones: En este reporte se muestran los valores del coste por día de las Localizaciones del equipo, toma en cuenta también los costes “Sin localización” asignada. Los valores que se muestran en la tabla por Localización pueden filtrarse según variables de visualización que requieras (en desplegable superior derecho).

- Tabla total por localización padre: en aTurnos se tiene la posibilidad de establecer un orden de jerarquía por localización o crear estructura de dependencia de una localización sobre otra. En estos casos nos referimos a una “Localización Padre” (tiene localizaciones que dependen de ella). Ver mas en el manual Cambiar Orden. El reporte muestra los valores de costes diarios por cada Localización padre.
