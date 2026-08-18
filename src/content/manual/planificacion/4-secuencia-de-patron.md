---
schemaVersion: "1.0"
contentId: planificacion-4-secuencia-de-patron
title: Secuencia de patrón
description: Para establecer cómo va a ser la sucesión de turnos y los días en los que aplicará ese patrón de rotación, es importante tener claro que el Día 1 (de la secuencia del patrón), no se refiere.
contentType: concept
module: Planificación
submodule: Turnos y patrones
intent: Secuencia de patrón
audience:
  - role: Planificador
    access: applicable
entities:
  - id: patron
    label: Patron
  - id: secuencia
    label: Secuencia
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
    - https://manual.aturnos.com/knowledgebase/4-secuencia-de-patron/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-secuencia-de-patron/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre secuencia de patrón?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-secuencia-de-patron/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-secuencia-de-patron/
  contentHash: dce58c62330697ba32eec5a139b35133e5c72ffcc4cab62abedc029cdfa7b253
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre secuencia de patrón, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Para establecer cómo va a ser la sucesión de turnos y los días en los que aplicará ese patrón de rotación, es importante tener claro que el Día 1 (de la secuencia del patrón), no se refiere al día 1 del mes sino que esta relacionado al día de la semana en que va a iniciar el patrón (según se haya informado en el campo “Aplicar patrón desde “), en este ejemplo se refiere al Lunes y se entiende que si el “Escalonado con diferencia” informado es de 7 días, entonces el día 7 corresponderá siempre a los domingos.

Observando la última columna de la tabla, te muestra la información del total de horas de cada periodo del patrón. En cada fila te informa la suma de horas computadas de los diferentes turnos que forman parte de cada periodo del patrón. Se actualiza cuando alguna celda/día cambia de planificación (inserta un turno nuevo, se borra, se cambia un turno por otro con diferente número de horas computadas).
