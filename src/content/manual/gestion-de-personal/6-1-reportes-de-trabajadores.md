---
schemaVersion: "1.0"
contentId: gestion-de-personal-6-1-reportes-de-trabajadores
title: Reportes de trabajadores
description: "Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas."
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Reportes de trabajadores
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: reportes
    label: Reportes
  - id: trabajadores
    label: Trabajadores
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
    - https://manual.aturnos.com/knowledgebase/6-1-reportes-por-trabajadores/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-1-reportes-por-trabajadores/
ai:
  answerableQuestions:
    - ¿Cómo puedo reportes de trabajadores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 14
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-1-reportes-por-trabajadores/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-1-reportes-por-trabajadores/
  contentHash: 57780adacf54f24ca322f0c5eb60c806db5ecc0fde2f2050151f2677f4c9a385
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas.

A través de este apartado te permitirá obtener información estadística de los trabajadores, sobre diferentes variables, como lo son: Turnos, Horas, Vacaciones, Horas Festivas, Horas Nocturnas, Absentismos (Jornadas y/u Horas), Horas Extra, conceptos de nómina, etc.

Podrás crear reportes desglosados por trabajadores y agrupándolo por el periodo que definas. Debes acceder desde Menú → Estadísticas → Reportes de trabajador y los reportes que guardes podrás recuperarlos en este mismo menú.

### Barra superior

Una vez has procedido a acceder a la herramienta de Reportes, te aparecerá la tabla donde debes seleccionar que variables y filtros quieres obtener. Los campos a definir son los siguientes:

1. Desde/hasta: Elige el período a consultar.
2. Variable: Haciendo clic en el campo en blanco se desplegaran todas las opciones o variables que tiene la tabla de reportes. Elige la(s) variable(s) que deseas ver o comparar, una, dos o más, según requieras.
3. Período: Este campo despliega opciones para seleccionar cómo quieres que aparezca la información en el reporte, entre las que están: Periodo: Si quieres que el reporte estadístico te muestre el mismo período que colocaste en el campo Desde/hasta. Día: Te muestra la información comparativa día a día según el período reflejado en Desde/hasta. Mes: Muestra los datos comparativos por mes o meses contenidos dentro del período solicitado. Año: Muestra la información comparativa anual según el período reflejado en Desde/hasta.
4. Filtro: Si haces clic en el embudo, se nos abrirá un menú lateral en la izquierda. Es en este, donde puedes filtrar la información según tus necesidades de análisis. Por Nombre/Email/ID Empleado, la Experiencia que tienen (si se le ha asignado alguna en su perfil), las Localizaciones (si han sido registradas en el equipo), las Categorías (si cada trabajador tiene aplicada una categoría) y la Especialidad/Rol (si el trabajador tiene alguna habilidad o rol específico al que darle valor a la hora de poderlo encontrar en alguna búsqueda).
5. Cuadrante: En este campo debes elegir la base de datos que quieres utilizar para tu reporte. En este caso, tomar datos desde el “Cuadrante” o tomarlos del “Cuadrante Borrador”.

1. Guardar: Permite guardar el reporte para acceder directamente a los datos desde el menú de reportes. Create reportes a medida con los datos que necesitas y accede directamente a ellos. Cargar: cualquier reporte que haya sido guardado previamente se puede cargar desde esta acción para que vuelva a ser visualizado.

Además de poder guardar el reporte, se puede configurar para que se genere automáticamente y se envíe un enlace de descarga por correo, a través de la opción de ‘Envío automático’.

Para generar automáticamente el reporte, se debe indicar:

- Frecuencia. Si se quiere enviar el reporte cada: Día. Semana. Mes. Desfase. Este dato nos informa si queremos consultar el informe a pasado, presente o futuro. Se tiene en cuenta la vista con la cual se ha guardado el reporte, tanto de la fecha, como la unidad de tiempo (día, mes, periodo y año).

Si se indica un valor negativo, consultará desde la fecha de envío hasta la unidad de tiempo con la que se guardó hacia atrás. Si el envío es en abril y se indica -1, se generará un reporte de marzo. Si se indica 0, consultará desde la fecha de envío hasta la unidad de tiempo con la que se guardó. Si es en abril, se generará abril. Si se indica un valor positivo, consultará desde la fecha de envío hasta la unidad de tiempo con la que se guardó hacia adelante.

Si el envío es en abril y se indica 1, se generará un reporte de mayo.

- Fecha de inicio. A partir de qué fecha se necesitan que se generen y envíen los reportes para su descarga.

Todos los reportes guardados, desde la opción de ‘ Cargar ‘, pueden ser consultados, pero también configurados para enviarlos automáticamente, así como editar la configuración de los que ya se envían.

