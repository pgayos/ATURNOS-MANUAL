---
schemaVersion: "1.0"
contentId: "tareas-3-favoritos"
title: "Favoritos"
description: "En aTurnos existe la funcionalidad Favoritos, tiene como objetivo facilitar la imputación de las tareas más frecuentes realizadas por el empleado."
contentType: procedure
module: "Tareas"
submodule: "General"
intent: "Favoritos"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "favoritos"
    label: "Favoritos"
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
    - "https://manual.aturnos.com/knowledgebase/7-1-favoritos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/7-1-favoritos/"
ai:
  answerableQuestions:
    - "¿Cómo puedo favoritos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "4c6f4f3d1c227c54e4a8d1f8106f998b6c7924c269094942c4f2d0d5fe9f370b"
  migratedAt: 2026-08-17
---
## Resumen

En aTurnos existe la funcionalidad Favoritos, tiene como objetivo facilitar la imputación de las tareas más frecuentes realizadas por el empleado.

## Contenido

Para poder seleccionar qué tareas forman parte de la funcionalidad Favoritos, se debe acceder al Catálogo de tareas. Para acceder a dicho catálogo se puede hacer por dos vías.

1. Botón superior derecho “Catálogo de tareas”
2. Submenú “Catálogo de tareas”

Una vez se acceda al Catálogo de tareas, se podrán visualizar todas las tareas correspondientes a cada uno de los trabajadores.

Una vez añadidas las tareas en Favoritos, podremos verlas listadas en el apartado Favoritos del botón “Añadir tareas” de la página de inicio.

El funcionamiento de imputación sobre tareas en Favoritos es el mismo que sobre las tareas listadas.
