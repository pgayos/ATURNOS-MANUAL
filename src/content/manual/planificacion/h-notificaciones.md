---
schemaVersion: "1.0"
contentId: planificacion-h-notificaciones
title: Notificaciones
description: A través ADMINISTRAR → AJUSTES → NOTIFICACIONES se accede al menú donde se parametrizan las notificaciones que van a recibir los usuarios de aTurnos, atendiendo al rol de cada uno de ellos:.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Notificaciones
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: notificaciones
    label: Notificaciones
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
    - https://manual.aturnos.com/knowledgebase/g-notificaciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/g-notificaciones/
ai:
  answerableQuestions:
    - ¿Cómo puedo notificaciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/g-notificaciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/g-notificaciones/
  contentHash: 84ae91ce153bf597b6f074b94e13cf08baf8d434c2fe96c1daf26daeabbed593
  migratedAt: 2026-08-17
labels: []
---
## Resumen

A través ADMINISTRAR → AJUSTES → NOTIFICACIONES se accede al menú donde se parametrizan las notificaciones que van a recibir los usuarios de aTurnos, atendiendo al rol de cada uno de ellos:.

## Procedimiento
Para ello dividimos los procesos de aTurnos donde ha existido actividad notificando las acciones que se indiquen atendiendo al rol.

- CUADRANTE: Se notifican todas las acciones que impliquen modificación en el cuadrante, añadir turnos, borrarlos, modificar el tipo de turno asignado, horas, etc. Las acciones en el cuadrante no se notificarán si la fecha de estas es anterior a la hora actual más los días informados en el campo “Horizonte de notificación (CUADRANTE)”
- CAMBIOS DE TURNO: Se notifican las peticiones de cambios de turno realizadas entre trabajadores, así como la aprobación de los mismos atendiendo al flujo de aprobación de los cambios de turnos
- PETICIONES: Se notifican las peticiones solicitadas por los usuarios (trabajadores, validadores, planificadores y /o totales), incluyen las peticiones de vacaciones, de permisos, etc. así como la aprobación de las peticiones de las mismas.
- DENEGAR PETICIONES Y CAMBIOS: Se notifican la denegación tanto de las peticiones de vacaciones, permisos, etc, así como la denegación de los cambios de turno solicitados por los trabajadores
- COMENTARIOS CHAT/TABLóN DE ANUNCIOS: Se notifican los comentarios realizados en el Tablón de Anuncios. Se recomienda poner a NO por posible saturación de correos.
- TAREAS: Se notifica cuando se asigna y/o desasigna una tarea a un trabajador.
- CONTROL HORARIO: Se notifican las peticiones realizadas con respecto al módulo de Control Horario, como peticiones de marcajes, etc.
- COMENTARIOS EN EL CUADRANTE: Se notifican los comentarios realizados en el cuadrante.
- DOCUMENTOS: Se notifica cuando hay un nuevo documento disponible para el trabajador.

Las notificaciones se gradúan en 4 grupos, de forma que para cada uno de los procesos se pueda seleccionar el momento en el que aTurnos va a enviar la notificación.

- Alta: Enviamos las notificaciones a los pocos minutos de la acción realizada. Tened cuidado con no saturar con correos constantes las bandejas de entrada de los usuarios.
- Media: Nos esperamos 1 hora para enviar la notificación. Todo lo que ocurra dentro de la hora se envía en una única notificación.
- Baja: Hasta el día siguiente no se envía la notificación.
- No: No notifica la acción indicada.

A modo de ejemplo, si en el flujo de los cambios de turno están indicada que pueden aprobarlos desde el rol validador al total en un equipo con muchos trabajadores (de más de 200 personas, por ejemplo) agrupados por localización, para que al administrador total no le saturen las notificaciones de peticiones de todos los trabajadores, se puede indicar en su casilla que NO se notifica cada petición y que a los validadores y planificadores se se le envía la notificación, atendiendo a su localización.

En el campo “Email envío cuadrante anual” se puede informar un correo para cuando desde el cuadrante anual se utiliza la función “Enviar cuadrante anual por mail” (Ver en el Manual. Cuadrante anual ) envíe una copia al correo aquí informado

Ver más acerca de visualización de notificaciones de Cambios de turno y Peticiones
