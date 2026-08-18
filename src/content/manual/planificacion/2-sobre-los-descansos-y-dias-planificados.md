---
schemaVersion: "1.0"
contentId: planificacion-2-sobre-los-descansos-y-dias-planificados
title: Sobre los descansos y días planificados
description: Esta restricción establece un horario de tiempo determinado para un trabajador o un grupo de trabajadores determinados. Si se inserta un horario diferente teniendo la restricción aplicada el sistema no lo permitiría.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Sobre los descansos y días planificados
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: descansos
    label: Descansos
  - id: dias
    label: Dias
  - id: planificados
    label: Planificados
  - id: sobre
    label: Sobre
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
    - https://manual.aturnos.com/knowledgebase/2-sobre-los-descansos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-sobre-los-descansos/
ai:
  answerableQuestions:
    - ¿Cómo puedo sobre los descansos y días planificados?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 14
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-sobre-los-descansos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-sobre-los-descansos/
  contentHash: 37ec428207eccb0f107c292054ba998039c272a2c819671b923b9685de525d6e
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Esta restricción establece un horario de tiempo determinado para un trabajador o un grupo de trabajadores determinados. Si se inserta un horario diferente teniendo la restricción aplicada el sistema no lo permitiría.

### 2.1 Concreción de un horario determinado para planificar al trabajador

⚙️Configuración: Esta restricción, además de la configuración básica tiene tres campos adicionales.

- Todos los días/Días de la semana: estos campos están relacionados, ya que, si el primero se indica NO, se deben seleccionar en “Días de la semana” los días de la semana en los que se quiere aplicar la restricción. Sin embargo, si en el primer campo se indica Si, este segundo campo desaparece y se aplica a todos los días de la semana. ¿Cuándo aplica?: En este campo se debe indicar si aplicar en semanas pares (semanas 2 y 4) o semanas impares (semana 1 y 3). Intervalo de tiempo de trabajo/No disponible: Estos campos están relacionados, ya que, marcando en No disponible SI, la restricción únicamente permitirá insertar en el cuadrante turnos sin horas en los días y semanas indicadas. Sin embargo, si se marca NO, se debe introducir un intervalo de inicio y fin sobre el que el trabajador deberá trabajar.

### 2.2 Mínimo de horas entre turno y turno en el mismo día

Esta restricción garantiza que haya un descanso mínimo entre dos turnos asignados a un mismo trabajador en un mismo día, ayudando a evitar jornadas excesivas o mal planificadas.

⚙️ Configuración: Además de su configuración básica, esta restricción incluye cuatro campos clave que te permiten personalizar su comportamiento:

- Tiempo mínimo entre turnos (en horas):Es el tiempo mínimo que debe haber entre el final de un turno y el inicio del siguiente. Ejemplo: Si un turno finaliza a las 15:00 y el tiempo mínimo configurado es de 2 horas, el siguiente turno solo podrá comenzar a partir de las 17:00. Margen de tiempo para aplicar el tiempo mínimo entre turno y turno: Corresponde a un período de “tolerancia” en el que no se aplica la restricción del tiempo mínimo. Ejemplo: Si un turno termina a las 15:00 y el margen es de 1 hora, se permite agendar un nuevo turno hasta las 16:00 sin que se aplique la restricción. Después de esa hora, sí se tendrá en cuenta el tiempo mínimo Tiempo máximo entre turno y turno (en horas): Define el tiempo máximo que puede haber entre dos turnos del mismo día para que aún se consideren parte de la misma jornada. Si se supera este tiempo, se considera una planificación incorrecta. Tipos de turno: Es el plazo máximo permitido para programar un nuevo turno desde que finaliza el anterior.Ejemplo: Si el turno anterior finaliza a las 15:00 y el tiempo máximo es de 5 horas, solo podrá programarse el siguiente turno hasta las 20:00. Pasado ese tiempo, no será posible asignar otro turno.

### 2.3 Mínimo de horas entre turno y turno en distinto día

Esta restricción limita que se puedan añadir turnos u horas al día siguiente si no han pasado un número de horas determinadas de descanso. Esta restricción es necesaria si un día se realiza un turno en horas nocturnas, el día siguiente se tengan ciertas horas de descanso hasta poder volver a trabajar un turno.

