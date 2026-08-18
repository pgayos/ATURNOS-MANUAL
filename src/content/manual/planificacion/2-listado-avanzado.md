---
schemaVersion: "1.0"
contentId: planificacion-2-listado-avanzado
title: Listado avanzado
description: Este reporte informa de todos los fichajes que se están realizando a través de los distintos sistemas para el registro de la jornada laboral.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Listado avanzado
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: avanzado
    label: Avanzado
  - id: listado
    label: Listado
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
    - https://manual.aturnos.com/knowledgebase/2-listado-avanzado/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-listado-avanzado/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre listado avanzado?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-listado-avanzado/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-listado-avanzado/
  contentHash: ca4919c547a1d103e52423e842ee6ce5861435ed4435027505bd49a27b11e936
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Este reporte informa de todos los fichajes que se están realizando a través de los distintos sistemas para el registro de la jornada laboral.

El listado se puede ver por pantalla o generar una ‘ Petición de reporte ‘ para su descarga cuando el volumen de datos se sobrepasa.

El reporte generado, puede ser descargado en formato Excel.

## Filtros

En la consulta del reporte se puede definir:

- Fechas.

- Equipos

- Trabajadores, filtrando por Nombre, Email o ID Empleado.

- Fichajes: Sin fichajes realizados. Con fichajes realizados.

- Horario, Desde y Hasta una hora predefinida de la jornada planificada.

- Planificados, se pueden filtrar por aquellos trabajadores que tienen alguna planificación de turnos u horas. No está planificado. Está planificado.

## Variables

En el reporte obtendremos la siguiente información por defecto (se pueden añadir otros campos con la ‘ Configuración Reportes de RRHH ‘):

- Nombre del equipo: nombre del equipo.
- Fecha: día, mes y año.
- Porcentaje de jornada: aparecerá el total de la jornada o en caso de tener una reducción de jornada, el porcentaje restante.
- Jornada planificada: muestra la hora de inicio y fin del turno o turnos, asignados en la planificación para esa jornada.
- Localización, de los turnos planificados en esa jornada.
- Fichajes: visualizamos la hora del fichaje de entrada y salida.
- Absentismos: en el caso de haberse planificado o al realizar un ajuste haberse añadido un absentismo, aparecerá la hora de inicio y fin del absentismo.
- Incidencias, como resultado de existir un absentismo, aquí se mostrará la abreviatura del tipo de absentismo.
- Ultimo día planificado, es decir la fecha del último día con planificación del trabajador en el cuadrante, si el trabajador no tiene planificación no se reflejará ningún dato.
- Último día planificado cuadrante, comprueba hasta qué fecha hay planificación en el ‘ Cuadrante ‘.
- Último día planificado cuadrante borrador, consulta la última fecha con turnos u horas planificadas en el ‘ Cuadrante borrador ‘.
- Horas ordinarias: nos indica la cantidad de horas que se han realizado de forma presencial dentro del horario de inicio y fin de nuestro turno planificado.
- Horas presenciales: muestra el total de tiempo transcurrido desde el fichaje de entrada y el de salida.
- Estado, en resumen muestra las horas de diferencia entre las horas presenciales y las horas computadas de la planificación, teniendo en cuenta las tolerancias por defecto y exceso tanto al inicio como al final del turno.
- Fichadas, devuelve la cantidad de horas que se computan en la variable ‘ Horas fichadas ‘.

También puedes consultar el siguiente post relacionado: ¿Cómo saber qué trabajadores fichan dentro de su planificación de turnos?
