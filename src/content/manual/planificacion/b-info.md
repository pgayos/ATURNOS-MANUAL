---
schemaVersion: "1.0"
contentId: planificacion-b-info
title: info en aTurnos
description: En este apartado se muestra información a detalle del evento que está registrado en el cuadrante el día seleccionado.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: info en aTurnos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: info
    label: Info
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
    - https://manual.aturnos.com/knowledgebase/b-info/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/b-info/
ai:
  answerableQuestions:
    - ¿Cómo puedo info en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/b-info/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/b-info/
  contentHash: 0fb97ac3bea47ff5a9939a58d2322a1653ba2fbf8b6beeb166d0a98d335be2f8
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En este apartado se muestra información a detalle del evento que está registrado en el cuadrante el día seleccionado.

## Procedimiento
En ocasiones el trabajador puede estar planificado en más cuadrante de otros equipos. En el caso de que tenga planificación en otros cuadrantes el sistema informa la planificación de la semana de todos los equipos en el que se encuentra dado de alta.

Cuando en el día se encuentra registrada una “Petición” del trabajador (ya aprobado por su supervisor), al entrar en la información se mostrará en la columna de Peticiones el icono para ver el detalle de la misma, así como la planificación que tenía asignados anteriormente (Cuadrante anterior).

Se muestra también la opción de Deshacer acción que es muy útil si por algún motivo, luego de aprobar una petición (de vacaciones, un turno, horas, etc.), necesitas deshacerla o cancelarla. Desde aquí tendrás la opción de hacerlo y recuperar los eventos que tenia registrados el trabajador antes de hacer la petición.

Para ver mas detalles de cómo deshacer la acción puedes revisar el siguiente enlace: Peticiones y Cambios – ¿Cómo deshacer la acción?

Otra de las vistas (de las mas comunes) que se pueden obtener al hacer clic en la opción de “Info” se presenta cuando el trabajador tiene datos de planificación (se le ha aplicado un patrón de turnos). En este caso el modal que se muestra es el siguiente:

Identificando los siguientes conceptos:

- Abreviatura: Siglas con las que se identifica el turno seleccionado.
- Patrón: Nombre del patrón que tiene aplicado el trabajador en esa rotación.
- Índice: indica la celda o el día que tiene ese turno seleccionado en la secuencia establecida dentro del patrón. Ejemplo, si mi patrón de rotación es M T N L L entonces la N corresponderá con el índice 3 de dicho patrón.
- Escalonado: número de días que constituye cada período en el patrón (Ver mas en Variables del patrón )
- Periodo: un patrón puede estar compuesto por varios períodos (ciclos) o creado para aplicar a uno o mas número de trabajadores. Cuando es así se identifica cada período o linea del patrón con una secuencia numérica, y en este concepto se muestra en qué período del patrón esta esa secuencia.
- Ver: haciendo clic en este icono se mostrará la secuencia del patrón completo.

Esta visualización es útil cuando, por ejemplo, se necesita saber en qué índice del patrón se encuentra el trabajador para poder aplicar el mismo patrón a un nuevo empleado desde ese día cumpliendo la misma secuencia de turnos.
