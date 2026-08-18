---
schemaVersion: "1.0"
contentId: "planificacion-2-2-turnos-y-horas"
title: "Turnos y horas"
description: "Aprende a turnos y horas, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Planificación"
submodule: "Usuarios y perfiles"
intent: "Turnos y horas"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "horas"
    label: "Horas"
  - id: "turnos"
    label: "Turnos"
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
    - "https://manual.aturnos.com/knowledgebase/7-2-turnos-y-horas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/7-2-turnos-y-horas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo turnos y horas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "6a5c54b27038864e0a3a492e0d459a7149388e909475b335d8e0dbf086b54b73"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a turnos y horas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Se puede obtener información de los turnos y de los diferentes tipos de horas de manera detallada o resumida (Ej. en un período de tiempo, de un trabajador en específico) que estén planificadas en los equipos que se gestionan como superusuario.

Se pueden seleccionar tantos equipos se necesite cargar los datos de los turnos y tipos de horas planificados. Para facilitar la búsqueda, se puede introducir el nombre del equipo de trabajo. También se podrán elegir todos aquellos equipos que dependan de un equipo o jerarquía superior.

Una vez seleccionados los equipos, haciendo clic en “Cargar” se mostrarán los resultados.

Cada tipo de evento tiene su listado al que acceder en cada pestaña. Se encontrará el trabajador planificado, el equipo, la fecha y las horas computadas del turno o el tipo de hora.

- Turnos

Más detalle sobre el turno planificado: la abreviatura del turno y la localización en la que está planificado.

- Tipos de horas

Más detalle del tipo de hora planificado. La hora de inicio y fin planificada, la horas de duración, comentario si existiese, la localización y por último la descripción del tipo de hora añadida.

Desde esta función se tiene la opción de descargar el listado con los resultados en Excel o PDF
