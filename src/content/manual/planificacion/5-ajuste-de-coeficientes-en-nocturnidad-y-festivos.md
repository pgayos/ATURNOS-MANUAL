---
schemaVersion: "1.0"
contentId: planificacion-5-ajuste-de-coeficientes-en-nocturnidad-y-festivos
title: Ajuste de coeficientes en nocturnidad y festivos
description: Existen ajustes en las horas realizadas que no se corresponden con una planificación de turnos asignada a un trabajador pero que se deben tener en cuenta dentro del contaje de horas de su jo.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
intent: Ajuste de coeficientes en nocturnidad y festivos
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: ajuste
    label: Ajuste
  - id: coeficientes
    label: Coeficientes
  - id: festivos
    label: Festivos
  - id: nocturnidad
    label: Nocturnidad
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
    - https://manual.aturnos.com/knowledgebase/5-ajuste-de-noctunidad-y-festivos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-ajuste-de-noctunidad-y-festivos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre ajuste de coeficientes en nocturnidad y festivos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-ajuste-de-noctunidad-y-festivos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-ajuste-de-noctunidad-y-festivos/
  contentHash: 0d7f375873bd9c27cb63fe2722379a9247b0ad4fbf953e99b717aba85799b513
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre ajuste de coeficientes en nocturnidad y festivos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Existen ajustes en las horas realizadas que no se corresponden con una planificación de turnos asignada a un trabajador pero que se deben tener en cuenta dentro del contaje de horas de su jornada. Por ejemplo, si las horas trabajadas son nocturnas computan más horas (coeficiente mayor en el conteo de horas nocturnas), si hace horas festivas se computan más horas (coeficiente mayor en el conteo de horas festivas). En este apartado podrás definir estos ajustes:

- Calcular mediante tabla de coeficientes: Se pueden cargar por tabla, donde por cada hora de noche o festiva realizada se corresponde un incremento en las horas planificadas específicas. Esto se realiza cuando no existe una relación directa porcentual entre las horas realizadas por el trabajador y el conteo de las horas (nocturnas y/o festivas). Esta tabla se carga desde la importación.
- Horas nocturnas, Horas festivas, Horas festivas nocturnas, etc.: Cuando no se carga por tabla, se deben informar los coeficientes en cada tipo de horas de nocturnidad, si es festiva, festiva extraordinaria, etc. para multiplicar por ese porcentaje e incrementar el conteo de las horas del ajuste cuando se planifiquen horas con esas características.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5. Ajuste de coeficientes en nocturnidad y festivos](/media/manual/5-ajuste-de-coeficientes-en-nocturnidad-y-festivos-8f75ccc340.png)
