---
schemaVersion: "1.0"
contentId: "gestion-de-personal-2-imputacion-de-tareas"
title: "Imputación de tareas"
description: "Una vez logeado en el sistema, se accede a la ventana de inicio visualizando la tabla de tareas, así como diversas opciones a las que se tendrá acceso en el menú lateral izquierdo."
contentType: procedure
module: "Gestión de personal"
submodule: "General"
intent: "Imputación de tareas"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "imputacion"
    label: "Imputacion"
  - id: "tareas"
    label: "Tareas"
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
    - "https://manual.aturnos.com/knowledgebase/6-1-imputacion-de-tareas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/6-1-imputacion-de-tareas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo imputación de tareas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "2acc8a76b6a913f649bf6034cff6b35bc27ffe720a815b16e06caf07bdec825a"
  migratedAt: 2026-08-17
---
## Resumen

Una vez logeado en el sistema, se accede a la ventana de inicio visualizando la tabla de tareas, así como diversas opciones a las que se tendrá acceso en el menú lateral izquierdo.

## Contenido

Siempre que se tenga un turno asignado en el correspondiente equipo al que se pertenezca, se podrá imputar tareas. Es decir, un validador al tener más de un equipo al que puede acceder solo podrá imputar tareas en aquel equipo al que pertenezca como empleado.

Para poder añadir tareas, se debe clicar en el botón “Añadir tareas”. Este botón habilitará una ventana emergente en la cual podremos informar la tarea, el tiempo dedicado, fecha en la que se ha realizado, comentarios sobre la tarea realizada, cantidad y ubicación.

Si la tarea tiene una descripción adjunta, ésta se visualizará en el apartado “Descripción de la tarea”.

Una vez completada la información se debe clicar sobre el botón “Añadir”. Cuando se ha añadido la tarea, ésta se listará en la tabla de la página de inicio.

Si al añadir una tarea, no estamos conformes con la misma o con algún dato introducido, se clica en el icono de papelera () para borrar el registro realizado.
