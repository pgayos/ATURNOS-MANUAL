---
schemaVersion: "1.0"
contentId: "configuracion-y-cuenta-1-hacer-cambio-de-turno"
title: "Hacer Cambio de Turno"
description: "En primer lugar, el proceso de realizar un cambio, solo es posible hacer a presente o futuro, nunca se puede hacer cambio a pasado."
contentType: reference
module: "Configuración y cuenta"
submodule: "Roles y permisos"
intent: "Hacer Cambio de Turno"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "cambio"
    label: "Cambio"
  - id: "hacer"
    label: "Hacer"
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
    - "https://manual.aturnos.com/knowledgebase/a-hacer-cambio-2/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/a-hacer-cambio-2/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre hacer Cambio de Turno?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  contentHash: "1db91161addfe2520bab86e28b2db46171de0cd68304f27d45e2d69b3d8b3a7b"
  migratedAt: 2026-08-17
---
## Resumen

En primer lugar, el proceso de realizar un cambio, solo es posible hacer a presente o futuro, nunca se puede hacer cambio a pasado.

### ¿Qué es un cambio de turnos?

El cambio de turnos es uno de los procesos más usado por los profesionales que trabajan a turnos. El cambio de turno entre trabajadores facilita la conciliación laboral y familiar, disminuyendo el número de absentismos por la flexibilidad en la planificación de los trabajadores con sus cambios de turnos.

Los cambios de turnos, según configuración, pueden ser validados por los trabajadores implicados en el cambio y el administrador del equipo. Todos los cambios de turnos entre trabajadores quedan registrado en un histórico de cambios, accediendo a ellos para cualquier consulta o seguimiento cuando sea requerido.

El Administrador puede iniciar un proceso de cambios de turnos entre compañeros, sin necesidad de que ellos mismos lo soliciten. Lo habitual es que este proceso de cambio de turnos se realice entre trabajadores, y sea validado en primer lugar por el trabajador implicado en el cambio, y a continuación por el administrador del equipo para confirmar o denegar, en última estancia, este cambio de turno. En aTurnos este proceso de validación de cambios de turnos es configurable (ver Configuración de cambios ).

Para que los trabajadores puedan solicitar cambios de turno, pueden haber tenido el permiso y la posibilidad de ver los turnos de los demás compañeros. Para configurarlo, se debe entrar en Administrar → Ajustes → Cambios (ver Configuración de cambios ).

### Hacer cambio de turnos entre trabajadores

El proceso de cambios de turnos entre trabajadores consiste en una petición que realiza un trabajador (el de origen) a otro compañero (el de destino), quienes comparten el mismo cuadrante, para modificar su turno actual por otro tipo de turno.

Para que los trabajadores puedan solicitar cambios de turno, es necesario que el administrador de permiso de poder realizar cambios entre trabajadores y permiso de ver la planificación de turnos de los demás trabajadores. Para configurarlo, se debe entrar en Administrar → Ajustes → Cambios (ver Configuración de cambios ).

Además de estos 2 permisos anteriores, hay que tener en cuenta otros requisitos para realizar cambios de turnos:

- El turno tiene que estar configurado para que sea susceptible al proceso de cambios de turnos. En aTurnos podemos definir si un tupoi de turno puede ser susceptible a cambios entre trabajadores, o por el contrario un tipo de turno no podrá ser modificado por este proceso de cambios entre trabajadores. Para cambiar la configuración del turno (ver Añadir/editar tipo de turno )
- El cambio de turnos entre trabajadores no se puede realizar en fecha anterior a la de hoy, es decir el sistema no permite cambios de turnos en el pasado.
- Tener en cuenta, el periodo de antelación en la que se permite hacer cambios de turnos (ver Días de antelación en los cambios ).

En aTurnos, existen tres tipos de cambios de turnos: Intercambia r turno en el mismo día, Librar un turno planificado, o doblar turno en el mismo día.

Cuando un trabajador necesita cambiar un turno en el mismo día, el ejemplo habitual es un trabajador con turno M (de mañana) quiere cambiar el turno por otro trabajador que lo tiene por la tarde (T), de manera que al realizar el intercambio, se modifica la planificación. Al seleccionar la opción “ Intercambio “, la aplicación muestra a todos los trabajadores con turno (distinto) del que tiene el trabajador solicitante.

