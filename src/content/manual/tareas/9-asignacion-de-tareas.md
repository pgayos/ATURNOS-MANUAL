---
schemaVersion: "1.0"
contentId: "tareas-9-asignacion-de-tareas"
title: "Asignación de tareas"
description: "Conforme los clientes van pidiendo citas a través del Kiosko, el sistema reserva slots de tiempo (de acuerdo a la configuración de la cola) al puesto que tiene asignada la función (o especialidad) de la cita."
contentType: reference
module: "Tareas"
submodule: "Turnos y patrones"
intent: "Asignación de tareas"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "asignacion"
    label: "Asignacion"
  - id: "tareas"
    label: "Tareas"
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
    - "https://manual.aturnos.com/knowledgebase/9-asignacion-de-tareas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/9-asignacion-de-tareas/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre asignación de tareas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "6783daa40364f0c5ce50c205df6a1d3db4317b4649de26fe6101f159b0944aa4"
  migratedAt: 2026-08-17
---
## Resumen

Conforme los clientes van pidiendo citas a través del Kiosko, el sistema reserva slots de tiempo (de acuerdo a la configuración de la cola) al puesto que tiene asignada la función (o especialidad) de la cita.

## Contenido

Tal y como se muestra en la siguiente pantalla que encuentra en Tareas → Asignación

IMPORTANTE: Con independencia de que sólo haya un puesto de trabajo con la especialidad de Financiación con turno planificado, el sistema permite a los demás puestos con los que comparte especialidad, estén o no planificados, llamar a clientes que tengan cita en la cola en la que el puesto de trabajo sin planificación (en el ejemplo, el Puesto 1) esté especializado.

1. Slots de tiempo reservado al puesto que tiene la especialidad de Financiación.
2. Número de ticket.
3. Identificación de la cola.
4. Empleado que tiene asignada la tarea. Se visualiza las llamadas desde otros puestos con los que comparte especialidad. En el ejemplo, el Puesto 7 tiene valorada la especialidad de Financiación con un cinco (5).
5. Nombre del cliente en el caso de citas online.
6. Hora de petición de la cita.
7. Tiempo de espera desde la solicitud de la cita en el kiosko hasta el momento actual.
8. Tiempo de la tareas con es cliente.
9. Acciones permitidas. SIGUIENTE – EMPEZAR – PARAR.

IMPORTANTE: Es desde los puestos donde se hacen las llamadas a los clientes. A través de las acciones permitidas.
