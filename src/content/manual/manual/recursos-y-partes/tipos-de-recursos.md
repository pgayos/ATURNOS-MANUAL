---
schemaVersion: "1.0"
contentId: recursos-y-partes-tipos-de-recursos
title: Tipos de recursos
description: Uno de los campos que se informan cuando se crea un recurso es el tipo y la selección de un tipo u otro determina el comportamiento.
contentType: concept
module: Recursos y partes
submodule: General
subtopic: ""
intent: Tipos de recursos
audience:
  - role: RRHH
    access: applicable
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: recursos
    label: Recursos
  - id: tipos
    label: Tipos
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
    - https://manual.aturnos.com/knowledgebase/tipos-de-recursos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/tipos-de-recursos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre tipos de recursos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/tipos-de-recursos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/tipos-de-recursos/
  contentHash: 2323c947b9d1693c9479ab9844320b2a6e91edf2d27d6247501f546e0f98085c
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Uno de los campos que se informan cuando se crea un recurso es el tipo y la selección de un tipo u otro determina el comportamiento.

## Qué debes saber
Los tipos disponibles son:

Tipo Textual: Permite escribir un texto.

Tipo Numérico: Permite escribir un importe al que se le puede asociar una observación. Se puede exportar como variable de nómina.

Tipo Pregunta Si o No: Permite crear una Lista de Comprobación, marcando un check de validación.

Tipo Fórmula: Permite indicar una operación (suma, resta, multiplicación o división) sobre un concepto ya creado, por ejemplo para el abono del número de kilómetros (que puede informar el trabajador) multiplicado por el precio del kilómetro que se indica al crear el recurso. Se puede exportar como variable de nómina.

Tipo Rango: Devuelve distintos valores, atendiendo al rango que se indique.

Tipo Hora: Permite informar el dato en formato hora.

El objetivo de este tipo de recurso es poder asociar una descripción al turno o a las horas planificadas. Para crear un recurso de este tipo se han de seguir los pasos indicados en ¿Cómo crear un parte de trabajo? y seleccionar el tipo: Textual.

En este ejemplo se crea un recurso llamado: Descripción.

El objetivo de este tipo de recurso es poder asociar un importe al turno o a las horas que el trabajador tiene planificado en el cuadrante. Para crear un recurso de este tipo se han de seguir los pasos indicados en ¿Cómo crear un parte de trabajo? y seleccionar el tipo: Numérico.

En este ejemplo, se crea un recurso llamado: Kilómetros. Es el que se debe utilizar si el recurso se quiere exportar como variables de nómina. Accede a nuestro Manual de Nómina.

Además, permite indicar un límite que generará una alarma en el Resumen de los recursos. Consulta en el Manual el funcionamiento de las Alarmas de los Recursos. En este ejemplo, el límite se ha fijado en 300 kilómetros.

El objetivo de este tipo es crear por ejemplo, una Lista de Comprobación asociada al turno o a las horas que el trabajador tiene planificado en el cuadrante. Para crear un recurso de este tipo se han de seguir los pasos indicados en ¿Cómo crear un parte de trabajo? y seleccionar el tipo: Sí o No.

El objetivo de este tipo es utilizar un recurso tipo numérico creado previamente para multiplicarlo por un valor fijo. El ejemplo típico es el abono de los Kilómetros (informados como recurso por el trabajador, de acuerdo a la configuración que se indique) por el precio que se informe en la fórmula.

Para crear un recurso de este tipo se han de seguir los pasos indicados en ¿Cómo crear un parte de trabajo? y seleccionar el tipo: Fórmula, en el campo “Fórmula”.

En este ejemplo, se crea un recurso llamado: “Kilómetros a pagar” en el campo fórmula se debe escribir el nombre del recurso creado anteriormente, en este ejemplo (Kilómetros) por la operación que se indique, en este caso se multiplica por el valor 0,21. Accede a nuestro Manual de Nómina para asociar un concepto de nómina al recurso creado.

Además, permite indicar un límite que generará una alarma en el Resumen de los recursos. Consulta en el Manual el funcionamiento de las Alarmas de los Recursos.

El objetivo de este tipo de recurso es poder asociar un dato con formato horario asociado al turno o a las horas planificadas. Para crear un recurso de este tipo se han de seguir los pasos indicados en ¿Cómo crear un parte de trabajo? y seleccionar el tipo: Hora.

En este ejemplo se crea un recurso llamado: Horas

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Tipos de recursos](/media/manual/tipos-de-recursos-b09e1d4d10.png)

![Tipos de recursos](/media/manual/tipos-de-recursos-28b3eace46.png)

![Tipos de recursos](/media/manual/tipos-de-recursos-5ea9d6b97f.png)

![Tipos de recursos](/media/manual/tipos-de-recursos-677242a821.png)

![Tipos de recursos](/media/manual/tipos-de-recursos-cfc6cac4bb.png)
