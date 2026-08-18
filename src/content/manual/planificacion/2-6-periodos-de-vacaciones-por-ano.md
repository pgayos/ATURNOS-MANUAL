---
schemaVersion: "1.0"
contentId: planificacion-2-6-periodos-de-vacaciones-por-ano
title: Periodos de vacaciones por año
description: En este menú tendremos acceso a los periodos de vacaciones de los trabajadores de los equipos que se carguen en el año que se indique.
contentType: procedure
module: Planificación
submodule: Contratos
intent: Periodos de vacaciones por año
audience:
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: ano
    label: Ano
  - id: periodos
    label: Periodos
  - id: vacaciones
    label: Vacaciones
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
    - https://manual.aturnos.com/knowledgebase/7-6-periodos-de-vacaciones-por-ano/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-6-periodos-de-vacaciones-por-ano/
ai:
  answerableQuestions:
    - ¿Cómo puedo periodos de vacaciones por año?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-6-periodos-de-vacaciones-por-ano/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-6-periodos-de-vacaciones-por-ano/
  contentHash: 6ab91c5d0dc67d1025e28517c1b8c87bd70ef0931757eabb6d138abf9f7e5b7b
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a periodos de vacaciones por año, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
En este menú tendremos acceso a los periodos de vacaciones de los trabajadores de los equipos que se carguen en el año que se indique. A modo de resumen se muestran por meses los días de vacaciones o periodos (en el caso de haber más de un día, desde el día de inicio y el día fin de vacaciones). También informa del saldo de vacaciones del trabajador en el equipo en el año consultado.

En la barra superior se puede seleccionar:

- Año a consultar.
- Seleccionar equipo (o más de un equipo), incluyendo aquellos que dependen jerárquicamente de un equipo padre.
- Filtro de trabajadores, para poder buscar solo los trabajadores que se indique según su Nombre / Email / ID Empleado.
- Exportar, para descargar los periodos de vacaciones del año.

Seleccionadas las variables para consultar los periodos, se necesita hacer clic en “Cargar”

Cargada la información, se mostrará un calendario anual con todos los meses por trabajador y su saldo de vacaciones (vacaciones restantes frente a las vacaciones por contrato o periodo contractual).
