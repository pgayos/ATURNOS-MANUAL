---
schemaVersion: "1.0"
contentId: control-horario-5-1-ajustes-del-control-horario
title: Ajustes del control horario
description: El funcionamiento del control horario se basa en la configuración de los ajustes que se explican a continuación, así como de la privacidad del acceso a la información de los fichajes por par.
contentType: reference
module: Control horario
submodule: Fichajes
intent: Ajustes del control horario
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: ajustes
    label: Ajustes
  - id: control
    label: Control
  - id: horario
    label: Horario
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
    - https://manual.aturnos.com/knowledgebase/5-1-ajustes-del-control-horario/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-1-ajustes-del-control-horario/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre ajustes del control horario?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-1-ajustes-del-control-horario/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-1-ajustes-del-control-horario/
  contentHash: 25a6da3be8457508d81a9d83f2820a87a0265c4841fc00f0764a4de1c4e8595f
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre ajustes del control horario, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
El funcionamiento del control horario se basa en la configuración de los ajustes que se explican a continuación, así como de la privacidad del acceso a la información de los fichajes por parte de los trabajadores (ver Detalle como trabajador) y la posibilidad de poder realizar peticiones de fichajes pendientes.

Aspectos como el cálculo de la tolerancias y definición de tiempos de las tolerancias, la duración máxima de la jornada entre un fichaje y el siguiente (ver configuración de la duración máxima de la jornada ) o si los descansos en los turnos se fichan o no (ver configuración de los descansos ) pueden ser configurados según las necesidades del equipo de trabajo. A continuación se explica el funcionamiento de cada ajuste.

La duración máxima de la jornada, limita el número de horas necesarias para que el sistema de control horario identifique como nuevo fichaje de entrada cuando se ha superado el número de horas informado desde el anterior fichaje realizado. Esto es útil para aquellos casos en los que el trabajador se olvida de fichar la salida o si en el sistema de fichaje no identifica si es entrada o salida y tiene que ser estimado por aTurnos.

Si por ejemplo están configuradas 12 horas de duración máxima de jornada.

En el caso de un trabajador que tenga un turno de 22:00 – 08:00(+1), realiza un fichaje de entrada a las 22:05 y el siguiente fichaje lo hace a las 10:10, el sistema lo marcará como una nueva entrada, al haber superado las 12 horas de jornada máxima.

- En los casos donde los turnos planificados sean de larga duración (superen la duración máxima de la jornada), es recomendable que se indique la opción “Si”. Aunque se supere, se considerará el primer fichaje como entrada y el segundo como salida. Por ejemplo, cuando después de un turno mañana se planifica un turno de guardia, donde la duración en horas de ambos turnos es superior a la duración máxima de la jornada.

- Si se opta por la opción “NO”, en este caso el registro de las acciones de entrada y salida dependerá de la duración máxima de la jornada. El primer fichaje será una salida, pero el siguiente fichaje, en el caso de superar la duración máxima de la jornada, será una nueva entrada. Por ejemplo, en caso de olvido del fichaje en la salida del trabajador, al transcurrir la duración configurada, el siguiente fichaje se inserta como nueva entrada.

Se pueden crear distintos tipos de fichaje para identificarlos según el sistema de fichaje que se realice. Por ejemplo, si el fichaje es mediante el sistema remoto que se activa en el perfil del trabajador, se puede forzar que el fichaje sea de un tipo en concreto.

Esta opción permite elegir algún dato personalizado distinto al “ID Usuario” o “ID Empleado” para identificar al trabajador.

Se puede seleccionar un absentismo que si se planifica o ajusta en un día donde existe un fichaje cerrado, el tiempo no compute como horas trabajadas presenciales.

Esta función habilita poder forzar saldos en positivo o negativo en el estado del Detalle de cada trabajador.

Por ejemplo, se puede forzar un saldo de 1 hora positiva para descontarla del estado.

