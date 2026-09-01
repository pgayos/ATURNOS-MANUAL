---
schemaVersion: "1.0"
contentId: planificacion-25-importar-planificacion-con-turnos-absentismos-vacaciones-y-o-localizaciones
title: Importar planificación con turnos, absentismos, vacaciones y/o localizaciones
description: En ocasiones existen empresas o managers que tienen ya una planificación y no desean modificarla, ésta puede ser importada incluyendo la planificación de turnos, vacaciones y absentismos.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Importar planificación con turnos, absentismos, vacaciones y/o localizaciones
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: absentismos
    label: Absentismos
  - id: importar
    label: Importar
  - id: localizaciones
    label: Localizaciones
  - id: planificacion
    label: Planificacion
  - id: turnos
    label: Turnos
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
    - https://manual.aturnos.com/knowledgebase/25-importacion-turnos-absentismos-vacaciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/25-importacion-turnos-absentismos-vacaciones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importar planificación con turnos, absentismos, vacaciones y/o localizaciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/25-importacion-turnos-absentismos-vacaciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/25-importacion-turnos-absentismos-vacaciones/
  contentHash: 58adea781e1eb26f7b5d3a8ba3c7ee72363794cd3ddd190a1997192bcb5510c1
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

En ocasiones existen empresas o managers que tienen ya una planificación y no desean modificarla, ésta puede ser importada incluyendo la planificación de turnos, vacaciones y absentismos.

## Qué debes saber
Para poder importar la planificación puedes completar la plantilla de ejemplo que puedes descargar:

CSV Importar planificacion (turnos)

- Nombre: nombres que identifican a los trabajadores
- Email*: se añade en las diferentes filas los correos electrónicos de los trabajadores.
- Id Empleado*
- En las siguientes columnas añadir cada día desde la fecha de inicio (Columna Inicio) hasta la fecha fin de planificación (Columna Final) en formato dd/MM/aaaa del periodo de tiempo que se quiere importar. En las celdas de las columnas de los días del cuadrante, se insertan las abreviaturas idénticas de los turnos, vacaciones y absentismos que están previamente creados (ver Tipos de turno ). También podemos añadir más de un tipo de turno en un día o una jornada partida, para ello habría que insertar en la celda M+T. En el caso de los absentismo debe ir asociada al tipo de turno, de la siguiente estructura: abreviatura del turno, guion (–) y abreviatura del absentismo, por ejemplo: M-IT (ver Absentismos ).

Guarda el documento como formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú de “Importar “.

A la hora de asociar los campos del documento con aTurnos, hay que tener en cuenta que para tomar las fechas de planificación, la columna del primer día planificado en el archivo que se va a importar, se debe asociar al campo “Columna Inicio” y la última fecha de planificación asociarla al campo “Columna final “.

Existen tres opciones de importación, si se informa en el documento de Excel con el campo “Cuadrante”:

- Valor 0, se importa únicamente en el cuadrante.
- Valor 1, se importa en el cuadrante borrador.
- Valor 2, se importan tanto en el cuadrante, como en el cuadrante borrador.

Si los trabajadores tienen horarios con tipos de turno asignados a diferentes localizaciones, también se pueden importar, añadiendo a cada tipo de turno, el ID de la localización (por ejemplo: M 84652).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![25. Importar planificación con turnos, absentismos, vacaciones y/o localizaciones](/media/manual/25-importar-planificacion-con-turnos-absentismos-vacaciones-y-o-locali-e4165fe436.png)

![25. Importar planificación con turnos, absentismos, vacaciones y/o localizaciones](/media/manual/25-importar-planificacion-con-turnos-absentismos-vacaciones-y-o-locali-3a7ca25975.png)

![25. Importar planificación con turnos, absentismos, vacaciones y/o localizaciones](/media/manual/25-importar-planificacion-con-turnos-absentismos-vacaciones-y-o-locali-c3b6af4b33.png)

![25. Importar planificación con turnos, absentismos, vacaciones y/o localizaciones](/media/manual/25-importar-planificacion-con-turnos-absentismos-vacaciones-y-o-locali-9219ccfa15.png)
