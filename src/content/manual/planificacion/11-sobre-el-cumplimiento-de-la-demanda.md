---
schemaVersion: "1.0"
contentId: "planificacion-11-sobre-el-cumplimiento-de-la-demanda"
title: "Sobre el cumplimiento de la demanda"
description: "Información sobre sobre el cumplimiento de la demanda, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Sobre el cumplimiento de la demanda"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "cumplimiento"
    label: "Cumplimiento"
  - id: "demanda"
    label: "Demanda"
  - id: "sobre"
    label: "Sobre"
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
    - "https://manual.aturnos.com/knowledgebase/3-sobre-el-cumplimiento-de-la-demanda/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/3-sobre-el-cumplimiento-de-la-demanda/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre sobre el cumplimiento de la demanda?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "e6b94a1a63b32d9b880d28faec122f539c339521ff0de165fe3902dec9ae2ee3"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre sobre el cumplimiento de la demanda, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Esta restricción asegura que la planificación cubra al menos el número mínimo de trabajadores requerido según la demanda definida por turno, día, localización, categoría, u otros criterios operativos. Si no se alcanza el mínimo indicado, el sistema mostrará una advertencia. Es especialmente útil para mantener la cobertura operativa tras movimientos como asignaciones de vacaciones u otros cambios.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Demanda. Elige la demanda a la que aplicará la restricción.

Esta restricción asegura que la planificación de personal no supere la demanda máxima establecida para un turno, día, localización, categoría, u otro criterio definido. Se utiliza para evitar excesos en la cobertura y optimizar la asignación de recursos. Cuando se introduce una demanda con valor máximo, el sistema comparará la planificación y mostrará una advertencia si se ha superado el límite.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Demanda. Elige la demanda a la que aplicará la restricción.

Esta restricción asegura que la planificación de personal no supere la demanda máxima, es por ello que sus valores se limitan a valores menores o iguales a la demanda.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Comprobar peticiones pendientes: Indica si la restricción debe contabilizar en la demanda las peticiones pendientes de aprobar.
- Demanda. Elige la demanda a la que aplicará la restricción.
