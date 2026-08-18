---
schemaVersion: "1.0"
contentId: gestion-de-personal-6-7-totalizada-por-equipo
title: Totalizada por equipo
description: Recuperamos los valores de los conceptos de nómina totalizado por equipo.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Totalizada por equipo
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: equipo
    label: Equipo
  - id: totalizada
    label: Totalizada
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
    - https://manual.aturnos.com/knowledgebase/10-8-totalizada-por-equipo/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/10-8-totalizada-por-equipo/
ai:
  answerableQuestions:
    - ¿Cómo puedo totalizada por equipo?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/10-8-totalizada-por-equipo/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/10-8-totalizada-por-equipo/
  contentHash: 803776cc2f64ad2ec82244922f95d2012fff44eb93975f2bb5a1ce6fa47d4f3e
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Recuperamos los valores de los conceptos de nómina totalizado por equipo.

## Procedimiento
Desde aquí se validan los datos, haz clic en el. Indica la fecha de validación del cuadrante.

Este proceso es obligatorio si en la configuración general del equipo está seleccionada la opción “El cuadrante debe estar cerrado y validado”.Cierra el cuadrante haciendo clic en el candado.

1.- Cierra el cuadrante, impidiendo la modificación accidental de la planificación pagada.

2.- Guarda en el perfil del trabajador, los días en los que se ha realizado la exportación.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
