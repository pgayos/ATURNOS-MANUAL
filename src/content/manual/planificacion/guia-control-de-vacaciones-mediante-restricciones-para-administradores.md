---
schemaVersion: "1.0"
contentId: "planificacion-guia-control-de-vacaciones-mediante-restricciones-para-administradores"
title: "Control de vacaciones mediante restricciones para administradores"
description: "Información sobre control de vacaciones mediante restricciones para administradores, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: troubleshooting
module: "Planificación"
submodule: "Vacaciones"
intent: "Control de vacaciones mediante restricciones"
audience:
  - role: "Administrador"
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: 2026-01-14
  reviewDueAt: null
  sourceUrls:
    - "https://guias.aturnos.com/guias/guias-administrador/gestion-de-vacaciones/restricciones-vac/"
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo resuelvo el problema: Control de vacaciones mediante restricciones para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
---
## Resumen

En aTurnos, las restricciones de vacaciones están diseñadas para ayudarte a gestionar de manera eficiente las solicitudes de tu equipo, asegurando el cumplimiento de reglas internas y evitando errores en la planificación. Estas restricciones son útiles para empresas que buscan optimizar la gestión del tiempo libre de sus empleados, garantizando un equilibrio entre las necesidades del negocio y los derechos de los trabajadores.

Introducción:

A continuación, te explicamos cómo funcionan las principales restricciones de vacaciones en aTurnos, y cómo puedes configurarlas para adaptarlas a las necesidades de tu equipo.

### Restricciones

1.18.1 Máximo de horas de vacaciones por horas en un día.

- Descripción: Esta restricción limita la cantidad de horas de vacaciones que un empleado puede solicitar en un día. Es útil si trabajas con un sistema de «vacaciones por horas».
- Cómo te ayuda: Evita excesos en las solicitudes de tiempo libre y mantiene el equilibrio de horas disponibles para otros días.

1.19. No permitir planificar turno u horas donde existan turnos de cero horas o vacaciones

- Descripción: Esta restricción bloquea la planificación de turnos en días donde ya se han registrado vacaciones o turnos de cero horas.
- Cómo te ayuda: Evita errores de planificación que podrían generar confusión o problemas operativos.

4.1. No permitir superar el saldo vacacional anual del trabajador.

- Descripción: Esta restricción asegura que ningún empleado pueda solicitar más días de vacaciones de los asignados en su perfil o en la configuración del equipo.
- Cómo te ayuda: Mantiene el control sobre los días disponibles, evitando malentendidos o excesos.

4.12. No permitir absentismos en días planificados como vacaciones

- Descripción: Esta restricción bloquea la posibilidad de registrar permisos o absentismos en días donde ya se han planificado vacaciones.
- Cómo te ayuda: Evita duplicidades en la planificación y asegura que los días de vacaciones no se mezclen con otros conceptos.

7.10. No permitir realizar peticiones de vacaciones si el día de inicio no coincide con el inicio de la semana

- Descripción: Permite establecer que las vacaciones siempre comiencen en el primer día de la semana laboral definido en tu configuración.
- Cómo te ayuda: Facilita la planificación estructurada y alinea las solicitudes con la operativa del negocio.
