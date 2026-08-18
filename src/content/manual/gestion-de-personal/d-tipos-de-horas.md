---
schemaVersion: "1.0"
contentId: gestion-de-personal-d-tipos-de-horas
title: Tipos de horas
description: No todo tiene que ser turnos, en aTurnos puedes crear tipos de horas.
contentType: concept
module: Gestión de personal
submodule: Contratos
intent: Tipos de horas
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
  - id: horas
    label: Horas
  - id: tipos
    label: Tipos
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
    - https://manual.aturnos.com/knowledgebase/e-tipos-de-horas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/e-tipos-de-horas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre tipos de horas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/e-tipos-de-horas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/e-tipos-de-horas/
  contentHash: e4c014057fed66e06ba962fa0d775be438e97d45af990b7e6d537b3c139f6eba
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Información sobre tipos de horas, con instrucciones y contexto revisables por el equipo de aTurnos.

No todo tiene que ser turnos, en aTurnos puedes crear tipos de horas. Estas horas posteriormente las puedes planificar o añadir como extensión de jornada donde existan turnos. Es interesante planificar con horas si existe una gran cantidad de turnos y no quieres crear tantos tipos de turnos distinto. Tenemos clientes como call-centers donde al entrar cada 15 minutos la cantidad de tipos de turnos es elevada.

Al planificar las horas se pueden definir el tipo de horas, las horas de inicio y de fin a un trabajador en un día o entre días. Por defecto, se diferencian 3 tipos de horas:

### Extras

No computan como parte del horario efectivo, es decir, se asignan de forma extraordinaria. Se computan de manera independiente a las horas de contrato en las estadísticas y en los conceptos de nómina. En la legislación española existe un límite máximo de 80 horas extras al año.

### Complementarias

Se computan de forma separada a las horas normales en las estadísticas y conceptos de nómina ya que no forman parte de las horas establecidas por el contrato.

Las horas complementarias solo se pueden utilizar para el personal que tiene un porcentaje de jornada menor al 100%. El límite de horas complementarias que le corresponde a cada trabajador se puede informar en el perfil del trabajador.

Este límite se informa como un porcentaje respecto a su contrato anual, de forma que la suma de las horas correspondientes por contrato y las complementarias no puede superar el 100% de horas del convenio en el periodo, es decir, que el máximo de las horas contrato que tiene un empleado no puede ser mayor a las horas máximas al 100%, incluyendo el porcentaje de las complementarias.

Por ejemplo, un trabajador al 50% de la jornada, si tiene un convenio de 1800 horas tiene que realizar 900 horas, tiene un límite de 10% de complementarias, podría hacer de forma extraordinaria 90 horas más.

### Normales

Computan con las horas establecidas en contrato. Se considera como el mismo tipo de horas que las horas computables de un turno. En las estadísticas de horas, el cómputo total de horas, bien sea en un cómputo anual o en un determinado periodo de tiempo seleccionado, engloba a las horas de los diferentes turnos planificados al trabajador y las horas añadidas de tipo “normales”.

Además, el administrador puede crear cualquier otro tipo de horas. Como por ejemplo, se puede crear un tipo de hora que se llame “Horas a recuperar”, en la que el administrador la crea como tipo de hora normal, de tal manera que al planificarla este nuevo tipo de hora se identifica en el cuadrante como hora a recuperar y se contabilizará en las estadísticas, balance de horas y conceptos de nómina.

Otro ejemplo, puede ser un tipo de hora que se llame “Hora de prolongación de jornada extraordinaria”, en la que el administrador la crea como tipo de hora extra, de tal manera que al planificarla este nuevo tipo de hora se identifica en el cuadrante como hora de prolongación de jornada extraordinaria y se contabiliza en las estadísticas de manera independiente y conceptos de nómina, sin contar en el balance de horas anual.

¿Cómo crear tipos de horas personalizadas en un equipo?

Es interesante que puedas generar nuevos tipos de horas para que puedas agruparlas por tipología y tener un control en la parte de estadísticas. Por ejemplo, si quieres controlar cuantas horas se ha asignado para compensar, por excesos específicos de jornada o por algún tipo de actividad. Además, puedes controlar este tipo por restricciones, si exceden una cantidad predefinida o que no sobrepasen un absentismo definido.

Esto es muy útil cuando quieres que se pidan absentismos justificado por horas de más que realizaron de una tipología definida. Se informan los siguientes campos del formulario:

- Nombre: nombre identificativo del tipo de hora.
- Coeficiente: se trata de un multiplicador, de manera que ese subtipo de horas se contabilizará de forma multiplicada, por defecto el valor es 1. Un ejemplo suele ocurrir en servicios especiales o guardias de trabajadores, como puede ser en un servicio quirúrgico en la que por cualquier incidencia se prolonga la jornada, y si consideran que el valor de la hora de prolongación de jornada extraordinaria es doble, se tiene que informar en este campo con 2.
- Tipo: Se trata del tipo de hora y cómputo que tendrán dichas horas normales (dentro del saldo anual de horas), complementarias (en caso de contratos a un porcentaje de jornada menor al 100%) o extraordinarias.
- Rol mínimo, que puede hacer una petición, añadir el tipo de hora en el cuadrante o ajustar los marcajes con el tipo de hora en el control de presencia.
- Rol mínimo para para aceptar peticiones. Existen diversos roles en aTurnos (ver Roles de usuario ) y no todos pueden tener acceso para validar la petición de eventos como un tipo de horas. Esta función limita hasta qué nivel pueden validar el tipo de horas creado. No es lo mismo un supervisor de servicio (administrador planificador) que el director del servicio (administrador total o superusuario).

Una vez cumplimentado el formulario se debe hacer clic en “Guardar”.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
