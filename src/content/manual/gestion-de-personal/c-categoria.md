---
schemaVersion: "1.0"
contentId: gestion-de-personal-c-categoria
title: Categoría
description: La categoría de un trabajador lo clasifica según el puesto de trabajo y las funciones que tiene que desempeñar.
contentType: concept
module: Gestión de personal
submodule: Contratos
subtopic: ""
intent: Categoría
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: categoria
    label: Categoria
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
    - https://manual.aturnos.com/knowledgebase/c-categoria/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/c-categoria/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre categoría?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/c-categoria/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/c-categoria/
  contentHash: 7205e528b58aec9b7b36e7c37955369def92b7cf27110719df1f6e9860a43826
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
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

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![c. Categoría](/media/manual/c-categoria-54bf27c004.webp)

![Nueva categoría](/media/manual/nueva-categoria-27627e72e3.webp)

![Nueva categoría](/media/manual/nueva-categoria-8b26b078da.webp)

![Editar categoría](/media/manual/editar-categoria-35ac8a4b95.webp)

![Editar categoría](/media/manual/editar-categoria-c815c4dee5.webp)

![Borrar categoría](/media/manual/borrar-categoria-437df5cd60.webp)
