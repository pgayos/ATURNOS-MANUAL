---
schemaVersion: "1.0"
contentId: "gestion-de-personal-10-6-estadistica-diaria-de-todos-los-equipos"
title: "Estadística diaria de todos los equipos"
description: "Aprende a estadística diaria de todos los equipos, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Estadística diaria de todos los equipos"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "diaria"
    label: "Diaria"
  - id: "equipos"
    label: "Equipos"
  - id: "estadistica"
    label: "Estadistica"
  - id: "todos"
    label: "Todos"
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
    - "https://manual.aturnos.com/knowledgebase/10-6-estadistica-todos-los-equipos-diaria/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/10-6-estadistica-todos-los-equipos-diaria/"
ai:
  answerableQuestions:
    - "¿Cómo puedo estadística diaria de todos los equipos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "89d150593578f2be8452e8272e8bab3b7b8ffa6ceae727f9074a04437834491f"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a estadística diaria de todos los equipos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

A través de la estadística diaria se visualiza el resultado del cálculo de variables entre las fechas de ejecución (suma de cada uno de los conceptos de nómina calculados diariamente en el período seleccionado). Ver en el Manual el comportamiento de la estadística diaria: Estadística diaria

Al acceder a RRHH → ADMINISTRAR → NOMINAS → ESTADISTICA TODOS LOS EQUIPOS DIARIA se genera un reporte donde se recuperan los conceptos calculados día a día, en función de la configuración de la plantilla de nómina. Ver en el Manual (Plantilla de nómina).:

- Fecha de inicio
- Fecha de fin
- Equipo o equipos seleccionados
- Por defecto, el formato de salida de la estadística (plantilla de nómina) recuperará la plantilla de nómina (conceptos por filas o conceptos por columnas) del equipo en el que se está logueado. (Ver en el Manual).

Por defecto, el tipo de consulta es el modo Consulta, las opciones disponibles son:

- Consulta. Recupera el valor de los conceptos de nómina sin tener en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, informados en el perfil del trabajador.
- Simulación. Recupera el valor de los conceptos de nómina teniendo en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, sin modificar la fecha del último día exportado en el perfil del trabajador.

Por defecto, el tipo de descarga (estadística diaria sin totalizar o estadística diaria totalizada) es el indicado en la plantilla de nómina. (Ver en el Manual).

Al marcar “Cargar”, la aplicación nos muestra un mensaje

- Al Solicitar, se genera la petición de reporte en RRHH → PETICIONES DE REPORTE, el reporte puede estar en estado: Pendiente Ejecución Pendiente de descarga Descargado

- Una vez que termine la ejecución, en el menú RRHH → PETICIONES DE REPORTE, se visualiza un aviso en verde

- Guardar el fichero descargado
