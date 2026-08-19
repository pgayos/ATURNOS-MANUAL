---
schemaVersion: "1.0"
contentId: gestion-de-personal-6-5-estadistica-por-periodos-de-todos-los-equipos
title: Estadística por periodos de todos los equipos
description: A través de la estadística por periodo de todos los equipos se visualiza el resultado del cálculo de variables entre las fechas de ejecución (suma de cada uno de los conceptos de nómina calc.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Estadística por periodos de todos los equipos
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: equipos
    label: Equipos
  - id: estadistica
    label: Estadistica
  - id: periodos
    label: Periodos
  - id: todos
    label: Todos
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
    - https://manual.aturnos.com/knowledgebase/10-6-estadistica-todos-los-equipos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/10-6-estadistica-todos-los-equipos/
ai:
  answerableQuestions:
    - ¿Cómo puedo estadística por periodos de todos los equipos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/10-6-estadistica-todos-los-equipos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/10-6-estadistica-todos-los-equipos/
  contentHash: a1415290581d1301ceec41d1c3532ebaba6f945d5c6912fdf56f7eca639f8694
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a estadística por periodos de todos los equipos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
A través de la estadística por periodo de todos los equipos se visualiza el resultado del cálculo de variables entre las fechas de ejecución (suma de cada uno de los conceptos de nómina calculados en el período seleccionado).

No es aconsejable el uso de la estadística por periodo si en el cálculo de las variables se utilizan cálculos complejos tanto conceptos que operan entre conceptos como conceptos de comparación, las operaciones que ejecutan (de suma, resta, multiplicación o división, así como las de comparación) se realizan entre las fechas de la ejecución calculando en todo el periodo seleccionado.

Ver en el Manual el apartado 6.4.- Exportar a nóminas (Manual) el comportamiento de la estadística por periodo.

Veamos un ejemplo, con los conceptos que se han ido desarrollando en este Manual, en este caso, las horas de nocturnidad se calculan en un concepto de nómina si son menores a 10 (concepto 3K00) y si las horas nocturnas son iguales o mayores a 10 (concepto 3000).

En el cuadrante, un trabajador tiene planificados días con turnos en periodo nocturno (el periodo nocturno se define en la configuración general del equipo) en este caso desde las 22:00 hasta las 08:00.

Los días son:

- Día 09/04/2024 tiene un turno de 9 horas, debe recuperar valor el concepto 3K00
- Día 10/04/2024 tiene un turno de 10 horas, debe recuperar valor el concepto 3000
- Día 11/04/2024 tiene un turno de 10 horas, debe recuperar valor el concepto 3000
- Día 13/04/2024 tiene un turno de 1 horas, debe recuperar valor el concepto 3K00
- Día 14/04/2024 tiene un turno de 1 horas, debe recuperar valor el concepto 3K00
- Día 16/04/2024 tiene un turno de 2 horas, debe recuperar valor el concepto 3K00

Accede a RRHH → NOMINAS → ESTADISTICA POR PERIODO DE TODOS LOS EQUIPOS

1.- Selecciona las fechas

2.- Selecciona los equipos

3.- Por defecto, la plantilla de nómina (conceptos por filas o conceptos por columnas) será la indicada. (Ver en el Manual). Pudiendo indicar el tipo de plantilla cada vez que se ejecute la estadística

4.- Tipo de consulta: Consulta

- Consulta: Recupera el valor de los conceptos de nómina sin tener en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, informados en el perfil del trabajador. Simulación: Recupera el valor de los conceptos de nómina teniendo en cuenta la fecha de cierre de cuadrante y la fecha del último día exportado, sin modificar la fecha del último día exportado en el perfil del trabajador.

5.- Al cargar la estadística, salta un aviso para que la aplicación genere un reporte.

6.- El reporte se genera en RRHH → PETICIONES DE REPORTES:

- Nombre del reporte: Nóminas → Estadística por periodos todos los equipos
- Nombre del usuario que ha solicitado el reporte
- Fecha de ejecución

En el reporte de la estadística por periodo, el concepto que compara si las horas nocturnas son menores a 10, suma todas las horas nocturnas en el período, es decir, suma las horas nocturnas 9 + 10 + 10 + 1 +1 + 2, hace un total de 33 horas, al superar las 10 horas nocturnas, el concepto que abona es el 3000.

Si para el cálculo de las variables se precisan cálculos complejos, acceded a la Estadística diaria que se trata en el punto 7 de este Manual.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![6.5 Estadística por periodos de todos los equipos](/media/manual/5-1-exportar-nominas-9666500d33.png)

![6.5 Estadística por periodos de todos los equipos](/media/manual/6-1-estadistica-por-periodo-fee9586091.png)

![6.5 Estadística por periodos de todos los equipos](/media/manual/6-1-estadistica-por-periodo-ffad9f8b00.png)

![6.5 Estadística por periodos de todos los equipos](/media/manual/6-5-estadistica-por-periodos-de-todos-los-equipos-6cac3bb463.png)
