---
schemaVersion: "1.0"
contentId: planificacion-20-importacion-de-demanda-por-tipo-de-turno-planificacion-automatica
title: Importación de demanda por tipo de turno (Planificación automática)
description: En muchos casos los managers de operaciones necesitan planificar sus equipos en base a una demanda de turnos requerida para garantizar la calidad de su servicio o actividad.
contentType: concept
module: Planificación
submodule: Turnos y patrones
subtopic: ""
intent: Importación de demanda por tipo de turno (Planificación automática)
audience:
  - role: Administrador
    access: applicable
entities:
  - id: automatica
    label: Automatica
  - id: demanda
    label: Demanda
  - id: importacion
    label: Importacion
  - id: planificacion
    label: Planificacion
  - id: tipo
    label: Tipo
  - id: turno
    label: Turno
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
    - https://manual.aturnos.com/knowledgebase/20-importacion-de-demanda-por-tipo-de-turno-operaciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/20-importacion-de-demanda-por-tipo-de-turno-operaciones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importación de demanda por tipo de turno (Planificación automática)?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/20-importacion-de-demanda-por-tipo-de-turno-operaciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/20-importacion-de-demanda-por-tipo-de-turno-operaciones/
  contentHash: 3faad7b32a3c6620fc47a967ff1098be827b7fa85ec53177a1dd08dc2940164f
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre importación de demanda por tipo de turno (Planificación automática), con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
En muchos casos los managers de operaciones necesitan planificar sus equipos en base a una demanda de turnos requerida para garantizar la calidad de su servicio o actividad. Para ello, podemos importar un fichero Excel donde indiquemos el incremento de demanda por cada turno de la actividad. Para importar este archivo, se debe tener activado el módulo de Planificación automática.

Es recomendable importar una demanda cuando la necesidad a cubrir varía en los días de cada semana, Ej. en una demanda de dos semanas, el lunes de la semana 1 la necesidad de turnos no es la misma que la del lunes de la semana 2. La necesidad de cobertura no se mantiene constante por día en todas las semanas.

A continuación te mostramos un modelo o ejemplo de plantilla a utilizar para importar la demanda, que podrás descargar y completar para el proceso:

CSV import_demand_turnos

También puedes crear tu propio fichero o archivo desde cero en un documento Excel con las siguientes columnas:

- ID Demanda: número de identificación de la demanda ya creada si existiera.
- Nombre demanda: descripción con la que queremos identificar a la demanda a la hora de cargarla.
- Fecha: día, mes, año en el que indicar el incremento de la demanda del turno. Formato dd/mm/aaaa.
- Abreviatura: identificación del turno.
- Total: número de cantidad de demanda requerido por turno y día.
- Localización: localización asociada a la demanda que se importa, la cual debe estar creada previamente (ver Crear nueva localización ). Informar este campo es opcional, depende de que la demanda esté relacionada directamente a una localización en particular o no.
- Especialidad: podemos añadir una columna con el nombre de especialidad (e informar el nivel o puntuación requerido de 0 a 5) para calcular la demanda, ésta puede estar creada antes de hacer la importación (ver Especialidades ). Informar este campo es opcional, depende de que la demanda esté relacionada directamente a una Especialidad en particular o no.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![20. Importación de demanda por tipo de turno (Planificación automática)](/media/manual/20-importacion-de-demanda-por-tipo-de-turno-planificacion-automatica-adad31fe4d.png)
