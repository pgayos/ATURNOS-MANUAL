---
schemaVersion: "1.0"
contentId: "planificacion-2-6-ajustes"
title: "Ajustes en aTurnos"
description: "En este listado recuperas todos los ajustes de horas y vacaciones informados en cada trabajador de los equipos seleccionados."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Ajustes en aTurnos"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "ajustes"
    label: "Ajustes"
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
    - "https://manual.aturnos.com/knowledgebase/7-4-ajustes/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/7-4-ajustes/"
ai:
  answerableQuestions:
    - "¿Cómo puedo ajustes en aTurnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "2b33699c2a2a0d019f14eb23b337a1ef7464191759b4eb1d1893cacdd63f2d09"
  migratedAt: 2026-08-17
---
## Resumen

En este listado recuperas todos los ajustes de horas y vacaciones informados en cada trabajador de los equipos seleccionados.

## Contenido

Los ajustes se informan, habitualmente para saldar las horas y vacaciones de los trabajadores, hay distintos tipos de ajuste:

- Ajustes de horas y vacaciones manuales.
- Migración de saldos de horas y vacaciones.

Al igual que en otros registros, lo primero que se necesita es cargar la información de los ajustes que se hayan realizado en los trabajadores de los equipos que se hayan seleccionado. Seleccionados los equipos, hay que hacer clic en ‘Cargar’.

Una vez se ha cargado la información del registro, se muestran todos los ajustes de horas y/o vacaciones que se han realizado en cada trabajador con la siguiente información:

- Trabajador
- aTurnos (equipo)
- Descripción, es decir, si ha sido un ajuste manual o de migración.
- Acción, si es una acción de incrementar o decrementar, ya sean horas o días de vacaciones.
- Valor, cantidad de horas o días de vacaciones que se han ajustado.
- Fecha en la cual afecta el ajuste.

Como en todos los reportes, mediante la acción de ocultar, se pueden quitar aquellos campos que no se desea visualizar.

Se puede copiar o exportar el listado en CSV, Excel o PDF.
