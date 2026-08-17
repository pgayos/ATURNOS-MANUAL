---
schemaVersion: "1.0"
contentId: "gestion-de-personal-6-4-exportar-nominas"
title: "Exportar nóminas"
description: "La exportación a nómina genera un fichero csv que recupera los valores calculados entre las fechas de la ejecución. Desde RRHH → NÓMINAS → EXPORTAR A NÓMINA se accede al menú."
contentType: procedure
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Exportar nóminas"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
  - role: "Desarrollador API"
    access: applicable
entities:
  - id: "exportar"
    label: "Exportar"
  - id: "nominas"
    label: "Nominas"
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
    - "https://manual.aturnos.com/knowledgebase/10-5-exportar-nominas/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/10-5-exportar-nominas/"
ai:
  answerableQuestions:
    - "¿Cómo puedo exportar nóminas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "b368e8c9018257c4a5d16e86753797390332e619cd55e3a106b35be0a504d87f"
  migratedAt: 2026-08-17
---
## Resumen

La exportación a nómina genera un fichero csv que recupera los valores calculados entre las fechas de la ejecución. Desde RRHH → NÓMINAS → EXPORTAR A NÓMINA se accede al menú.

## Contenido

1.- Selecciona los equipos que quieres exportar, si seleccionar las dos flechas se traspasan todos.

2.- Filtros para la exportación.

- Fecha de inicio Fecha de fin Plantilla de nómina, por defecto la que esté configurada en la Plantilla de nómina ( Ver en el Manual ), pudiendo seleccionar (abriendo el campo) para cada ejecución si los conceptos se va a exportar por filas o por columnas. Tipo de consulta: Consulta: Recupera el valor de los conceptos de nómina sin tener en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, informados en el perfil del trabajador. Simulación: Recupera el valor de los conceptos de nómina teniendo en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, sin modificar la fecha del último día exportado en el perfil del trabajador. Descarga: Recupera el valor de los conceptos de nómina teniendo en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, modificando la fecha del último día exportado en el perfil del trabajador con la fecha de fin informada. Tipo de descarga: Ver en el Manual ( Configuración de nómina ) Tipo de descarga: Estadística por periodo: Descarga la suma de cada uno de los conceptos de nómina calculados en el período seleccionado. Estadística diaria sin totalizar. Descarga cada uno de los conceptos de nómina calculados diariamente en el período seleccionado. Si tenemos operaciones o comparadores en nuestra nómina, utilizará los datos diarios de todo el período y nos dará una cantidad para cada día de cada uno de los trabajadores. Estadística diaria totalizada. Descarga la suma de cada uno de los conceptos de nómina calculados diariamente en el período seleccionado. Si tenemos operaciones o comparadores en nuestra nómina, utilizará los datos diarios de todo el período y nos dará una cantidad total, que será la suma de la cantidad diaria para cada uno de los trabajadores.

3.- Haz clic en siguiente para Exportar.

4.- Descarga el fichero, genera un fichero Excel con extensión csv.

Este proceso se puede integrar a través del API.

La diferencia es que en el export de nóminas y la estadística por periodo, el cálculo de las variables que utilizan cálculos complejos tanto los conceptos que operan entre conceptos como conceptos de comparación, las operaciones que ejecutan (de suma, resta, multiplicación o división, así como las de comparación) se realizan entre las fechas de la ejecución calculando en todo el periodo seleccionado.

En la estadística diaria las operaciones que se ejecutan en los conceptos de suma, resta, etc. o de comparación se calculan día a día.

Veamos un ejemplo, con los conceptos que se han ido desarrollando en este Manual, en este caso, las horas de nocturnidad se calculan en un concepto de nómina si son menores a 10 (concepto 3K00) y si las horas nocturnas son iguales o mayores a 10 (concepto 3000).

En el cuadrante, un trabajador tiene planificados días con turnos en periodo nocturno (el periodo nocturno se define en la configuración general del equipo) en este caso desde las 22:00 hasta las 08:00.

Los días son:

- Día 09/04/2024 tiene un turno de 9 horas, debe recuperar valor el concepto 3K00
- Día 10/04/2024 tiene un turno de 10 horas, debe recuperar valor el concepto 3000
- Día 11/04/2024 tiene un turno de 10 horas, debe recuperar valor el concepto 3000
- Día 13/04/2024 tiene un turno de 1 horas, debe recuperar valor el concepto 3K00
- Día 14/04/2024 tiene un turno de 1 horas, debe recuperar valor el concepto 3K00
- Día 16/04/2024 tiene un turno de 2 horas, debe recuperar valor el concepto 3K00

En el caso del export de nómina y/o la estadística por periodo, el concepto que compara si las horas nocturnas son menores a 10, suma todas las horas nocturnas en el período, es decir, suma las horas nocturnas 9 + 10 + 10 + 1 +1 + 2, hace un total de 33 horas, al superar las 10 horas nocturnas, el concepto que abona es el 3000

En el caso de la estadística diaria, el concepto que compara si las horas nocturnas son menores a 10, suma todas las horas nocturnas en el día, es decir, comprueba si las 9 horas nocturnas del día 9 son menores a 10, como es menor, devuelve valor el concepto 3K00, pasa al día 10 y comprueba si las horas nocturnas son mayores o iguales que 10, de forma que devuelve valor ell concepto 3000.
