---
schemaVersion: "1.0"
contentId: planificacion-conceptos-tipo-1-2-conceptos-asociados-a-horas
title: "Conceptos tipo 1.2: Conceptos asociados a horas"
description: Contabilizan el número de horas que el trabajador tiene planificadas según el criterio de cada concepto.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
intent: "Conceptos tipo 1.2: Conceptos asociados a horas"
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: asociados
    label: Asociados
  - id: conceptos
    label: Conceptos
  - id: horas
    label: Horas
  - id: tipo
    label: Tipo
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
    - https://manual.aturnos.com/knowledgebase/2-1-2-conceptos-asociados-a-las-horas-personalizadas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-1-2-conceptos-asociados-a-las-horas-personalizadas/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre conceptos tipo 1.2: Conceptos asociados a horas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 17
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-1-2-conceptos-asociados-a-las-horas-personalizadas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-1-2-conceptos-asociados-a-las-horas-personalizadas/
  contentHash: a9c95c390ada7d57df7e9f04179ad48e2cf52ecb8970e3f474d4b3c00739cc7a
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre conceptos tipo 1.2: Conceptos asociados a horas, con instrucciones y contexto revisables por el equipo de aTurnos.

Contabilizan el número de horas que el trabajador tiene planificadas según el criterio de cada concepto. Podemos configurar cada uno de los conceptos diferenciando en festivos, festivos especiales, sábados, domingos, etc. Además, se pueden distinguir las distintas localizaciones y categorías pudiendo generar distintos conceptos en función de los mismos.

## Horas

Descarga las horas entrantes en el día elegido si en la Configuración general tenemos la opción de Sí computa en el día de inicio. Descarga las horas en el día natural (00:00 a 24:00) del día elegido, si en la Configuración general tenemos la opción de No computa en el día de inicio.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- No contabiliza las horas extras ni las horas personalizadas definidas como extras.
- No contabiliza las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Diario (Domingos, Festivos, Festivos especiales), por seleccionar.
- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.
- Incluir peticiones de vacaciones. Si clicamos esta opción, el concepto descargará, si le corresponde, aún estando de vacaciones.

## Horas normales

Descarga las horas en el día natural (00:00 a 24:00) del día elegido, independientemente de si en la Configuración general tenemos la opción de No computa en el día de inicio o en Sí.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- No contabiliza las horas extras ni las horas personalizadas definidas como extras.
- No contabiliza las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Diario (Domingos, Festivos, Festivos especiales), por seleccionar.
- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.

## Horas complementarias

Descarga las horas en el día natural (00:00 a 24:00) del día elegido, independientemente de si en la Configuración general tenemos la opción de No computa en el día de inicio o en Sí.

- No contabiliza las horas de duración total de los turnos.
- No contabiliza las horas normales ni las horas personalizadas definidas como normales.
- No contabiliza las horas extras ni las horas personalizadas definidas como extras.
- Contabiliza las horas complementarias y las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Diario (Domingos, Festivos, Festivos especiales), por seleccionar.
- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.

## Horas extra

Descarga las horas en el día natural (00:00 a 24:00) del día elegido, independientemente de si en la Configuración general tenemos la opción de No computa en el día de inicio o en Sí.

- No contabiliza las horas de duración total de los turnos.
- No contabiliza las horas normales ni las horas personalizadas definidas como normales.
- No contabiliza las horas extras ni las horas personalizadas definidas como extras.
- Contabiliza las horas complementarias y las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Diario (Domingos, Festivos, Festivos especiales), por seleccionar.
- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.

## Horas totales+extra+complementarias

Descarga las horas entrantes en el día elegido si en la Configuración general tenemos la opción de Sí computa en el día de inicio. Descarga las horas en el día natural (00:00 a 24:00) del día elegido, si en la Configuración general tenemos la opción de No computa en el día de inicio.

- Contabiliza las horas de duración computada de los turnos.
- Contabiliza las horas normales ni las horas personalizadas definidas como normales.
- Contabiliza las horas extras ni las horas personalizadas definidas como extras.
- Contabiliza las horas complementarias y las horas personalizadas definidas como complementarias.
- Multiplica por el coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Diario (Domingos, Festivos, Festivos especiales), por seleccionar.
- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.

