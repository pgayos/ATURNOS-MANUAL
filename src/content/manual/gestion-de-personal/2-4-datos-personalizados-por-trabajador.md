---
schemaVersion: "1.0"
contentId: "gestion-de-personal-2-4-datos-personalizados-por-trabajador"
title: "Datos personalizados por trabajador"
description: "Esta función permite ver los ‘Datos personalizados’ de cada trabajador."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Datos personalizados por trabajador"
audience:
  - role: "Trabajador"
    access: applicable
entities:
  - id: "datos"
    label: "Datos"
  - id: "personalizados"
    label: "Personalizados"
  - id: "trabajador"
    label: "Trabajador"
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
    - "https://manual.aturnos.com/knowledgebase/2-4-datos-personalizados-por-trabajador/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-4-datos-personalizados-por-trabajador/"
ai:
  answerableQuestions:
    - "¿Cómo puedo datos personalizados por trabajador?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "ff5bb1d8f1f68ee9b3a2a5be9f82bf578d6bdcb2f60bd95f59d6cf0f74229426"
  migratedAt: 2026-08-17
---
## Resumen

Esta función permite ver los ‘Datos personalizados’ de cada trabajador.

## Contenido

En primer lugar se deben seleccionar en la barra superior los equipos de los cuales se quiere consultar los datos personalizados de cada trabajador.

Una vez seleccionados los equipos, haciendo clic en ‘Cargar’ para que se muestren los resultados.

Se muestran los datos personalizados que haya informados en cada trabajador en su perfil del trabajador en el apartado de ‘Datos personalizados’, con la siguiente información:

- Equipo
- Trabajador
- ID Empleado
- Descripción del dato personalizado
- Tipo de cambio
- Valor

Se pueden ocultar aquellos campos que no se necesiten para la consulta.

Se puede copiar o exportar el listado en CSV, Excel o PDF.
