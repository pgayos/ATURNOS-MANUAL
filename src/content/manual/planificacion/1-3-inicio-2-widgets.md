---
schemaVersion: "1.0"
contentId: planificacion-1-3-inicio-2-widgets
title: Inicio 2 (Widgets)
description: En la pantalla de Inicio de aTurnos se pueden visualizar los “Widgets” o “Cajas” configurados en el equipo.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Inicio 2 (Widgets)
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
    - https://manual.aturnos.com/knowledgebase/1-3-inicio-widgets-2/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-3-inicio-widgets-2/
ai:
  answerableQuestions:
    - ¿Cómo puedo inicio 2 (Widgets)?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 9
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-3-inicio-widgets-2/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-3-inicio-widgets-2/
  contentHash: ef99731c4df445b9c5b85e581b81b7c4be515c3520fdfa354db776913c5b1df6
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a inicio 2 (Widgets), con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
En la pantalla de Inicio de aTurnos se pueden visualizar los “Widgets” o “Cajas” configurados en el equipo. Se trata de información clave para las gestiones diarias y que se adapta a cada perfil, es decir, la información que ven los administradores en comparación a la que pueden ver los trabajadores diferentes, dependiendo de la configuración, seleccionando los widgets para cada rol.

Para configurar esta pantalla de inicio accede a Administrar → Ajustes → Pantalla de Inicio (ver configuración de pantalla de inicio y más widgets). Según el rol, existiten diferentes widgets, y éstos tiene que ser seleccionado por un administrador, para saber cuáles serán Widgets visibles, o por el contrario, Widgets no visibles.

A continuación explicamos los widgets disponibles para administradores y superusuarios:

Identificado como widget_notice. Este widget permite publicar una noticia en la página de inicio, creada previamente por el administrador. Esta noticia será visible hasta que sea borrada por el administrador.

Para dar de alta una noticias, o borrarla se realiza desde Administrar → Ajustes → Pantalla de Inicio

Identificado como chat/tablón de anuncios. En el tablón se podrán hacer avisos y comentarios para el resto de los compañeros del equipo. Todos los usuarios que componen el equipo recibirían un correo, notificando que se ha añadido un nuevo comentario al tablón de anuncios (dependiendo de la configuración de las notificaciones ). Si has enviado un mensaje al chat del grupo y lo deseas borrar, puedes hacer clic en la X que aparece en tu mensaje.

Identificado como Calendario. Aparece la información del cuadrante resumida a modo de calendario con los turnos y días de vacaciones planificados del propio usuario. Desde esta función se puede ver la planificación de otros meses, e incluso vista por semana o día.

Identificado como Trabajadores planificados hoy. Muestra el número de trabajadores que hay en el día actual, planificados con respecto al total que forma el equipo.

Identificado como Peticiones. Aparecen todas aquellas peticiones que están aún pendientes de aceptar o denegar. Además, puedes añadir peticiones nuevas haciendo clic en el icono de “+”.

Identificado como Horas Equipo 2020. Número de horas planificadas, tanto a la semana, al mes y al año, respecto a las totales según contrato/convenio en el año actual de todos los trabajadores del equipo. Las horas contrato/convenio son las indicadas en el perfil de cada uno de estos usuarios.

Identificado como Horas Mensuales. Representa un gráfico con tu cantidad de horas planificadas del mes actual con respecto al total por contrato indicado en tu perfil en “Horas mensuales”.

Identificado como Horas Anuales (Trabajador). Total de horas computadas en el año (según cuadrante) en comparación con las horas establecidas por contrato al año, del propio usuario.

Identificado como Usuarios dentro. Informa de los trabajadores que, teniendo turno u horas planificadas en su cuadrante, han fichado el inicio de su jornada laboral en el control de presencia.

Identificado como Mi próximo turno. Informa cuál es el siguiente tipo de turno y día planificado del propio usuario.

Identificado como Vacaciones del año. Informa el balance de los días vacaciones del propio usuario, donde se muestran las vacaciones devengadas a lo largo del año en comparación a las vacaciones planificadas.

