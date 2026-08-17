---
schemaVersion: "1.0"
contentId: "gestion-de-personal-1-tiempo-real"
title: "Tiempo Real"
description: "En este punto aparece el listado de tareas que han sido llamadas o que están siendo atendidas en el momento. Con el siguiente detalle:."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Tiempo Real"
audience:
  - role: "Trabajador"
    access: applicable
  - role: "Desarrollador API"
    access: applicable
entities:
  - id: "real"
    label: "Real"
  - id: "tiempo"
    label: "Tiempo"
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
    - "https://manual.aturnos.com/knowledgebase/1-tiempo-real/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-tiempo-real/"
ai:
  answerableQuestions:
    - "¿Cómo puedo tiempo Real?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  contentHash: "8ee00a4e657676d0ddd945a6afe7f6772394880b2e0564e9daed35de3a6a47a5"
  migratedAt: 2026-08-17
---
## Resumen

En este punto aparece el listado de tareas que han sido llamadas o que están siendo atendidas en el momento. Con el siguiente detalle:.

## Contenido

1.- Barra superior desplegable

- Icono “i”: muestra la leyenda de lo que significa cada color asignado en la columna del estado de la tarea. El estado en Gris significa que la tarea está Terminada, en AZUL significa que está siendo atendida ACTUALMENTE, en VERDE es que está PENDIENTE por atender y en NARANJA significa que la tarea lleva RETRASO.
- Fecha: seleccionar la fecha o día que quieres visualizar o consultar.
- Cualquier cola: esta opción viene informada por defecto, pero haciendo clic en el recuadro te permite seleccionar la cola o servicio que desea visualizar.
- Icono de Filtro: te permite seleccionar de manera rápida y sencilla la información que deseas visualizar. Bien sea para ver la información de un trabajador(es) en específico o realizar un filtrado por Tareas según la plantilla creada, la especialidad/rol (servicio) o por tipo (Sin asignar y/o Asignadas), así como filtrar por cliente (por email, nombre y/o apellido)
- Acciones: Te permite crear una nueva tarea o añadir tareas de plantilla.

2.- Llamados o en proceso:

- Ticket: aparece el nombre del servicio asignado.
- Descripción: muestra la descripción del problema o necesidad del cliente (cuando el cliente lo ha informado)
- Hora de inicio: indica la hora en la que se comienza a trabajar en ese ticket o tarea que sirve para manejar indicadores de tiempos de respuesta.
- Acción: en esta columna se mostrará en primer lugar el icono del “PLAY” (triangulo) que es cuando ha sido llamado el cliente pero no está iniciada la tarea, y luego (al hacer clic en “play” comenzar) aparecerá el icono de “STOP” (cuadrado) de manera que una vez el trabajador finalice la tarea haga clic en el mismo para cerrarla.

3.- Mostrar Ocupación

Haciendo clic sobre “Mostrar ocupación”, se desplegará la información de los trabajadores del equipo que tienen asignada la especialidad o experiencia requerida por cada servicio. De igual forma se muestra la disponibilidad de horarios de los trabajadores, en verde el horario que tienen asignado para realizar las tareas o atender las citas.

Haciendo clic nuevamente en “Mostrar ocupación” podrás ocultar nuevamente la información.

4.- Listado de tareas en cola

En esta tabla se muestran los siguientes conceptos:

- ID: indica la abreviatura del servicio conjuntamente con el número del ticket
- Cola: aparece el nombre del servicio requerido por el cliente.
- Trabajador: indica el nombre del trabajador que tiene asignada la tarea.
- Descripción: mostrará de comentario cuando el cliente (en el proceso de solicitud de cita) haya realizado algún comentario sobre el problema o necesidad que tiene.
- Cliente: aparece el nombre del cliente que solicitó la cita o el servicio.
- Fecha de Inicio: indica la hora de la cita o inicio de la tarea.
- Loc. Inicio: se puede informar una localización en la que inicia el servicio ( Ver mas acerca de Localizaciones )
- Loc. Fin: se puede informar una localización en la que termina el servicio (que puede no ser la misma de inicio)
- Tiempo espera: indica el tiempo que falta para atender o realizar la tarea, así como el tiempo de retraso que pueda llevar la misma.
- Tiempo Tarea: muestra la duración que lleva o llevó la realización de la tarea o cita.
- Estado: Se indica en colores el estatus o estado de la tarea. El estado en Gris significa que la tarea está Terminada, en AZUL significa que está siendo atendida ACTUALMENTE, en VERDE es que está PENDIENTE por atender y en NARANJA significa que la tarea lleva RETRASO.
- Acción: en este punto se muestran varias acciones que puedes realizar sobre la tarea:

1. Icono de Ver (el ojito): se muestra toda la información de la tarea:

1. Icono de Inicio o fin de Tarea o cita: Muestra la hora en la que empiezas a atender al cliente. Por consiguiente, una vez iniciada, también la puedes finalizar para pasar a la siguiente tarea o cita. Para iniciarla, tendrás que pulsar el botón de “ play ” (triangulo) y para terminarla debes pulsar “stop” (cuadrado).
2. Icono de Eliminar (la “X”): se selecciona para cancelar una tarea o cita, por ejemplo cuando el cliente no asiste o no esta puntual a la hora de la cita. (luego se podrá recuperar en caso de que la configuración del servicio lo permita.
3. Icono de Llamada (la campana): seleccionando este icono se hace la llamada al cliente para atender la cita y se espera que el cliente se acerque para su atención.
