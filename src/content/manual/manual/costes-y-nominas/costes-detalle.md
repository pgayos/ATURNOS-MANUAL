---
schemaVersion: "1.0"
contentId: costes-y-nominas-costes-detalle
title: Costes Detalle
description: Este reporte permite obtener información de los costes totales diarios que tiene el equipo, es decir, muestra los valores de costes independientemente de los tipos de costes configurados en.
contentType: procedure
module: Costes y nóminas
submodule: Usuarios y perfiles
subtopic: ""
intent: Costes Detalle
audience:
  - role: Trabajador
    access: applicable
entities:
  - id: costes
    label: Costes
  - id: detalle
    label: Detalle
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
    - https://manual.aturnos.com/knowledgebase/costes-detalle/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/costes-detalle/
ai:
  answerableQuestions:
    - ¿Cómo puedo costes Detalle?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/costes-detalle/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/costes-detalle/
  contentHash: 48ffe582cefe6e694e031ca9da5a2dea735e1b3a6ccb98877acdef5baf9785fe
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a costes Detalle, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Este reporte permite obtener información de los costes totales diarios que tiene el equipo, es decir, muestra los valores de costes independientemente de los tipos de costes configurados en el sistema. Ej. Si el equipo tiene configurados costes por Categoría y costes en un Turno el valor que mostrará será la sumatoria de ambos en el día (a menos que, se utilice el filtro para visualizar alguna variable en específico).

El menú de Costes Detalle muestra:

- Tablas totales: en esta vista se muestran los costes totales por día según el período de tiempo seleccionado (a menos que, se utilice el filtro para visualizar alguna variable en específico.

- Tabla por usuarios: muestra los costes totales por día y trabajador según el período de tiempo seleccionado (se utiliza el filtro para visualizar alguna variable en específico en caso de requerirlo).

- Gráfico por usuario: muestra gráfico de barras con los costes totales por usuario. Posicionando el cursor sobre la barra del trabajador obtendrá información del valor del coste total que ha generado el mismo.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Costes Detalle](/media/manual/costes-detalle-61fb009e9e.png)

![Costes Detalle](/media/manual/costes-detalle-34afc3d7a0.png)

![Costes Detalle](/media/manual/costes-detalle-1fc65695f9.png)
