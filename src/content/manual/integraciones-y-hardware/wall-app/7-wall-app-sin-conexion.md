---
schemaVersion: "1.0"
contentId: wall-app-7-wall-app-sin-conexion
title: "Wall App sin conexión a la red"
order: 7
description: "Qué pasa si la tablet con Wall App pierde la conexión a internet mientras un trabajador intenta fichar."
contentType: procedure
module: "Wall App"
submodule: "Manual de Wall App"
subtopic: ""
intent: "Wall App sin conexión a la red"
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
relatedTerms: []
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
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Qué pasa si Wall App se queda sin conexión a internet?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  contentHash: "5ebbf6dc02c5b0f9bac11710df48d077bf1cd6f7a6232f0e3fd4799c64524634"
  migratedAt: 2026-09-19
labels: []
---

## Resumen

Puede aparecer el mensaje "Conexión perdida. Revise su conexión a la red" por una caída de la red WIFI de la tablet o porque el dispositivo entra en modo de ahorro de energía y corta la conexión.

## Procedimiento

Wall App comprueba la conexión de forma constante hasta que se recupera. Aunque no haya conexión en el momento del fichaje, los marcajes se guardan en una caché local y se cargan, en orden de llegada, en cuanto la tablet recupera la conexión.

![Aviso de conexión perdida en Wall App](/media/manual/wall-app-wallapp-sin-conexion-a-la-red.jpeg)

![Fichajes guardados en caché local sin conexión](/media/manual/wall-app-wallapp-sin-conexion-a-la-red-fichajes-guardados-en-local.jpg)

![Cargando los fichajes guardados al recuperar la conexión](/media/manual/wall-app-wallapp-sin-conexion-a-la-red-cargando-fichajes-guardados-en-local.jpg)
