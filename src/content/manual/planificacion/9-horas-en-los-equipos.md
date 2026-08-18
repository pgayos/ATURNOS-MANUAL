---
schemaVersion: "1.0"
contentId: planificacion-9-horas-en-los-equipos
title: Horas en los equipos
description: Este apartado es útil para un administrador, porque ofrece una tabla donde podrá visualizar, de una forma rápida y sencilla, datos importantes de la planificación de un trabajador en los dif.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
intent: Horas en los equipos
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
  - id: equipos
    label: Equipos
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
    - https://manual.aturnos.com/knowledgebase/9-horas-en-los-equipos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/9-horas-en-los-equipos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre horas en los equipos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/9-horas-en-los-equipos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/9-horas-en-los-equipos/
  contentHash: 155a5ce79d59fad25d298a953c8d6b37729966f41cb68838b287511f0ae54d23
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre horas en los equipos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Este apartado es útil para un administrador, porque ofrece una tabla donde podrá visualizar, de una forma rápida y sencilla, datos importantes de la planificación de un trabajador en los diferentes equipos como son las horas planificadas, vacaciones y sus balances, donde ha sido planificado durante todo un año. Se dividen en las siguientes opciones:

En la tabla ‘Horas’ podrás consultar los siguientes datos:

- Equipo: Se visualiza el nombre del equipo o equipos de los que forma parte el trabajador, en cada periodo contratado del año a consultar.
- Inicio: Fecha de inicio del periodo de contrato. Si la fecha de inicio es anterior al año consultado, el cálculo se realiza a partir del día 1/1 del año consultado.

- Fin: Fecha de fin del periodo de contrato. Si no tiene fecha informada el cálculo se realiza hasta el 31/12 del año consultado.
- Horas contrato/año: Número de horas de trabajo anuales que debe realizar el trabajador por su convenio, con independencia de la fecha de alta y el porcentaje de jornada.
- Porcentaje de jornada (%): Indica el % de jornada que realiza el trabajador en el periodo del contrato consultado. Es el valor que se aplica a las horas contrato/año para el cálculo de las horas contrato/periodo. Si realiza una jornada completa el porcentaje será del 100%.
- Horas contrato: Son las horas que corresponde hacer al trabajador en el periodo teniendo en cuenta la fecha de inicio y fin del periodo y el porcentaje de jornada.
- Días: Son el número de días naturales del periodo contratado del trabajador.
- Horas planificadas: Suma de las horas y turnos planificados (horas computadas). También incluyen, si es el caso, las horas computables del ajuste del control de presencia del periodo de contrato consultado. Se excluyen las horas asociadas a los absentismos no justificado.
- Ajuste de horas: Es el incremento o decremento de horas que se añade a un trabajador en el periodo de contrato. Estas horas no están planificadas ni son visibles en el cuadrante. Ejemplo cuando se traspasan saldos por exceso o defecto de horas de un año al siguiente. También se utiliza, por ejemplo, al hacer un finiquito al final del contrato y saldar las horas. (Ver ¿qué son los ajustes de horas?)
- Balance de horas: Es el resultado en horas de la diferencia entre las horas contrato menos las horas planificadas. Si lo que nos muestra el total es un balance con saldo negativo, entonces el trabajador ha realizado horas de más, es decir, son las horas en las que excede respecto a las que tiene identificadas en su contrato de trabajo en el periodo seleccionado. Por el contrario, si arroja un saldo positivo, entonces el trabajador ha realizado horas de menos, es decir, son las horas que le faltan respecto a las que tiene identificadas en su contrato de trabajo en el periodo seleccionado.
- Balance de horas con ajuste: Es el resultado en horas de la diferencia entre las horas contrato menos las horas planificadas y el ajuste de horas añadido. (Ver ¿qué son los ajustes de horas?)
- Acciones: Podrás acceder al resto de equipos directamente haciendo clic en el botón verde del equipo que deseas.

El administrador desde el perfil de trabajador puede ajustar las horas por defecto o exceso que realiza un trabajador de un periodo a otro desde el propio perfil de trabajador para dejar el periodo finalizado con un balance a “0” en la opción “Horas en los equipos”.

