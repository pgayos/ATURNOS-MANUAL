---
schemaVersion: "1.0"
contentId: "planificacion-6-trabajadores-sin-descanso-realizado"
title: "Trabajadores sin descanso realizado"
description: "Aprende a trabajadores sin descanso realizado, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Trabajadores sin descanso realizado"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "descanso"
    label: "Descanso"
  - id: "realizado"
    label: "Realizado"
  - id: "sin"
    label: "Sin"
  - id: "trabajadores"
    label: "Trabajadores"
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
    - "https://manual.aturnos.com/knowledgebase/6-trabajadores-sin-descanso-realizado/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/6-trabajadores-sin-descanso-realizado/"
ai:
  answerableQuestions:
    - "¿Cómo puedo trabajadores sin descanso realizado?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "bda7e972901df937e0fa6caecbeead4245d7937b2c7f526b6c48cf832ca711bc"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a trabajadores sin descanso realizado, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Los trabajadores que tengan descansos programados a nivel de equipo, trabajador o turno, que por configuración deban fichar el descanso y se descuente automáticamente, pueden anular ese descanso. En el caso de hacerlo, aparecerán en este reporte.

El reporte informa:

- Equipo donde sucede el caso.
- Nombre del trabajador afectado.
- Localización por defecto del trabajador.
- Balance de horas del trabajador.
- Fecha en la que se produce el caso.
- Horas trabajadas.

Al igual que en el resto de reportes, se puede seleccionar entre qué fechas realizar la consulta, en qué equipo y poder filtrar por trabajadores.

Si la consulta requiere de muchos datos, se realizará una petición de reporte que se puede descargar en ‘Peticiones de reportes’.
