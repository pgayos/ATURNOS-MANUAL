---
schemaVersion: "1.0"
contentId: planificacion-periodo-de-absentismo
title: Periodo de absentismo
description: Periodo de tiempo planificado en el cuadrante, el cual informa, que el trabajador se encuentra ausente en los días que incluyen este periodo, por un determinado tipo de absentismo, como por.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Periodo de absentismo
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: absentismo
    label: Absentismo
  - id: periodo
    label: Periodo
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
    - https://manual.aturnos.com/knowledgebase/periodo-de-absentismo/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/periodo-de-absentismo/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre periodo de absentismo?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/periodo-de-absentismo/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/periodo-de-absentismo/
  contentHash: fdef7769230370ac3a950959255420cdbece7307c0580c60c809c5a902b217ff
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre periodo de absentismo, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Periodo de tiempo planificado en el cuadrante, el cual informa, que el trabajador se encuentra ausente en los días que incluyen este periodo, por un determinado tipo de absentismo, como por ejemplo una baja por maternidad, por incapacidad temporal, permisos de larga duración …

Este periodo tiene una fecha de inicio. La fecha fin se puede informar si ya se conoce, o bien dejar la fecha de fin abierta hasta que se conozca.

Este periodo destaca, en el cuadrante, por sombrear de color azul las celdas de los días del cuadrante que pertenecen al periodo. Estos días puede estar planificados con turnos/horas o no poder estar planificados.

Si se solicita y se acepta una petición de un periodo de absentismo, se refleja en el cuadrante sombreado en azul los días del periodo solicitado. Solo en aquellos días que exista planificación se insertará el tipo de absentismo de la petición, en el turno planificado. En los días que no tiene planificación, no se registra el tipo de absentismo en el cuadrante porque no está asociado a ningún turno u hora, pero queda identificado como periodo de absentismo con el sombreado azul en las celdas de cuadrante.

En el caso, de planificar el cuadrante con turnos/horas a posteriori en los días del periodo de absentismo, si aparecerá el tipo de absentismo de la petición con el turno que se ha planificado en el cuadrante.