Cuando un reporte se envía automáticamente, el administrador que lo genera, recibirá un email con un enlace de descarga. El reporte se descargará en un archivo Excel (XLSX) o CSV, según la configuración de los reportes.

1. Cargar: consulta los datos solicitados, mostrando un resultado según las variables, periodo, fechas, filtro y cuadrante.

Cada reporte puede tener una representación gráfica. Por ejemplo, muestra los datos de días libres de los trabajadores, dentro de un mes agrupado por días y la tabla muestra el detalle de dos meses agrupado por meses.

### Ocultar y acciones en la tabla

En la esquina superior derecha de la tabla, encontrarás dos botones desde donde podrás realizar las siguientes acciones:

Ocultar: te mostrará o eliminará aquellas columnas que visualices en tu Tabla y a su vez, en la representación mediante el Gráfico.

Descargar: opción de poder exportar los datos para llevarlos a otra herramienta, se abrirá una pequeña ventana indicando las posibilidades que tienes:

- Copiar: Puedes pegar estos datos en un documento Excel que tienes preparado previamente.
- CSV: En este botón activas la posibilidad de exportar a un documento Excel.csv (delimitado por comas).
- Excel: También se pueden exportar a un Libro de Excel normal.
- PDF: Se exporta a un archivo PDF para poder ser adjuntado a un informe.
- PDF A3: Para mayor utilidad para las empresas, en esta opción se enviará a un archivo PDF en formato A3, común a la hora de realizar informes o reportes.

### Listado de variables del reporte

El administrador puede configurar el reporte comparativo con tantas variables como requiera visualizar por cada trabajador del equipo. Esta consulta puede ser con vistas diarias, mensuales, anuales o en un periodo de tiempo previamente seleccionado. Entre estas variables se encuentran:

Variables de Planificación:

- Turnos: Total de turnos en el periodo seleccionado. Incluye los turnos con cualquier tipo de absentismo. No incluye ningún tipo de horas. Por ejemplo, si en un mismo día tiene un turno de mañana y otro de tarde, contará dos turnos.
- Jornadas: Las jornadas en aTurnos se utilizan para identificar si un trabajador ha realizado una unidad completa de trabajo en un día, realizando un mínimo y un máximo de horas según configuración. Total de jornadas con turnos y/u horas en el periodo seleccionado. No incluye las jornadas planificadas con cualquier tipo de absentismo total. Las jornadas con absentismo temporal si se incluyen en el total.
- Jornadas computadas: Total de jornadas cuyos turnos incluyen horas que computan, en el periodo de fechas seleccionado. Además, también computan las horas del tipo de horas normales (no horas tipo extras, ni horas complementarias) en base al coeficiente que se tiene informado el tipo de hora. No se incluyen las jornadas planificadas con cualquier tipo de absentismo total. Sin embargo, si que se incluyen las jornadas con absentismos temporales. El número de horas que constituyen o completan una jornada lo configura el administrador del equipo, en la configuración general del equipo.No incluye las jornadas planificadas con cualquier tipo de absentismo total. Las jornadas con absentismo temporal si se incluyen en el total.
- Vacaciones: Total de vacaciones planificadas en el periodo seleccionado. Las vacaciones son tipos de turnos configurados como vacaciones, como por ejemplo “V” de vacaciones. Ver más en vacaciones.
- Días libres: Total de días sin planificación (sin turnos, ni horas, ni vacaciones) en el periodo seleccionado.
- Horas planificadas: Todas las horas de los turnos y horas informadas en el cuadrante. Suma de horas de la duración total de los turnos más las horas de todos los tipos y subtipos de horas (normal, extras y complementarias). Se excluyen las horas asociadas a los absentismos no justificados.
- Horas computadas: Total de las horas computadas de los turnos y horas planificadas (no incluye horas extras ni complementarias) en cuadrante. Se tiene en cuenta la duración computada del turno y el coeficiente del tipo de horas que se planifica. Se excluyen las horas de los turnos y las horas afectadas por absentismos no justificados. Estas horas computadas son las que se comparan con las horas contrato del trabajador para poder obtener el balance de horas.
- Horas festivas: Total de las horas de los turnos y horas planificadas en días festivos, en el periodo seleccionado. Incluye las horas normales, extras y complementarias. Incluye las horas asociadas a un tipo de absentismo justificado (tiempo productivo). No incluye las horas asociadas a un tipo de absentismos justificado (no productivo para plus de festivos y nocturnidad) ni los absentismos de tipo no justificados.
- Hora extra: Total de las horas extras más las subtipos de horas que se crean con la configuración tipo extra. No suman en las horas computadas. Estas horas se incluyen en la variable de este informe horas planificadas.
- Hora complementaria: Total de las horas complementarias más las subtipos de horas que se crean con la configuración tipo complementarias. No suman en las horas computadas. Estas horas se incluyen en la variable de este informe horas planificadas.
- Hora normal (fuera de turno): Total de las horas normales (fuera de turno) más las subtipos de horas que se crean con la configuración tipo normal. Si suman en las horas computadas. Estas horas se incluyen en la variable de este informe horas planificadas.
- Hora nocturnas: Total de las horas de los turnos y horas planificadas en periodo nocturno en el periodo seleccionado. Incluye las horas normales, complementarias y extraordinarias. Incluye las horas asociadas a un tipo de absentismo justificado (tiempo productivo). No incluye las horas asociadas a un tipo de absentismos justificado (no productivo para plus de festivos y nocturnidad) ni los absentismos de tipo no justificados.
- Hora contrato al mes: Total de horas contrato estimadas al mes (resultado de multiplicar los días contrato por las horas estimadas a trabajar al día). Esta variable solo se puede calcular si la consulta es mensual.
- Horas por Ajustes: Total de las horas ajustadas en el periodo seleccionado. Las horas ajustadas son las horas de incremento o decremento que se añaden a un trabajador en el periodo de contrato, pero que no están reflejadas en un día determinado. Por ejemplo, cuando se mueven exceso o defecto de horas de un año al siguiente.
- Balance estimado: Es el balance de horas en el periodo seleccionado. Si seleccionamos un periodo de un mes, los valores son el resultado de restar a las horas de contrato estimadas en cada mes (la suma de las horas computadas del mismo mes), más las horas ajustadas del mes. Esta variable se puede calcular si la consulta es mensual y/o anual

