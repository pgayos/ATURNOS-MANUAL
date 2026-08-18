---
schemaVersion: "1.0"
contentId: control-horario-conceptos-tipo-10-conceptos-asociados-al-control-de-presencia
title: "Conceptos tipo 10: Conceptos asociados al control de presencia"
description: "El módulo de Control de Presencia activa el concepto de cálculo: Control de Presencia (Nocturnidad) que recupera el número de horas con marcajes en el periodo Nocturno."
contentType: concept
module: Control horario
submodule: Fichajes
intent: "Conceptos tipo 10: Conceptos asociados al control de presencia"
audience:
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: asociados
    label: Asociados
  - id: conceptos
    label: Conceptos
  - id: control
    label: Control
  - id: presencia
    label: Presencia
  - id: tipo
    label: Tipo
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
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-10-conceptos-asociados-al-control-de-presencia/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-10-conceptos-asociados-al-control-de-presencia/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre conceptos tipo 10: Conceptos asociados al control de presencia?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-10-conceptos-asociados-al-control-de-presencia/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-10-conceptos-asociados-al-control-de-presencia/
  contentHash: 744e79565d7815520c57ec1e21608f3194095db859ff070b03f678bdf010f10e
  migratedAt: 2026-08-17
labels: []
---
## Resumen

El módulo de Control de Presencia activa el concepto de cálculo: Control de Presencia (Nocturnidad) que recupera el número de horas con marcajes en el periodo Nocturno.

## Qué debes saber
ADMINISTRAR → NOMINAS → CONCEPTOS DE CALCULO

ADMINISTRAR → CONCEPTOS DE NOMINA

Ejemplo

En el ejemplo explicativo, se visualiza los marcajes realizados por el trabajador entre el 3 de agosto y el 9 de agosto.

La hora de inicio del periodo nocturno son las 22:00 y la de fin las 08:00

El día 3:

Turno de 20:00 a 08:00 planificados. Marcaje de inicio a las 20:30 y de fin a las 07:58. El concepto horas presencia nocturnidad devuelve 9,97 horas (resta 2 minutos desde las 07:58 a las 08:00)

El día 5:

Turno de mañana de 08:00 a 15:00. Marcaje de inicio a las 07:38 y de fin a las 15:25. El concepto horas presencia nocturnidad devuelve 0,37 horas (desde las 07:38 hasta las 08:00)

El día 7:

Sin turno planificado. Marcaje de inicio a las 21:00 y de fin a las 06:07. El concepto horas presencia nocturnidad devuelve 8,12 horas (desde las 21:00 hasta las 06:07)

El día 9:

Horas extras desde las 06:00 a las 14:00. Marcaje de inicio a las 06:00 y de fin a las 14:00. El concepto horas presencia nocturnidad devuelve 2 horas (desde las 06:00 hasta las 08:00)

En ADMINISTRAR → NOMINAS → ESTADISTICA DIARIA

Este concepto recupera un valor 1 cuando el trabajador tiene, al menos, un fichaje de entrada y salida del tipo indicado en el día, Se precisa para el cálculo dos fichajes del mismo tipo.

Se excluyen los fichajes que comienzan en un día y terminan en otro.

Es un concepto que activa el abono de un concepto de nómina, a través de un concepto que opera entre conceptos.

Se precisa crear el tipo de fichaje accede al Manual Añadir tipos de fichaje

Una vez creado se accede a ADMINISTRAR → NOMINAS → CONCEPTOS.

Ejemplo:

En la estadística diaria se recupera un valor 1 por cada día que tenga un fichaje de entrada y salida del tipo: Teletrabajo.

El día 02/10/2023 tiene 3 fichajes del tipo Teletrabajo (2 fichajes de entrada y 1 de salida), en la estadística diaria devuelve valor

El día 03/10/2023 tiene un fichaje de entrada del tipo Teletrabajo, en la estadística diaria no devuelve valor

El día 04/10/2023 tiene dos fichajes del tipo Teletrabajo ( 1 fichaje de entrada y 1 de salida), en la estadística diaria devuelve valor

El día 05/10/2023 no tiene fichajes del tipo Teletrabajo, en la estadística diaria no devuelve valor

El día 06/10/2023 tiene cuatro fichajes del tipo Teletrabajo ( 2 fichajes de entrada y 2 de salida), en la estadística diaria devuelve valor
