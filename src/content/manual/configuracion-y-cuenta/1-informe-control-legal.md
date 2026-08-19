---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-1-informe-control-legal
title: Informe control legal
description: Este reporte ‘Informe control legal’, recoge todas las incidencias que se producen en algunos de los informes estadísticos de RRHH:.
contentType: concept
module: Configuración y cuenta
submodule: Roles y permisos
intent: Informe control legal
audience:
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: control
    label: Control
  - id: informe
    label: Informe
  - id: legal
    label: Legal
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
    - https://manual.aturnos.com/knowledgebase/1-informe-control-legal/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-informe-control-legal/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre informe control legal?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-informe-control-legal/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-informe-control-legal/
  contentHash: 030a48f0bdea7216fdb93d4530777316c0e359d5c5ade8396b49eb581ecc8b2e
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Este reporte ‘Informe control legal’, recoge todas las incidencias que se producen en algunos de los informes estadísticos de RRHH:.

### <12 hrs de descanso entre jornadas

Se reportan los mismos datos que en el informe ‘Menos de 12 horas entre fichajes’.

### < 4 hrs trabajadas

Nos informa como en el reporte de ‘Menos de 4 horas fichadas en un día’.

### <4 hrs trabajadas sin absentismo

Muestra fichajes completados de menos de 4 horas de duración y que no tienen aplicado un absentismo temporal sobre la parte del turno no fichada.

### → 50 hrs L-D

En el caso de que un trabajador tenga más de 50 horas trabajadas entre un lunes y un domingo que se hayan fichado en el control de presencia, se mostrará en el reporte.

### → 60 hrs max semana

Para un correcto funcionamiento de esta variable, se debe conocer la configuración de “Comienzo de semana”. Cuando en una semana el trabajador ha fichado más de 60 horas trabajadas, aparecerá en el informe.

### Entre fichajes <2 hrs

Si existen dos fichajes cerrados y entre ambos hay más de horas, se indicará en el informe.

### → 6 días seguidos

En los casos donde un trabajador haya fichado más de 6 días seguidos, se mostrará en el informe.

### → 7 días seguidos

Se debe conocer la configuración de “Comienzo de semana”. Cuando en un periodo el trabajador ha fichado más de 7 días seguidos, se mostrará en el informe.

### → 9 hrs trabajadas

En los casos donde el fichaje haya superado la duración de 9 horas trabajadas, se mostrarán en el informe.

### → 8 hrs trabajadas (nocturnas)

Se mostrarán en el informe, los casos donde cualquier turno planificado que ocupe la franja de horas nocturnas configuradas en los ajustes del equipo y en el cual se hayan fichado más de 8 horas, habiendo más de 8 horas trabajadas.

### Descanso anulado

Un descanso puede ser anulado cuando se deban fichar por la Configuración de descansos y éste haya sido descontado automáticamente.

Una vez es anulado el descanso, aparecerá en el informe.

### → 5 hrs fichadas sin descanso

Esta variable muestra lo mismos datos del informe de ‘ → 5 hrs fichadas sin descanso’.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![<4 hrs trabajadas sin absentismo](/media/manual/4-hrs-trabajadas-sin-absentismo-4e1273f0db.webp)

![>50 hrs L D](/media/manual/50-hrs-l-d-9b780225e5.webp)

![Entre fichajes <2 hrs](/media/manual/entre-fichajes-2-hrs-b4efb9e53c.webp)

![>6 días seguidos](/media/manual/6-dias-seguidos-59b0ef92b9.webp)

![>9 hrs trabajadas](/media/manual/9-hrs-trabajadas-73cd02a7ee.webp)

![>60 hrs max semana](/media/manual/60-hrs-max-semana-ac06ee144c.webp)

![>7 días seguidos](/media/manual/7-dias-seguidos-af7093ab78.webp)

![Descanso anulado](/media/manual/descanso-anulado-aad8a5f61a.webp)

![>8 hrs trabajadas (nocturnas)](/media/manual/8-hrs-trabajadas-nocturnas-2539389307.webp)
