---
schemaVersion: "1.0"
contentId: "configuracion-y-cuenta-6-ajustes-automaticos"
title: "Ajustes automáticos"
description: "En aTurnos tienes la posibilidad de informar un tanto por ciento de incremento en las horas computadas atendiendo al tipo de hora. Por ejemplo, cuando las horas nocturnas computan un 20% más."
contentType: reference
module: "Configuración y cuenta"
submodule: "Equipo y centros"
intent: "Ajustes automáticos"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "ajustes"
    label: "Ajustes"
  - id: "automaticos"
    label: "Automaticos"
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
    - "https://manual.aturnos.com/knowledgebase/6-ajustes-automaticos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/6-ajustes-automaticos/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre ajustes automáticos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "f085c7a70226ea72770ff924d7c0ec413df7c767393d398e2277f9fe2f3ea7b2"
  migratedAt: 2026-08-17
---
## Resumen

En aTurnos tienes la posibilidad de informar un tanto por ciento de incremento en las horas computadas atendiendo al tipo de hora. Por ejemplo, cuando las horas nocturnas computan un 20% más.

## Contenido

Cuando esto sucede, puedes a nivel de equipo (ver Configuración general ajustes por coeficientes de horas ) configurar los incrementos dependiendo si la hora es nocturna, festiva, festiva nocturna, festiva especial y/o festiva nocturna especial. Permitimos también informar distintos incrementos a nivel de cada trabajador.

“Total efectivas” se considera la suma del total de las horas computadas más el total de horas de todos los ajustes (positivos o negativos).
