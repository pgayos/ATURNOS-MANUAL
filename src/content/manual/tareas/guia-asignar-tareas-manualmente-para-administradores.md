---
schemaVersion: "1.0"
contentId: tareas-guia-asignar-tareas-manualmente-para-administradores
title: Asignar tareas manualmente para administradores
description: Tal como su nombre indica, la asignación manual permite asignar las tareas creadas de manera manual, es decir, que requiere la intervención del mando superior.
contentType: concept
module: Tareas
submodule: Gestión de tareas
intent: Asignar tareas manualmente
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
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/modulo-de-tareas-aturnos-optimiza-tu-planificacion/asignacion-manual/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre asignar tareas manualmente para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
labels:
  - PENDIENTE
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/modulo-de-tareas-aturnos-optimiza-tu-planificacion/asignacion-manual/
  redirectFrom:
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/modulo-de-tareas-aturnos-optimiza-tu-planificacion/asignacion-manual/
  contentHash: 2c093ecdb516ba4cfab40467ba8933630bbc15885310a0e8ca85238db7d3806a
  migratedAt: 2026-08-18
---
## Resumen

Tal como su nombre indica, la asignación manual permite asignar las tareas creadas de manera manual, es decir, que requiere la intervención del mando superior.

Las tareas se pueden asignar manualmente desde dos pantallas diferentes. Desde Tareas → Tareas, y desde Tareas → Asignación manual.

### Opción 1. Desde Tareas → Tareas.

Esta opción resulta especialmente útil, ya que la pantalla ofrece un listado detallado de tareas cuya visualización puede adaptarse fácilmente a las preferencias del mando. Para ello, se dispone de filtros por rango de fechas y de un filtro específico para trabajadores y tareas, accesible mediante el icono de embudo situado junto al selector de fechas.

Al crear una tarea, esta aparecerá en el listado con una fila de acciones que contiene tres botones:

- Icono del ojo: Permite visualizar los detalles de la tarea y también editarla.
- Icono de la papelera: Sirve para eliminar la tarea.
- Icono del dedo señalando a la derecha: Es el botón que se utiliza para asignar la tarea manualmente.

### ¿Cómo se asigna una tarea?

Al hacer clic en el botón de asignar (dedo señalando), se abrirá una ventana emergente desde la cual puedes completar la asignación. Dentro de esta ventana, encontrarás diferentes campos y opciones:

El primer campo es un desplegable que muestra todas las tareas pendientes de asignación. A su lado se encuentra un filtro adicional que te ayuda a refinar la búsqueda de trabajadores, según su experiencia, perfil, u otros criterios.

Por defecto, el sistema marca la opción «Asignar a trabajadores planificados», lo que significa que solo se tendrán en cuenta los trabajadores que tengan una planificación activa para ese día. Sin embargo, puedes cambiar este comportamiento seleccionando alguna de las siguientes opciones:

- Solo trabajadores que cumplen las restricciones. Se asigna la tarea a trabajadores que cumplen con las restricciones configuradas en el equipo del grupo 12 (restricciones de tareas). Si el trabajador no tiene planificación, pero cumple las restricciones, se le añadirá planificación automáticamente.
- Asignar a trabajadores planificados (opción por defecto). El sistema selecciona trabajadores que tengan planificación y tengan calificada la especialidad requerida. No se tendrán en cuenta trabajadores sin planificación.
- Permitir asignar a trabajadores sin experiencia. Esta opción permite asignar tareas a trabajadores que no tienen calificación en la especialidad requerida (valor 0).
- Trabajadores planificados que cumplen las restricciones. Combina las dos primeras opciones: se buscarán trabajadores que estén planificados y que además cumplan las restricciones de tareas.
- Trabajadores con tareas asignadas en el mismo horario. Se asigna la tarea a trabajadores que ya tienen otra tarea en el mismo horario. Es útil para tareas complementarias o en cadena.
- Trabajadores con planificación parcial sobre el horario de la tarea. Esta opción selecciona trabajadores cuyo horario de trabajo cubre parcialmente la duración de la tarea. Por ejemplo, si un trabajador está planificado de 14:00 a 18:00 y la tarea es de 16:00 a 22:00, el sistema lo incluirá en el listado porque podría asumir una parte de la tarea. Esta opción es útil en casos de jornada reducida, absentismos parciales o cuando se desea asegurar que todos los trabajadores tengan alguna asignación, aunque no completen la tarea al 100%.

### Opción 2. Desde Tareas → Asignación Manual

Esta opción ofrece una forma más sencilla y directa de asignar tareas a los trabajadores. Además, cuenta con menos parámetros de configuración que la Opción 1, lo que la convierte en una alternativa más rápida y fácil de usar en situaciones puntuales.

Para comenzar, accede al menú Tareas → Asignación Manual. Una vez dentro, es muy importante que selecciones al trabajador correspondiente en el desplegable ubicado en la parte superior de la pantalla. Esta selección es clave, ya que el sistema mostrará únicamente las tareas asociadas a ese trabajador, y cualquier acción que realices se aplicará sobre la persona que esté seleccionada en ese momento.

Una vez elegido el trabajador, haz clic en Acciones → Asignar tareas. El sistema mostrará automáticamente un listado de tareas pendientes de asignar, filtradas según las fechas seleccionadas.

Puedes ajustar qué tareas deseas visualizar configurando el rango de fechas y aplicando distintos filtros. También puedes activar o desactivar las opciones de «Restricciones» y «Planificados», según lo que desees ver.

Con el trabajador seleccionado y los filtros configurados, simplemente localiza la tarea correspondiente y haz clic en el botón “+” para asignársela. El sistema vinculará la tarea al trabajador de forma inmediata.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
