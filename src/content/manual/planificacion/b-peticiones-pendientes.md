---
schemaVersion: "1.0"
contentId: "planificacion-b-peticiones-pendientes"
title: "Peticiones Pendientes"
description: "Aprende a peticiones Pendientes, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Peticiones Pendientes"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "pendientes"
    label: "Pendientes"
  - id: "peticiones"
    label: "Peticiones"
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
    - "https://manual.aturnos.com/knowledgebase/2-5-2-peticiones-pendientes/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-5-2-peticiones-pendientes/"
ai:
  answerableQuestions:
    - "¿Cómo puedo peticiones Pendientes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "602dfa9fa0d61a43c8ad29f8582ded163a021e2b323bcb88184a5c51aa67dd61"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a peticiones Pendientes, con instrucciones y contexto revisables por el equipo de aTurnos.

Para acceder a esta pestaña debes ir al Menú → Cuadrante → Peticiones y cambios → Pendientes. Aquí aparecerán todas las peticiones de permisos, vacaciones y horas pendientes de gestionar en el periodo seleccionado, así cómo para los filtros aplicados.

### Información de las columnas

- Trabajador. Nombre del trabajador que ha pedido la petición.
- Desde. Fecha de inicio de la petición, por ejemplo, inicio de las vacaciones.
- Hasta: Fecha de fin de la petición, por ejemplo, fin de las vacaciones
- Fecha de solicitud. Día y hora en que se realizó la petición.
- Tipo. En este caso sería el tipo de turno, vacaciones o ausencias que ha solicitado.
- Localización. Identifica si esta petición está asignada una localización o departamento
- Cuadrante. La planificación que existe en el cuadrante cuando se registró la petición.
- Confirmado. Si la petición está en proceso (Símbolo de pausa) confirmada (Símbolo de check) o denegada (Símbolo X). Además, si ha sido denegada una vez aprobada, aparece el símbolo de reciclar y vuelve a tener los turnos que tenía antes de la petición.
- Comentario. Aquí se mostrarán con el icono “diálogo” si existe algún comentario, para poder ver el comentario puedes hacer clic en el símbolo, los comentarios se registran al crear la petición o durante el proceso de aprobación.
- Adjunto. Puedes ver si existe algún documento adjunto, para ello tienes que tener activado el módulo de documentos.

Para gestionar las diferentes peticiones hay que hacer clic en los botones que aparecen en la columna de: Acción. Siendo las funciones de cada botón:

1. Visualizar el registro en el cual se incluye el detalle de la petición.

2. Bloquear la petición.

3. Ir al asistente para estudiar la petición y aceptarla, decidir luego o denegarla.

4. Denegar la petición (con esta opción la petición se deniega directamente).

El asistente de peticiones es distinto para cada tipo de petición y depende de si es necesario cubrir el puesto del trabajador, ver el resultado final previamente a aceptar la petición, etc.

### ¿Cómo se aprueban las peticiones?

1. Acceder a Menú → Cuadrante → Peticiones y Cambios → Peticiones pendientes.
2. Visualizar la lista con las peticiones que tienes pendientes de aprobar o denegar
3. Para aprobarla, tiene que hacer clic en el botón de acciones “ ir al asistente ” (botón verde del check en la columna de acciones). En este caso, se abrirá la siguiente pestaña:

Una vez dentro del asistente de peticiones aparecen los siguientes campos de configuración, aunque dependiendo del tipo de petición aparecen más o menos y son más o menos configurables.

Este campo te permite elegir si quieres que las peticiones sustituyan la planificación del trabajador en el cuadrante.

- Sustituir: Los turnos planificados se sustituyen por el turno V.
- Añadir: Se añade a los turnos planificados, el turno V. Con esta opción mantienes la planificación, por ejemplo, para una sustitución posterior.

Esta opción aparece en las peticiones de tipo vacaciones. En este campo se configura la opción de escoger si las vacaciones se deben considerar como días laborables (días donde hay turno insertado) o días naturales (todos los días incluidos los días de descanso como son los fines de semana, por ejemplo). Si no dispones de la opción de elegir laborables o naturales, sino que por defecto solo te aparece una de ella, esto se debe a la configuración en Administrar → Ajustes ( Ver más detalle ).

Si escoges “Sí” podrás ver cómo se despliega el cuadrante en la parte inferior, los turnos que el trabajador ya no podrá realizar, para asignarlos a otros compañeros. Además, se puede configurar que estos turnos los realicen los trabajadores disponibles, para hacer esta sustitución de forma más personalizada.

También, con el cuadrante que se despliega en la parte inferior, se puede decidir de manera manual al trabajador que se quiere sustituir cada turno y, el turno se aplicará a dicho trabajador (en el momento que estés saltando una restricción al asignar manualmente a otro compañero, el sistema te genera un aviso).

Esta opción aparece solo si el tipo de petición es vacaciones. Esta opción no es configurable, es meramente informativa para que el administrador pueda consultar el saldo de vacaciones.

### ¿Cómo se deniegan las peticiones?

Sea la causa que sea, los administradores pueden denegar la petición solicitada por el trabajador. Para denegar la petición, la persona que administra el equipo tiene que hacer clic sobre el botón del aspa roja “Denegar petición”.

Más información sobre peticiones en aTurnos:

¿Cómo puedo gestionar las peticiones de vacaciones, absentismos, turnos, horas y libres?

¿Cómo deshacer una petición ya aprobada?
