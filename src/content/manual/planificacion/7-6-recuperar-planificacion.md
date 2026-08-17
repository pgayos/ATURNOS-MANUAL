---
schemaVersion: "1.0"
contentId: "planificacion-7-6-recuperar-planificacion"
title: "Recuperar planificación"
description: "Un superusuario puede recuperar la planificación de un trabajador desde el menú ‘Acciones’ de RRHH, en la opción ‘ Recuperar Planificación’."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Recuperar planificación"
audience:
  - role: "Administrador"
    access: applicable
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "planificacion"
    label: "Planificacion"
  - id: "recuperar"
    label: "Recuperar"
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
    - "https://manual.aturnos.com/knowledgebase/11-6-recuperar-planificacion/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/11-6-recuperar-planificacion/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre recuperar planificación?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "636a730df7e464c74c2fea6c1ef00f6e84ed37e35a45b30436ae3a27630f4afb"
  migratedAt: 2026-08-17
---
## Resumen

Un superusuario puede recuperar la planificación de un trabajador desde el menú ‘Acciones’ de RRHH, en la opción ‘ Recuperar Planificación’.

## Contenido

Para poder recuperar la planificación necesitamos conocer:

- E mail del trabajador, del cual queremos recuperar la planificación.
- Fecha de borrado, que es la fecha cuando se produjo el borrado de la planificación.

En el caso de no saber esta fecha con exactitud se puede informar otra fecha aproximada hasta conseguir que se muestre los turnos borrados en forma de tabla al hacer clic en le botón de acción “Buscar ”.

En la tabla que se muestra nos informa los tipos de turnos que se pueden recuperar en el cuadrante del equipo donde se borraron. Es importante indicar que los turnos se insertarán de nuevo solo en el cuadrante del equipo donde se perdieron, a pesar de que el trabajador esté activo en más de un equipo/cuadrantes. En esta misma tabla nos dará la siguiente información:

- Equipo: Nombre del equipo donde será insertado de nuevo los turnos.
- Tipo de turno: Abreviatura del turno que será insertada en el cuadrante.
- Día: Fecha en el cuadrante del trabajador donde se insertará el tipo de turno.
- Cuadrante: Si se ha borrado en el Cuadrante o Cuadrante Borrador.
- Fecha: Cuando se borró el tipo turno en el cuadrante del trabajador.
- Recuperado: si es turno eliminado, ya ha sido recuperado previamente.

Una vez tenemos buscados los turnos borrados, hay que recuperarlos.

Para recuperarlos debemos indicar:

- Fecha del evento borrado: desde qué fecha y hasta qué fecha se quiere recuperar.
- Recuperar solamente la última planificación borrada de cada día: esta opción permite recuperar la última planificación que se ha borrado dentro de las fechas seleccionadas, de esta forma podemos evitar el solapamiento de planificaciones si se han borrado varias veces dentro de las mismas fechas y con distintos turnos.

El último paso es seleccionar los turnos borrados a recuperar, se pueden seleccionar desde todos a varios. Para completar el proceso hay que hacer clic sobre ‘Recuperar seleccionados’.
