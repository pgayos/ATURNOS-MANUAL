---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-1-3-inicio-widgets
title: Inicio (Widgets)
description: En la Pantalla de inicio de aTurnos puedes ver diferentes widgets. Un widget es una pequeña herramienta o aplicación que muestra información de forma visual y permite acceder rápidamente a funciones comunes.
contentType: reference
module: Configuración y cuenta
submodule: Roles y permisos
subtopic: ""
intent: Inicio (Widgets)
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: inicio
    label: Inicio
  - id: widgets
    label: Widgets
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
    - https://manual.aturnos.com/knowledgebase/1-3-inicio-widgets/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-3-inicio-widgets/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre inicio (Widgets)?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 32
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-3-inicio-widgets/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-3-inicio-widgets/
  contentHash: 58c05533c5c6840ae8acb8c00cc57dd474f9fb2684ca5e144548a48cd3304354
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

En la Pantalla de inicio de aTurnos puedes ver diferentes widgets. Un widget es una pequeña herramienta o aplicación que muestra información de forma visual y permite acceder rápidamente a funciones comunes.

### ⚙️ ¿Cómo se configuran los widgets?

Para configurar qué widgets aparecen en la pantalla de inicio, ve a: Administrar → Ajustes → Pantalla de inicio

Desde este menú, puedes decidir qué widgets estarán visibles para los distintos tipos de usuarios. Hay dos configuraciones distintas, según el rol del usuario:

Estos usuarios tienen control total sobre los widgets visibles para sí mismos y para otros roles. Verán dos columnas:

- Columna izquierda 🡐 | Columna derecha 🡒
- Widgets disponibles | Widgets visibles en la pantalla de inicio

Para activar un widget, simplemente arrastra el widget deseado de la columna izquierda a la columna derecha.

En algunos widgets podrás encontrar el siguiente icono:

Este icono nos indica que el widget muestra información de terceros. Por el contrario si activamos un widget que no tiene ese icono, nos mostrará información propia.

También se utiliza el mismo sistema de columnas. Sin embargo, estos usuarios no pueden elegir qué widgets quieren ver.

🔐 En su caso, los superusuarios o administradores totales son quienes configuran los widgets que se mostrarán según el rol del usuario.

### Descripción detallada de los Widgets en aTurnos

Identificado como “Datos Personalizados”, en la configuración de la pantalla de inicio. Muestra los datos personalizados del usuario logueado (ver más sobre datos personalizados). Visible para: Superusuario y Administrador Total.

Muestra un resumen del cuadrante con turnos, horas, absentismos, vacaciones, comentarios, festivos y recursos del usuario. Permite ver otros meses, así como vistas por semana o día. Visible para: Usuarios planificables.

Este widget funciona como canal interno de comunicación del equipo. Permite publicar avisos y comentarios visibles según la configuración del equipo. Está disponible para todos los roles.

Todos los miembros del equipo pueden comentar. Los comentarios no se pueden editar, pero sí borrar: solo el autor puede eliminar su propio mensaje, salvo el Administrador Total, que puede borrar cualquier comentario. Si un Superusuario o Administrador Total publica un comentario, se envía una notificación por correo a los usuarios del equipo (según configuración de notificaciones). Visible para: Todos.

El widget Documentos, permite la visualización en la Pantalla de inicio de los documentos:

1.- Subidos por el propio trabajador como el modelo 100 o un modelo de petición.

2.- Subidos por los administradores totales o superusuarios asociados a un trabajador, como la nómina.

Visible para: Trabajadores.

Permite ver qué peticiones están pendientes pendientes y además, crear nuevas peticiones desde la pantalla de inicio. Visible para: Superusuarios y administradores totales.

Este widget muestra las horas de absentismo y horas extra/complementarias, junto con el número total de absentismos y días de vacaciones del mes actual. También indica información del día en curso. Visible para: superusuarios y los administradores totales.

Muestra noticias y actualizaciones del sistema aTurnos, pero puedes personalizarlo con cualquier otro. Visible para: Todos.

Para mostrar otro blog, edita este campo y haz clic en guardar.

Muestra en un gráfico las demandas entre las fechas que aparecen en el eje horizontal de la gráfica, así como los trabajadores ajustados a esas demandas, en la misma gráfica mostrada como una línea de otro color. Visible para: Administradores.

Muestra cuántos días de vacaciones han sido disfrutados y cuantos quedan disponibles en el año consultado. Visible para: Usuarios planificables.

Muestra la cantidad de horas computadas del cuadrante, en comparación con las horas establecidas por contrato año e informadas en el perfil del trabajador logueado. Visible para: Usuarios planificables.

Muestra la cantidad de horas computadas del cuadrante, en comparación con las horas establecidas por contrato al mes e informadas en el perfil del trabajador logueado. Visible para: Usuarios planificables.

