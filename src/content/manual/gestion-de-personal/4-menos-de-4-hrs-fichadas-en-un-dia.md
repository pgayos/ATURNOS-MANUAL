---
schemaVersion: "1.0"
contentId: gestion-de-personal-4-menos-de-4-hrs-fichadas-en-un-dia
title: Menos de 4 Hrs fichadas en un día
description: Los trabajadores que hayan realizado un fichaje con duración inferior a 4 horas, se mostrarán en el reporte.
contentType: procedure
module: Gestión de personal
submodule: Altas y bajas
intent: Menos de 4 Hrs fichadas en un día
audience:
  - role: Trabajador
    access: applicable
entities:
  - id: dia
    label: Dia
  - id: fichadas
    label: Fichadas
  - id: hrs
    label: Hrs
  - id: menos
    label: Menos
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
    - https://manual.aturnos.com/knowledgebase/4-menos-de-4-hrs-fichadas-en-un-dia/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-menos-de-4-hrs-fichadas-en-un-dia/
ai:
  answerableQuestions:
    - ¿Cómo puedo menos de 4 Hrs fichadas en un día?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-menos-de-4-hrs-fichadas-en-un-dia/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-menos-de-4-hrs-fichadas-en-un-dia/
  contentHash: a17ca881b31116a366ab4c779d6836deeb1bc57a6b0934b98c4042fca3174018
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Los trabajadores que hayan realizado un fichaje con duración inferior a 4 horas, se mostrarán en el reporte.

## Procedimiento
El reporte informa:

- Equipo donde sucede el caso.
- Nombre del trabajador afectado.
- Localización por defecto del trabajador.
- Balance de horas del trabajador.
- Fecha en la que se produce el caso.
- Horas trabajadas.
- Absentismo, informando “Si” o “No”, dependiendo de si existe un absentismo planificado en ese día.

Al igual que en el resto de reportes, se puede seleccionar entre qué fechas realizar la consulta, en qué equipo y poder filtrar por trabajadores.

Si la consulta requiere de muchos datos, se realizará una petición de reporte que se puede descargar en ‘Peticiones de reportes’.
