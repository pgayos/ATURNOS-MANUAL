---
schemaVersion: "1.0"
contentId: "planificacion-concepto-tipo-1-1-conceptos-relacionados-con-los-turnos"
title: "Concepto tipo 1.1: Conceptos relacionados con los turnos"
description: "Descarga el número de turnos entrantes en el día seleccionado, es decir, aquellos turnos cuyo inicio se sitúen en el día seleccionado."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Concepto tipo 1.1: Conceptos relacionados con los turnos"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "concepto"
    label: "Concepto"
  - id: "conceptos"
    label: "Conceptos"
  - id: "relacionados"
    label: "Relacionados"
  - id: "tipo"
    label: "Tipo"
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
    - "https://manual.aturnos.com/knowledgebase/2-conceptos-asociados-a-las-horas-por-turnos-computadas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-conceptos-asociados-a-las-horas-por-turnos-computadas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo concepto tipo 1.1: Conceptos relacionados con los turnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  contentHash: "601d13cb3af0767c8e49fce8bfbd224e80c8051240e22d37b62d281af06c3c96"
  migratedAt: 2026-08-17
---
## Resumen

Descarga el número de turnos entrantes en el día seleccionado, es decir, aquellos turnos cuyo inicio se sitúen en el día seleccionado.

## Contenido

Turnos

- Contabiliza los turnos con duración total, independientemente de su duración computada.
- No contabiliza horas.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos totales. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado. Absentismos temporales parciales. Al no ocupar todo el turno, descargará sea cual sea el tipo de absentismo. Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Diario (Domingos, Festivos, Festivos especiales), por seleccionar.
- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.

Turnos doble

Descarga el número de turnos doble entrantes en cualquier día, excepto en festivos y pre-festivos. Cuando se realizan varios turnos en un día o el número de horas (del turno) es superior al que se establezca, pueden determinar la existencia de turnos dobles. Los turnos dobles calculan los turnos de más que se realizan atendiendo a un límite de horas que se establece al crear este concepto.

Por ejemplo, si un trabajador ha realizado un turno 12 horas y el límite establecido son 8 horas, el trabajador ha excedido en 4 horas ese límite, por lo que se le tendrá en cuenta 0,5 turnos dobles.

- Contabiliza los turnos con duración total, independientemente de su duración computada.
- No contabiliza horas.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos totales. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado. Absentismos temporales parciales. Al no ocupar todo el turno, descargará sea cual sea el tipo de absentismo. Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Límite. Estableceremos el límite de horas para considerar un turno.

Turnos dobles pre-festivos

Descarga el número de turnos doble entrantes en pre-festivos. Cuando se realizan varios turnos en un día o el número de horas (del turno) es superior al que se establezca, pueden determinar la existencia de turnos dobles. Los turnos dobles calculan los turnos de más que se realizan atendiendo a un límite de horas que se establece al crear este concepto.

Por ejemplo, si un trabajador ha realizado un turno 12 horas y el límite establecido son 8 horas, el trabajador ha excedido en 4 horas ese límite, por lo que se le tendrá en cuenta 0,5 turnos dobles.

- Contabiliza los turnos con duración total, independientemente de su duración computada.
- No contabiliza horas.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos totales. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado. Absentismos temporales parciales. Al no ocupar todo el turno, descargará sea cual sea el tipo de absentismo. Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Límite. Estableceremos el límite de horas para considerar un turno.

Turnos dobles festivos

Descarga el número de turnos doble entrantes en festivos. Cuando se realizan varios turnos en un día o el número de horas (del turno) es superior al que se establezca, pueden determinar la existencia de turnos dobles. Los turnos dobles calculan los turnos de más que se realizan atendiendo a un límite de horas que se establece al crear este concepto.

Por ejemplo, si un trabajador ha realizado un turno 12 horas y el límite establecido son 8 horas, el trabajador ha excedido en 4 horas ese límite, por lo que se le tendrá en cuenta 0,5 turnos dobles.

- Contabiliza los turnos con duración total, independientemente de su duración computada.
- No contabiliza horas.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos totales. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado. Absentismos temporales parciales. Al no ocupar todo el turno, descargará sea cual sea el tipo de absentismo. Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Límite. Estableceremos el límite de horas para considerar un turno.

Turnos no disponible

