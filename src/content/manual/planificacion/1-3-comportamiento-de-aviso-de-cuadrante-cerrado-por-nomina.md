---
schemaVersion: "1.0"
contentId: "planificacion-1-3-comportamiento-de-aviso-de-cuadrante-cerrado-por-nomina"
title: "Comportamiento de aviso de cuadrante cerrado por nómina"
description: "En el proceso de cierre de cuadrante se informa en el perfil de todos los trabajadores la fecha de cierre impidiendo la modificación del cuadrante en fecha anterior a la informada."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Comportamiento de aviso de cuadrante cerrado por nómina"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "aviso"
    label: "Aviso"
  - id: "cerrado"
    label: "Cerrado"
  - id: "comportamiento"
    label: "Comportamiento"
  - id: "cuadrante"
    label: "Cuadrante"
  - id: "nomina"
    label: "Nomina"
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
    - "https://manual.aturnos.com/knowledgebase/1-3-comportamiento-de-aviso-de-cuadrante-cerrado-por-nomina/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-3-comportamiento-de-aviso-de-cuadrante-cerrado-por-nomina/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre comportamiento de aviso de cuadrante cerrado por nómina?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "43f311b49248ee9c0a2411ae787ca26cc0a029f89dbaaf513f420ff603d31382"
  migratedAt: 2026-08-17
---
## Resumen

En el proceso de cierre de cuadrante se informa en el perfil de todos los trabajadores la fecha de cierre impidiendo la modificación del cuadrante en fecha anterior a la informada.

## Contenido

Pero no en todas las ocasiones la fecha de cierre de cuadrante es la misma en todos los trabajadores del equipo, como ocurre en los finiquitos, que tendrán una fecha de cierre posterior.

En estos casos, si se modifica la planificación del trabajador, se admiten dos comportamientos en cuanto a si permite:

- Deseable: Permite la modificación de la planificación. La aplicación emite un aviso en pantalla.

- Obligatoria: No permite la modificación de la planificación.