## Horas efectivas anuales

Descarga las horas computadas planificadas más los ajustes de horas del perfil del trabajador, teniendo en cuenta todos los períodos que estén incluidos en el mismo.

## Horas absentismo justificado

Descarga las horas en las que tenemos cualquier tipo de absentismo definido como Absentismo justificado, ya sea productivo o no productivo. Descargará teniendo este absentismo en cualquier evento de la planificación.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.

## Horas absentismo sin justificar

Descarga las horas en las que tenemos cualquier tipo de absentismo definido como Absentismo sin justificar. Descargará teniendo este absentismo en cualquier evento de la planificación.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.

## Horas festivas

Descarga las horas diurnas entrantes en festivo si en la Configuración general tenemos la opción de Sí computa en el día de inicio. Descarga las horas en el día natural (00:00 a 24:00) del festivo, si en la Configuración general tenemos la opción de No computa en el día de inicio.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- No contabiliza las horas extras ni las horas personalizadas definidas como extras.
- No contabiliza las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.
- No computa en el día de inicio. Si marcamos este check, descargará las horas en el día natural (00:00 a 24:00) del festivo, independientemente de la configuración del equipo.

## Horas festivas (incluye complementarias y extras)

Descarga las horas diurnas entrantes en festivo si en la Configuración general tenemos la opción de Sí computa en el día de inicio. Descarga las horas en el día natural (00:00 a 24:00) del festivo, si en la Configuración general tenemos la opción de No computa en el día de inicio.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- Contabiliza las horas extras y las horas personalizadas definidas como extras.
- Contabiliza las horas complementarias y las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.
- No computa en el día de inicio. Si marcamos este check, descargará las horas en el día natural (00:00 a 24:00) del festivo, independientemente de la configuración del equipo.

## Horas festivas especiales

Descarga las horas diurnas entrantes en festivo especial si en la Configuración general tenemos la opción de Sí computa en el día de inicio. Descarga las horas en el día natural (00:00 a 24:00) del festivo especial, si en la Configuración general tenemos la opción de No computa en el día de inicio.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- No contabiliza las horas extras ni las horas personalizadas definidas como extras.
- No contabiliza las horas complementarias ni las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.
- No computa en el día de inicio. Si marcamos este check, descargará las horas en el día natural (00:00 a 24:00) del festivo, independientemente de la configuración del equipo.

## Horas festivas especiales (incluye complementarias y extras)

Descarga las horas diurnas entrantes en festivo especial si en la Configuración general tenemos la opción de Sí computa en el día de inicio. Descarga las horas en el día natural (00:00 a 24:00) del festivo especial, si en la Configuración general tenemos la opción de No computa en el día de inicio.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- Contabiliza las horas extras y las horas personalizadas definidas como extras.
- Contabiliza las horas complementarias y las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.

## Horas pre-festivas

Descarga las horas diurnas entrantes en pre-festivo.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- No contabiliza las horas extras y las horas personalizadas definidas como extras.
- No contabiliza las horas complementarias y las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.

## Horas pre-festivas especiales

Descarga las horas diurnas entrantes en pre-festivo especial.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- No contabiliza las horas extras y las horas personalizadas definidas como extras.
- No contabiliza las horas complementarias y las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.

## Horas nocturnidad

Descarga las horas en horario nocturno entrantes en el día si en la Configuración general tenemos la opción de Sí computa en el día de inicio. Descarga las horas nocturnas en el día natural (00:00 a 24:00), si en la Configuración general tenemos la opción de No computa en el día de inicio.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- No contabiliza las horas extras y las horas personalizadas definidas como extras.
- No contabiliza las horas complementarias y las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Categorías. Podemos utilizar este concepto para cualquiera de las categorías de los trabajadores previamente creadas.
- Incluir peticiones de vacaciones. Si clicamos esta opción, el concepto descargará, si le corresponde, aún estando de vacaciones.

## Horas nocturnidad (incluye complementarias y extras)

