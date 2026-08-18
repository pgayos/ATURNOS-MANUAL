---
schemaVersion: "1.0"
contentId: control-horario-4-4-resumen-diario
title: Resumen diario
description: En definitiva los datos que aparecen en esta tabla son los siguientes:.
contentType: concept
module: Control horario
submodule: Fichajes
intent: Resumen diario
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: diario
    label: Diario
  - id: resumen
    label: Resumen
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
    - https://manual.aturnos.com/knowledgebase/4-4-resumen-diario/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-4-resumen-diario/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre resumen diario?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-4-resumen-diario/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-4-resumen-diario/
  contentHash: 31b92379a4788b9a5fb27abd9d3d69c7fe8f9c1fc3a1e56014ca9f50c461325c
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En definitiva los datos que aparecen en esta tabla son los siguientes:.

## Qué debes saber
- Trabajador: nombre del trabajador.
- Horas presenciales: las horas que se han marcado por el trabajador desde que fichó al inicio de la jornada hasta que realizó el marcaje de salida.
- Horas planificadas: el número de horas que tenía el trabajador planificadas en su cuadrante para ese día en concreto.
- Horas absentismo planificadas: en esta columna aparecerán el número de horas de absentismo que han sido planificadas o recogidas en el cuadrante (incluidas las que resultan por medio de la acción de ajuste de los fichajes).
- Estado: muestra el saldo de diferencia entre las horas presenciales y las planificadas, más los horas del absentismo.