Muestra las horas computadas en cuadrante, a nivel semanal (semana actual), mensual (mes actual) y anual (año actual) del usuario logueado. Visible para: Usuarios planificables.

Muestra cuándo es tu próximo día con turno planificado, indicando tipo de turno y horario. Visible para: Trabajadores y Administradores planificables.

Indica cuántos trabajadores del equipo están planificados hoy con respecto al número de trabajadores total. Además tiene unos botones de acceso directo para ir al cuadrante y planificar. Visible para: Superusuario y todos los adinistradores.

Muestra la suma de las horas computadas de todos los usuarios planificados en el cuadrante (semana, mes y año), comparadas con la suma de las horas contrato de todos los usuarios planificables, indicadas en el perfil de cada trabajador. Visible para: superusuarios, administradores totales, planificadores y validadores.

Identificado como “Máximo de un tipo de turno al año R1.11-R1.15-R1.17″, en la configuración de la pantalla de inicio.

Este widget está relacionado con la restricción 1.11, 1.15 y 1.17, mostrando los saldos que generan estas restricciones.

- 1.11 Máximo de un tipo de turno o absentismo planificado al año

- 1.15 Máximo de horas computadas de un tipo de absentismo al año

- 1.17 Máximo de días planificados de un absentismo al año

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables no pueden acceder porque no tienen horas extras en el cuadrante.

Identificado como “Demandas medias “, en la configuración de la pantalla de inicio.Permite la visualización del valor de la demanda media de cada una de las demandas existentes. Visible para: Administradores.

Muestra documentos que deben leerse y aún no se han descargado. Cuando se descarga para verlos, dejarán de aparecer en este widget. Visible para: Administradores y superusuarios.

Muestra cuántos fichajes no se han cerrado en los turnos realizados con anterioridad. Visible para: Administradores.

Permite la visualización en la pantalla de inicio de los trabajadores, las horas demandadas y el total de horas computadas de cada una de las demandas existentes, en la fecha seleccionada en el widget, así como la posibilidad de navegar entre fechas para ver las demandas asociadas a estas. Visible para: Administradores.

Muestra el listado de especialidades creadas en el equipo, indicando número total de trabajadores que tienen asignada cada una de ellas, comparándolo con el número total de trabajadores del equipo. Visible para: Administradores y el superusuario.

Informa de los trabajadores que, teniendo turno u horas planificadas en su cuadrante, han fichado el inicio de su jornada laboral en el control horario. Más información ver “Diario” y “Detalle”. Visible para: Administradores

Muestra 4 pasos que guían al administrador de cómo empezar y configurar sus equipos en aTurnos. Visible para: Todos.

Muestra un listado de los trabajadores que tienen planificación hoy, pero no han fic hado su entrada. Visible para: Superusuario y todos los administradores.

Muestra al usuario logueado si en algún turno realizado con anterioridad se ha realizado un fichaje de entrada pero no se ha realizado ninguno otro fichaje para cerrar el turno realizado, indicando su fecha, y en que periodo falta el dicho fichaje. Visible para: Administradores totales y trabajadores planificables.

Identificado como “Widget Tareas/Citas “, en la configuración de la pantalla de inicio.

Muestra las tareas o citas planificadas en la fecha seleccionda a trabajador, así como el número de horas pendientes de asignar siendo la diferencia entre las horas planificadas menos las horas de las tareas asignadas, en el ejemplo el usuario tiene 3 horas pendientes de tareas.

Con dos botones de acciones, un botón “Clientes” para añadir clientes,en el caso de que no estén aún en el equipo. Y un botón “Añadir tarea” para crear una nueva tarea si lo requiere el usuario logueado en el equipo. Se puede descargar la tabla que muestra el widget, en el formato que se requiera, desde la acción descargar.

Permite a superusuario y administradores crear, editar o eliminar ofertas de turno. Visible para: Superusuario, administrador total y planificador.

Muestra las ofertas de turnos disponibles. Los Administradores Totales y el Superusuario pueden gestionarlas por completo. Los Planificadores pueden editarlas o eliminarlas, pero no asignar turnos. Los Validadores y Trabajadores solo pueden inscribirse, descartarse y ver quiénes están interesados. Visible para: todos.

Identificado como Cambios (Administrador Planificador). Se muestran los cambios pendientes de validación, así como dos botones: el ‘+’ a continuación del título, que lleva al cuadrante para gestionar los cambios de turno, y el “ver histórico”, que enlaza con la pantalla de peticiones, cambios y ofertas pendientes.

Este widget permite que los trabajadores vean los cambios que se les ha pedido desde la pantalla de inicio y aceptarlos o denegarlos.

Este widget permite ver las últimas acciones que han dado lugar en el equipo, es decir, de las acciones realizadas por los usuarios en el equipo.

