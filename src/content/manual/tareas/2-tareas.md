---
schemaVersion: "1.0"
contentId: "tareas-2-tareas"
title: "Tareas en aTurnos"
description: "Desde el menú de Tareas – Tareas, se van a mostrar el histórico con las tareas o citas que se han creado o solicitadas por servicios."
contentType: reference
module: "Tareas"
submodule: "General"
intent: "Tareas en aTurnos"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "tareas"
    label: "Tareas"
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
    - "https://manual.aturnos.com/knowledgebase/2-tareas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-tareas/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre tareas en aTurnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "c98093d4d4496859343b7765860da7d2d97c9f01d21c7490e49e4e1e3c2e6a66"
  migratedAt: 2026-08-17
---
## Resumen

Desde el menú de Tareas – Tareas, se van a mostrar el histórico con las tareas o citas que se han creado o solicitadas por servicios.

## Contenido

- Filtro: se puede filtrar la información que deseas visualizar tanto por trabajador que la realiza como por la tarea que hace (por Especialidad o servicio, cliente, entre otros).
- Acciones: entre las opciones encontrarás:

1. Borrar Tarea: te permitirá borrar las tareas que tengas en ese momento visibles en la tabla.
2. Desasignar tareas: con esta opción se quitará la asignación de las tareas a los trabajadores que estén visibles en ese momento en la plantilla o tabla (pudiendo posteriormente reasignar la misma a otro trabajador).
3. Tarea: permite crear una nueva tarea donde se debe informar la descripción de la tarea a realizar, la experiencia o tipo de servicio que se va a prestar, seleccionar el trabajador que le atenderá dicha tarea o dejarlo abierto, así como fecha y hora de inicio y fin de la misma.
4. Añadir tareas de plantilla

Esta tabla o plantilla indica la siguiente información:

- Ticket: muestra la abreviatura del servicio y el número que tiene asignado.
- Cola: indica el nombre del servicio requerido por el cliente
- Descripción: Aparecerá un comentario cuando el cliente registre información relacionada con el problema o incidencia que tenga (en caso de que lo indique).
- Trabajador: indica el trabajador que tiene que tiene asignada la tarea o cita.
- Inicio: día y hora en que inicia cita.
- Fin: día y hora en la que culmina cita.
- Loc. Inicio: se puede informar una localización en la que inicia el servicio ( Ver mas acerca de Localizaciones )
- Loc. Fin: se puede informar una localización en la que termina el servicio (que puede no ser la misma de inicio)
- Flexible:
- Estado: indica el estatus de la tarea o cita. En Azul se muestra cuando esta siendo atendida Actualmente (sin terminar aún) mostrando también la hora en la que se inicio la atención. En Gris aquellas citas que ya fueron A tendidas con el detalle de hora de inicio y fin. Los estados en naranja indican que la cita aun no se ha comenzado lleva Retraso. En verde aparecen las citas que están sin comenzar próximas o pendientes a iniciarse (aun no supera la hora solicitada por el cliente para la cita). Y por último, en morado el estatus de las citas que han sido canceladas con la hora de su cancelación.
- Acciones: desde esta columna podrás ver el detalle de la cita (en el icono del ojito). También podrás desasignar la tarea al trabajador que la tiene en el momento, cuando se realiza esta acción aparecerá una nueva opción en esta columna (con el icono de una manito) para asignar nuevamente esa tarea a otro trabajador, y finalmente el icono de la papelera (aparece luego de desasignar una tarea) para eliminar la cita o tarea.

A continuación se muestra un ejemplo de los iconos que aparecen en la columna de Acciones luego de desasignar la tarea a un trabajador:
