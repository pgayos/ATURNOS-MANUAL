---
schemaVersion: "1.0"
contentId: "peticiones-y-cambios-2-9-listado-de-peticiones-pendientes"
title: "Listado de peticiones pendientes"
description: "Aquí encuentras todas las peticiones pendientes por aprobar en los equipos en los que eres superusuario. Haciendo clic en “Acción” te permite navegar a la petición que selecciones."
contentType: procedure
module: "Peticiones y cambios"
submodule: "General"
intent: "Listado de peticiones pendientes"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
entities:
  - id: "listado"
    label: "Listado"
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
    - "https://manual.aturnos.com/knowledgebase/4-listado-de-peticiones-pendientes/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/4-listado-de-peticiones-pendientes/"
ai:
  answerableQuestions:
    - "¿Cómo puedo listado de peticiones pendientes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "16d25419dc8beb46e9ba9dbdb1cffa371f506a920e4e9c44b0d3787227ca071c"
  migratedAt: 2026-08-17
---
## Resumen

Aquí encuentras todas las peticiones pendientes por aprobar en los equipos en los que eres superusuario. Haciendo clic en “Acción” te permite navegar a la petición que selecciones.

## Contenido

En la primera columna aparece el nombre del equipo de las peticiones de permisos y cambios de turnos pendientes por gestionar y en la última columna, llamada acción, aparece 3 botones funcionales: vista del estado de las peticiones, aceptar y denegar las mismas. Al hacer clic en cualquiera de ellos, el superusuario accede a la página de peticiones y cambios del equipo asociado a la petición que quiere gestionar, donde realizará la gestión de la solicitud pendiente.
