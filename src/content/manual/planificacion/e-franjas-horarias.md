---
schemaVersion: "1.0"
contentId: planificacion-e-franjas-horarias
title: Franjas horarias
description: Las franjas horarias son divisiones del tiempo en intervalos definidos dentro de un día o período específico.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
intent: Franjas horarias
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: franjas
    label: Franjas
  - id: horarias
    label: Horarias
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
    - https://manual.aturnos.com/knowledgebase/e-franjas-horarias/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/e-franjas-horarias/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre franjas horarias?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/e-franjas-horarias/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/e-franjas-horarias/
  contentHash: 752d318f830d581c78d51e7a447cceefd497141a11588f55fcb6c37d7de7947d
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre franjas horarias, con instrucciones y contexto revisables por el equipo de aTurnos.

Las franjas horarias son divisiones del tiempo en intervalos definidos dentro de un día o período específico. En el ámbito de la planificación de personal, estas franjas indican los momentos en que uno o varios empleados deben realizar sus tareas o estar disponibles para trabajar. Su correcta configuración es clave para garantizar una gestión eficiente de los turnos y optimizar la cobertura laboral.

Utilizando la versión aTurnos Enterprise, se tendrá acceso a la funcionalidad avanzada de análisis de cobertura. Esto incluye una tabla llamada Total por franjas horarias, que muestra:

- El número de empleados que están trabajando dentro de cada franja horaria definida.

- Una visión detallada de la cobertura laboral, permitiéndote identificar fácilmente áreas con exceso o falta de personal.

Esta información es especialmente útil para tomar decisiones estratégicas, como ajustar los turnos según las necesidades operativas o mejorar la asignación del personal.

## Crear franja horaria

Para comenzar a trabajar con franjas horarias en aTurnos, es necesario crearlas siguiendo estos pasos:

1. Desde Planificador → Tipos de turno.

1. Hacer clic en Acciones → Añadir franja horaria

1. Completar los datos necesarios:

- Descripción: Asignar un nombre o etiqueta a la franja horaria para identificarla fácilmente.

- Hora de inicio y fin: Definir los límites de tiempo exactos para la franja.

- Turnos a excluir: configurar que ciertos turnos no se consideren en el cómputo de la tabla de cobertura. Estos turnos no aparecerán en los reportes de cobertura relacionados con las franjas horarias.

Franja horaria: Apertura y preparación

- Descripción: “Mañanas”

- Hora de inicio: 8:00

- Hora de fin: 14:59

- Turnos a excluir: Turnos de limpieza nocturna que terminaron antes de esta franja, para evitar duplicidades en el conteo de personal activo.

Explicación de su uso: Durante esta franja, los empleados se encargan de tareas como abastecer estanterías, organizar las cajas registradoras y preparar el espacio para los clientes.
