---
schemaVersion: "1.0"
contentId: "planificacion-15-pegar-desde-excel"
title: "Pegar desde Excel"
description: "Al seleccionar esta opción, se abrirá la siguiente ventana, donde te indicará que pegues los turnos que has copiado desde tu excel, éstos se crearan a partir del día seleccionado en el cuadrante."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Pegar desde Excel"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
  - role: "Desarrollador API"
    access: applicable
entities:
  - id: "desde"
    label: "Desde"
  - id: "excel"
    label: "Excel"
  - id: "pegar"
    label: "Pegar"
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
    - "https://manual.aturnos.com/knowledgebase/m-pegar-desde-excel/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/m-pegar-desde-excel/"
ai:
  answerableQuestions:
    - "¿Cómo puedo pegar desde Excel?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "ebe92c9952cd6c871b06b5181fe06062fcce6b8dc1bf098471a8ca656df0918a"
  migratedAt: 2026-08-17
---
## Resumen

Al seleccionar esta opción, se abrirá la siguiente ventana, donde te indicará que pegues los turnos que has copiado desde tu excel, éstos se crearan a partir del día seleccionado en el cuadrante.

## Contenido

Para pegar una secuencia de turnos directamente desde Excel, hay que tener en cuenta los siguientes puntos:

- La abreviatura de los turnos tiene que ser idéntica a los turnos creados en aTurnos (en Planificador → Tipos de turno ). Si las Abreviaturas no existen, no se completará correctamente la opción de pegar.
- Los periodos tienen que coincidir con los trabajadores visualizados.
- Los turnos se insertan de uno en uno para garantizar el cumplimiento de las restricciones.

Para ver más sobre este proceso, accede al siguiente enlace: ¿Cómo pegar mi planificación de Excel en el cuadrante de aTurnos?

En aTurnos, dispones de otra opción de importación más rápida mediante un fichero CSV, te puedes informar en este enlace: Importación de planificación.
