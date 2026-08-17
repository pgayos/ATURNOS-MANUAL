---
schemaVersion: "1.0"
contentId: "gestion-de-personal-costes-detalle"
title: "Costes Detalle"
description: "Aprende a costes Detalle, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Costes Detalle"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "costes"
    label: "Costes"
  - id: "detalle"
    label: "Detalle"
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
    - "https://manual.aturnos.com/knowledgebase/costes-detalle/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/costes-detalle/"
ai:
  answerableQuestions:
    - "¿Cómo puedo costes Detalle?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "7d7ccaa519ef8a87442a188a3e3940af70dee67a6f4ee9b3bd82fb324cd1f6cd"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a costes Detalle, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Este reporte permite obtener información de los costes totales diarios que tiene el equipo, es decir, muestra los valores de costes independientemente de los tipos de costes configurados en el sistema. Ej. Si el equipo tiene configurados costes por Categoría y costes en un Turno el valor que mostrará será la sumatoria de ambos en el día (a menos que, se utilice el filtro para visualizar alguna variable en específico).

El menú de Costes Detalle muestra:

- Tablas totales: en esta vista se muestran los costes totales por día según el período de tiempo seleccionado (a menos que, se utilice el filtro para visualizar alguna variable en específico.

- Tabla por usuarios: muestra los costes totales por día y trabajador según el período de tiempo seleccionado (se utiliza el filtro para visualizar alguna variable en específico en caso de requerirlo).

- Gráfico por usuario: muestra gráfico de barras con los costes totales por usuario. Posicionando el cursor sobre la barra del trabajador obtendrá información del valor del coste total que ha generado el mismo.
