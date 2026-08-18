---
schemaVersion: "1.0"
contentId: control-horario-tolerancia
title: Tolerancia
description: Dentro del control de presencia, la tolerancia define el lapso de tiempo para no considerar pendiente de ajustar la diferencia entre los marcajes y la jornada planificada y por tanto, compar.
contentType: reference
module: Control horario
submodule: Informes y validación
intent: Tolerancia
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: tolerancia
    label: Tolerancia
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
    - https://manual.aturnos.com/knowledgebase/tolerancia/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/tolerancia/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre tolerancia?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/tolerancia/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/tolerancia/
  contentHash: c447bf3a1f4c83302c86f6bbd1c94f037f8f85912172a5770617d15c9c99af9d
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre tolerancia, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Dentro del control de presencia, la tolerancia define el lapso de tiempo para no considerar pendiente de ajustar la diferencia entre los marcajes y la jornada planificada y por tanto, compara los tiempos de los marcajes con la planificación sin validar el inicio y fin, solo el total de tiempo realizado respecto al planificado. El administrador podrá modificar esa tolerancia desde la configuración del control de presencia según sus preferencias.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
