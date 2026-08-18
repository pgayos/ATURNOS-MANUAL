---
schemaVersion: "1.0"
contentId: gestion-de-personal-1-2-estructura-jerarquica
title: Estructura jerárquica
description: En aTurnos una estructura jerárquica es un modelo organizativo común en compañías grandes y complejas que pueden definir diferentes niveles de autoridad y/o responsabilidad, dependiendo del nivel en el que se encuentre.
contentType: reference
module: Gestión de personal
submodule: Altas y bajas
intent: Estructura jerárquica
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: estructura
    label: Estructura
  - id: jerarquica
    label: Jerarquica
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
    - https://manual.aturnos.com/knowledgebase/1-2-estructura-jerarquica/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-2-estructura-jerarquica/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre estructura jerárquica?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-2-estructura-jerarquica/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-2-estructura-jerarquica/
  contentHash: f83cb225223dfa86a7880a4c06bc30215e0434523fa5aa47c0d591d02f9adf61
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En aTurnos una estructura jerárquica es un modelo organizativo común en compañías grandes y complejas que pueden definir diferentes niveles de autoridad y/o responsabilidad, dependiendo del nivel en el que se encuentre.

## Opciones y datos disponibles
Esta estructura se representa mediante un diagrama en árbol. Su diseño se compone de:

- Equipos que son unidades de negocio que comparten por defecto un convenio, una configuración de permisos, tipos de turnos, absentismos, flujos de aprobación y configuración de privacidad.

- Localizaciones que pueden definirse como departamentos, ubicaciones o grupos de trabajo de una organización, donde se pueden asignar a los trabajadores dentro de un equipo. Un empleado puede tener una localización por defecto, tener acceso a otras localizaciones e incluso pueden tener planificado un turno de trabajo en el resto, dando polivalencia al trabajador.

La dependencia jerárquica puede constar de:

- Equipo padre (puede haber equipo padre por encima o debajo, creando más niveles jerárquicos). Equipo. Localización padre (puede haber localización padre por encima o debajo, creando más niveles jerárquicos). Localización. Trabajadores.

La jerarquía de equipos se puede diseñar seleccionando el equipo padre de un equipo en la configuración de ‘Datos del equipo’.

De la misma forma, una localización, puede tener una localización padre según la configuración o también se pueden jerarquizar cambiando el orden.
