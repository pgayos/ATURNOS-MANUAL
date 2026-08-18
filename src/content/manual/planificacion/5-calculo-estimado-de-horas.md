---
schemaVersion: "1.0"
contentId: planificacion-5-calculo-estimado-de-horas
title: Cálculo estimado de horas
description: El cálculo estimado de horas es la forma que tenemos en aTurnos de distribuir mensualmente el total de las horas contrato.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
intent: Cálculo estimado de horas
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: calculo
    label: Calculo
  - id: estimado
    label: Estimado
  - id: horas
    label: Horas
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
    - https://manual.aturnos.com/knowledgebase/5-calculo-estimado-de-horas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-calculo-estimado-de-horas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre cálculo estimado de horas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 15
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-calculo-estimado-de-horas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-calculo-estimado-de-horas/
  contentHash: 7b1e66bedc09d069a0bb29246298008fc010c26d8922fb9bbf670e854cfcde35
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

El cálculo estimado de horas es la forma que tenemos en aTurnos de distribuir mensualmente el total de las horas contrato.

A través de este cálculo se dispone de un balance de horas mensual, es decir, es la diferencia entre las horas estimadas a trabajar al mes menos las horas computadas más/menos los ajustes informados.

Dos formas de acceder al cálculo estimado:

- En el perfil del trabajador

- A través del cuadrante

### Objetivo del cálculo estimado

El objetivo del cálculo estimado es distribuir mensualmente las horas contrato y compararlas con las horas computadas más los ajustes que pudieran tener informados, para obtener un balance de horas, atendiendo a:

- Los días de descanso semanal.
- Si los festivos se trabajan o no.

En función de los valores que se informe, la aplicación calculará los valores correspondiente a:

- Horas contrato.
- Días estimados a trabajar al año.
- Horas estimadas por día de trabajo.
- Horas contrato mes, el valor calculado se compara con las horas planificadas (más los ajustes informados) para obtener el balance.

### Horas contrato

Para obtener este balance mensual, se precisa en primer lugar conocer el número de horas contrato, es decir, el número de horas que los/las trabajadores/trabajadoras deben “prestar servicios” atendiendo a las horas anuales de convenio, los días de alta y al porcentaje de jornada.

Las horas contrato se calculan con las siguientes variables:

- Las horas año por defecto, es decir, las horas anuales indicadas en el convenio aplicable. Esta valor se informa en ADMINISTRAR → AJUSTES → Configuración general. Ver en el Manual. La fecha de alta. La fecha de baja, en su caso. El porcentaje de jornada.

Con estas 4 variables se calculan el número de horas contrato:

- Fórmula: horas año por defecto (las anuales del convenio) dividido entre 365 o 366 por los los días de alta por el porcentaje de jornada.

Las horas contrato se visualizan en el perfil del trabajador.

Como ya se ha indicado, el objetivo del cálculo estimado es distribuir mensualmente las horas contrato atendiendo a:

- Los días de descanso semanal.
- Si los festivos se trabajan o no.

### Días estimados a trabajar al año

Con estas dos variables (los días de descanso semanal y si trabaja o no los festivos), la aplicación calcula los “días estimados a trabajar al año “, que son los días naturales de alta en el año, menos los días de absentismo tipo excedencia menos los festivos anuales, menos los días de vacaciones, menos los días de descanso semanal que le corresponden al año.

### Horas estimadas por día de trabajo

Con las “horas contrato” y los “días estimados a trabajar al año” se obtienen las “horas estimadas por día de trabajo “.

### Horas contrato mes

Para terminar, “las horas contrato mes” es el resultado de multiplicar las “horas estimadas por día de trabajo” por los “días contrato al mes “, el resultado de esta operación se resta a las horas planificadas más/menos los ajustes para obtener el balance mensual.

Al tratarse de un cálculo con cierta complejidad, a continuación se explica con varios ejemplos:

### Ejemplo cálculo sin vacaciones planificadas

¿Qué variables vamos a utilizar?

