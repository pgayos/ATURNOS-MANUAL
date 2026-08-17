---
schemaVersion: "1.0"
contentId: "peticiones-y-cambios-f-historial-de-cambios"
title: "Historial de cambios"
description: "En esta pestaña aparecen todas las peticiones de cambios que se han solicitado según la fecha y los filtros establecidos."
contentType: reference
module: "Peticiones y cambios"
submodule: "General"
intent: "Historial de cambios"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "cambios"
    label: "Cambios"
  - id: "historial"
    label: "Historial"
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
    - "https://manual.aturnos.com/knowledgebase/2-5-5-historial-de-cambios/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-5-5-historial-de-cambios/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre historial de cambios?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "2c64c24db4468a7f01174c417564a7e07f9271f12cd15d785006c6644ad10129"
  migratedAt: 2026-08-17
---
## Resumen

En esta pestaña aparecen todas las peticiones de cambios que se han solicitado según la fecha y los filtros establecidos.

## Contenido

- Solicitado por: Muestra el usuario que realiza la petición de cambio de turno. El cambio suele hacerlo el trabajador que está implicado en el cambio de turno, aunque según la configuración de los cambios de turno lo puede realizar un administrador o incluso otro trabajador que no esté implicado en el cambio, por ello es importante revisar este registro para saber quién ha solicitado el cambio.
- Día cambiado: es el día en el que se realiza el cambio de planificación entre los trabajadores implicados.
- Día de solicitud: es el día en el que se realiza la solicitud de cambio de turno.
- Trabajadores implicados: son los trabajadores implicados en el cambio, es decir, los que van a tener cambios en su planificación si el cambio es aceptado.
- Acción: Es la columna que permite al administrador gestionar los cambios.

El Administrador desde la columna de acción puede:

- Visualizar la solicitud del cambio haciendo clic en el icono del ojo.
