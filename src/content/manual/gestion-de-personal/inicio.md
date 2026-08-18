---
schemaVersion: "1.0"
contentId: gestion-de-personal-inicio
title: Inicio en aTurnos
description: Una vez iniciada sesión en la app, encontrarás todos los equipos a los que pertenece tu usuario logueado:.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Inicio en aTurnos
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: inicio
    label: Inicio
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
    - https://manual.aturnos.com/knowledgebase/inicio/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/inicio/
ai:
  answerableQuestions:
    - ¿Cómo puedo inicio en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/inicio/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/inicio/
  contentHash: 3efeb444df7cbccb5e5f193486845111092f8d09c4ffbbf91c2d984e3413d710
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
---
## Resumen

Una vez iniciada sesión en la app, encontrarás todos los equipos a los que pertenece tu usuario logueado:.

### 1. Inicio sesión y equipo

En la parte de abajo, aparecerán los equipos en los que en ese momento no te encuentras dado de alta.

Los criterios al iniciar sesión con un usuario son los siguientes:

- Si estoy en varios equipos y solo uno como trabajador, entro en el equipo de trabajador.
- Si estoy en varios equipos y solo en uno como visible, entro en el equipo en el que estoy visible.
- Si estoy en varios equipos y en ninguno estoy como trabajador ni estoy visible, tengo que elegir equipo.

### 2. Widgets

Cuando se selecciona el equipo deseado, en la pantalla de inicio encontrarás los siguientes widgets:

- Próximo turno a trabajar: día, turno y localización del siguiente turno a realizar correspondiente al trabajador.
- Chat: chat del equipo donde podrás comunicarte con el resto de trabajadores y usuarios del equipo, ver los mensajes nuevos, así como transmitir información importante y/o novedades.
- Fichar entrada y/o salida y tiempo trabajado: desde el menú principal podrás fichar la entrada y/o salida y además podrás consultar de un solo vistazo el tiempo trabajado.
- Peticiones pendientes y nueva petición: aparecerá el listado de las peticiones pendientes más recientes y además la opción de poder añadir una nueva petición desde el inicio.
- Cambios de trabajador: los cambios pendientes por realizar a otro compañero.
- Horas computadas de la semana, mes y año: se pueden ver las horas computadas correspondientes al trabajador.
- Saldo de horas: se mostrará el saldo y el balance de horas de forma rápida.
- Validar Timecard: puedes validar el Timecard del Control de Presencia desde la pantalla de inicio.
- Trabajadores disponibles y planificados: se mostrarán los trabajadores disponibles y planificados en el equipo.
- Datos de nóminas: podrás ver los datos de tu nómina en un simple vistazo.

Estos widget aparecerán en función de la configuración que se ha realizado previamente desde un administrador, de tal forma que sólo se podrán visualizar aquellos que estén seleccionados como visibles para el trabajador.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