Identificado como Archivos (Trabajador). Muestra los documentos a los que tiene permiso de acceder el propio usuario.

Identificado como Información de planificación (Trabajador). Muestra el turno programado a fecha de día presente.

Identificado como Blog (Trabajador). Muestra los Post del Blog aTurnos publicados recientemente, con información de actualidad relacionada con el sistema. Para cambiar la información que se muestra en este apartado, y mostrar tu propio blog u otra página, puedes seleccionar en el campo de RSS: usar blog personalizado, e insertar en el campo de URL, la URL del RSS de tu blog.

Identificado como Nómina (Trabajador). Muestra el periodo correspondiente a la nómina a la que da acceso.

Identificado como Widget Tareas/Citas (Trabajador). Muestra las tareas o citas planificadas en la fecha correspondiente, así como un botón de clientes para acceder a su página dedicada, otro para añadir una tarea que se requiera, así como un botón de descarga para la plantilla, en el formato que se requiera, de entre los existentes en el desplegable habilitado.

Identificado como Turnos Ofertados (Administrador Planificador). Permite ver listado de Ofertas de turno activas en el equipo, detallando tipo de turno ofertado y el día en el que se desea cubrir.

Identificado como Cambios (Administrador Planificador). Se muestran los cambios pendientes de validación, así como dos botones: el ‘+’ a continuación del título, que lleva al cuadrante para gestionar los cambios de turno, y el ‘ver histórico’, que enlaza con la pantalla de peticiones, cambios y ofertas pendientes.

Identificado como Demandas (Trabajador). Muestra si en la fecha seleccionada en el widget, hay alguna demanda a satisfacer, así como la posibilidad de navegar entre fechas para ver las demandas asociadas a éstas.

Identificado como Tareas (Trabajador). Este widget funciona tanto como asistente, como reflejo de las tareas existentes, con su seguimiento por colores, como se muestra en la leyenda. Tiene dos botones con vínculos: ‘Cómo configurar una cita previa’, que lleva a su página del manual, y ‘Nueva tarea’, que abre la pestaña para crear una nueva pestaña. A su derecha muestra en una tabla las tareas creadas.

Identificado como Saldo de horas anuales de un tipo de absentismo al año (Trabajador). Muestra el balance de horas de la restricción “1.15 Máximo de horas planificadas de un tipo de absentismo al año”.

Identificado como Saldos de horas (Trabajador). Muestra los balances de las restricciones:

- 5.1 Limitar las horas planificadas al contrato del trabajado
- 5.5 Limitar las horas extras planificadas al año a las informadas en el perfil del trabajador
- 5.8 Limitar las horas complementarias planificadas al año a las informadas en el perfil del trabajador
- 5.12 Máximo de un tipo de hora determinado al año

Identificado como Acumulado control horario (Trabajador). Se muestra el total de horas no ajustadas del estado de horas.

Identificado como WIDGET_ACUMULATED_WEEK (Trabajador). Muestra el acumulado de las horas realizadas (programadas y fichadas) de la semana en curso.

Identificado como WIDGET_ACUMULATED_MONTH (Trabajador). Muestra las horas realizadas frente a las horas programadas en el mes visualizado por la delimitación de fechas seleccionadas en el widget.

Identificado como Demandas medias (Trabajador).

Identificado como Saldos pendientes (Trabajador). Muestra el balance con las restricciones:

- 4.4 Máximo de un tipo de absentismo al año tiene que ser menor a un tipo de hora
- 4.5 Máximo de un tipo de absentismo al año que tiene que ser menor a un tipo de turno
- 4.10 Máximo de horas de un tipo de absentismo no puede superar las horas planificadas de un tipo de turno en un periodo

Identificado como Alertas semanales control horario (Trabajador).

Identificado como WIDGET_LAST_MONTH_USER_PAYROLL_DAILY (Trabajador).

Identificado como Ir al cuadrante por día (Administrador Validador). Lleva al cuadrante en el día actual.

