---
schemaVersion: "1.0"
contentId: "control-horario-2-1-listado-de-fichajes"
title: "Listado de fichajes"
description: "Se nos muestra una lista con todos los fichajes de un trabajador entre las fechas indicadas en la barra superior de filtro, por defecto siempre aparecerá la del mes actual."
contentType: procedure
module: "Control horario"
submodule: "Vacaciones y ausencias"
intent: "Listado de fichajes"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "fichajes"
    label: "Fichajes"
  - id: "listado"
    label: "Listado"
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
    - "https://manual.aturnos.com/knowledgebase/2-1-listado-de-fichajes/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-1-listado-de-fichajes/"
ai:
  answerableQuestions:
    - "¿Cómo puedo listado de fichajes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  contentHash: "fefebbfcbd3c59cc00c6098fd40a5436977952ba4d0b4f80e0098358eecc24e3"
  migratedAt: 2026-08-17
---
## Resumen

Se nos muestra una lista con todos los fichajes de un trabajador entre las fechas indicadas en la barra superior de filtro, por defecto siempre aparecerá la del mes actual.

De esta forma podemos revisar qué fichajes están ajustados (Estado igual a 0) o cuáles son necesarios de ajustar (Estado positivo o negativo). El estado dependerá también de las tolerancias configuradas (ver Tolerancias ).

## Barra superior

La visualización dependerá de lo indicado en la barra superior:

- Fechas: se muestran los fichajes desde un día hasta otro día.
- Trabajador: en el selector se puede seleccionar a un trabajador en alta del equipo de trabajo.
- Fichajes que se pueden filtrar por: Todos los fichajes. Solo sin ajustar, es decir, existe exceso (estado positivo) o defecto de tiempo (estado negativo). Solo los ajustados, su estado es 0.
- Filtro que permite seleccionar a los trabajadores de una localización.

## Variables de Control Horario

El listado de fichajes reportará la siguiente información por defecto, configurable en ‘ Visibilidad ‘:

### Fecha

Día del fichaje. Para ver otra fecha, se puede modificar en la barra superior.

### Línea del tiempo

Muestra una línea temporal de la duración de un día desde las 00:00 hasta las 23:59 horas. En este espacio se representan gráficamente los eventos (turnos y/o tipos de horas planificadas) y las acciones (fichajes, absentismos por defecto de tiempo o tipos de horas por exceso de tiempo) realizadas en el registro del Control de Presencia.

### Presencia en horario

Total de horas presenciales dentro del tiempo de los turnos y/o tipos de horas planificadas. Es el tiempo fichado dentro del inicio y fin del turno planificado.

### Presenciales

Total de horas que contabiliza los fichajes, desde la acción del fichaje de entrada al fichaje de salida. Se incluye el descanso disfrutado. No incluye la configuración de tolerancias.

### Fichadas

Total de horas que contabiliza los fichajes, desde la acción del fichaje de entrada al fichaje de salida. Se excluye el descanso disfrutado. No incluye la configuración de tolerancias.

### Fichadas no computables

Total de horas que contabiliza los fichajes, desde la acción del fichaje de entrada al fichaje de salida de tipos de fichaje no computable.

### Trabajadas

Total de horas presenciales que pueden coincidir o no con el tiempo de los turnos y/o tipo de horas planificadas en el cuadrante.

Al no estar trabajando, el tiempo de descanso del turno planificado, del trabajador o del equipo no se computan, según la configuración de descansos.

No tiene en cuenta ningún absentismo.

### Descanso

Tenemos que distinguir los descansos entre:

- Programados en el turno (ver Turnos ).
- Los configurados a nivel del trabajador.
- Y los configurados en el control de presencia a nivel de equipo.

Por ejemplo un turno de mañanas con un horario de 08:00 a 15:00 horas, puede tener una duración computada de 6:30, donde 30 minutos son de descanso, si la configuración de descansos es ‘Contabilizar los descansos, no se fichan’ o ‘Contabilizar los descansos, en el caso de que no se fichen se calcularán automáticamente’, estamos hablando de un ‘Descanso planificado’, el cual no debe ser fichado y siempre se computará.

En un segundo caso, si hay un turno de 15:00-22:00 horas, con una duración computada de 6:40, donde 20 minutos son de descanso que se han fichado de 18:20 a 18:40 horas y la configuración de descansos es ‘Contabilizar los descansos, si se fichan’, se mostrará el tiempo exactamente fichado, lo llamaríamos descanso de control de presencia.

