---
schemaVersion: "1.0"
contentId: gestion-de-personal-2-basica
title: Básica en aTurnos
description: En este apartado se registran los datos básicos que identifican al trabajador.
contentType: concept
module: Gestión de personal
submodule: Usuarios y perfiles
subtopic: ""
intent: Básica en aTurnos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: basica
    label: Basica
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
    - https://manual.aturnos.com/knowledgebase/2-basica/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-basica/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre básica en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-basica/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-basica/
  contentHash: 5742ddfbb8b0a3e72cb1421b37c17bd22b87f3c7ee77ab1edde7fa5653690b96
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

En este apartado se registran los datos básicos que identifican al trabajador.

Estos datos son los siguientes:

- Nombre del Usuario: Define el nombre (y en su caso, los apellidos) del trabajador, el cual será visible en aTurnos.
- Correo electrónico: Es el correo electrónico por el que el usuario debe acceder a aTurnos. En dicho correo, le llegarán las diferentes notificaciones sobre los eventos que acontezcan en su equipo (véase notificaciones ). Una vez se proceda a la activación del correo electrónico, únicamente puede ser modificado por el trabajador en cuestión.
- Teléfono: Define el número de teléfono del trabajador para una mejor identificación del mismo. Sobre todo, servirá en aquellos casos en que el teléfono sea una de las herramientas de trabajo principales del trabajador. Si no lo has añadido previamente cuando has procedido a crear el trabajador y quieres conocer este dato, posteriormente solo puede añadirlo el trabajador al que se hace referencia.
- ID Empleado: Es el código de usuario de la empresa. Se utiliza para el traspaso de datos con el resto de equipos de la empresa. En el caso de que el trabajador este asignado a más de un mismo equipo se mantiene el ID en los diferentes equipos. Más información en Maestro de empleados de aTurnos.
- ID Usuario: Es el código interno que recibe el trabajador por parte de aTurnos. Se trata de un código único, personal y que se puede utilizar como otro código de identificación. Dicho dato es generado por aTurnos y no se puede proceder a su modificación.
- Rol del usuario: Es el Rol de usuario que quieres que tenga el trabajador. Por defecto, la persona que crea un equipo, tiene el rol de “Administrador Total” y el resto de los trabajadores, en el momento del alta, el rol de “trabajador”. En un equipo puede haber tantos administradores como se desee.

### Perfil del usuario

El administrador del equipo puede optar por tres opciones para que un trabajador o administrador sea planificable, o no planificable, en el cuadrante de turnos, en el listado de trabajadores, en los reportes de estadísticas e informes, en el proceso de cambios de turnos, procesos de control horario,…

Además de las tres opciones de planificabilidad que se describen a continuación, existen otras opciones de privacidad a nivel de equipo que pueden afectar a los trabajadores y/0 administradores (ver Privacidad ).

1. Planificable: El usuario se encuentra visible en el cuadrante para el resto de trabajadores, se encuentra incluido en los procesos de planificación, procesos del control horario, reportes, … (dependiendo de la configuración de privacidad del equipo). El administrador puede visualizarlo en el cuadrante, cuadrante anual, estadísticas y detalles del control horario.
2. Planificable oculto: El usuario se encuentra visible en el cuadrante pero no es visible para el resto de trabajadores de su equipo, ni en los procesos de cambios de turnos entre trabajadores. El administrador del equipo (total, planificador o validador) puede visualizarlo en el cuadrante, cuadrante anual, estadísticas y detalles del control horario.
3. No Planificable: El usuario únicamente es visible en el listado de trabajadores, de esta manera el administrador puede acceder a su perfil y cambiar este estado. Ni los trabajadores, ni los administradores pueden visualizarlo en el cuadrante, cuadrante anual, reportes de estadísticas y detalles del control horario. Acceden a los equipos en los que sí se encuentran dado de alta y realizar las acciones según el rol que tenga asignado.

Cuando el trabajador está activado en el sistema (tiene acceso a aTurnos) algunas de las casillas del perfil del trabajador estarán sombreadas en gris, lo que indica que no pueden ser modificadas por el administrador, tan solo por el propio usuario que inicia sesión con su correo electrónico y contraseña. El trabajador activado puede modificar los siguientes datos: nombre del usuario, correo electrónico y teléfono.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![2. Básica](/media/manual/2-basica-f7a8391000.png)

![Perfil del usuario](/media/manual/perfil-del-usuario-31cb456f88.png)