Solo se mostrarán los datos o acciones que cumplan con el filtro activado en Registro → Acciones.Para más información sobre el historial de acciones accede al siguiente enlace: Log de Acciones.

Identificado como 47. Saldo de horas anuales de un tipo de absentismo al año (R1.15), en la configuración de la pantalla de inicio.

Este widget nos muestra el saldo de horas de absentismo planificados y las horas permitidas de este tipo de absentismos, según los valores e información documentada en la restricción “1.15 Máximo de horas planificadas de un tipo de absentismo al año”.

Pueden configurarse para que aparezcan en el mismo widget diferentes saldos, al ser tipo de turnos o absentismos diferentes. Dependerá de las restricciones 1.15 que se le asocie a los trabajadores.

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables no pueden acceder porque no tienen horas complementarias en el cuadrante.

Identificado como “Saldo de horas. R5.1-5.5-5.8-5.12”, en la configuración de la pantalla de inicio.

Este Widget está relacionado con la restricción 5.1, 5.5, 5.8 y 5.12, mostrando los saldos que generan estas restricciones.

- 5.1 Limitar las horas planificadas al contrato del trabajado

- 5.5 Limitar las horas extras planificadas al año a las informadas en el perfil del trabajador

- 5.8 Limitar las horas complementarias planificadas al año a las informadas en el perfil del trabajador

- 5.12 Máximo de un tipo de hora determinado al año

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables no pueden acceder porque no tienen horas extras en el cuadrante.

Informa al trabajador el total de horas no ajustadas del estado de horas.

Este widget funciona tanto como asistente, como reflejo de las tareas existentes, con su seguimiento por colores, como se muestra en la leyenda. Tiene dos botones con vínculos: “Cómo configurar una cita previa”, que lleva a su página del manual, y “Nueva tarea”, que abre la pestaña para crear una nueva pestaña. A su derecha muestra en una tabla las tareas creadas.

Identificado como “No superar un tipo de hora personalizada al año (R5.12)”, en la configuración de la pantalla de inicio.

Este Widget está relacionado con la restricción 5.12 “Máximo de un tipo de hora determinado al año”. Informa el número de horas planificadas de una determinada hora personalizada, que tiene el usuario en el cuadrante en el año actual, y las horas permitidas del mismo tipo de hora personalizada que se le puede planificar al trabajador. Estas horas permitidas depende del valor informado en la restricción 5.12.

Pueden configurarse para que aparezcan en el mismo widget diferentes saldos, al ser tipo de horas personalizadas diferentes. Dependerá de las restricciones 5.12 que se le asocie a los trabajadores.

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables no pueden acceder porque no tienen horas complementarias en el cuadrante.

Identificado como Nómina (Trabajador). Muestra el periodo correspondiente a la nómina a la que da acceso.

Botón de acceso directo a calidad de fichaje. Visible para: Administradores.

Botón que lleva directamente a la vista diaria del cuadrante de trabajo. Visible para: Superusuarios y administradores totales.

El administrador puede calcular el tanto por ciento de fichajes no automáticos totales de un equipo de trabajo, como se muestra en el informe estadístico de calidad de fichaje. Visible para: Administradores.

El administrador puede consultar los trabajadores que tienen el Timecard Cerrado y/o Validado. Si se hace clic en “Ir a Timecard Localizado”, redirige la página hacia la pestaña “Control Horario (Timecard Localizado)”. Visible para: Administradores.

Identificado como “Información de planificación “, en la configuración de la pantalla de inicio en los ajustes de equipo.

Este widget muestra la localización por defecto del trabajador, no muestra la localización del turno. También muestra el tiempo computado de cada turno que esté planificado en el día hoy. No incluye las horas computadas ni planificadas de cualquier tipo de hora fuera de turno (como son las horas extras, complementaria, normales, personalizadas…). La información del widget es, en el día presente, únicamente.

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables, no pueden acceder porque no tienen horas complementarias en el cuadrante.

Informa al trabajador las alertas de control horario de toda una semana.

Muestra al trabajador los datos de sus conceptos de nómina. Más información en Nóminas.

El widget: Acumulado Semanal o Mensual

Por cada día: Horas Planificadas + Estado – Absentismos. Respecto a las horas computadas, semanales del perfil o la media de horas de los periodos del patrón aplicado, según permisos.

Este widget es personalizable con permisos.

- Sin permiso (por defecto) el balance semanal y diario de Control Horario de las horas Trabajadas con las horas Computadas. Más información ver Detalle

- Muestra el número de horas semanales del perfil.

- La media de horas de los periodos del patrón aplicado.

Muestra al trabajador el balance semanal y diario de Control Horario de las horas Trabajadas con las horas Computadas. Más información ver Detalle.

Permisos del widget

- Sin permiso (por defecto) los valores del control de presencial “minutes_hours_computable_planned” – minutes_absenteeisms_planned_computable

