---
schemaVersion: "1.0"
contentId: "gestion-de-personal-1-4-nivel-que-puede-cambiar-la-fecha-de-cierre-del-cuadrante"
title: "Nivel que puede cambiar la fecha de cierre del cuadrante"
description: "Indica el nivel del usuario para modificar la fecha de cierre de cuadrante, es decir, indicar nueva fecha del cuadrante a futuro."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Nivel que puede cambiar la fecha de cierre del cuadrante"
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
  - id: "cuadrante"
    label: "Cuadrante"
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
    - "https://manual.aturnos.com/knowledgebase/1-4-nivel-que-puede-cambiar-la-fecha-de-cierre-del-cuadrante/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-4-nivel-que-puede-cambiar-la-fecha-de-cierre-del-cuadrante/"
ai:
  answerableQuestions:
    - "¿Cómo puedo nivel que puede cambiar la fecha de cierre del cuadrante?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "7444c4de2bdd8eb01dedaf339f61be532f02c02ab2e8b80bad4db15c456166b5"
  migratedAt: 2026-08-17
---
## Resumen

Indica el nivel del usuario para modificar la fecha de cierre de cuadrante, es decir, indicar nueva fecha del cuadrante a futuro.

## Contenido

Por ejemplo, si el cuadrante está cerrado a 28/02/2022, el trabajador con el rol que se indique puede cerrar el cuadrante a partir de esta fecha (el 31/03/2022, por ejemplo), pero no se le permite modificar la fecha a una anterior a la indicada (el 31/01/2022, por ejemplo).

Las opciones permitidas son:

- Administrador Validador
- Administrador Planificador
- Administrador Total: Opción por defecto
- Superusuario: Opción recomendada PYMES y Grandes Empresas.
- Ningún nivel permite modificar la fecha de cierre del cuadrante.
