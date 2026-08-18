---
schemaVersion: "1.0"
contentId: "control-horario-5-mas-de-5-hrs-fichadas-sin-descanso"
title: "Más de 5 Hrs fichadas sin descanso"
description: "Los trabajadores que tienen un descanso programado a nivel de equipo, trabajador o turno, que por configuración deban fichar el descanso y hayan trabajado más de 5 horas sin ficharlo, aparecerán en este reporte."
contentType: procedure
module: "Control horario"
submodule: "Vacaciones y ausencias"
intent: "Más de 5 Hrs fichadas sin descanso"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "descanso"
    label: "Descanso"
  - id: "fichadas"
    label: "Fichadas"
  - id: "hrs"
    label: "Hrs"
  - id: "mas"
    label: "Mas"
  - id: "sin"
    label: "Sin"
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
    - "https://manual.aturnos.com/knowledgebase/5-mas-de-5-hrs-fichadas-sin-descanso/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/5-mas-de-5-hrs-fichadas-sin-descanso/"
ai:
  answerableQuestions:
    - "¿Cómo puedo más de 5 Hrs fichadas sin descanso?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "b8d9b0aa31583e5b537f662abd74460a533782a03cfac7a569d78830dfa9ffc8"
  migratedAt: 2026-08-17
---
## Resumen

Los trabajadores que tienen un descanso programado a nivel de equipo, trabajador o turno, que por configuración deban fichar el descanso y hayan trabajado más de 5 horas sin ficharlo, aparecerán en este reporte.

## Contenido

En el caso de que la configuración sea con la opción ‘Contabilizar los descansos, en el caso de que no se fichen se calcularán automáticamente’, al descontarse automáticamente, no se mostrarán en el reporte.

El reporte informa:

- Equipo donde sucede el caso.
- Nombre del trabajador afectado.
- Localización por defecto del trabajador.
- Balance de horas del trabajador.
- Fecha en la que se produce el caso.
- Horas trabajadas.

Al igual que en el resto de reportes, se puede seleccionar entre qué fechas realizar la consulta, en qué equipo y poder filtrar por trabajadores.

Si la consulta requiere de muchos datos, se realizará una petición de reporte que se puede descargar en ‘Peticiones de reportes’.