Descarga las horas en horario nocturno entrantes en el día si en la Configuración general tenemos la opción de Sí computa en el día de inicio. Descarga las horas nocturnas en el día natural (00:00 a 24:00), si en la Configuración general tenemos la opción de No computa en el día de inicio.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- Contabiliza las horas extras y las horas personalizadas definidas como extras.
- Contabiliza las horas complementarias y las horas personalizadas definidas como complementarias.
- Es independientemente al coeficiente de cada tipo de hora personalizada.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.

Filtros:

- Localización. Podemos utilizar este concepto para cualquiera de las localizaciones previamente creadas.
- Incluir peticiones de vacaciones. Si clicamos esta opción, el concepto descargará, si le corresponde, aún estando de vacaciones.

## Horas en la franja horaria (hora y día de la semana) (en el día de inicio de la franja)

Descarga las horas de en la franja definida independientemente del cómputo en el día de inicio de la Configuración general.

- Contabiliza las horas de duración total de los turnos.
- Contabiliza las horas normales y las horas personalizadas definidas como normales.
- Contabiliza las horas extras y las horas personalizadas definidas como extras, si se configura en las opciones.
- Contabiliza las horas complementarias y las horas personalizadas definidas como complementarias, si se configura en las opciones.
- Es independientemente al coeficiente de cada tipo de hora personalizada. si se configura en las opciones.
- En cuanto a los absentismos, el funcionamiento de este concepto será: Absentismos temporales parciales. Descargará aun teniendo un absentismo justificado productivo, pero si el absentismo es justificado no productivo o no justificado, sólo descargará aquellas horas en las que no hay absentismo Absentismos temporales completos. Descarga aun teniendo un absentismo justificado productivo, pero no lo hará si el absentismo es justificado no productivo o no justificado.
- Filtros: Localización. Podemos elegir las localizaciones en las que este concepto va a descargar. Por defecto: Todas las localizaciones. Todas excepto la localización seleccionada. Si tenemos marcada esta casilla, el concepto descargará las horas de todas las localizaciones excepto la seleccionada. Por defecto: No. Contabilizar el concepto en las localizaciones hijas. Si tenemos marcada esta casilla, el concepto descargará las horas de la localización seleccionada y de todas sus localizaciones hijas. Por defecto: No. Localización (por defecto) del trabajador. Podemos elegir las localizaciones por defecto del trabajador en las que este concepto va a descargar. Por defecto: Todas las localizaciones. Franja horaria. Debemos elegir la hora de inicio y el día de la semana de inicio. También tendremos que elegir la hora de fin y el día de la semana de fin. Con este filtro definiremos la franja en la que va a descargar el concepto sabiendo que todos los datos que descargue lo harán en el día de inicio de la franja. Si elegimos de Lunes a Miércoles, descargará el Lunes todas las horas entre la hora de inicio del Lunes al Miércoles. Si elegimos festivo o festivo especial como día de inicio, el día de fin sólo podrá elegirse el post-festivo o post-festivo especial. Categoría. Podemos elegir la categoría del trabajador en la que este concepto va a descargar. Por defecto: Todas las categorías. Incluir peticiones de vacaciones. Si tenemos el filtro en sí, este concepto descargará las horas de la franja definida aun teniendo vacaciones contando siempre el turno anterior a la petición de vacaciones. Por defecto: No. Tipo de turno a excluir. Podemos elegir algún tipo de turno para que las horas de este o estos turnos no descarguen al concepto, aunque tengan horas en la franja. Por defecto: Ninguno. Tipo de hora a excluir: Podemos elegir algún tipo de hora para que las horas de este o estos turnos no descarguen al concepto, aunque tengan horas en la franja. Por defecto: Ninguno. Tener en cuenta complementarias y extras. Si tenemos el filtro en Sí, este concepto descargará las horas de los turnos, horas normales, complementarias, extras y cualquier tipo de hora personalizada. En cambio, si está en No, descargará sólo las horas de duración total de los turnos y las horas normales y personalizadas definidas como normales. Por defecto: No. Multiplicar las horas por su coeficiente: Si tenemos marcada esta casilla, el concepto descargará las horas definidas en el concepto multiplicando por su coeficiente. Si no la tenemos marcada, descargará las horas independientemente de su coeficiente. Por defecto: No.
