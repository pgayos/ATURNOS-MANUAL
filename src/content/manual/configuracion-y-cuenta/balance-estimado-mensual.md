---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-balance-estimado-mensual
title: Balance estimado mensual
description: Es el balance de horas por meses en el periodo seleccionado.
contentType: procedure
module: Configuración y cuenta
submodule: General
intent: Balance estimado mensual
audience:
  - role: Administrador
    access: applicable
entities:
  - id: balance
    label: Balance
  - id: estimado
    label: Estimado
  - id: mensual
    label: Mensual
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
    - https://manual.aturnos.com/knowledgebase/balance-estimado-mensual/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/balance-estimado-mensual/
ai:
  answerableQuestions:
    - ¿Cómo puedo balance estimado mensual?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/balance-estimado-mensual/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/balance-estimado-mensual/
  contentHash: 2818f26a58bab4d3edd50d962638cbe16d2f5a892d28e12f2d431e9f4a49556e
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Aprende a balance estimado mensual, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Es el balance de horas por meses en el periodo seleccionado. Resultado de restar a las horas estimadas a trabajar en cada mes, la suma de las horas computadas del mismo mes, más las horas ajustadas del mes. Esta variable solo se puede calcular si la consulta es mensual. Balance=Horas estimadas mes-Horas computadas-Ajustes

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
