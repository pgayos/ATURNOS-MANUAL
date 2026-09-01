---
schemaVersion: "1.0"
contentId: planificacion-c-accion-de-mover-turnos
title: Acción de mover turnos
description: La particularidad de esta opción es que los turnos que tenga planificado el trabajador a sustituir en las fechas seleccionadas, se le pasan al trabajador sustituto quedándose el trabajador a.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Acción de mover turnos
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: accion
    label: Accion
  - id: mover
    label: Mover
  - id: turnos
    label: Turnos
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
    - https://manual.aturnos.com/knowledgebase/c-accion-de-mover-turnos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/c-accion-de-mover-turnos/
ai:
  answerableQuestions:
    - ¿Cómo puedo acción de mover turnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/c-accion-de-mover-turnos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/c-accion-de-mover-turnos/
  contentHash: 09896976cfa7cbb17b3b73d6b9ce3dca38bebeae049b976e4495a747dc34aae9
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a acción de mover turnos, con instrucciones y contexto revisables por el equipo de aTurnos.

La particularidad de esta opción es que los turnos que tenga planificado el trabajador a sustituir en las fechas seleccionadas, se le pasan al trabajador sustituto quedándose el trabajador a sustituir con el cuadrante vacío en esas fechas.

## Configuración avanzada

Se pueden seleccionar estas opciones:

- Colocar al trabajador sustituto debajo del trabajador a sustituir, asignándole la misma localización por defecto. Esta opción en SI cambia el orden en el cuadrante, situando al trabajador que recibe los turnos, en este caso, debajo del trabajador al que se los ha copiado, asignándole la misma localización por defecto. Si se configura como NO, no realizará esta opción
- No copiar vacaciones. Con la opción en SÍ no copiará las vacaciones, sin embargo, con la opción en NO sí que las copia.
- Copiar solo turnos con horas. Con la opción en SÍ, copiará solo los turnos con horas, con la opción en NO copiará también los turnos sin horas como el turno por defecto X que es un saliente de turno.
- No copiar cambios pendientes. Con la opción en SI no copiará los cambios pendientes que tenga solicitados el trabajador a sustituir, si se marca NO, si se copiarán.
- No copiar horas complementarias y extras. Con la opción en SÍ no las copiaría, pero con la opción en NO, sí que las copia.
- Copiar datos de planificación. Con la opción en SÍ, copiaría estos datos, y con la opción en NO, no los copiaría. Estos datos aparecen en el perfil del trabajador, es la última opción de la pestaña General.

- Copiar pre-peticiones: Con la opción en Sí te permitirá aplicar los turnos planificados que tenía el trabajador a sustituir al trabajador sustituto, antes de que le hayan aceptado las peticiones de permisos al trabajador a sustituir. Con la opción en NO, no los aplicará.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Configuración avanzada](/media/manual/configuracion-avanzada-bb6e1fec49.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-c2f3164d5e.webp)

![c. Acción de mover turnos](/media/manual/c-accion-de-mover-turnos-d3b43f31d9.webp)

![c. Acción de mover turnos](/media/manual/c-accion-de-mover-turnos-3e8a8b22c8.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-8d0d430d6e.webp)
