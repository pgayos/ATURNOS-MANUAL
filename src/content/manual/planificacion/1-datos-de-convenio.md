---
schemaVersion: "1.0"
contentId: planificacion-1-datos-de-convenio
title: Datos de convenio
description: A través de los Datos de Convenio vas a poder configurar el convenio colectivo de aplicación, de forma que en el momento del alta del trabajador se cargarán por defecto en cada uno de ellos. Datos como:.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Datos de convenio
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
  - id: convenio
    label: Convenio
  - id: datos
    label: Datos
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
    - https://manual.aturnos.com/knowledgebase/1-datos-de-convenio/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-datos-de-convenio/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre datos de convenio?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 8
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-datos-de-convenio/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-datos-de-convenio/
  contentHash: ccbad3cb6d93a4a3722b89f746e8e21fe91c77612069969bd4805e99aca63f0c
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

A través de los Datos de Convenio vas a poder configurar el convenio colectivo de aplicación, de forma que en el momento del alta del trabajador se cargarán por defecto en cada uno de ellos. Datos como:.

- Horas año por defecto: número de horas de trabajo anuales en el convenio de aplicación.
- Inicio Nocturnidad: Indica la hora de inicio del periodo de nocturnidad. Tanto las estadísticas de nocturnidad, como los conceptos de nómina se calcularán con este dato de inicio.
- Fin nocturnidad: Indica la hora fin del periodo de nocturnidad. Tanto las estadísticas de nocturnidad, como los conceptos de nómina con este dato de fin.
- Horas por día: Horas de trabajo estimadas de convenio por día. Es un dato que ayuda a planificar. Por restricciones se puede comprobar el cumplimiento de estas horas en el momento de realizar la planificación. (Ver restricción: No superar las horas diarias del trabajador ).
- Horas semanales por defecto: Horas de trabajo estimadas de convenio por semana. Es un dato que ayuda a planificar. Por restricciones se puede comprobar el cumplimiento de estas horas en el momento de realizar la planificación (Ver restricción: No superar las horas semanales del trabajador ). Es de utilidad para empresas donde el control del límite de horas se hace por semanas.
- Horas mensuales por defecto: Horas de trabajo estimadas en el convenio por semana. Es un dato que ayuda a planificar. Por restricciones se puede comprobar el cumplimiento de estas horas en el momento de realizar la planificación. (Ver restricción: No superar las horas mensuales del trabajador ). Existen empresas donde el control del límite de horas se hace por mes.
- Hora extra anual: Horas extras de trabajo por año de convenio. Son esas horas que no forman parte del horario efectivo, pero que se asignan de forma extraordinaria. Es una obligación legal el control de las horas extraordinarias. Para facilitar un control de las mismas, puede crear restricción que alertará si se sobrepasan (Ver restricción: No superar las horas extra anuales del trabajador ).
- Consideración de festivos según convenio: Las opciones admitidas son: Sábados, domingos y festivos indicados Domingos y festivos indicados Solo los festivos indicados
- La selección de una opción u otra tiene efectos: En el cómputo de las horas festivas, nocturnas festivas, jornadas festivas, etc. En el primer caso, todas las horas en sábado, domingo o festivo, así como los turnos planificados tendrán la consideración de festivos. En la exportación a nóminas. En el cálculo estimado de horas a realizar. Ver Festivos.
- Patrón por defecto: En el caso de que la planificación de todos los trabajadores que componen el equipo sea la misma, como ocurre en empresas donde la jornada es igual todas las semanas o meses, se puede definir un patrón por defecto, de manera que en el mismo momento en que el trabajador sea dado de alta, se le planifica con el patrón indicado. Aconsejable para Servicios Centrales o de Administración. Se precisa crear un patrón. Ver Patrones de turnos
- Porcentaje de horas complementarias por defecto: Porcentaje de horas complementarias a realizar por los trabajadores con contrato inferior al 100% de la jornada. El porcentaje se calcula sobre las horas contrato año por defecto, por ejemplo, un trabajador puede estar al 50% de la jornada, si tiene un convenio de 1800 horas tiene que realizar 900 horas. Si el porcentaje es del 10% de complementarias, podría hacer 90 horas más, que tendrán la consideración de complementarias. El máximo siempre será el anual al 100%. Es decir, la suma de las horas de contrato anual más las horas complementarias no pueden ser superior al 100% de la jornada anual establecida en el convenio.
- Inicio año fiscal: En aTurnos puedes informar día y mes de inicio del año fiscal que tiene la empresa. Este año financiero no tiene necesariamente que coincidir con el año natural del 01 de enero al 31 de diciembre. El dato informado (día/mes) será el inicio del período de 12 meses que tomará como referencia el sistema para generar información estadística y/o reportes que servirán para hacer cálculos relacionados con la contabilidad fiscal de la empresa (presentación de declaraciones, pago de impuestos, etc.). El período del año fiscal que se defina (al informar el Inicio del año fiscal) determinará o afectará las estadísticas y restricciones que se soliciten, ya que la información de horas y/o variables por año las tomará en cuenta según el periodo del año fiscal indicado. Inicialmente, el sistema tendrá informado por defecto el inicio en 01/01 (según año natural).
- Inicio año vacacional: en caso de que el año vacacional no sea igual al año natural (Enero a Diciembre), en este campo se debe indicar el día y mes en el que iniciará el año vacacional establecido por convenio, es decir, inicio del periodo de 12 meses dentro de los cuales el trabajador debe disfrutar sus vacaciones. Los reportes que se generen en relación a vacaciones anuales se realizarán tomando en cuenta este dato informado. ej., si se informa el 01/04 (01 de abril) el sistema tomará en cuenta para reportes y estadísticas los datos relacionados a vacaciones que se generen en el período de 12 meses desde el 01/04 hasta el 31/03 del siguiente año.