⚙️Configuración: Esta restricción, además de la configuración básica tiene un campo adicional.

- Valor de la restricción: En este campo se indica el mínimo de horas de descanso que debe haber entre turnos en distinto día.

### 2.4 Mínimo de 12 horas entre turno y turno

Es una de las tres restricciones que se aplica por defecto en todos los equipos. Esta restricción es similar a la anterior, teniendo como valor de la restricción de manera predeterminada 12 horas.

⚙️Configuración: Esta restricción tiene una configuración básica.

### 2.5 Mínimo de días de descanso seguidos a la semana

Esta restricción establece un mínimo de días de descanso consecutivos dentro de la semana (de lunes a domingo), ya sea en fin de semana o en cualquier otro momento.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Valor de la restricción: En este campo se indica el mínimo de días de descanso que debe haber de seguido.

Por ejemplo, indicando valor 2, un tabajador deberá tener al menos 2 días de descanso a la semana, y estos deberán darse de manera consecutiva.

### 2.6 Mínimo de días de descanso seguidos entre turno y turno

Esta restricción obliga a añadir un número de días de descanso si se ha realizado el día anterior un tipo de turno determinado.

⚙️ Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales:

- Valor de la restricción: En este campo se indica el mínimo de días de descanso que debe haber de seguido. Tipos de turno: Indica el tipo de turno que se tomará como referencia a la hora de comprobar la restricción.

### 2.7 Mínimo de días de descanso entre un periodo de trabajo de una cantidad de días definida

Esta restricción establece unos días de descanso después de un número de días de trabajo configurados.

⚙️ Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales:

- Valor de la restricción: En este campo se indica el mínimo de días de descanso. Total de días: En este campo se definen el número de días de trabajo sobre los que después se aplicaría el descanso.

Es decir, que trabajando 5 días seguidos se deben haber descansado antes 2 días y después se deben descansar 2 días seguidos comprobando las secuencias de planificación (por ejemplo: M M L L M M M M M L L M ).

La restricción comprueba la configuración de Festivos establecida en el equipo debido a que si, por ejemplo, los 5 días seguidos de trabajo son de lunes a viernes, y el sábado y domingo son libres (configurados como festivos: domingos y festivos indicados) al añadir el siguiente turno el lunes se estaría incumpliendo la restricción.

### 2.8 Mínimo de horas de descanso seguido semanal obligatorio

Esta restricción establece un mínimo de horas de descanso seguido semanal obligatorio, que pueden ser establecidas en la legislación vigente, Convenio o acuerdo con supervisor.

⚙️Configuración: Esta restricción, además de la configuración básica tiene un campo adicional.

- Valor de la restricción: En este campo se indica el mínimo de horas de descanso.

En la mayoría de los casos, se establece un mínimo de 36 horas de descanso consecutivo por semana (equivalente a un día y medio). Por ello, en el campo valor de la restricción se debe indicar 36, que representa el número mínimo de horas de descanso obligatorio. Al aplicar esta restricción, es importante tener en cuenta el tiempo transcurrido entre el final del turno anterior y el inicio del siguiente, ya que ese intervalo debe cumplir con el mínimo establecido.

### 2.9 Mínimo de minutos entre turno y horas complementarias/extras o cualquier tipo de hora creada

Esta restricción establece unos minutos de descanso entre turno y horas de cualquier tipo (normal, complementarias, extra).

⚙️Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales.

- Valor de la restricción: En este campo se indica el mínimo de minutos de descanso entre turno. Tipo de hora: En este campo establece el tipo de hora al que afectará esta restricción.

### 2.10 Mínimo de días de descanso seguidos en un periodo de semanas definido

Esta restricción establece un mínimo de días de descanso a la semana cada X semanas. Por ejemplo: 2 días de descanso cada semana o 4 días de descanso cada 2 semanas.

⚙️ Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales.

- Total de días: Este campo se corresponde con el número de días de descanso. Total de semanas: Este campo indica cada cuanta semana se deben aplicar estos días.

### 2.11 Máximo de días planificados seguidos

Esta restricción limita el número de días planificados seguidos.

