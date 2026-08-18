---
schemaVersion: "1.0"
contentId: "integraciones-y-api-7-4-relacion-ids-external"
title: "Relación Ids. External"
description: "Aprende a relación Ids. External, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Integraciones y API"
submodule: "Usuarios y perfiles"
intent: "Relación Ids. External"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "external"
    label: "External"
  - id: "ids"
    label: "Ids"
  - id: "relacion"
    label: "Relacion"
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
    - "https://manual.aturnos.com/knowledgebase/11-4-relacion-ids-external/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/11-4-relacion-ids-external/"
ai:
  answerableQuestions:
    - "¿Cómo puedo relación Ids. External?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "be9ee01f2560c964463b64613a224f16248103901f51f37c4b93238989d432e2"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a relación Ids. External, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Desde esta herramienta de Acciones, los superusuarios podrán relacionar los trabajadores que son enviados desde el sistema integrado con aTurnos de un equipo con un id external a otro con un distinto id external (ver más información id external, haz clic aquí.)

Por ejemplo, un trabajador está siendo enviado a la unidad organizativa con id external 00005456, pero se necesita que esos trabajadores vuelquen en el equipo con el id external 00001258. Relacionando el id origen y el id destino, al volcar la información se insertará en el equipo con el id external 00001258.

Desde el botón del filtro podemos buscar el id external de todos aquellos que haya en el listado.

En acción se añadirá una nueva relación entre el id external de un equipo origen y el id external de un equipo destino.

Una vez han sido añadidas las relaciones, estas se pueden editar o borrar desde los botones de cada relación de ids.
