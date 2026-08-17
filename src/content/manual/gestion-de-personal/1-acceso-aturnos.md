---
schemaVersion: "1.0"
contentId: "gestion-de-personal-1-acceso-aturnos"
title: "Acceso aTurnos"
description: "Se accede a la URL de aTurnos, donde pedirá un usuario y contraseña para acceder al sistema."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Acceso aTurnos"
audience:
  - role: "Planificador"
    access: applicable
entities:
  - id: "acceso"
    label: "Acceso"
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
    - "https://manual.aturnos.com/knowledgebase/1-acceso-a-aturnos/"
    - "https://manual.aturnos.com/knowledgebase/5-1-acceso-a-aturnos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-acceso-a-aturnos/"
    - "https://manual.aturnos.com/knowledgebase/5-1-acceso-a-aturnos/"
ai:
  answerableQuestions:
    - "¿Cómo puedo acceso aTurnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 2
  contentHash: "1be1784de9cf7dc87536af4235a2904dec73a6c229cbc489c5e4e80fb0dbb5b6"
  migratedAt: 2026-08-17
---
## Resumen

Se accede a la URL de aTurnos, donde pedirá un usuario y contraseña para acceder al sistema.

## Contenido

Cuando se realice el login en la página inicial de aTurnos, el sistema redirigirá automáticamente a la página inicial de la organización, en ella se confirmarán las credenciales aportadas y finalmente se accederá a aTurnos.