Se añade esta restricción al trabajador/a/todos los trabajadores que solo puede hacer un tipo de turno por algún acuerdo/convenio/contrato que tiene con la empresa. Al planificar el cuadrante, el sistema muestra una advertencia informando que ese trabajador/a/todos los trabajadores solo puede hacer un tipo de turno específico, no el tipo de turno que se está planificado.

Total de turno con tipo de absentismo

Descarga el número de turnos elegidos en el desplegable, cuando tiene, además, el absentismo total o temporal completo, también elegido en el desplegable.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Turno. Seleccionamos el tipo de turno, creado previamente.
- Absentismo. Seleccionamos el tipo de absentismo, creado previamente.

Turnicidad

El concepto de turnicidad viene a compensar las modificaciones en los horarios, entendiendo como diferencias las horas de diferencia entre los inicio. Para definir el concepto de turnicidad hay que informar tres variables:

- Los cambios necesarios para que se tenga en cuenta la turnicidad.
- Horas mínimas entre turnos, es decir, la diferencia entre las horas de inicio de los turnos planificados entre las fechas de referencia, de manera que se abone en una sola vez (en la fecha final del periodo de referencia) los trabajadores tienen turnos de mañana y de tarde planificados.
- Horas máximas entre turnos, es decir, la diferencia máxima entre las horas de inicio de los turnos planificados entre las fechas de referencia, de manera que se abone en una sola vez (en la fecha final del periodo de referencia) los trabajadores tienen turnos de mañana y de tarde planificados, excluyendo los nocturnos.
- No se tiene en cuenta como cambio de turno los realizados entre los trabajadores a través del flujo establecido en cada equipo. Por son baja acción del trabajador y no forzados en planificación por la empresa.
- Existe la posibilidad de tener en cuenta los turnos que le hubiera correspondido trabajar, en vez de los turnos de vacaciones informados en el cuadrante, siempre que la petición se realice o se genere (a través de una integración con otras herramientas) en aTurnos. En Historial de Peticiones tiene que estar visible la petición de vacaciones a la que hacemos referencia.

Ejemplo:

- Cambios necesarios: 4
- Horas mínimas entre turnos: 2
- Horas máximas entre turnos: 10

Se precisan 4 cambios de turno que tenga como mínimo 2 horas de diferencia, es decir, si un turno comienza a las 08:00 de la mañana, se considera un cambio cualquier turno que comience antes de las 06:00 y/o después de las 10:00 de la mañana.

Siempre que exista una diferencia de cómo máximo 10 horas, es decir, todos los turnos que comiencen 10 horas más tarde de otro turno planificado, es decir, cualquier turno que comience después de las 18:00 siguiendo con el ejemplo anterior, no se considera cambio de turno (con independencia de que se considere en el concepto específico de Turnicidad Nocturna)

Turnicidad en el mes anterior

Igual que la anterior pero mira los datos del mes anterior, no solo de este mes.

Turnicidad nocturna

Define los cambios que existen en la planificación de forma secuencial donde pasa de horario diurno a horario nocturno para identificar como se configura la nocturnidad sigue este enlace. Específicamente, mira si existen cambios de horario que entren dentro de la nocturnidad. Es decir, se utiliza para calcular si una persona realiza turno de noche cuando es una persona que realizar turnos de día.

Turnicidad nocturna desde el mes anterior

Mira la turnicidad noctura del mes anterior según ese indica en la turnicidad nocturna del punto anterior.

Cálculo mediante tabla de coeficientes

Recupera valor 1 o cero en función de lo que el trabajador tenga informado en el perfil del trabajador. Se utiliza como activador para el pago de variables.

Número de turnos de noche entre fechas (periodo solicitado)

Descarga un valor 1 cuando se superan los turnos definidos en el concepto.

Número de turnos de noche entre fechas (periodo solicitado más periodo anterior)

Descarga un valor 1 cuando se superan los turnos definidos en el concepto.

Número de turnos con más horas en día

Descarga el número de turnos con más horas en el día seleccionado, es decir, aquellos turnos cuyo final se sitúen en el día seleccionado.

- Contabiliza los turnos con duración computada.
- No contabiliza horas.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos totales. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado. Absentismos temporales parciales. Al no ocupar todo el turno, descargará se cual sea el tipo de absentismo. Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Diario (Domingos, Festivos, Festivos especiales), por seleccionar.
- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categoría. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.

Turnos seguidos de un mismo tipo de turno.

Recupera el número de turnos seguidos desde el día de inicio al fin que se indiquen.
