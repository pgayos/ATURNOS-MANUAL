---
schemaVersion: "1.0"
contentId: planificacion-9-planificabilidad-disponibilidad
title: Planificabilidad & Disponibilidad
description: La planificabilidad mide la adecuación de un trabajador para realizar un turno o una tarea en un momento determinado dependiendo de su contrato y las restricciones laborales, tanto las oblig.
contentType: concept
module: Planificación
submodule: Contratos
subtopic: ""
intent: Planificabilidad & Disponibilidad
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: disponibilidad
    label: Disponibilidad
  - id: planificabilidad
    label: Planificabilidad
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
    - https://manual.aturnos.com/knowledgebase/planificabilidad-disponibilidad/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/planificabilidad-disponibilidad/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre planificabilidad & Disponibilidad?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/planificabilidad-disponibilidad/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/planificabilidad-disponibilidad/
  contentHash: 14febdb69963690ad5a1ac0165631bed95608bc513c76cb73aba82a7b2aaad40
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre planificabilidad & Disponibilidad, con instrucciones y contexto revisables por el equipo de aTurnos.

La planificabilidad mide la adecuación de un trabajador para realizar un turno o una tarea en un momento determinado dependiendo de su contrato y las restricciones laborales, tanto las obligatorias por contrato o convenio como las deseables por parte del trabajador.

aTurnos analiza la planificabilidad de forma constante por cada trabajador y día para ofrecer las mejores planificaciones posibles. Le damos la puntuación a cada día para que el trabajador sea planificado cuando se ejecuta el algoritmo.

Antes de poder analizar la planificabilidad es necesario entender que es la disponiblidad:

### Disponibilidad

Indica la posibilidad (Entre 0% y 100%) de planificar un trabajador en un día en determinado sin tener en cuenta la demanda de negocio y la planificación que ya tiene el empleado realizado. Dentro de la disponibilidad, el porcentaje de disponibilidad analiza en porcentaje como se pueden repartir las horas semanales del trabajador en la semana. Cuando no puede algún día por concreción laboral aparece como 0%. En este ejemplo el trabajador no puede trabajar ni jueves ni viernes.

Los otros cinco días de la semana está disponible al 20% donde reparte su jornada hasta el 100%. Después, es interesante analizarlo en horas. Puede ser que un trabajador tenga un límite máximo de horas al día por contrato. En este caso no puede realizar más de 8 horas. A su vez, el trabajador puede tener un máximo de horas al día. Esta sería la máxima disponibilidad de horas que tendría que cada uno de los días.

Este trabajador, por ejemplo, puede realizar 8 horas al día de máximo pero no puede trabajar ni jueves ni viernes:

### Planificabilidad

El objetivo final es medir la puntuación para planificar un trabajador en un día determinado con respecto a una demanda. Es un factor clave para realizar las mejores planificaciones posibles, pues tiene en cuenta todo (restricciones, demanda, especialidades…).

Las horas planificadas son los turnos (horas) que cada trabajador tiene asignados en el cuadrante.

Las horas de planificabilidad divide las horas de contrato semanales entre los días que puede trabajar dentro de las horas que tiene disponible. Es decir, que ya descuenta las horas que han sido planificadas y solo tiene en cuenta las horas restantes que tiene esa semana.

En el ejemplo, el trabajador tiene un contrato de 24 hora a la semana. Ya tiene planificadas 8 horas el lunes, por lo que le quedan 16 a repartir entre los 5 días. 16/5 saca un total de 3.2 que se pueden planificar el resto de día.

El porcentaje de planificabilidad muestra en porcentaje las horas de planificabilidad de cada día, es decir, coge las horas de planificabilidad y las divide entre el máximo de horas que el trabajador puede trabajar a la semana.

En el ejemplo, las horas de planificabilidad son 3.2 y como dijimos anteriormente, el trabajador tiene un contrato de 24 horas a la semana. 3.2/24 nos da 0.1333 (un 13.33%).

Y por último, el parámetro más importante es el de planificabilidad ajustada a demanda y planificación, pues nos indica la puntuación que tiene ese trabajador de trabajar cada día de la semana (a mayor puntuación mayor prioridad para trabajar ese día).

