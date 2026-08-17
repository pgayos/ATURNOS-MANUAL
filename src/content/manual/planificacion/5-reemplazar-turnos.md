---
schemaVersion: "1.0"
contentId: "planificacion-5-reemplazar-turnos"
title: "Reemplazar turnos"
description: "La acción de ‘Reemplazar turnos’ permite cambiar un mismo turno por otro a un trabajador entre dos fechas."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Reemplazar turnos"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "reemplazar"
    label: "Reemplazar"
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
    - "https://manual.aturnos.com/knowledgebase/5-reemplazar-turnos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/5-reemplazar-turnos/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre reemplazar turnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "a3e4688dcd10dd9d2116fd321a77532594eb01e208a8268d1e8da3a34186802f"
  migratedAt: 2026-08-17
---
## Resumen

La acción de ‘Reemplazar turnos’ permite cambiar un mismo turno por otro a un trabajador entre dos fechas.

## Contenido

Se nos mostrará un formulario en el cual informar:

- Desde/Hasta: la fecha inicio a partir de la cual se cambiarán los turnos y la fecha fin del cambio.
- Elige que turno quiere reemplazar: el turno origen.
- Elige el nuevo turno: el turno destino.

Para realizar el reemplazo de turnos, se debe hacer clic en ‘Guardar’.
