---
schemaVersion: "1.0"
contentId: planificacion-a-accion-de-intercambio
title: Acción de intercambio
description: Esta opción permite intercambiar la planificación de dos trabajadores en un periodo de tiempo determinado.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Acción de intercambio
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: accion
    label: Accion
  - id: intercambio
    label: Intercambio
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
    - https://manual.aturnos.com/knowledgebase/a-accion-de-intercambio/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/a-accion-de-intercambio/
ai:
  answerableQuestions:
    - ¿Cómo puedo acción de intercambio?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/a-accion-de-intercambio/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/a-accion-de-intercambio/
  contentHash: ea2b7280a3d49abf5b3fd5aab54ac1375f11e89c73cff6d4b4bed408d195222b
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Aprende a acción de intercambio, con instrucciones y contexto revisables por el equipo de aTurnos.

Esta opción permite intercambiar la planificación de dos trabajadores en un periodo de tiempo determinado. Por ejemplo, si José rodríguez tiene un turno M todos los días durante la primera semana de Junio y Antonio Gutiérrez tiene los turnos T, mediante esta acción Antonio tendría la primera semana los turnos M y José los turnos T.

¡Importante! Los absentismos no se intercambian. También es importante saber que esta opción solo te deja seleccionar un único trabajador sustituto. Ya que el intercambio se realiza entre 2 personas.

¡OJO! No se debe confundir esta opción de intercambio con el intercambio de turno que se puede realizar entre trabajadores desde el cuadrante. La diferencia con respecto a la opción de intercambio del cuadrante radica en que el intercambio desde el cuadrante es únicamente un intercambio de turno en un único día, mientras que desde la opción Intercambio desde sustituciones es toda la planificación durante el periodo de tiempo que se desee.

## Configuración avanzada

Se pueden seleccionar estas opciones:

- Colocar al trabajador sustituto debajo del trabajador a sustituir, asignándole la misma localización por defecto. Esta opción en SI cambia el orden en el cuadrante, situando al trabajador que recibe los turnos, en este caso, debajo del trabajador al que se los ha copiado, asignándole la misma localización por defecto. Si se configura como NO, no realizará esta opción
- No copiar vacaciones. Con la opción en SÍ no copiará las vacaciones, sin embargo, con la opción en NO sí que las copia.
- Copiar solo turnos con horas. Con la opción en SÍ, copiará solo los turnos con horas, con la opción en NO copiará también los turnos sin horas como el turno por defecto X que es un saliente de turno.
- No copiar cambios pendientes. Con la opción en SI no copiará los cambios pendientes que tenga solicitados el trabajador a sustituir, si se marca NO, si se copiarán.
