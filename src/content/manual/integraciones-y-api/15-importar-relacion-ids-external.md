---
schemaVersion: "1.0"
contentId: integraciones-y-api-15-importar-relacion-ids-external
title: Importar relación Ids External
description: El administrador podrá relacionar los id external de un equipo a otro con id external distinto a través de la importación sin tener que modificarlo uno a uno.
contentType: concept
module: Integraciones y API
submodule: General
intent: Importar relación Ids External
audience:
  - role: Administrador
    access: applicable
entities:
  - id: external
    label: External
  - id: ids
    label: Ids
  - id: importar
    label: Importar
  - id: relacion
    label: Relacion
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
    - https://manual.aturnos.com/knowledgebase/15-importar-relacion-ids-external/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/15-importar-relacion-ids-external/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importar relación Ids External?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/15-importar-relacion-ids-external/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/15-importar-relacion-ids-external/
  contentHash: 93c43377ca036e0f5ceed4ef6f4b763f05b75e4876b1483d2f6e1ad75ff22753
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre importar relación Ids External, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
El administrador podrá relacionar los id external de un equipo a otro con id external distinto a través de la importación sin tener que modificarlo uno a uno. Para importar el archivo debes iniciar creando un documento Excel con formato CSV Importar relacion Id. External o descarga una de nuestras plantillas

La plantilla del fichero debe contener las siguientes columnas:

- Id. External Origen
- Id. External Destino

Finalmente, debe “Guardar” el documento con formato CSV.

Para importar el archivo, debe seguir los pasos que indicamos en nuestro menú Administrar → Importar/Exportar → Importar (ver Importar ).
