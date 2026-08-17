---
schemaVersion: "1.0"
contentId: "control-horario-4-7-calidad-del-fichaje"
title: "Calidad del fichaje"
description: "Este reporte, permite consultar de forma resumida todos los fichajes realizados por cada trabajador, indicando:."
contentType: concept
module: "Control horario"
submodule: "Fichajes"
intent: "Calidad del fichaje"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "calidad"
    label: "Calidad"
  - id: "fichaje"
    label: "Fichaje"
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
    - "https://manual.aturnos.com/knowledgebase/4-7-calidad-del-fichaje/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/4-7-calidad-del-fichaje/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre calidad del fichaje?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "203cab04712810b33a74fecbc66a65c7c334fe00346ddcf248df64109ae388bb"
  migratedAt: 2026-08-17
---
## Resumen

Este reporte, permite consultar de forma resumida todos los fichajes realizados por cada trabajador, indicando:.

## Contenido

- Cuántos se realizaron de forma automática.
- Cuáles se añadieron manualmente.
- Lo que se han solicitado por petición de fichaje.
- Cuáles quedan por cerrarse.
- Y el porcentaje de fichajes modificados.

Los datos de este reporte se pueden filtrar.

- Entre dos fechas
- Para buscar trabajadores en concreto.

También se puede filtrar por las localizaciones que se seleccionen.

Los parámetros que se pueden consultar en este reporte son las siguientes:

- Total fichajes: fichajes realizados por el trabajador.
- Fichajes por petición: número total de fichajes insertados por una petición de fichaje realizada por el trabajador.
- Total fichajes automáticos: fichajes realizados por cualquier tecnología de fichaje.
- Total fichajes manuales: número de fichajes que han sido insertados manualmente por el administrador.
- Fichajes olvidados este día. Actualizar fichajes sin cerrar: número de fichajes sin completar, es decir, entradas donde falta una salida o salidas donde falta una entrada en el mismo turno planificado. Este es un ejemplo de un marcaje sin cerrar.

- Porcentaje de fichajes no automáticos: número de fichajes que han sido modificados por el administrador o mediante una petición de ‘ Solicitar modificación ‘.