1. Horas año por defecto: 1780 horas.
2. Días año: 365 ó 366.
3. Días de alta: 365 días.
4. Porcentaje de jornada: 100%
5. Descanso semanal medio: 1,5 días, por cada semana de alta, en los días de descanso semanal no se “deben de prestar servicios”
6. Festivos: No se trabajan.
7. Vacaciones/año: 30 días naturales.

Todos estos datos están informados en el perfil del trabajador, para acceder a los datos de un trabajador en sigue las instrucciones que te indicamos en el Manual

1.- Cálculo de las “horas contrato”, es decir, el número de horas que los/las trabajadores/trabajadoras deben “prestar servicios” atendiendo a las horas anuales de convenio, los días de alta y al porcentaje de jornada.

- Fórmula: horas año por defecto (1780) / días año (365 días en el año 2022) x días de alta (365) es igual 1780 horas.

2.- Cálculo de los “días estimados a trabajar al año”, son los días de alta (365) menos los días que no se “deben prestar servicios”. Los días que no se “deben prestar servicios” es la suma de los días de vacaciones anuales (30), más los festivos anuales (14) más los días de descanso semanal anuales que no se trabajan.

¿Cómo se calculan los días de descanso semanal anuales?

1. Días de alta: 365 días.
2. Vacaciones/año: 30 días.
3. Festivos: 14 festivos.
4. Descanso semanal: 1,5 días.

- Fórmula: días de alta (365) – vacaciones (30) – festivos (14) es igual a 321 días. 321 días / 7 días x 1,5 días de descanso semanal es igual a 68,79 días.

El descanso semanal no aplica en vacaciones ni en festivos.

Los días estimados a trabajar al año es igual a:

- Fórmula: días de alta (365) – vacaciones (30) – festivos (14) – días de descanso semanal (68,79) es igual a 252,21 días.

Es decir, de los 365 días de alta, solo debería trabajar 252, 21 días, pero ¿cuántas horas debe trabajar al día?

3.- Cálculo de las “horas estimadas por día de trabajo”.

- Fórmula: horas contrato (1780) x porcentaje de jornadas (100) / días estimados a trabajar al año (252,21) es igual a 7,05749079580855, se redondea a 7,06.

4.- Cálculo de los “días contrato al mes enero”, es decir, los días de alta en el mes menos los días de vacaciones disfrutadas en el mes y/o la prorrata de las mismas (si no estuvieran planificadas) menos los festivos del mes menos los días de descanso semanal mensuales.

Para el mes de Enero, los datos con los que cuenta la aplicación son:

1. Días de alta: 31 días.
2. Porcentaje de jornada: 100%
3. Festivos: 2 días (no se trabajan los festivos)
4. Vacaciones/año: 2,54794520547945 días de prorrata. días de vacaciones (30 ) / días del año (365 ) x días de alta (31 días)
5. Descanso semanal medio: 1,5 días.

¿Cómo se calculan los días de descanso semanal mensuales en el mes de enero?

1. Días de alta: 31 días.
2. Vacaciones en el mes: 2,54794520547945 días de prorrata
3. Festivos: 2 festivos.
4. Descanso semanal: 1,5 día.

- Fórmula: días de alta (31) – vacaciones (2,54794520547945) – festivos (2) es igual a 26,4520547945205 días. 26,4520547945205días / 7 días x 1,5 días de descanso semanal es igual a 5,66785714 días.

Los días contrato al mes de enero igual a:

- Fórmula: días de alta (31) – vacaciones (2,54794520547945) – festivos (2) – días de descanso semanal (5,66785714) es igual a 220,7841976545206 días.

5.- Cálculo de las horas contrato mes enero, es el resultado de multiplicar, los días contrato al mes por las horas estimadas a trabajar al año:

- Fórmula: días contrato mes (20,7841976545206) x horas estimadas a trabajar al año (paso 3) (7,05749079580855) es igual a 146,68.

Todos los cálculos se hacen con los decimales indicados pero solo se visualizan los dos primeros.

### Balance mensual / acumulado en el perfil del trabajador sin vacaciones planificadas:

En la penúltima columna se visualiza el balance mensual, diferencia entre las horas contrato menos las horas planificadas, en enero, hay un balance con exceso de 13,32 horas.

