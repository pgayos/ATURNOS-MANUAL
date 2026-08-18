---
schemaVersion: "1.0"
contentId: "control-horario-5-17-flexibilidad-de-fichajes"
title: "Flexibilidad de fichajes"
description: "Información sobre flexibilidad de fichajes, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Control horario"
submodule: "Altas y bajas"
intent: "Flexibilidad de fichajes"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "fichajes"
    label: "Fichajes"
  - id: "flexibilidad"
    label: "Flexibilidad"
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
    - "https://manual.aturnos.com/knowledgebase/5-17-flexibilidad-de-fichajes/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/5-17-flexibilidad-de-fichajes/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre flexibilidad de fichajes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "7b3a0bf716fe1a6bbbe800c7ebbf84df362cb69b5fd407ed5f5f7e20768240b4"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre flexibilidad de fichajes, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Los administradores pueden definir que los trabajadores tengan una hora inicio y fin entre la que fichar el turno planificado. Permitiendo a los empleados comenzar y terminar su jornada laboral en horas diferentes, siempre y cuando cumplan con el tiempo total requerido en el turno.

Esta flexibilidad se configura en los Turnos, del menú Tipos de turno, dentro de Planificador.

Configurar una hora inicio y fin para fichar, gráficamente, en la línea del tiempo de ‘Detalle’, marca la hora inicio y fin para fichar el turno planificado.

Por ejemplo, si hay un turno planificado de 08:00 a 16:00, la hora inicio puede ser las 07:00 y una hora fin a las 17:00, mostrándose de la siguiente manera.

Si el trabajador ficha antes de esa hora inicio de fichaje, el sistema lo comprueba a partir de la hora inicio de fichaje. Siguiendo el ejemplo, si el fichaje de entrada es a las 06:00 horas, solo empezará a computar desde las 07:00 horas, pese a haber fichado el mismo número de horas, en el estado hay una hora de defecto de horas, al no contarse la hora de 06:00 – 07:00.

Tomando otro ejemplo de un turno con horario 16:00 – 22:00, se puede dar una mayor flexibilidad, con una hora inicio 09:00 y una hora fin 23:00. El trabajador puede fichar desde las 12:00 hasta las 16:00 horas y por razones de conciliación, ficha de 21:00 a 23:00. De esta forma, el empleado ha cumplido con las horas del turno planificado, sin deber horas, aunque no haya estado presencialmente en el horario del turno.
