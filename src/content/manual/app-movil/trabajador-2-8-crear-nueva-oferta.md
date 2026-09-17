---
schemaVersion: "1.0"
contentId: app-movil-trabajador-2-8-crear-nueva-oferta
title: "Crear nueva oferta (Administrador)"
order: 8
description: "Cómo crea el administrador una oferta de turnos u horas para que el equipo se inscriba, desde la app."
contentType: procedure
module: App móvil
submodule: "Trabajador"
subtopic: "Peticiones y cambios"
intent: "Crear nueva oferta (Administrador)"
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
relatedTerms: []
prerequisites: []
platforms:
  - app
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/knowledgebase/2-8-crear-nueva-oferta/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo crea el administrador una oferta de turno desde la app?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-8-crear-nueva-oferta/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-8-crear-nueva-oferta/
  contentHash: "46037dbc50ac6c8de83f8e61c047c80c799e26cd1f072d21c34b247606b5a058"
  migratedAt: 2026-09-18
labels: []
---

## Resumen

Crear una oferta de turno está restringido a los administradores del equipo; los trabajadores solo pueden inscribirse en las ofertas ya creadas.

## Procedimiento

El administrador completa estos campos para crear la oferta:

- **Tipo**: turnos u horas.
- **Localización**: específica para la oferta.
- **Especialidad**: si aplica a una especialidad concreta.
- **Cantidad**: número de turnos/horas a ofertar.
- **Solo visible para la localización**: restricción de visibilidad por ubicación.
- **Tipo de turno y horas**: selección específica.
- **Fecha inicio y fecha fin**.
- **Comentarios**: opcional.

Tras confirmar, el sistema lista automáticamente la oferta en "Ofertas de turno". El proceso para que los trabajadores se inscriban es el mismo que el de cualquier oferta de turno.

![Formulario para crear una oferta de turno](/media/manual/formulario-para-crear-una-oferta-de-turno.png)

![Campos de la oferta de turno](/media/manual/campos-de-la-oferta-de-turno.png)

![Listado de ofertas creadas](/media/manual/listado-de-ofertas-creadas.png)
