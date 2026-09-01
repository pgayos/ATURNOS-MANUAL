---
schemaVersion: "1.0"
contentId: planificacion-b-absentismos
title: Absentismos
description: Un absentismo es una ausencia o abandono del puesto de trabajo durante los turnos y horas planificados en su cuadrante.
contentType: concept
module: Planificación
submodule: Roles y permisos
subtopic: ""
intent: Absentismos
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: absentismos
    label: Absentismos
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
    - https://manual.aturnos.com/knowledgebase/b-absentismos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/b-absentismos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre absentismos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/b-absentismos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/b-absentismos/
  contentHash: 76cced8e3062552558a7de03e92528587f7163c2d6928173cffd6a762f36f485
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre absentismos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Un absentismo es una ausencia o abandono del puesto de trabajo durante los turnos y horas planificados en su cuadrante. Dentro de los absentismos, se pueden crear todos aquellos permisos que tienen por derecho los trabajadores, ya estén recogidos en el Estatuto de los Trabajadores o en su Convenio Colectivo.

Los absentismos pueden afectar al total de los turnos planificados, lo que llamaríamos ‘Absentismo Total’ o bien pueden afectar a un periodo de tiempo del turno planificado, lo que se denomina ‘Absentismo Temporal’.

Por ejemplo, llamaríamos absentismo total a una ausencia debido a una baja por IT o por un permiso solicitado por el trabajador por asuntos propios. En cuanto a un absentismo temporal, podría tratarse de una visita médica que solo ocupa unas horas del turno o en el que caso de que no sea una ausencia justificada, cualquier tipo de retraso (defecto de tiempo) registrado en la jornada de trabajo (ver Ajustes Control de Presencia ).

El administrador del equipo puede crear absentismos desde el menú ‘ Planificador ‘, en ‘ Tipos de turno ‘, pulsando sobre el botón de la barra superior ‘Acciones’, se desplegarán varias opciones, entre las que se encuentra ‘Crear Absentismo’.

Se mostrará un modal en el cual se debe informar la siguiente información:

- Descripción con la que se identifica el nombre del absentismo/permiso.
- Abreviatura, es el acrónimo con el que se identifica el absentismo (máximo 4 caracteres con letras y/o números). Son únicos por cada absentismo.
- Tipo con el cual en aTurnos se puede considerar los absentismos con diferente tipología, dependiendo de la configuración del absentismo. Existen cuatro tipos de absentismo, que son los siguientes (antes definiremos qué son los conceptos justificado y productivo en aTurnos). El concepto turno productivo hace referencia al turno como efectivo, en el que las horas del turno contarían en los conceptos de nómina. El concepto turno justificado hace referencia al turno que contabiliza sus horas en las estadísticas por horas y balance de horas. Absentismo computable y productivo. Afecta a las horas computadas y descarga a las variables de nómina como nocturnidad o festivos justificado (tiempo productivo) cuyas horas de turno afectado se consideran como tiempo efectivo. El turno al que se le aplica este tipo de absentismo computa como si hubiera sido realizado. Es decir, contaría las horas del turno para las estadísticas y conceptos de nómina, como si el trabajador hubiera asistido a su puesto en su horario, teniendo en cuenta las horas nocturnas y festivas. Ejemplo: Horas sindicales. Absentismo computable y no productivo. Afecta a las horas computadas, pero no descarga a las variables de nómina como nocturnidad o festivos justificado (no es considerado productivo, afecta a la nocturnidad y festivos), las horas del turno al que afecta este tipo de absentismo, no se las consideran como horas productivas para los conceptos de nómina, se descuentan las horas para los conceptos que afectan a turnos con nocturnidad o en festivos. Sí se consideran horas efectivas, al contabilizarse en el balance de horas del trabajador. Ejemplo: Incapacidad Temporal (IT). Absentismo no computable. No afecta a las horas computadas, ni descarga a las variables de nómina como nocturnidad o festivos, las horas del turno en las que está aplicado este absentismo no se consideran ni productivas ni justificadas. Es decir, no se contabiliza en el balance de horas, ni suman en las estadísticas por horas, ni son productivas al no contar en los conceptos de nómina. Ejemplo: retraso a la entrada en el puesto de trabajo o abandono anterior a la finalización del turno. Excedencia/suspensión: ajusta las horas y las vacaciones durante el tiempo aplicado, es decir, actúa como si hubiera un corte en contrato. Por ejemplo: una excedencia de un mes de duración, aplicará un ajuste con un decremento de las horas contrato a realizar en ese mes (según las horas año de su contrato), así como un decremento del número de días de vacaciones pertenecientes a ese año. Estos ajustes se podrán visualizar en los campos ‘ Vacaciones ‘ y ‘Balance de horas’ (más información en ¿Cómo afecta la aplicación de un periodo de absentismo por excedencia/suspensión a las horas contrato y vacaciones de un trabajador? ). Suspensión descontado solo horas de contrato, se comporta como el anterior pero sin descontar la parte proporcional de vacaciones, habitual en situaciones como ausencias por motivo de huelga, pero muestra el ajuste dentro del perfil del trabajador. Vacaciones (No suman las horas computadas): el absentismo se comporta como las vacaciones, se incluyen en el balance de vacaciones y reportes de vacaciones. En este caso, no suman las horas computadas de los turnos a los que se le asignan este tipo de absentismo. Vacaciones (Las horas computadas suman): el absentismo se comporta como las vacaciones, se incluyen en el balance de vacaciones y reportes de vacaciones. En este caso, las horas computadas de los turnos a los que se le asignan este tipo de absentismo suman en el balance de horas. Huelga, idéntico al de suspensión, pero sin mostrar los ajustes.
- Tipo de absentismo, existiendo tres opciones: Total, afecta a la totalidad de un turno en la jornada. Temporal, afecta a parte del total del turno de la jornada de trabajo. Ambas, puede afectar tanto al total como a una sola parte del turno.
- Rol mínimo que puede gestionar el absentismo, ya sea un administrador a la hora de aplicarlo en el cuadrante de un trabajador (ver Añadir absentismos ) o de que pueda ser solicitado mediante una petición.
- Rol mínimo para aceptar peticiones que realicen los trabajadores del absentismo/permiso (ver Roles de usuario ).
- Petición, para que el absentismo esté disponible para ser solicitado mediante una petición por los trabajadores.

Se pueden crear ‘Nuevos datos’ con nueva fecha de modificación en tipo de absentismo, puede ser que, en el permiso de día de mudanza, la empresa lo consideraba y lo tenía informado como justificado productivo, incluyendo plus de festividad y nocturnidad, y por decisión de la empresa, se cambiará, para que a partir de una determinada fecha sea productivo, pero no incluye plus de festividad y nocturnidad. Será a partir de la fecha informada en ‘Entrada en vigor’ cuando este permiso cambia de tipo de productividad.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![b. Absentismos](/media/manual/b-absentismos-d0cd056ddb.webp)

![b. Absentismos](/media/manual/b-absentismos-1d394f2dcf.png)
