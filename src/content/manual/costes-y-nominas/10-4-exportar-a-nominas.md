---
schemaVersion: "1.0"
contentId: costes-y-nominas-10-4-exportar-a-nominas
title: Exportar a nóminas
description: La exportación a nómina genera un fichero csv que recupera los valores calculados entre las fechas de la ejecución.
contentType: concept
module: Costes y nóminas
submodule: Cuadrante
intent: Exportar a nóminas
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: exportar
    label: Exportar
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
    - https://manual.aturnos.com/knowledgebase/10-4-exportar-a-nominas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/10-4-exportar-a-nominas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre exportar a nóminas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/10-4-exportar-a-nominas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/10-4-exportar-a-nominas/
  contentHash: 308a95d772fa472819ced189ba69ce39dce9d461e1b7cbb637c66a9da5fd2116
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

La exportación a nómina genera un fichero csv que recupera los valores calculados entre las fechas de la ejecución.

## Qué debes saber
Suele utilizarse en equipos en el que el Modo de validación para la exportación (ver punto 1.1. del Manual) está indicada la opción “No necesita validación” ya que en el mismo proceso de exportación permite cerrar el cuadrante.

No es aconsejable el uso de la exportación de nómina (explicado en este punto) si para el cálculo de las variables se utilizan cálculos complejos en los que se utilizan tanto conceptos que operan entre conceptos como conceptos de comparación, ya que las operaciones (de suma, resta, multiplicación o división, así como las de comparación) se realizan entre las fechas de la ejecución.

Es decir, en el ejemplo que se ha ido desarrollando en este Manual, las horas de nocturnidad se calculan en un concepto de nómina si son menores a 10 (concepto 3K00) y si las horas nocturnas son iguales o mayores a 10 (concepto 3000).

Para que el cálculo sea correcto, la comparación del número de horas las debe hacer día a día, esta comparación en la exportación de nóminas (de este Punto )5 se ejecuta entre las fechas de la ejecución (entre el 1 de abril y el 30 de abril) de forma que sumará todas las horas nocturnas en el periodo (en este caso, las horas 9 horas del día 9 + las 12 horas del día 10 + las 10 horas del día 11 + las horas del día 13), al comparar el total de las horas con las 10 horas límites, devolverá un resultado no deseado.

El cálculo de variables que se realiza a través de esta exportación de nóminas, en este caso, se debe limitar a la parametrización de conceptos comunes de nómina, es decir, limitados a los conceptos tipo 2.1.

Si para el cálculo de variables no se utilizan conceptos que operan entre ellos y/o conceptos de comparación y el formato csv es el que precisas para la importación, se accede a través de RRHH → NOMINAS → EXPORTAR NOMINAS hay que seguir las siguientes indicaciones:

1.- Seleccionar los equipos

2.- Fecha de inicio

3.- Fecha de fin

4.- Dejar marcado el check si en el modo de validación para la exportación (ver punto 1.1. del Manual) está indicada la opción “No necesita validación”.

5.- En caso de que en el modo de validación para la exportación (ver punto 1.1. del Manual) está indicada la opción “El cuadrante debe estar cerrado”, hay que desmarcar el check de “Cierre de cuadrante”.

6.- Descargar el fichero en formato csv

7.- Guarda el fichero generado
