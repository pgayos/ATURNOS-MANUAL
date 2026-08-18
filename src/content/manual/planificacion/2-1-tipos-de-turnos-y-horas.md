---
schemaVersion: "1.0"
contentId: planificacion-2-1-tipos-de-turnos-y-horas
title: Tipos de turnos y horas
description: En este listado podremos visualizar todos aquellos tipos de turnos, absentismos y tipos de horas de los equipos que se gestionan como superusuario.
contentType: procedure
module: Planificación
submodule: Usuarios y perfiles
intent: Tipos de turnos y horas
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: horas
    label: Horas
  - id: tipos
    label: Tipos
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
    - https://manual.aturnos.com/knowledgebase/7-1-tipos-de-turnos-y-horas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-1-tipos-de-turnos-y-horas/
ai:
  answerableQuestions:
    - ¿Cómo puedo tipos de turnos y horas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-1-tipos-de-turnos-y-horas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-1-tipos-de-turnos-y-horas/
  contentHash: e012b9bb915d4f00d524bc6353ea064086f591dc90f272bafd0f3426897c375a
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En este listado podremos visualizar todos aquellos tipos de turnos, absentismos y tipos de horas de los equipos que se gestionan como superusuario.

## Procedimiento
Se pueden seleccionar tantos equipos se necesite cargar los datos de los tipos de turnos, absentismos o tipos de horas. Para facilitar la búsqueda, se puede introducir el nombre del equipo de trabajo. También se podrán elegir todos aquellos equipos que dependan de un equipo o jerarquía superior.

Una vez seleccionados los equipos, haciendo clic en “Cargar” se mostrarán los resultados.

Cada tipo de evento tiene su listado al que acceder en cada pestaña:

- Turnos

- Absentismos

- Tipos de horas

Los resultados mostrados se pueden delimitar en varias páginas, según el número de eventos que se hayan obtenido. De la misma forma, estos resultados se pueden ordenar de formas ascendente y descendente tanto de forma alfabética o numérica, desde las cabeceras de cada columna.

Desde esta función de “Ocultar” se pueden dejar de mostrar columnas que no se necesitan descargar.

A través de “Acciones”, se tiene la opción de copiar o descargar el listado con los resultados en Excel o PDF.
