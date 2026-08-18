---
schemaVersion: "1.0"
contentId: "control-horario-6-listado-peticiones-de-fichajes"
title: "Listado peticiones de fichajes"
description: "Este reporte permite visualizar todas las ‘ Peticiones de fichajes ‘ pendientes de ser aprobadas por los administradores de los equipos consultados."
contentType: concept
module: "Control horario"
submodule: "General"
intent: "Listado peticiones de fichajes"
audience:
  - role: "Administrador"
    access: applicable
entities:
  - id: "fichajes"
    label: "Fichajes"
  - id: "listado"
    label: "Listado"
  - id: "peticiones"
    label: "Peticiones"
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
    - "https://manual.aturnos.com/knowledgebase/6-listado-peticiones-de-fichajes/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/6-listado-peticiones-de-fichajes/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre listado peticiones de fichajes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "ab66cd1f3973abd0430576c34ac69b1feb8f471275ab3ab351bad2397475ee14"
  migratedAt: 2026-08-17
---
## Resumen

Este reporte permite visualizar todas las ‘ Peticiones de fichajes ‘ pendientes de ser aprobadas por los administradores de los equipos consultados.

Como en otros listados, dependiendo del volumen de datos se puede consultar por pantalla o generar una ‘ Petición de reporte ‘ para su descarga en un Excel.

## Filtros

En esta consulta se puede definir:

- Fechas

- Equipos

## Acciones

En esta pantalla se permite ‘Aceptar’ o ‘Denegar’ las peticiones que están pendientes aprobar, tanto de forma individual, como masivamente.

Una vez validadas, no es posible deshacer la acción.