En la última columna, en el mes de febrero el balance acumulado del mes de enero (13,32) más el balance del mes de febrero (17,50), total balance acumulado es igual a 30,82

El balance acumulado es de 180 horas, las vacaciones no están planificadas, cuando se planifiquen el balance será menor, en el siguiente ejemplo veremos el comportamiento de la aplicación con las vacaciones planificadas.

6.- A modo de ejemplo, cálculo de los “días contrato al mes febrero”,

Para el mes de Febrero, los datos con los que cuenta la aplicación son:

1. Días de alta: 28 días.
2. Porcentaje de jornada: 100%
3. Festivos: No hay festivos en el mes (no se trabajan los festivos)
4. Vacaciones/año: 2,3013698630137 días de prorrata. días de vacaciones (30 ) / días del año (365 ) x días de alta (28 días)
5. Descanso semanal medio: 1,5 días.

¿Cómo se calculan los días de descanso semanal mensuales en el mes de febrero?

1. Días de alta: 28 días.
2. Vacaciones en el mes: 2,3013698630137 días de prorrata
3. Festivos: No hay festivos
4. Descanso semanal: 1,5 día.

- Fórmula días de alta (28) – vacaciones (2,3013698630137) – festivos (0) es igual a 25,6986301369863 días. 25,6986301369863 días / 7 días x 1,5 días de descanso semanal es igual a 5,50684931506849 días.

Los días contrato al mes de febrero igual a:

- Fórmula: días de alta (28) – vacaciones (2,3013698630137) – festivos (0) – días de descanso semanal (5,50684931506849) es igual a 20,1917808219178 días.

7.- Cálculo de las horas contrato mes febrero, es el resultado de multiplicar, los días contrato al mes por las horas estimadas a trabajar al año:

- Fórmula: días contrato mes (20,1917808219178) x horas estimadas a trabajar al año (paso 3) (7,05749079580855) es igual a 142,50.

### Ejemplo cálculo con vacaciones planificadas

Para el proceso de cálculo cuando se tienen vacaciones planificadas hay que seguir los 3 primeros pasos del ejemplo anterior:

1. Cálculo horas contrato.
2. Cálculo de los días estimados a trabajar al año.
3. Cálculo de las horas estimadas por día de trabajo.

En este ejemplo, el/la trabajador/a tiene planificados 30 días de vacaciones en el mes de Junio

4.- Cálculo de los “días contrato al mes enero”, es decir, los días de alta en el mes menos los días de vacaciones disfrutadas en el mes y/o la prorrata de las mismas (si no estuvieran planificadas) menos los festivos del mes menos los días de descanso semanal mensuales.

Para el mes de Enero, los datos con los que cuenta la aplicación son:

1. Días de alta: 31 días.
2. Porcentaje de jornada: 100%
3. Festivos: 2 días (no se trabajan los festivos)
4. Vacaciones/año: o días, las vacaciones ya están disfrutadas
5. Descanso semanal medio: 1,5 días.

¿Cómo se calculan los días de descanso semanal mensuales en el mes de enero?

1. Días de alta: 31 días.
2. Vacaciones en el mes: o días
3. Festivos: 2 festivos.
4. Descanso semanal: 1,5 día.

- Fórmula: días de alta (31) – vacaciones (o días) – festivos (2) es igual a 29 días. 29 días / 7 días x 1,5 días de descanso semanal es igual a 6,21428571428571 días.

Los días contrato al mes de enero igual a:

- Fórmula: días de alta (31) – vacaciones (o) – festivos (2) – días de descanso semanal (6,21428571428571) es igual a 22,7857142857143 días.

5.- Cálculo de las horas contrato mes enero, es el resultado de multiplicar, los días contrato al mes por las horas estimadas a trabajar al año:

- Fórmula: días contrato mes (22,7857142857143) x horas estimadas a trabajar al año (paso 3) (7,05749079580855) es igual a 160,81

### Balance mensual / acumulado en el perfil del trabajador con vacaciones planificadas:

En la penúltima columna se visualiza el balance mensual, diferencia entre las horas contrato menos las horas planificadas, en enero, a diferencia del ejemplo anterior el balance es de 0,81 por defecto, las horas contrato mes son 160,81 y planificadas tiene 160, el trabajador “debe” 0,81 horas.