El sistema permite un cambio de turno en el mismo día entre tipos de turnos diferentes con el fin de garantizar que la cobertura sea la misma antes del proceso del cambio.

¿Cómo se solicita un cambio tipo intercambio de turno?

Haz clic en el día del cuadrante que deseas realizar el tipo de cambio tipo intercambio, luego selecciona el turno que quieres intercambiar haciendo clic sobre él y hacer cambio → intercambio, ahora aparecen todos los trabajadores con turno asignado.

Nos encontramos con 2 opciones cambio día completo o cambio día seleccionado. La opción intercambio día completo consiste en que saldrá disponible los trabajadores que tengan el mismo número de turnos planicados que la persona que realiza la petición del intercambio. Por ejemplo, si el trabajador que realiza el intercambio tiene una jornada partida de 2 turnos, el sistema ofrecerá como trabajadores disponibles, aquellos que tengan también jornadas partidas de 2 turnos.

No aparecerán trabajadores con un turno, ni trabajadores con jornadas partidas con más de 2 turnos.

Una vez seleccionado el turno (y el trabajador), debe aprobarla el trabajador de destino, y el administrador, una vez apruebe o deniegue el intercambio, recibirá un aviso en aTurnos, o en el correo o móvil (si tiene los permisos activados). El proceso de validación de cambios se realiza en el menú peticiones y cambios, en la opción cambios pendientes.

En la validación final de los cambios pendientes el administrador puede validar los dos cambios que se generan en este tipo (intercambio) a la vez, con tan solo clicar en la acción de aceptar el cambio en uno de ellos se validará los dos registros generados en este cambio. Esta opción es posible en este tipo de cambios, en los tipos de cambios libres y doblajes no es posible, al no ser en el mismo día donde se generan los cambios, y el administrador puede decidir validar un día y otro no.

En este tipo de cambio el trabajador selecciona un turno que tiene planificado con el fin de que ese turno lo realice otro trabajador. El trabajador puede librar ese día (en el caso que solo tenga 1 turno planificado en ese día).

Si el trabajador en un mismo día tiene más de un turno planificado, dispone de dos opciones:

- Puede liberarse de un solo turno (Libre turno seleccionado), el turno que seleccione será el turno que se libera de hacer y se planificará en el día libre del trabajador que ha aceptado el cambio.
- Puede liberarse de todos los turnos planificados que tenga el mismo día (Libre día completo), y quedar libre de planificación en esta segunda opción, porque los turnos de ese día se insertarán en el trabajador que haya aceptado previamente este tipo de cambios de libres.

¿Cómo se solicita un cambio de turno tipo libre?

El trabajador puede solicitar cambiar su turno por un día libre.

Al seleccionar la opción “ Libre “, la aplicación muestra a todos los trabajadores con día libre ( es decir, sin turno asignado ), y deja elegir cual es el día que el trabajador quiere solicitar como libre. U na vez seleccionado al trabajador que va a hacer el turno planificado del otro trabajador, la aplicación pregunta si se quiere “ Dejar a deber ” o “ Devolver cambio “.

Los trabajadores que tienen planificación y pueden realizar el turno que quiere librar el trabajador que comienza el proceso de cambio de libre, no los muestra el sistema porque estos trabajadores al tener planificación doblaría una jornada. Para estos casos tienen que seleccionar el tipo de cambios de doblajes, que se describe en el siguiente aparatado.

- Si ‘ Dejar a deber ‘ el turno: el trabajador que antes tenía turno y con el cambio libra, deja a deber el turno para gestionarlo en otra ocasión, y más adelante asumirá el turno del trabajador que le hizo su turno. Si se deja a deber puede consultar las deudas entre los trabajadores en Registro → Debe / Haber Turno (ver Debe/Haber Turnos ), en caso de que se devuelva el cambio no genera “ deudas ” de turnos.

