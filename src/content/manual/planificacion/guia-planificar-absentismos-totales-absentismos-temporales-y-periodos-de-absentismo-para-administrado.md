---
schemaVersion: "1.0"
contentId: planificacion-guia-planificar-absentismos-totales-absentismos-temporales-y-periodos-de-absentismo-para-administrado
title: Planificar absentismos totales, absentismos temporales y periodos de absentismo para administradores
description: En el día a día de cualquier equipo, gestionar correctamente las ausencias del personal es fundamental para garantizar el cumplimiento normativo, mantener la productividad y evitar errores e.
contentType: troubleshooting
module: Planificación
submodule: Permisos y absentismos
intent: Planificar absentismos totales, absentismos temporales y periodos de absentismo
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms:
  - web
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: 2025-10-31
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-permisos-y-absentismos/planificar-absentismos-totales-absentismos-temporales-y-periodos-de-absentismo/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo resuelvo el problema: Planificar absentismos totales, absentismos temporales y periodos de absentismo para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-permisos-y-absentismos/planificar-absentismos-totales-absentismos-temporales-y-periodos-de-absentismo/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-permisos-y-absentismos/planificar-absentismos-totales-absentismos-temporales-y-periodos-de-absentismo/
  contentHash: 8287b4de2a630a72a7792825fdfe91ee92f6b2587401e6c79a06ae58c6ee93c5
  migratedAt: 2026-08-18
---
## Resumen

En el día a día de cualquier equipo, gestionar correctamente las ausencias del personal es fundamental para garantizar el cumplimiento normativo, mantener la productividad y evitar errores en la planificación. Con aTurnos, puedes insertar y gestionar absentismos de forma directa y sencilla desde el cuadrante, sin depender de que los trabajadores realicen una solicitud previa.

## Introducción

Como administrador, planificador o usuario total, tienes acceso completo para registrar tres tipos principales de absentismos:

- Absentismos totales, cuando un trabajador no podrá asistir a un turno específico.
- Absentismos temporales, cuando la ausencia solo cubre parte del turno.
- Periodos de absentismo, útiles para bajas prolongadas o ausencias que abarcan varios días.

Estas funcionalidades están diseñadas para facilitar la actualización del cuadrante en tiempo real, mejorar la trazabilidad legal de las ausencias y asegurar una planificación sin errores.

## Insertar Absentismos Totales

Supongamos que un trabajador te avisa que no podrá asistir a su turno de mañana por motivos personales o una cita médica. Como planificador, puedes registrar esa ausencia directamente en el cuadrante sin necesidad de una solicitud previa por parte del empleado.

1. Ve al día correspondiente en el cuadrante y haz clic directamente sobre el turno que el trabajador no podrá realizar.
2. Al mantener el cursor sobre la opción “Absentismos”, se desplegará una lista con todos los tipos de absentismo total disponibles.
3. Selecciona el que se ajuste al motivo de la ausencia (por ejemplo: Permiso retribuido, Huelga general, Asuntos propios).
4. Automáticamente, verás que el turno queda marcado con un marco negro, y aparece una abreviatura indicando el tipo de absentismo aplicado.

Importante: Si el trabajador solo tiene un turno planificado ese día, el absentismo total cubrirá todo su día laboral. Sin embargo, si tiene más de un turno y solo marcas uno, los demás se mantienen activos, indicando que sí podría trabajar en ellos.

Este método es ideal para ausencias puntuales y específicas, cuando ya hay una planificación definida.

## Insertar absentismos temporales en el cuadrante

Hay situaciones en las que el trabajador solo necesita ausentarse durante unas horas, pero sí asistirá al resto del turno. En estos casos, se utiliza el absentismo temporal.

1. Haz clic sobre el turno donde se va a producir la ausencia temporal.
2. En el menú “Absentismos”, selecciona la opción “Absentismo temporal”.
3. Se abrirá una ventana donde podrás introducir los siguientes datos: Fecha y hora de inicio: momento en que comienza la ausencia. Fecha y hora de fin: momento en que finaliza la ausencia. Tipo de absentismo: especifica el motivo.
4. Haz clic en Guardar, y verás que la franja horaria afectada aparece destacada visualmente dentro del turno.

Este tipo de absentismo es perfecto para citas médicas breves, asuntos personales o cualquier gestión puntual dentro de la jornada.

## Insertar periodos de absentismo en el cuadrante

Cuando un trabajador no va a asistir durante varios días –por ejemplo, en una baja médica o un permiso largo–, lo más práctico es registrar un periodo de absentismo. Este método es más completo y no requiere que haya turnos planificados con antelación.

1. Dirígete al cuadrante y haz clic sobre cualquier celda del periodo a cubrir.
2. Selecciona la opción “Nuevo periodo de absentismo”.
3. En la ventana emergente, completa la siguiente información: Fecha de inicio y de fin: indica el rango completo de días ausentes. Tipo de absentismo: selecciona el motivo correspondiente. Recaída del absentismo: si esta ausencia está relacionada con una anterior (por ejemplo, una continuación de baja), puedes vincularla para mantener la trazabilidad.
4. Guarda los cambios y verás que: Si no hay planificación previa, los días aparecerán sombreados en azul, indicando que están bloqueados. Si ya hay turnos planificados, estos quedarán automáticamente marcados con absentismo total, igual que en los casos anteriores.

Es muy importante conocer cuándo utilizar cada tipo de absentismo para asegurarte de que el cuadrante refleje fielmente la realidad del equipo:

- Característica | Absentismo Total | Periodo de Absentismo
- ¿Requiere planificación previa? | Sí, solo se puede aplicar si hay turno planificado. | No. Se puede insertar sin planificación.
- ¿Afecta a turnos específicos o a días completos? | Afecta únicamente al turno seleccionado. | Afecta a todo el día o a varios días completos.
- ¿Qué sucede si luego se planifican turnos en esos días? | No aplica ningún cambio adicional. | El sistema marcará automáticamente esos turnos como ausentes.
- Ejemplos de uso | Cita médica, huelga en turno de mañana, permiso puntual. | Baja médica, vacaciones, permisos largos, recaídas.
