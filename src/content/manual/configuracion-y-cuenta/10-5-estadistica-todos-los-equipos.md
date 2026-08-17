---
schemaVersion: "1.0"
contentId: "configuracion-y-cuenta-10-5-estadistica-todos-los-equipos"
title: "Estadística todos los equipos"
description: "A través de la estadística todos los equipos se visualiza el resultado del cálculo de variables entre las fechas de ejecución."
contentType: concept
module: "Configuración y cuenta"
submodule: "Roles y permisos"
intent: "Estadística todos los equipos"
audience:
  - role: "RRHH"
    access: applicable
entities:
  - id: "equipos"
    label: "Equipos"
  - id: "estadistica"
    label: "Estadistica"
  - id: "todos"
    label: "Todos"
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
    - "https://manual.aturnos.com/knowledgebase/10-5-estadistica-todos-los-equipos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/10-5-estadistica-todos-los-equipos/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre estadística todos los equipos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "8cc10aaecd02408025b8d75171e4b0e4e017d44cecaa5ae544c8d0d40a72771e"
  migratedAt: 2026-08-17
---
## Resumen

A través de la estadística todos los equipos se visualiza el resultado del cálculo de variables entre las fechas de ejecución.

## Contenido

No es aconsejable el uso de la estadística (de este punto) ya que en el caso de cálculos complejos en los que se utilizan tanto conceptos que operan entre conceptos como conceptos de comparación, los operaciones las realizan entre las fechas de la ejecución.

Es decir, en el ejemplo que se ha ido desarrollando en este Manual, las horas de nocturnidad se calculan en un concepto de nómina si son menores a 10 (concepto 3K00) y si las horas nocturnas son iguales o mayores a 10 (concepto 3000).

Para que el cálculo sea correcto, la comparación del número de horas las debe hacer día a día, esta comparación en la exportación de nóminas (de este Punto )5 se ejecuta entre las fechas de la ejecución (entre el 1 de abril y el 30 de abril) de forma que sumará todas las horas nocturnas en el periodo (en este caso, las horas 9 horas del día 9 + las 12 horas del día 10 + las 10 horas del día 11 + las horas del día 13), al comparar el total de las horas con las 10 horas límites, devolverá un resultado no deseado.

El cálculo de variables que se realiza a través de esta exportación de nóminas, en este caso, se debe limitar a la parametrización de conceptos comunes de nómina, es decir, limitados a los conceptos tipo 2.1.

En la estadística la configuración de la plantilla de nómina es irrelevante ya que permite desde la pantalla donde se ejecuta seleccionar el formato.

Accede a RRHH → NOMINAS → ESTADISTICA TODOS LOS EQUIPOS

Nota: En este ejemplo, el único concepto que calcula es el número de horas nocturnas (las de dentro del periodo nocturno) cualquiera que sea el número de las realizadas, que se calcula en el concepto 3000.