- [“controller” = → ‘widget’, “method” = → ‘showHoursContractInAccumulateWeek’] = → Muestra el número de horas semanales del perfil.

- [“controller” = → ‘widget’, “method” = → ‘showHoursPatternInAccumulateWeek’] = → la media de horas de los periodos del patrón aplicado.

El trabajador puede comprobar el balance mensual de Control Horario de las horas Trabajadas con las horas Computadas. Más información ver Detalle.

Este widget compara el cómputo de presencia con las horas computadas del mes. El cómputo de presencia es el estado del control de presencia diario + horas planificadas.

Este widget permite publicar una noticia en la página de inicio, creada previamente por el administrador. Esta noticia será visible hasta que sea borrada por el administrador total o superusuario del equipo, en los ajustes de la patalla de inicio. Visible para: Todos.

Para añadir una noticia, o borrarla se realiza desde Administrar → Ajustes → Pantalla de Inicio

Identificado como Saldos pendientes R4.10

Muestra el balance de la restricción 4.10 “Máximo de horas de un tipo de absentismo no puede superar las horas planificadas de un tipo de turno en un periodo”.

Este widget, muestra el saldo entre el número permitido de horas de un tipo de absentismo, que se puede planificar al trabajador, dependiendo del número total de horas planificadas de un tipo de turno en el mes consultado.

La restricción limita, que el número horas del tipo de absentismo planificado, no puede ser mayor al valor de número de horas de un tipo turno planificado, e informado en la restricción. El balance que muestra el widget, se realiza según el periodo a revisar, por ejemplo, si el periodo a revisar es 1 mes atrás, el sistema informa en el widget las horas permitidas de un tipo de absentismo en el mes consultado, dependiendo de las horas del turno planificado en el mes anterior y el mes consultado.

No muestra los balances si el periodo a revisar es a un año entero.

En el caso que se cree con periodo a reviar sin limitar, el widget no dará valor porque solo esta configurado para que se consulte por meses a revisar.

Pueden configurarse para que aparezcan en el mismo widget diferentes saldos, al ser tipo de turnos o absentismos diferentes. Dependerá de las restricciones 4.10 que se le asocie a los trabajadores.

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables no pueden acceder porque no tienen horas complementarias en el cuadrante.

En la tabla del widget se distingue 4 columnas, son las siguientes. La consulta es mensual y la restricción tiene que tener configurada como tiempo a revisar: meses atrás.

Descripción: informa la abreviatura del tipo de absentismo y el tipo de turno, respectivamente, que forman parte de la restricción 4.10

Turnos permitidos: informa cuantas horas de absentismos (totales y temporales) de este tipo, son permitidas para planificar dependiendo de lo planificado en el mes consultado. El valor permitido coincide con el número de horas del tipo de turno planificado en los meses atrás a revisar.

Por ejemplo, si el periodo a revisar es 3 meses atrás y estamos en el mes de enero de 2024, el sistema coge como valor de horas permitidas el número de horas del tipo de turno seleccionado en la restricción desde el mes de Octubre de 2023 (3 meses atrás) hasta Enero 2024.

Horas tipo de absentismos: informa cuantas horas de absentismos totales y temporales, de este tipo, están planificadas en el mes consultado.

Balance: un balance positivo indica cuantas horas absentismos de este tipo aún se puede planificar, sin incumplir la restricción. Un balance negativo indica que han sido planificadas más horas de este tipo de absentismo de los permitidas.

Identificado como Saldos pendientes R4.5, en la configuración de la pantalla de inicio.

Relacionado con la restricción 4.5 “Máximo de un tipo de absentismo al año que tiene que ser menor a un tipo de turno “.

En este widget se muestra el saldo mensual entre el número permitido de un tipo de absentismo, que pueden planificar, dependiendo del número de un tipo de turno planificado en el mes.

La restricción 4.5 limita que el número del tipo de absentismo planificado durante un año completo, no puede ser mayor al valor del tipo turno planificado de la restricción. El balance, en este widget, se realiza sobre la planificación del mes consultado.

La consulta es mensual, pero el valor de la restricción es anual, de tal manera que a pesar de que en un mes el balance sea negativo, aún se puede planificar absentismos, esto es posible porque a nivel anual aún hay más turnos planificados que absentismos del tipo indicado en la restricción.

Pueden configurarse para que aparezcan en el mismo widget diferentes saldos, al ser tipo de turnos o absentismos diferentes. Dependerá de las restricciones 4.5 que se le asocie a los trabajadores.

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables no pueden acceder porque no tienen horas complementarias en el cuadrante.

La consulta es mensual, pero el valor de la restricción es anual, de tal manera que a pesar de que en un mes el balance sea negativo, aún se puede planificar absentismos, esto es posible porque a nivel anual aún hay más turnos planificados que absentismos del tipo indicado en la restricción.

En la tabla del widget se distingue 4 columnas, son las siguientes:

