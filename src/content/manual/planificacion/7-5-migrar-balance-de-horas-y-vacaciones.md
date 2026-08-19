---
schemaVersion: "1.0"
contentId: planificacion-7-5-migrar-balance-de-horas-y-vacaciones
title: Migrar balance de horas y vacaciones
description: Cuando termina un año, los balances de las horas y de las vacaciones se pueden traspasar al año siguiente.
contentType: concept
module: Planificación
submodule: Contratos
intent: Migrar balance de horas y vacaciones
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
  - id: balance
    label: Balance
  - id: horas
    label: Horas
  - id: migrar
    label: Migrar
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
    - https://manual.aturnos.com/knowledgebase/11-5-migrar-saldos-de-horas-y-vacaciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/11-5-migrar-saldos-de-horas-y-vacaciones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre migrar balance de horas y vacaciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 7
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/11-5-migrar-saldos-de-horas-y-vacaciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/11-5-migrar-saldos-de-horas-y-vacaciones/
  contentHash: 96f28bc89d84760bab86b617d0397573f0d48215c6c34996cd49712aa6b527e7
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre migrar balance de horas y vacaciones, con instrucciones y contexto revisables por el equipo de aTurnos.

Cuando termina un año, los balances de las horas y de las vacaciones se pueden traspasar al año siguiente. De forma que si existe un balance positivo, se pasa como ajuste negativo en el primer año y como ajuste positivo en el año siguiente.

## Migrar balance de horas

En el balance de horas se pueden dar dos escenarios diferentes. Un escenario en el que trabador tiene planificada en un año más horas computadas que las horas que debería hacer por contrato (exceso de horas a favor del trabajador). Y otro escenario es al contrario que el trabajador tiene planificada en un año menos horas computadas que las horas que debería hacer por contrato (defecto de horas a favor de la empresa).

Balance con exceso de horas: Es el caso en las horas computadas de un trabajador es mayor a las horas de contrato. Por ejemplo, un trabajador que tiene planificada 1673 horas computadas en 2021, cuando su contrato es de 1600, es la empresa quien debe 73 horas al trabajador.

En este ejemplo de exceso de horas, el comportamiento de la migración del balance de horas es que en 2021 se le aplicará un decremento de horas computadas en la planificación de (-73 horas) en el año 2021 al trabajador y un incremento de horas computadas en la planificación de (73) horas de 2022.

Balance con defecto de horas:Es el caso en las horas computadas de un trabajador es menor a las horas de contrato. Por ejemplo, 1761 un trabajador que tiene planificada 1673 horas computadas en 2021 cuando su contrato es de 1800, es el trabajador quien debe 39 horas a la empresa.

En este ejemplo de defecto de horas, el comportamiento de la migración del balance de horas es que en 2021 se le aplicará un incremento de horas computadas en la planificación de (39 horas computadas) en el año 2021 al trabajador y un decremento de horas computadas en la planificación de (-39 horas computadas) en el año 2022.

### ¿Cómo migrar el balance de horas de un año a otro?

El administrador desde el menú RRHH accede a la acción “migrar balance de horas y vacaciones”. Para migrar horas computadas de un año a otro para ajustar el balance del primer año tenemos que realizar los siguientes pasos:

- Escoger el equipo (o todos los equipos): donde se quiere hacer el ajuste del balance de horas y/o vacaciones. En este caso, lo haremos solo el ajuste del balance de horas.
- El tipo de ajuste: El recomendado y por defecto es el ajuste por planificación. Afecta y modifica el valor de las horas computadas, no modifica el valor de las horas de contrato.
- Seleccionar el año origen y el año destino.
- Check Horas: Con la opción SI, se migrarán las horas del balance del año origen al balance del año destino. Con la opción No, las horas no migran al siguiente año, no se ejecuta ninguna acción.

Antes de realizar la migración de balances, podemos ver en un listado todos los detalles del balance de horas. Se detalla las horas computadas que se van a incrementar o decrementar en el primer año (año origen) y en el año siguiente (año destino) de cada trabajador, para ello se debe pulsar el botón “Ver migración”.

En este listado aparecerán todos los balances de horas que quedan por cerrarse en el año origen de cada trabajador

En el ejemplo de exceso de horas del trabajador (Ana): informará que realizará un ajuste de 73 horas en el año 2021 de “Decremento de horas computadas” para dejar el balance a cero y, por el contrario, se aplicará un ajuste de 73 horas en el año 2022 de “Incremento de horas computadas” para que el trabajador disminuya el balance en 2022 para compensar las horas trabajadas de más en 2021.

En el ejemplo de defecto de horas del trabajador (Tomás): informará que realizará un ajuste de 39 horas en el año 2021 de “Incremento de horas computadas” para dejar el balance a cero y, por el contrario, se aplicará un ajuste de 39 horas en el año 2022 de “Decremento de horas computadas” para que el trabajador aumente el balance en 2022 para que el administrador le planifique 39 horas más y compensar las horas “no trabajadas” de más en 2021.

El último paso será realizar la migración, una vez se han seleccionado a los trabajadores a los cuales se quieren ajustar los balances, para ello hay que hacer clic en el botón “Migrar”.

El ajuste aparece en perfil del trabajador. En la tabla horas computadas del año consultado.

Ajuste del balance de horas 2021:

Ajuste del balance de horas 2022:

