---
schemaVersion: "1.0"
contentId: "gestion-de-personal-balance-mensual"
title: "Balance mensual"
description: "Información sobre balance mensual, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Gestión de personal"
submodule: "Contratos"
intent: "Balance mensual"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "balance"
    label: "Balance"
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
    - "https://manual.aturnos.com/knowledgebase/balance-de-horas-hhhhh/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/balance-de-horas-hhhhh/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre balance mensual?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "77c4232d28abe166b4fd55810610b7856dced874bacccce8100e1379b67b3247"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre balance mensual, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Compara las horas contrato mes con las horas computadas del trabajador en un mes completo atendiendo a los datos de su perfil. Si el balance es positivo el trabajador tiene defecto de horas, por lo que tiene que realizar más horas. En cambio, si es negativo el trabajador tiene exceso de horas. Balance=Horas contrato-Horas computadas.

En este balance se incluye los ajustes de horas computadas. Estos ajuste de horas pueden ser por ejemplo cuando se finiquita o migran las horas de un año a otro por un exceso o defecto de horas del trabajador.
