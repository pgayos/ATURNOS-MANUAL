---
schemaVersion: "1.0"
contentId: gestion-de-personal-2-4-datos-personalizados-por-trabajador
title: Datos personalizados por trabajador
description: Esta función permite ver los ‘Datos personalizados’ de cada trabajador.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Datos personalizados por trabajador
audience:
  - role: Trabajador
    access: applicable
entities:
  - id: datos
    label: Datos
  - id: personalizados
    label: Personalizados
  - id: trabajador
    label: Trabajador
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
    - https://manual.aturnos.com/knowledgebase/2-4-datos-personalizados-por-trabajador/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-4-datos-personalizados-por-trabajador/
ai:
  answerableQuestions:
    - ¿Cómo puedo datos personalizados por trabajador?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-4-datos-personalizados-por-trabajador/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-4-datos-personalizados-por-trabajador/
  contentHash: 15e955f3a8ea0cca2520080a656130ede95052dfff3e85c93d5551e409813f24
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Esta función permite ver los ‘Datos personalizados’ de cada trabajador.

## Procedimiento
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
