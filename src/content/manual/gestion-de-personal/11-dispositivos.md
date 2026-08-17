---
schemaVersion: "1.0"
contentId: "gestion-de-personal-11-dispositivos"
title: "Dispositivos"
description: "En este listado se muestran los dispositivos registrados en el WallApp por Compañía."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Dispositivos"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
  - role: "Desarrollador API"
    access: applicable
entities:
  - id: "dispositivos"
    label: "Dispositivos"
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
    - "https://manual.aturnos.com/knowledgebase/11-dispositivos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/11-dispositivos/"
ai:
  answerableQuestions:
    - "¿Cómo puedo dispositivos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "0bd1e108131d6286f06013ed0f34cdc3064a470abb46145ccfa22c003af5289b"
  migratedAt: 2026-08-17
---
## Resumen

En este listado se muestran los dispositivos registrados en el WallApp por Compañía.

## Contenido

Se pueden cargar, seleccionando la Compañía.

También se puede ‘Añadir dispositivo’ que no esté dentro de una Compañía.

Con el objetivo de ayudar a la integración de dispositivos con aTurnos y otras aplicaciones, se pueden generar un token del dispositivo.

Para visualizar el Token, el superusuario tendrá que indicar su contraseña.

Por último, existen tres acciones posibles:

- Modificar dispositivo, editar la Compañía o el nombre que describe al dispositivo.

También es posible sin necesidad de registrar los dispositivos en cada equipo, que teniendo los equipos dentro de una Compañía, con la opción ‘Incluir todos los equipos de la compañía para poder realizar marcajes’, que desde ese dispositivo se pueda fichar en cualquier equipo.

- Personalización de tipos de fichajes, equipos y localización en dispositivos

Esta opción dota de mayor flexibilidad al sistema de fichajes por WallApp, a través de los dispositivos, pudiendo configurar desde esta opción que dispositivos y con qué tipo de fichaje, en qué equipo y en qué localización, se quiere que puedan fichar los trabajadores.

- Eliminar dispositivo
