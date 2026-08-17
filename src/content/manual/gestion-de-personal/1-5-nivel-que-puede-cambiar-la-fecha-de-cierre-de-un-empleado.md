---
schemaVersion: "1.0"
contentId: "gestion-de-personal-1-5-nivel-que-puede-cambiar-la-fecha-de-cierre-de-un-empleado"
title: "Nivel que puede cambiar la fecha de cierre de un empleado"
description: "Indica el nivel del usuario para modificar la fecha de cierre de cuadrante en el perfil de los trabajadores."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Nivel que puede cambiar la fecha de cierre de un empleado"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "cambiar"
    label: "Cambiar"
  - id: "cierre"
    label: "Cierre"
  - id: "empleado"
    label: "Empleado"
  - id: "fecha"
    label: "Fecha"
  - id: "nivel"
    label: "Nivel"
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
    - "https://manual.aturnos.com/knowledgebase/1-5-nivel-que-puede-cambiar-la-fecha-de-cierre-de-un-empleado/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-5-nivel-que-puede-cambiar-la-fecha-de-cierre-de-un-empleado/"
ai:
  answerableQuestions:
    - "¿Cómo puedo nivel que puede cambiar la fecha de cierre de un empleado?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "9ebf092a93b38f0ad93f8dc6e7e113e2362b862e1149a12d94ebd9bf70b9d919"
  migratedAt: 2026-08-17
---
## Resumen

Indica el nivel del usuario para modificar la fecha de cierre de cuadrante en el perfil de los trabajadores.

## Contenido

Las opciones permitidas son:

- Administrador Validador
- Administrador Planificador
- Administrador Total: Opción por defecto
- Superusuario: Opción recomendada PYMES y Grandes Empresas muy descentralizadas