Otro caso sería si se fichan los descansos, cuando el trabajador haga un marcaje de salida a las 11:30 y un marcaje de entrada a las 11:42, donde 12 minutos son de descanso.

### Computadas

Total de horas y turnos planificados en el cuadrante. Incluye horas y turnos que computan, además de horas extraordinarias, complementarias y turnos sin horas computadas (se tiene en cuenta la duración total del turno). Se excluyen las horas asociadas a los absentismos no justificado.

### Puntualidad

Tiempo de menos fichado al inicio del turno planificado, dependiendo de las tolerancias indicadas (ver Tolerancias ).

### Estado de horas

Diferencia entre horas de un turno y/o un tipo de hora planificadas en el cuadrante y las horas presenciales, descontando los descansos y teniendo en cuenta la configuración de tolerancias.

- Positivo, si hay exceso de horas fichadas frente al tiempo de los turnos y/o tipos de horas planificados en el cuadrante.

- Negativo, si hay defecto de horas fichadas frente al tiempo de los turnos y/o tipos de horas planificados en el cuadrante.

### Acumulado estado de horas

Suma (exceso de tiempo) o resta (defecto de tiempo) de los ‘Estados de horas’ de todos los fichajes visibles en función del filtro de fechas. Son horas no ajustadas del estado.

### Ajustar fichajes

El funcionamiento de los ajustes es exactamente el mismo que el realizado en ‘ Detalle ‘, la única diferencia es que estos ajustes solo afectan al trabajador seleccionado y que nos reportan mayor información sobre las horas planificadas, las que se han fichado, si existe tiempo de descanso, la puntualidad o el acumulado del estado.

Si existe exceso de tiempo presencial (fichajes cerrados) se mostrará un estado positivo, al ajustarse se insertarán un tipo de horas añadidas a los turnos u horas ya planificadas, se puede realizar mediante un ajuste real o un ajuste sobre e l total.

Si existe defecto de tiempo presencial, se mostrará un estado negativo, al ajustarse será tiempo de absentismo para completar la duración de los turnos u horas planificadas, se puede insertar con un ajuste real o un ajuste sobre el total. También se da la opción de poder realizar un ajuste por ‘ Reducir jornada ‘.

Además de estas columnas, se puede configurar para añadir la siguiente información desde ‘Visibilidad’:

### Presencia fuera del horario

Indica todo el tiempo fichado que no se corresponde con el horario del turno planificado en el cuadrante. Si existe un turno planificado con un horario de inicio de las 08:00 horas y final de las 15:00 horas, si el inicio del fichaje se ha realizado a las 07:30 horas, esos 30 minutos que no se corresponden con el horario del turno, se informarán como ‘Presencia fuera del horario’.

De la misma forma, si el fichaje de fin de la jornada, se ha realizado a las 16:00 horas, se informa de esa hora que no corresponde con el horario.

### Presencia fuera del horario sin tolerancia

Al igual que la anterior opción, informa del tiempo fichado que no coincide con el horario del turno planificado, en ese caso teniendo en cuenta las tolerancias y su configuración.

Cuando el tiempo fichado que no se corresponde con el horario del turno, no supera el tiempo de tolerancia, no se informa. En caso de superarlo, si muestra el tiempo. Siguiendo el ejemplo anterior si hay configurada una tolerancia por exceso de tiempo al inicio del turno de 30 minutos, si el fichaje al inicio de la jornada es a las 07:30 horas, no se informa aunque no se corresponda con el horario del turno.

Sin embargo, si hay una tolerancia configurada de 10 minutos por exceso al final del turno y el fichaje de final de jornada se realiza a las 16:00 horas, se informa de esa hora de tiempo fichado fuera del horario del turno.

De la misma forma, si está configurada la opción ‘Restar la tolerancia del total si se supera’, en el caso de superar la tolerancia, se va a mostrar el tiempo fichado que no coincide con el horario del turno planificado, restado el tiempo de tolerancia configurado. Por ejemplo, si existe una tolerancia de 30 minutos de exceso al inicio del turno de trabajo y el fichaje de inicio se realiza a las 07:00 horas, la columna ‘Presencia fuera del horario sin tolerancia’ informa de 30 minutos y no de 1 hora.

### Presencia en horario + Horas Recuperadas

Informa del tiempo de ‘Presencia fuera del horario’ más las ‘Horas recuperadas’.

### Descanso autorizado

En esta columna se muestra el descanso configurado a nivel de turno, trabajador o equipo, siempre que el descanso fichado haya superado el descanso configurado.

