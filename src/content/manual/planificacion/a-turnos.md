---
schemaVersion: "1.0"
contentId: planificacion-a-turnos
title: Turnos en aTurnos
description: Es el tipo de evento básico de planificación en aTurnos. Cada turno tiene una duración total (tiempo total del turno) y una duración computada (tiempo computado del turno).
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Turnos en aTurnos
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: turnos
    label: Turnos
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
    - https://manual.aturnos.com/knowledgebase/a-turnos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/a-turnos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre turnos en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 10
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/a-turnos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/a-turnos/
  contentHash: b7d18bee949432f4a88787552b91f67ef47aae8d3c308c676edea3becb8a442f
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Es el tipo de evento básico de planificación en aTurnos. Cada turno tiene una duración total (tiempo total del turno) y una duración computada (tiempo computado del turno).

En el cuadrante de un equipo de trabajo, a los turnos se les identifica con una abreviatura (compuesta por letras y números). Por ejemplo, para el turno de “Mañana de 8:00 a 15:00”, puede ser representado por la abreviatura “M”.

En un mismo día, aTurnos permite insertar en el cuadrante más de un tipo de turno. Por ejemplo, “M1: 8:00-9:00”, el tipo de turno “M2: 9:00-14:00” y el tipo turno “M3 14:00-15:00”.

Con los turnos se crearán los patrones de turnos.

### Crear turno s

El administrador del equipo puede crear turnos desde el menú ‘ Planificador ‘, en ‘ Tipos de turno ‘, pulsando sobre el botón de la barra superior ‘Acciones’, se desplegarán varias opciones, entre las que se encuentra ‘Crear Turno’.

La configuración básica de cada turno consiste en informar:

- Descripción Nombre con el que se identifica el turno.
- Abreviatura Acrónimo con el que se identifica el turno (máximo 4 caracteres con letras y/o números). Es única por cada tipo de turno.
- I nicio Hora de inicio del turno.
- D uración total Tiempo que determina la duración del turno desde la hora de inicio del mismo. Por ejemplo, si la hora de inicio es a las 8:00, y se informa en este campo 7 horas, en la planificación de este turno mostrará que el horario de ese turno es desde las 8:00 hasta las 15:00.
- D uración computada Cantidad de horas que se computarán como trabajadas en el ‘ Detalle por trabajador ‘, así como en las estadísticas del control de presencia, reportes o conceptos de nóminas que tengan como variable las horas computadas. Por ejemplo, un turno puede tener una duración total de 8 horas, pero computar solo 7 horas y 30 minutos. Esos 30 minutos de diferencia, se pueden contabilizar como tiempo de descanso no computable en el turno.

### Configuración avanzada

Los turnos puede tener configurados otros aspectos como permitir cambios con este turno, habilitarlos para peticiones, tener una localización por defecto, configurarlo como otro turno de ‘Vacaciones’ o aplicarles una flexibilidad de fichaje.

Permite que el turno esté habilitado para la acción de ‘Hacer cambio’ entre trabajadores.

Esta opción habilita si el turno puede ser solicitado por los trabajadores dentro del flujo de peticiones. También permite que el turno pueda ser ofrecido desde una ‘Oferta de turno’ a la que pueden apuntarse los trabajadores.

También se puede configurar el ‘Rol mínimo para aceptar peticiones’. Es el rol de usuario a partir del que se pueden gestionar peticiones del turno. Por ejemplo, si se establece el rol ‘Administrador Planificador’, entonces el ‘Administrador Validador’ (rol inmediatamente inferior) no podrá validar peticiones del turno, pero sí un rol superior como el ‘Administrador Total o el Superusuario’.

Cada turno puede tener una localización (ver ‘Localizaciones’ ), independientemente de la localización por defecto del trabajador.

Cuando el administrador inserta en el cuadrante este turno, se planifica con la localización por defecto indicada en este campo. Por ejemplo, si la localización por defecto del turno es “Oficina”, aunque la localización por defecto del trabajador sea “Administración”, el turno se inserta con la localización “Oficina”.

Es el rol de usuario a partir del cual se puede añadir, editar y borrar dicho turno en el cuadrante o en la creación de patrones de turno (ver Roles de usuario ).

En aTurnos existe un turno de vacaciones por defecto (V), ahora se pueden crear otros turnos que puedan ser identificados de “Vacaciones” y que afecten al cómputo de las mismas.

Marcando esta opción como “SI” estarías configurando un turno que únicamente es planificable mediante la creación de Jornadas Partidas. Marcando esta opción como “NO”, el tipo de turno se podrá planificar también en cuadrantes, añadir a patrones, etc.

