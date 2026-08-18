---
schemaVersion: "1.0"
contentId: control-horario-1-5-estado-y-ajustar-fichajes
title: Estado y ajustar fichajes
description: Todos los fichajes modificados o insertados por el administrador se guardarán como fichajes manuales. Para poder ajustar fichajes se puede hacer desde ‘ Diario ‘ o ‘ Detalle ‘.
contentType: concept
module: Control horario
submodule: Vacaciones y ausencias
intent: Estado y ajustar fichajes
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: ajustar
    label: Ajustar
  - id: estado
    label: Estado
  - id: fichajes
    label: Fichajes
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
    - https://manual.aturnos.com/knowledgebase/1-5-estado-y-ajustar-fichajes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-5-estado-y-ajustar-fichajes/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre estado y ajustar fichajes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 8
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-5-estado-y-ajustar-fichajes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-5-estado-y-ajustar-fichajes/
  contentHash: 86ba9e874744bae607caa707d343872e1704b8b7a3fc8da8859fb73c8ab0cd96
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Todos los fichajes modificados o insertados por el administrador se guardarán como fichajes manuales. Para poder ajustar fichajes se puede hacer desde ‘ Diario ‘ o ‘ Detalle ‘.

### Estado

Muestra la diferencia de tiempo entre las horas trabajadas presenciales y el tiempo de los turnos y/o tipos de horas planificados en el cuadrante. Este estado de tiempo, tiene en cuenta las tolerancias indicadas (ver Tolerancias ).

Existe un estado igual a 0, si el tiempo de los turnos y/o horas planificadas en el cuadrante, es el mismo que las horas trabajadas presenciales, teniendo en cuenta la tolerancia configurada.

Cuando las horas trabajadas presenciales son superiores al tiempo de los turnos y/o horas planificadas en el cuadrante, existe un estado positivo. Por ejemplo, si se ha fichado la entrada 14:30 y la salida a las 22:30, cuando hay un turno planificado con inicio a las 14:00 horas y fin a las 22:00 horas, existe 1 hora en positivo, es decir, se ha trabajador una hora de más que no estaba planificada en el cuadrante.

En el caso de que las horas presenciales trabajadas son inferiores al tiempo de los turnos y/o horas planificadas en el cuadrante, existe un estado negativo. Por ejemplo, si se ha fichado la entrada a las 22:30 y la salida a las 07.30 del día siguiente, cuando hay un turno planificado en el cuadrante con inicio a las 22:00 horas y fin a las 08:00 horas del siguiente día, existe 1 hora en negativo, es decir, se ha trabajado una hora de menos que no estaba planificada en el cuadrante.

### Acciones

Al desplegar este menú se pueden realizar distintos ajustes como insertar horas añadidas o absentismos, dependiendo de si el estado es positivo (exceso de horas trabajadas) o negativo (defecto de horas trabajadas).

Se pueden realizar:

Siempre que no exista ningún fichaje o el fichaje no esté cerrado (ver cerrar fichajes ), esta función permite insertar los fichajes en la hora de inicio y/o fin del turno planificado (o en la que falte en caso de existir algún fichaje). Más información en ‘ Insertar fichajes ‘.

Se utiliza para el caso de que el trabajador haya realizado un fichaje de entrada fuera de la hora de inicio del turno planificado (barra verde). Más información en ‘ Insertar fichajes con arrastre ‘.

A plicable a consecuencia de que el trabajador haya realizado un fichaje cerrado (barra naranja) de menos tiempo que el turno planificado (barra verde), provocando una reducción del turno con la misma duración del fichaje cerrado. Esto produce una modificación de la planificación, convirtiendo el turno en horas. Más información en ‘Reducir jornada’.

Los ajustes también se pueden realizar a todos los trabajadores filtrados desde el botón ‘Ajustar todos’, habiendo seleccionado previamente el botón de todos los trabajadores.

En los ajustes se deberán indicar cinco campos:

- Descripción: razón o necesidad por la cual se ha insertado el absentismo o el tipo de hora añadida.
- Tipo: de absentismo o de hora añadida.
- Localización: ubicación, departamento o servicio según la configuración de Localizaciones.
- Inicio: fecha y hora inicio del ajuste.
- Fin: fecha y hora fin del ajuste.

A continuación, se explican los diferentes tipos de ajustes.

Este ajuste compara el fichaje cerrado (teniendo en cuenta las tolerancias y si se tiene configurado ‘ Restar la tolerancia del total si se supera ‘) con el turno planificado en el cuadrante en ese día.

Si existe defecto de tiempo registrado al inicio o final del turno planificado, el ajuste propondrá insertar un tipo de absentismo.

Caso 1

Un trabajador que con un turno planificado de 15:00 a 22:00 horas, ha realizado un fichaje cerrado de 15:15 a 21:55 (teniendo una tolerancia de 5 minutos al inicio y final del turno). Tendrá un estado negativo de -15 minutos (ya que existe una tolerancia de 5 minutos al final del turno y la opción ‘ Restar la tolerancia del total si se supera ‘ está configurada en ‘No’), que al ajustar propondrá insertar como un tipo de absentismo (Horas a compensar de menos – HCM).

