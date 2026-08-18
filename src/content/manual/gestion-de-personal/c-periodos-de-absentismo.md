---
schemaVersion: "1.0"
contentId: "gestion-de-personal-c-periodos-de-absentismo"
title: "Periodos de absentismo"
description: "Información sobre periodos de absentismo, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Periodos de absentismo"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "absentismo"
    label: "Absentismo"
  - id: "periodos"
    label: "Periodos"
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
    - "https://manual.aturnos.com/knowledgebase/c-periodos-de-absentismo/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/c-periodos-de-absentismo/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre periodos de absentismo?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "3cc3d10d47d0a41892429261200091bee046f028764dafb40ab40b04c943c8ac"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre periodos de absentismo, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Este registro ayuda al Administrador a visualizar todos los periodos de baja de sus trabajadores, ej. Baja médica por incapacidad temporal. Es muy útil ya que puede consultar fechas de inicio y fin del absentismo para replanificar tareas o asignar un nuevo trabajador para cubrir la necesidad. (Ver más en: Crear periodo de absentismo desde el cuadrante ).

El listado muestra nombre del trabajador, fecha de inicio y fin del período, tipo de absentismo (aparece la abreviatura) y si el absentismo ha tenido recaída o no, es decir, si el trabajador se vuelve a ausentar por una enfermedad que previamente lo había dado de baja en otro período.

Cabe resaltar que este registro en particular no permite modificar datos del Periodo de absentismo de los trabajadores. Si el Administrador del equipo desea modificarlo debe entrar al perfil del trabajador y hacerlo desde la pestaña de Periodos de absentismos. (Ver más en: Periodos de absentismo en el perfil del trabajador ).

En el icono de “Ocultar” puedes quitar y agregar nuevamente alguna de las columnas que se muestran en el informe o tabla, así como, exportar el listado a un archivo CSV, Excel, PDF, entre otros, dese el icono de “Acciones”.
