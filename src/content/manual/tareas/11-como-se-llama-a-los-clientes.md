---
schemaVersion: "1.0"
contentId: tareas-11-como-se-llama-a-los-clientes
title: ¿Cómo se llama a los clientes?
description: Los puestos siempre tienen que tener abierta la aplicación de turnos para realizar llamadas a los clientes.
contentType: faq
module: Tareas
submodule: General
intent: ¿Cómo se llama a los clientes?
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: clientes
    label: Clientes
  - id: llama
    label: Llama
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
    - https://manual.aturnos.com/knowledgebase/11-como-se-llama-a-los-clientes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/11-como-se-llama-a-los-clientes/
ai:
  answerableQuestions:
    - ¿Cómo se llama a los clientes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/11-como-se-llama-a-los-clientes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/11-como-se-llama-a-los-clientes/
  contentHash: 839127245324adbecc20c856d47ba0750631efede302b631b80499a62aea86f0
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre ¿Cómo se llama a los clientes?, con instrucciones y contexto revisables por el equipo de aTurnos.

## Respuesta
Los puestos siempre tienen que tener abierta la aplicación de turnos para realizar llamadas a los clientes. Cada puesto puede hacer llamadas de acuerdo a las especialidades con valor cinco (5) que tienen informadas, con independencia de que tengan un turno planificado ese día (entendiendo que siempre uno de los puestos con especialidad tienen que tener turno asignado), en caso contrario, el Kiosko no ofrecerá citas de esa especialidad o tarea.

El menú de Tareas → Tiempo Real es el que permite a los puestos llamar a los clientes.

1. Al hacer “Siguiente tarea” aparece el número (ticket del cliente) en las pantallas centrales y se ilumina el número del puesto.
2. Puedes seleccionar una cola en concreto, de manera que además de tener en cuenta la hora de la petición, al hacer Siguiente tareas, se tendrá en cuenta las colas seleccionadas.
3. Tareas asignadas a los puestos, en caso de tener varias especialidades informadas se ven todas ellas, si tienes el perfil de administrador visualizas todas las colas.
4. Tiempo de espera desde que el cliente solicito la cita a través del kiosko
5. Tiempo Tarea Tiempo consumido en la atención a ese cliente.
6. Una vez marcado el “Siguiente tarea”, aparece la opción de iniciar la acción. En este momento aparecen en las pantallas centrales y en los puestos. la llamada a el cliente.
7. Una vez que el cliente se presenta en el puesto correspondiente no se inicia la acción.
8. Comienza a computar el Tiempo de la Tarea.
9. Para terminar la tarea y hacer otra llamada, para la cita
10. En el caso de que el cliente esté Ausente, se vuelve a marcar “Siguiente tarea”, la cita de este cliente pasa

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![11. ¿Cómo se llama a los clientes?](/media/manual/11-como-se-llama-a-los-clientes-692c97d997.png)
