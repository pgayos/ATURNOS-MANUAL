---
schemaVersion: "1.0"
contentId: "gestion-de-personal-3-informe"
title: "Informe en aTurnos"
description: "aTurnos pone a disposición de los administradores de los equipos de trabajo de un Informe predefinido para su presentación a la Inspección Laboral."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Informe en aTurnos"
audience:
  - role: "Administrador"
    access: applicable
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "informe"
    label: "Informe"
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
    - "https://manual.aturnos.com/knowledgebase/3-informe/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/3-informe/"
ai:
  answerableQuestions:
    - "¿Cómo puedo informe en aTurnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "489588cf6d3459f939311c230a7d3305f17fa43157e822fbdf64de824e8d2b37"
  migratedAt: 2026-08-17
---
## Resumen

aTurnos pone a disposición de los administradores de los equipos de trabajo de un Informe predefinido para su presentación a la Inspección Laboral.

## Contenido

Desde aquí, se pueden exportar todos los informes de los trabajadores de todos los equipos que se gestionan.

Es necesario definir:

- Fecha de inicio.
- Fecha de fin.
- Equipos.

Al solicitar el Informe, el sistema permite seleccionar qué campos mostrar.

También permite seleccionar si se quiere exportar en PDF o Excel.

Debido al volumen de datos, se generará una ‘ Petición de reporte ‘ para su descarga.
