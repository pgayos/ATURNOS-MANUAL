---
schemaVersion: "1.0"
contentId: "planificacion-23-importar-trabajadores-y-o-planificacion-planificacion-con-patrones"
title: "Importar trabajadores y/o planificación: planificación con patrones"
description: "A la hora de facilitar la aplicación de patrones de forma masiva a un equipo de trabajo, se puede hacer todo de una vez desde una importación de planificación con patrones."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Importar trabajadores y/o planificación: planificación con patrones"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "importar"
    label: "Importar"
  - id: "patrones"
    label: "Patrones"
  - id: "planificacion"
    label: "Planificacion"
  - id: "trabajadores"
    label: "Trabajadores"
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
    - "https://manual.aturnos.com/knowledgebase/23-importacion-de-planificacion-con-patrones/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/23-importacion-de-planificacion-con-patrones/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre importar trabajadores y/o planificación: planificación con patrones?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "a86ec19dc682cf21c3f623f45647180aa69e8ae62612fdcf04b85488ec793419"
  migratedAt: 2026-08-17
---
## Resumen

A la hora de facilitar la aplicación de patrones de forma masiva a un equipo de trabajo, se puede hacer todo de una vez desde una importación de planificación con patrones.

## Contenido

Esta importación se puede realizar descargando la plantilla de ejemplo donde completar los datos necesarios:

CSV Importar-planificacion-con-patrones

De la misma forma, es posible crear un documento Excel con las siguientes columnas:

- Nombre: indicar los nombres de los trabajadores.
- Email: informar, en las celdas de las diferentes filas, los correos electrónicos de los trabajadores.
- Fecha alta del trabajador: fecha de alta en el sistema aTurnos del trabajador. Formato fecha dd/mm/aaaa.
- Fecha baja del trabajador: fecha de baja en el sistema aTurnos del trabajador, en el caso de que el trabajador tenga planificada una fecha de baja en el sistema. Formato fecha dd/mm/aaaa.
- Nombre del patrón: informar el nombre del patrón (exactamente igual al que aparece en el listado de patrones ) que se quiere aplicar.
- Fecha de inicio del patrón: fecha a partir de la cual se inserta el patrón. Formato fecha dd/mm/aaaa
- Fecha fin del pa trón: fecha hasta la cual se inserta el patrón. Formato fecha dd/mm/aaaa
- Periodo: número del periodo al cual corresponde teniendo en cuenta que el periodo 1 su valor será 0. De ser el segundo periodo, se pondrá valor 1 y así sucesivamente, según el número de periodos y por cual comience.
- Escalonado: informar del número de días de los que consta el patrón. Por ejemplo, en el patrón ”MMTTN_LL”, el valor será 8.
- Día de la semana: en el caso de ser lunes será el valor uno, martes 2, miércoles 3,…y el domingo el valor será 7.
- Cuadrante: indicar con el valor 0 si se desea planificar únicamente en cuadrante, el valor 1 si solo se desea planificar en cuadrante borrador y el valor 2 si se desea planificar en ambos cuadrantes.
- Festivos: indicar con valor 1, si lo que se pretende es insertar turnos del patrón en días festivos que han sido informados en el cuadrante (ver Festivos ). Con valor 0 así como dejando vacía las celdas de esta columna, si no queremos insertar turnos en los días festivos.
- Vacaciones: informar con valor 1, si lo que se pretende es insertar turnos del patrón en días que estén planificadas previamente vacaciones (V) en el cuadrante.
- Borrar turnos: indicar valor 1 si se desean borrar los turnos o la planificación que haya aplicada previamente, valor 0 si se desea mantener la planificación del patrón importado y la ya aplicada en el cuadrante.

Guarda tu documento como formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú “ Importar “.

Después deberás asociar los campos del documento con los que aparecen en el listado para parametrizar la importación.
