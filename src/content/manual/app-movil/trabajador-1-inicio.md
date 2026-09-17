---
schemaVersion: "1.0"
contentId: app-movil-trabajador-inicio
title: "Inicio de la app (widgets)"
order: 1
description: "Qué encuentras en la pantalla de inicio de la app de aTurnos: selección de equipo y los widgets disponibles para el trabajador."
contentType: procedure
module: App móvil
submodule: "Trabajador"
subtopic: "Inicio"
intent: "Inicio de la app (widgets)"
audience:
  - role: Trabajador
    access: applicable
entities: []
synonyms: []
relatedTerms: []
prerequisites: []
platforms:
  - app
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/knowledgebase/inicio/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Qué veo en la pantalla de inicio de la app?"
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
  contentHash: "f8f7c7484c745e2b56080e84b0ecf17abac4a2e8f085298246be78836a9cce05"
  migratedAt: 2026-09-18
labels: []
---

## Resumen

Al iniciar sesión en la app verás los equipos a los que pertenece tu usuario, y en la pantalla de inicio del equipo seleccionado aparecen los widgets configurados para tu perfil.

## Procedimiento

### Inicio de sesión y equipo

Una vez iniciada sesión en la app, encontrarás todos los equipos a los que pertenece tu usuario logueado. En la parte de abajo aparecerán los equipos en los que en ese momento no te encuentras dado de alta.

Los criterios al iniciar sesión con un usuario son los siguientes:

- Si estoy en varios equipos y solo en uno como trabajador, entro en el equipo de trabajador.
- Si estoy en varios equipos y solo en uno como visible, entro en el equipo en el que estoy visible.
- Si estoy en varios equipos y en ninguno estoy como trabajador ni estoy visible, tengo que elegir equipo.

### Widgets

Cuando se selecciona el equipo deseado, en la pantalla de inicio encontrarás los siguientes widgets:

- **Próximo turno a trabajar**: día, turno y localización del siguiente turno a realizar correspondiente al trabajador.
- **Chat**: chat del equipo donde podrás comunicarte con el resto de trabajadores y usuarios del equipo, ver los mensajes nuevos, así como transmitir información importante y/o novedades.
- **Fichar entrada y/o salida y tiempo trabajado**: desde el menú principal podrás fichar la entrada y/o salida y además podrás consultar de un solo vistazo el tiempo trabajado.
- **Peticiones pendientes y nueva petición**: aparecerá el listado de las peticiones pendientes más recientes y además la opción de poder añadir una nueva petición desde el inicio.
- **Cambios de trabajador**: los cambios pendientes por realizar a otro compañero.
- **Horas computadas de la semana, mes y año**: se pueden ver las horas computadas correspondientes al trabajador.
- **Saldo de horas**: se mostrará el saldo y el balance de horas de forma rápida.
- **Validar Timecard**: puedes validar el Timecard del Control de Presencia desde la pantalla de inicio.
- **Trabajadores disponibles y planificados**: se mostrarán los trabajadores disponibles y planificados en el equipo.
- **Datos de nóminas**: podrás ver los datos de tu nómina en un simple vistazo.

Estos widgets aparecerán en función de la configuración que se ha realizado previamente desde un administrador, de tal forma que solo se podrán visualizar aquellos que estén seleccionados como visibles para el trabajador.

![Pantalla de inicio de la app con los widgets del trabajador](/media/manual/pantalla-de-inicio-de-la-app-con-los-widgets-del-trabajador.png)

![Detalle de un widget de la pantalla de inicio](/media/manual/detalle-de-un-widget-de-la-pantalla-de-inicio.png)
