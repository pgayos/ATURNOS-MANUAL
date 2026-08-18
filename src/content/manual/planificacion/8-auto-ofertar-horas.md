---
schemaVersion: "1.0"
contentId: planificacion-8-auto-ofertar-horas
title: Auto-ofertar horas
description: Una vez realizada la planificación correctamente, existen muchas variables que obligan a replanificar.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Auto-ofertar horas
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: auto
    label: Auto
  - id: horas
    label: Horas
  - id: ofertar
    label: Ofertar
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
    - https://manual.aturnos.com/knowledgebase/7-auto-ofertar-horas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-auto-ofertar-horas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre auto-ofertar horas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-auto-ofertar-horas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-auto-ofertar-horas/
  contentHash: 749401c2f98a79a4d46ab1682acad2a2f97eebc443e89a53a09e0701fada78ea
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre auto-ofertar horas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Una vez realizada la planificación correctamente, existen muchas variables que obligan a replanificar. Pueden existir bajas de empleados, periodos de absentismos o puede incrementar y/o decrementar la demanda en momentos determinados. Por un lado, hemos detectado que es importante liberar de este trabajo al mando intermedio de buscar donde necesita cubrir estos huecos.

Y por otro lado, estos cambios se realizan sobre las planificaciones ya compartidas con el empleado, por lo que es mejor ofrecerlas como ofertas de turnos para que el trabajador seleccione que turno le viene mejor, sin duda una herramienta de integración de vida laboral y personal.

La herramienta de auto ofertar horas se encarga de buscar los gaps de cobertura, es decir, donde falta personal para publicarlo como oferta y que los trabajadores se apunten para poder cubrir esa necesidad mediante este turno abierto. En este ejemplo muestra dos tramos de horas que se van a publicar como oferta de horas.

Además, antes de publicar la oferta de horas, te permite indicar para que tipo de horas quieres realizar la oferta. Puede ser que la quieras publicar como normales dentro de su jornada o de forma extraordinaria.
