---
schemaVersion: "1.0"
contentId: "planificacion-conceptos-tipo-3-horas-planificadas-del-tipo-de-turno-seleccionado"
title: "Conceptos tipo 3: Horas planificadas del tipo de turno seleccionado"
description: "Aprende a conceptos tipo 3: Horas planificadas del tipo de turno seleccionado, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Planificación"
submodule: "General"
intent: "Conceptos tipo 3: Horas planificadas del tipo de turno seleccionado"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "conceptos"
    label: "Conceptos"
  - id: "horas"
    label: "Horas"
  - id: "planificadas"
    label: "Planificadas"
  - id: "seleccionado"
    label: "Seleccionado"
  - id: "tipo"
    label: "Tipo"
  - id: "turno"
    label: "Turno"
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
    - "https://manual.aturnos.com/knowledgebase/conceptos-tipo-3-conceptos-asociados-a-las-horas-de-la-duracion-total-de-los-turnos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/conceptos-tipo-3-conceptos-asociados-a-las-horas-de-la-duracion-total-de-los-turnos/"
ai:
  answerableQuestions:
    - "¿Cómo puedo conceptos tipo 3: Horas planificadas del tipo de turno seleccionado?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "89b934aaf407bdcaf9ca19f41279a85a7817ae9ca5406c586d78337a6826c742"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a conceptos tipo 3: Horas planificadas del tipo de turno seleccionado, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Recupera el número de horas por la duración total de un determinado tipo, excepto en el caso de que el turno tenga asociado un absentismo total/temporal no productivo (como suelen ser las incapacidades temporales, permisos establecidos en el convenio, etc.) y/o un absentismo total/temporal no justificado (por ejemplo, las faltas de asistencia).

En este caso, recuperar 17 horas por la duración total del turno, en el caso de utilizar el concepto tipo 2 asociado a este turno, devolvería cero horas por las horas de la duración computada.

Se suele utilizar para el abono de horas por turnos de guardia, ya que las guardias suelen ser turnos que están así configurados, es decir, turno que tienen duración total y no computada.

Para recuperar el número de horas de alguno/s de los turno/s creados se debe acceder a ADMINISTRAR → NOMINAS → CONCEPTOS DE CALCULO

Para definir el concepto se debe indicar:

- Código de concepto: Código de concepto de nómina que abona el turno definido.
- Descripción: Descripción del código de concepto. No es obligatorio.
- Seleccionar tipo de dato: Horas planificadas del tipo de turno seleccionado.
- Localización del turno: En el caso de seleccionar una localización, se puede indicar si se deben tener en cuenta los turnos en las localizaciones hijas de la localización seleccionada, de forma que el concepto solo los turnos del tipo indicado en la localización que se indique. Por defecto “Todas las localizaciones”.
- Localización por defecto del trabajador: Sí se debe calcular el número de turno solo a los trabajadores con una localización por defecto determinada. Por defecto “Todas las localizaciones”.
- Computa en el día de inicio: En el caso de que no se marque el check, las horas del turno seleccionado computa en el día planificado, es decir, en el caso de este turno que comienza a las 15:00 y termina a las 08:00 del día siguiente, devolverá 9 horas (desde las 15:00 hasta las 00:00) el día de inicio del turno y por otro lado, 8 horas (desde las 00:00 hasta las 08:00) el día que finaliza el turno. En el caso de que esté marcado el check, las 17 horas se computan en el día de inicio del turno, como el caso de uso planteado en el ejemplo.
- Categoría: Sí se debe calcular el número de turno solo a los trabajadores con una categoría determinada. Por defecto “Todas las categorías”
- Filtro de días: Se puede seleccionar los días en los que debe recuperar el número de turnos indicados: Días de la semana de lunes a domingo Festivos Días previos a festivos Festivos especiales Días previos a festivos especiales Todos los días menos los festivos especiales Días de la semana de lunes a domingo (incluyendo festivos). La diferencia entre los “Días de la semana de lunes a domingo” y “Días de la semana de lunes a domingo (incluyendo festivos)” está en lo que se indique en la configuración de los festivos a nivel de equipo.

En el caso de que esté marcado sábados y domingos como festivos en los ajustes del equipo, si se desea recuperar el número de turnos en sábado o en domingo el filtro a seleccionar sería “Sábados (incluyendo festivos)” y/o “Domingos (incluyendo festivos)”

- Absentismo: Se puede indicar un absentismo, en el caso de que el trabajador tenga un turno con un absentismo total devolverá valor. No tiene en cuenta los absentismos temporales ni los periodos de absentismo.
- Incluir Peticiones de Vacaciones: En el caso de que el trabajador tenga planificado el turno definido el concepto y sobre ese turno se han aprobado unas vacaciones (a través de una petición realizada en aTurnos) recupera valor, se considera el turno como trabajado.
- Tipos de turno: Se debe informar el tipo de turno o los tipos de turno que debe tener en cuenta el conceptos.

El trabajador tiene la siguiente planificación, el concepto creado recuperará las horas computadas del turno GP17

Al recuperar las horas de la duración total a través de ADMINISTRAR → NOMINAS → ESTADISTICA DIARIA recupera las 17 horas (el día 7 de agosto) indicadas en el turno creado anteriormente.
