---
schemaVersion: "1.0"
contentId: planificacion-8-enviar-cuadrante-por-email
title: Enviar cuadrante por Email
description: Desde esta función, el administrador podrá enviar el cuadrante por correo electrónico al trabajador seleccionado de manera sencilla (para un envío masivo a todos los trabajadores ver la func.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Enviar cuadrante por Email
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: cuadrante
    label: Cuadrante
  - id: email
    label: Email
  - id: enviar
    label: Enviar
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
    - https://manual.aturnos.com/knowledgebase/8-enviar-cuadrante-por-email/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/8-enviar-cuadrante-por-email/
ai:
  answerableQuestions:
    - ¿Cómo puedo enviar cuadrante por Email?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/8-enviar-cuadrante-por-email/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/8-enviar-cuadrante-por-email/
  contentHash: d8a726892de0bab86028201da07955cc6be33d18e5677ef57c9d9ee14e2c1718
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Aprende a enviar cuadrante por Email, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Desde esta función, el administrador podrá enviar el cuadrante por correo electrónico al trabajador seleccionado de manera sencilla (para un envío masivo a todos los trabajadores ver la función” Enviar cuadrante por correo electrónico a todos “).

El trabajador recibió la planificación del periodo que está visualizando el administrador en el momento de enviar el cuadrante.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
