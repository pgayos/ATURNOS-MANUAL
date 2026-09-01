---
schemaVersion: "1.0"
contentId: recursos-y-partes-14-localizacion-por-defecto
title: Localización por defecto
description: En aTurnos, los trabajadores pueden tener una localización por defecto o estar “sin localización”.
contentType: troubleshooting
module: Recursos y partes
submodule: Vacaciones y ausencias
subtopic: ""
intent: Localización por defecto
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: defecto
    label: Defecto
  - id: localizacion
    label: Localizacion
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
    - https://manual.aturnos.com/knowledgebase/14-localizacion-por-defecto/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/14-localizacion-por-defecto/
ai:
  answerableQuestions:
    - "¿Cómo resuelvo el problema: Localización por defecto?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/14-localizacion-por-defecto/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/14-localizacion-por-defecto/
  contentHash: 23e067ac7c0fbb6bd542ebea46572645e7f614e1552cc40b6acaf30304c6192a
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En aTurnos, los trabajadores pueden tener una localización por defecto o estar “sin localización”.

## Diagnóstico y solución
Esta acción permite cambiar la localización por defecto de un trabajador a partir de una fecha. Sin que se necesite crear un nuevo periodo de contrato.

Por ejemplo, Ana Sánchez tiene asignada la localización por defecto en “Oficina”, y turnos con localización en “Administración”, El administrador podrá cambiar a la trabajadora de la localización “Oficina” a la localización por defecto “Administración”. El sistema preguntará si se quieren cambiar las localizaciones de la planificación a la nueva localización por defecto.

En este caso, no habría problema puesto que los turnos ya tienen la localización por defecto “Administración”.

La localización de los turnos planificados en origen, suele ser distinta. Al cambiar a una nueva localización por defecto, habrá que indicar a partir de qué fecha se cambiará la localización.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![14. Localización por defecto](/media/manual/14-localizacion-por-defecto-f974b1e985.webp)

![14. Localización por defecto](/media/manual/14-localizacion-por-defecto-700f321e81.webp)

![14. Localización por defecto](/media/manual/14-localizacion-por-defecto-d2d8d0d919.webp)

![14. Localización por defecto](/media/manual/14-localizacion-por-defecto-6c8481c2c5.webp)
