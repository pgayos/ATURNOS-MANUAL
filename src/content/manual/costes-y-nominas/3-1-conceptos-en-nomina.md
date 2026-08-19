---
schemaVersion: "1.0"
contentId: costes-y-nominas-3-1-conceptos-en-nomina
title: Conceptos en nómina
description: De todos los conceptos creados conforme al punto 2 de este Manual (Conceptos de cálculo) solo algunos de ellos son los que devuelven el dato buscado, de forma que dentro de la aplicación, a.
contentType: procedure
module: Costes y nóminas
submodule: Nóminas
intent: Conceptos en nómina
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: conceptos
    label: Conceptos
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
    - https://manual.aturnos.com/knowledgebase/b-conceptos-en-nomina/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/b-conceptos-en-nomina/
ai:
  answerableQuestions:
    - ¿Cómo puedo conceptos en nómina?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/b-conceptos-en-nomina/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/b-conceptos-en-nomina/
  contentHash: 111b2c523f6d3ffffb45115b0821a99cd312f22b2c305dd868b8d0d6d2341e78
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a conceptos en nómina, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
De todos los conceptos creados conforme al punto 2 de este Manual (Conceptos de cálculo) solo algunos de ellos son los que devuelven el dato buscado, de forma que dentro de la aplicación, a través de ADMINISTRAR → NOMINAS → CONCEPTOS EN NOMINA, se han de seleccionar exclusivamente los que se precisan en el informe.

Continuando con el ejemplo indicado en el punto 2, los conceptos a seleccionar serían los que después de las operaciones entre conceptos y/o conceptos de comparación ofrecen el dato buscado:

- Concepto 3000. Recupera el número de horas nocturnas cuando son mayores o iguales a 10.
- Concepto 3K00. Recupera el número de horas nocturnas cuando menores a 10.
- Concepto K285. Recupera el número de horas de guardia presencial

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![3.1 Conceptos en nómina](/media/manual/3-1-conceptos-en-nomina-5e0bc05597.png)

![3.1 Conceptos en nómina](/media/manual/3-1-conceptos-en-nomina-399ec4fc0c.png)
