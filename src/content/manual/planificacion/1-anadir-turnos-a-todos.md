---
schemaVersion: "1.0"
contentId: planificacion-1-anadir-turnos-a-todos
title: Añadir turnos a todos
description: “Añadir turnos a todos” permite a los administradores insertar un mismo turno a todos los trabajadores en un mismo día. Para ello, se debe seleccionar un turno.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Añadir turnos a todos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: anadir
    label: Anadir
  - id: todos
    label: Todos
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
    - https://manual.aturnos.com/knowledgebase/1-anadir-turnos-a-todos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-anadir-turnos-a-todos/
ai:
  answerableQuestions:
    - ¿Cómo puedo añadir turnos a todos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-anadir-turnos-a-todos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-anadir-turnos-a-todos/
  contentHash: 3f51137b53780b69ae1a73ea8320ce131f1d534ff0ba0a9beb2e6ea5057f5383
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

“Añadir turnos a todos” permite a los administradores insertar un mismo turno a todos los trabajadores en un mismo día. Para ello, se debe seleccionar un turno.

## Procedimiento
En los casos donde se necesite planificar a un grupo de trabajadores, se puede utilizar el filtro de la barra superior del cuadrante para filtrarlos por nombre, localización, categoría o especialidad.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
