---
schemaVersion: "1.0"
contentId: "configuracion-y-cuenta-conceptos-tipo-4-conceptos-asociados-a-los-tipos-de-turnos"
title: "Conceptos tipo 4: Conceptos asociados a los tipos de turnos"
description: "Aprende a conceptos tipo 4: Conceptos asociados a los tipos de turnos, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Configuración y cuenta"
submodule: "Roles y permisos"
intent: "Conceptos tipo 4: Conceptos asociados a los tipos de turnos"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "asociados"
    label: "Asociados"
  - id: "conceptos"
    label: "Conceptos"
  - id: "tipo"
    label: "Tipo"
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
    - "https://manual.aturnos.com/knowledgebase/conceptos-tipo-4-conceptos-asociados-a-los-tipos-de-turnos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/conceptos-tipo-4-conceptos-asociados-a-los-tipos-de-turnos/"
ai:
  answerableQuestions:
    - "¿Cómo puedo conceptos tipo 4: Conceptos asociados a los tipos de turnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "68eb646109ed5b1ddf052a74e06fdc667add09e100621813d46f92e77cc0544c"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a conceptos tipo 4: Conceptos asociados a los tipos de turnos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Recupera el número de turnos, del turno seleccionado (valga la redundancia), excepto en el caso de que el turno tenga asociado un absentismo total no productivo (como suelen ser las incapacidades temporales, permisos establecidos en el convenio, etc.) y/o un absentismo total no justificado (por ejemplo, las faltas de asistencia). No afecta a absentismos temporales.

Este tipo de conceptos suelen utilizarse cuando se debe abonar solo alguno/s de los turnos creados, cuando el trabajador los tenga planificados.

Se debe acceder a ADMINISTRAR → NOMINAS → CONCEPTOS DE CALCULO.

Para definir el concepto se debe indicar:

- Código de concepto: Código de concepto de nómina que abona el turno definido.
- Descripción: Descripción del código de concepto. No es obligatorio.
- Seleccionar tipo de dato: Número de turnos del turno seleccionado.
- Localización del turno: En el caso de seleccionar una localización, se puede indicar si se deben tener en cuenta los turnos en las localizaciones hijas de la localización seleccionada, de forma que el concepto solo los turnos del tipo indicado en la localización que se indique. Por defecto “Todas las localizaciones”.
- Localización por defecto del trabajador: Sí se debe calcular el número de turno solo a los trabajadores con una localización por defecto determinada. Por defecto “Todas las localizaciones”.
- Categoría: Sí se debe calcular el número de turno solo a los trabajadores con una categoría determinada. Por defecto “Todas las categorías”
- Filtro de días: Se puede seleccionar los días en los que debe recuperar el número de turnos indicados: Días de la semana de lunes a domingo Festivos Días previos a festivos Festivos especiales Días previos a festivos especiales Todos los días menos los festivos especiales Días de la semana de lunes a domingo (incluyendo festivos). La diferencia entre los “Días de la semana de lunes a domingo” y “Días de la semana de lunes a domingo (incluyendo festivos)” está en lo que se indique en la configuración de los festivos a nivel de equipo. En el caso de que esté marcado sábados y domingos como festivos en los ajustes del equipo, si se desea recuperar el número de turnos en sábado o en domingo el filtro a seleccionar sería “Sábados (incluyendo festivos)” y/o “Domingos (incluyendo festivos)”

- Absentismo: Se puede indicar un absentismo, en el caso de que el trabajador tenga un turno con un absentismo total devolverá valor. No tiene en cuenta los absentismos temporales ni los periodos de absentismo.
- Incluir Peticiones de Vacaciones: En el caso de que el trabajador tenga planificado el turno definido el concepto y sobre ese turno se han aprobado unas vacaciones (a través de una petición realizada en aTurnos) recupera valor, se considera el turno como trabajado.
- Tipos de turno: Se debe informar el tipo de turno o los tipos de turno que debe tener en cuenta el conceptos.

En el cuadrante el trabajado tiene la siguiente planificación:

Los días 4, 8, 12 (con absentismo no justificado), el día 14 (con absentismo no productivo) y el día 17 (con absentismo productivo) el trabajador tiene planificado el turno N12.

Si el turno tiene informado un absentismo no justificado o un absentismo no productivo no recupera valor, el trabajador no ha prestado servicio el turno que genera el derecho al abono en la nómina.

A través de ADMINISTRAR → NOMINAS → ESTADÍSTICA DIARIA, se visualizan los resultados.

En el caso que el convenio establezca un valor distinto a 1 cuando el trabajador tiene el turno planificado, recordad que a través de los conceptos que operan entre conceptos se puede multiplicar por un valor distinto. En este enlace Ejemplo multiplicación por campo fijo, se describe el proceso.
