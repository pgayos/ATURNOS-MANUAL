---
schemaVersion: "1.0"
contentId: empezar-en-aturnos-2-1-configurar-las-vacaciones
title: "Configurar las vacaciones"
description: "Parámetros que hay que configurar para las vacaciones: tipo de días, días por año y comportamiento del saldo."
contentType: procedure
module: "Empezar en aTurnos"
submodule: "Vacaciones y permisos (absentismos)"
intent: "Configurar las vacaciones"
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
entities: []
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
    - https://manual.aturnos.com/documentation/2-vacaciones-y-permisos-absentismos/2-1-configurar-las-vacaciones/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/2-vacaciones-y-permisos-absentismos/2-1-configurar-las-vacaciones/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre configurar las vacaciones?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/documentation/2-vacaciones-y-permisos-absentismos/2-1-configurar-las-vacaciones/
  redirectFrom:
    - https://manual.aturnos.com/documentation/2-vacaciones-y-permisos-absentismos/2-1-configurar-las-vacaciones/
  contentHash: "48c22d089199bfb66779748f35c9def25a9580503b15d668789a6f2fd309e084"
  migratedAt: 2026-09-08
labels:
  - PENDIENTE
order: 2
---

## Resumen

Para configurar las vacaciones en aTurnos, es necesario establecer ciertos parámetros en: **Administrar > Ajustes** > **[Configuración general](https://manual.aturnos.com/Manual/2-vacaciones/)**, o si un trabajador tiene un convenio o configuración específica en el **perfil del trabajador** ([Ver Manual del perfil del trabajador)](https://manual.aturnos.com/Manual/1-general/):

## Procedimiento

- **Tipo de vacaciones**: Define si las vacaciones se cuentan en días laborables o días naturales.
- **Vacaciones por año**: Especifica la cantidad de días de vacaciones asignados al trabajador anualmente.
- **Redondeo de vacaciones**: Utilizado cuando un trabajador se incorpora durante el año. Si el decimal en el cálculo de días es igual o mayor a 0.5, se redondeará añadiendo un día completo.
- **Fin del periodo vacacional**: Establece hasta qué fecha del año siguiente pueden disfrutarse los días de vacaciones no utilizados del año anterior.
