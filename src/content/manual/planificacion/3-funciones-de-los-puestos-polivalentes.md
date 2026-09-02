---
schemaVersion: "1.0"
contentId: planificacion-3-funciones-de-los-puestos-polivalentes
title: "Funciones de los puestos: polivalentes"
description: Las especialidades o funciones se valoran desde el 1 (no tiene asociada ninguna función) al 5, que determina la función establecida para el puesto.
contentType: concept
module: Planificación
submodule: Turnos y patrones
subtopic: ""
intent: "Funciones de los puestos: polivalentes"
audience:
  - role: Administrador
    access: applicable
entities:
  - id: funciones
    label: Funciones
  - id: polivalentes
    label: Polivalentes
  - id: puestos
    label: Puestos
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
    - https://manual.aturnos.com/knowledgebase/3-funciones-de-los-puestos-polivalentes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-funciones-de-los-puestos-polivalentes/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre funciones de los puestos: polivalentes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-funciones-de-los-puestos-polivalentes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-funciones-de-los-puestos-polivalentes/
  contentHash: e16178c4c06e5ee09a2bf8e8c35de0c646a54be4784c236bba29e99a5dd12b86
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre funciones de los puestos: polivalentes, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Las especialidades o funciones se valoran desde el 1 (no tiene asociada ninguna función) al 5, que determina la función establecida para el puesto. En este ejemplo, el puesto está dedicado a la Financiación. Los puestos pueden tener más de una especialidad, como en el caso de los puestos polivalentes.

CAMBIOS DE FUNCIÓN: Le permite modificando las especialidades cambiar las funciones del puesto de manera que en el caso de que tuviera muchas peticiones de Devolución, por ejemplo, puede modificar la especialidad del puesto, dando valor 5 a Devolución y pasando del 5 al 1 en Financiación.

No olvide de GUARDAR para que los cambios se hagan efectivos.

En el caso de cambiar una función de puesto tenga la precaución de comprobar si el puesto que cambia tiene citas pendientes.

A los puestos se les asignan turnos (el horario de apertura) y cada vez que el cliente pide una cita, se reserva un espacio de tiempo (slot) en el turno que el puesto tenga definido. Es obligatorio crear turnos de trabajo, que agruparemos en patrones para planificar a los puestos de atención.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![3. Funciones de los puestos: polivalentes](/media/manual/3-funciones-de-los-puestos-polivalentes-ed468b3151.png)
