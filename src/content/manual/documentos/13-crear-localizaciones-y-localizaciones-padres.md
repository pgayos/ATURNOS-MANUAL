---
schemaVersion: "1.0"
contentId: "documentos-13-crear-localizaciones-y-localizaciones-padres"
title: "Crear localizaciones y localizaciones padres"
description: "Información sobre crear localizaciones y localizaciones padres, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Documentos"
submodule: "General"
intent: "Crear localizaciones y localizaciones padres"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
entities:
  - id: "crear"
    label: "Crear"
  - id: "localizaciones"
    label: "Localizaciones"
  - id: "padres"
    label: "Padres"
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
    - "https://manual.aturnos.com/knowledgebase/13-importacion-de-localizaciones/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/13-importacion-de-localizaciones/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre crear localizaciones y localizaciones padres?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "9ea00dfddb69a0d91aa995cd3105eb019c0e843391febb6091d54463860b3fe8"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre crear localizaciones y localizaciones padres, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

En muchas ocasiones la gran dimensión de alguna empresas hace complicado organizar a los equipos de trabajo (ver Así se organizan las grandes empresas en aTurnos ), en aTurnos se ofrece la herramienta de realizar una jerarquía por localizaciones (ver Localizaciones ), además de generar una estructura de árbol con las denominadas localizaciones padres.

Para esta importación se necesita descargar la plantilla de ejemplo donde completar los datos necesarios:

CSV importación localizaciones

También es posible crearla desde un archivo de Excel, teniendo que contener los siguientes campos:

- Descripción: nombre de la localización que se importará al equipo de aTurnos. Ejemplo: Planta 1.
- Localización padre: informar en la celda de la columna, si la localización corresponde o depende de una localización superior (localización padre).

Antes de iniciar la importación guarda tu documento como formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú “ Importar “.