Se basa en el análisis de las restricciones tanto deseables como obligatorias del empleado para obtener una puntuación para planificar a un trabajador antes que a otro.

Es decir, si un trabajador ha seleccionado como deseable no trabajar los miércoles por la tarde, debe tener una mayor puntuación para trabajar el resto de la semana. Así, tanto los algoritmos como las recomendaciones al mando van a tener en cuenta este criterio.

Se calcula con: Horas de disponibilidad x Ajuste de la demanda por semana x Demanda ya planificada en el día / Demanda ya planificada en total a la semana.

El ajuste de la demanda por semana se calcula como el máximo de horas que el empleado puede trabajar a la semana menos las horas totales planificadas entre la suma total de las horas de disponibilidad. La demanda ya planificada en el día cuenta el número de trabajadores que hacen falta para cubrir la demanda de todo el día en cada intervalo de tiempo mínimo (15 minutos). Y la total es la suma de la de todos los días de la semana.

Hay algunas restricciones que afectan a este parámetro:

- 2.5 Descansar X fines de semana al mes. Esta restricción, sin turnos planificados no hace nada. Con un turno el sábado le añade al domingo un +2, y viceversa. Con un turno cada día (del fin de semana) no añade nada.
- 2.6 Días de descanso seguidos a la semana. Sin turnos no hace nada, al igual que la anterior, pero cuando un trabajador tiene un turno un día, al día siguiente y al anterior les añade un +4 (prioridad) a la planificabilidad (si no tienen turnos esos días).
- 2.9 No trabajar mas de X fines de semana al año. Se comporta igual que la 2.5.
- 5.12 Concreción laboral. Los días que le indiquemos van a tener un 0 de planificabilidad (si tienen un valor de ‘No disponible’). Los días que le indiquemos un intervalo de tiempo dependerá de dicho intervalo. Por ejemplo, si le indicamos que solo puede trabajar de 10 a 16 horas un determinado día, las horas disponibles de ese día son 6, y ya cambia todo.

En el ejemplo se ve como el martes la puntuación es mucho mayor debido a que tiene un turno planificado el lunes, y por la restricción 2.6 tiene más prioridad de trabajar ese día.

A continuación, a modo de ejemplo, se va a realizar una comparativa entre un trabajador 40 horas (con concreción laboral el viernes), un 20 horas y un weekend, para ver quién tiene prioridad en cada caso:

En este caso (sin turnos asignados) vemos que el trabajador de 40 horas a la semana va a tener prioridad de lunes a jueves, lógico pues tiene más horas de disponibilidad esos días que el 20 horas, el 20 horas va a tener prioridad el viernes, pues solo puede trabajar él, y en el fin de semana tendrá prioridad el weekend.

¿Qué pasa si añadimos turnos a los trabajadores? Lo vemos a continuación:

Ahora el trabajador de 40 horas tiene asignado un turno el lunes de 10 a 16 horas y por eso el martes tiene tanta prioridad (restricción 2.6), los demás días se comporta de la misma manera que antes:

En este caso, el 40 horas tiene un turno el sábado, por eso el domingo tiene tanta prioridad, ya que interesa que si trabaja el sábado, el domingo también, y viceversa:

Aquí, el 20 horas tiene un turno el martes, y por eso el lunes y el miércoles tiene prioridad frente a los otros trabajadores:

En este caso, el trabajador de 20 horas tiene un turno el sábado, y por lo tanto, los días contiguos tendrán prioridad para trabajar.

Lo mismo pasa cuando es el weekend el que tiene el turno:

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Disponibilidad](/media/manual/disponibilidad-4789d499b7.png)

![Planificabilidad](/media/manual/planificabilidad-2c4c660dd9.png)

![Planificabilidad](/media/manual/planificabilidad-811ca1fa98.png)

![Planificabilidad](/media/manual/planificabilidad-d716787884.png)

![Planificabilidad](/media/manual/planificabilidad-a050ba9a78.png)

![Planificabilidad](/media/manual/planificabilidad-d303003975.png)

![Planificabilidad](/media/manual/planificabilidad-d4100a44ef.png)
