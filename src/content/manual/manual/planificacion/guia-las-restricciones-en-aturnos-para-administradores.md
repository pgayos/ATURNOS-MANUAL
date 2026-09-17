---
schemaVersion: "1.0"
contentId: planificacion-guia-las-restricciones-en-aturnos-para-administradores
title: Las restricciones en aTurnos para administradores
description: Las Restricciones en aTurnos permiten verificar automáticamente el cumplimiento de leyes laborales, convenios colectivos, contratos y condiciones específicas de los empleados.
contentType: troubleshooting
module: Planificación
submodule: Restricciones
subtopic: ""
intent: Las restricciones en aTurnos
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
  reviewedAt: 2025-09-02
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/restricciones-mas-comunes-y-su-uso/las-restricciones-en-aturnos/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo resuelvo el problema: Las restricciones en aTurnos para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
labels:
  - PENDIENTE
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/restricciones-mas-comunes-y-su-uso/las-restricciones-en-aturnos/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/restricciones-mas-comunes-y-su-uso/las-restricciones-en-aturnos/
  contentHash: a480dc83a36d91ba6df9ea297bea2f4f74c0f2b8787c97d561f3e12719c3e277
  migratedAt: 2026-08-18
order: 1
---
## Resumen

Las Restricciones en aTurnos permiten verificar automáticamente el cumplimiento de leyes laborales, convenios colectivos, contratos y condiciones específicas de los empleados. Estas reglas se integran directamente en la planificación, ayudando a prevenir errores antes de que se publiquen los turnos.

### 1. Introducción

Existen más de 100 restricciones disponibles, agrupadas en 12 categorías según el ámbito al que afectan (tipos de turnos, descansos, vacaciones, horas trabajadas, entre otros). Cada restricción puede configurarse de forma personalizada para adaptarse a las necesidades específicas del equipo o empresa.

Esta herramienta está diseñada para facilitar el trabajo de quienes gestionan la planificación, especialmente en entornos donde el cumplimiento normativo es crítico.

### 2. Casos de uso

Algunos ejemplos habituales de uso de las restricciones en distintos sectores:

- En un hospital, se limita la duración máxima de un turno a 12 horas por normativa interna.
- En una empresa de retail, se establece una regla para que cada empleado tenga al menos dos días de descanso consecutivos por semana.
- En una planta industrial, se prohíben turnos solapados en ciertos puestos para garantizar la seguridad operativa.

### 3. Configuración paso a paso

Para añadir una restricción, se deben seguir los siguientes pasos:

1. Acceder a Planificador → Restricciones → Añadir.
2. Seleccionar la restricción que se desee configurar.
3. Completar los campos:

Cada restricción se configura de una manera particular, pero todas comparten unos campos básicos:

- Modo: Puedes configurar si la restricción aplica como deseable (su cumplimiento puede ser opcional en algunos casos) u obligatoria ( su cumplimiento debe respetarse). A nivel práctico, esto se traslada a que si tienes una restricción configurada como «Deseable» si la incumples podrás ignorarla haciendo clic en el botón «Aceptar», sin embargo, marcándola como obligatoria este botón no se habilitará.
- Descripción: Puedes darle un nombre particular con el que tu identifiques mejor esa restricción y cuando se incumpla aparecerá ese nombre.
- Entrada en vigor/Fin: En este campo indicas cuándo entra en vigor esta restricción y hasta cuando será efectiva.
- Usuarios disponibles/Donde aplicar. En este campo indicas a qué personas o a qué grupos de personas les afecta esta restricción. Por ejemplo, puede afectar a trabajadores que compartan una categoría, una localización, alguna especialidad, a todos o a algún trabajador en particular.
- Restricción habilitada: Marcando la opción «SÍ», la restricción está activada para usarse, si se marca «NO», puede guardarse la configuración para habilitarla más tarde.

Para información más en detalle sobre el comportamiento de cada restricción, accede a este enlace.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
