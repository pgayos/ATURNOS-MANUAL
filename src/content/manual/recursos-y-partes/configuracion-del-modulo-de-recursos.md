---
schemaVersion: "1.0"
contentId: "recursos-y-partes-configuracion-del-modulo-de-recursos"
title: "Configuración del Módulo de Recursos"
description: "El módulo permite cuatro configuraciones, accede a ADMINISTRAR → AJUSTES → Módulos para seleccionar la configuración más adecuada."
contentType: procedure
module: "Recursos y partes"
submodule: "Roles y permisos"
intent: "Configuración del Módulo de Recursos"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "configuracion"
    label: "Configuracion"
  - id: "modulo"
    label: "Modulo"
  - id: "recursos"
    label: "Recursos"
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
    - "https://manual.aturnos.com/knowledgebase/configuracion/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/configuracion/"
ai:
  answerableQuestions:
    - "¿Cómo puedo configuración del Módulo de Recursos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "4ff1ab246173a465c5f701de35b14b524c3cf55510cca206b029422039f78695"
  migratedAt: 2026-08-17
---
## Resumen

El módulo permite cuatro configuraciones, accede a ADMINISTRAR → AJUSTES → Módulos para seleccionar la configuración más adecuada.

## Contenido

Con independencia de si es el administrador y/o los trabajadores los que añaden los recursos, con la opción SI en el campo “Permitir a los trabajadores ver datos de recursos”, el trabajador visualiza toda la información de los recursos informados tanto en el cuadrante como en el resumen.

En este caso, solo los administradores pueden informar los recursos, pero al estar el campo “Permitir a los trabajadores ver datos de recursos” con valor SI, el trabajador visualiza toda la información de los recursos informados tanto en el cuadrante como en el resumen.

En este caso, tanto administradores como los trabajadores pueden informar los recursos.

En este caso, los recursos solo pueden ser añadidos por los trabajadores.
