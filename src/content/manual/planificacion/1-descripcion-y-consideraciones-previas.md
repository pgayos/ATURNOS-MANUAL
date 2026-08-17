---
schemaVersion: "1.0"
contentId: "planificacion-1-descripcion-y-consideraciones-previas"
title: "Descripción y consideraciones previas"
description: "El módulo de tareas de aTurnos permite la asignación de tareas por terceros a los trabajadores planificados en el cuadrante y la gestión de estas tareas desde diferentes puestos y usuarios."
contentType: concept
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Descripción y consideraciones previas"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
  - role: "Desarrollador API"
    access: applicable
entities:
  - id: "consideraciones"
    label: "Consideraciones"
  - id: "descripcion"
    label: "Descripcion"
  - id: "previas"
    label: "Previas"
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
    - "https://manual.aturnos.com/knowledgebase/1-descripcion-y-consideraciones-previas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/1-descripcion-y-consideraciones-previas/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre descripción y consideraciones previas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "7f514347fbba4491c9049e117f8319b609f2cd5b069bd354d6b92f407a3f5bc6"
  migratedAt: 2026-08-17
---
## Resumen

El módulo de tareas de aTurnos permite la asignación de tareas por terceros a los trabajadores planificados en el cuadrante y la gestión de estas tareas desde diferentes puestos y usuarios.

## Contenido

Las tareas pueden ser asignadas desde sistemas externos conectados al API de aTurnos, desde las solicitud de citas desde los kioscos por parte de clientes o por los mismos trabajadores.

Estas tareas/citas son asignadas atendido a las diferentes especialidades de los trabajadores y a diferentes criterios de asignación.

Después los trabajadores solicitan el inicio de estas citas/tareas que generan avisos a los clientes en la tienda para el inicio de las mismas, así como diferentes mecanismos de control permiten el seguimiento y generación de estadísticas de las mismas.

Tanto las pantallas como el Kiosko deben tener salida a internet por una red que no sea la corporativa.

En resumen, el módulo de aTurnos permite la asignación de tareas, bloqueando periodos de tiempos (slots) que determina que los clientes puedan pedir citas (reservando por tanto un período de tiempo) a las diferentes colas (Asistencia Técnica, Financiación, etc.) que están determinadas por las especialidades de los puestos
