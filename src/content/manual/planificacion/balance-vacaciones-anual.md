---
schemaVersion: "1.0"
contentId: planificacion-balance-vacaciones-anual
title: Balance vacaciones anual
description: Es la diferencia entre las vacaciones planificadas con las vacaciones contrato/año del trabajador, en un año completo, atendiendo a los datos de su perfil.
contentType: reference
module: Planificación
submodule: Contratos
intent: Balance vacaciones anual
audience:
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: anual
    label: Anual
  - id: balance
    label: Balance
  - id: vacaciones
    label: Vacaciones
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
    - https://manual.aturnos.com/knowledgebase/balance-vacaciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/balance-vacaciones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre balance vacaciones anual?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/balance-vacaciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/balance-vacaciones/
  contentHash: 52eaedd31817f11b37b0cf21cce34c0f6d1e54c827783f4ec016bf81ae62689e
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre balance vacaciones anual, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Es la diferencia entre las vacaciones planificadas con las vacaciones contrato/año del trabajador, en un año completo, atendiendo a los datos de su perfil. Si el balance es positivo, el trabajador tiene defecto de vacaciones, es decir, aún tiene vacaciones sin planificar. Si el balance es negativo, el trabajador tiene exceso vacaciones. Balance=Vacaciones planificadas-Vacaciones de contrato.

En este balance se incluye los ajuste de vacaciones, ya sean por incremento o decremento en el balance de vacaciones. Estos ajustes de vacaciones pueden ser, por ejemplo, cuando migran el balance de las vacaciones de un año a otro por un exceso o defecto de vacaciones del trabajador.