Descripción: informa la abreviatura del tipo de absentismo y el tipo de turno, respectivamente, que forman parte de la restricción 4.5.

Turnos permitidos: informa cuantos absentismos (totales) de este tipo, son permitidos para planificar en este mes para no obtener un balance negativo en el mismo mes consultado. El valor permitido coincide con el número de turnos planificados en el mes, del tipo de turno informado en la restricción.

Total de absentismos: informa cuantos absentismos totales (no temporales) de este tipo están planificados en el mes consultado.

Balance: un balance positivo indica que, en este mes consultado, hay más turnos planifcados del tipo de turno de la restricción, que número de absentismos del tipo de absentismo de la restricción. Un balance negativo indica que han sido planificados más absentimos de ese tipo de los permitidos, en ese mes, como hemos comentando anteriormente el balance de la restricción puede ser positivo a nivel anual.

Identificado como Saldos pendientes mensuales R4.4,R4.5 y R4.10, en la configuración de la pantalla de inicio. Muestra el balance mensual de las siguientes restricciones:

- 4.4 Máximo de un tipo de absentismo que tiene que ser menor a un tipo de hora, en un periodo de tiempo definido.

Este widget muestra el saldo entre el número permitido de horas de un tipo de absentismo que pueden planificar, en el mes consultado, dependiendo del número total de horas planificadas de un tipo de hora y del periodo a revisar informado en la restricción.

La restricción limita que el número horas del tipo de absentismo planificado, no pude ser mayor al valor de número de horas planifcadas, del tipo hora informada en la restricción. El balance que muestra el widget, se realiza según el periodo a revisar, por ejemplo, si el periodo a revisar es 1 mes atrás, el sistema informa en el widget las horas permitidas según la horas planificadas, del tipo de hora, del mes anterior consultado y las horas del tipo de absentismo en el mes consultado.

No muestra los balances si el periodo a revisar a un año entero, cuando se crea la restricción.

En la tabla del widget se distingue 4 columnas, son las siguientes. La consulta es mensual y la restricción tiene que tener configurada como tiempo a revisar: meses atrás.

Descripción: informa la abreviatura del tipo de absentismo y el tipo de hora, respectivamente, que forman parte de la restricción 4.4

Permitidas: informa cuantas horas de absentismos (totales y temporales) de este tipo, son permitidos para planificar, dependiendo del periodo a revisar. El valor permitido coincide con el número de horas del tipo de hora planificadas, en el mes a revisar.

Por ejemplo, si el periodo a revisar es 3 meses atrás y estamos en el mes de enero de 2024, el sistema coge come valor de horas permitidas el número de horas del tipo de hora seleccionada en la restricción de mes de Octubre de 2023 (3 meses atrás) y las horas del tipo de absentimo seleccionada en la restricción del mes consultado.

Computadas: informa cuantas horas de absentismos totales y temporales, de este tipo, están planificadas en el mes consultado.

Balance: un balance positivo indica cuantas horas absentismos de este tipo aún se puede planificar, sin incumplir la restricción. Un balance negativo indica que han sido planificadas más horas de este tipo de absentismo de las permitidas.

- 4.5 Máximo de un tipo de absentismo, tiene que ser menor a un tipo de turno, en un periodo de tiempo definido.

En este widget se muestra el saldo mensual entre el número permitido de un tipo de absentismo, que pueden planificar, dependiendo del número de un tipo de turno planificado en el mes.

La restricción 4.5 limita que el número del tipo de absentismo planificado durante un año completo, no puede ser mayor al valor del tipo turno planificado de la restricción. El balance, en este widget, se realiza sobre la planificación del mes consultado.

La consulta es mensual, pero el valor de la restricción es anual, de tal manera que a pesar de que en un mes el balance sea negativo, aún se puede planificar absentismos, esto es posible porque a nivel anual aún hay más turnos planificados que absentismos del tipo indicado en la restricción.

En la tabla del widget se distingue 4 columnas, son las siguientes:

Descripción: informa la abreviatura del tipo de absentismo y el tipo de turno, respectivamente, que forman parte de la restricción 4.5.

Turnos permitidos: informa cuantos absentismos (totales) de este tipo, son permitidos para planificar en este mes para no obtener un balance negativo en el mismo mes consultado. El valor permitido coincide con el número de turnos planificados en el mes, del tipo de turno informado en la restricción.

Total de absentismos: informa cuantos absentismos totales (no temporales) de este tipo están planificados en el mes consultado.

Balance: un balance positivo indica que, en este mes consultado, hay más turnos planifcados del tipo de turno de la restricción, que número de absentismos del tipo de absentismo de la restricción. Un balance negativo indica que han sido planificados más absentimos de ese tipo de los permitidos, en ese mes, como hemos comentando anteriormente el balance de la restricción puede ser positivo a nivel anual.

