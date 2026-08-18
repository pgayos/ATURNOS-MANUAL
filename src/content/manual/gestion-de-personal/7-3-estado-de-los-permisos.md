---
schemaVersion: "1.0"
contentId: gestion-de-personal-7-3-estado-de-los-permisos
title: Estado de los permisos
description: Los permisos determinan qué puede ver y/o hacer un usuario dentro de aTurnos atendiendo al perfil (trabajador, administrador planificador, administrador total o superusuario) que ostenta.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Estado de los permisos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: estado
    label: Estado
  - id: permisos
    label: Permisos
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
    - https://manual.aturnos.com/knowledgebase/11-3-estado-de-los-permisos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/11-3-estado-de-los-permisos/
ai:
  answerableQuestions:
    - ¿Cómo puedo estado de los permisos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/11-3-estado-de-los-permisos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/11-3-estado-de-los-permisos/
  contentHash: 7c3ae27227d4e331c1a60eaef7c923f96dfc54006b6354429a2219e1f36d39a3
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Los permisos determinan qué puede ver y/o hacer un usuario dentro de aTurnos atendiendo al perfil (trabajador, administrador planificador, administrador total o superusuario) que ostenta.

## Procedimiento
Para mostrar los equipos de los cuales se quieren ver los permisos, se tienen que seleccionar en la barra superior y se debe hacer clic en el botón “Cargar”.

Al cargar los permisos de los equipos se mostrará un listado con la siguiente información:

- Nombre del equipo: equipo de aTurnos.
- Interfaz: si es un permiso que pertenece al backend o a la app.
- Controlador: función que controla la acción del permiso.
- Permiso: acción del permiso.
- Por defecto: como está configurada por defecto en aTurnos.
- En el equipo: como está configurada en el equipo cargado.

Este listado se puede descargar desde el botón de “Acciones”.

Recordamos que los permisos únicamente son modificables por el equipo de soporte de aTurnos.
