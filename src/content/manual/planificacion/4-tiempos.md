---
schemaVersion: "1.0"
contentId: planificacion-4-tiempos
title: Tiempos en aTurnos
description: El administrador, en el perfil del trabajador, puede consultar información de tiempos relacionados con los días de vacaciones, horas de contrato, horas planificadas, balances, ajuste de hora.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Tiempos en aTurnos
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
  - id: tiempos
    label: Tiempos
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
    - https://manual.aturnos.com/knowledgebase/4-tiempos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-tiempos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre tiempos en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 13
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-tiempos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-tiempos/
  contentHash: f8cf787e8e5743bafda5feb2f631a56f8a1a19fe2bfa3b759d9339194e55e28e
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre tiempos en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos.

El administrador, en el perfil del trabajador, puede consultar información de tiempos relacionados con los días de vacaciones, horas de contrato, horas planificadas, balances, ajuste de horas e información de interés como es el cálculo estimado de horas del trabajador en el año.

## Vacaciones

Las vacaciones se consideran como un tipo de turno. El administrador del equipo puede planificar las vacaciones, en los diferentes cuadrantes de aTurnos de varias formas: añadiéndolas desde el propio cuadrante, aplicando patrones de vacaciones o por el proceso de peticiones de vacaciones, esta última opción es la recomendada.

En el cuadrante destaca con color naranja y la abreviatura “V “. El administrador del equipo puede configurar a nivel de equipo, desde el ajuste general del menú, el tipo de vacaciones (naturales o laborables), la cantidad de días de vacaciones que dispone en el año, un redondeo en caso de no ser entero y hasta definir cuándo se pueden consumir dentro del año siguiente (fin del periodo vacacional). También puede personalizar a nivel individual el número y tipo de vacaciones a un trabajador.

- Tipo de vacaciones: En el desplegable puedes elegir si las vacaciones se planifican en el cuadrante en los días naturales o días laborables.

1. Días naturales: Afecta a todos los días, incluye los días planificados y no planificados en el cuadrante.
2. Días laborables: Afecta únicamente a los días planificados en el cuadrante. Es importante que antes de aceptar peticiones de vacaciones laborables en el cuadrante, verificar que los días estén planificado (Ver más información).
3. Dejar elegir: El administrador, en el proceso de validación de las vacaciones en el cuadrante, tiene la opción de elegir entre días naturales o laborables. Estas opciones de vacaciones que son a nivel individual, se pueden configurar a nivel de equipo o convenio dentro de Administrar las vacaciones.

### ¿Cómo ajustar las vacaciones pendientes a los trabajadores?

Es frecuente, que los trabajadores, al acabar el año continúen con vacaciones pendientes por disfrutar. Estas vacaciones pueden ser planificadas en el año siguiente y computen en el balance de vacaciones del año anterior, dependiendo del día del fin del periodo vacacional informado, (más información ¿Cómo funciona la fecha fin del periodo vacacional? ).

En el caso de necesitar pasar vacaciones del año anterior al siguiente año, el administrador dispone de tres fórmulas diferentes para ajustar el balance de vacaciones de los trabajadores:

Esta opción es un proceso automatizado, consiste en trasladar las vacaciones pendientes del año anterior al balance de vacaciones del año siguiente, ajustándose los balance de vacaciones de ambos años.

En el caso de que existan días de vacaciones pendientes de disfrutar del año anterior, se pueden ajustar realizando un traslado del balance de vacaciones al año siguiente, desde el perfil del trabajador.

Este proceso, se basa, en primer lugar crear un tipo de absetismo justificado, como por ejemplo “Vacaciones Año Anterior” (VAA), y en segundo lugar crear una restricción tipo “No superar el número de veces que se realiza un cierto turno/absentismo al año“e informar el valor del absentismo, el cual será el número de vacaciones pendientes del año anterior.

El tipo de absentismo tiene que ser de tipo de absentismo justificado, para que computen las horas de los turnos que tengan asociado este absentimo.

Con la restricción ya creada, el administrador planificará este tipo de absentismo hasta alcanzar el máximo permitido por la restricción.