Variables de absentismos:

- Turnos con absentismo: Total de tipos de turnos con absentismos planificados en el periodo seleccionado. Por ejemplo, si en un día hay 3 tipos de turnos planificados y tienen asociados un absentismos en cada uno de ellos, el valor de esta variable será de 3. Solo Incluye los turnos asociados con absentismos totales. Los absentismos temporales no se incluyen.
- Horas absentismos (Todos): Total de las horas de absentismo justificado (tiempo productivo), justificados no productivos y no justificados en el periodo seleccionado. Incluyen los absentismo totales y temporales.
- Horas absentismos justificados productivos: Total de las horas de absentismo justificado (tiempo productivo) en el periodo seleccionado. Incluyen los absentismo totales y temporales.
- Horas absentismos justificados no productivos: Total de las horas de absentismo justificado (No es considerado productivo, afecta a la nocturnidad y festivos) en el periodo seleccionado. Incluyen los absentismo totales y temporales.
- Horas absentismos no justificados: Total de las horas de absentismo no justificado en el periodo seleccionado. Incluyen los absentismo totales y temporales.
- Horas absentismos por cada tipo de absentismo creado: Total de las horas de absentismo de este tipo en el periodo seleccionado. Incluyen los absentismo totales y temporales.

Consulta los tipos de absentismo en aTurnos en este enlace: Absentismos.

Variables datos personalizados: Muestra los datos personalizados seleccionados, siempre y cuando se seleccione otro tipo de variable. Por ejemplo si queremos saber la información de algún dato personalizado es necesario seleccionar otro tipo de variable como puede ser horas computadas. Si no se selecciona una variable, que no sea de datos personalizados, no se mostrarán los datos personalizados.

Variables control horario:

