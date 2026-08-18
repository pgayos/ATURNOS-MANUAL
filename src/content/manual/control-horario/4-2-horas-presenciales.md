---
schemaVersion: "1.0"
contentId: control-horario-4-2-horas-presenciales
title: Horas presenciales
description: En este apartado estadístico se podrá obtener un reporte resumido de las horas que realiza cada trabajador al fichar en el control de presencia.
contentType: concept
module: Control horario
submodule: Fichajes
intent: Horas presenciales
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: horas
    label: Horas
  - id: presenciales
    label: Presenciales
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
    - https://manual.aturnos.com/knowledgebase/4-2-horas-presenciales/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-2-horas-presenciales/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre horas presenciales?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-2-horas-presenciales/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-2-horas-presenciales/
  contentHash: 077eb0fd02ad9e92aa9f774317b383891f376aed29d19d4f8f2d219d7a10b8bf
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En este apartado estadístico se podrá obtener un reporte resumido de las horas que realiza cada trabajador al fichar en el control de presencia.

## Qué debes saber
Se clasifica en tres variables:

- Horas presenciales: Son el total de horas desde el momento del marcaje de entrada hasta el marcaje de salida que realiza un trabajador.
- Horas presenciales computables: Son las horas presenciales que coinciden con las horas de los turnos que computan como horas de contrato y no extraordinarias.
- Horas presenciales no computables: Son las horas presenciales que coinciden con las horas de los turnos que no computan como horas de contrato.

Este reporte se puede filtrar entre una fecha inicio y fin, así como ocultar columnas y descargar en Excel o PDF la información.

Por ejemplo, si un trabajador realiza un turno computado de 7 horas, pero presencialmente ha realizado 8 horas y esa hora añadida se inserta como un ajuste de marcaje como una hora extraordinaria, el resultado sería el siguiente.
