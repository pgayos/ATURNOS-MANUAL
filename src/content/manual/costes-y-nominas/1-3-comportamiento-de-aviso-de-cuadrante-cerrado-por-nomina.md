---
schemaVersion: "1.0"
contentId: costes-y-nominas-1-3-comportamiento-de-aviso-de-cuadrante-cerrado-por-nomina
title: Comportamiento de aviso de cuadrante cerrado por nómina
description: En el proceso de cierre de cuadrante se informa en el perfil de todos los trabajadores la fecha de cierre impidiendo la modificación del cuadrante en fecha anterior a la informada.
contentType: concept
module: Costes y nóminas
submodule: Vacaciones y ausencias
intent: Comportamiento de aviso de cuadrante cerrado por nómina
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: aviso
    label: Aviso
  - id: cerrado
    label: Cerrado
  - id: comportamiento
    label: Comportamiento
  - id: cuadrante
    label: Cuadrante
  - id: nomina
    label: Nomina
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
    - https://manual.aturnos.com/knowledgebase/1-3-comportamiento-de-aviso-de-cuadrante-cerrado-por-nomina/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-3-comportamiento-de-aviso-de-cuadrante-cerrado-por-nomina/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre comportamiento de aviso de cuadrante cerrado por nómina?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-3-comportamiento-de-aviso-de-cuadrante-cerrado-por-nomina/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-3-comportamiento-de-aviso-de-cuadrante-cerrado-por-nomina/
  contentHash: 76f084bba4aef1f9a5785dc20264bcb2b69b62d4081018133ad1cabf37176813
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En el proceso de cierre de cuadrante se informa en el perfil de todos los trabajadores la fecha de cierre impidiendo la modificación del cuadrante en fecha anterior a la informada.

## Qué debes saber
Pero no en todas las ocasiones la fecha de cierre de cuadrante es la misma en todos los trabajadores del equipo, como ocurre en los finiquitos, que tendrán una fecha de cierre posterior.

En estos casos, si se modifica la planificación del trabajador, se admiten dos comportamientos en cuanto a si permite:

- Deseable: Permite la modificación de la planificación. La aplicación emite un aviso en pantalla.

- Obligatoria: No permite la modificación de la planificación.