⚙️Configuración: Esta restricción, además de la configuración básica tiene cinco campos adicionales.

- Valor de restricción: Establece el número de días máximo de seguidos a tener planificados. Comprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción. Considerar turnos con 0 horas como planificación: Selecciona si se quieren aplicar o no los turnos de 0 horas esta restricción. Tipo de hora a ignorar: Indica que tipos de hora no deben incluirse en esta restricción.

### 2.12 Máximo de días planificados al mes natural

Esta restricción establece un número máximo de días que se pueden planificar en un mes natural.

⚙️Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales.

- Valor de la restricción: Indica el número máximo de días planificados al mes Calcular a proporción del periodo de contrato: Se debe seleccionar si se quiere recalcular esta restricción según el periodo de contrato.

### 2.13 Máximo de días planificados al año

Esta restricción es similar a la anterior, limita el número de días planificados al año.

⚙️Configuración: Esta restricción, además de la configuración básica tiene siete campos adicionales.

- Valor de restricción: Indica el número máximo de días planificados al año. Comprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción. Considerar las vacaciones sin disfrutar: Selecciona si se quiere considerar las vacaciones sin disfrutar o no Total de días iniciales: Días ya planificados en el año que se deben descontar en lo que queda de año. Este campo se rellena si hay algunos días que no se han informado anteriormente, pero se deben descontar. Con respecto al porcentaje de jornada: Indica si la restricción debe variar según el porcentaje de jornada del trabajador Calcular a proporción del periodo de contrato: Se debe seleccionar si se quiere recalcular esta restricción según el periodo de contrato Contabilizar los absentismos como trabajados: Selecciona si considerar los absentismos como días trabajados o no.

Por ejemplo: si indicamos 180 en el campo de valor de la restricción, implica que los trabajadores no pueden realizar más de 180 días de trabajo al año (aunque sí se pueden realizar más de 180 turnos al año ya que en un mismo día sí se pueden trabajar varios turnos en el caso de las jornadas partidas).

### 2.14 Máximo de días planificados a la semana

Esta restricción es similar a las anteriores, limita el máximo de días planificados a la semana.

⚙️Configuración: Esta restricción, además de la configuración básica tiene cuatro campos adicionales

- Valor de la restricción: Indica el número máximo de días planificados a la semana. Comprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción Considerar complementarias y extras: Indica si considerar las horas complementarias y extras en la planificación semanal Considerar turnos de cero horas: Indica si se quieren considerar dentro de este número máximo de días, los turnos de cero horas.

Por ejemplo: si indicamos 5 en el campo de valor de la restricción, implica que los trabajadores no pueden realizar más de 5 días de trabajo cada semana (aunque sí se pueden realizar más de 5 turnos a la semana, ya que en un mismo día, sí se pueden trabajar varios turnos en el caso de las jornadas partidas).

### 2.15 Máximo de minutos entre turno y horas complementarias/extras o cualquier tipo de hora creada

Esta restricción establece un tiempo máximo de descanso para insertar posteriormente a un turno, horas de cualquier tipo. Esta restricción se aplica si, por ejemplo, no se quiere que pasen más de 60 minutos entre la finalización del turno y la realización de una hora específica.

⚙️Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales:

- Valor de restricción: Indica el número máximo de minutos entre cualquier tipo de hora creada. Tipo de hora: Selecciona el tipo de hora que afectará la restricción.

Por ejemplo: si el valor que se indica es de 60 minutos, si hay un turno planificado de 00:00 – 08:30, si se quieren añadir horas de tipo extras/complementarias o cualquier tipo de hora creada, no pueden tener una hora de inicio de 10:00 – 11:00, ya que supera el inicio los 60 minutos desde el final del turno. De la misma forma ocurre al inicio del turno, no se pueden añadir horas que empiecen antes de 60 minutos del inicio del turno.

### 2.16 No permitir planificar en días determinados del año

Esta restricción impide planificar en fechas específicas por algún evento señalado, o en los festivos. Para facilitar la visualización, se muestra una franja amarilla en el cuadrante.

⚙️Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales:

- Comprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción Días/Seleccionar/Borrar todos: Estos tres campos se configuran a la vez. En días, se hace clic en “Añadir día” y se van añadiendo fechas. Estas fechas se insertan en el campo seleccionar y se pueden visualizar o eliminar. Y si se desea vaciar ese campo, se debe hacer clic sobre Borrar todos.

### 2.17 No permitir planificar los días del mes indicados

Esta restricción no permite planificar en días específicos, por cualquier motivo. A diferencia de la restricción anterior, en esta restricción no se tienen en cuenta las fechas, sino determinados días del mes. Esta restricción no se pinta en color amarillo como la anterior.

⚙️Configuración: Esta restricción, además de la configuración básica tiene un campo adicional:

- Días del mes: En este campo indica que días del mes del 1 al 31 no se permite planificar.

Por ejemplo, si escogemos el día 15, quiere decir que todos los meses, el día 15 no se puede trabajar (ya sea entre semana o fin de semana).

### 2.18 Limitar los días planificados al mes respecto a los días de trabajo definidos en el cálculo estimado

Esta restricción limita los días planificables a los indicados en el cálculo estimado. Esta configuración se puede editar en Administrar → Ajustes → Configuración general.

⚙️Configuración: Esta restricción tiene una configuración básica

### 2.19 Máximo de horas trabajadas seguidas

Esta restricción limita el número de horas que se pueden trabajar de seguido, añadiendo además un descanso en minutos para poder continuar con la jornada laboral.

⚙️Configuración: Esta restricción, además de la configuración básica tiene dos campos adicionales

- Valor de la restricción: Establece el número de horas trabajadas seguidas. Tiempo máximo en minutos para considerar descanso: Establece el tiempo que debe pasar en minutos para considerar que ha habido un descanso.

Por ejemplo, si un día se puede hacer únicamente una jornada de 8 horas, no permitirá añadir más turnos u horas si el total supera esas 8 horas diarias. Sin embargo, si se añade un turno que comienza a las 23 de ese mismo dia, pero finaliza a cualquier hora del día siguiente, sí que se permite.

### 2.20 Máximo de horas entre turno y turno

Esta restricción establece un número de horas adicionales máximas que se pueden añadir posterior a un turno. Es decir, si un turno M termina a las 15:00 horas, y se le da a la restricción el valor 3, se pueden añadir horas o turnos dentro de esas 3 horas de margen (hasta las 18), incluyendo horas que comiencen en esa hora límite.

⚙️Configuración: Esta restricción, además de la configuración básica tiene un campo adicional:

- Valor de la restricción: Establece un máximo de horas adicionales que se pueden incluir en el cuadrante.

Por ejemplo, si se configura con valor 2, un turno T (14:00-18:00) hasta las 20:00, se podrán añadir horas de tipo normal, extra o complementarias, así como turnos que comiencen dentro de esas dos horas.

### 2.21 Mínimas horas entre dos turnos en distinto dia sin contabilizar dias con 0 horas

Esta restricción define un mínimo de horas de descanso antes de planificar el siguiente turno. Si hay un solo día con un turno de cero horas, no se considera descanso, por lo que debe respetarse el mínimo establecido. En cambio, si hay dos o más días seguidos con turnos de cero horas, no es necesario cumplir con ese mínimo al planificar el siguiente turno.

⚙️ Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional:

- Valor de la restricción: Establece un mínimo de horas que debe haber entre dos turnos en distinto día.

### 2.22 No permitir a un determinado rol planificarse determinados tipos de horas a sí mismo

Esta restricción impide que un determinado rol pueda autoplanificarse un tipo de hora determinado.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales:

- Tipo de hora: Selecciona cuál es el tipo de hora que no se puede seleccionar. Rol: Selecciona qué tipo de rol es quien no puede autoplanificarse ese tipo de hora.

### 2.23 Mínimo de días de descanso seguidos entre tipos de turno, incluyendo horas

Esta restricción funciona como todas las anteriores que establecen un mínimo de días de descanso entre turnos, con la particularidad de que en esta, tampoco se permiten planificar horas.

⚙️ Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional:

- Valor de la restricción: Establece un mínimo de horas que debe haber entre dos turnos en distinto día. Tipos de turno: Indica el tipo de turno que se tomará como referencia a la hora de comprobar la restricción.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
