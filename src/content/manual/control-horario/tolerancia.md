---
schemaVersion: "1.0"
contentId: "control-horario-tolerancia"
title: "Tolerancia"
description: "Información sobre tolerancia, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Control horario"
submodule: "Informes y validación"
intent: "Tolerancia"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
entities:
  - id: "tolerancia"
    label: "Tolerancia"
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
    - "https://manual.aturnos.com/knowledgebase/tolerancia/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/tolerancia/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre tolerancia?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "9a2dc74d68dfe7b620efba1694fd41b78f3527d463936d4c2f5f5f392ddfc2c7"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre tolerancia, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Dentro del control de presencia, la tolerancia define el lapso de tiempo para no considerar pendiente de ajustar la diferencia entre los marcajes y la jornada planificada y por tanto, compara los tiempos de los marcajes con la planificación sin validar el inicio y fin, solo el total de tiempo realizado respecto al planificado. El administrador podrá modificar esa tolerancia desde la configuración del control de presencia según sus preferencias.
