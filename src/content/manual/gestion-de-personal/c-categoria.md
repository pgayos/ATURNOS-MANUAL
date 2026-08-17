---
schemaVersion: "1.0"
contentId: "gestion-de-personal-c-categoria"
title: "Categoría"
description: "Información sobre categoría, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "Contratos"
intent: "Categoría"
audience:
  - role: "Administrador"
    access: applicable
  - role: "RRHH"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "categoria"
    label: "Categoria"
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
    - "https://manual.aturnos.com/knowledgebase/c-categoria/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/c-categoria/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre categoría?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "9e14e7ea44f738167c0e0ddc3f3ae0966ba209fadbb05cd28221a479a3d744b4"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre categoría, con instrucciones y contexto revisables por el equipo de aTurnos.

La categoría de un trabajador lo clasifica según el puesto de trabajo y las funciones que tiene que desempeñar. Este concepto aparece en el contrato de trabajo y viene determinado en el Convenio Colectivo de aplicación de la empresa.

Por medio de la categoría se determina el porcentaje de cotización a la Seguridad Social por parte de la organización, así como el salario bruto que la empresa tiene que abonar al trabajador en su jornada ordinaria.

### Nueva categoría

En la barra superior, desde el botón ‘Acciones’, se pueden crear tantas categorías se necesiten.

Para añadir una nueva categoría se necesita informar el nombre de la misma.

### Editar categoría

Esta acción permite al administrador modificar la categoría.

El administrador puede editar:

- Nombre, que describe la categoría.
- Añadir horas automáticamente al exceder un tiempo mínimo de trabajo continuo

Esta opción permite insertar un tipo de hora extra/complementaria de forma automática cuando se realiza un mínimo de horas de forma continuada.

Se tiene que configurar:

- Tiempo mínimo continuado: Cantidad mínima de horas de trabajo para añadir horas de más automáticamente.
- Tiempo a añadir: Cantidad de horas que se van a insertar automáticamente al superar el tiempo mínimo continuado.
- Tipo de hora: Cómo se computarán las horas de más automáticas.
- Localización: Localización por defecto que llevarán las horas de más automáticas.

### Borrar categoría

Para eliminar una categoría creada, se puede hacer desde el botón de acción.
