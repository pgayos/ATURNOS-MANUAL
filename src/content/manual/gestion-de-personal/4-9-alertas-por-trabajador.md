---
schemaVersion: "1.0"
contentId: "gestion-de-personal-4-9-alertas-por-trabajador"
title: "Alertas por trabajador"
description: "Este reporte muestra las alertas o incidencias que se produzcan en el control de presencia por localización, las cuales se pueden visualizar en el ‘Diario’ o ‘Detalle’."
contentType: concept
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Alertas por trabajador"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "alertas"
    label: "Alertas"
  - id: "trabajador"
    label: "Trabajador"
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
    - "https://manual.aturnos.com/knowledgebase/4-9-alertas-por-trabajador/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/4-9-alertas-por-trabajador/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre alertas por trabajador?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "f900743ef30e9ae0eb5a11ce24f6e8a09e450e683612422888d82da8cc97dc79"
  migratedAt: 2026-08-17
---
## Resumen

Este reporte muestra las alertas o incidencias que se produzcan en el control de presencia por localización, las cuales se pueden visualizar en el ‘Diario’ o ‘Detalle’.

## Contenido

Los datos de este reporte se pueden filtrar entre dos fechas desde el botón de la barra superior.

Se pueden buscar los fichajes de uno o más trabajadores, así como los de las localizaciones que se seleccionen.

Los parámetros que se pueden consultar en este reporte son las siguientes, así como todos aquellos configurados en ‘Visualización’.

- Empleado: nombre del trabajador.
- Alerta: descripción de la incidencia producida.
- Total: número de alertas que se han producido de ese tipo.
