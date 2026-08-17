---
schemaVersion: "1.0"
contentId: "planificacion-1-sobre-los-tipos-de-turnos-y-absentismos"
title: "Sobre los tipos de turnos y absentismos"
description: "Es una de las tres restricciones que se aplica por defecto en todos los equipos."
contentType: reference
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Sobre los tipos de turnos y absentismos"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
entities:
  - id: "absentismos"
    label: "Absentismos"
  - id: "sobre"
    label: "Sobre"
  - id: "tipos"
    label: "Tipos"
  - id: "turnos"
    label: "Turnos"
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
    - "https://manual.aturnos.com/knowledgebase/1-sobre-los-tipos-de-turnos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-sobre-los-tipos-de-turnos/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre sobre los tipos de turnos y absentismos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 14
featured: false
migration:
  sourceCount: 1
  contentHash: "bc3d380ac36420c2e7d94a96ae376e0c8cfe10c954ba9c3cae03842969926534"
  migratedAt: 2026-08-17
---
## Resumen

Es una de las tres restricciones que se aplica por defecto en todos los equipos.

### 1.1 No permitir solapamiento de turnos

Esta restricción impide la planificación de dos turnos que compartan horario. Por ejemplo, si ya se tiene planificado un turno M (08:00-14:00) no se podría insertar un M1 (09:00-15:00) porque en ese mismo día ya se ha insertado el turno M, y se solaparía.

⚙️Configuración: Esta restricción tiene una configuración básica.

### 1.2 No permitir solapamiento de turnos sin horas con planificación

Esta restricción impide que se puedan añadir turnos sin horas computadas en días ya planificados directamente en el cuadrante. Estos turnos corresponden a, por ejemplo, salientes de turno…

⚙️Configuración: Esta restricción tiene una configuración básica con un campo adicional.

- Comprobación día al que pertenece el evento: En esta configuración decide si el sistema debe usar el inicio o el fin del evento para comprobar si se puede aplicar la restricción o no.

### 1.3 No permitir realizar un tipo de turno o absentismo

Esta restricción impide planificar un determinado tipo de turno o solicitar un determinado tipo de absentismo en los días de la semana seleccionados. Se aplica cuando no se puede hacer un tipo de turno o absentismo por algún acuerdo establecido con la empresa o superior, por convenio o por contrato.

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Días de la semana: Se debe hacer clic sobre los días de la semana que se quiere aplicar la restricción. Tipos de turno: Se debe hacer clic sobre los turnos a los que se les aplicará la restricción.

### 1.4 Limitar a solo poder realizar un tipo de turno

Esta restricción limita a realizar unos determinados tipos de turno en unos días determinados de la semana. Es decir, se le da la exclusividad a ciertos turnos de ser planificados en días determinados, si se tratase de planificar esos turnos en días diferentes, la restricción lo impediría.

⚙️Configuración: Además de la configuración básica, tiene 4 campos adicionales.

- ¿Cuándo aplica?: se deberá seleccionar si la restricción aplica a semanas pares o a semanas impares. Impares: Semanas 1 y 3 del mes, Pares: Semanas 2 y 4. Días de la semana: se debe hacer clic sobre los días que se quiere aplicar la restricción. Tipos de turno: Se debe hacer clic sobre los turnos que se permitirá trabajar. Permitir horas normales con duración de los turnos seleccionados. Se debe indicar si la restricción únicamente a turnos o si también aplica a algún tipo de hora.

### 1.5 Limitar a solo poder realizar un tipo de turno en los días elegidos de la semana

Esta restricción impide realizar un tipo de turno un día diferente al definido en la restricción. Por ejemplo: Se configura la restricción para que el tipo de turno M2 solo se pueda realizar los sábados. Al intentar insertarlo otro día, la restricción lo impide.

⚙️Configuración: Además de la configuración básica tiene 2 campos adicionales:

- Días de la semana: se debe hacer clic sobre los días que se quiere aplicar la restricción. Tipos de turno: Se debe hacer clic sobre los turnos que se permitirá trabajar.

### 1.6 Limitar a solo poder realizar el mismo turno durante todo el mes natural