Marcando esta opción como “Sí”, se limita la franja horaria donde se introducen los fichajes, cuando esté planificado este turno.

La tolerancia nos permite establecer unos límites permitidos de anticipación o retraso al inicio y fin del turno. Con esta configuración de tolerancias a nivel de turno, podemos establecer que un turno tenga una tolerancia determinada y otro, otra. Es decir, una configuración más minuciosa que a la que existía a nivel de equipo y a la existente en el perfil del trabajador.

Lo primero que nos pregunta esta configuración es si esta tolerancia debe tomar como referencia lo configurado en el equipo o perfil del trabajador. Por defecto, esta opción aparece marcada como “Sí”, lo que significa que no existirá ningún tipo de configuración particular en ese turno determinado.

Si no queremos que tome esta configuración, y crear una nueva, debemos marcar esta opción como “NO”.

Dentro de la configuración de las tolerancias, podemos elegir cuál configurar si “Tolerancia por inicio y fin de cada turno de la jornada” o si “Por exceso y defecto del inicio y fin de cada turno de la jornada”

Calcular la tolerancia por el inicio y el fin de cada turn o Esta tolerancia te permite establecer el mismo valor de exceso y defecto a la entrada y salida, es decir, configurándolo como 30 minutos, entrando 30 minutos antes, se podría salir 30 minutos antes, y si se entra 30 minutos después, se podría compensar saliendo 30 minutos más tarde.

Por exceso y defecto del inicio y fin de cada turno de la jornada Esta tolerancia es algo más detallada, ya que te permite indicar con cuántos minutos de antelación se puede comenzar la jornada y cuántos minutos de defecto. Lo mismo ocurre con el fin, se puede configurar cuántos minutos de exceso son permitidos y cuántos por defecto.

Esta configuración sirve para indicar en el turno una pausa no computable. Esta interrupción de jornada puede por ejemplo ser destinado para que el trabajador coma. Para configurarlo hay que completar los siguientes campos:

- Gestionar interrupción de jornada: Para habilitar esta acción, esta opción debe estar en “Si”.
- Inicio interrupción de jornada: Indica la hora en la que iniciará este descanso.
- Fin interrupción de jornada: Indica la hora en la que termina este descanso.
- Tolerancia de exceso en el inicio de interrupción de jornada: Indica con cuántos minutos de antelación se permite tomarse este descanso.
- Tolerancia de exceso en el fin de interrupción de jornada: Indica con cuántos minutos de retraso se permite excederse en el descanso.

El turno dinámico permite ajustar automáticamente el turno planificado de un trabajador en función de sus fichajes reales.

- El trabajador parte de una planificación teórica.
- Según los fichajes de entrada, el sistema asigna el turno más parecido dentro de un pack de turnos dinámicos predefinido.
- Solo se modifican los turnos marcados como dinámicos. Los turnos fijos no se ven afectados.

Configuración

- Fecha inicio: desde cuándo entra en vigor la configuración.
- Fecha fin: hasta cuándo será válida.
- Hora inicio del tramo de fichaje: Hora inicio del fichaje para introducir el tipo de turno a replanificar.
- Hora fin del tramo de fichaje: hasta qué hora se puede fichar para seguir introduciendo el turno a replanificar.
- Turno replanificado: el turno que se asignará automáticamente si el fichaje se encuentra dentro del tramo definido.

*Todos los campos son obligatorios

Una vez cumplimentado el formulario se hace clic en “Guardar”.

Si existen muchos turnos, para crearlos puedes importarlos a partir de un Excel o CSV desde nuestro menú ‘Importar’. Los datos necesarios para la importación de tipos de turnos, lo encontrarás en el siguiente enlace (Importación de tipos de turnos).

En caso de editar o borrar un tipo de turno ya creado, en el listado de tipos de turnos aparecen estos botones de acción.

### Turno sin horas

Existe la posibilidad de crear un tipo de turno que no compute horas a los trabajadores, pero se pueda planificar en el cuadrante para informar algún tipo de descanso en la jornada de un día o en parte de ella, no tratándose de un tipo de absentismo.

Estos tipos de turno, se caracterizan porque a la hora configurarlos en su creación, todos sus valores son 0:00.

Estos turnos, cuando se añaden a un patrón o se planifican en el cuadrante, aparecen pintados con su contorno en rojo.

### Editar un turno

En el listado de tipos de turnos, aparece el botón de ‘Editar’.

