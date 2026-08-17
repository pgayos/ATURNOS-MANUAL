---
schemaVersion: "1.0"
contentId: "configuracion-y-cuenta-trabajador"
title: "Trabajador"
description: "Información sobre trabajador, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Configuración y cuenta"
submodule: "Roles y permisos"
intent: "Trabajador"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "trabajador"
    label: "Trabajador"
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
    - "https://manual.aturnos.com/knowledgebase/trabajador/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/trabajador/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre trabajador?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "20cbb21985c80fd1b02269554c552c8e81a44bdc3a1e9aa59a68087c8b6be44f"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre trabajador, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Es el rol de aTurnos que se corresponde con la mayoría de usuarios. Es el rol con más permisos restringido de las funciones de aTurnos. Tiene permiso para consultar su planificación, realizar cambios de turnos y peticiones de permisos, acceso a sus estadísticas, … Los permisos de visibilidad y acciones dependerá de la configuración realizada en el equipo por un usuario con rol administrador.
