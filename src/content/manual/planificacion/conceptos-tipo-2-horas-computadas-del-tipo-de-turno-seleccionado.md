---
schemaVersion: "1.0"
contentId: planificacion-conceptos-tipo-2-horas-computadas-del-tipo-de-turno-seleccionado
title: "Conceptos tipo 2: Horas computadas del tipo de turno seleccionado"
description: Recupera el número de horas por la duración computada de un determinado tipo, excepto en el caso de que el turno tenga asociado un absentismo total/temporal no productivo (como suelen ser la.
contentType: procedure
module: Planificación
submodule: Roles y permisos
intent: "Conceptos tipo 2: Horas computadas del tipo de turno seleccionado"
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: computadas
    label: Computadas
  - id: conceptos
    label: Conceptos
  - id: horas
    label: Horas
  - id: seleccionado
    label: Seleccionado
  - id: tipo
    label: Tipo
  - id: turno
    label: Turno
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
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-2-conceptos-asociados-a-las-horas-de-la-duracion-computada-de-los-turnos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-2-conceptos-asociados-a-las-horas-de-la-duracion-computada-de-los-turnos/
ai:
  answerableQuestions:
    - "¿Cómo puedo conceptos tipo 2: Horas computadas del tipo de turno seleccionado?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-2-conceptos-asociados-a-las-horas-de-la-duracion-computada-de-los-turnos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-2-conceptos-asociados-a-las-horas-de-la-duracion-computada-de-los-turnos/
  contentHash: a5ae804078d42b87b7f8a67f5e4305314e2f81430eb64bf984883bd3063fd517
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Aprende a conceptos tipo 2: Horas computadas del tipo de turno seleccionado, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Recupera el número de horas por la duración computada de un determinado tipo, excepto en el caso de que el turno tenga asociado un absentismo total/temporal no productivo (como suelen ser las incapacidades temporales, permisos establecidos en el convenio, etc.) y/o un absentismo total/temporal no justificado (por ejemplo, las faltas de asistencia).

Para el turno GN12, el concepto del tipo 2 asociado a este turno recuperará 12 horas. Para recuperar las 16 horas por la duración computada del turno se deben utilizar los conceptos tipo 3.

Se utiliza eventualmente para el abono de horas por ciertos turnos específicos.

Para recuperar el número de horas de alguno/s de los turno/s creados se debe acceder a ADMINISTRAR → NOMINAS → CONCEPTOS DE CALCULO

Para definir el concepto se debe indicar:

- Código de concepto: Código de concepto de nómina que abona el turno definido.
- Descripción: Descripción del código de concepto. No es obligatorio.
- Seleccionar tipo de dato: Horas computadas del tipo de turno seleccionado.
- Localización del turno: En el caso de seleccionar una localización, se puede indicar si se deben tener en cuenta los turnos en las localizaciones hijas de la localización seleccionada, de forma que el concepto solo los turnos del tipo indicado en la localización que se indique. Por defecto “Todas las localizaciones”.
- Localización por defecto del trabajador: Sí se debe calcular el número de turno solo a los trabajadores con una localización por defecto determinada. Por defecto “Todas las localizaciones”.
- Computa en el día de inicio: En el caso de que no se marque el check, las horas del turno seleccionado computa en el día planificado, es decir, en este caso donde el turno que comienza a las 20:00 y termina a las 08:00 del día siguiente, devolverá 16 horas.
- Categoría: Sí se debe calcular el número de turno solo a los trabajadores con una categoría determinada. Por defecto “Todas las categorías”
- Filtro de días: Se puede seleccionar los días en los que debe recuperar el número de turnos indicados: Días de la semana de lunes a domingo Festivos Días previos a festivos Festivos especiales Días previos a festivos especiales Todos los días menos los festivos especiales Días de la semana de lunes a domingo (incluyendo festivos). La diferencia entre los “Días de la semana de lunes a domingo” y “Días de la semana de lunes a domingo (incluyendo festivos)” está en lo que se indique en la configuración de los festivos a nivel de equipo.

En el caso de que esté marcado sábados y domingos como festivos en los ajustes del equipo, si se desea recuperar el número de turnos en sábado o en domingo el filtro a seleccionar sería “Sábados (incluyendo festivos)” y/o “Domingos (incluyendo festivos)”

- Absentismo: Se puede indicar un absentismo, en el caso de que el trabajador tenga un turno con un absentismo total devolverá valor. No tiene en cuenta los absentismos temporales ni los periodos de absentismo.
- Incluir Peticiones de Vacaciones: En el caso de que el trabajador tenga planificado el turno definido el concepto y sobre ese turno se han aprobado unas vacaciones (a través de una petición realizada en aTurnos) recupera valor, se considera el turno como trabajado.
- Tipos de turno: Se debe informar el tipo de turno o los tipos de turno que debe tener en cuenta el conceptos.

El trabajador tiene la siguiente planificación, el concepto creado recuperará las horas computadas del turno GN12

Al recuperar las horas de la duración computada a través de ADMINISTRAR → NOMINAS → ESTADISTICA DIARIA recupera las 16 horas (el día 11 de julio) indicadas en el turno creado anteriormente.
