---
schemaVersion: "1.0"
contentId: "gestion-de-personal-10-importar-posiciones"
title: "Importar posiciones"
description: "Información sobre importar posiciones, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "General"
intent: "Importar posiciones"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "importar"
    label: "Importar"
  - id: "posiciones"
    label: "Posiciones"
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
    - "https://manual.aturnos.com/knowledgebase/10-importar-posiciones/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/10-importar-posiciones/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre importar posiciones?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "0e67e1249433e16aafb4a671dc781bbf664336146fb4c32b062b061507450bc7"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre importar posiciones, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

El administrador podrá crear las posiciones que posteriormente indique a sus trabajadores a través de la importación sin tener que crearlo uno a uno. Para importar el archivo debes iniciar creando un documento Excel con formato CSV Importar-posiciones con los siguientes campos:

- Id aTurno
- Identificador: es el número de la posición que se desea indicar.
- Descripción: detalle de la posición
- Nivel: roles a los que va a afectar. Indicando los siguientes valores: Superusuario: 50 Administrador total: 40 Administrador planificador: 30 Administrador validador: 20 Trabajador: 1
- Sustitución: Sí: 1 No: 0
- Visibilidad: Sin determinar: -2 No visible a ningún perfil. Solo visible en el listado de trabajadores: -1 No visible para el resto de trabajadores: 0 Visible: 1
- Localización: el nombre de la localización a la que se quiera asociar

Finalmente, debe “Guardar” el documento con formato CSV.

Para importar el archivo, debe seguir los pasos que indicamos en nuestro menú Administrar → Importar/Exportar → Importar (ver Importar ).
