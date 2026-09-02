---
schemaVersion: "1.0"
contentId: peticiones-y-cambios-2-3-peticiones-y-cambios
title: Peticiones y cambios
description: En esta pestaña el trabajador puede visualizar tanto las peticiones como los cambios pendientes de validar por los administradores del equipo.
contentType: concept
module: Peticiones y cambios
submodule: Vacaciones y ausencias
subtopic: ""
intent: Peticiones y cambios
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: cambios
    label: Cambios
  - id: peticiones
    label: Peticiones
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
    - https://manual.aturnos.com/knowledgebase/2-3-peticiones-y-cambios/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-3-peticiones-y-cambios/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre peticiones y cambios?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 7
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-3-peticiones-y-cambios/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-3-peticiones-y-cambios/
  contentHash: 61c5ac896530df02fed7e3351e5454cbd6d77ef03b64ae58e53cbb76156937c5
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

En esta pestaña el trabajador puede visualizar tanto las peticiones como los cambios pendientes de validar por los administradores del equipo.

También se mostrará un listado con el historial de peticiones, por un lado, y el historial de cambios, por otro, de aquellas peticiones y cambios registrados que hayan sido validados.

Por último se encuentra el listado de las ofertas de turnos a las que se puede apuntar el trabajador cuando desde el administrador del equipo se crea la oferta de un turno para un día concreto del cuadrante.

### Acción de nueva petición y filtros

Como administrador o trabajador podrás realizar peticiones sobre diferentes aspectos del convenio laboral (vacaciones, permisos, permisos temporales) y de la propia planificación del cuadrante (libres, turnos y horas).

Para iniciar el proceso, se puede hacer haciendo clic en el botón de ‘Acciones’ del que se desplegará ‘Nueva petición’. Esta acción es posible realizar también en el mismo cuadrante, solo haciendo clic sobre el día que se quiere solicitar (ver Petición en cuadrante ). Se abrirá un modal donde deberás informar los siguientes datos para generar la petición:

- Tipo: vacaciones, permisos, permisos temporales, horas, turnos y jornadas libres.
- Fecha de inicio y fin.
- Localización: en el caso de querer escoger una localización determinada.
- Tipo de absentismo total o temporal (permiso), turno y hora s: aquí indicamos un tipo absentismo concreto que podamos seleccionar. También tenemos la opción de en el caso de pedir turnos u horas, elegir un tipo de turno o de hora.
- Comentarios: añadir algún tipo de anotación que identifique la razón de la petición.

Una vez enviada la petición, cuando se cliquea en el botón “guardar “, se queda registrada en peticiones pendientes, en el cuadrante destaca en color morado la propuesta de la petición y al administrador le llegará un aviso de petición pendiente, notificaciones y mail (depende de configuración) avisando de que se han generado peticiones y están pendiente de ser gestionadas.

El administrador para gestionarlas puede hacerlo desde el propio cuadrante (propuesta morada que destaca en la planificación del cuadrante) o desde las peticiones y cambios del menú.

Una vez que el administrador haya aprobado tu petición, te llegará un correo y en las solicitudes pendientes confirmarás tu petición, y en el cuadrante se reflejara en su color según el tipo de petición: naranjas vacaciones, negros permisos, horas se representa con el intervalo de tiempo solicitado, y el libre sin nada o con la letra L según configuración del administrador.

En la barra que aparece debajo del botón de ‘Nueva petición’, tendremos la opción de filtrar las peticiones o cambios según la fecha que indiquemos.

### Peticiones pendientes

Por medio de esta pestaña, hacemos el seguimiento de todas las solicitudes que hemos hecho de vacaciones, permisos, turnos, horas o jornadas libres.

Información de las columnas:

- Trabajador: Nombre del trabajador al que le afecta la petición, que será el propio trabajador.
- Petición: Día y hora en que se realizó la petición.
- Desde: Fecha de inicio de la petición, por ejemplo, inicio de las vacaciones.
- Hasta: Fecha de fin de la petición, por ejemplo, fin de las vacaciones.
- Tipo de turno: En este caso sería el tipo de turno, vacaciones o ausencias que ha solicitado.
- Localización: Identifica si esta petición está asignada una localización o departamento
- Cuadrante: La planificación que existe en el cuadrante cuando se registró la petición.
- Confirmado: Si la petición está en proceso (Símbolo de pausa) confirmada (Símbolo de check) o denegada (Símbolo X). Además, si ha sido denegada una vez aprobada, aparece el símbolo de reciclar y vuelve a tener los turnos que tenía antes de la petición.
- Comentario: Aquí se mostrarán con el icono “diálogo” si existe algún comentario, para poder ver el comentario puedes hacer clic en el símbolo, los comentarios se registran al crear la petición o durante el proceso de aprobación.
- Adjunto: Puedes ver si existe algún documento adjunto, para ello tienes que tener activado el módulo de documentos.

