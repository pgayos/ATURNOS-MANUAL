---
schemaVersion: "1.0"
contentId: "gestion-de-personal-4-6-cambios-a-deber"
title: "Cambios a deber"
description: "Información sobre cambios a deber, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "Altas y bajas"
intent: "Cambios a deber"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "cambios"
    label: "Cambios"
  - id: "deber"
    label: "Deber"
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
    - "https://manual.aturnos.com/knowledgebase/4-6-debe-haber-turnos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/4-6-debe-haber-turnos/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre cambios a deber?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "eed41b6024a2662d5fd2e8f283982a972b88bfb84e51dd8f439830537817b723"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre cambios a deber, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

El administrador puede entrar en detalle y saber si los cambios han sido devueltos o no, comprobando si los trabajadores del equipo se deben turnos. Se puede acceder a esta información desde el menú Registro → Cambios a deber, además esta información se puede filtrar por la fecha que se desee en la barra de la parte superior. Los cambios a deber irán desapareciendo de esta lista según se vayan devolviendo.

Estas deudas de cambios pendientes por devolver, se generan cuando se solicita un “Libre o Doblaje” desde el cuadrante, mediante la opción “Hacer cambio” y se haga clic en la opción “dejar a deber” (ver más en: Hacer cambio).

El administrador, a través de esta pantalla, puede obtener todos los detalles de los cambios a deber de todos los trabajadores del equipo. Para ello, es necesario que en esta pantalla, a la que se accede desde Registro → Cambios a deber, se haga clic sobre el icono del “ojo”.

Desde icono de “ver” también se puede saber si el cambio de turno ha sido devuelto por el trabajador que le debía un turno a otro trabajador: indicando qué día es el que devuelve y cuándo se realizó esta devolución. Además, si el administrador no está de acuerdo o quisiera deshacer el cambio a deber, podría hacerlo haciendo clic en el botón “Devolver cambio” el cual revertiría el Libre o doblaje a deber.