- Si realiza “ Devolver cambio ” de turno: en el mismo proceso de cambio de turno, cierra la gestión de cambios sin quedar nada pendiente. Si el trabajador (A), hace un turno para que el trabajador (B) libre, aTurnos te da la opción para que el trabajador (A) elija un día en el cuadrante para que el trabajador (B) realice un turno del trabajador (A).

En este tipo de cambio el trabajador selecciona un turno que tiene planificado con el fin de que ese turno lo realice otro trabajador (con planificación previa). El trabajador puede librar ese día (en el caso que solo tenga 1 turno planificado en ese día) haciendo doblar al compañero que acepta el turno.

Si en ese día tiene más de un turno, el turno que seleccione será el turno que se cambie en el cuadrante y planificación del trabajador que lo acepte.

Por ejemplo, si el trabajador que solicita tiene un turno M (de mañana) y quiere librar ese día, con el Doblaje va a permitirle asignar su turno M a un trabajador que tenga por ejemplo un turno T (en ocasiones está función está deshabilitada al incumplir el descanso diario de 12 horas entre turno y turno, ver Restricciones sobre descansos ).

¿Cómo se solicita un cambio tipo doblaje de turno?

Al marcar el día, la aplicación muestra a todos los trabajadores que tienen turno (distinto a la M del trabajador de origen del ejemplo) el día asignado, al seleccionar el turno y trabajador de destino, debes indicar si el turno se deja a deber o se devuelve (igual que lo comentado en el Hacer cambio → Libre).

De la misma forma que con el cambio de “ Libre “, el trabajador puede devolver ese turno que no hace al trabajador destino del cambio, seleccionando otro día en el cuadrante del trabajador destino.

Una de las principales funcionalidades de aTurnos, es permitir que los trabajadores de un mismo equipo puedan solicitar un cambio de turno a otro compañero.

Esta opción, según la configuración de los cambios, tendrá que ser aprobada por el trabajador, a quien se le solicita el cambio de turno, y/o los administradores del equipo (ver Flujo de aprobación de los cambios ), o por el contrario, no ser aprobado por nadie, validando que se ha realizado dicho cambio en el registro de acciones del equipo (ver Registro de acciones ).

Para más información sobre los cambios entre trabajadores, puedes ver el proceso desde el punto de vista del trabajador (ver ¿Cómo puedo cambiar de turno con un compañero? ) o consultar el proceso de aprobación desde el menú de “ Peticiones y cambios ” en el apartado de “ Cambios pendientes “.

Desde “ Hacer cambio “, el administrador puede realizar un cambio de turno (intercambio, libre o doblaje) entre dos trabajadores, dando incluso la posibilidad de que uno de los trabajadores implicado en el cambio pueda “ Devolver cambio ” de turno al otro trabajador implicado. Estas acciones podrán ser aprobadas por uno de los trabajadores afectados desde “ Cambios pendientes ” y finalmente por el propio administrador si así está configurado (ver Configuración de cambios ).

También cabe la posibilidad de que estos cambios se queden aprobados únicamente con la acción del administrador sin necesidad de ser validado por nadie.

En el caso de que la configuración en el proceso de cambios de turnos indique que los trabajadores no puedan solicitar cambios de turnos, éste proceso se queda inhabilitado independientemente del rol del usuario de aTurnos (ver Roles de usuario ).

### ¿Cómo realizar un cambio de turno por un libre un trabajador, a sí mismo?

Este proceso de cambio consiste en que un trabajador puede cambiar el turno planificado de un día con el libre de otro día en su cuadrante, es decir hacerse a sí mismo un cambio. Este proceso es posible dependiendo de la configuración de cambios ( menú → administrar → ajuste → cambios ) con la opción “ Permitir cambios de libre al mismo empleado ” marcado en “SI”.

El trabajador desde el cuadrante, sobre un turno planificado seleccionar la opción “ Libre “, la aplicación muestra todos los días libres disponibles ( es decir, sin turno asignado ).

Cuando el trabajador selecciona el día, aparece un formulario que resume el cambio y con la opción de poner un comentario antes de guardarlo.

Más especificaciones sobre la configuración del equipo relacionada con los cambios de turnos: acceda a este enlace.
