---
schemaVersion: "1.0"
contentId: "planificacion-2-2-cuadrante-anual"
title: "Cuadrante Anual"
description: "Haciendo clic en Cuadrante → Cuadrante anual, el trabajador puede visualizar su cuadrante anual, mostrando todos los turnos planificados en todos los días de cada mes del año."
contentType: reference
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Cuadrante Anual"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "anual"
    label: "Anual"
  - id: "cuadrante"
    label: "Cuadrante"
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
    - "https://manual.aturnos.com/knowledgebase/2-2-cuadrante-anual/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-2-cuadrante-anual/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre cuadrante Anual?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "3ca9c3ee224874460f1c3366dc4a7ec10473d697380ed99a0ef581d6f7213a0d"
  migratedAt: 2026-08-17
---
## Resumen

Haciendo clic en Cuadrante → Cuadrante anual, el trabajador puede visualizar su cuadrante anual, mostrando todos los turnos planificados en todos los días de cada mes del año.

### Barra superior del cuadrante anual

Estas opciones permiten personalizar la visualización del cuadrante anual según personalicemos con las siguientes acciones:

- Año: escoger el año que se desea visualizar.
- Turnos, turnos más localización o Todos los detalles (se añade el horario del turno): se añadirán tantos detalles como información tengan aplicada en los turnos del cuadrante.
- Vista Grid: ver la planificación anual por meses a modo de calendario.

- Vista Tabla: ver la planificación como si fuera una tabla de Excel con los turnos en cada celda.

- Exportar: desde este botón descargamos el cuadrante en Excel, PDF A4 o A3.
- Filtro: por localizaciones en el caso de estar planificado en más de una localización o por turnos, para ver la planificación de los turnos que seleccionemos.

Por último si la configuración de permisos del equipo lo permite, el trabajador puede acceder a información del cómputo de los turnos planificados.

Así como un balance de horas del año y/o periodo e información de las vacaciones que han sido planificadas y el saldo por disfrutar.
