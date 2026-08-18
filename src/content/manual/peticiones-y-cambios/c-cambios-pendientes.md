---
schemaVersion: "1.0"
contentId: peticiones-y-cambios-c-cambios-pendientes
title: Cambios pendientes
description: En Administrar → Ajustes → Cambios se pueden definir la configuración de los cambios de turno entre trabajadores.
contentType: reference
module: Peticiones y cambios
submodule: General
intent: Cambios pendientes
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: cambios
    label: Cambios
  - id: pendientes
    label: Pendientes
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
    - https://manual.aturnos.com/knowledgebase/2-5-4-cambios-pendientes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-5-4-cambios-pendientes/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre cambios pendientes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-5-4-cambios-pendientes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-5-4-cambios-pendientes/
  contentHash: a60ebe8e3611e8212f55576e4368cb59da9f90a426a6aced3b0fdbb620dc2f3b
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre cambios pendientes, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
En Administrar → Ajustes → Cambios se pueden definir la configuración de los cambios de turno entre trabajadores. Si se escoge que el Administrador tiene que aceptar las peticiones de cambios de turno entre compañeros, el administrador desde el menú peticiones y cambios → Pendientes → Cambios pendientes puede acceder a todos los cambios de turnos pendientes que tienen que pasar por su gestión:

- Solicitado por: persona que realiza el cambio y da comienzo al proceso del cambio de turno. Por lo general es un trabajador, pero también puede ser habitual que el proceso del cambio lo inicie el propio administrador del equipo.
- Día cambiado: día donde se va a realizar la modificación de la planificación de los trabajadores implicados en el cambio, en el caso de que sea aceptado por el administrador
- Fecha de solicitud: día cuando se realiza el proceso o petición del cambio de turno por el autor del cambio.
- Trabajadores implicados: son los 2 trabajadores que están implicados en el cambio y como consecuencia serán las personas a quienes se le modificará la planificación en el caso de que acepte el administrador el cambio de turno.
- Acción: las acciones que pueden realizar un administrador cuando tiene cambios de turno pendientes entre trabajadores de su equipo. Se puede visualizar toda la información del cambio haciendo clic en el símbolo del “ojo” (los trabajadores implicados, turnos originales antes y después…). Se puede denegar el cambio al hacer clic en el botón rojo “✖ “, en este caso se cancela el proceso de cambio de turnos, y los tipos de turnos vuelven a su estado inicial en el cuadrante. Se puede aceptar el cambio al hacer clic en el botón verde” ✔ “.

1. Accede a Menú → Cuadrante → Peticiones y Cambios → Cambios pendientes.
2. En la pestaña “Cambios pendientes” visualiza los cambios pendientes de gestionar
3. Para aprobarlo, haz clic en el botón “✔” de la columna acción. En el caso de que la petición sea de “Intercambio” en la pestaña de cambios pendientes solo aparecerá una solicitud que engloba el intercambio de los dos turnos. Sin embargo, con el tipo “Libre o doblaje” aparecen dos solicitudes que se deben gestionar individualmente. Otra manera de gestionar los cambios es a través de los botones “Aceptar todo” o “Denegar todo “, una vez se han revisado todas las solicitudes, este botón permite aprobarlas/denegarlas todas de manera masiva.
4. Al hacer clic, volverá a mostrarte una alerta sobre si realmente estás seguro o no de aceptar el cambio, pudiendo dejar un comentario al respecto.
5. Para confirmarlo, tienes que hacer clic en “aceptar”.
6. Finalmente, el cambio aceptado se reflejará en el cuadrante, sobre el día y en los trabajadores en cuestión.

¿Qué es un cambio de turno y cómo hacer un cambio de turno?
