---
schemaVersion: "1.0"
contentId: gestion-de-personal-10-tooltip-flotante
title: Tooltip flotante
description: Seleccionando la opción de “tooltip flotante”, podrás moverlo a cualquier parte de la pantalla.
contentType: procedure
module: Gestión de personal
submodule: Contratos
subtopic: ""
intent: Tooltip flotante
audience:
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: flotante
    label: Flotante
  - id: tooltip
    label: Tooltip
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
    - https://manual.aturnos.com/knowledgebase/10-tooltip-flotante/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/10-tooltip-flotante/
ai:
  answerableQuestions:
    - ¿Cómo puedo tooltip flotante?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/10-tooltip-flotante/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/10-tooltip-flotante/
  contentHash: 099472722d55ea5721344a18c4e58634f2d24ca0e881a4b46932a689fde9cac5
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Seleccionando la opción de “tooltip flotante”, podrás moverlo a cualquier parte de la pantalla.

## Procedimiento
Este tooltip nos muestra la información básica configurada en ‘Visualización’.

De manera visual, para saber si los trabajadores están cumpliendo las horas, a modo de ejemplo con las “Horas por semana”.

Para entender si ha trabajado lo que le corresponde, se hace lo siguiente:

1. Se comparan las horas que ha trabajado en la semana con las horas de su contrato.
2. Se calcula la diferencia entre ambas.
3. Se transforma esa diferencia en un porcentaje para ver qué tanto se aleja de lo que debería haber trabajado.
4. Según ese porcentaje, se usa un color para indicar cómo de cerca está de cumplir sus horas:

- Verde: si la diferencia es muy pequeña (hasta un 5%). Significa que está cumpliendo bien con las horas.
- Amarillo: si la diferencia es un poco mayor (entre 5% y 10%). Está cerca, pero un poco por debajo o por encima.
- Rojo: si la diferencia es grande (más del 10%). Indica que hay bastantes menos o más horas de las que debería.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![10. Tooltip flotante](/media/manual/10-tooltip-flotante-35ad493fea.webp)

![10. Tooltip flotante](/media/manual/10-tooltip-flotante-9804472dcc.webp)

![10. Tooltip flotante](/media/manual/10-tooltip-flotante-856cfd4eae.webp)