Esta restricción impide que un trabajador realice más de un tipo de turno. El sistema toma como referencia el primer turno insertado en el mes. Si se le inserta a un trabajador un turno M el primer día del mes, no podrá trabajar otro tipo de turno durante todo el mes natural. Además, solo se pueden añadir patrones si estos contienen el mismo tipo de turno, si hay algún otro tipo, el sistema no permite añadirlo.

⚙️Configuración. Esta restricción tiene una configuración básica.

Nota. Si se les aplica la restricción a todos los trabajadores, cada trabajador puede tener diferente tipo de turno, pero dentro de esta diferencia, un trabajador solo puede trabajar un tipo.

Por ejemplo: si a un trabajador1 con el cuadrante vacío se le inserta un turno M, sólo podrá tener planificados durante todo el mes natural el turno M. Sin embargo con la restricción aplicada a todos los trabajadores, se puede insertar a un trabajador 2 un turno T con el cuadante vacío, y desde el momento en el que se le inserta, únicamente podrá tener la planificación del turno T. Es decir, con la misma restricción el trabajador 1 únicamente trabajaría el turno M durante todo el mes, y el trabajador 2 el turno T.

### 1.7 Limitar a solo poder realizar el mismo turno durante toda la semana

Esta restricción impide que un trabajador realice más de un tipo de turno durante toda la semana.

⚙️Configuración. Esta restricción, además de la configuración básica tiene dos campos adicionales.

- Margen de minutos al inicio y fin del turno.Es una tolerancia configurada para permitir que un empleado pueda fichar su entrada o salida antes o después de la hora programada del turno sin que se considere fuera de horario. Rango de la semana donde se aplica. Este campo sirve para definir si aplicarla de lunes a viernes, lunes a domingo o Únicamente sábados y domingo

### 1.8 Limitar a realizar el mismo turno consecutivo hasta tener un descanso con un máximo de días consecutivos

Esta restricción permite trabajar únicamente un único tipo de turno de manera consecutiva unos días determinados.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Valor de restricción: En este campo se debe establecer el número de días consecutivos que se quiere trabajar.

### 1.9 Limitar el número máximo cambios en la secuencia de tipos de turno, cuando se planifica en una misma semana y/o fines de semana

Esta restricción limita el número de variaciones en la planificación de una misma semana y/o fines de semana. Los días libres no se contabilizan como cambio en la secuencia de los turnos.

⚙️Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales.

- Valor de restricción: En este campo se debe establecer el número de días consecutivos que se quiere trabajar. Rango de la semana donde se aplica: Este campo sirve para definir si aplicarla de lunes a viernes, lunes a domingo o Únicamente sábados y domingos.

Ejemplo: en una misma semana el trabajador no puede tener más de 2 cambios en la secuencia de tipos de turno planificados en la semana.

Caso 1: MMMTTLL. En este ejemplo solo ha habido un cambio en la secuencia, en la 3º M al pasar a la 1º T. La restricción no avisaría porque no se considera incumplimiento de la restricción

Caso 2: MTMTTLL. En este ejemplo ha habido 3 cambios en la secuencia de tipo de turno. La restricción, avisaría porque se ha incumplido.

### 1.10 Máximo de un tipo de turno y/o absentismo en el mes natural

Esta restricción limita a un número máximo, el trabajar un tipo de turno o el solicitar un tipo de absentismo en el mes natural.

⚙️Configuración: Esta restricción, además de la configuración básica tiene tres campos adicionales.

- Localización: Indica la localización a la que afecta la restricción. Valor de restricción: En este campo se debe establecer el número de días máximos que se pueden trabajar un tipo de turno o pedir un tipo de absentismo. Tipos de turno: Se debe hacer clic sobre los turnos que se permitirá trabajar.

### 1.11 Máximo de un tipo de turno o absentismo planificado al año

Esta restricción impide que un tipo de turno o absentismo se pueda realizar más de un número de veces al año. En la configuración de esta restricción solo se puede seleccionar un turno o absentismo. Los absentismos temporales no se incluyen en esta restricción.

⚙️Configuración: Esta restricción, además de la configuración básica tiene cuatro campos adicionales.

