---
schemaVersion: "1.0"
contentId: "gestion-de-personal-6-6-estadistica-diaria-de-todos-los-equipos"
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
    - "https://manual.aturnos.com/knowledgebase/10-7-estadistica-todos-los-equipos-diaria/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/10-7-estadistica-todos-los-equipos-diaria/"
ai:
  answerableQuestions:
    - "¿Cómo puedo estadística diaria de todos los equipos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "01da80111ac2e4a98266585fd878b5355e032ad09f44c18b42b19e070815c894"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a estadística diaria de todos los equipos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

A través de la estadística diaria de todos los equipos se visualiza el resultado del cálculo de variables entre las fechas de ejecución (suma de cada uno de los conceptos de nómina calculados diariamente en el período seleccionado).

Veamos un ejemplo, con los conceptos que se han ido desarrollando en este Manual, en este caso, las horas de nocturnidad se calculan en un concepto de nómina si son menores a 10 (concepto 3K00) y si las horas nocturnas son iguales o mayores a 10 (concepto 3000).

En el cuadrante, un trabajador tiene planificados días con turnos en periodo nocturno (el periodo nocturno se define en la configuración general del equipo) en este caso desde las 22:00 hasta las 08:00.

Los días son:

- Día 09/04/2024 tiene un turno de 9 horas, debe recuperar valor el concepto 3K00
- Día 10/04/2024 tiene un turno de 10 horas, debe recuperar valor el concepto 3000
- Día 11/04/2024 tiene un turno de 10 horas, debe recuperar valor el concepto 3000
- Día 13/04/2024 tiene un turno de 1 horas, debe recuperar valor el concepto 3K00
- Día 14/04/2024 tiene un turno de 1 horas, debe recuperar valor el concepto 3K00
- Día 16/04/2024 tiene un turno de 2 horas, debe recuperar valor el concepto 3K00

Al acceder a RRHH → NOMINAS → ESTADISTICA DIARIA DE TODOS LOS EQUIPOS, se genera un reporte donde se recuperan los conceptos calculados día a día, en función de la configuración de la plantilla de nómina del equipo en el que el usuario que genera el reporte está logueado. Ver en el Manual ( Plantilla de nómina ).

1.- Selecciona las fechas.

2.- Selecciona el equipo / equipos.

3.- Selecciona en la plantilla de nómina los conceptos en filas para una mejor visualización / control. En el caso de seleccionar “según configuración” recuperará los valores indicados en la plantilla de nómina del equipo en el que está logueado el usuario que ejecuta la estadística. ( Ver en el Manual ).

Pudiendo indicar el tipo de plantilla cada vez que se ejecute la estadística.

4.- Por defecto, el tipo de consulta es el modo Consulta, las opciones disponibles son:

- Consulta. Recupera el valor de los conceptos de nómina sin tener en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, informados en el perfil del trabajador.
- Simulación. Recupera el valor de los conceptos de nómina teniendo en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, sin modificar la fecha del último día exportado en el perfil del trabajador.

5.- Por defecto, el tipo de descarga (estadística diaria sin totalizar o estadística diaria totalizada) es el indicado en la plantilla de nómina del equipo en el que está logueado el usuario que ejecuta la estadística. ( Ver en el Manual ).

5.- Al cargar la estadística, salta un aviso para que la aplicación genere un reporte.

5.- El reporte se genera en RRHH → PETICIONES DE REPORTES:

- Nombre del reporte: Nóminas = → Estadística todos los equipos diaria
- Nombre del usuario que ha solicitado el reporte
- Fecha de ejecución

6.- En el reporte con el tipo de descarga: estadística diaria sin totalizar se visualiza el valor diario de los conceptos 3K00 o 3000 atendiendo al número de horas nocturnas realizadas cada día.

7.- En el reporte con el tipo de descarga: estadística diaria totalizada se visualiza el valor totalizado de los conceptos 3K00 o 3000 atendiendo al número de horas nocturnas realizadas cada día.
