---
schemaVersion: "1.0"
contentId: gestion-de-personal-7-1-estadistica-diaria
title: Estadística diaria
description: A través de la estadística diaria se visualiza el resultado del cálculo de variables entre las fechas de ejecución (suma de cada uno de los conceptos de nómina calculados diariamente en el período seleccionado).
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Estadística diaria
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: diaria
    label: Diaria
  - id: estadistica
    label: Estadistica
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
    - https://manual.aturnos.com/knowledgebase/f-estadistica-diaria/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/f-estadistica-diaria/
ai:
  answerableQuestions:
    - ¿Cómo puedo estadística diaria?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/f-estadistica-diaria/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/f-estadistica-diaria/
  contentHash: 9e165e43be943a27ec2d5abd401007e7f06a39966942516f5ae6c5fc7a180b95
  migratedAt: 2026-08-17
labels: []
---
## Resumen

A través de la estadística diaria se visualiza el resultado del cálculo de variables entre las fechas de ejecución (suma de cada uno de los conceptos de nómina calculados diariamente en el período seleccionado).

## Procedimiento
Veamos un ejemplo, con los conceptos que se han ido desarrollando en este Manual, en este caso, las horas de nocturnidad se calculan en un concepto de nómina si son menores a 10 (concepto 3K00) y si las horas nocturnas son iguales o mayores a 10 (concepto 3000).

En el cuadrante, un trabajador tiene planificados días con turnos en periodo nocturno (el periodo nocturno se define en la configuración general del equipo) en este caso desde las 22:00 hasta las 08:00.

Los días son:

- Día 09/04/2024 tiene un turno de 9 horas, debe recuperar valor el concepto 3K00
- Día 10/04/2024 tiene un turno de 10 horas, debe recuperar valor el concepto 3000
- Día 11/04/2024 tiene un turno de 10 horas, debe recuperar valor el concepto 3000
- Día 13/04/2024 tiene un turno de 1 horas, debe recuperar valor el concepto 3K00
- Día 14/04/2024 tiene un turno de 1 horas, debe recuperar valor el concepto 3K00
- Día 16/04/2024 tiene un turno de 2 horas, debe recuperar valor el concepto 3K00

Al acceder a ADMINISTRAR → NOMINAS → ESTADISTICA DIARIA, se genera un reporte donde se recuperan los conceptos calculados día a día, en función de la configuración de la plantilla de nómina. Ver en el Manual (Plantilla de nómina).

1.- Selecciona las fechas

2.- Por defecto, la plantilla de nómina (conceptos por filas o conceptos por columnas, en el caso de la estadística diaria se recomienda por filas para una mejor visualización / control) es la indicada. (Ver en el Manual).

Pudiendo indicar el tipo de plantilla cada vez que se ejecute la estadística.

3.- Por defecto, el tipo de consulta es el modo Consulta, las opciones disponibles son:

- Consulta. Recupera el valor de los conceptos de nómina sin tener en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, informados en el perfil del trabajador.
- Simulación. Recupera el valor de los conceptos de nómina teniendo en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, sin modificar la fecha del último día exportado en el perfil del trabajador.

4.- Por defecto, el tipo de descarga (estadística diaria sin totalizar o estadística diaria totalizada) es el indicado. (Ver en el Manual).

5.- Al cargar la estadística, salta un aviso para que la aplicación genere un reporte.

5.- El reporte se genera en ADMINISTRAR → PETICIONES DE REPORTE:

- Nombre del reporte: Estadística diaria (Nóminas)
- Nombre del usuario que ha solicitado el reporte
- Fecha de ejecución

6.- En el reporte con el tipo de descarga: estadística diaria sin totalizar se visualiza el valor diario de los conceptos 3K00 o 3000 atendiendo al número de horas nocturnas realizadas cada día.

7.- En el reporte con el tipo de descarga: estadística diaria totalizada se visualiza el valor totalizado de los conceptos 3K00 o 3000 atendiendo al número de horas nocturnas realizadas cada día.
