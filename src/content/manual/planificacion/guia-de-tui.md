---
schemaVersion: "1.0"
contentId: "planificacion-guia-de-tui"
title: "Guía de TUI"
description: "Información sobre guía de TUI, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Planificación"
submodule: "Turnos y patrones"
intent: "Guía de TUI"
audience:
  - role: "Planificador"
    access: applicable
entities:
  - id: "guia"
    label: "Guia"
  - id: "tui"
    label: "Tui"
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - "https://manual.aturnos.com/documentation/1-planificacion/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-aplicar-un-patron/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-crear-tipos-de-turno-2/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-crear-tipos-de-turno-2/1-2-1-turnos-fijos/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-crear-tipos-de-turno-2/1-2-2-turnos-rotativos-1/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-crear-tipos-de-turno-2/3-2-consejos-para-planificar-desde-el-cuadrante/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-crear-tipos-de-turno/"
    - "https://manual.aturnos.com/documentation/1-planificacion/planificacion-con-localizaciones-reps/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/6277-2/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-aceptar-o-denegar-peticiones/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-borrar-las-vacaciones-de-una-peticion-ya-aceptada/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-consultar-el-saldo-de-vacaciones-de-los-empleados/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-ver-todas-las-peticiones-y-vacaciones-de-todas-las-personas-que-gestiono/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-ver-y-asignar-vacaciones-del-2019/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-visualizar-las-vacaciones-aplicadas-de-mi-equipo/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/modificar-vacaciones-por-turno/"
    - "https://manual.aturnos.com/documentation/como-realizar-los-ajustes-de-horas-compensacion-de-tiempos/"
    - "https://manual.aturnos.com/documentation/como-ver-y-gestionar-mi-equipo/"
    - "https://manual.aturnos.com/documentation/consejos-para-completar-y-corregir-errores-en-el-cuadrante-de-los-trabajadores/"
    - "https://manual.aturnos.com/documentation/control-de-presencia-time-and-attendance/"
    - "https://manual.aturnos.com/documentation/control-de-presencia-time-and-attendance/4-3-gestionar-y-ajustar-los-marcajes-2/"
    - "https://manual.aturnos.com/documentation/control-de-presencia-time-and-attendance/como-consultar-los-saldos-de-horas-trabajadas-en-comparacion-con-las-planificadas-de-los-trabajadores/"
    - "https://manual.aturnos.com/documentation/control-de-presencia-time-and-attendance/como-crear-localizaciones-y-definirlas-reps/"
    - "https://manual.aturnos.com/documentation/control-de-presencia-time-and-attendance/como-visualizar-el-origen-de-los-marcajes-de-los-trabajadores/"
    - "https://manual.aturnos.com/documentation/introduccion/"
  redirectsFrom:
    - "https://manual.aturnos.com/documentation/1-planificacion/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-aplicar-un-patron/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-crear-tipos-de-turno-2/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-crear-tipos-de-turno-2/1-2-1-turnos-fijos/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-crear-tipos-de-turno-2/1-2-2-turnos-rotativos-1/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-crear-tipos-de-turno-2/3-2-consejos-para-planificar-desde-el-cuadrante/"
    - "https://manual.aturnos.com/documentation/1-planificacion/como-crear-tipos-de-turno/"
    - "https://manual.aturnos.com/documentation/1-planificacion/planificacion-con-localizaciones-reps/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/6277-2/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-aceptar-o-denegar-peticiones/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-borrar-las-vacaciones-de-una-peticion-ya-aceptada/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-consultar-el-saldo-de-vacaciones-de-los-empleados/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-ver-todas-las-peticiones-y-vacaciones-de-todas-las-personas-que-gestiono/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-ver-y-asignar-vacaciones-del-2019/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/como-visualizar-las-vacaciones-aplicadas-de-mi-equipo/"
    - "https://manual.aturnos.com/documentation/2-3-como-asignar-vacaciones-y-absentismos/modificar-vacaciones-por-turno/"
    - "https://manual.aturnos.com/documentation/como-realizar-los-ajustes-de-horas-compensacion-de-tiempos/"
    - "https://manual.aturnos.com/documentation/como-ver-y-gestionar-mi-equipo/"
    - "https://manual.aturnos.com/documentation/consejos-para-completar-y-corregir-errores-en-el-cuadrante-de-los-trabajadores/"
    - "https://manual.aturnos.com/documentation/control-de-presencia-time-and-attendance/"
    - "https://manual.aturnos.com/documentation/control-de-presencia-time-and-attendance/4-3-gestionar-y-ajustar-los-marcajes-2/"
    - "https://manual.aturnos.com/documentation/control-de-presencia-time-and-attendance/como-consultar-los-saldos-de-horas-trabajadas-en-comparacion-con-las-planificadas-de-los-trabajadores/"
    - "https://manual.aturnos.com/documentation/control-de-presencia-time-and-attendance/como-crear-localizaciones-y-definirlas-reps/"
    - "https://manual.aturnos.com/documentation/control-de-presencia-time-and-attendance/como-visualizar-el-origen-de-los-marcajes-de-los-trabajadores/"
    - "https://manual.aturnos.com/documentation/introduccion/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre guía de TUI?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 26
  contentHash: "e6a0dcd0043f1fa1f8dca178ec61caaaa3917cc37372100b3d896666f136057b"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre guía de TUI, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

En esta guía se explicarán las distintas partes de Planificación, Gestión y Control de Presencia que se llevarán a cabo en aTurnos. Cada una de las partes se explicará en un apartado distinto, aunque están relacionadas, es decir, por ejemplo, el funcionamiento o las acciones de Planificación afectan al Control de Presencia, y viceversa.

1. Planificación
2. Gestión (peticiones)
3. Control de Presencia
