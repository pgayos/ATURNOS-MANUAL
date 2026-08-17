---
schemaVersion: "1.0"
contentId: "configuracion-y-cuenta-balance-estimado-mensual"
title: "Balance estimado mensual"
description: "Aprende a balance estimado mensual, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Configuración y cuenta"
submodule: "General"
intent: "Balance estimado mensual"
audience:
  - role: "Administrador"
    access: applicable
entities:
  - id: "balance"
    label: "Balance"
  - id: "estimado"
    label: "Estimado"
  - id: "mensual"
    label: "Mensual"
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
    - "https://manual.aturnos.com/knowledgebase/balance-estimado-mensual/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/balance-estimado-mensual/"
ai:
  answerableQuestions:
    - "¿Cómo puedo balance estimado mensual?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "a82b43a4597b666e67943ea31cc4c6a25b3a5b2452b1c4510a44344d9026f5b9"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a balance estimado mensual, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Es el balance de horas por meses en el periodo seleccionado. Resultado de restar a las horas estimadas a trabajar en cada mes, la suma de las horas computadas del mismo mes, más las horas ajustadas del mes. Esta variable solo se puede calcular si la consulta es mensual. Balance=Horas estimadas mes-Horas computadas-Ajustes
