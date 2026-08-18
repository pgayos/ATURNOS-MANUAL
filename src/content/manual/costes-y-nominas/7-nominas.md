---
schemaVersion: "1.0"
contentId: costes-y-nominas-7-nominas
title: Nóminas en aTurnos
description: En la pestaña de nómina del trabajador se puede visualizar:.
contentType: procedure
module: Costes y nóminas
submodule: Usuarios y perfiles
intent: Nóminas en aTurnos
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: nominas
    label: Nominas
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
    - https://manual.aturnos.com/knowledgebase/7-nominas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-nominas/
ai:
  answerableQuestions:
    - ¿Cómo puedo nóminas en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-nominas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-nominas/
  contentHash: 6977943aebd62c7781d2b776180d9744c259d4a63d9c8b60ac0d282776435176
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En la pestaña de nómina del trabajador se puede visualizar:.

## Procedimiento
1.- La fecha de cierre de cuadrante de un trabajador.

2.- La fecha de validación del cuadrante de un trabajador siempre y cuando en los ajustes de nómina se indique como opción que el cuadrante debe estar cerrado y validado. (Ver en el Manual: Configuración de ajustes de nómina )

3.- La fecha de último día exportado de un trabajador, siempre y cuando se ejecute el proceso de exportación de nóminas desde las 3 opciones disponibles:

3.1.- Desde ADMINISTRAR → EXPORTAR NÓMINAS (accede al Manual: Exportar Nóminas )

3.2.- Desde RRHH → NÓMINAS → EXPORTAR NÓMINAS (accede al Manual: Exportar Nóminas )

3.3- A través del api (accede al Manual: Método getPayrollAllDaily)

4.- Las fechas de las descargas realizadas a un trabajador siempre y cuando se ejecute el proceso de exportación de nóminas desde cualquiera de las 3 opciones disponibles del punto anterior.

También se visualiza la fecha y hora de la exportación, el periodo descargado así como el usuario que ha realizado la descarga de nómina.
