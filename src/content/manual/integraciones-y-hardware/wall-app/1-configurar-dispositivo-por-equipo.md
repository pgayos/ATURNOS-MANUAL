---
schemaVersion: "1.0"
contentId: wall-app-1-configurar-dispositivo-por-equipo
title: "Configurar un dispositivo por equipo"
order: 1
description: "Cómo registra el administrador un dispositivo (tablet) para fichar por Wall App a nivel de un equipo concreto."
contentType: procedure
module: "Wall App"
submodule: "Manual de Wall App"
subtopic: ""
intent: "Configurar un dispositivo por equipo"
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
relatedTerms: []
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
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo configuro un dispositivo por equipo en Wall App?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  contentHash: "f0a305497761647c1991a0f0d834ee1d5dcb9ce83af62eeabc07fa9e1d4f4a7a"
  migratedAt: 2026-09-19
labels: []
---

## Resumen

El sistema puede configurarse a nivel de "Equipo" o de "Compañía". Esta acción solo la puede realizar un administrador total o superusuario.

## Procedimiento

1. El administrador del equipo entra por `https://wall.aturnos.com/` y hace clic en "Acceso administrador".
2. Accede con su usuario y contraseña, en dos pasos, y confirma "Iniciar sesión" en Wall App de aTurnos.
3. Una vez iniciada sesión, elige el equipo en el cual quiere registrar un dispositivo para el Control de Presencia por Wall App.
4. En el menú "Registrar dispositivo" se piden estos datos:
   - **Nombre del dispositivo**: identifica distintos dispositivos en el mismo equipo.
   - **Localización**: si cada dispositivo ficha en una localización distinta.
   - **Tipo de fichaje**: permite seleccionar un tipo de fichaje ya creado.
5. Por último, hace clic en "Registrar".

Se muestra un mensaje confirmando que el dispositivo se registró correctamente. Con el botón de volver se puede elegir otro equipo donde registrar el mismo dispositivo; el listado muestra los equipos donde ese dispositivo está registrado.

Una vez registrado, el administrador debe cerrar su sesión para que los trabajadores puedan empezar a fichar en el dispositivo. El último paso es, dentro de Wall App, pulsar "Fichaje de trabajador" para dejar visible el teclado donde los trabajadores indicarán su código. Hecho esto, el dispositivo queda listo para que los trabajadores registren su jornada.

![Acceso de administrador: usuario](/media/manual/wall-app-wallapp-acceso-administrador-usuario.jpeg)

![Acceso de administrador: contraseña](/media/manual/wall-app-wallapp-acceso-administrador-contrasena.jpeg)

![Seleccionar equipo para registrar el dispositivo](/media/manual/wall-app-wallapp-acceso-administrador-seleccionar-equipo.jpeg)

![Formulario de registro del dispositivo](/media/manual/wall-app-wallapp-acceso-administrador-formulario-registro-dispositivo.jpeg)

![Confirmación de registro del dispositivo](/media/manual/wall-app-control-de-presencia-wall-app-registrar.png)

![Listado de equipos con el dispositivo registrado](/media/manual/wall-app-wallapp-acceso-administrador-listado-de-equipos-dispositivo-registrado.jpeg)

![Activar el fichaje de trabajador en el dispositivo](/media/manual/wall-app-control-de-presencia-wall-app-fichaje-de-trabajador-1024x491.png)
