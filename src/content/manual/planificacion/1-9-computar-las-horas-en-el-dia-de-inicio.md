---
schemaVersion: "1.0"
contentId: "planificacion-1-9-computar-las-horas-en-el-dia-de-inicio"
title: "Computar las horas en el día de inicio"
description: "Es muy importante señalar el comportamiento en el pago de las variables del valor que se indica en el campo: “Computar las horas en el día de inicio”."
contentType: concept
module: "Planificación"
submodule: "Turnos y patrones"
intent: "Computar las horas en el día de inicio"
audience:
  - role: "Administrador"
    access: applicable
entities:
  - id: "computar"
    label: "Computar"
  - id: "dia"
    label: "Dia"
  - id: "horas"
    label: "Horas"
  - id: "inicio"
    label: "Inicio"
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
    - "https://manual.aturnos.com/knowledgebase/1-9-computar-las-horas-en-el-dia-de-inicio/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-9-computar-las-horas-en-el-dia-de-inicio/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre computar las horas en el día de inicio?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "da4d1ca8a5cd9d36adda9ea9997ffa1f82b8eb11654b89e0f65ee8ef2c916b79"
  migratedAt: 2026-08-17
---
## Resumen

Es muy importante señalar el comportamiento en el pago de las variables del valor que se indica en el campo: “Computar las horas en el día de inicio”.

## Contenido

Si el valor informado es SI, todas las horas nocturnas se calcularan en el día de inicio y por el contrario si el valor informado es NO, las horas nocturnas se calcularán en el día en que se realizan.

Es decir, en el caso de un turno de noche de 22:00 a 08:00, en el primer caso, las 10 horas nocturnas las calculará en el día de inicio del turno y en el segundo caso, calculará 2 horas nocturnas en el día de inicio del turno y 8 horas nocturnas en el día final del turno.
