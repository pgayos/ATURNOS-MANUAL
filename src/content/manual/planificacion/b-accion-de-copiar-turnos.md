---
schemaVersion: "1.0"
contentId: planificacion-b-accion-de-copiar-turnos
title: Acción de copiar turnos
description: Seleccionando esta acción se despliegan en la configuración avanzada una serie de configurables para realizar la acción acorde a las preferencias del administrador.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Acción de copiar turnos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: accion
    label: Accion
  - id: copiar
    label: Copiar
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
    - https://manual.aturnos.com/knowledgebase/b-accion-de-copiar-turnos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/b-accion-de-copiar-turnos/
ai:
  answerableQuestions:
    - ¿Cómo puedo acción de copiar turnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/b-accion-de-copiar-turnos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/b-accion-de-copiar-turnos/
  contentHash: 0292bfb04cb3f752107226118756725286a0a93b6768f93e4369ff444c206d81
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Seleccionando esta acción se despliegan en la configuración avanzada una serie de configurables para realizar la acción acorde a las preferencias del administrador.

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

![b. Acción de copiar turnos](/media/manual/b-accion-de-copiar-turnos-df85262d20.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-bb6e1fec49.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-c2f3164d5e.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-8d0d430d6e.webp)
