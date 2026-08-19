---
schemaVersion: "1.0"
contentId: planificacion-4-1-computadas-vs-presenciales
title: Computadas VS Presenciales
description: Este reporte de control de presencia muestra de forma sencilla una comparación entre las horas computadas y las horas presenciales (lo que se ha fichado).
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Computadas VS Presenciales
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: computadas
    label: Computadas
  - id: presenciales
    label: Presenciales
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
    - https://manual.aturnos.com/knowledgebase/4-1-planificadas-vs-presenciales/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-1-planificadas-vs-presenciales/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre computadas VS Presenciales?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-1-planificadas-vs-presenciales/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-1-planificadas-vs-presenciales/
  contentHash: 06f92f1ad8304a1d8edd116ed22d91a2b63a9842206812463bc89d3df8e45cdd
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Este reporte de control de presencia muestra de forma sencilla una comparación entre las horas computadas y las horas presenciales (lo que se ha fichado).

## Qué debes saber
Esta comparación puede ser por días, entre los “Días con horario planificado” y los “Días con horario fichado”, mostrando la diferencia entre ambas variables.

De la misma forma, se comparan la “Horas computadas” y las “Horas presenciales”, junto a un balance con la diferencia entre ambas variables.

Las horas computadas son el total de horas y turnos que computan respecto a las horas contrato del trabajador. Se tiene en cuenta duración computada del turno. Se excluyen las horas afectadas por absentismos no justificados.

Las horas presenciales de esta tabla, corresponde a las horas trabajadas de la tabla “detalle por trabajador”, que son el total de horas presenciales que coinciden con las horas planificadas menos el tiempo de descanso del turno planificado. Según la configuración se puede tener en cuenta contabilizar el descanso del turno en el tiempo presencial. No todos los turnos tienen descanso, depende de la configuración de los turnos.

Se excluyen las horas afectadas por cualquier tipo de absentismos (no justificados y justificados).

Son los datos que se pueden comprobar en el ‘Detalle por trabajador’ del Control de Presencia.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![4.1 Computadas VS Presenciales](/media/manual/4-1-computadas-vs-presenciales-140e4bd63c.png)

![4.1 Computadas VS Presenciales](/media/manual/4-1-computadas-vs-presenciales-a438c96ab2.png)

![4.1 Computadas VS Presenciales](/media/manual/4-1-computadas-vs-presenciales-5105768fee.png)

![4.1 Computadas VS Presenciales](/media/manual/4-1-computadas-vs-presenciales-bd31fa8836.png)
