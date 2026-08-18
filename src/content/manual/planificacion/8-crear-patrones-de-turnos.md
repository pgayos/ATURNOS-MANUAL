---
schemaVersion: "1.0"
contentId: planificacion-8-crear-patrones-de-turnos
title: Crear patrones de turnos
description: Los manager o supervisores de los equipos de trabajo, pueden tener una secuencia de trabajo habitual, a lo que en aTurnos llamamos Patrones de turnos.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Crear patrones de turnos
audience:
  - role: Planificador
    access: applicable
entities:
  - id: crear
    label: Crear
  - id: patrones
    label: Patrones
  - id: turnos
    label: Turnos
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
    - https://manual.aturnos.com/knowledgebase/8-crear-patroness-de-turnos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/8-crear-patroness-de-turnos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre crear patrones de turnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/8-crear-patroness-de-turnos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/8-crear-patroness-de-turnos/
  contentHash: 0c95a18046ceb5b9279309b70dbeeac1c006e3881118882893cc681aa29602ce
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Los manager o supervisores de los equipos de trabajo, pueden tener una secuencia de trabajo habitual, a lo que en aTurnos llamamos Patrones de turnos.

## Qué debes saber
Se pueden cargar los patrones desde un archivo completando la plantilla de ejemplo que puedes descargar:

CSV importación de patrones

Si por el contrario, quieres crear tu propio archivo, te contamos los pasos para c rear un documento Excel con las siguientes columnas:

- Descripción: informar en las celdas de las diferentes filas, el nombre del patrón.
- Patrón: indicar en las celdas de las diferentes filas, la secuencia de los tipos de turnos. Por ejemplo, una secuencia tipo es: MMMMMLL. En el caso de que el turno sea partido, se introduce la abreviatura de cada turno separada únicamente por ‘+’. Por ejemplo, si un día se trabajan los turnos de mañana y tarde, se pondrá como M+T.
- Escalonado: se debe informar del número de tipos de turnos que constituyen la secuencia del patrón. Por ejemplo: MMMMMLL, el valor será 7.
- Aplicar a festivos: con valor -1, al aplicar patrón no se inserta turnos en los días festivos del cuadrante. Si es valor 1, se insertan turnos del patrón en los días festivos. Los días festivos deberán estar creados previamente a realizar la importación (ver Festivos ).
- Día de la semana: los patrones pueden comenzar en un día distinto al lunes (por defecto) aquí se hace referencia al día de la semana por el cual se inicia el patrón. Siendo el valor 1 para el lunes, 2 martes, 3 miércoles, …6 sábado y 0 domingo.

A continuación, se debe guardar el documento como formato CSV.

Para importar el archivo se deben seguir los pasos que indicamos en nuestro menú ‘Importar’.

Recuerda que debes asociar los campos de tu archivo con los mismos del listado para completar la importación.
