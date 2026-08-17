---
schemaVersion: "1.0"
contentId: "tareas-7-configuracion-de-colas"
title: "Configuración de colas"
description: "Una vez dadas de alta las Especialidades se crean las Colas, acceda a Tareas → Procesos → Colas. Utiliza la opción Crear y selecciona una a una todas las especialidades creadas."
contentType: procedure
module: "Tareas"
submodule: "General"
intent: "Configuración de colas"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "colas"
    label: "Colas"
  - id: "configuracion"
    label: "Configuracion"
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
    - "https://manual.aturnos.com/knowledgebase/7-configuracion-de-colas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/7-configuracion-de-colas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo configuración de colas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "911c5a26a7018667bbc595a47612101bf3e2cf6c690ea7961962de1129e02dcb"
  migratedAt: 2026-08-17
---
## Resumen

Una vez dadas de alta las Especialidades se crean las Colas, acceda a Tareas → Procesos → Colas. Utiliza la opción Crear y selecciona una a una todas las especialidades creadas.

## Contenido

Una vez creada la cola, se edita para configurar correctamente el sistema y le permite modificar los minutos que se asignan a cada tarea (de 5 en 5 minutos), entre otras funcionalidades.

1.Privada (Solo se pueden asignar tareas por los trabajadores desde la tienda): En caso positivo las tareas en la cola solo pueden ser asignadas en tienda por los trabajadores desde el backoffice. Es decir, no es accesible desde a los clientes desde la Web, el APP o los kioscos. Suele ser NO.

2.Las tareas online tiene preferencia sobre las pedidas en tienda si se retrasan. En caso de existir tareas retrasadas online y pedidas en tienda, tiene prioridad las online antes las pedidas en tienda para beneficiar al cliente online que ayuda en al gestión de los tiempos. Opciones:

a) Si, dejar por defecto.

b) No.

3.Las peticiones en tienda no tiene límite. Opciones:

a) Si el cliente está en tienda tiene que poder tener cita. Si se selecciona esta opción, con independencia de que la cola de tareas este llena, el Kiosko seguirá dando citas. Por defecto establecida.

b) Si está llena la cola no permitir pedir más citas. En este caso el Kiosko no dará citas si la cola está llena.

4.Abreviatura que se muestra en el ticket de cita que imprime el Kiosko. Utilizar las iniciales de la función. (RF-)

5.Número máximo de tickets. Al llegar al 300 comienza de nuevo desde el 1´. No más de 3 dígitos.

6.Minutos/Tarea (Tiempo que se reserva a cada tarea en la cola). Determina la duración de los slots (periodo de tiempo) en el que se realiza la tarea, tanto cuando la reserva de tiempos es a través de la web como cuando la cita se realiza a través del Kiosko. Debe ser múltiplos de 5 minutos.

7.Minutos tras los cuales no se puede recuperar una tarea cancelada. Permite recuperar citas pasadas de clientes, en este caso al pasar 60 minutos no se podrá recuperar la cita.

8.Activar automáticamente el “cliente en tienda”. Cuando esta opción está activada el cliente tiene que avisar su presencia para poder ser llamada la tarea que le corresponde. Dentro de la lista de tareas en la botonera de acciones de la asignación de tareas aparece un botón de acción (una sombra de persona) en el listado de tareas. Por defecto, SI

9.Cantidad de tareas pendientes para visualizar en el Timeline (no llamadas en orden). Uso exclusivo a pantallas por puesto, no aplica en pantallas centrales. Por defecto, 1

10.Guardar las tareas originales al ser movidas

11.Se podrán escanear un número de pedido (QR). Aplicable en el caso de Pick Up, Delivery o Recogidas y/o Stop&Go

12.Orden

13.Texto que aparece en el kiosko en la solicitud de la cita.

14.Asunto del correo que aparece en el caso de que el usuario solicite una cita on-line.

15.Cuerpo del correo que recibe en usuario

16.Icono que aparece en el kiosko:
