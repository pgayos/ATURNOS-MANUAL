---
schemaVersion: "1.0"
contentId: planificacion-absentismo
title: Absentismo
description: Un absentismo es una ausencia en el puesto de trabajo durante los turnos y horas planificados en su cuadrante.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Absentismo
audience:
  - role: RRHH
    access: applicable
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: absentismo
    label: Absentismo
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
    - https://manual.aturnos.com/knowledgebase/absentismo/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/absentismo/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre absentismo?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/absentismo/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/absentismo/
  contentHash: 32b69b4028f8a8874e65a20f78864d57de2bb1076cd8214531b0d3442c44a3bc
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Un absentismo es una ausencia en el puesto de trabajo durante los turnos y horas planificados en su cuadrante.

Los absentismos pueden afectar al total de los turnos planificados, lo que llamaríamos en aTurnos ‘Permiso/absentismo día”, o bien pueden afectar a un periodo de tiempo del turno planificado, lo que se denomina ‘Permiso/absentismo Temporal’

A su vez, existen 4 tipos de absentismo que pueden computar de forma distinta: justificado (tiempo productivo), Absentismo justificado (no es considerado productivo, afecta a la nocturnidad y festivos), no justificado y Excedencia/suspensión (Ver tipos de absentismo en aTurnos ).

### ¿Qué es un permiso/absentismo de día en aTurnos?

Permiso/absentismo día sería una ausencia del trabajador durante todas las horas del turno planificado. En cuanto a un absentismo temporal, la ausencia solo ocupa unas horas del turno.

No se consideran como periodos de absentismos. Si se solicita y se acepta un permiso de día en un día que no tiene planificación, no se registra el tipo de absentismo en el cuadrante ni en ningún listado de absentismos porque no está asociado a ningún turno u hora. Solo se inserta el absentismo si existe planificación.

Diferenciándose de los “periodos de absentismo” si se planifica a posteriori, en el día que se ha aceptado la petición de absentismo de día, no se inserta el absentismo al nuevo turno planificado. Las celdas del cuadrante de los permisos de días aceptados no se sombrean en azul en el cuadrante. No aparece en el listado de periodos de absentismo del perfil del trabajador.

Por ello, es necesario solicitar una nueva petición de permisos días cuando estén planificados los días de la petición, en el cuadrante con turnos/horas.

https://manual.aturnos.com/Manual/f-anade-absentismos/#Absentismos_totales

https://manual.aturnos.com/Manual/2-5-1-nueva-peticion-y-filtro/

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