Al realizar el ajuste, se insertará un absentismo que estará representado en el gráfico de la línea temporal con una periodo negro (ver Interpretación de los gráficos ).

Si existe exceso de tiempo registrado al inicio o final del turno planificado, el ajuste propondrá insertar un tipo de hora añadida.

Caso 2

Un trabajador tiene planificado un turno de 08:00 a 15:00 horas, ha realizado un fichaje de entrada a las 07:55 horas y otro de salida a las 15:20 horas (teniendo una tolerancia de 5 minutos al inicio y de 10 minutos al final del turno).

Tendrá un estado positivo de 10 minutos (ya que existe una tolerancia de 10 minutos al final del turno y la opción ‘ Restar la tolerancia del total si se supera ‘ está configurada en ‘Si’), que al ajustar propondrá insertar como un tipo de hora añadida (HCMAS – HORAS A COMPENSAR DE MÁS).

En este caso, al hacer el ajuste, se insertarán horas añadidas (tipo normales) que estarán representadas gráficamente en la línea del tiempo con otro periodo verde (ver Interpretación de los gráficos ).

Caso 3

Una trabajadora tiene planificado en su cuadrante un turno de noche con horario de 22:00 a (+1) 08:00 horas, ha realizado un fichaje cerrado de 22:30 a (+1) 09:30 horas (teniendo una tolerancia global de 20 minutos).

Tendrá un estado positivo de 1 hora (ya que existe una tolerancia global de 20 minutos, la cual se supera tanto al inicio como al final y la opción ‘ Restar la tolerancia del total si se supera ‘ está configurada en ‘No’) que al ajustar propondrá insertar como un tipo de absentismo (Horas a compensar de menos – HCM) los 30 minutos de defecto al inicio del turno y un tipo de hora añadida (HEX – HORAS EXTRAORDINARIAS) de exceso de tiempo de 1 hora y 30 minutos al final del turno.

Cuando se realice el ajuste, se insertarán horas de absentismo con un periodo negro y unas horas añadidas (tipo extra) que estarán representadas en el gráfico con un periodo marrón (ver Interpretación de los gráficos ). En estos casos de turnos nocturnos que empiezan en un día y acaban en el siguiente, se debe tener en cuenta que el ajuste del estado se realizará en el día que comienza el turno.

Este ajuste necesita tener activada la opción de ‘Calculando el total de horas de la jornada’ de ‘ Mostrar botón de ajustar fichajes ’ que compara el total del tiempo registrado (teniendo en cuenta las tolerancias y si se tiene configurado ‘ Restar la tolerancia del total si se supera ‘), con el turno planificado.

A diferencia del ajuste real, se realiza un cálculo con la diferencia entre el tiempo de exceso y defecto. Cuando la diferencia es positiva (tiempo de exceso) se insertan horas añadidas y si la diferencia es negativa (tiempo de defecto) se inserta tiempo con un tipo de absentismo.

Caso 4

Un trabajador con una jornada partida tiene un horario con un turno planificado de 09:00 a 14:00 horas y de 15:00 a 18:00 horas. El trabajador ficha en el turno de mañana a las 09:10 y 13:50 horas (20 minutos de defecto de tiempo), y en el turno de tarde cerró un marcar de 14:15 a 18:00 horas (15 minutos de exceso de tiempo). En este caso no existen tolerancias, por lo que el tiempo del estado son -5 minutos.

El ajuste sobre el total realiza ese cálculo de diferencia e inserta ese tiempo, que en este ejemplo al ser defecto de tiempo, insertará un tipo de absentismo (Horas a compensar de menos – HCM). Este tiempo de menos siempre se insertará al inicio del turno.

Caso 5

Una trabajadora con turno planificado en horario de 22:00 a (+a) 08:00 horas, realiza un fichaje de entrada a las 22:15 horas y un fichaje de salida (+1) 08:30. El estado es positivo, al haber 15 minutos de exceso de tiempo fichado.

Al realizar el ajuste sobre el total, se calculará esa diferencia de 15 minutos positivos, por lo que insertará un tipo de hora añadida al final del turno.

El ajuste de reducción de jornada permite que si por razones de fuerza mayor o para no modificar el tipo de turno asignado a un trabajador que se ha acogido a una reducción de jornada, el turno planificado se adapte al tiempo registrado en el control de presencia.

Por ejemplo, una trabajadora tiene un turno de 15:00 a 22:00 horas, pero por razones de conciliación familiar ha fichado la entrada a las 15:45 y la salida a las 21:00 horas. El turno se ve reducido a unas horas planificadas, aunque también es posible que el administrador modifique el tipo de turno planificado en el cuadrante (ver Modificar turno ) o convertirlo a horas para adaptar la duración al fichaje (ver Cambiar turno a horas ).

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
