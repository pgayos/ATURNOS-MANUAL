---
schemaVersion: "1.0"
contentId: documentos-22-importar-acumulado-ano-anterior-timecard
title: Importar acumulado año anterior (Timecard)
description: Es posible que si has utilizado otro sistema de registro de jornada y estás a mitad de año tengas un saldo acumulado el cual quieras traspasar a aTurnos.
contentType: procedure
module: Documentos
submodule: General
intent: Importar acumulado año anterior (Timecard)
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: acumulado
    label: Acumulado
  - id: ano
    label: Ano
  - id: anterior
    label: Anterior
  - id: importar
    label: Importar
  - id: timecard
    label: Timecard
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
    - https://manual.aturnos.com/knowledgebase/22-importar-acumulado-ano-anterior/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/22-importar-acumulado-ano-anterior/
ai:
  answerableQuestions:
    - ¿Cómo puedo importar acumulado año anterior (Timecard)?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/22-importar-acumulado-ano-anterior/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/22-importar-acumulado-ano-anterior/
  contentHash: 8192fba10892df733696df97c1071491a2bd460b39c12633e5c8fdcc841aad4d
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Aprende a importar acumulado año anterior (Timecard), con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Es posible que si has utilizado otro sistema de registro de jornada y estás a mitad de año tengas un saldo acumulado el cual quieras traspasar a aTurnos. La forma de hacerlo es a través de esta importación en el Timecard.

Crea un archivo de Excel en formato CSV o completa la plantilla de ejemplo para importar los marcajes de los trabajadores, definiendo las columnas con los siguientes conceptos:

- Año
- Email
- Minutos de saldo: saldo de minutos acumulado

Plantilla ejemplo, para descargarla, haz clic en el enlace: CSV Importar acumulado año anterior

Una vez se ha creado o completado el archivo, guardar tu documento como formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú Administrar → Importar/Exportar → Importar (ver Importar ).

A continuación, se hace la importación del fichero a aTurnos y se asociará los conceptos de las columnas del fichero con los campos existentes en aTurnos.