En el cálculo de los días contrato mes del primer ejemplo se descontaban la prorrata de vacaciones, en este ejemplo, al estar los 30 días de vacaciones planificados en junio, no descuenta, es decir, ahora en el mes de enero debe trabajar más días.

Es interesante pararse a ver las horas contrato mes del mes de Junio, al estar de vacaciones “no tiene el deber de prestar servicios” de forma que los días contrato al mes es igual a cero.

### Festivos vs descanso semanal

En los ejemplos que se han visto hasta ahora se calculan con:

- 14 días festivos anuales.
- 1,5 días de descanso semanal.

El número de festivos que resta tanto de los días de alta anuales como de los días contrato mes depende del valor que esté informado en ADMINISTRAR → AJUSTES → Consideración de festivos según convenio.

En este ejemplo, se considera festivo, los festivos indicados, es decir, los días que se hayan definido como tales en ADMINISTRAR → FESTIVOS

Las opciones disponible son:

- Se consideran festivos, solo los festivos indicados.
- Se consideran festivos, los domingos más festivos indicados.
- Se consideran festivos, los sábados, los domingos más festivos indicados.

Dos son los principales efectos:

1. A nivel de nómina, la selección de una opción u otra determina que se considere como festivo a efectos de los conceptos de cálculo que recuperan festivos.
2. A efectos del cálculo estimado, en el caso de seleccionar la opción se consideran festivos, los domingos más festivos indicados, los festivos con los que calculará serán 66 días (52 domingos más 14 festivos)

Continuando con el ejemplo, si se modifica la opción seleccionada en el campo “Consideración de festivos según convenio” y se selecciona la opción, se consideran festivos, los domingos más festivos indicados, los datos para el cálculo de los “días estimados a trabajar al año” se van a ver afectados.

Además, a nivel de cada trabajador, se puede indicar si trabaja o no los festivos o que solo tenga en cuenta el festivo si se trabaja, así como los días de descanso semanal medio.

¿Cómo afecta las modificaciones en el cálculo estimado al balance del trabajador?

2.- Los días estimados a trabajar ya no son 252,21, el cálculo de los “días estimados a trabajar al año”, son los días de alta (365) menos los días que no se “deben prestar servicios”. Los días que no se “deben prestar servicios” es la suma de los días de vacaciones anuales (30), más los festivos anuales (65).

- Fórmula: días de alta (365) – vacaciones (30) – festivos (65) es igual a 270 días.

Es decir, de los 365 días de alta, solo debería trabajar 270 días, pero ¿cuántas horas debe trabajar al día?

3.- Cálculo de las “horas estimadas por día de trabajo”, ya no son 7,06

- Fórmula: horas contrato (1780) x porcentaje de jornadas (100) / días estimados a trabajar al año (270) es igual a 6,59

Para el cálculo de las horas contrato mes, hay que seguir los pasos 4 y 5 de los ejemplos anteriores, modificando los festivos que ahora son los domingos y festivos de cada mes y sin descontar ningún día de descanso semanal.

### Balance en contratos de sustitución

Como hemos visto, las vacaciones en aTurnos se disfrutan, es decir, no se pueden excluir del cálculo estimado, se consideran días que no se deben trabajar, pero ¿qué ocurre con los contratos de corta duración?

Cuando el personal es contratado eventualmente, lo más habitual es que se le abonen los días de vacaciones en el finiquito, por lo que, los días de vacaciones que le corresponden se pueden convertir en horas (horas de vacaciones pendientes) que se tienen en cuenta en el balance, sumando a las horas de contrato, son por tanto, más horas de contrato.

Accede a ADMINISTRAR → AJUSTES → Configuración y selecciona la opción SI en el campo “Restar las vacaciones pendientes al balance”

En el primer ejemplo, el balance mensual, en enero, el trabajador tenía 13,32 horas de exceso.

Con la modificación del cálculo, restando las horas de vacaciones pendientes del balance, el trabajador tiene un defecto de 0,81. La suma de las horas contrato más las horas vacaciones pendientes es igual a 160,81.