- Valor de restricción: En este campo se debe establecer el número de días máximos que se pueden trabajar un tipo de turno o pedir un tipo de absentismo. Tipos de turno: Se debe hacer clic el turno sobre el que la restricción aplica. Con respecto al porcentaje de la jornada: se debe seleccionar si se quiere considerar el porcentaje de horas por día según los datos del convenio. Esto afectara significativamente en la restricción. Calcular a proporción del periodo de contrato: Se debe seleccionar si se quiere recalcular esta restricción según el periodo de contrato

### 1.12 Máximo de un determinado tipo de turno seguido durante una cantidad de días definidos

Esta restricción limita a realizar un turno o absentismo un máximo de días definidos.

⚙️Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales.

- Valor de restricción: En este campo se debe establecer el número de días máximos que se pueden trabajar un tipo de turno o pedir un tipo de absentismo. Tipos de turno: Se debe hacer clic sobre los turnos que se permitirá trabajar.

### 1.13 Máximo de un tipo de turno o absentismo por día por equipo, localización o especialidad

Esta restricción limita a realizar un tipo de turno a los trabajadores de un determinado equipo, localización o especialidad en determinados días de la semana. Esta restricción se relaciona con la cobertura que se requiere de un turno por día en la calculadora de turnos.

⚙️ Configuración: Esta restricción, además de la configuración básica tiene cinco campos adicionales.

- Localización: Define la localización a la que se aplicará la restricción. Especialidad: Selecciona el grupo de especialidad al que aplicará la restricción. Valor de la restricción: Define el número de trabajadores máximo que podrán trabajar ese tipo de turno. Días de la semana: Define los días de la semana en los que aplicará ese turno. Tipos de turno: Define a que tipo de turno se le aplica esta restricción.

### 1.14 Máximo de absentismos totales (jornada completa) seguidos

Esta restricción restringe el número de absentismos totales que se pueden pedir de seguido.

⚙️Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales.

- Valor de restricción: En este campo se debe indicar el número máximo de absentismos que se permite solicitar de seguido. Tipo de absentismo: En este campo se debe indicar el tipo de absentismo que afecta a esta restricción.

### 1.15 Máximo de horas computadas de un tipo de absentismo al año

Esta restricción limita el número de horas computadas de un tipo de absentismo al año.

⚙️Configuración: Esta restricción, además de la configuración básica tiene cinco campos adicionales.

- Valor de restricción: En este campo se debe establecer el máximo de horas computadas de un tipo de absentismo al año. Tipo de absentismo: En este campo se debe indicar el tipo de absentismo que afecta a esta restricción. Total de horas iniciales: Este campo se utiliza para indicar las horas ya cumplidas sobre el campo valor de la restricción Con respecto al porcentaje de la jornada: se debe seleccionar si se quiere considerar el porcentaje de horas por día según los datos del convenio. Esto afectara significativamente en la restricción. Calcular a proporción del periodo de contrato: Se debe seleccionar si se quiere recalcular esta restricción según el periodo de contrato Acumular todos los periodos del año: Selecciona si se quiere considerar todos los absentismos del año fiscal.

### 1.16 Máximo de horas de un absentismo al mes

Esta restricción limita el número de horas que se pueden solicitar de un absentismo.

⚙️Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales.

- Valor de la restricción: Define el número máximo de horas de absentismo al mes. Tipo de absentismo: En este campo se debe indicar el tipo de absentismo que afecta a esta restricción. Con respecto al porcentaje de la jornada: se debe seleccionar si se quiere considerar el porcentaje de horas por día según los datos del convenio. Esto afectará significativamente en la restricción.

### 1.17 Máximo de días planificados de un absentismo total al año

Esta restricción limita el número de absentismos totales planificados al año.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene seis campos adicionales.

- Valor de restricción: En este campo se debe indicar el número máximo de días de absentismo total que se pueden solicitar al año. Tipo de absentismo: En este campo se debe indicar el tipo de absentismo que afecta a esta restricción. Incluir absentismos temporales: Indica si la restricción debe incluir los absentismos temporales cuando se compruebe el valor de la restricción. Con respecto al porcentaje de la jornada: se debe seleccionar si se quiere considerar el porcentaje de horas por día según los datos del convenio. Esto afectara significativamente en la restricción. Calcular a proporción del periodo de contrato: Se debe seleccionar si se quiere recalcular esta restricción según el periodo de contrato. Acumular todos los periodos del año: Selecciona si se quiere considerar todos los absentismos del año fiscal

