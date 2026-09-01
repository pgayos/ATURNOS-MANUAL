---
schemaVersion: "1.0"
contentId: peticiones-y-cambios-e-historial-de-peticiones
title: Historial de peticiones
description: Desde esta pestaña se puede consultar todo el registro de peticiones (de permisos, horas y vacaciones) que realizan los trabajadores filtrando por la fecha en la parte superior, así como por.
contentType: concept
module: Peticiones y cambios
submodule: Vacaciones y ausencias
subtopic: ""
intent: Historial de peticiones
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: historial
    label: Historial
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
    - https://manual.aturnos.com/knowledgebase/2-5-3-historial-de-peticiones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-5-3-historial-de-peticiones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre historial de peticiones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-5-3-historial-de-peticiones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-5-3-historial-de-peticiones/
  contentHash: df6ac97183101f9f66c6577e873b4a3d0c54c31f8716cd018554ed80b89e6ee2
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre historial de peticiones, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Desde esta pestaña se puede consultar todo el registro de peticiones (de permisos, horas y vacaciones) que realizan los trabajadores filtrando por la fecha en la parte superior, así como por cualquier otro filtro (icono del embudo). El administrador puede ver el detalle de la petición haciendo clic en el icono del ojo en la columna “Acción”.

En este listado, las peticiones se pueden encontrar en distintos estados de confirmación:

- Aceptado. Se muestra con icono ‘check’. Los administradores responsables han aprobado la petición.

- Denegado. Se visualiza con un aspa. Los administradores responsables han rechazado la petición.

- Deshecho. Se indica un icono de reciclaje. Los administradores responsables han deshecho la petición aprobada o bien se ha borrado el absentismo que había sobre el turno planificado en ese día.

- Borrado. Se muestra con el icono de una papelera. Los administradores responsables o el sistema, ha borrado el evento que afectaba a la petición. Por ejemplo, si existe una petición aprobada de un permiso de día y se ha borrado el turno de ese día.

Si te aparecen peticiones denegadas que no se han confirmado por algún administrador del equipo, consulta el campo de comentario, si aparece Flujo cambiado, se debe a que en Administrar → Ajustes → Peticiones se ha modificado el flujo de aprobación para gestionar las peticiones. Cuando se produce un cambio en el flujo, las peticiones se deniegan automáticamente.

Si por algún motivo, luego de aprobar una petición, el administrador necesita deshacer la petición, lo puede hacer desde el historial de peticiones con la opción “deshacer acción”. Desde esta acción, no solo se eliminan los turnos de la petición (por ejemplo, unas vacaciones), sino que además recupera los turnos anteriores que tenía planificado el cuadrante antes de que se aprobase la petición. Es decir, vuelve la planificación que existía antes de las vacaciones.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![e. Historial de peticiones](/media/manual/e-historial-de-peticiones-bc67c50926.webp)

![e. Historial de peticiones](/media/manual/e-historial-de-peticiones-ae7515bc38.webp)

![e. Historial de peticiones](/media/manual/e-historial-de-peticiones-36864669ed.webp)

![e. Historial de peticiones](/media/manual/e-historial-de-peticiones-27105af4c1.webp)

![e. Historial de peticiones](/media/manual/e-historial-de-peticiones-434ac5de32.webp)

![e. Historial de peticiones](/media/manual/e-historial-de-peticiones-f1cae065f6.png)
