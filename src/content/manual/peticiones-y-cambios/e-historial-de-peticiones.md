---
schemaVersion: "1.0"
contentId: "peticiones-y-cambios-e-historial-de-peticiones"
title: "Historial de peticiones"
description: "Información sobre historial de peticiones, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Peticiones y cambios"
submodule: "Vacaciones y ausencias"
intent: "Historial de peticiones"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "historial"
    label: "Historial"
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
    - "https://manual.aturnos.com/knowledgebase/2-5-3-historial-de-peticiones/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-5-3-historial-de-peticiones/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre historial de peticiones?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "48d7219a25c0a50f25b23a32f8e7fed2211961b6e7cf76520cd1b7c978dd5b24"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre historial de peticiones, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Desde esta pestaña se puede consultar todo el registro de peticiones (de permisos, horas y vacaciones) que realizan los trabajadores filtrando por la fecha en la parte superior, así como por cualquier otro filtro (icono del embudo). El administrador puede ver el detalle de la petición haciendo clic en el icono del ojo en la columna “Acción”.

En este listado, las peticiones se pueden encontrar en distintos estados de confirmación:

- Aceptado. Se muestra con icono ‘check’. Los administradores responsables han aprobado la petición.

- Denegado. Se visualiza con un aspa. Los administradores responsables han rechazado la petición.

- Deshecho. Se indica un icono de reciclaje. Los administradores responsables han deshecho la petición aprobada o bien se ha borrado el absentismo que había sobre el turno planificado en ese día.

- Borrado. Se muestra con el icono de una papelera. Los administradores responsables o el sistema, ha borrado el evento que afectaba a la petición. Por ejemplo, si existe una petición aprobada de un permiso de día y se ha borrado el turno de ese día.

Si te aparecen peticiones denegadas que no se han confirmado por algún administrador del equipo, consulta el campo de comentario, si aparece Flujo cambiado, se debe a que en Administrar → Ajustes → Peticiones se ha modificado el flujo de aprobación para gestionar las peticiones. Cuando se produce un cambio en el flujo, las peticiones se deniegan automáticamente.

Si por algún motivo, luego de aprobar una petición, el administrador necesita deshacer la petición, lo puede hacer desde el historial de peticiones con la opción “deshacer acción”. Desde esta acción, no solo se eliminan los turnos de la petición (por ejemplo, unas vacaciones), sino que además recupera los turnos anteriores que tenía planificado el cuadrante antes de que se aprobase la petición. Es decir, vuelve la planificación que existía antes de las vacaciones.