- Horas presenciales: Total de las horas desde el momento de la acción del fichaje de entrada hasta el fichaje de salida, en el periodo seleccionado.
- Horas presenciales computables: Total de las horas computadas que coinciden con las horas presenciales del trabajador, en el periodo seleccionado. Se excluyen las horas asociadas a los absentismos no justificados.
- Horas presenciales no computables: Total de las horas que no computan y que coinciden con las horas presenciales del trabajador. Las horas que no computan son las de tipo extras y complementarias, las horas de la duración total de los tipos de turnos en la que la duración computada es 0.
- Horas trabajadas control de presencia: Total de las horas presenciales menos el tiempo de descanso del turno planificado y menos el tiempo informado en la configuración de descansos en la ficha del trabajador, en el periodo seleccionado.
- Horas computadas control de presencia: Total de las horas computadas del trabajador en el periodo seleccionado en el control de presencia. Se excluyen las horas asociadas a cualquier absentismos justificados y no justificado que esté asociado a horas computadas. Se suma las horas de los absentismos temporales de absentismo solo justificados, los no justificados no se incluyen.
- Fichajes sin cerrar: Total de fichajes sin cerrar del trabajador en el periodo seleccionado.
- Solicitudes de fichajes pendientes: Total de solicitudes de fichajes pendientes por gestionar el administrador por cada trabajador en el periodo seleccionado
- Balance presencia/contrato: es el balance entre las horas computadas presenciales menos las horas contrato.
- Balance presencia/planificadas: es el balance de horas entre las horas planificadas (computadas y no computadas) y las horas presenciales en la jornada laboral dentro del módulo del control de presencia.
- Descanso programado: Tiempo descanso que le corresponde al trabajador según la configuración del descanso del turno planificado. El descanso de la configuración y del perfil no se considera descanso programado porque no está planificado en el turno.
- Descanso realizado: Tiempo de descanso realizado en toda la jornada. Se consideran descansos los tramos de tiempo no trabajados dentro de una jornada completa. Se tiene en cuenta el tiempo máximo de descanso en la configuración del Control de Presencia para controlar máximos de tiempo.
- Horas fichadas dentro de turno
- Horario fichado (días)
- Horas computadas (Timercard): Total de horas computadas de los turnos (tomando su duración computada). Las horas extras y complementarias no se tienen en cuenta.
- Horas computadas absentismo (Timecard): Total de horas de absentismo que corresponden con turnos que computan (tomando su duración computada). No se tienen en cuenta los absentismos que afectan a horas extras y complementarias.

Variable Calidad del fichaje

- Total fichajes: Total de fichajes realizados por un trabajador en el periodo seleccionado. Engloba todos los tipos de fichajes existentes: petición, automáticos y manuales.
- Total fichajes por petición: Total de fichajes solicitados por petición del trabajador en el periodo seleccionado. Los fichajes por peticiones puedes ser aprobados por el administrador o aprobados automáticamente según la configuración del control de presencia.
- Total fichajes automáticos: Total de fichajes realizados por el trabajador o importados desde un sistema externo (como por ejemplo los dispositivos biométricos de huella, tarjeta o reconocimiento facial) en el periodo seleccionado.
- Total fichajes manuales: Total de fichajes solicitados por petición de modificación del trabajador en el periodo seleccionado. Los fichajes por peticiones puedes ser aprobados por el administrador o aprobados automáticamente según la configuración del control de presencia.
- Fichajes olvidados este día. Actualizar fichajes sin cerrar: Total de fichajes no cerrados (impares). Es decir, marcajes de entrada sin salida, o viceversa. Para el cómputo correcto del tiempo de trabajo, es importante que los fichajes estén cerrados.
- Porcentaje de fichajes no automáticos: Es el porcentaje de fichajes por petición o modificados (sin tener en cuenta modificaciones de cambio de dirección: entrada/salida) respecto al total de fichajes realizados en el periodo seleccionado.
- Descanso no fichado descontado automáticamente: Según la configuración de descansos establecida en el control de presencia, si se habilita la opción de que los descansos no fichados se descuentan automáticamente, esta variable nos informa el total de veces que se ha producido esta situación en el periodo seleccionado.
- Descanso automático anulado por empleado: Igual que la variable anterior, ésta solo se contabiliza si la configuración de descansos del control de presencia implica que al no ficharse éstos, son descontados automáticamente. Si un trabajador anula esta resta automática, el descanso se computa como tiempo de trabajo, y se contabiliza en esta variable como descanso automático anulado.
- Fichaje solicitado de la deducción automático: Siguiendo el hilo del caso anterior, si el trabajador no anula el descanso, sino que solicita los fichajes del descanso para que éste sea contabilizado correctamente, entonces se contabiliza en esta variable como fichajes solicitados en base a la deducción automática del descanso. Con esto se pueden saber los casos que se han fichado los descansos después de la deducción automática de éstos.
- Total de warnings: Total de alertas activas en el periodo seleccionado. Una alerta por ejemplo puede ser: Fichaje coincide con vacaciones.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Barra superior](/media/manual/barra-superior-f3bd99340b.webp)

![Barra superior](/media/manual/barra-superior-3d3147d38a.webp)

![Barra superior](/media/manual/barra-superior-ce53fa76c9.webp)

![Barra superior](/media/manual/barra-superior-0f74fb22fc.webp)

![Barra superior](/media/manual/barra-superior-ca91a9f6b1.webp)

![Barra superior](/media/manual/barra-superior-ac9a75a46b.webp)

![Barra superior](/media/manual/barra-superior-2aa5d6d73a.webp)

![Barra superior](/media/manual/barra-superior-61585fbb59.webp)

![Barra superior](/media/manual/barra-superior-df747c21ce.png)
