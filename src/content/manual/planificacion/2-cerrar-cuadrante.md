---
schemaVersion: "1.0"
contentId: "planificacion-2-cerrar-cuadrante"
title: "Cerrar cuadrante"
description: "La acción de ‘Cerrar cuadrante’ permite bloquear el cuadrante hasta una fecha para que no se puedan añadir turnos, tipos de hora, absentismos y/o Recursos que afecten a los cómputos de horas y a la exportación a Nóminas."
contentType: concept
module: "Planificación"
submodule: "Usuarios y perfiles"
intent: "Cerrar cuadrante"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "cerrar"
    label: "Cerrar"
  - id: "cuadrante"
    label: "Cuadrante"
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
    - "https://manual.aturnos.com/knowledgebase/2-cerrar-cuadrante/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-cerrar-cuadrante/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre cerrar cuadrante?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "0d5614c0f48b8ccf69f3b30d7ee9f141e50df4cbd5146207e3e6f65027840e8d"
  migratedAt: 2026-08-17
---
## Resumen

La acción de ‘Cerrar cuadrante’ permite bloquear el cuadrante hasta una fecha para que no se puedan añadir turnos, tipos de hora, absentismos y/o Recursos que afecten a los cómputos de horas y a la exportación a Nóminas.

## Contenido

Esta función permite informar una fecha hasta la cual no se podrá añadir, modificar, ni borrar, cualquier tipo de evento del cuadrante del trabajador.

La fecha de cierre de cuadrante de cada trabajador, también está informada en su perfil del trabajador en la opción ‘Nóminas’.

Esta fecha también puede variar cuando se produce la exportación a Nóminas por equipo o exportación a Nóminas desde RRHH.