Por ejemplo, si el descanso configurado a nivel de trabajador es de 30 minutos y el trabajador ha fichado un descanso de 35 minutos, se muestran los 30 minutos de ‘Descanso autorizado’.

### Incumplimiento

Se informa del defecto de tiempo fichado teniendo en cuenta el horario del turno planificado y el descanso configurado. Si por ejemplo, hay configurado un descanso de 15 minutos y el trabajador ha fichado un descanso de 35 minutos, se informará de un ‘Incumplimiento’ de 20 minutos. En caso de que el trabajador, haya fichado más tarde el inicio de jornada y el final, fichando 10 minutos más tardes al inicio y 10 minutos antes al final, también tendrá un incumplimiento de 20 minutos.

Esto también tendrá en cuenta las tolerancias configuradas.

### Horas Recuperadas

Indica el tiempo que se ha fichado de menos al inicio del turno de trabajo, que ha sido recuperado al fichar más tarde el final de jornada de trabajo, sin que afecte al ‘Estado de las horas’. Este tiempo recuperable se configura en las tolerancias, en la opción ‘Tolerancia recuperable’.

Si por ejemplo, al inicio del turno se fichan la entrada a las 08:11 (habiendo una configuración de ‘Tolerancia recuperable’ de 10 minutos) y al final del turno se ficha la salida a las 15:30, se informan esos 10 minutos como ‘Horas recuperadas’ y en el estado solo habría 19 minutos de exceso de tiempo.

### Absentismos

Se muestra el tiempo de los absentismos aplicados, ya sea por haber sido planificado por una petición de permiso o al realizar un ajuste por defecto de tiempo fichado.

Por ejemplo, un trabajador que ha salido 2 horas antes de su fichaje de fin del turno, al ajustar ese tiempo, se marcará como 2 horas de absentismos. También si tiene un permiso planificado ese día, sea o no justificado, se informarán de las horas afectadas por el absentismo.

### Horas extras/complementarias

Indica las horas planificadas, ajustadas o solicitadas por petición de horas que sean de tipo Extra o Complementarias.

### Cómputo presencia

Se informa del tiempo fichado, computando los absentismos justificados, descontando la horas extras/complementarias y descontando los descansos no fichados si así está configurado en la gestión de descansos.

### Cómputo presencia extra

Se muestra el tiempo fichado, computando los absentismos justificados y las horas extras/complementarias, pero descontando los descansos no fichados si así está configurado en la gestión de descansos.

### Exceso de horas pendientes de aplicar

Informa del tiempo que el trabajador ha fichado de exceso con respecto al turno u horas planificadas, teniendo en cuenta la configuración de tolerancias. Por ejemplo, si existe un turno planificado de 08:00 a 15:00 horas, y el fichaje realizado es de 08:11 a 15:30, al haber una tolerancia de 10 minutos de exceso al final del turno y restarse, el tiempo de “Exceso de horas pendientes de aplicar”, es de 20 minutos.

### Absentismos pendientes de aplicar

En este caso, se indica el defecto de tiempo entre un fichaje y lo planificado, tomando la configuración de tolerancia s. Por ejemplo, si un trabajador tiene un turno de 08:00 a 15:00 horas, con un fichaje de inicio a las 09:00 y uno de fin a las 15:00 horas. Hay una hora de defecto de tiempo pendiente de justificar por un absentismo.

### Ajustes

En los casos en los que se necesario corregir el estado de horas de un fichaje, se puede añadir un ‘Ajuste’ desde el menú de ‘Acción’.

### Nocturnidad

Muestra el tiempo de horas nocturnas trabajadas por el trabajador en función de la configuración de ‘Nocturnidad’ del equipo.

### Acumulado año anterior

Este dato solo se muestra en el caso de haber realizado la acción de ‘Migrar saldo del acumulado del estado de horas’, indicando el saldo del año anterior al final del año natural o fiscal.

De esta forma, el estado de horas, se empezará a compensar con este saldo hasta quedarse a 0, fecha desde la cual se empezará a volcar el saldo en el ‘Acumulado anual’.

Esta función no funciona con el ‘Acumulado del estado de horas’.

### Acumulado anual

Computa el exceso de tiempo o defecto de tiempo, compensando ambos según los estados diarios de todos los fichajes del año hasta la fecha actual.

En el caso de ‘Migrar saldo del acumulado del estado de horas’, si existe defecto o exceso de horas en el saldo, se compensará con el ‘Acumulado del año anterior’. Una vez saldado, el exceso o defecto de tiempo se compensa con el ‘Acumulado anual’.
