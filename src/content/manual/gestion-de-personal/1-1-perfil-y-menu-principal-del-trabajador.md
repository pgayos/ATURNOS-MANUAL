---
schemaVersion: "1.0"
contentId: "gestion-de-personal-1-1-perfil-y-menu-principal-del-trabajador"
title: "Perfil y Menú principal del Trabajador"
description: "En este apartado dispones del acceso a diferentes páginas de aTurnos:."
contentType: reference
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Perfil y Menú principal del Trabajador"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
  - role: "Desarrollador API"
    access: applicable
entities:
  - id: "menu"
    label: "Menu"
  - id: "perfil"
    label: "Perfil"
  - id: "principal"
    label: "Principal"
  - id: "trabajador"
    label: "Trabajador"
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
    - "https://manual.aturnos.com/knowledgebase/1-1-perfil-y-menu-principal-2/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-1-perfil-y-menu-principal-2/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre perfil y Menú principal del Trabajador?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  contentHash: "d8ee22142267607c09630abe785e18892684f7716b7f8c51f4e3fce81fc069c5"
  migratedAt: 2026-08-17
---
## Resumen

En este apartado dispones del acceso a diferentes páginas de aTurnos:.

- Tu perfil de usuario.
- Consultar y entrar a otros equipos en los que estás registrado.
- Así como acceder a los diferente menús de la aplicación.

### Acceso a tu perfil

En primer lugar, veremos:

- Nuestro nombre en el sistema.
- Rol de usuario (tipo de administrador o trabajador, ver Roles de usuario ).

- Si quieres ver las opciones y funcionalidades del perfil de usuario en aTurnos accede al siguiente enlace del manual: Mi perfil en aTurnos.
- Para ver los cambios que puedes realizar en tu perfil como usuario de aTurnos, accede a la siguiente Guía de usuario.

El usuario tendrá en su perfil diferentes acciones a realizar o información a consultar desde su perfil.

Si haces clic en el ‘ lapicero ’ podremos subir una foto, si queremos eliminar la foto, únicamente hay que hacer clic en la ‘X’.

Permite modificar datos personales como:

- Nombre del usuario.
- Correo electrónico.
- Teléfono.

Así como, descargar los datos de la cuenta o ver tu registro de acciones (accesos, marcajes, modificaciones, etc.).

- Cambiar el idioma (Castellano, inglés y portugués).
- Recibir e-mails y notificaciones del sistema.
- Darte de baja: no está disponible en algunos trabajadores depende de la configuración del administrador de tu equipo. (no se podrá acceder, mientras no recibas un nuevo correo de activación).
- Modificar tu contraseña (indicando la actual y la nueva).
- Vincular cuenta de aTurnos con Google Calendar, para que se muestren los turnos y/o absentismos que tiene informados del cuadrante en el Calendario de Google. Ver ¿Cómo vincular mi cuenta de aTurnos con el Google Calendar?

Muestra los siguientes datos:

- Nombre completo del usuario.
- Rol del usuario.
- ID, número identificativo en el sistema de aTurnos.
- ID Empleado, número identificativo externo al sistema.
- Localización, si se está asignado a alguna ¿Qué es una localización?
- Fecha de alta, es la fecha a partir de la cual el administrador puede planificar. Esta fecha no tiene porque corresponder con la fecha de alta en tu empresa. Las distintas modificaciones en los contratos (modificaciones de porcentajes de jornada o de categorías) implican nuevas fechas de “alta” en aTurnos que no tienen porque corresponder con la fecha “real” de alta en tu empresa de contrato o última renovación de contrato.
- Correo electrónico.
- Número de teléfono.

Indica la cantidad de “ Datos personalizados ”, completados en el perfil (si no se han creado “Datos personalizados” en tu equipo de aTurnos, el porcentaje es 0%) y si el trabajador está activo o inactivo en el equipo.

El trabajador, dependiendo de los permisos que tenga previamente configurado por la empresa, podrá acceder a las siguientes pestañas del menú del perfil del trabajador:

Es la información relevante de cara a las vacaciones del trabajador, así como los datos referentes a las horas del trabajador según su contrato de trabajo.

El trabajador podrá consultar:

El cálculo estimado de horas es la forma que tenemos en aTurnos de estimar las horas a trabajar mensualmente, de forma que al comparar éstas horas estimadas de trabajo mensual con las realmente planificadas, obtenemos un saldo de horas, el trabajador debe horas o la empresa le debe horas.

Los ajustes nos permiten cuadrar las horas (dejar el saldo de horas a 0) que hay planificadas en el cuadrante del periodo de un trabajador o en un año completo, respecto a las que están reguladas en un convenio colectivo y/o contrato.. Los administradores de los equipos realizarán estas acciones, mostrando aquí la información de los ajustes realizados por incrementos o decrementos de horas por contrato o planificadas. En esta pantalla se podrá ver:

- El número de horas de trabajo efectivas realizadas, turnos u horas (de tipo normales, no se incluyen las horas complementarias y/o extras)
- Las horas teóricas a trabajar anuales atendiendo a las horas anuales según convenio, la fecha de alta y/o baja, el porcentaje de jornada.
- Las horas de ajuste, estas horas pueden sumar o restar de las horas planificadas, se utiliza para saldar las horas.