### 1.18 Máximo de horas de absentismo por día

Esta restricción limita las horas de absentismo que puede solicitar al día un trabajador.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Valor de restricción: En este campo se debe indicar el número máximo de horas de absentismo que se pueden solicitar por día. Tipo de absentismo: En este campo se debe indicar el tipo de absentismo que afecta a esta restricción.

### 1.19 No permitir planificar turno u horas donde existan turnos de cero horas o vacaciones

Esta restricción impide la planificación en días en los que ya se tengan planificadas vacaciones o turnos de cero horas.

⚙️Configuración: Esta restricción, además de la configuración básica tiene un campo adicional.

- Comprobación día al que pertenece el evento: Selecciona si usa el inicio o final del evento para comprobar la restricción.

### 1.20. Máximo de días seguidos planificados con el mismo turno

Esta restricción limita el número de días que se puede trabajar un tipo de turno de manera consecutiva. La restricción toma como referencia el primer turno que se planifica en el cuadrante y saltará según el número máximo definido en la configuración.

⚙️Configuración: Esta restricción, además de la configuración básica tiene un campo adicional.

- Valor de la restricción: Indica el máximo de días a los que quieres aplicar la restricción.

Por ejemplo, si el valor es “4”, implica que no se permitirá trabajar 4 días seguidos con un mismo turno, sea cual sea de los turnos creados en el equipo (por ejemplo, cuatro Mañanas seguidas).

### 1.21 Limitar a no poder realizar una combinación de turnos para un mismo día

Esta restricción impide que se realice una determinada combinación de turnos un día.

⚙️ Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales.

- Comprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción. Usar inicio del evento para comprobación de día al que pertenece:El sistema asigna el turno al día en que comienza, útil para turnos que cruzan la medianoche. Por ejemplo, un turno de 22h a 8h se considera del día que empezó a las 22h. Usar fin del evento para comprobación del día al que pertenece: El sistema asigna el turno al día en que termina, ideal para turnos nocturnos. Por ejemplo, en un turno de 22h a 8h, se considera del día que finaliza a las 8h. Tipos de turno: selecciona los tipos de turno que no deseas que se combinen en un mismo día.

Ejemplo caso de uso: si en un servicio no se permite hacer M y N en un mismo día, se puede generar una restricción donde se informa que la combinación M y N no es permitida, y no se deje planificar de manera obligatoria o deseable.

### 1.22 Máximo de días planificados de un absentismo al trimestre

Esta restricción impide que se realicen más de un número de absentismos definido por trimestre.

⚙️Configuración: Esta restricción, además de la configuración básica tiene cinco campos adicionales.

- Valor de la restricción: Indica el número máximo de días que se puede pedir el absentismo por trimestre. Tipo de absentismo: Indica el tipo de absentismo al que aplicará la restricción. Incluir absentismos temporales: Decide si en esta restricción se incluyen (cualquier) tipo de absentismo temporal. Con respecto al porcentaje de la jornada: se debe seleccionar si se quiere considerar el porcentaje de horas por día según los datos del convenio. Esto afectara significativamente en la restricción. Calcular a proporción del periodo de contrato: Se debe seleccionar si se quiere recalcular esta restricción según el periodo de contrato

### 1.23 Máximo de horas de absentismo por semana

Esta restricción impide que se superen las horas definidas de absentismos por semana.

⚙️Configuración: Esta restricción, además de la configuración básica tiene tres campos adicionales.

- Valor de restricción: Indica el número máximo de horas de absentismo por semana. Tipo de absentismo: Indica el tipo de absentismo sobre el que se aplicará la restricción. Con respecto al porcentaje de jornada: Indica si la restricción debe variar según el porcentaje de jornada del trabajador.

### 1.2 4. Limitar que un tipo de absentismo (no justificado) no supere el exceso de horas anuales/hora de contrato al día por trabajador

Esta restricción limita que se superen las horas anuales o las horas de contrato al día por absentismos no justificados.

⚙️Configuración: Esta restricción, además de la configuración básica tiene un campo adicional.