- 4.10 Máximo de horas de un tipo de absentismo no puede superar las horas planificadas de un tipo de turno, en un periodo definido

Muestra el balance de la restricción 4.10 “Máximo de horas de un tipo de absentismo no puede superar las horas planificadas de un tipo de turno en un periodo “.

Este widget, muestra el saldo entre el número permitido de horas de un tipo de absentismo, que pueden planificar, en el mes consultado, dependiendo del número total de horas planificadas de un tipo de turno y del periodo a revisar informado en la restricción.

La restricción limita que el número horas del tipo de absentismo planificado, no puede ser mayor al valor de número de horas planificadas, del tipo turno informada en la restricción. El balance que muestra el widget, se realiza según el periodo a revisar, por ejemplo, si el periodo a revisar es 1 mes atrás, el sistema informa en el widget las horas permitidas según la horas planificadas, del tipo de turno, del mes anterior y mes consultado y las horas computadas del tipo de absentismo en el mes consultado.

No muestra los balances si el periodo a revisar a un año entero, cuando se crea la restricción.

En la tabla del widget se distingue 4 columnas, son las siguientes. La consulta es mensual y la restricción tiene que tener configurada como tiempo a revisar: meses atrás.

Descripción: informa la abreviatura del tipo de absentismo y el tipo de turno, respectivamente, que forman parte de la restricción 4.10

Permitidas: informa cuantas horas de absentismos (totales y temporales) de este tipo, son permitidos para planificar, dependiendo del periodo a revisar. El valor permitido coincide con el número de horas del tipo de turno planificado, en el mes a revisar.

Por ejemplo, si el periodo a revisar es 1 meses atrás y estamos en el mes de enero de 2024, el sistema coge come valor de horas permitidas el número de horas del tipo de turno seleccionado en la restricción desde Diciembre de 2023 (1 meses atrás) hasta enero de 2024, y las horas del tipo de absentimo seleccionada en la restricción del mes consultado.

Horas tipo de absentismos: informa cuantas horas de absentismos totales y temporales, de este tipo, están planificadas en el mes consultado.

Balance: un balance positivo indica cuantas horas absentismos de este tipo aún se puede planificar, sin incumplir la restricción. Un balance negativo indica que han sido planificadas más horas de este tipo de absentismo de los permitidas.

Identificado como Saldos pendientes anual R4.10, en la configuración de la pantalla de inicio.

Muestra el balance de la restricción 4.10 “Máximo de horas de un tipo de absentismo no puede superar las horas planificadas de un tipo de turno en un periodo “.

Este widget muestra el saldo entre el número permitido de horas de un tipo de absentismo, que se pueden planificar, dependiendo del número total de horas planificadas de un tipo de turno, en un año. La restricción limita que el número horas del tipo de absentismo planificado, no pude ser mayor al valor de número de horas de un tipo turno planificado e informado en la restricción.

El balance que muestra el widget se realiza a nivel anual, de la planificación. No muestra los balances si el periodo a revisar es diferente al año entero, cuando se crea la restricción. Si se crea con periodo a revisar mensuales se tiene que visualizar y consultar el Widget “53. Saldos pendientes R4.10”. En el caso que se cree con periodo a reviar sin limitar, el widget no dará valor porque solo esta configurado para que se consulte por años.

Pueden configurarse para que aparezcan en el mismo widget diferentes saldos, al ser tipo de turnos o absentismos diferentes. Dependerá de las restricciones 4.10 que se le asocie a los trabajadores.

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables no pueden acceder porque no tienen horas complementarias en el cuadrante.

En la tabla del widget se distingue 4 columnas, son las siguientes. La consulta es anual y la restricción tiene que tener configurada como tiempo a revisar: Año entero.

Descripción: informa la abreviatura del tipo de absentismo y el tipo de turno, respectivamente, que forman parte de la restricción 4.10.

Turnos permitidos: informa cuantas horas de absentismos (totales y temporales) de este tipo, son permitidos para planificar en el año. El valor permitido coincide con el número de horas del tipo de turno planificado informado en la restricción.

Total de absentismos: informa cuantas horas de absentismos totales y temporales, de este tipo, están planificadas en el cuadrante anual.

Balance: un balance positivo indica cuantas horas absentismos de este tipo aún se puede planificar, sin incumplir la restricción. Un balance negativo indica que han sido planificados más horas de este tipo de absentismo de los permitidos.

Identificado como Saldos pendientes anual R4.4

Muestra el balance de la restricción 4.4 “Máximo de un tipo de absentismo tiene que ser menor a un tipo de hora, en un periodo definido”.

Este widget muestra el saldo entre el número permitido de horas de un tipo de absentismo que pueden planificar dependiendo del número total de horas planificadas de un tipo de hora, en un año. La restricción limita que el número horas del tipo de absentismo planificado, no pude ser mayor al valor de número de horas de un tipo hora planificado e informado en la restricción. El balance que muestra el widget se realiza a nivel solo anual, de la planificación.

