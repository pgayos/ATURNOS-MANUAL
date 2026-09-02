---
schemaVersion: "1.0"
contentId: tareas-guia-asignar-tareas-de-manera-automatica-para-administradores
title: Asignar tareas de manera automática para administradores
description: La funcionalidad de Asignación Automática de Tareas permite distribuir tareas entre los trabajadores de forma organizada, según criterios previamente configurados.
contentType: concept
module: Tareas
submodule: Gestión de tareas
subtopic: ""
intent: Asignar tareas de manera automática
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
  reviewedAt: 2025-06-02
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/modulo-de-tareas-aturnos-optimiza-tu-planificacion/asignar-tareas-de-manera-automatica/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre asignar tareas de manera automática para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/modulo-de-tareas-aturnos-optimiza-tu-planificacion/asignar-tareas-de-manera-automatica/
  redirectFrom:
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/modulo-de-tareas-aturnos-optimiza-tu-planificacion/asignar-tareas-de-manera-automatica/
  contentHash: ae2259c37a6a1893097ccba0ccc968ac3da39be1637024eb6abe6fe7badebe9f
  migratedAt: 2026-08-18
order: 1
---
## Resumen

La funcionalidad de Asignación Automática de Tareas permite distribuir tareas entre los trabajadores de forma organizada, según criterios previamente configurados. Este sistema busca optimizar la carga de trabajo teniendo en cuenta especialidades, localización, franjas horarias, y prioridades de las tareas.

## Qué debes saber
A continuación, se describe paso a paso cómo configurar esta funcionalidad.

El primer paso consiste en definir el periodo de tiempo en el que se encuentran las tareas que se desean asignar. Este intervalo puede ser un día, semana u otro rango configurable.

Una vez establecido, el sistema recopilará todas las tareas programadas dentro de ese periodo para su posterior asignación.

Tras seleccionar las tareas, se procede a la asignación de los trabajadores disponibles. Este paso puede considerar diversas variables, como la disponibilidad del trabajador, su especialidad, y la ubicación de las tareas.

Una vez definidos los elementos básicos, es posible aplicar configuraciones adicionales para refinar la asignación automática. Estas se dividen en varias secciones:

3.1 Limitar por especialidad y localización en multitareas.

Estas limitaciones se aplican cuando un trabajador tiene asignadas varias tareas en el mismo día:

- Limitar por especialidad a la primera tarea: Si esta opción está habilitada, el trabajador realizará únicamente tareas de la misma especialidad durante todo el día.

Ejemplo: si la primera tarea asignada es de tipo «hornero», el trabajador solo realizará tareas de hornero ese día.

- Limitar por localización de entrada a la primera tarea: El sistema tomará la localización de la primera tarea asignada y restringirá las siguientes tareas del día a esa misma localización.

Permite especificar en qué turnos o franjas horarias deben aplicarse las asignaciones automáticas. De este modo, se puede restringir la asignación a un turno específico o a una franja horaria determinada.

El entrelazado de prioridades es un procedimiento mediante el cual el sistema organiza todas las tareas disponibles basándose en dos criterios fundamentales: su nivel de prioridad y su tipo (tareas fijas o flexibles).

El criterio de prioridad se realiza siguiendo un orden descendente, lo que significa que las tareas con mayor relevancia o urgencia (prioridad 5) se asignarán antes que las de menor importancia (prioridad 1).

Una vez distribuidas todas las tareas fijas de un determinado nivel de prioridad, se asignan las tareas flexibles del mismo grupo. Este método asegura que las tareas más críticas y con menos margen de maniobra queden planificadas con antelación, lo cual contribuye a una organización más eficiente del trabajo.

6.1 Ajustar tareas fijas.

En el proceso de asignar tareas intenta asignar las tareas fijas al trabajador más cualificado disponible, según la puntuación que tenga en la especialidad correspondiente.

6.2 Reajustar planificando con turnos las tareas fijas.

Si se activa esta opción, el sistema asignará tareas fijas también a trabajadores con la especialidad que no tengan planificación previa, distribuyéndolas y planificándoles turnos.

Si no se marca, no se asignarán tareas fijas a trabajadores sin planificación previa.

6.3 Ajustar tareas flexibles.

Este ajuste determina cómo se gestionan las tareas configuradas como flexibles. Marcando esta opción se priorizan tareas flexibles sobre las fijas.

6.4 Reajustar planificando con turnos las tareas flexibles.

Funciona de forma análoga al reajuste de tareas fijas, pero aplicado a las tareas flexibles. Permite que el sistema planifique tareas flexibles, incluso para trabajadores sin tareas asignadas previamente.
