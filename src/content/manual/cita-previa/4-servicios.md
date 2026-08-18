---
schemaVersion: "1.0"
contentId: "cita-previa-4-servicios"
title: "Servicios"
description: "Al seleccionar el icono de añadir, se mostrarán las opciones (en el recuadro de Experiencia) que tienes de servicios sobre los que requieras llevar un orden de citas o cola."
contentType: procedure
module: "Cita previa"
submodule: "General"
intent: "Servicios"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Trabajador"
    access: applicable
  - role: "Desarrollador API"
    access: applicable
entities:
  - id: "servicios"
    label: "Servicios"
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
    - "https://manual.aturnos.com/knowledgebase/4-1-servicios/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/4-1-servicios/"
ai:
  answerableQuestions:
    - "¿Cómo puedo servicios?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "29e76723e847b04493ac54b26195536822f5d5e1a9d86d15443a17bba779eff1"
  migratedAt: 2026-08-17
---
## Resumen

Al seleccionar el icono de añadir, se mostrarán las opciones (en el recuadro de Experiencia) que tienes de servicios sobre los que requieras llevar un orden de citas o cola.

## Contenido

Las experiencias o Especialidades deben crearse previamente para poder añadir la cola. Ver más detalle en ¿Cómo indicar qué servicio puede atender cada trabajador?

Una vez creados los servicios, aparecerán listados en una tabla con los siguientes conceptos:

Experiencia: se muestra el servicio que se ofrecerá al cliente y que realizará el trabajador el trabajador que tenga asignada esa especialidad.

Minutos/Tarea: indica cuál será la duración del servicio prestado por cada cliente.

Privado: indica si solo se pueden asignar tareas desde la tienda o empresa.

Acción: muestra dos opciones:

- La del icono de borrar (la papelera): para eliminar o borrar el servicio
- La del icono de editar (el lapicero): desde donde podrás configurar como quieres parametrizar el servicio, guiarán el funcionamiento y el campo del formulado que posteriormente deberá rellenar el cliente. Haciendo clic en él se despliega una pantalla que muestra tres pestañas de configuración. Iniciaremos con la pestaña de “Opciones básicas”.

Opciones básicas

1. La abreviatura: consiste en el identificativo de la reserva que irá junto al número, por ejemplo, “Reparación de pantallas” puede tener la siguiente abreviatura “RP” para distinguirla de otros servicios (por ejemplo, “Instalación de programas” con abreviatura “IP”).
2. Minutos/tarea. Esta opción te permite indicar cuánto dura cada servicio. Es decir, si para la “Reparación de pantallas” se necesitan 10 minutos, si un cliente hace una reserva a las 10:00, la siguiente reserva se podrá realizar a las 10:10 (10 minutos más tarde).
3. Minutos tras los cuales no se puede recuperar una tarea cancelada. Es decir, si cancelas una tarea, transcurridos 60 minutos (según lo indicado en el campo), no podrás recuperarla.
4. Datos de contacto obligatorios. Por defecto solo es obligatorio el correo electrónico, pero puedes forzar que el cliente también tenga que introducir el teléfono para terminar la reserva de la cita previa en el formulario.
5. Seleccionar trabajador. Esta opción permite al cliente (indicando “si”) escoger qué trabajador quiere que le atienda según el servicio escogido y la hora. Si indicas no, la tarea se asignará aleatoriamente al primer trabajador disponible para la hora escogida por el cliente.
6. Antelación para cita previa. Puedes indicar con cuánta antelación (en días) se podrán reservar citas.
7. Experiencia mínima. Se trata del nivel mínimo de puntuación de la especialidad que tienen que tener los trabajadores para ser aptos para realizar este servicio (ver más).

Para guardar, haz clic en Guardar cambios.

Opciones avanzadas

1. Privada: para determinar si la tarea solo se podrá asignar desde la tienda o por el contrario se podrá asignar desde cualquier lugar online.
2. Número máximo de ticket: indicará hasta qué número se emitirán los tickets para luego iniciar nuevamente el conteo. Es decir, si mi número máximo de tickets es de 200 al llegar a este último iniciará nuevamente la rueda desde el Nro. 01.
3. Las tareas online tienen preferencia sobre las pedidas en tienda si se retrasan
4. Activar automáticamente el “cliente en tienda”
5. Las peticiones en tienda no tienen límite: indica si vas a permitir que el cliente pida cita en tienda aun cuando la cola está llena o si por el contrario no podrá hacerlo. Las opciones que se ofrecen son “Si está llena la cola no permitir pedir más citas” y “Si el cliente está en tienda tiene que poder tener cita”
6. Orde n

Para guardar, haz clic en Guardar cambios.
