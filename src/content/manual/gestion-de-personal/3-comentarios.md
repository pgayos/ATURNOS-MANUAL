---
schemaVersion: "1.0"
contentId: gestion-de-personal-3-comentarios
title: Comentarios
description: Registrar un comentario en el cuadrante de turnos es una acción frecuente y de gran valor tanto para el administrador del equipo como para el propio trabajador.
contentType: troubleshooting
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Comentarios
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: comentarios
    label: Comentarios
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
    - https://manual.aturnos.com/knowledgebase/c-comentarios/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/c-comentarios/
ai:
  answerableQuestions:
    - "¿Cómo resuelvo el problema: Comentarios?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/c-comentarios/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/c-comentarios/
  contentHash: d621f6ebe0aa7e28be073929b3cca63a1685791401c5ff939a012b3278a61557
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre comentarios, con instrucciones y contexto revisables por el equipo de aTurnos.

## Diagnóstico y solución
Registrar un comentario en el cuadrante de turnos es una acción frecuente y de gran valor tanto para el administrador del equipo como para el propio trabajador. Existe un comentario cuando dentro de un turno aparece el icono ‘i’ en un turno.

Desde el propio cuadrante el usuario puede añadir un comentario en cualquier día, el rol administrador puede registrar comentarios en la planificación de cualquier miembro de su equipo. De esta manera puede añadir información se su interés y quedar registrado con fines recordatorio. Esta acción se realiza desde la función ‘Comentario’ que aparece cuando se cliquea en un determinado día dentro del cuadrante.

Se despliega la pantalla con los campos a informar:

1.- Nuevo comentario. En este campo se informa el comentario que se dejará registrado en el día.

2.- Opciones de visualización del comentario. Los usuarios con algún Rol de administrador, tendrán las siguientes opciones al crear un comentario.

- Solo visible para mi: Solo el administrador que crea el comentario podrá verlo informado y consultarlo en el cuadrante. Ningún otro rol de administrador ni trabajador podrá ver el comentario.
- Visible para el trabajador: Solo el trabajador que tiene el comentario informado puede verlo, además del propio administrador que lo registra. No será visualizado por otros administradores ni trabajadores.
- Visible para todos: Todos los trabajadores y administradores del equipo pueden ver el comentario añadido al usuario.
- Visible solo para administradores: el comentario podrá ser visto y consultado por usuarios con rol de Administrador (desde Validador hasta superusuario). Ningún trabajador podrá ver el comentario creado.
- Visible para el trabajador y administradores: el comentario registrado por un Administrador podrá ser visto por el trabajador al que se le asigna y por el resto de administradores del equipo (desde Validador hasta superusuario). No lo podrán visualizar otros trabajadores.

3.- Definida la visibilidad, solo quedaría ‘Añadir’ el comentario para guardar el registro.

Al consultarlo el comentario registrado se detalla:

- Comentario: muestra el contenido del comentario que ha sido informado.
- Empleado afectado: indica el nombre del usuario al que se le ha añadido el comentario.
- Realizado por: indica el nombre del Administrador que ha registrado el comentario al empleado.
- Fecha: detalla el día en el que esta asignado el comentario.
- Acciones: muestra opciones para consultar, modificar/editar o eliminar el comentario. Los comentarios pueden ser borrados o editados solo por el creador del comentario (ya sea un administrador o el trabajador).

Una vez realizado el comentario, se registra en el cuadrante siendo visible para su consulta colocando el cursor sobre el icono ‘i’ que aparece en el día que quedó registrado.

Accediendo al modal de los comentarios, se pueden editar aquellos que han sido realizados por el propio administrador, pulsando sobre el botón de editar.

De esta forma se desplegará el modal de escribir el comentario para modificar lo escrito en el comentario. Y luego se debe hacer clic en el icono de Modificar para guardar los cambios.

Desde el modal de comentarios, también se puede borrar todo comentario que como administrador se ha realizado en el turno de un día. Para ello hay que hacer clic en el botón de borrar.