### Cálculo estimado de horas

La definición de estos valores determinan el número de horas a trabajar al mes, atendiendo a:

- El modo de cálculo, es decir, si el cálculo se realiza por los días del mes (los naturales) o los días en nómina (30 días en todo caso)
- Descontar festivos en el cálculo de contrato. Valor que utilizamos para estimar las horas contrato (Ver glosario). Ej. “Días en nómina”: hará la estimación en base a 360 días/año, y “Días del mes”: en base a 365/366 días según el año.
- Computar las horas en el día de inicio, es decir, si las horas de los turnos nocturnos de final de mes computan en el mes que terminan o por tramos. Por ejemplo, turno de noche de 22:00 a 08:00 el día 31/12, si se selecciona que computa al SI computa al inicio, las 10 horas computarán en el año en que termina, en caso contrario, 2 horas computaran en el año que terminan y 8 en el que comienza.
- Considerar % jornada en cálculo de horas días, semana y mes.
- El descanso semanal medio, es decir, los días que no debe trabajar y por tanto se restan de los días a prestar servicios cada mes. Los valores admitidos son: 0, no descansa ningún día a la semana 0,5 días de descanso semanal medio 1 día de descanso semanal medio 2 días de descanso semanal medio 3 días de descanso semanal medio 4 días de descanso semanal medio 5 días de descanso semanal medio 6 días de descanso semanal medio Los descansos planificados, es decir, cuando se planifican expresamente como de descanso con turnos de 0 horas (como el turno X no disponible)
- Trabaja los festivos, atendiendo a la consideración de festivos antes indicada. Los valores admitidos son: Si, trabaja los festivos, es decir, no se descuentan los festivos para el cálculo de los días que debe trabajar un determinado mes. No trabaja los festivos, es decir, se descuentan los festivos para el cálculo de los días que debe trabajar un determinado mes. Solo los festivos planificados, es decir, no se descuentan los festivos trabajados para el cálculo de los días que debe trabajar un determinado mes. Ejemplo para el cálculo de los días a trabajar un mes de enero: Días del mes: 31 Días de descanso semanal medio: 1, por tanto los días de trabajo son: 31/7=4,42 Días del mes 31 menos días de descanso semanal 4,42, los días a trabajar son 26,58. No trabaja los festivos, que son solo los indicados, es decir, el día 1 de enero y el 6 de enero 26,58 (días del mes menos descanso semanal) – 2 (festivos), los días a trabajar en el mes de enero serían 24,58. El resultado se multiplica por las horas estimadas de trabajo al día y el resultado son las horas de trabajo al mes. El cálculo de las horas estimadas al día lo puedes ver siguiendo el siguiente enlace Cálculo estimado de horas
- Transformar en horas las vacaciones pendientes: Las vacaciones no planificadas se transforman en horas a trabajar, como ocurre en los contratos de corta duración, cuando las vacaciones no se van a disfrutar. Más información en “Horas pendientes pendientes”. Se tienen en cuenta en el balance de horas, con los siguientes efectos: Valor informado: Si. Las horas pendientes de vacaciones se suman a las horas de contrato del mes, siendo el total las horas a realizar en el mes (horas contrato mes + horas vacaciones pendientes. Valor informado: No. El prorrateo de los días de vacaciones al mes se restan de los días a trabajar, siguiendo el ejemplo anterior, en enero habría que restar, 2, 54 días. Es decir, como el trabajador tiene que disfrutar de vacaciones y no están planificadas, la aplicación resta de los días a trabajar al mes, las vacaciones que le corresponden cada mes.
- Cálculo de las horas estimadas teniendo en cuenta vacaciones y festivos. Para transformar en horas las vacaciones pendientes existen dos posibilidades: seleccionando SI, se calcula [(1780 horas anuales) / (365 días del año – 30 días de vacaciones – 14 festivos)]. Seleccionando NO, se calcula (1780 horas anuales / 365 días del año).
- Las horas restantes de vacaciones se calculan con respecto a la media de todos los periodos

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Datos de convenio](/media/manual/datos-de-convenio-3c06864c4e.webp)

![Cálculo estimado de horas](/media/manual/calculo-estimado-de-horas-625dbd6998.webp)
