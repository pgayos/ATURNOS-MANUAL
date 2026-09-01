---
schemaVersion: "1.0"
contentId: planificacion-revisar-cuadrante-y-anadir-modificar-eliminar-turnos
title: Revisar cuadrante y añadir/modificar/eliminar turnos
description: El administrador del equipo podrá visualizar y revisar los cuadrantes de todos los trabajadores de su equipo desde el menú Cuadrante (solo turnos, con horario, con localización o bien con to.
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Revisar cuadrante y añadir/modificar/eliminar turnos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: anadir
    label: Anadir
  - id: cuadrante
    label: Cuadrante
  - id: eliminar
    label: Eliminar
  - id: modificar
    label: Modificar
  - id: revisar
    label: Revisar
  - id: turnos
    label: Turnos
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
    - https://manual.aturnos.com/knowledgebase/revisar-cuadrante/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/revisar-cuadrante/
ai:
  answerableQuestions:
    - ¿Cómo puedo revisar cuadrante y añadir/modificar/eliminar turnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/revisar-cuadrante/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/revisar-cuadrante/
  contentHash: 00adfa0d60d65f5dc47962e70f1c22565ac14972db7c9df6a848747f655027fa
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a revisar cuadrante y añadir/modificar/eliminar turnos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
El administrador del equipo podrá visualizar y revisar los cuadrantes de todos los trabajadores de su equipo desde el menú Cuadrante (solo turnos, con horario, con localización o bien con todos los detalles). Aparecerán en amarillo las vacaciones, los absentismos en negro y las peticiones en azul:

Además, haciendo clic en un día seleccionado en concreto podrás realizar las siguientes acciones:

1. Realizar petición: en este caso, al igual que el trabajador, los administradores podrán realizar peticiones. En este caso, serán ellos mismos los que las acepten o denieguen.
2. Añadir turno: podrán añadir turnos tanto a ellos mismos como a los trabajadores, seleccionando previamente el trabajador en la parte arriba del cuadrante.
3. Modificar turno: una vez añadido el turno y planificado en el cuadrante, podrán modificarlo de forma rápida y sencilla.
4. Eliminar turno: al igual que en caso anterior, se podrá eliminar el turno con tan sólo un clic.
5. Añadir absentismo: en este caso, si ya hay un turno planificado previamente, se podrá añadir cualquier tipo de absentismo creado, al igual que el trabajador.
6. Anadir comentario: esta función al igual que el trabajador podrá realizarla el administrador (ver manual del trabajador para más información).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Revisar cuadrante y añadir/modificar/eliminar turnos](/media/manual/revisar-cuadrante-y-anadir-modificar-eliminar-turnos-2f2815367d.png)

![Revisar cuadrante y añadir/modificar/eliminar turnos](/media/manual/revisar-cuadrante-y-anadir-modificar-eliminar-turnos-2d0b0323e4.png)
