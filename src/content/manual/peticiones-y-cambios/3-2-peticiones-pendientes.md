---
schemaVersion: "1.0"
contentId: peticiones-y-cambios-3-2-peticiones-pendientes
title: Peticiones pendientes
description: El listado de peticiones pendientes aparecerán aquellas peticiones de fichajes que los trabajadores del equipo han realizado. Las variables que aparecen en esta tabla son las siguientes:.
contentType: concept
module: Peticiones y cambios
submodule: Fichajes
intent: Peticiones pendientes
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: pendientes
    label: Pendientes
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
    - https://manual.aturnos.com/knowledgebase/3-2-peticiones-pendientes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-2-peticiones-pendientes/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre peticiones pendientes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-2-peticiones-pendientes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-2-peticiones-pendientes/
  contentHash: ac945f61321f299e719cf9914ceda7b36ba6292e0b2552026d0a7f04fa3799e4
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El listado de peticiones pendientes aparecerán aquellas peticiones de fichajes que los trabajadores del equipo han realizado. Las variables que aparecen en esta tabla son las siguientes:.

## Qué debes saber
- Trabajador: nombre del trabajador que ha realizado la petición.
- Fecha de solicitud: día, mes, año y hora de la solicitud.
- Marcaje solicitado: día, mes, año y hora del marcaje que se pide insertar en el Control de Presencia.
- Dirección: si es una entrada o una salida.
- Tipo: si se han creado tipos de marcaje (ver Crear Tipos de fichajes ), indica el tipo del marcaje no realizado.
- Localización: lugar asignado como localización (ver Crear Localizaciones ) del marcaje.
- Comentario: en este campo aparecerá una descripción del por qué no se ha realizado bien el marcaje (por ejemplo: se me ha olvidado fichar a la entrada/salida).
- Estado: en esta pestaña siempre se mostrará como pendiente.
- Acción: si se Acepta o Deniega la petición.

Las peticiones de fichajes pueden ser configuradas para ser aprobadas automáticamente (en este caso este listado aparecería vacío) o para ser aprobadas por un administrador. Para ver más sobre esta configuración accede al siguiente enlace: Ajustes de privacidad de Control de Presencia. En ambos casos, los fichajes insertados mediante el proceso de peticiones se registrarán como fichajes insertados por “petición” en el informe del trabajador y en el listado de fichajes.

Si el administrador quiere aceptar la petición de los fichajes del trabajador, tendrá que hacer clic en el botón de validación.

Si por el contrario lo que quiere es rechazar o denegar la petición, deberá pulsar sobre este botón.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![3.2 Peticiones pendientes](/media/manual/3-2-peticiones-pendientes-e126e9329c.png)
