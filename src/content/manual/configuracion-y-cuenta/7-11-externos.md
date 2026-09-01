---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-7-11-externos
title: Externos
description: El usuario externo en aTurnos tiene un rol de consultor, puede acceder a los equipos para visualizar la planificación de los trabajadores, marcajes del control de presencia y datos de contac.
contentType: procedure
module: Configuración y cuenta
submodule: Roles y permisos
subtopic: ""
intent: Externos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: externos
    label: Externos
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
    - https://manual.aturnos.com/knowledgebase/7-11-externos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-11-externos/
ai:
  answerableQuestions:
    - ¿Cómo puedo externos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-11-externos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-11-externos/
  contentHash: 46c0b64e41b9298d76b17e43d57b08246b64a28cd14b9c4fa126a988d26701e7
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a externos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
El usuario externo en aTurnos tiene un rol de consultor, puede acceder a los equipos para visualizar la planificación de los trabajadores, marcajes del control de presencia y datos de contacto de los trabajadores (según configuración de permisos). No disponen de opciones para modificar datos de planificación, marcajes, ajustes o cualquier otra acción que han realizado los trabajadores y administradores de los equipos.

Algunos ejemplos de usuarios externos pueden ser los representantes de los trabajadores, supervisión externa de un comité de empresa, de expertos o directivos o supervisores de guardias.

Este usuario puede tener permiso de acceso a determinados menús dentro de aTurnos, según personalización que solicite el cliente.

Desde aquí se da de alta a un nuevo usuario externo. Para ello hay que hacer clic en el botón en la parte superior derecha ‘Nuevo Externo’.

Se nos mostrará un formulario para crear el ‘Nuevo externo’, necesitando completar los siguientes campos:

- Nombre: identificación del usuario que se va a crear.
- Email: correo electrónico con el que accederá en aTurnos como externo.
- Localización: departamento, zona o centro de trabajo al que poder tener acceso para visualizar la información. En el caso de dejar la opción “sin localización” el externo puede visualizar todos los datos de los trabajadores de cualquier localización.

Una vez completada la información, haciendo clic en ‘Guardar’, quedará registrado el nuevo usuario externo.

Todos los externos que se creen, aparecerán en el listado del menú de ‘Externos’, con su nombre, email y localización.

Estos usuarios se pueden borrar, para que de esta forma no vuelvan a acceder al equipo, con solo hacer clic en el icono de la papelera, quedará eliminado.

El externo deberá realizar la acción de “No me acuerdo de mi contraseña” desde la página web de aTurnos, para que se le envíe un enlace a su correo con el cual generar una contraseña de acceso.

La contraseña también puede ser generada por aTurnos, el administrador debe informar al equipo de soporte de aTurnos para que la generen sin ningún proceso automático por razones de seguridad.

Al acceder un usuario con rol externo a un equipo de trabajadores, tiene permiso a visualizar y consultar las siguientes opciones de menú:

1. Cuadrante:herramienta básica de aTurnos y desde donde se puede visualizar la planificación de los trabajadores del equipo.
2. Cuadrante anual: puede visualizar la planificación asignada en el año de cualquier trabajador del equipo.
3. Trabajadores: puede visualizar el listado de trabajadores del equipo. Opcionalmente, según permisos del equipo, puede tener la información de contacto de los trabajadores (teléfono de contacto y/o mail).
4. Control de presencia: puede visualizar el listado de marcajes de los trabajadores en el periodo de tiempo que se determine. Consultando el nombre del trabajador, hora de marcaje, si este ha sido una entrada o salida, localización, tipo de marcaje…

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![7.11 Externos](/media/manual/7-11-externos-f7ea6af3a6.png)

![7.11 Externos](/media/manual/7-11-externos-29c1142e15.png)

![7.11 Externos](/media/manual/7-11-externos-18e10d6a8a.png)

![7.11 Externos](/media/manual/7-11-externos-697c0d3ea4.png)
