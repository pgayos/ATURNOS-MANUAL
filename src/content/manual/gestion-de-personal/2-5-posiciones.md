---
schemaVersion: "1.0"
contentId: gestion-de-personal-2-5-posiciones
title: Posiciones
description: Las posiciones las utilizamos en las integraciones o importaciones. Se pueden definir con dos variables, lo que hace el trabajador y dónde lo hace.
contentType: concept
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Posiciones
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: posiciones
    label: Posiciones
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
    - https://manual.aturnos.com/knowledgebase/2-5-posiciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-5-posiciones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre posiciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-5-posiciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-5-posiciones/
  contentHash: 36697484ae27c5bb4f7009f0b83ae3d6bc92e0ae27d1a6af158763036f43ac1f
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Las posiciones las utilizamos en las integraciones o importaciones. Se pueden definir con dos variables, lo que hace el trabajador y dónde lo hace.

## Qué debes saber
Cuando el maestro de empleado es un software de RRHH, el alta en éste genera automáticamente el alta en aTurnos, por supuesto las prórrogas y/o bajas, pero también tenemos en cuenta otras modificaciones en la relación laboral del trabajador, como son las modificaciones de los porcentajes de jornada y/o los cambios en la categoría profesional.

Para identificar el equipo (puede relacionarse con una estructura organizativa determinada) donde se debe dar de alta al trabajador se asocia la posición a un equipo determinado.

- Indicar el aTurno donde se dará de alta al trabajador con la posición indicada.
- Identificador o código, debe coincidir con el del Maestro de Empleados.
- Descripción.
- Sustitución: Si en tu sector hay mucha rotación, probablemente necesites que estos trabajadores estén agrupados, si marcas si, todos los trabajadores con la misma posición aparecen agrupados en el cuadrante.

En el ejemplo, la posición v0204-1 está asociada al EQUIPO 1, con el rol de trabajador y asignado a la localización Oficina. Una posición puede estar asociada a varios equipos, cuando se es trabajador en un equipo y supervisor en otro.

Una posición puede estar asociada a varios equipos, cuando se es trabajador en un equipo y supervisor en otro.

Dar de baja una posición es un proceso necesario cuando ésta ya no pertenece a un equipo, e interviene en proceso de integración. De esta manera se pueden evitar duplicidad de trabajadores en más de un equipo, por ejemplo.

A continuación, te contamos como lo puede hacer un superusuario:

- 1º Acceder desde Menú/RRHH opción Estructura/Posiciones.
- 2º Buscar, con ayuda del filtro la posición. El sistema filtra por la posición que se ha informado y mostrará a modo de tabla los equipos que tiene asociada la posición.
- 3º Dar de baja la posición en el equipo, eliminando la posición con el botón borrar de acción.

- 1º Acceder desde Menú/RRHH opción Registros/Posiciones.
- 2º Buscar, con ayuda del filtro el equipo en la que se quiera borrar las posiciones. El sistema filtra por el equipo informado y mostrará todas las posiciones a modo de tabla tiene asociada el equipo.
- 3º Dar de baja las posiciones en el equipo, eliminando la posición con el botón borrar de acción.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![2.5 Posiciones](/media/manual/2-5-posiciones-7b2af55663.png)

![2.5 Posiciones](/media/manual/2-5-posiciones-b0de09906c.png)

![2.5 Posiciones](/media/manual/2-5-posiciones-11ce8644ba.png)

![2.5 Posiciones](/media/manual/2-5-posiciones-15ecd96dd6.webp)
