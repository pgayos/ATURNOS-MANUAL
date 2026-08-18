---
schemaVersion: "1.0"
contentId: peticiones-y-cambios-2-9-listado-de-peticiones-pendientes
title: Listado de peticiones pendientes
description: Aquí encuentras todas las peticiones pendientes por aprobar en los equipos en los que eres superusuario. Haciendo clic en “Acción” te permite navegar a la petición que selecciones.
contentType: procedure
module: Peticiones y cambios
submodule: General
intent: Listado de peticiones pendientes
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: listado
    label: Listado
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
    - https://manual.aturnos.com/knowledgebase/4-listado-de-peticiones-pendientes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-listado-de-peticiones-pendientes/
ai:
  answerableQuestions:
    - ¿Cómo puedo listado de peticiones pendientes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-listado-de-peticiones-pendientes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-listado-de-peticiones-pendientes/
  contentHash: 7b3d815f70691faa2162a0190782a3d91c759e22123dc7c1068ad2174ce455cc
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Aquí encuentras todas las peticiones pendientes por aprobar en los equipos en los que eres superusuario. Haciendo clic en “Acción” te permite navegar a la petición que selecciones.

## Procedimiento
En la primera columna aparece el nombre del equipo de las peticiones de permisos y cambios de turnos pendientes por gestionar y en la última columna, llamada acción, aparece 3 botones funcionales: vista del estado de las peticiones, aceptar y denegar las mismas. Al hacer clic en cualquiera de ellos, el superusuario accede a la página de peticiones y cambios del equipo asociado a la petición que quiere gestionar, donde realizará la gestión de la solicitud pendiente.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
