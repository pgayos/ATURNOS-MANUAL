---
schemaVersion: "1.0"
contentId: gestion-de-personal-mensajes-in-app
title: Mensajes in-APP
description: Se trata de notificaciones que va a poder lanzar el administrador del equipo de tal manera que le aparezca el mensaje a todos los miembros de su equipo en la app cuando éste indique y de la.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
subtopic: ""
intent: Mensajes in-APP
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: app
    label: App
  - id: mensajes
    label: Mensajes
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
    - https://manual.aturnos.com/knowledgebase/mensajes-in-app/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/mensajes-in-app/
ai:
  answerableQuestions:
    - ¿Cómo puedo mensajes in-APP?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/mensajes-in-app/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/mensajes-in-app/
  contentHash: d827eb531ba84a7e535f89d0d608fc66d5402e5cd4e495a0f7e5c82c45acfba4
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a mensajes in-APP, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Se trata de notificaciones que va a poder lanzar el administrador del equipo de tal manera que le aparezca el mensaje a todos los miembros de su equipo en la app cuando éste indique y de la forma que indique. Así, se podrá lanzar un mensaje común en masa a todo el equipo, ya sea por un nuevo ajuste general, para felicitar las fiestas, etc.

Para crear el mensaje y lanzarlo hay que hacerlo desde el menú RRHH → Acciones → Notificaciones APP → Añadir:

Haciendo clic en el botón “añadir” se rellenan los siguientes campos:

- Equipos: el equipo donde quiero que aparezca el mensaje
- Título: se añade el título de la notificación
- Mensaje: el mensaje que aparecerá a los trabajadores y administradores del equipo en el mensaje
- Fecha de inicio: a partir de qué fecha y hora quiero que aparezca el mensaje (aparecerá una vez que el usuario se meta en su APP)
- Fecha fin: hasta qué fecha quiero que aparezca el mensaje (si el usuario no se ha metido en ese periodo de tiempo en la APP, el mensaje no le aparecerá)
- Nivel mínimo y nivel máximo: estos son los roles a los cuales les llegará la notificación creada. Por ejemplo, si el nivel mínimo es Validador y el rol máximo es el Administrador Total, le llegará la notificación a los roles de Validador, Planificador y Administrador Total.

Una vez que esté listo el mensaje, se hace clic en “Guardar” y aparecerán todas las notificaciones creadas de la siguiente manera, pudiendo eliminarlas (papelera) y modificarlas (botón de acción verde):

Cuando el trabajador inicie sesión en la app con su usuario y contraseña, le aparecerá en pantalla lo siguiente:

Una vez que éste le de a “Aceptar”, el mensaje desaparecerá y no le volverá a aparecer al usuario.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Mensajes in APP](/media/manual/mensajes-in-app-29752c48b2.webp)

![Mensajes in APP](/media/manual/mensajes-in-app-e88d639bfc.webp)

![Mensajes in APP](/media/manual/mensajes-in-app-03a83f6d8b.webp)

![Mensajes in APP](/media/manual/mensajes-in-app-256d582990.webp)
