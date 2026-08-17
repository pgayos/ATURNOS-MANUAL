---
schemaVersion: "1.0"
contentId: "planificacion-11-anadir-horas"
title: "Añadir horas"
description: "Con esta opción se pueden añadir horas, bien sean extra, complementarias o de cualquier otro tipo creado, en Planificador → Tipos de turno → Horas. Cómo planificar horas."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Añadir horas"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "anadir"
    label: "Anadir"
  - id: "horas"
    label: "Horas"
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
    - "https://manual.aturnos.com/knowledgebase/j-anadir-horas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/j-anadir-horas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo añadir horas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "5536bc9bcf5b879ce91937974febafcf32fecd900861a5ce06de1690ecf422b3"
  migratedAt: 2026-08-17
---
## Resumen

Con esta opción se pueden añadir horas, bien sean extra, complementarias o de cualquier otro tipo creado, en Planificador → Tipos de turno → Horas. Cómo planificar horas.

Para ello, hay que introducir una descripción (por ejemplo, la razón), posteriormente la duración de esas horas, y el tipo (por defecto en aTurnos existen las horas extra y complementarias, pero se pueden crear más, como se ha indicado en el párrafo anterior). Estas horas pueden considerarse dentro de una bolsa o fuera de ésta. Para crear una bolsa hay que acceder a: Administrar → Bolsas.

### ¿Cómo planificar horas desde la bolsa de trabajo a un determinado tipo de trabajador?

Desde este menú “Añadir horas”, en la parte inferior del formulario, es importante informar en la opción “Bolsas” el nombre de la bolsa de trabajo (ver Cómo crear una bolsa ), a la cual corresponden las horas que se insertarán en el cuadrante.

También es importante definir, en el mismo formulario, qué tipo de hora será considerada (extras, normales, etc.) para estas horas de la bolsa de trabajo. Dependiendo de la bolsa que se seleccione, en el listado de trabajadores que ofrece el sistema aTurnos, aparecerán aquellos que pertenecen a dicha bolsa, ordenados atendiendo al número de horas de esta bolsa de trabajo, cuando se haga clic en “Asignar trabajadores” y, a continuación, seleccionará el nombre del trabajador que realizará las mismas.

Las horas asignadas a un trabajador a través de bolsa, se encontrarán planificadas en el cuadrante, destacado con un borde de color rojo y un signo +, al trabajador seleccionado.
