---
schemaVersion: "1.0"
contentId: planificacion-1-9-computar-las-horas-en-el-dia-de-inicio
title: Computar las horas en el día de inicio
description: "Es muy importante señalar el comportamiento en el pago de las variables del valor que se indica en el campo: “Computar las horas en el día de inicio”."
contentType: concept
module: Planificación
submodule: Turnos y patrones
intent: Computar las horas en el día de inicio
audience:
  - role: Administrador
    access: applicable
entities:
  - id: computar
    label: Computar
  - id: dia
    label: Dia
  - id: horas
    label: Horas
  - id: inicio
    label: Inicio
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
    - https://manual.aturnos.com/knowledgebase/1-9-computar-las-horas-en-el-dia-de-inicio/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-9-computar-las-horas-en-el-dia-de-inicio/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre computar las horas en el día de inicio?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-9-computar-las-horas-en-el-dia-de-inicio/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-9-computar-las-horas-en-el-dia-de-inicio/
  contentHash: 9aa54615df7727fd9d5fb487401394e0928252b1dbab60b18d125e566797b018
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Es muy importante señalar el comportamiento en el pago de las variables del valor que se indica en el campo: “Computar las horas en el día de inicio”.

## Qué debes saber
Si el valor informado es SI, todas las horas nocturnas se calcularan en el día de inicio y por el contrario si el valor informado es NO, las horas nocturnas se calcularán en el día en que se realizan.

Es decir, en el caso de un turno de noche de 22:00 a 08:00, en el primer caso, las 10 horas nocturnas las calculará en el día de inicio del turno y en el segundo caso, calculará 2 horas nocturnas en el día de inicio del turno y 8 horas nocturnas en el día final del turno.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.9 Computar las horas en el día de inicio](/media/manual/1-9-computar-las-horas-en-el-dia-de-inicio-e46328d16f.png)
