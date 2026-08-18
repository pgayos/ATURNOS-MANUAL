---
schemaVersion: "1.0"
contentId: control-horario-2-menos-de-12-hrs-entre-fichajes
title: Menos de 12 hrs entre fichajes
description: Los trabajadores que hayan fichado en menos de 12 horas entre un fichaje cerrado y el siguiente, se mostrarán en este reporte.
contentType: procedure
module: Control horario
submodule: Altas y bajas
intent: Menos de 12 hrs entre fichajes
audience:
  - role: Trabajador
    access: applicable
entities:
  - id: entre
    label: Entre
  - id: fichajes
    label: Fichajes
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
    - https://manual.aturnos.com/knowledgebase/2-menos-de-12-hrs-entre-fichajes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-menos-de-12-hrs-entre-fichajes/
ai:
  answerableQuestions:
    - ¿Cómo puedo menos de 12 hrs entre fichajes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-menos-de-12-hrs-entre-fichajes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-menos-de-12-hrs-entre-fichajes/
  contentHash: 19c497a0b13c4fd076d8aa0679bd3bb48c00abd28a1b51bab3883b907e7654ed
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Aprende a menos de 12 hrs entre fichajes, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Los trabajadores que hayan fichado en menos de 12 horas entre un fichaje cerrado y el siguiente, se mostrarán en este reporte. Esto siempre que se cumpla la configuración de “Tiempo máximo en minutos para considerar descanso”, ya que cuando la duración entre el fichaje cerrado anterior y el siguiente supere la duración de minutos configurada.

El reporte informa:

- Equipo donde sucede el caso.
- Nombre del trabajador afectado.
- Localización por defecto del trabajador.
- Balance de horas del trabajador.
- Fecha en la que se produce el caso.
- Tiempo entre fichajes (entre el fichaje anterior y el siguiente).

Al igual que en el resto de reportes, se puede seleccionar entre qué fechas realizar la consulta, en qué equipo y poder filtrar por trabajadores.

Si la consulta requiere de muchos datos, se realizará una petición de reporte que se puede descargar en ‘Peticiones de reportes’.