En el momento que un trabajador acaba un contrato es frecuente que las horas que ha realizado no se ajusten a las horas de contrato, bien por defecto o por exceso. Esta diferencia genera un balance en horas con valor diferente a cero. Para que el balance sea igual a cero, es necesario pasar las horas por exceso o defecto del periodo de contrato al siguiente periodo de contrato.

¿Cómo pasar las horas de un periodo de contrato a otro?

1. Desde el perfil del trabajador en “Horas en los equipos” seleccionar la opción Horas.

1. Desde la columna “Balance horas con ajuste” hacer clic en el botón de acción representado por una misma fecha ascendente y descendente.
2. Al hacer clic en este botón, seleccionar el periodo, de los que se muestran, y donde se quiere pasar las horas. Una vez seleccionado hacer clic en el botón “Guardar”.

1. Las horas pasan al periodo seleccionado y el balance se ajusta a “0”.

En la tabla Vacaciones podrás consultar los siguientes datos:

- Vacaciones contrato: Son el número total de vacaciones que le corresponde en el periodo, proporcional al número de días del periodo y número total de vacaciones año según configuración en el equipo.
- Vacaciones planificadas: Son el número total de vacaciones planificadas en el cuadrante del trabajador.
- Vacaciones disfrutadas: Son el número total de vacaciones que ya ha disfrutado el trabajador, son las vacaciones planificadas del periodo ya pasadas a día de hoy.
- Ajuste de vacaciones: Son el número de vacaciones que se incrementa o decrementa para finiquitar en el periodo finalizado. Por ejemplo, en el caso de que no hayan sido planificados 10 días de vacaciones del periodo anterior, se puede incrementar 10 días más de vacaciones en el periodo actual.
- Balance de Vacaciones: Es el resultado de la diferencia entre las vacaciones contrato menos las vacaciones disfrutadas.
- Balance de Vacaciones con ajuste: Resultado de la diferencia entre las vacaciones contrato, menos las vacaciones disfrutadas y el ajuste de vacaciones.

El administrador desde el perfil de trabajador puede ajustar las vacaciones por exceso o defecto que hayan sido disfrutada o no por el trabajador. Este ajuste se realiza de un periodo de contrato a otro desde el propio perfil de trabajador para dejar el periodo finalizado con un balance a “0” en la opción “Horas en los equipos”.

En el momento que un trabajador acaba un contrato, es frecuente que las vacaciones de ese contrato no hayan sido planificadas. Esta diferencia genera un balance en las vacaciones con valor diferente a cero a favor del trabajador. Para que el balance sea igual a cero, es necesario pasar las vacaciones por exceso o defecto del periodo de contrato al siguiente periodo de contrato.

¿Cómo pasar las vacaciones de un periodo de contrato a otro?

1. Desde el perfil del trabajador en “Horas en los equipos” seleccionar la opción Vacaciones.

1. Desde la columna “Balance” hacer clic en el botón de acción representado por una misma fecha ascendente y descendente.
2. Al hacer clic en este botón, seleccionar el periodo, de los que se muestran, y donde se quiere pasar las vacaciones. Una vez seleccionado hacer clic en el botón “Guardar”.

1. Las vacaciones pasan al periodo seleccionado y el balance se ajusta a “0”.

Este ajuste se queda registrado en los ‘Ajustes’ de ‘Tiempos’ del ‘Perfil del trabajador’.

Hay casos donde un trabajador no va a tener un nuevo periodo de contrato y sus vacaciones no vayan a ser ni planificadas, ni disfrutadas.

Existe la opción de saldar a cero el balance de las ‘Vacaciones periodo’ con el botón ‘Finiquitar vacaciones’.

Finiquitaremos las vacaciones no planificadas, ni disfrutadas del periodo, registrando un ajuste de decremento de vacaciones en el periodo. Si había 12 días de vacaciones sin planificar, al realizar el ajuste, el balance se queda a cero.

Al igual que en el traspaso de vacaciones de un periodo a otro, se registra un ajuste que se puede consultar en los ‘Ajustes’ de ‘Tiempos’ del ‘Perfil del trabajador’.
