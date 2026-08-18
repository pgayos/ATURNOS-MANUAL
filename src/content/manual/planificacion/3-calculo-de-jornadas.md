---
schemaVersion: "1.0"
contentId: planificacion-3-calculo-de-jornadas
title: Cálculo de jornadas
description: Las jornadas se utilizan para identificar si un trabajador ha realizado una unidad completa de trabajo en un día, realizando un mínimo y un máximo de horas, según la configuración.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
intent: Cálculo de jornadas
audience:
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: calculo
    label: Calculo
  - id: jornadas
    label: Jornadas
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
    - https://manual.aturnos.com/knowledgebase/3-calculo-de-jornadas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-calculo-de-jornadas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre cálculo de jornadas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-calculo-de-jornadas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-calculo-de-jornadas/
  contentHash: 17b368e82bd7db55c278022e8ab9fe55642d3759d9613d8f87e74560d3131e27
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Las jornadas se utilizan para identificar si un trabajador ha realizado una unidad completa de trabajo en un día, realizando un mínimo y un máximo de horas, según la configuración.

## Opciones y datos disponibles
En este punto se define por ejemplo como puede afectar a nóminas:

- Si se paga una unidad de trabajo al realizar al menos 3 horas.
- Si se paga una unidad de jornada nocturna si se hacen al menos 3 horas.
- Si se hacen más de 12 horas serían dos jornadas.

Para poder considerar una jornada necesitará identificar los siguientes parámetros:

- Horas para considerar una jornada en un día: el sistema contabilizará como jornada, las horas planificadas en un día si igualan o superan el valor indicado en este campo. Con este dato podrá obtener estadísticas en: Estadísticas Jornadas II.
- Horas mínimas para considerar la jornada en ese día: Para saber en qué día se computa esa jornada se puede definir un mínimo de horas que tiene que hacerse en ese día para que compute en el mismo. Por ejemplo, en un turno de noche de 22:00 a 8:00 am, si indicamos que con hacer una hora computa en ese día, la jornada quedaría registrada en el día que inicia el turno. Pero si en cambio le indicamos que tiene que hacer 4 horas para computar en ese día la jornada quedaría registrada al día siguiente. Una jornada solo puede contabilizarse en un día.
- Límite de horas para considerar una jornada más: Identifica la cantidad de horas a partir de las cuales consideraría otra jornada. Por ejemplo, si se ha configurado a 10 horas como límite para considerar una jornadas más, y el trabajador tuviera planificadas 20 horas y cumpliera para tener 10 horas por jornada, el sistema contabilizaría 2 jornadas en ese día. Se utiliza este límite para controlar la cantidad de jornadas que pueden pasar a los conceptos de nómina. Por ejemplo, en una fabrica, si haces un turno de 8 horas cobras una jornada pero si haces 16 horas no cobras 2 jornadas porque este plus se paga de otra forma.
- Varias jornadas: marcando la opción “SI”, activaremos la función anterior de contabilizar varias jornadas en un mismo día en caso de que se cumplieran los criterios para calcular esa jornada más en un día.