Tras hacer clic sobre el botón, se mostrará el formulario donde se puede modificar la información sobre el turno.

Las modificaciones que se realicen en un turno, absentismo o tipo de hora, actualizan toda la planificación del cuadrante, patrones e turnos y reportes, a las que afecte. Por ejemplo, si editamos un turno M, cuyo tiempo computado es de 7 horas y pasa a ser 8 horas, se actualizan todas las estadísticas, reportes, patrones y planificación en el cuadrante, del turno.

Los datos de los turnos pueden tener periodos de vigencia. Es decir, en el caso de un turno de mañana “M”, por ejemplo, en la temporada de invierno es de 8:00 a 15:00 y en la temporada de verano el turno de mañana es de 6:00 a 13:00, no siendo necesario crear dos turnos diferentes. Se puede editar los datos a partir una fecha, en la cual entra en vigor los datos modificados del turno, en este caso el horario, sin afectar a la planificación que había aplicada.

En el ejemplo anterior, solo se cambiará el ‘Inicio’ (hora de comienzo), a continuación, haciendo clic sobre la acción “Nuevos datos” e informar la fecha correspondiente que indique la ‘Entrada en vigor’. A partir de esa fecha, turno ‘M’ empezará a las 06:00.

### Borrar un turno

En el listado de tipos de turnos, haciendo clic en el botón de borrar.

Cuando es borrado, no desaparece de aTurnos, ya que hay una opción habilitada para recuperarlo en caso de que se vuelva a necesitar. Esta opción está operativa en “No disponibles”. Al hacer clic en esta opción, aTurnos ofrece en modo de tabla todos los tipos de turnos y absentismos que se pueden recuperar, para volver a estar disponible y poder planificar con ellos.

### Recuperar un turno borrado

Esta opción está operativa al acceder en el botón de la parte inferior ‘ No disponibles’.

Se mostrarán todos los tipos de turno borrados (no están eliminados completamente, únicamente no están disponibles para añadirse a patrones o en el cuadrante), teniendo la opción desde el botón de recuperación para reestablecerlos.

### Control Horario: Descanso a nivel de turno y Limitar horario de fichaje

Los administradores con el módulo de Control Horario podrán definir un tiempo de descanso o configurar una flexibilidad de fichaje en el turno

El concepto de ‘Descanso en minutos’ se refiere al tiempo de descanso (en minutos) que no computa como horas trabajadas presenciales. Este dato se toma en cuenta para el control de horas del control de presencia según la configuración de los descansos.

Ver más acerca del ‘ Módulo de Control horario ‘.

Se puede configurar una flexibilidad para los fichajes de los turnos.

Para ello hay que indicar desde qué hora se puede contabilizar el fichaje de Entrada al turno de trabajo en el campo ‘Inicio horario fichajes’ y hasta qué hora se puede contabilizar el fichaje de Salida en ‘Fin horario fichajes’.

Más información del funcionamiento en ‘Flexibilidad de fichajes’.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![s](/media/manual/s-e075dcfd77.webp)

![s](/media/manual/s-0fbb519d0b.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-b4a51559aa.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-77c2e352db.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-0fa690698a.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-830930c239.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-fa1fba306f.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-580a3fecf8.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-c944e9d9b0.webp)

![Configuración avanzada](/media/manual/configuracion-avanzada-b4181537df.webp)

![Turno sin horas](/media/manual/turno-sin-horas-f587d8bb0a.webp)

![Turno sin horas](/media/manual/turno-sin-horas-914d8eb567.webp)

![Turno sin horas](/media/manual/turno-sin-horas-632c854edf.webp)

![Editar un turno](/media/manual/editar-un-turno-451b88e444.webp)

![Borrar un turno](/media/manual/borrar-un-turno-b38d1e0ad3.webp)

![Editar un turno](/media/manual/editar-un-turno-ffb98a054c.webp)

![Editar un turno](/media/manual/editar-un-turno-5b1eaa9dba.webp)

![Recuperar un turno borrado](/media/manual/recuperar-un-turno-borrado-6d35ab1a00.png)

![Recuperar un turno borrado](/media/manual/recuperar-un-turno-borrado-ee9baf2c0e.webp)

![Limitar horario de fichaje](/media/manual/limitar-horario-de-fichaje-1d5e38fe62.webp)

![Limitar horario de fichaje](/media/manual/limitar-horario-de-fichaje-1dd7b34eaa.webp)

![Limitar horario de fichaje](/media/manual/limitar-horario-de-fichaje-8957539329.webp)