- Tipo de absentismo: Indica el tipo de absentismo sobre el que se aplicará la restricción.

Ejemplo de uso: Imagina que un trabajador tiene 35 horas extra en su balance anual. Según su perfil, su jornada diaria es de 7 horas.

Para calcular cuántos días de libre disposición le corresponden, simplemente dividimos las horas extra entre las horas de su jornada diaria:

35 horas (balance en exceso) ÷ 7 horas/día = 5 jornadas de libre disposición

Estas jornadas se consideran como absentismo no justificado, por lo que no computan horas. El número de jornadas por libre disposición aparece en el widget “Balance libre disposición” y también en el tooltip del trabajador, dependiendo de la configuración de visualización.

¿Cómo saber cuantos días de libre disposición le quedan disponible a un trabajador en un año?

### 1.25 Máximo de turnos al día por trabajador

Esta restricción limita el número de turnos que se pueden realizar al día.

⚙️Configuración: Esta restricción, además de la configuración básica tiene un campo adicional.

- Valor de restricción: Indica el número máximo de turnos que se pueden realizar al día.

Ejemplos:

Si la restricción se aplica por localización y el valor es, por ejemplo, 2, el trabajador cuya localización coincida con la indicada en la restricción no podrá tener más de 2 turnos en ese día.

Si la restricción se aplica por especialidad y el valor es 2, el trabajador cuya especialidad coincida con la de la restricción no podrá tener más de 2 turnos en un día.

Si la restricción se aplica por categoría y el valor es 2, el trabajador cuya categoría coincida con la indicada en la restricción no podrá tener más de 2 turnos en un día.

### 1.26 Planificar con turnos de una determinada franja horaria antes o después de un día con un turno determinado

Esta restricción obliga a planificar turnos de una determinada franja horaria antes o después de un turno específico indicado en la configuración de la restricción. Es decir, se planifica un tipo de turno y este sirve de referencia para planificar antes o después turnos de una determinada franja horaria.

Ejemplo 1: Se configura que después de un turno M solo se pueden configurar turnos de la franja horaria de tarde.

Ejemplo 2: Se configura para que, si un día se planifica un turno T, antes de ese día solo se puedan tener planificados turnos de la franja horaria de N.

⚙️Configuración: Esta restricción, además de la configuración básica tiene cuatro campos adicionales.

- Días: Indica el número de días planificados en los que se basará la restricción para comprobar si se cumplen los requisitos. Franja horaria: Indica la franja horaria que se deberá planificar. Antes o después: Indica si los días que se comprobarán serán antes o después. Tipos de turno: Indica el tipo de turno que se tomará como referencia a la hora de comprobar la restricción.

### 1.28. Máximo de días entre un turno y el siguiente del mismo tipo

Esta restricción establece un límite de días que deben pasar como máximo hasta que el trabajador pueda trabajar un tipo de turno determinado.

⚙️Configuración: Esta restricción, además de la configuración básica, hay dos campos adicionales.

- Valor de la restricción: Define cuántos dias deben pasar desde que se trabaja el tipo de turno, hasta que se pueda volver a trabajar. Tipos de turno: Indica a qué tipo de turno afecta la restricción.

### 1.29 No permitir añadir un tipo de absentismo consecutivo a un tipo de turno o absentismo

Esta restricción impide que si se tiene un día con un tipo de turno, no se pueda solicitar el día de antes o el día de después un tipo de turno o absentismo determinado. Es decir, lo informado en el primer campo, tipos de turnos y tipos de absentismo, no se puedan añadir consecutivamente al tipo de turno o tipo absentismo que se elija en el segundo campo.

Por ejemplo: que después de un turno sin horas (X) o (V), no se pueda pedir un tipo de absentismo de asuntos propios.

⚙️Configuración: Esta restricción, además de la configuración básica, hay dos campos adicionales.

- Tipos de turno: Indica qué tipo de turno deberá ser el que se tenga como referencia. Tipos de turno o tipo de absentismo: Indica cuál es el tipo de turno que no debera suceder al tipo de turno indicado en el campo anterior.

### 1.30 Máximo de un tipo de turno a la semana en función de los días de alta en esa semana

Es una restricción que se aplica para asegurar que, según los días de alta en una semana, se cumpla un número máximo de turnos trabajados.

