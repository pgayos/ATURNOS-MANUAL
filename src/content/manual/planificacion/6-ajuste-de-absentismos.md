---
schemaVersion: "1.0"
contentId: "planificacion-6-ajuste-de-absentismos"
title: "Ajuste de absentismos"
description: "Corresponde a los ajustes que se generan por absentismos. Por ejemplo, cuando se ha realizado un pago de horas (Descuento de horas) o se hace un abono (Incremento de horas)."
contentType: reference
module: "Planificación"
submodule: "Contratos"
intent: "Ajuste de absentismos"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "absentismos"
    label: "Absentismos"
  - id: "ajuste"
    label: "Ajuste"
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
    - "https://manual.aturnos.com/knowledgebase/6-ajuste-de-absentismos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/6-ajuste-de-absentismos/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre ajuste de absentismos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "4dfa5a3d1b8abf5de80cfe2b171871767de18fe6c31de952928f8b9915751bfa"
  migratedAt: 2026-08-17
---
## Resumen

Corresponde a los ajustes que se generan por absentismos. Por ejemplo, cuando se ha realizado un pago de horas (Descuento de horas) o se hace un abono (Incremento de horas).

## Contenido

Las horas que generan los absentismos justificados se suman a las horas planificadas como si hubieran sido realizadas por el trabajador. Pero en ciertos casos no hay que contar las horas planificadas del día de absentismo, sino que se hace un cálculo predefinido. Además, esto se puede realizar dependiendo de un mínimo de días de absentismo.

Las opciones son:

- Calcular estimado horas efectivas (del absentismo): Se indica para activar o no el cálculo de los absentismos según los parámetros que se describen a continuación.
- Días a partir de los cuales se estimarán las horas de absentismos: Indica el mínimo de días para realizar el cálculo de horas del absentismo. Es muy normal en los convenios de trabajo, cuando el periodo de absentismo es menor a una cantidad de días, se cogen las horas que están planificadas para añadirlas en el computo de horas del trabajador, pero si el periodo de baja es mayor a esa cantidad no se utiliza lo planificado sino que se tienen que estimar esas horas de ese absentismo. Por ejemplo, si tienes una baja de una operación de 3 días se coge lo planificado, pero si hay una baja maternal de 4 meses en vez de planificar, se estima el computo de horas de esos 4 meses.
- Calcular estimación: aquí se define el método de cálculo a utilizar. Existen dos formulas para hacerlo: Por días efectivos de trabajo en el periodo de absentismo. Se cogen las horas por día del perfil y se multiplican por los días planificados. Las horas contrato día, se multiplican por la cantidad de días con turno para verlos por este valor, así podemos calcular unas horas efectivas medias que no dependan de los turnos realizados, podemos llamarlo efectivos. Por media de la semana. Se cogen los días de la baja y se multiplican por las horas a la semana entre 7. En el otro caso, la media de la semana toma las horas contrato a la semana y lo divide entre 7.