¿Cómo se traslada un balance de vacaciones al año siguiente?

Esta opción es un proceso automatizado. Consiste en ajustar de manera automatizada las vacaciones pendientes del trabajador, de un año al año siguiente. Esta acción se puede aplicar para un solo trabajador, para varios o todos los trabajadores de un equipo, o para todos los trabajadores de varios equipos de la empresa.

Este proceso se basa en un incremento o decremento del balance de las vacaciones de un año anterior y del año siguiente, donde han migrado las vacaciones.

Por ejemplo, si un trabajador tiene por convenio 30 días de vacaciones anuales y en el 2021 ha disfrutado de 27 días, en el año 2022 tendrá 33 días de vacaciones. Las 33 vacaciones de 2022 resultan de los 30 días de convenio año de 2022 más los 3 días de vacaciones del 2021, que no fueron planificado.

El sistema de manera automatizada, realizará un ajuste en el año 2021 de ‘Incremento balance de vacaciones’ para dejar el balance de vacaciones a cero en 2021 y, por el contrario, se aplicará un ajuste en el balance de vacaciones en el año 2022 de ‘Decremento balance de vacaciones’, para que el trabajador pueda disfrutar de esos 3 días restantes en el año 2022, computando un total de 33 días de vacaciones.

¿Cómo migrar el balance de vacaciones de un año al siguiente?

Es un ajuste manual de vacaciones del trabajador. Este proceso se realiza desde el perfil del trabajador y de manera individualizada.

El ajuste manual consiste en decrementar el saldo de vacaciones en el año donde aún tiene vacaciones pendientes por disfrutar el trabajador y en incremetar el saldo de vacaciones en el año siguiente.

Por ejemplo, si el balance de vacaciones de un trabajador es de 20/30 en el año 2021, significa que tiene planificado 20 días de vacaciones de los 30 días de vacaciones que tiene por convenio en 2021. El ajuste consistirá en pasar 10 días de vacaciones del 2021 al 2022. Las acciones en el ajuste serán:

1º Decrementar el saldo de vacaciones en 10 días de Vacaciones en 2021, para obtener un balance de vacaciones de 0 (20/20) en 2021.

2º Incrementar el saldo de vacaciones en 10 días de Vacaciones en 2022. Aumentado el balance de vacaciones en 2022 en 40 días de vacaciones (30 días de vacaciones de 2022 +10 días de vacaciones de 2021). 40 (0/30) +10 ajuste.

## Horas

En este apartado se definen todos los datos en base a los tiempos de trabajo regulados por convenio colectivo o los contratos de los trabajadores, así como los posteriores ajustes respecto a las horas computadas en el cuadrante.

- Horas contrato/año: Son las horas que tiene que realizar un trabajador en el año por su contrato dentro de la empresa. Este valor puede ser modificado por el administrador, este cambio genera un cálculo automático del resto de valores de horas como puede ser el número de horas contrato del periodo, teniendo en cuenta el porcentaje de jornada laboral del trabajador.
- Porcentaje de jornada: Indica el % de jornada que realiza el trabajador en el periodo de contrato consultado. Es el valor que se aplica a las horas contrato/año para el cálculo de las horas contrato/periodo. Si realiza una jornada completa el porcentaje será del 100%.
- Horas contrato (periodo): Número de horas de trabajo que le corresponde al trabajador, con el porcentaje de jornada aplicado y proporcional al periodo contratado. Si trabaja todo el año al 100% de la jornada anual marcada en convenio, coincidirá con las “horas contrato/año”.
- Total horas computadas: Total de las horas y turnos que computan (horas computadas). No se incluyen las horas asociadas a absentismos no justificados (no productivos). Se tiene en cuenta todos los periodos con horas que computan en el año en curso. Este dato se obtiene del total de horas computadas en el cuadrante.
- Ajuste de horas: Incremento o decremento de horas que no tiene reflejo en el tiempo en un día determinado durante todo el año. Contabiliza estas horas teniendo en cuenta todos los ajustes de horas que se realizan en los diferentes periodos de contratos que se realiza en el mismo año. Por ejemplo, en un finiquito las horas que genera la nocturnidad o cuando se mueven exceso o defecto de horas de un año al siguiente (Ver Ajustes de horas).
- Total horas computadas más ajuste: Total de las horas computadas más los ajustes de horas computadas. Teniendo en cuenta todos las horas y ajustes de horas de todos los periodos que estén incluidos en el mismo año consultado.
- Balance de horas: Diferencia de horas al comparar el total horas computadas (incluido el ajuste de horas) y las horas contrato del año consultado. Puede ser con defecto o exceso de horas. Si el resultado es un defecto de horas significa que las horas de contrato tienen un valor mayor a las horas computadas más ajustes. Ejemplo: 30 (900/930) se interpreta como un defecto en 30 horas (horas computadas más ajuste/horas totales de los contratos).

