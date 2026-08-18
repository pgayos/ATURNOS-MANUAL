---
schemaVersion: "1.0"
contentId: control-horario-4-6-listado-de-fichajes
title: Listado de fichajes
description: "El listado de fichajes se desglosa en dos pestañas: Fichajes y Fichajes automáticos."
contentType: procedure
module: Control horario
submodule: Fichajes
intent: Listado de fichajes
audience:
  - role: Trabajador
    access: applicable
entities:
  - id: fichajes
    label: Fichajes
  - id: listado
    label: Listado
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
    - https://manual.aturnos.com/knowledgebase/4-6-listado-de-fichajes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-6-listado-de-fichajes/
ai:
  answerableQuestions:
    - ¿Cómo puedo listado de fichajes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-6-listado-de-fichajes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-6-listado-de-fichajes/
  contentHash: 8d03a0860c2bbcab4e3876ecc9f9f575b50fa127d1724bb924d5a36b230ec5b1
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a listado de fichajes, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
El listado de fichajes se desglosa en dos pestañas: Fichajes y Fichajes automáticos. En este primero se muestra un sencillo resumen de los fichajes que se realizan en el control de presencia en un periodo de tiempo (seleccionable en filtro de fecha en la parte superior de la pestaña). Encontramos la siguiente información en el listado:

- Trabajador: nombre del trabajador que ha realizado el marcaje.
- Categoría: categoría del trabajador (ver más sobre las categorías).
- Hora de marcaje: muestra la fecha (dd/mm/aaaa) y la hora en la que se registró el marcaje.
- Dirección: indica si es una entrada o una salida.
- Localización: en el caso de que el marcaje esté asociado a alguna localización (ver más sobre las localizaciones), se indicará en esta columna.
- Computable: cuando se crea un Tipo de Marcaje, se informa si éste computa o no en el horario, en el caso de computar, aparecería un ‘Si’, en el caso contrario un ‘No’ (ver más sobre tipos de fichajes).
- Tipo de marcaje: informa del tipo de marcaje que se ha realizado si hay varios tipos creados: descansos, almuerzo, fumar, etc. (ver más sobre tipos de fichajes).
- Borrar: por último encontramos la opción de poder borrar un marcaje que se haya podido realizar por error.

En el listado de fichajes automáticos encontramos las mismas cabeceras, sin embargo, solo aparecerán los fichajes automáticos, es decir, aquellos realizados por el propio trabajado en el momento que comienza o finaliza la jornada (no mediante petición de fichajes).
