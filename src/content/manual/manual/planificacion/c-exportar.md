---
schemaVersion: "1.0"
contentId: planificacion-c-exportar
title: Exportar
description: En aTurnos existen distintas formas de exportar los datos, tanto desde esta ventana como desde las distintas pestañas dentro de aTurnos que tengan habilitado el icono de exportación como, po.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Exportar
audience:
  - role: RRHH
    access: applicable
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: exportar
    label: Exportar
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
    - https://manual.aturnos.com/knowledgebase/c-exportar/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/c-exportar/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre exportar?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/c-exportar/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/c-exportar/
  contentHash: a59c4fb74b0716d169114292a01533edcf0362cf6c4b847daf3dab09ac6f916b
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre exportar, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
En aTurnos existen distintas formas de exportar los datos, tanto desde esta ventana como desde las distintas pestañas dentro de aTurnos que tengan habilitado el icono de exportación como, por ejemplo: Listado de tipos de turno, Estadísticas, Cuadrante, entre otros menús.

Este menú de ‘Exportar’ se compone de cuatro partes:

- Filtro de fechas.
- Filtro de trabajadores.
- Formato.
- Selección de datos a exportar.

  ![c. Exportar](/media/manual/c-exportar-047887b928.png)

Para una correcta exportación de los datos es necesario:

1. Indicar un periodo de exportación (con una fecha de inicio y fin de dicho periodo).

   ![c. Exportar](/media/manual/c-exportar-03ac099a39.webp)

1. En segundo lugar, el filtro situado en la parte derecha, permite exportar solo aquellos trabajadores de los cuales se haya indicado su nombre, email o ID Empleado.

   ![c. Exportar](/media/manual/c-exportar-886f495549.webp)

   ![c. Exportar](/media/manual/c-exportar-c3c1c6eb2e.webp)

1. El tercer paso, es escoger el tipo de formato deseado (JSON o CSV) en el que se quiere exportar.

   ![c. Exportar](/media/manual/c-exportar-315d86b1a7.webp)

1. Por último, los datos que se desean exportar. Estos datos se encuentran clasificados en cuatro categorías distintas (para ubicar más fácilmente los conceptos que se desean exportar), como:

- Datos básicos (nombre del equipo, nombre del usuario, emails, teléfonos, roles, datos personalizados, entre otros)

  ![c. Exportar](/media/manual/c-exportar-29230b7af4.webp)

- Categoría & Contrato (fecha inicio y fin de contrato, categoría, localización, tipo de vacaciones y posición ).

  ![c. Exportar](/media/manual/c-exportar-fb39281f1d.webp)

- Tiempos (horas contrato, balances de horas, horas planificadas, vacaciones, turnos de trabajo, entre otros)

  ![c. Exportar](/media/manual/c-exportar-e45c0c1357.webp)

- Datos de planificación (datos de los patrones de turnos aplicados ).

  ![c. Exportar](/media/manual/c-exportar-dff9e60432.webp)

Una vez seleccionados los conceptos a exportar, se debe hacer clic en el botón de “Exportar “, y se generará el archivo para su consulta.
