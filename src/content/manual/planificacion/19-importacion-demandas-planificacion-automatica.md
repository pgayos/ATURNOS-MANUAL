---
schemaVersion: "1.0"
contentId: "planificacion-19-importacion-demandas-planificacion-automatica"
title: "Importación demandas (Planificación automática)"
description: "Información sobre importación demandas (Planificación automática), con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Planificación"
submodule: "Turnos y patrones"
intent: "Importación demandas (Planificación automática)"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
entities:
  - id: "automatica"
    label: "Automatica"
  - id: "demandas"
    label: "Demandas"
  - id: "importacion"
    label: "Importacion"
  - id: "planificacion"
    label: "Planificacion"
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
    - "https://manual.aturnos.com/knowledgebase/19-importacion-de-demanda-operaciones/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/19-importacion-de-demanda-operaciones/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre importación demandas (Planificación automática)?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "cbee852e8aceee3616f1428f44e4181d373a2197efdc4a38c25b2a0d3e08d7d6"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre importación demandas (Planificación automática), con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Algunos managers de operaciones conocen cuál es la demanda que necesitan en cada turno de trabajo o en horario predeterminado. Si necesitas planificar en base a la demanda de trabajo que requiere tu actividad, podemos importar un fichero Excel donde indiquemos el incremento de demanda entre las horas de la actividad. Para importar este archivo, se debe tener activado el módulo de Planificación automática.

Para poder importar la demanda puedes completar la plantilla de ejemplo que puedes descargar:

CSV ejemplo demanda

Es posible por otra parte configurar una propia demanda, creando desde cero un documento Excel con las siguientes columnas:

- ID Demanda: número identificativo de la demanda si ya existiese.
- Nombre demanda: descripción con la que queremos identificar a la demanda a la hora de cargarla.
- Fecha y hora de inicio: día, mes, año y hora del inicio de cada intervalo en el que indicar el incremento de la demanda. Formato dd/MM/aaaa hh:mm.
- Fecha y hora de fin: día, mes, año y hora del final de cada intervalo en el que indicar el incremento de la demanda. Formato dd/MM/aaaa hh:mm.
- Incremento: número de cantidad de demanda en cada intervalo de tiempo.
- Localización: localización asociada a la demanda que se importa, la cual debe estar creada previamente (ver Crear nueva localización ).
- Especialidad: podemos añadir un nivel de especialidad para calcular la demanda, ésta puede estar creada antes de hacer la importación (ver Especialidades ).
- Modificar: valor 0, aumenta el valor informado en el campo “Incremento” de la demanda ya creada a modificar. Valor 1, modificar el valor informado en la demanda ya creada por el informado en la importación del campo “Incremento “.

Por último, antes de realizar la importación, guarda el documento en formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú de “Importar “.
