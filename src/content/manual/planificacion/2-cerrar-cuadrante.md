---
schemaVersion: "1.0"
contentId: planificacion-2-cerrar-cuadrante
title: Cerrar cuadrante
description: La acción de ‘Cerrar cuadrante’ permite bloquear el cuadrante hasta una fecha para que no se puedan añadir turnos, tipos de hora, absentismos y/o Recursos que afecten a los cómputos de horas y a la exportación a Nóminas.
contentType: concept
module: Planificación
submodule: Usuarios y perfiles
intent: Cerrar cuadrante
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: cerrar
    label: Cerrar
  - id: cuadrante
    label: Cuadrante
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
    - https://manual.aturnos.com/knowledgebase/2-cerrar-cuadrante/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-cerrar-cuadrante/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre cerrar cuadrante?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-cerrar-cuadrante/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-cerrar-cuadrante/
  contentHash: a4ceba982731c6a4850d8d7cba5608e95ccd631b0ed9f8c5430e6f1c5d1e0045
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

La acción de ‘Cerrar cuadrante’ permite bloquear el cuadrante hasta una fecha para que no se puedan añadir turnos, tipos de hora, absentismos y/o Recursos que afecten a los cómputos de horas y a la exportación a Nóminas.

## Qué debes saber
Esta función permite informar una fecha hasta la cual no se podrá añadir, modificar, ni borrar, cualquier tipo de evento del cuadrante del trabajador.

La fecha de cierre de cuadrante de cada trabajador, también está informada en su perfil del trabajador en la opción ‘Nóminas’.

Esta fecha también puede variar cuando se produce la exportación a Nóminas por equipo o exportación a Nóminas desde RRHH.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
