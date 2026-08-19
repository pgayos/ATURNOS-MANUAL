---
schemaVersion: "1.0"
contentId: gestion-de-personal-1-1-maestro-de-empleados
title: Maestro de empleados
description: El maestro de empleados es una de las herramientas más interesantes que ofrece aTurnos para el departamento de RRHH y superusuarios de nuestros clientes.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Maestro de empleados
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: empleados
    label: Empleados
  - id: maestro
    label: Maestro
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
    - https://manual.aturnos.com/knowledgebase/1-1-maestro-de-empleados/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-1-maestro-de-empleados/
ai:
  answerableQuestions:
    - ¿Cómo puedo maestro de empleados?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-1-maestro-de-empleados/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-1-maestro-de-empleados/
  contentHash: bbf8738fb0de716334cdf348739d1c637cde424fad5f284ad44068cb00225977
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El maestro de empleados es una de las herramientas más interesantes que ofrece aTurnos para el departamento de RRHH y superusuarios de nuestros clientes.

## Procedimiento
Para acceder al maestro de empleado lo puede hacer cualquier superusuario desde el menú de RRHH → Estructura → Maestro de empleado.

Desde este menú se visualizan en pantalla todos los usuarios de los equipos a los que tiene acceso el superusuario.

En la pantalla se visualizan por defecto los usuarios de alta.

- Estado. Filtro por los diferentes estados de los usuarios en aTurnos. Los usuarios pueden estar en alta, baja o alta futura en la fecha seleccionada.

- Filtros de búsqueda de usuarios:

- Por los datos identificativos de los usuarios: Nombre, id empleado y/o mail Por el rol del usuario: Trabajador, administrador validador, administrador planificador, administrador total y superusuario Por el equipo en el que el usuario está dado de alta, baja o alta futura. Por el perfil del usuario: Cualquiera No Planificable Planificabe oculto No planificable

Desde el maestro de empleados se puede exportar en formato Excel los datos de los trabajadores que se muestra en pantalla.

Los datos que se informan son el nombre del trabajador, id usuario de aTurnos, id empleado de la empresa, mail del trabajador, rol que tiene asignado en el equipo, nombre del equipo, id external de equipo y fecha de inicio y fin del periodo de actividad del trabajador.

El superusuario que accede al maestro de empleado puede realizar las siguientes acciones en los equipos a los que tiene acceso con este rol:

- Añadir trabajador: con esta acción permite añadir trabajadores a los equipos.
- Borrar todos: esta acción eliminará todos los trabajadores mostrados por pantalla. Es una acción delicada, porque una vez borrado los trabajadores no se podrá recuperar sus datos ni su planificación. La eliminación del trabajador se realizará en todos los equipos que esté dado de alta el trabajador y que el superusuario registrado tenga acceso a los equipos del trabajador. Es útil usar los diferentes filtros del maestro de empleado, en casos como poder borrar a un solo trabajador de varios equipos, para ello hay que informar el filtro del nombre del trabajador y el filtro de equipos, donde se puede informar más de un equipo.
- Bloquear acceso: con esta acción permite bloquear a los trabajadores que se muestra en pantalla el acceso con su usuario de acceso a la web y/o a la app.
- Cambiar datos en bloque: con esta acción el superusuario puede cambiar datos y valores, de forma masiva, a todos los trabajadores que se muestra en pantalla. En el caso de existir decimales, se deben indicar con punto (.) y no con (,). Estos cambios pueden realizarse a nivel de: Horas contrato: edita el valor de las horas contrato de todos los de todos los trabajadores que se muestra en pantalla. Horas al mes: edita el valor de las horas al mes, en el perfil del trabajador, de todos los trabajadores que se muestra en pantalla Hora a la semana: edita el valor de las horas a la semana, en el perfil del trabajador, de todos los trabajadores que se muestra en pantalla Horas al día: edita el valor de las horas al día, en el perfil del trabajador, de todos los trabajadores que se muestra en pantalla Vacaciones: edita el valor del número de vacaciones, en el perfil del trabajador, de todos los trabajadores que se muestra en pantalla. En todos los periodos contratados del trabajador, independientemente del año. Tipo de vacaciones: edita el tipo de vacaciones (natural, laboral o dejar a elegir), en el perfil del trabajador, de todos los trabajadores que se muestra en pantalla Fichaje sin control web/IP: edita la posibilidad de permitir fichar al trabajador desde cualquier terminal y lugar, en el perfil del trabajador, de todos los trabajadores que se muestra en pantalla Vacaciones en un año en concreto: edita el valor del número de vacaciones, en el perfil del trabajador, de todos los trabajadores que se muestra en pantalla. En todos los periodos contratados del trabajador de un año definido. Vacaciones y horas forzadas por año: edita y ajusta el valor del número de vacaciones y horas, en el perfil del trabajador, de todos los trabajadores que se muestra en pantalla. Terminos de uso (ToS): acepta las condiciones y términos de uso de todos los trabajadores que se muestra en pantalla.

- a. Editar/Mover trabajadores del equipo
- b. Acceder al perfil del trabajador
- c Añadir trabajadores a más equipos
- d. Ver periodos y eliminar trabajador

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Vista de 1 1 maestro de empleados en aTurnos](/media/manual/vista-de-1-1-maestro-de-empleados-en-aturnos-550a2e1fb1.png)

![Vista de 1 1 maestro de empleados en aTurnos](/media/manual/vista-de-1-1-maestro-de-empleados-en-aturnos-f3f9c92063.png)

![Vista de 1 1 maestro de empleados en aTurnos](/media/manual/vista-de-1-1-maestro-de-empleados-en-aturnos-c8d25b0808.png)
