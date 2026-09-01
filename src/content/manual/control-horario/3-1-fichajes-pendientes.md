---
schemaVersion: "1.0"
contentId: control-horario-3-1-fichajes-pendientes
title: Fichajes pendientes
description: En ocasiones es posible que, por razones de configuración, técnicas u olvido del trabajador, algunos fichajes no sean realizados por los trabajadores al inicio o fin de su turno de trabajo.
contentType: reference
module: Control horario
submodule: Fichajes
subtopic: ""
intent: Fichajes pendientes
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: fichajes
    label: Fichajes
  - id: pendientes
    label: Pendientes
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
    - https://manual.aturnos.com/knowledgebase/3-1-fichajes-pendientes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-1-fichajes-pendientes/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre fichajes pendientes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-1-fichajes-pendientes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-1-fichajes-pendientes/
  contentHash: bd6410c07b58046e17916776de4985e09996465fdf8eea1c60e27e448581b25a
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En ocasiones es posible que, por razones de configuración, técnicas u olvido del trabajador, algunos fichajes no sean realizados por los trabajadores al inicio o fin de su turno de trabajo.

## Opciones y datos disponibles
aTurnos dispone de esta función donde los administradores pueden solicitar y gestionar aquellas peticiones de fichajes que no se ficharon.

Las peticiones de fichajes pueden ser configuradas para ser aprobadas automáticamente (ver ¿Cómo configurar peticiones de fichajes auto aprobables? ) o para ser aprobadas por un administrador (ver Privacidad de Control de Presencia ).

Los fichajes insertados mediante el proceso de peticiones se registrarán como fichajes insertados por ‘ Petición’ en el listado de fichajes.

También se indicará en el informe del trabajador con la abreviatura de la acción de marcaje, en este caso una (P) de petición.

El administrador de un equipo que esté planificado en el mismo, puede realizar las solicitudes de petición de marcaje desde el modal de ‘Fichajes pendientes’, ya que le aparecerán todos aquellos fichajes que habiendo turno en ese día, no se han realizado. La visualización de estos fichajes, dependerá de las fechas indicadas en la barra superior.

Los administradores de los equipos que así lo tengan permitido por configuración (ver Visibilidad del perfil y Privacidad de Control de Presencia ) y tengan planificación, pueden realizar las peticiones de marcaje desde la barra superior, desde el botón ‘Acciones’.

Lo primero que se debe saber es si el marcaje que se va añadir es una entrada o una salida, haciendo clic en el botón del marcaje que se necesita solicitar como petición.

Al hacer clic sobre los botones ‘Añadir entrada’ y/o ‘Añadir salida’ se despliega el siguiente formulario a completar:

- Fecha/Hora: se indica el día, mes, año y la hora exacta del marcaje no realizado para que sea insertado.
- Tipo de marcaje: según los tipos de fichajes creados, se elegirá el tipo de fichaje que no se ha registrado.
- Localización: se indica la localización del fichaje (ver Localizaciones ).
- Comentario: en este bloque se informa con una descripción la razón por la cuál no se ha realizado o se ha registrado mal el marcaje, para que el administrador lo tome en cuenta a la hora de validar la petición.

Para que se registre la petición, se debe pulsar sobre el botón ‘Guardar’.

Siempre que haya un turno planificado en un día y no se hayan realizado fichajes dentro de la franja horaria del mismo, en el listado de fichajes pendientes, se visualizará el marcaje con inicio y fin del turno planificado que no fue realizado y la opción de ‘Solicitar’ ese marcaje pendiente como una petición.

Al hacer clic sobre ‘Solicitar’, automáticamente se carga el modal con el formulario de peticiones de fichajes con la entrada y salida del turno añadidas, únicamente para finalizar el registro de la petición de los fichajes, habría que pulsar sobre ‘Guardar’.

Los fichajes que hayan sido solicitados, pero sigan pendientes de ser aprobados (ver Peticiones pendientes de fichajes ) aparecerán en la columna ‘Fichajes solicitados’ del listado de fichajes pendientes.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![3.1 Fichajes pendientes](/media/manual/3-1-fichajes-pendientes-c1d92d3c51.png)

![3.1 Fichajes pendientes](/media/manual/3-1-fichajes-pendientes-b2436369fa.png)

![3.1 Fichajes pendientes](/media/manual/3-1-fichajes-pendientes-4073e12848.png)

![3.1 Fichajes pendientes](/media/manual/3-1-fichajes-pendientes-b6d17133bc.png)

![3.1 Fichajes pendientes](/media/manual/3-1-fichajes-pendientes-bfd5cdbb6a.png)

![3.1 Fichajes pendientes](/media/manual/3-1-fichajes-pendientes-9f7cc3bd44.png)

![3.1 Fichajes pendientes](/media/manual/3-1-fichajes-pendientes-81eac91d97.png)

![3.1 Fichajes pendientes](/media/manual/3-1-fichajes-pendientes-92d9de883a.png)

![3.1 Fichajes pendientes](/media/manual/3-1-fichajes-pendientes-098fae9e54.png)