Esta restricción verifica cuántos días está una persona de alta durante la semana (es decir, disponible para trabajar) y exige que se cumpla un número máximo de turnos en función de esos días. Por ejemplo, si una persona es dada de alta un jueves, se entiende que esa semana solo puede trabajar de jueves a domingo (4 días). Según esos días de disponibilidad, se define cuántos turnos como mínimo debe realizar.

La restricción comprobaría el total semanal, no la comprueba día por día, por lo que para verificar si se cumple la restricción miraría el valor indicado en “4 días de alta”.

La planificación que no cumpla con ese mínimo se considerará una infracción de la restricción.

⚙️Configuración: Además de la configuración básica, hay tres campos adicionales

- Seleccionar todos los turnos con horas. Marcando esta opción, no sería necesario completar el siguiente campo, ya que consideraría que se pueden trabajar todos los turnos con horas.
- Tipos de turno. En caso de tener la opción anterior marcada como “No”, en este campo debería especificarse qué turnos deben considerarse en la restricción.
- (x días de alta). Indica según los días de alta, qué número de días se deberían trabajar.

Nota: A diferencia de otras restricciones, R.1.30 no muestra alertas directamente en el cuadrante si se incumple. Para comprobar si se está cumpliendo, debes ir a:Planificador → Restricciones → Comprobar restricciones

### 1.31 Máximo de horas de un tipo de turno al año

Esta restricción establece un máximo de horas (planificadas, computadas u horas de bolsa) que se puede planificar/trabajar un tipo de turno. Dependiendo del tipo de cómputo que se configure en la restricción saltará el aviso.

⚙️Configuración: Además de la configuración básica, hay tres campos adicionales

- Valor de restricción: Indica el número máximo de horas.
- Tipos de turno: Indica los tipos de turno a los que aplica el máximo de horas
- Tipo de cómputo: Indica qué tipo de valor debe comprobar la restricción para verificar si se está incumpliendo o no. Esta opción te permite elegir entre: Horas planificadas, Horas computadas u Horas de bolsa.

### 1.32 Permitir añadir un tipo de turno o absentismo consecutivo a un tipo de turno o absentismo

Esta restricción obliga en unos días determinados de la semana que si se planifica un tipo de turno en particular, se restrinja a planificar consecutivamente otro. Por ejemplo que después de un turno nocturno, sea obligatorio planificar un turno X (cero horas) como descanso.

⚙️Configuración: Además de la configuración básica, hay tres campos adicionales.

- Días de la semana: Indica el/los día(s) a los que se aplicará la restricción.
- Tipos de turno: Indica el tipo de turno que deberá estar planificado el día anterior.
- Tipos de turnos (consecutivos): Indica el tipo de turno que se obligará a planificar. También se pueden añadir absentismso en esta restricción y sólo se podrá planificar el tipo de absentismo.

Ejemplo de configuración:

Días de la semana: Martes

Tipo de turno: N

Tipos de turnos (consecutivos): T, N,IT.

Con esta configuración, el trabajador que tenga el Lunes planificado un turno N (noche) al dia siguiente (Martes) podrá trabajar únicamente un turno T o un turno N. Además si se va a dar algún absentismo únicamente se permite que sea el absentismo IT, no podrá planificarse por ejemplo uno de consulta médica.

### 1.33 Solo se puede realizar un tipo de turno de la misma franja horaria que el dia anterior

Esta restricción obliga que el día siguiente se trabaje un turno de la franja horaria del día anterior. Es imprescindible tener configuradas las franjas horarias, de este modo, la restricción comprobará a qué franja horaria corresponde el turno anterior, y únicamente se permiten configurar turnos que se encuentren dentro de esa misma franja horaria. Por ejemplo si el día anterior se tenía un turno N, al día siguiente no se podrá planificar ni un turno M ni un turno T, se obligará a planificar otro turno N.

⚙️Configuración: Esta restricción tiene una configuración básica.

Importante: Comprueba que las franjas horarias no se solapen, ya que si una franja horaria termina a las 14:00 y otra empieza a las 14:00, el turno pertenecería a ambas, por lo que es importante tener las franjas horarias configuradas de manera muy diferenciada.
