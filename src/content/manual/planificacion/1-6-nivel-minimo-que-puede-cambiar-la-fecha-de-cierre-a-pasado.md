---
schemaVersion: "1.0"
contentId: "planificacion-1-6-nivel-minimo-que-puede-cambiar-la-fecha-de-cierre-a-pasado"
title: "Nivel mínimo que puede cambiar la fecha de cierre a pasado"
description: "Indica el nivel del usuario para modificar la fecha de cierre de cuadrante a una fecha anterior a la que el cuadrante está cerrado."
contentType: procedure
module: "Planificación"
submodule: "Cuadrante"
intent: "Nivel mínimo que puede cambiar la fecha de cierre a pasado"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
entities:
  - id: "cambiar"
    label: "Cambiar"
  - id: "cierre"
    label: "Cierre"
  - id: "fecha"
    label: "Fecha"
  - id: "minimo"
    label: "Minimo"
  - id: "nivel"
    label: "Nivel"
  - id: "pasado"
    label: "Pasado"
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
    - "https://manual.aturnos.com/knowledgebase/1-6-nivel-minimo-que-puede-cambiar-la-fecha-de-cierre-a-pasado/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-6-nivel-minimo-que-puede-cambiar-la-fecha-de-cierre-a-pasado/"
ai:
  answerableQuestions:
    - "¿Cómo puedo nivel mínimo que puede cambiar la fecha de cierre a pasado?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "6f8a7428ba4c479cbf6b7f286c14457effa82626fd7fdbfe225a5c3b607b0786"
  migratedAt: 2026-08-17
---
## Resumen

Indica el nivel del usuario para modificar la fecha de cierre de cuadrante a una fecha anterior a la que el cuadrante está cerrado.

## Contenido

Las opciones permitidas son:

- Administrador Validador
- Administrador Planificador
- Administrador Total: Opción por defecto
- Superusuario: Opción recomendada PYMES y Grandes Empresas muy descentralizadas