Las horas de vacaciones se calculan multiplicando las “horas estimadas por día de alta” por el campo “vacaciones prorrateadas.

El cálculo de las “horas estimadas por día de alta” depende del valor que tenga informado el campo “Restar las vacaciones para el calculo de horas estimadas por día de alta”:

- Si está informado si, la fórmula de cálculo es la siguiente: horas contrato (1780) / días de alta (365) – días de vacaciones (30) – festivos (14) es igual a 5,55
- En caso contrario, la fórmula de cálculo es la siguiente: horas contrato (1780) / días de alta (365) es igual a 4,88

### Horas contrato en contratos de sustitución

En el primer Título de este Manual de cálculo de horas estimadas se definen las horas contrato como el número de horas que los/las trabajadores/trabajadoras deben “prestar servicios” atendiendo a las horas anuales de convenio, los días de alta y al porcentaje de jornada.

Por defecto es la forma de calcular las horas contrato, pero sí se precisa un mayor ajuste, solo cuando no se trabajan los festivos se pueden excluir los festivos en el cálculo de las horas contrato.

Se describe con ejemplos la diferencia en el cálculo de las horas contrato.

### Ejemplo horas contrato por defecto enero 2022

- Horas año por defecto: 1780
- Fecha de alta: 01/01/2022
- Fecha de baja: 07/01/2022
- Horas contrato: horas año por defecto (1780) / días año (365 días en el año 2022) x días de alta (7) es igual 34,14.

### Ejemplo horas contrato por defecto enero 2022

- Horas año por defecto: 1780
- Fecha de alta: 01/02/2022
- Fecha de baja: 07/02/2022
- Horas contrato: horas año por defecto (1780) / días año (365 días en el año 2022) x días de alta (7) es igual 34,14.

En ambos casos las horas contrato s0n 34,14

### Ejemplo horas contrato descontando festivos enero 2022

- Horas año por defecto: 1780
- Fecha de alta: 01/01/2022
- Fecha de baja: 07/01/2022
- Festivos: 2 (el 1 de enero y el 6 de enero)
- Descanso semanal: 1,5 días
- Días estimados a trabajar al año: días de alta (7) menos los días de vacaciones (0,575342) menos festivos del mes (2) menos días de descanso semanal
- Días de descanso semanal: días de alta (7) menos festivos del mes (2) menos los días de vacaciones (0,575342) / entre 7 días de la semana x 1,5 días de descanso semanal es igual a 0,948138.
- Días estimados a trabajar al año: días de alta (7) menos festivos del mes (2) menos los días de vacaciones (0,575342) menos días de descanso semanal 0,948138. es igual a 3,47652
- Horas contrato: horas estimadas por día de trabajo (calculados conforme a lo indicado en el punto 4 de este Manual) (7,05749079580855) x días estimados a trabajar al año ( 3,47652) es igual a 24,54

### Ejemplo horas contrato descontando festivos febrero 2022

- Horas año por defecto: 1780
- Fecha de alta: 01/02/2022
- Fecha de baja: 07/02/2022
- Festivos:
- Descanso semanal: 1,5 días
- Días estimados a trabajar al año: días de alta (7) menos los días de vacaciones (0,575342) menos días de descanso semanal
- Días de descanso semanal: días de alta (7) menos los días de vacaciones (0,575342) / entre 7 días de la semana x 1,5 días de descanso semanal es igual a 1,376712.
- Días estimados a trabajar al año: días de alta (7) menos los días de vacaciones (0,575342) menos días de descanso semanal 1,376712. es igual 5,04174
- Horas contrato: horas estimadas por día de trabajo (calculados conforme a lo indicado en el punto 4 de este Manual) (7,05749079580855) x días estimados a trabajar al año ( 5,04174) es igual a 35,63

### Informes de los balances

Los informes de saldos los tienes disponibles si eres administrador total en Estadísticas → Reportes (A continuación, puedes ver los reportes ).

Si eres Superusuario, puedes realizar una petición de informe en los específicos que encuentras en RRHH (Véase las estadísticas de reportes por trabajador )

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