En el caso de que el trabajador en un mismo año presente más de un periodo de contrato, dependiendo en el periodo que se consulte, el sistema ofrece de manera independiente las horas del trabajador en este periodo. Son las siguientes:

- Total horas computadas en el periodo: Total de las horas y turnos que computan del periodo consultado. No se incluyen las horas asociadas a absentismos no justificados (no productivos).
- Ajuste de horas en el periodo: Incremento o decremento de horas que no se refleja en un día determinado durante el periodo de contrato consultado. Contabiliza estas horas teniendo en cuenta solo las ajustadas en ese periodo.
- Total horas computadas más ajuste en el periodo: Son las horas computadas más los ajustes de horas. Solo teniendo en cuenta las horas en el periodo consultado.
- Balance de horas: Diferencia de horas al comparar el total horas computadas (incluido el ajuste de horas) y las horas contrato del periodo consultado. Puede ser con defecto o exceso de horas. Si el resultado es un exceso de horas significa que las horas de contrato tienen un valor menor a las horas computadas más ajuste. Ejemplo: 7.97 (392/384.03) se interpreta como un exceso en 7.97 horas en este periodo de contrato (horas computadas más ajustes/horas totales de los contratos).

En aTurnos es interesante informar las horas estimadas de contrato al día, semana y mes. Así como las horas extras anuales y complementaria que indica los diferentes convenios laborales, con ello nos permite comparar las horas computadas que tiene registrada en el cuadrante el trabajador y las horas estimadas.

