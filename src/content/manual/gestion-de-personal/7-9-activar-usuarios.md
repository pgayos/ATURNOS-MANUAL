---
schemaVersion: "1.0"
contentId: gestion-de-personal-7-9-activar-usuarios
title: Activar usuarios
description: En este listado, aparecen los trabajadores no activados, es decir, trabajadores que a pesar de estar de alta en el equipo (aparecen en listado de trabajadores y se pueden planificar) no tien.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Activar usuarios
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: activar
    label: Activar
  - id: usuarios
    label: Usuarios
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
    - https://manual.aturnos.com/knowledgebase/7-9-activar-usuarios/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-9-activar-usuarios/
ai:
  answerableQuestions:
    - ¿Cómo puedo activar usuarios?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-9-activar-usuarios/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-9-activar-usuarios/
  contentHash: 1398a00d088452c91e18f9ee93338ca99dd6437967ea17dd39b91a135c03971d
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a activar usuarios, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
En este listado, aparecen los trabajadores no activados, es decir, trabajadores que a pesar de estar de alta en el equipo (aparecen en listado de trabajadores y se pueden planificar) no tienen acceso a aTurnos. Al activar a los usuarios, los trabajadores recibirán un email de activación con contraseña de acceso al sistema.

Se puede seleccionar a todos o solo a aquellos que necesites. Para facilitar la búsqueda de un trabajador, grupo de trabajadores de una localización o categoría en particular, puedes hacer uso del filtro.

Al hacer clic en Activar usuarios seleccionados se creará un listado con contraseñas autogeneradas por aTurnos para cada trabajador. Dicho listado se descargará automáticamente, además en la parte superior de la nueva tabla que se muestra, haciendo clic en Acciones se puede descargar dicho archivo en caso de fallar la descarga automática.

¡IMPORTANTE! La tabla de contraseñas solo se puede consultar una vez, por ello es muy importante descargarse el archivo de contraseñas y asegurarse de que se puede leer correctamente antes de abandonar la página (o antes de que el sistema cierre la sesión automáticamente por inactividad).
