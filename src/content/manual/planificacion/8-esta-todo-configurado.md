---
schemaVersion: "1.0"
contentId: planificacion-8-esta-todo-configurado
title: ¿Está todo configurado?
description: Si ha seguido todos los pasos, ya puede solicitar citas a través del Kiosko, apareciendo las colas (funciones o tareas a las que solicitar), y ha precisado de:.
contentType: faq
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: ¿Está todo configurado?
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: configurado
    label: Configurado
  - id: esta
    label: Esta
  - id: todo
    label: Todo
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
    - https://manual.aturnos.com/knowledgebase/8-esta-todo-configurado/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/8-esta-todo-configurado/
ai:
  answerableQuestions:
    - ¿Está todo configurado?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/8-esta-todo-configurado/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/8-esta-todo-configurado/
  contentHash: ba8a40351d6731fdd876f6ffdb4cc02d59308681fbe8a9b27ff1042ff58d059e
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Si ha seguido todos los pasos, ya puede solicitar citas a través del Kiosko, apareciendo las colas (funciones o tareas a las que solicitar), y ha precisado de:.

## Respuesta
1.Crear una especialidad. (Administrar → Perfil del trabajador → Especialidades).

2.Configurar una cola. (Tareas → Procesos → Colas).

3.Asociar a los puestos las tareas configuradas. (Trabajadores → Listado)

4.Crear turnos para crear patrones:

- La creación de turnos (Administrar → Tipos de turno).
- La creación de patrones (Planificador → Patrones de turnos).
- Asignar a los puestos las horas a las que pueden solicitar citas (Cuadrante → Cuadrante → Aplicar Patrón).

5.Consulte si lo desea través de CUADRANTE → CUADRANTE, los puestos con turno planificado que determina la posibilidad de solicitar citas. Utilice los filtros y asegúrese que al menos cada cola tiene un puesto planificado.

Pruebe el sistema, solicite a través del Kiosko una cita y acceda a TAREAS → ASIGNACION DE TAREAS y compruebe como va reservando a cada puesto los slots de acuerdo a la configuración de colas (punto 4 de este Manual).