No muestra los balances, si el periodo a revisar es diferente a un año entero, cuando se crea la restricción. Cuando se crea con periodos a revisar mensuales se tiene que visualizar el Widget “54. Saldos pendientes R4.4”.

Pueden configurarse para que aparezcan en el mismo widget diferentes saldos, al ser tipo de turnos o absentismos diferentes. Dependerá de las restricciones 4.14 que se le asocie a los trabajadores.

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables, no pueden acceder porque no tienen horas complementarias en el cuadrante.

En la tabla del widget se distingue 4 columnas, son las siguientes. La consulta es anual y la restricción tiene que tener configurada como tiempo a revisar: Año entero.

Descripción: informa la abreviatura del tipo de absentismo y el tipo de hora, respectivamente, que forman parte de la restricción 4.4

Permitidas: informa cuantas horas de absentismos (totales y temporales) de este tipo, son permitidos para planificar en el año. El valor permitido coincide con el número de horas del tipo de hora planificado, relacionado con este absentismo en la restricción.

Computadas: informa cuantas horas de absentismos totales y temporales, de este tipo, están planificadas en el cuadrante anual.

Balance: un balance positivo indica cuantas horas absentismos de este tipo aún se puede planificar, sin incumplir la restricción. Un balance negativo indica que han sido planificados más horas de este tipo de absentismo de los permitidos.

Identificado como “Máximo de un tipo de turno o absentismo planificado al año R1.11” en la configuración de la pantalla de inicio.

Este Widget está relacionado con la restricción 1.11 “Máximo de un tipo de turno o absentismo planificado al año”.

Pueden configurarse para que aparezcan en el mismo widget diferentes saldos, al ser tipos de turnos o absentismos diferentes. Dependerá de las restricciones 1.11 que se le asocie a los trabajadores.

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables no pueden acceder porque no tienen horas complementarias en el cuadrante.

Identificado como 48 “Máximo de horas computadas de un tipo absentismo al año R1.15”, en la configuración de la pantalla de inicio.

Este widget nos muestra el saldo de horas de absentismo planificados y las horas permitidas de este tipo de absentismos, según los valores e información documentada en la restricción R1.15

Pueden configurarse para que aparezcan en el mismo widget diferentes saldos, al ser tipo de turnos o absentismos diferentes. Dependerá de las restricciones 1.15 que se le asocie a los trabajadores.

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables no pueden acceder porque no tienen horas complementarias en el cuadrante.

Este Widget está relacionado con la restricción 5.5 “Limitar las horas extras planificadas al año a las informadas en el perfil del trabajador”. Informa las horas extras planificadas que tiene el usuario en el cuadrante en el año actual y las horas extras máximas registrada en su perfil. Visible para: Usuarios planificables.

Este Widget está relacionado con la restricción 5.8 “Limitar las horas complementarias planificadas al año a las informadas en el perfil del trabajador”. Informa las horas complemetarias planificadas que tiene el usuario en el cuadrante en el año actual y las horas complementarias permitidas que se le pueden planificar al trabajador según el porcentaje de horas complementarias registrada en su perfil. Visible para: Usuarios planificables.

Este Widget está relacionado con la restricción 5.12 “Máximo de un tipo de hora determinado al año”. Informa el número de horas planificadas de una determinada hora personalizada, que tiene el usuario en el cuadrante en el año actual, y las horas permitidas del mismo tipo de hora personalizada que se le pueden planificar al trabajador.

Estas horas permitidas depende del valor informado en la restricción 5.12.Pueden configurarse para que aparezcan en el mismo widget diferentes saldos, al ser tipo de horas personalizadas diferentes. Dependerá de las restricciones 5.12 que se le asocien a los trabajadores. Visible para: Usuarios planificables.

Este Widget está relacionado con la restricción 5.1 “Limitar las horas computadas al contrato del trabajador”. Informa las horas computadas que tiene el usuario en el cuadrante en el año actual y las horas contrato en el año del usuario. Visible para: Usuarios planificables.

Muestra quiénes tienen vacaciones hoy. Además muestra los botones de acceso directo para planificar y acceder al cuadrante. Visible para: Superusuarios y todos los administradores.

Identificado como Saldos pendientes anual R4.5, en la configuración de la pantalla de inicio.

Muestra el balance de la restricción 4.5 “Máximo de un tipo de absentismo al año que tiene que ser menor a un tipo de turno “.

Este widget muestra el saldo entre el número permitido de un tipo de absentismo que pueden planificar dependiendo del número de un tipo de turno planificado. La restricción limita que el número del tipo de absentismo planificados, no pude ser mayor al valor del tipo turno planificado e informado en la restricción. El balance se realiza sobre una planificación anual, año actual o cualquier otro a consultar.