Para gestionar las diferentes peticiones por parte del administrador te lo contamos en el siguiente enlace: ¿Cómo se gestionan las peticiones pendientes si eres administrador del equipo?

Si eres trabajador, las ‘Acciones’ que puedes realizar en solicitudes pendientes son las siguientes: ver registro de la petición pendiente y denegarla.

- Ver registro: Haciendo clic en el botón de acción con el símbolo del ojo, se incluye el detalle de la petición.

- Denegar petición: en el caso de querer cancelar una petición que hemos hecho (este permiso es posible que no esté habilitado para todos los usuarios con rol de trabajador).

Más información sobre peticiones pendientes:

¿Cómo puedo gestionar las solicitudes de vacaciones, absentismos, turnos, horas y libres?

¿Cómo puedo gestionar las vacaciones?

¿Cómo puedo planificar una propuesta de vacaciones a los trabajadores?

### Historial de peticiones

Aquí dispondremos de un registro histórico de todas las peticiones que hemos hecho, tanto las confirmadas, como las denegadas por los administradores del equipo. También podremos ver quiénes nos las han confirmado y quién las ha denegado.

### Cambios pendientes

En esta pestaña le aparecerán todos aquellos cambios pendientes de confirmar. Por ejemplo, cuando un compañero quiere intercambiar un turno, al otro trabajador le indique una notificación en Cambios pendiente. En la columna de “acción” se puede visualizar el detalle del cambio, aceptarlo o denegarlo (al hacer clic en una de estas acciones, el cambio se aprueba o deniega directamente).

### Historial de cambios

En esta pestaña aparecen todas las solicitudes de cambios que se han realizado entre las fechas indicadas en la barra superior.

El trabajador puede visualizar el detalle del cambio haciendo clic en el icono del ‘ojo’.

Se podrá ver qué turnos y en qué fechas está afectando el cambio, así como el trabajador origen del cambio (quién lo solicitó) y el trabajador destino (el compañero que lo valida). El detalle se completa con el compañero y administrador que tienen que validar el cambio y en qué estado se encuentra la acción.

En este ejemplo el cambio está aprobado.

En el caso de que el trabajador destino lo haya denegado, aparecería de la siguiente forma.

### Oferta de turno

El administrador ofrece un turno de trabajo al equipo para que los trabajadores interesados se apunten y finalmente el administrador valide quien tendrá el turno planificado. El/los trabajadores que estén interesados en asumir ese turno, lo selecciona en la “oferta de turno”. El turno será planificado en el cuadrante al trabajador que haya decidido el administrador en un proceso de selección.

¿Cómo coge el turno ofertado un trabajador?

- Cuando existe una oferta de turno, al trabajador se le activa una alerta en su foto de perfil, además de recibir un e-mail con la información de una oferta de turno por parte del administrador. Puede acceder a esa oferta, desde esta alerta o desde menú/cuadrante/peticiones.
- En el apartado Oferta de turno, aparecen todas las ofertas de turnos que propone el administrador. El trabajador con la acción de “coger” decide que se ofrece a realizar el turno de trabajo.

Para apuntarte a un turno ofertado, solo tienes que pulsar el botón de acción.

Aún no está planificado. Será el administrador quien decida, a quién planificar el turno, entre todos los trabajadores que han realizado la acción de “coger”. Después, las ofertas cuando son asignadas se solicitan en solicitudes de turno de un empleado que son aprobadas directamente por el administrador. Así dispone del asistente de peticiones para poder realizar las comprobaciones en las peticiones.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Acción de nueva petición y filtros](/media/manual/accion-de-nueva-peticion-y-filtros-cc461c3b62.png)

![Peticiones pendientes](/media/manual/peticiones-pendientes-cb7055d467.webp)

![Peticiones pendientes](/media/manual/peticiones-pendientes-907ede8cd2.png)

![Peticiones pendientes](/media/manual/peticiones-pendientes-21c9ed80fb.webp)

![Acción de nueva petición y filtros](/media/manual/accion-de-nueva-peticion-y-filtros-c3c2841252.png)

![Historial de peticiones](/media/manual/historial-de-peticiones-a700246a8b.png)

![Historial de cambios](/media/manual/historial-de-cambios-e54a932695.png)

![Cambios pendientes](/media/manual/cambios-pendientes-d6f926fb9d.png)

![Historial de cambios](/media/manual/historial-de-cambios-f1a9291f3a.png)

![Peticiones pendientes](/media/manual/peticiones-pendientes-851dee13b5.png)

![Historial de cambios](/media/manual/historial-de-cambios-5d09407e9c.png)