- Horas contrato al día: Son las horas de trabajo estimadas de convenio por día. Es un dato que ayuda a planificar y es estimado, aunque por restricciones se puede comprobar mientras realizas la planificación. Puedes crear una restricción para que el trabajador no exceda en la planificación de las horas diarias dictadas por convenio (Véase la restricción “No superar las horas diarias del trabajador “). Ejemplo: para un trabajador cuya jornada anual sea de 1.800h., las horas de contrato estimadas al día son 8h.
- Horas contrato a la semana: Son las horas de trabajo estimadas de convenio por semana. Es un dato que ayuda a planificar y es estimado, aunque por restricciones se puede comprobar mientras realizas la planificación. Existen empresas donde el control del límite de horas se hace por semanas. Puedes crear una restricción para que el trabajador no exceda en la planificación de las horas semanales dictadas por convenio (Véase la restricción “No superar las horas semanales del trabajador “) Ejemplo: para un trabajador cuya jornada anual sea de 1.800h., las horas de contrato estimadas a la semana serán 40h.
- Horas contrato al mes: Identifica las horas de trabajo estimadas de convenio por mes. Es un dato que ayuda a planificar y es estimado, aunque por restricciones se puede comprobar mientras realizas la planificación. Existen empresas donde el control del límite de horas se hace por meses. Puedes crear una restricción para que el trabajador no exceda en la planificación las horas mensuales dictadas por convenio (Véase la restricción “No superar las horas mensuales del trabajador “). Ejemplo: para un trabajador cuya jornada anual sea de 1.800h., las horas de contrato estimadas a la semana serán de 160h. (para los meses con 20 días laborables).
- Horas extras anuales: Son las horas extras de trabajo por año de convenio, es decir, aquellas horas que no forman parte del horario ordinario de trabajo, por lo que se asignan de forma extraordinaria, es decir, no se suman a su planificación ordinaria. Es muy habitual que en algunas empresas controlen estas horas, con el fin de no sobrepasarlas. Para establecer un control sobre las mismas, se define un montante total, que en España son 80 horas al año. Puedes crear una restricción para que el trabajador no exceda en la planificación las horas extras anuales dictadas por convenio (Véase la restricción “No superar las horas extra anuales del trabajador “). Ejemplo: un trabajador a tiempo completa tiene una jornada anual por convenio de 1.800h., por lo tanto, dicho trabajador únicamente podrá realizar, como máximo, 80h. extras anuales.
- Horas complementarias: Indica las horas anuales por convenio que un trabajador a tiempo parcial puede realizar complementariamente a las horas establecidas en su contrato de trabajo. Cabe recordar que el número de horas complementarias, en ningún caso, puede superar el 100% de las horas anuales ordinarias dictadas en convenio para trabajadores a jornada completa. A su vez, muestra el total de horas complementarias que tiene asignado el trabajador, así como cuántas de dichas horas ya han sido realizadas por el trabajador. Puedes crear una restricción para que el trabajador no exceda en la planificación las horas complementarias anuales (Véase la restricción “No superar las horas complementarias anuales del trabajador “). Ejemplo: un trabajador a tiempo parcial tiene establecido en su contrato de trabajo que va a realizar el 50% de la jornada ordinaria anual de trabajo (en un convenio de 1.800h. anuales, este trabajador tendría entonces 900h. de contrato, es decir, el 50%). Por lo tanto, este trabajador podrá realizar como horas complementarias al año un máximo de 900h., para que estas horas complementarias, junto a las que tiene en su contrato de trabajo, no superen el máximo de horas ordinarias anuales dictadas por Convenio, que, en nuestro ejemplo, son 1.800h.
- Horas vacaciones pendientes: El valor de las horas de vacaciones pendientes, viene del cálculo estimado de la suma de todas las horas vacaciones pendientes de cada mes. Es un dato opcional que se activa desde la configuración general del equipo en el campo “transformar en horas las vavaciones pendientes”, consisten en que las vacaciones no planificadas se transforman en horas a trabajar, como ocurre por ejemplo, en los contratos de corta duración cuando las vacaciones no se van a disfrutar.

### ¿Cómo se realiza un ajuste de horas?

Partimos de que el ideal en la planificación es que las horas computadas coincidan con las horas contrato año. Es frecuente que al final de cada año o en fechas cercanas a la fecha de fin del contrato del trabajador el balance de horas no se encuentre ajustado,es decir, no coinciden las horas computadas con las horas contrato del trabajador. Los administrador disponen de dos fórmulas diferentes, para ajustar el balance de horas de los trabajadores:

- Ajuste de horas desde el perfil del trabajador

Los administradores pueden realizar ajuste de horas, con un incremento o decremento de las mismas, en los diferentes periodos de contrato o de desde un año al siguiente. Estos ajustes de horas son interesantes en el inicio de año, ayudando al administrador a tomar decisiones en la planifcación, al tratar el exceso o defecto de horas, según los balances de horas, que presenta en trabajador a final del año.

En caso de finiquito, es posible que existan diferencias entre las horas computadas y las horas contrato año, para estos casos también se utilizan los ajustes manuales.

Caso de uso ¿cómo se realiza un ajuste de horas desde el perfil del trabajador?

- Migrar balance de horas de un año al siguiente

En el caso de no escoger la acción anterior, se pueden ajustar migrando las horas por exceso o por defecto del trabajador de un año al año siguiente. Esta acción se puede aplicar para un solo trabajador, para todos los trabajadores de un equipo o para todos los trabajadores de la empresa.

### Cálculo estimado de horas

El cálculo estimado de horas es la forma que tenemos en aTurnos de distribuir mensualmente el total de las horas contrato.

A través de este cálculo se dispone de un balance de horas mensual, es decir, es la diferencia entre las horas estimadas a trabajar al mes menos las horas planificadas más/menos los ajustes informados.

Dos formas de acceder al cálculo estimado, en el perfil del trabajador

o a través del cuadrante

- ¿Cómo se realiza el cálculo estimado?