Identificado como Validación timecard (Administrador validador). Widget que muestra el fichaje de los trabajadores en la jornada. Si se hace clic en ‘ir a timecard localizado’, redirige la página hacia la pestaña ‘control de presencia (timecard localizado)’.

Identificado como Porcentaje de fichajes modificados (Administrador Validador). Muestra el tanto por ciento de jornadas cerradas por fichaje en el día actual.

Identificado como Widget Tareas/Citas. Este widget funciona tanto como asistente, como reflejo de las tareas existentes, con su seguimiento por colores, como se muestra en la leyenda. Tiene tres botones con vínculos: ‘Cómo configurar una cita previa’, que lleva a su página del manual, ‘Nueva tarea’, que abre la pestaña para crear una nueva pestaña, y ‘crear nuevo enlace’. A su derecha muestra en una tabla las tareas creadas.

Identificado como Documentos no leídos. Muestra si ha habido alguna subida de documento que tiene que ser leído, pero no ha sido abierto por parte del administrador.

Identificado como WIDGET_WORKER_LAST_NOT_CHECKING_CLOSE. Muestra si en algún turno realizado con anterioridad, se ha marcado un fichaje, pero no se ha realizado ninguno otro para cerrar el turno realizado, indicando su fecha, y en qué periodo falta el fichaje nombrado.

Identificado como Fichajes sin cerrar del equipo. Muestra cuántos fichajes no se han cerrado en los turnos realizados con anterioridad.

Identificado como Datos Personalizados. Muestra los datos personalizados del propio usuario (ver más sobre datos personalizados).

Identificado como Especialidades. Muestra el listado de especialidades creadas en el equipo, indicando número de trabajadores que tienen asignada cada una de ellas.

Identificado como Registro de Acciones. Este widget permite ver las últimas acciones que han dado lugar en el equipo. Solo se mostrarán los datos o acciones que cumplan con el filtro activado en Registro → Acciones. Para más información sobre el historial de acciones accede al siguiente enlace: Log de Acciones

Identificado como Turnos Ofertados (Administrador Planificador). Ofertas de turnos existentes, visualiza cantidad de trabajadores inscritos. Con el botón ‘+’, se despliega la ventana de crear una oferta de turno.

Identificado como Cobertura Demanda. Muestra en un gráfico las demandas entre las fechas que aparecen en el eje horizontal de la gráfica, así como los trabajadores ajustados a esas demandas, en la misma gráfica mostrada como una línea de otro color.

Identificado como Trabajadores planificados sin fichaje hoy (Administrador total). Muestra listado de trabajadores que están planificados el día de hoy pero que no han fichado o no han registrado el inicio de su jornada.

Identificado como Porcentaje de fichajes modificados (Administrador Validador).

Para saber más sobre el resto de ‘widgets’, haz clic aquí.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-11a14dd054.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-7fb29c3621.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-0fb4da96b5.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-416cd18078.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-d2c9a23cd8.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-1ac811310b.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-dd3992ae72.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-08ff7783f9.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-36053f4f8a.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-85f1de65f0.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-97aea77621.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-28546fbeb3.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-41b494cdee.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-f3dfd42e84.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-9a5b623d84.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-45c7b9d1d2.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-d8c94b3f72.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-ed1b5248aa.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-635c083528.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-cb8ff96ad1.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-1c2153e0af.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-ba4c8111ba.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-3e209d27a3.webp)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-cb935de723.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-0bc2be4a1f.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-f7b8a65c8c.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-cdae424e34.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-d9e5cb2f89.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-35e69a4f98.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-302cf5bc77.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-49582179e9.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-36b25f6ce4.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-11f0b60c2c.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-7d53dd9105.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-be393aab38.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-2d3ced83b0.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-d14796480f.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-340a6dc985.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-3f6d965928.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-a6ac395a5a.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-053575394c.png)

![1.3. Inicio 2 (Widgets)](/media/manual/1-3-inicio-2-widgets-c357635da0.png)
