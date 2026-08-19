---
schemaVersion: "1.0"
contentId: planificacion-8-localizacion-turno
title: Localización turno
description: Las localizaciones se pueden emplear para organizar un equipo en diferentes departamentos o localizaciones físicas, por ejemplo, diferentes puntos de venta o trabajadores que realizan la misma tarea.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
intent: Localización turno
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: localizacion
    label: Localizacion
  - id: turno
    label: Turno
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
    - https://manual.aturnos.com/knowledgebase/g-localizacion-turno/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/g-localizacion-turno/
ai:
  answerableQuestions:
    - ¿Cómo puedo localización turno?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/g-localizacion-turno/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/g-localizacion-turno/
  contentHash: db552b8d3391f06051d037bc09100a496b2a98d4c6ce8d711938352f8e0faeb7
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Las localizaciones se pueden emplear para organizar un equipo en diferentes departamentos o localizaciones físicas, por ejemplo, diferentes puntos de venta o trabajadores que realizan la misma tarea.

## Procedimiento
Esta función, cambia ese día seleccionado a ese turno en concreto a una localización que le apliques, por ejemplo, un trabajador que tiene su localización por defecto en la recepción de un hotel, pero en un día/turno determinado se modifica y se cambia a oficinas administración (si lo que deseas es cambiar a ese trabajador de localización por defecto, en el cuadrante del trabajador, haz clic en la columna donde está su nombre/foto y selecciona “localización por defecto”).

La opción de Localización turno se utiliza para insertar una localización en un turno, para ello se debe hacer clic en el turno deseado y en “Localización turno”.

- Cambiar Localización entre fechas: permite cambiar la localización asignada a los turnos del trabajador durante un período de tiempo. Ejemplo, un trabajador realiza sus turnos en la localización “Planta 1” pero durante una semana del mes realizará su labor en planta 2, esta opción te permite modificar de una sola vez la localización a “Planta 2” de los turnos asignados en esa semana solamente.
- Quitar Localización: permite eliminar la localización de un turno, de forma que no se encuentre ligado a ninguna localización.
- Asignar localización a un turno: el modal te ofrece la opción de “Buscar” la localización que necesitas y/o debajo de esa opción aparecerán todas las localizaciones que tienes creadas y que podrás asignar al turno, haz clic en la localización que deseas añadir (si ya existe una previa, se borrará y se insertará la nueva automáticamente).

Para crear una localización hay que acceder al menú Administrar → Localizaciones → Añadir.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![8. Localización turno](/media/manual/8-localizacion-turno-6ade4a6e91.png)