Pueden configurarse para que aparezcan en el mismo widget diferentes saldos, al ser tipo de turnos o absentismos diferentes. Dependerá de las restricciones 4.5 que se le asocie a los trabajadores.

Pueden acceder a este widget el administrador total, planificador, validador y trabajador que sean planificables. El superusario y los usuarios no planificables no pueden acceder porque no tienen horas complementarias en el cuadrante.

En la tabla del widget se distingue 4 columnas, son las siguientes:

Descripción: informa la abreviatura del tipo de absentismo y el tipo de turno, respectivamente, que forman parte de la restricción 4.5

Turnos permitidos: informa cuantos absentismos (totales) de este tipo, son permitidos para planificar en el año. El valor permitido coincide con el número de turnos planificado del tipo de turno informado en la restricción.

Total de absentismos: informa cuantos absentismos totales (no temporales) de este tipo están planificados en el cuadrante anual.

Balance: un balance positivo indica cuantos absentimos de este tipo aún se puede planificar, sin incumplir la restricción. Un balance negativo indica que han sido planificados más absentimos de ese tipo de los permitidos.

Muestra los nuevos empleados que serán dados de alta en las proximas dos semanas

Este widget muestra la IA de aTurnos, es un widget que te asiste en tu recorrido por aTurnos. Tiene tres acciones: Hacer preguntas, pedirle que realice acciones por ti o, si es tu primera vez utilizando aTurnos, utilizando la acción “Chat onboarding” te va guiando paso a paso como si fuera una formación sobre lo que necesitas hacer para empezar a utilizar aTurnos.

Este widget muestra el nombre de los trabajadores que han introducido un fichaje sin tener ningún tipo de planificación en el cuadrante. Visible para: Administrador Total y Superusuario

Esta restricción va ligada a la restricción 4.10 Máximo de horas de un tipo de absentismo no puede superar las horas planificadas de un tipo de turno en un periodo

Este widget muestra el nombre de los trabajadores que en los próximos 30 días van a ser dados de baja. Muestra el nombre del trabajador cuyo contrato finaliza, la fecha de fin de contrato y las vacaciones que le quedan por disfrutar. Visible para: Trabajador, Validador y planificador

Este widget te muestra la cantidad de horas que tienes planificadas de un tipo de absentismo seleccionado. Visible a nivel: Trabajador, validador y planificador.

Este widget muestra el balance con el número de horas computadas en el año (según la planificación del cuadrante), comparadas con las horas año contrato establecidas en el perfil del trabajador que ha iniciado sesión. Además lo que diferencia este widget de los anteriores es que aparece el balance con los ajustes de horas que se le han realizado al trabajador y si se hace clic sobre él nos lleva al cuadrante anual para obtener más detalle sobre lo planificado y lo ajustado.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-b9bf201b55.webp)

![⚙️ ¿Cómo se configuran los widgets?](/media/manual/como-se-configuran-los-widgets-0d4ef4c1e5.webp)

![⚙️ ¿Cómo se configuran los widgets?](/media/manual/como-se-configuran-los-widgets-90286674fa.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-44061a99c4.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-ebd43ce9d2.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-a2e2b5d8fa.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-27d1873a08.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-e61d8b0d64.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-b1a151c142.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-3d91ff9a0d.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-36e75f1565.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-854d382799.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-0710a2fe49.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-5e7edf3760.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-c9ef9e2f71.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-5d2b456b91.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-8ed5f35840.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-5919adab96.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-eeeda36eb9.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-380d677624.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-e9b2b4b538.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-c5b21079a4.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-f2cacd48e0.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-a37a65e250.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-04e5392bad.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-ed0bdb96c8.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-14613c9e65.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-cbdf4ec26b.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-14859887eb.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-029d6051c8.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-fafe3d285a.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-b0d66cd2b0.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-91eda9bcb8.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-f8cefd7f48.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-eb98eb8aca.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-da452c9d1b.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-9ddbc70450.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-157e1c7931.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-86c39dde3c.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-6d08158fff.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-0be039b16a.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-0678a7ff48.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-bb2792eaba.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-455d7d21ee.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-df5aa43eee.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-a1b1b67ed6.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-614adb0cf7.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-2d6e1e845c.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-726dc75574.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-f09f72c56d.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-59d82a3cb2.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-b9b3090911.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-593342633c.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-2186557ddb.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-adeef4407b.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-a299d652ea.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-f476308461.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-d2a9385ab1.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-37b0deb419.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-297f220869.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-b795b0d879.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-07bc33d6cf.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-b0ea6d434f.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-61dc8ab2b9.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-168e66f208.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-5bb31c7361.webp)

![Descripción detallada de los Widgets en aTurnos](/media/manual/descripcion-detallada-de-los-widgets-en-aturnos-02cd912f74.webp)