## Migrar balance de vacaciones

Por ejemplo, si un trabajador tiene por convenio 30 días de vacaciones anuales, y en el 2023 ha disfrutado de 27 días, en el año 2024 tendrá 33 días de vacaciones, equivalentes a los 30 días de convenio más 3 días del año anterior, que no fueron planificados en 2023.

### ¿Cómo migrar el balance de vacaciones de un año a otro?

Esta opción es un proceso automatizado. Consiste en ajustar de manera automatizada las vacaciones pendientes del trabajador, de un año al año siguiente. Esta acción se puede aplicar para un solo trabajador, para varios o todos los trabajadores de un equipo, o para todos los trabajadores de varios equipos de la empresa.

Este proceso se basa en un incremento o decremento del balance de las vacaciones de un año anterior y del año siguiente, donde han migrado las vacaciones.

En la función de “Migrar balance de horas y vacaciones”, para trasladar solo el balance de vacaciones de un año a otro, es necesario:

- Escoger el equipo (o equipos): donde se quiere hacer el ajuste del balance de vacaciones.
- El tipo de ajuste: por defecto es el ajuste por planificación.
- Seleccionar el año origen y el año destino.
- Check Vacaciones: Con la opción Si, se migrará el balance de vacaciones del año origen al año destino. Con la opción No, esta función no modifica ni migra los balances de vacaciones.

Antes de realizar la migración de balances, podemos ver en un listado todos aquellos desajustes vacaciones, para ello se debe pulsar el botón “Ver migración”.

En este listado aparecerán todos los balances que quedan por cerrarse en el año origen de cada trabajador de días de vacaciones.

Se nos informará que realizará un ajuste en el año 2021 de “Decremento balance de vacaciones” para dejar el balance a cero y, por el contrario, se aplicará un ajuste en el año 2023 de “Incremento balance de vacaciones” para que el trabajador pueda disfrutar de esos 3 días restantes en el año 2024, computando un total de 33 días.

El último paso será realizar la migración, una vez se han seleccionado a los trabajadores a los cuales se quieren saldar, para ello hay que hacer clic en el botón “Migrar”.

El ajuste aparece en perfil del trabajador.

Tanto en el año 2023, origen del ajuste del balance.

Este ajuste se puede ver con más detalle, desde el botón de añadir ajustes.

Como en los ajustes del año 2024, destino del balance.

Detalle del ajuste en el año destino, desde el botón de añadir ajustes.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Migrar balance de horas](/media/manual/migrar-balance-de-horas-0f0265c455.png)

![¿Cómo migrar el balance de horas de un año a otro?](/media/manual/como-migrar-el-balance-de-horas-de-un-ano-a-otro-f07f21197b.png)

![Migrar balance de horas](/media/manual/migrar-balance-de-horas-90552a3efa.png)

![¿Cómo migrar el balance de horas de un año a otro?](/media/manual/como-migrar-el-balance-de-horas-de-un-ano-a-otro-37883e7812.png)

![¿Cómo migrar el balance de horas de un año a otro?](/media/manual/como-migrar-el-balance-de-horas-de-un-ano-a-otro-217082f59a.png)

![¿Cómo migrar el balance de horas de un año a otro?](/media/manual/como-migrar-el-balance-de-horas-de-un-ano-a-otro-d1b95582d1.png)

![¿Cómo migrar el balance de horas de un año a otro?](/media/manual/como-migrar-el-balance-de-horas-de-un-ano-a-otro-616913c342.png)

![¿Cómo migrar el balance de horas de un año a otro?](/media/manual/como-migrar-el-balance-de-horas-de-un-ano-a-otro-ca5cefff0b.png)

![¿Cómo migrar el balance de horas de un año a otro?](/media/manual/como-migrar-el-balance-de-horas-de-un-ano-a-otro-dd1bf3af58.png)

![Migrar balance de vacaciones](/media/manual/migrar-balance-de-vacaciones-329adc300f.png)

![Migrar balance de vacaciones](/media/manual/migrar-balance-de-vacaciones-ecec7bc90f.png)

![¿Cómo migrar el balance de vacaciones de un año a otro?](/media/manual/como-migrar-el-balance-de-vacaciones-de-un-ano-a-otro-515b1d78a6.png)

![¿Cómo migrar el balance de vacaciones de un año a otro?](/media/manual/como-migrar-el-balance-de-vacaciones-de-un-ano-a-otro-09d223e9fa.png)

![¿Cómo migrar el balance de vacaciones de un año a otro?](/media/manual/como-migrar-el-balance-de-vacaciones-de-un-ano-a-otro-537e7a8339.png)

![¿Cómo migrar el balance de vacaciones de un año a otro?](/media/manual/como-migrar-el-balance-de-vacaciones-de-un-ano-a-otro-5bc4a0b830.png)

![¿Cómo migrar el balance de vacaciones de un año a otro?](/media/manual/como-migrar-el-balance-de-vacaciones-de-un-ano-a-otro-cd7e53d031.png)

![¿Cómo migrar el balance de vacaciones de un año a otro?](/media/manual/como-migrar-el-balance-de-vacaciones-de-un-ano-a-otro-4b3f280d40.png)

![¿Cómo migrar el balance de vacaciones de un año a otro?](/media/manual/como-migrar-el-balance-de-vacaciones-de-un-ano-a-otro-be3f6365de.png)