Por retrasos en las altas o renovaciones de contrato de los trabajadores, los trabajadores pueden realizar su trabajo y por tanto fichar, para no perder esos fichajes, se pueden registrar los fichajes aunque no esté dado de alta en esa fecha en el sistema, siempre que esté configurada a “Si” está opción.

Si se activa esta opción, cualquier columna que no tenga registrada información, se ocultará automáticamente.

Esta opción es obligatoria para poder fichar por geolocalización.

Al activar esta opción, cualquier fichaje realizado por un trabajador que tenga planificado un absentismo total en su cuadrante, será bloqueado y por tanto no se registrará en su Detalle.

Al activar esta opción, fuerza a que todas aquellas nuevas altas de trabajadores que se creen, ya sea de forma manual desde añadir trabajadores, por medio de una importación de trabajadores o través del sistema integrado con aTurnos, tengan activada la opción de fichar sin control web/IP, que permite fichar desde cualquier e remoto (ver ¿Cómo configurar el Control horario para fichar en remoto? ).

Permite registrar o no en ‘Registro’, incidencias que se produzcan en el control de horario.

En el caso de los trabajadores que fichen por IP, Geolocalización o ‘Sin control web/IP’ (en remoto) si tiene asignada una localización por defecto, solo podrán fichar cuando el tipo de fichaje este asociado a esa localización del trabajador o la localización tenga el radio de geolocalización donde se encuentra el trabajador. Si no se cumplen estas condiciones, el sistema no le permitirá fichar.

Esta configuración permite diferencias cómo se quieren computar los fichajes con tres opciones:

Es la configuración por defecto, computando el tiempo de los fichajes en el día que se marca la entrada del fichaje.

En el caso de fichajes con turnos que empiezan en un día y acaban en el siguiente, se puede computar el fichaje al día donde se marca el fichaje de salida.

Por último, existe la opción que cuando existan turnos planificados entre dos días, compute en el día donde hay más horas planificadas o donde el fichaje cerrado haya contabilizado más horas.

En primer lugar debemos entender que esta función solo se ejecuta en el ‘Timecard’ y para los trabajadores sin fecha de baja (indefinidos).

Después la principal opción a tener en cuenta, es saber cuál es el inicio del año fiscal configurado en los ‘Datos de convenio’ en el equipo de trabajo.

En este caso, la fecha de inicio de año fiscal es el 1 de mayo.

Si existe en el balance acumulado entre el 1 de mayo del año anterior y el 1 de mayo del año presente, un desfase de horas presenciales trabajadas con respecto a las horas planificadas, en caso de no ajustarse el estado de ese balance acumulado, se puede migrar al siguiente año para que se pueda compensar en el caso de realizar menos tiempo presencial de trabajo y saldar el balance acumulado al año siguiente.

Si no se activa la opción, el saldo quedará con el acumulado en positivo sin migrarlo al año siguiente.

Cuando la acción automatizada migre el saldo acumulado al año siguiente, se mostrará una columna con el saldo acumulado del año anterior.

Si hay tiempo fichado de menos, se compensará con el saldo acumulado del año anterior.

En ocasiones los trabajadores puede tener errores a la hora de realizar su fichaje por los distintos sistema de fichaje, más habitualmente en el sistema biométrico en los dispositivos de lectura de huella dactilar.

Es posible que el trabajador crea que no ha fichado, por lo que realice varios fichajes con su huella dactilar, lo que puede provocar una distorsión en el Control horario, ya que cada fichaje puede indicar una entrada y el siguiente una salida.

Para evitar estos errores, se puede poner un tiempo mínimo en el cual el Control horario, no insertará ningún nuevo fichaje después de haber realizado un primer fichaje. Si por ejemplo, se configura con el valor de 5 minutos, si el trabajador entra a las 8:00 de la mañana, fichando a las 07.59 pero al cree que no ha fichado, fiche una segunda vez en el mismo minuto o en el siguiente, el sistema no insertará ese fichaje, deberán pasar al menos 5 minutos para que se pueda realizar un nuevo fichaje que se inserte.