Si los hubiera, el trabajador podrá revisar aquellos datos personalizados en su perfil.

Se entiende como restricciones aquellas limitaciones legales o personales impuestas por la empresa debido a su contrato o convenio colectivo.

El trabajador puede ver todas las restricciones en las que se ve afectado tanto a nivel de equipo, como a nivel individual. De forma personal también puede hacer una petición de una restricción.

Por ejemplo, en el caso de darse una reducción de jornada, el trabajador puede solicitar que se limite su trabajo a turnos de tardes, teniendo la opción de solicitar una restricción de “1.4 Solo puede trabajar un tipo de turno” (seleccionando todos aquellos turnos con horario de tarde) o por el contrario “1.1 No puede trabajar un tipo de turno” (seleccionando todos aquellos turnos con horario de mañana y noche).

Haciendo clic en el botón “Petición”, el trabajador podrá solicitar cualquier de los más de 50 tipos de restricciones creadas en aTurnos (ver listado de tipos de restricciones ). Además del tipo de restricción, se deberá indicar si esta es “Deseable” (se puede permitir su omisión) u “Obligatoria” (es de obligado cumplimiento por acuerdo entre las partes, contrato, convenio colectivo o ley).

También es posible que se tengan que informar de otras variables, como los tipos de turno que se pueden o no trabajar, permisos, límite de horas o una concreción de horario laboral. Para finalizar la petición, hay que guardar la solicitud de la misma para que pueda ser aprobada por el administrador del equipo de trabajo.

En la parte inferior aparecen las “Peticiones de restricciones” solicitadas, pudiendo saber cuáles han sido aprobadas, denegadas o aún pendientes.

En este apartado, el trabajador tiene acceso a todos aquellos periodos de absentismo que ha tenido o tiene planificados en su cuadrante con los datos de los días y horas de baja o permiso.

Si la empresa a la que se pertenece como trabajador exportar los datos de tu cuadrante para informarse en el sistema de nóminas que utiliza RRHH, aparecerán la fecha a la cual se ha cerrado el cuadrante para su exportación (aparecerá el cuadrante con un candado en la fila superior de los días del cuadrante, quedando deshabilitados esos días para realizar cualquier tipo de petición).

Cuando se hayan exportado esos datos a nóminas, se mostrará el día en el que se ha realizado la acción, qué fechas se han exportado y el autor de la exportación.

En el caso de estar registrado en varios equipos, tendrás la posibilidad de ver información de las horas de contrato en cada equipo, comparando con las que han sido planificadas en cada uno de ellos. Ver esta información también dependerá de los permisos que estén configurados en el equipo.

En la tabla podrás consultar los siguientes datos:

- Equipo nombres de las unidades en las que te encuentras dado de alta.
- Horas/contrato/año horas totales por convenio o contrato, el número de horas totales, con independencia de la fecha de alta y el porcentaje de jornada.
- Porcentaje de jornada, porcentaje de jornada en cada equipo.
- Horas contrato periodo seleccionado, se trata de las horas que te corresponde realizar (del total de horas por convenio o contrato) dado tu periodo de alta y porcentaje de jornada.
- Horas realizadas en el periodo en 2020, horas planificadas en tu periodo de alta actual dentro del año seleccionado en la parte superior de la tabla.
- Balance en el periodo en 2020, comparando las “horas contrato periodo seleccionado” con las “horas realizadas en el periodo en 2020”.
- Horas realizadas 2020, planificadas en el 2020 (sumando todos los periodos de alta que tienes en cada uno de los equipos).
- Vacaciones contrato en el periodo 2020, total de vacaciones por contrato/convenio de todo el año.
- Saldo de vacaciones 2020, cantidad de total de vacaciones planificadas en 2020

### Notificaciones de peticiones pendientes

Aparecerán en la parte superior de tu fotografía de perfil cuando te aprueban o deniegan una petición y/o un cambio de turno, entre otras acciones, recibes una notificación en tu móvil si has instalado el app de aTurnos y/o un correo electrónico.

Con independencia de la notificación, cuando accedes al sistema (tanto app, como a través del web), ves las notificaciones pendientes, similar a las notificaciones de otras apps (whatsapp, facebook, etc.)

- Si eres Trabajador puedes ver el proceso de solicitar peticiones (de vacaciones, permisos, etc.) en el siguiente enlace: Nueva petición

### Equipos

En caso de formar parte de varios equipos, puedes cambiar de equipo haciendo clic en la barra verde (donde aparecerá el nombre del equipo en el que te encuentras actualmente). Para ver todos los equipos en los que estás dado de alta, haz clic en “Mis Equipos”.

### Menús de aTurnos

Las ventanas que puede visualizar un Trabajador sin módulos añadidos son las siguientes:

1. Inicio: Inicio
2. Cuadrante: Cuadrante
3. Registro: Registro
4. Trabajadores
5. Estadísticas: Estadísticas
6. Control de Presencia: Control de presencia
