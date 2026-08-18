---
schemaVersion: "1.0"
contentId: control-horario-6-trabajadores-sin-descanso-realizado
title: Trabajadores sin descanso realizado
description: Los trabajadores que tengan descansos programados a nivel de equipo, trabajador o turno, que por configuración deban fichar el descanso y se descuente automáticamente, pueden anular ese desc.
contentType: procedure
module: Control horario
submodule: Vacaciones y ausencias
intent: Trabajadores sin descanso realizado
audience:
  - role: Trabajador
    access: applicable
entities:
  - id: descanso
    label: Descanso
  - id: realizado
    label: Realizado
  - id: sin
    label: Sin
  - id: trabajadores
    label: Trabajadores
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
    - https://manual.aturnos.com/knowledgebase/6-trabajadores-sin-descanso-realizado/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-trabajadores-sin-descanso-realizado/
ai:
  answerableQuestions:
    - ¿Cómo puedo trabajadores sin descanso realizado?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-trabajadores-sin-descanso-realizado/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-trabajadores-sin-descanso-realizado/
  contentHash: 940ca92ba280797d98fdcce98d547c036efd45b61ffc8f5756735e23a77dba27
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Aprende a trabajadores sin descanso realizado, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
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
