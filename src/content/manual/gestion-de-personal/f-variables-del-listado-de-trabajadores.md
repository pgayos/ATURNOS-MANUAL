---
schemaVersion: "1.0"
contentId: "gestion-de-personal-f-variables-del-listado-de-trabajadores"
title: "Variables del listado de trabajadores"
description: "Información sobre variables del listado de trabajadores, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "Contratos"
intent: "Variables del listado de trabajadores"
audience:
  - role: "Administrador"
    access: applicable
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "listado"
    label: "Listado"
  - id: "trabajadores"
    label: "Trabajadores"
  - id: "variables"
    label: "Variables"
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
    - "https://manual.aturnos.com/knowledgebase/f-variables-del-listado-de-trabajadores/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/f-variables-del-listado-de-trabajadores/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre variables del listado de trabajadores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "2e33b0b10afc178811f094589e91800dbdf53db482a347b7a7ac7815ec205a87"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre variables del listado de trabajadores, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

El listado de trabajadores se muestra a modo de tabla, por defecto (Ver Vista Tabla ). Las columnas de esta tabla hacen referencia a las diferentes variables de interés, sobre cada uno de los trabajadores del equipo, y se pueden ocultar o mostrar a demanda del administrador. Los trabajadores que se muestran en las filas de la tabla, pueden ser todos los activos o todos los inactivos en el sistema, según lo consultado por el administrador en ese momento.

El nombre de estas variables, va acompañado de un tooltip informativo, donde se describe el concepto propio de la variable.

La definición de cada variable que hace referencia en cada trabajador es la siguiente:

- Nombre: Es el nombre (y en su caso, apellidos) de cada trabajador que está incluido dentro de tu equipo. Recuerda que es el nombre que tiene dentro de aTurnos, no se le puede identificar de otra manera.
- Mail: Cuenta de correo electrónico a través de la cual cada trabajador accederá en aTurnos y con la que se ha procedido a activar en el sistema.
- Teléfono: Número de teléfono indicado como contacto del trabajador. Si no se encuentra definido en la primera activación del trabajador, únicamente puede añadirlo el trabajador a título individual, conectándose con su propio usuario.
- Activado/Rol: En un primer lugar, indica si el usuario está activado en aTurnos (el icono del muñeco aparece verde) o si, por el contrario, está inactivo (el icono del muñeco aparece gris). Por otro lado, muestra los diferentes roles que tiene cada trabajador en aTurnos (Aquí puedes ver los distintos roles de usuario dentro de aTurnos ). Para visualizarlo mejor, tienes que pasar el cursor del ratón sobre el muñeco (trabajador) o muñecos (roles superiores al del trabajador) para que te indique si el mismo está Activo/Inactivo y qué rol tiene cada uno dentro del equipo de aTurnos.
- Alta: Fecha actual de alta del contrato de trabajo. Recuerda que siempre se mostrará la fecha actual, ya que se puede dar el caso de que uno o varios trabajadores tengan varios periodos de alta, sobre todo en aquellos casos de los trabajadores temporales. En algunos sectores de actividad hay que recordar que son muchos los trabajadores temporales, por lo que, si se diera el caso, en este campo se mostrará siempre la fecha actual del alta del último contrato de trabajado que haya tenido con la empresa.
- Baja: Fecha actual de baja del contrato de trabajo. Al igual que en el caso anterior, recuerda que siempre se mostrará la fecha actual, ya que se puede dar el caso de que el trabajador tenga varios periodos de baja, lo que se produce en mayor porcentaje en aquellos trabajadores que se encuentran prestando su servicio de forma temporal.
- Localización: Ubicación en la cual el trabajador desarrolla su jornada habitual de trabajo. Las localizaciones en el cuadrante ayuda en la visualización de los trabajadores, cuando son equipos de un importante número de trabajadores.
- Horas contrato: Es el número de horas de contrato anuales indicadas en el contrato del trabajador con la empresa. Para trabajadores a tiempo completo, este número reflejará el total de horas anuales ordinarias que se establecen por convenio. Para un trabajador a tiempo parcial, reflejará el número de horas totales anuales según el porcentaje de jornada que tenga establecido en su contrato de trabajo.
- Acción: Son las acciones o procesos que podemos realizar sobre el trabajador, son los siguientes:

1. Editar: es el acceso a visualizar toda la información detallada del trabajador (Veáse ver y editar perfil del trabajador ). Para acceder, tienes que hacer clic en el icono “editar”
2. Baja: mediante este botón, se procede a eliminar al trabajador de la lista de trabajadores activos, pasando a formar parte de la lista de trabajadores inactivos. (Ver cómo dar de baja a un trabajador ). Para realizar esto, tienes que hacer clic en el icono “baja”
