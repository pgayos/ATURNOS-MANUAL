---
schemaVersion: "1.0"
contentId: "planificacion-conceptos-tipo-1-4-conceptos-asociados-a-las-jornadas"
title: "Conceptos tipo 1.4: Conceptos asociados a las jornadas"
description: "Información sobre conceptos tipo 1.4: Conceptos asociados a las jornadas, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Conceptos tipo 1.4: Conceptos asociados a las jornadas"
audience:
  - role: "Administrador"
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
  - id: "jornadas"
    label: "Jornadas"
  - id: "tipo"
    label: "Tipo"
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
    - "https://manual.aturnos.com/knowledgebase/2-1-4-conceptos-asociados-a-las-jornadas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-1-4-conceptos-asociados-a-las-jornadas/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre conceptos tipo 1.4: Conceptos asociados a las jornadas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 13
featured: false
migration:
  sourceCount: 1
  contentHash: "4356254f712354ecd30997f0ead7399643a74fdb114be563479989a7492289e0"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre conceptos tipo 1.4: Conceptos asociados a las jornadas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Contabilizan el número de jornadas en los que trabajador tiene turnos y/u horas según el criterio de cada concepto. Podemos configurar cada uno de los conceptos diferenciando en festivos, festivos especiales, sábados, domingos, etc. Además, se pueden distinguir las distintas localizaciones y categorías pudiendo generar distintos conceptos en función de los mismos.

Calcula el número de jornadas entre las fechas que se indiquen atendiendo a la configuración establecida (Ver en el Manual Configuración de Jornadas ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.
- Incluir peticiones de vacaciones. Al seleccionar SI, el concepto descargará, si le corresponde, siempre que tenga una petición de vacaciones aprobadas. No aplica si se informa directamente un turno V en el cuadrante.

Calcula el número de jornadas nocturnas entre las fechas que se indiquen atendiendo a la configuración establecida (Ver en el Manual Configuración de Jornadas y Periodo Nocturno ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.
- Incluir peticiones de vacaciones. Al seleccionar SI, el concepto descargará, si le corresponde, siempre que tenga una petición de vacaciones aprobadas. No aplica si se informa directamente un turno V en el cuadrante.

Calcula el número de jornadas entre las fechas que se indiquen atendiendo a la configuración establecida (Ver en el Manual Configuración de Jornadas ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- Tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- Tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.
- Incluir peticiones de vacaciones. Al seleccionar SI, el concepto descargará, si le corresponde, siempre que tenga una petición de vacaciones aprobadas. No aplica si se informa directamente un turno V en el cuadrante.

Calcula el número de jornadas nocturnas entre las fechas que se indiquen atendiendo a la configuración establecida (Ver en el Manual Configuración de Jornadas y Periodo Nocturno ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- Tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- Tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.
- Incluir peticiones de vacaciones. Al seleccionar SI, el concepto descargará, si le corresponde, siempre que tenga una petición de vacaciones aprobadas. No aplica si se informa directamente un turno V en el cuadrante.

Calcula el número de jornadas festivas entre las fechas que se indiquen atendiendo a la configuración establecida (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de jornadas festivas entre las fechas que se indiquen atendiendo a la configuración establecida (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- Tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- Tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de jornadas festivas entre las fechas que se indiquen atendiendo a la configuración establecida (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de jornadas festivas entre las fechas que se indiquen atendiendo a la configuración establecida (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- Tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- Tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de jornadas con más horas en festivo entre las fechas que se indiquen atendiendo a la configuración establecida, suele aplicar a los turnos/horas en periodo nocturno, que comienzan la noche anterior al festivo pero la mayor parte de las horas transcurre en el día festivo. (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de jornadas con más horas en festivo especial entre las fechas que se indiquen atendiendo a la configuración establecida, suele aplicar a los turnos/horas en periodo nocturno, que comienzan la noche anterior al festivo especial pero la mayor parte de las horas transcurre en el día festivo. (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de jornadas con horas en el día anterior al festivo entre las fechas que se indiquen atendiendo a la configuración establecida. (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de jornadas con horas en el día anterior al festivo especial entre las fechas que se indiquen atendiendo a la configuración establecida. (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de jornadas con más horas en el día anterior al festivo entre las fechas que se indiquen atendiendo a la configuración establecida. (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de jornadas con más horas en el día anterior al festivo especial entre las fechas que se indiquen atendiendo a la configuración establecida. (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de horas (en vez de jornadas del concepto Jornadas con más horas en festivo) por las jornadas con más horas en festivo entre las fechas que se indiquen atendiendo a la configuración establecida, suele aplicar a los turnos/horas en periodo nocturno, que comienzan la noche anterior al festivo pero la mayor parte de las horas transcurre en el día festivo. (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.

Calcula el número de jornadas festivas entre las fechas que se indiquen atendiendo a la configuración establecida (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- Tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- Tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.
- Días de la semana: Permite seleccionar los días de la semana, prefestivos, festivos, prefestivos especiales, festivos especiales

Calcula el número de jornadas con más horas en el día festivo entre las fechas que se indiquen atendiendo a la configuración establecida, suele aplicar en los turnos de noche que comienzan en el día anterior al festivo. (Ver en el Manual Configuración de Jornadas y Festivos ).

- Tiene en cuenta las horas de duración total de los turnos.
- Tiene en cuenta las horas normales y las horas personalizadas definidas como normales.
- No tiene en cuenta las horas extras ni las horas personalizadas definidas como extras.
- No tiene en cuenta las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará atendiendo a la configuración de jornadas Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización del turno y/u horas planificadas. Permite marcando el check “Contabilizar el concepto en las localizaciones hijas” contabilizar las horas de las localizaciones hijas de la indicada.
- Localización por defecto del trabajador. Devuelve valor si la localización del turno coincide con la localización por defecto del trabajador.
