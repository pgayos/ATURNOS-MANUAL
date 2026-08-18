---
schemaVersion: "1.0"
contentId: planificacion-4-sobre-vacaciones-festivos-y-bolsas-de-horas
title: Sobre vacaciones, festivos y bolsas de horas
description: Esta restricción impide que el trabajador pueda superar su saldo de vacaciones anual.
contentType: reference
module: Planificación
submodule: Contratos
intent: Sobre vacaciones, festivos y bolsas de horas
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: bolsas
    label: Bolsas
  - id: festivos
    label: Festivos
  - id: horas
    label: Horas
  - id: sobre
    label: Sobre
  - id: vacaciones
    label: Vacaciones
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
    - https://manual.aturnos.com/knowledgebase/4-sobre-vacaciones-y-contingentes-de-permisos-y-festivos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-sobre-vacaciones-y-contingentes-de-permisos-y-festivos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre sobre vacaciones, festivos y bolsas de horas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 7
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-sobre-vacaciones-y-contingentes-de-permisos-y-festivos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-sobre-vacaciones-y-contingentes-de-permisos-y-festivos/
  contentHash: 07f34ef44d02b363c4d3a071f1597a540558d7820af50ebb6b5e6bdfb7c04fad
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Esta restricción impide que el trabajador pueda superar su saldo de vacaciones anual.

## Opciones y datos disponibles
⚙️ Configuración: Esta restricción tiene una configuración básica.

Por ejemplo, si un trabajador tiene 3 días de vacaciones no usados en 2019, la restricción define si esos días se descuentan del saldo de 2019 o del de 2020 cuando los pide en 2020. Por defecto, el sistema permite usar las vacaciones del año anterior hasta el 15 de enero del año siguiente.

Esta restricción limita el número máximo de absentismos según los festivos trabajados en el periodo de contrato del trabajador. Este absentismo que permite insertar es compensatorio por trabajar los festivos, pero si el absentismo se ha pedido un número de veces mayor que los días festivos trabajados, la restricción impedirá solicitarlo.

⚙️Configuración: Esta restricción, además de la configuración básica tiene tres campos adicionales.

- Tipos de festivos. Indica que tipos de festivos se incluirán en esta restricción. Tipo de absentismo. Indica que tipo de absentismo va ligado a trabajar ese tipo de festivo. Saldo inicial. Indica si esta restricción tiene algún saldo iniciar que descontar al valor original.

Por ejemplo, si un trabajador que empieza su contrato el 02/02/2021, tiene 6 festivos trabajados hasta final del periodo (ver Estadísticas Festivos & Nocturnidad ), en ese periodo no podrá tener más de 6 absentismos del tipo de absentismo configurado.

Esta restricción limita el número máximo de absentismos según los festivos del periodo de contrato del trabajador, hayan sido o no trabajados. El absentismo configurado se podrá insertar como compensatorio de los festivos, pero si el número de veces que se ha solicitado supera el número total de festivos del trabajador en ese periodo, la restricción impedirá solicitarlo.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Tipo de absentismo. Indica qué tipo de absentismo va ligado a los festivos del periodo.

Por ejemplo, si los trabajadores de un equipo tienen configurado que se consideran festivos, solo los indicados como festivos, si existen 8 festivos, no se podrán añadir al cuadrante más de 8 absentismos de ese tipo.

Esta restricción limita el número máximo de absentismos de un tipo concreto comprobando que no supere las horas acumuladas de un determinado tipo de horas previamente creado. Se utiliza para controlar que un absentismo, como puede ser “horas recuperadas”, solo se pueda solicitar si hay horas suficientes del tipo definido, por ejemplo, “recuperables”. Si el número de horas solicitadas en el absentismo excede el total de horas registradas como recuperables, la restricción impedirá su solicitud.

⚙️ Configuración: Esta restricción, además de la configuración básica, tiene tres campos adicionales.

- Tipo de absentismo. Indica qué tipo de absentismo está condicionado a las horas acumuladas del tipo especificado. Tipo de hora. Indica el tipo de horas que deben acumularse para permitir la solicitud del absentismo. Periodo a revisar; Indica si esta restricción debe revisar el año entero o x meses atrás, o sin límite.

Por ejemplo, al añadir un tipo de horas que se ha llamado “recuperables”. Posteriormente, el sistema valida que a razón de ese tipo de horas el trabajador puede solicitar un absentismo al que denominamos “horas recuperadas”, que no excede del tipo de absentismo “recuperables”.

Esta restricción limita el número máximo de absentismos según los turnos planificados de un tipo determinado. Se utiliza para vincular la planificación de un turno con la posibilidad de solicitar un absentismo específico. De esta forma, si un trabajador tiene planificados determinados turnos, podrá solicitar un número equivalente (o menor) de absentismos ligados a esos turnos. Esta relación no se aplica en el caso de absentismos temporales.

⚙️ Configuración: Esta restricción, además de la configuración básica, tiene tres campos adicionales.

