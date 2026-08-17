---
schemaVersion: "1.0"
contentId: "planificacion-4-secuencia-de-patron"
title: "Secuencia de patrón"
description: "Información sobre secuencia de patrón, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Planificación"
submodule: "Turnos y patrones"
intent: "Secuencia de patrón"
audience:
  - role: "Planificador"
    access: applicable
entities:
  - id: "patron"
    label: "Patron"
  - id: "secuencia"
    label: "Secuencia"
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
    - "https://manual.aturnos.com/knowledgebase/4-secuencia-de-patron/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/4-secuencia-de-patron/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre secuencia de patrón?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "9159082cc516ad13c7d77c26affcd4fc1dc114fbdf5ed3931c8ba9c258e74682"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre secuencia de patrón, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Para establecer cómo va a ser la sucesión de turnos y los días en los que aplicará ese patrón de rotación, es importante tener claro que el Día 1 (de la secuencia del patrón), no se refiere al día 1 del mes sino que esta relacionado al día de la semana en que va a iniciar el patrón (según se haya informado en el campo “ Aplicar patrón desde “), en este ejemplo se refiere al Lunes y se entiende que si el “ Escalonado con diferencia ” informado es de 7 días, entonces el día 7 corresponderá siempre a los domingos.

Observando la última columna de la tabla, te muestra la información del total de horas de cada periodo del patrón. En cada fila te informa la suma de horas computadas de los diferentes turnos que forman parte de cada periodo del patrón. Se actualiza cuando alguna celda/día cambia de planificación (inserta un turno nuevo, se borra, se cambia un turno por otro con diferente número de horas computadas).
