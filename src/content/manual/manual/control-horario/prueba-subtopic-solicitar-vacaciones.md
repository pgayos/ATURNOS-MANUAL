---
schemaVersion: "1.0"
contentId: control-horario-prueba-subtopic-solicitar-vacaciones
title: Cómo solicitar vacaciones desde el calendario
description: Artículo de prueba para validar el campo subtopic. Explica los pasos para solicitar un periodo de vacaciones desde el calendario del trabajador.
contentType: procedure
module: Control horario
submodule: Vacaciones y ausencias
subtopic: Solicitud de vacaciones
intent: Solicitar vacaciones
audience:
  - role: Trabajador
    access: required
  - role: Administrador
    access: applicable
entities:
  - id: vacaciones
    label: Vacaciones
  - id: solicitud
    label: Solicitud
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
    - https://manual.aturnos.com/pruebas/prueba-subtopic-solicitar-vacaciones/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Cómo solicito vacaciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/pruebas/prueba-subtopic-solicitar-vacaciones/
  redirectFrom:
    - https://manual.aturnos.com/pruebas/prueba-subtopic-solicitar-vacaciones/
  contentHash: "0000000000000000000000000000000000000000000000000000000000000000"
  migratedAt: 2026-09-01
labels:
  - PENDIENTE
order: 1
---

## Resumen

Este artículo es contenido de prueba para validar que el campo `subtopic` agrupa correctamente varios artículos dentro del mismo submódulo.

## Procedimiento

- Entra al calendario personal desde el menú de trabajador.
- Selecciona el rango de fechas del periodo que quieres solicitar.
- Pulsa en "Solicitar vacaciones" y confirma el envío.
- La solicitud queda pendiente hasta que un administrador la revise.

## PENDIENTE de validación

Este contenido es de prueba (no proviene de una migración real) y sirve únicamente para comprobar el agrupado por `subtopic`.
