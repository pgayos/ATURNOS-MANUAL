---
schemaVersion: "1.0"
contentId: "planificacion-7-3-bolsas"
title: "Bolsas en aTurnos"
description: "Aprende a bolsas en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Bolsas en aTurnos"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
  - role: "Desarrollador API"
    access: applicable
entities:
  - id: "bolsas"
    label: "Bolsas"
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
    - "https://manual.aturnos.com/knowledgebase/7-3-bolsas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/7-3-bolsas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo bolsas en aTurnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "3f8f860720a9c90c99eff1cbee57ec3a43b37c6c65ff76540208be7377d0d1e8"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a bolsas en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Es una manera rápida y fácil de acceder a un grupo de trabajadores que sabemos que podrán estar disponibles para hacer determinado turno u horas de trabajo, a través de una bolsa de candidatos. Este listado de trabajadores es creado y seleccionado por el Administrador.

El sistema, por si solo irá posicionando a los trabajadores según la cantidad total de horas que lleven realizadas en bolsa, entonces, como primera opción de la lista aparecerá el trabajador que tenga menos horas trabajadas en Bolsa.

Ese orden o posicionamiento de los trabajadores es sensible a penalizaciones de horas. Las penalizaciones son horas que añade el administrador, por el motivo que considere, con el fin de descender la posición del trabajador.

1. Desde el menú en Administrar, puedes acceder a “ Bolsas ”. Cree una nueva bolsa desde la opción “ Añadir ” y desígnale un nombre.
2. Una vez creado, configure la bolsa desde el botón Editar (icono del lápiz) de la columna acciones. Al editar, aparece un listado a modo de tabla con los siguientes encabezados: Nombre: muestra el nombre del trabajador. Participa: desde esta columna el administrador selecciona los candidatos que participarán y serán los disponibles para asignar tipos de turnos u horas gestionadas para esa bolsa. Tiene la opción de seleccionar a TODOS los trabajadores desde este encabezado. Horas iniciales: el administrador puede añadir horas que el trabajador ya tenía acumuladas en bolsa previamente pero que no estaban registradas en aTurnos. Penalización: son horas que añade el administrador, por el motivo que considere, con el fin de descender la posición del trabajador. Estas horas se sumarán al Total de horas haciendo que baje de posición en la tabla. Última llamada: fecha en la que se le asignó al trabajador el ultimo evento en la bolsa. Total: muestra el total de horas (independientemente de su tipo: Normal, extra, etc.) realizadas en bolsa, sumando incluso las horas de penalización.
3. Una vez editada, Guarda la modificación que se han realizado.

Una vez creada la bolsa, puedes insertar tanto turnos como horas para computar estas horas a al bolsa creada, en los siguientes enlace te contamos como hacerlo: Insertar horas en bolsa.

Desde el Cuadrante, el administrador puede asignar un turno y horas de bolsa a uno o varios trabajadores. Según la acción que desee realizar tiene tres opciones:

1. Planificar un turno desde la bolsa de trabajo
2. Planificar horas desde la bolsa de trabajo
3. Planificar horas desde la bolsa de trabajo a un determinado trabajador
