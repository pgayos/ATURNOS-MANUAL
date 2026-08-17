---
schemaVersion: "1.0"
contentId: "planificacion-a-turnos-2"
title: "Turnos en aTurnos"
description: "Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Turnos en aTurnos"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "turnos"
    label: "Turnos"
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
    - "https://manual.aturnos.com/knowledgebase/6-1-turnos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/6-1-turnos/"
ai:
  answerableQuestions:
    - "¿Cómo puedo turnos en aTurnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "85ea98663e699cc144c3e9f7d12128e62cc14f416f55af98bdb9b6082e5b1db9"
  migratedAt: 2026-08-17
---
## Resumen

Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas.

En las estadísticas de turnos encontramos tres pestañas:

### Tabla

En la primera pestaña, las variables que aparecen son las siguientes:

- Trabajadores: personas del listado del equipo que administramos.
- Turnos: cada campo corresponderá a uno de los turnos creados dentro de nuestro equipo y aplicados en nuestro cuadrante planificado.
- Horas: horas añadidas (normales, extra o complementarias) en un periodo determinado de cada trabajador en un turno.
- Absentismos: horas de absentismo dentro de un periodo determinado.
- Festivos: días festivos en el intervalo indicado ( ver más ).
- Productivas: turnos diarios realizados desde una fecha indicada hasta otra.
- Total: suma de los turnos diarios productivos y los no productivos.

### Totales

Suma de datos de las variables de absentismos, festivos, horas productivas y horas totales, por cada trabajador.

### Gráfico

Gráfico de barras para representar de una forma más visual, los turnos planificados para cada trabajador. Para diferenciar los tipos de turno de las personas, la herramienta utiliza una distinción por colores, cuya leyenda situada en la parte superior, asocia un color a un tipo de turno.