- Tipo de turno. Indica qué tipo de turno le afecta la restricción. Tipo de absentismo. Indica qué tipo de absentismo va ligado al turno anterior.

Esta restricción limita el número máximo de festivos con planificación al año.

⚙️ Configuración: Esta restricción, además de la configuración básica, tiene ocho campos adicionales.

- Valor de la restricción: Indica el número máximo de festivos planificados al año. C omprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción. Usar inicio del evento para comprobación de día al que pertenece. Es decir, si es un turno nocturno que empieza el día 01/01 y termina el 02/01, lo comprueba el 01/01. Usar fin del evento para comprobación de día al que pertenece. Siguiendo el ejemplo anterior, si es un turno nocturno que empieza el día 01/01 y termina el 02/01, lo comprueba el 02/01. Considerar complementarias y extras: Indica si una planificación en fines de semana de complementarias o extras aplican o no en la restricción. Tipos de festivos: Indica que tipos de festivos se incluirán en esta restricción. Absentismos: Indica si considerar únicamente los absentismos justificados como trabajados o si todos los absentismos se consideran como trabajados. Tipo de año: Indica si esta restricción aplica al año natural o al año fiscal. Total de días iniciales: Indica cuantos días se descuentan en esta restricción. Calcular a proporción del periodo de contrato: Se debe seleccionar si se quiere recalcular esta restricción según el periodo de contrato.

Esta restricción limita el número máximo de festivos planificados al mes.

⚙️Configuración: Esta restricción, además de la configuración básica tiene un campo adicional:

- Valor de la restricción: Establece un máximo de fines de semana planificados al año que se pueden incluir en el cuadrante.

Por ejemplo, si la restricción tiene informado como valor “1”, el trabajador no podría tener 2 días festivos planificados. Si se planificar un festivo más, como por ejemplo el día 20, salta la restricción.

Esta restricción limita el número máximo de festivos especiales planificados al año. Para ello se debe configurar los festivos como “Especiales”.

⚙️ Configuración: Esta restricción, además de la configuración básica tiene tres campos adicionales.

- Valor de la restricción: Indica el número máximo de festivos especiales que se pueden planificar. Tener en cuenta turnos de cero horas: Indica si considerar o no los turnos de cero horas. Tipo de año: Indica si aplica al año natural o fiscal.

Por ejemplo, si la restricción tiene como valor máximo “1”, no podrá tener más de un festivo especial planificado. Si se quiere planificar el día 6, saltará la restricción.

Existe la opción de que se comprueben también aquellos turnos configurados sin horas computadas.

Esta restricción limita el número de absentismos permitidos en función de los festivos no trabajados por el empleado durante el periodo. Su finalidad es permitir al trabajador disfrutar de permisos como compensación por festivos trabajados, sin que estos permisos superen la cantidad de festivos que no haya trabajado. De este modo, un trabajador puede solicitar permisos compensatorios únicamente si ha tenido festivos sin planificar como turno trabajado.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Tipo de absentismo. Indica qué tipo de absentismo está condicionado a los festivos no trabajados. Fecha límite de disfrute. Define hasta qué fecha del año siguiente el trabajador puede disfrutar del absentismo relacionado con los festivos no trabajados del año anterior.

Esta restricción limita el número de horas de un tipo de absentismo, comprobando que no excedan las horas planificadas de uno o varios tipos de turno dentro de un periodo específico. Se utiliza para compensar las horas trabajadas en determinados turnos. Por ejemplo, en festivos con horas de absentismo posteriores. Así, si un trabajador ha realizado un turno de 8 horas en una fecha determinada, podrá disfrutar de hasta 8 horas de absentismo vinculado, en otro momento, siempre que no supere el total acumulado.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene tres campos adicionales.

- Tipos de turno. Indica qué tipos de turnos se tendrán en cuenta para acumular horas compensables. Tipo de absentismo. Indica qué tipo de absentismo se compara con las horas planificadas del turno. Periodo a revisar. Define el rango temporal hacia atrás (hasta 12 meses) que se analizará para contar las horas planificadas de turno a efectos de compensación. Total de horas sindicales: Permite descontar del total de horas compensables aquellas horas ya consumidas bajo esta u otras restricciones relacionadas con representación sindical, si corresponde.

Esta restricción limita el número de horas de un tipo de absentismo, de forma que no pueda superar las horas trabajadas en días festivos durante el año. Permite a los trabajadores compensar en otro momento las horas trabajadas en festivos mediante permisos, pero sin exceder el total real de horas efectivamente trabajadas en esos días. Si el trabajador ha trabajado 54 horas en festivos a lo largo del año, podrá disfrutar como máximo de 54 horas del absentismo configurado.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Tipo de absentismo. Indica qué tipo de absentismo está condicionado a las horas trabajadas en días festivos. Saldo inicial. Indica si esta restricción tiene algún saldo inicial que descontar al valor original.

Esta restricción impide que se puedan solicitar o insertar absentismos en días que se tengan aprobadas unas vacaciones.

⚙️Configuración: Esta restricción tiene una configuración básica.
