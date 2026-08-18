---
schemaVersion: "1.0"
contentId: costes-y-nominas-12-importar-costes
title: Importar costes
description: El administrador puede indicar el coste bruto anual, coste por nocturnidad y coste de empresa a todos los trabajadores de sus equipos sin tener que ir al perfil de cada trabajador.
contentType: concept
module: Costes y nóminas
submodule: Usuarios y perfiles
intent: Importar costes
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: costes
    label: Costes
  - id: importar
    label: Importar
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
    - https://manual.aturnos.com/knowledgebase/12-importar-costes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/12-importar-costes/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importar costes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/12-importar-costes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/12-importar-costes/
  contentHash: 170531ac4676307c541d99a90cd5a9348bd75384e7f40d96cb8a144408638e11
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El administrador puede indicar el coste bruto anual, coste por nocturnidad y coste de empresa a todos los trabajadores de sus equipos sin tener que ir al perfil de cada trabajador.

## Qué debes saber
Para ello puedes completar la plantilla de ejemplo, la cual tienes disponible para descargar CSV Importar costes

- Id empleado/id usuario*: número que identifica al trabajador
- Nombre
- Mail
- Salario Bruto Anual*
- Coste por nocturnidad (%)*: no se debe informar el porcentaje, solo el valor.
- Coste Seguridad Social (%)*: no se debe informar el porcentaje, solo el valor.

Los campos del fichero creado se deben asociar de la siguiente manera en aTurnos. Una vez asociados habrá que seguir los pasos indicados en b. Importar
