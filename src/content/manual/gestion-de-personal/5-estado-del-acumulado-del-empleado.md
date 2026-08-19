---
schemaVersion: "1.0"
contentId: gestion-de-personal-5-estado-del-acumulado-del-empleado
title: Estado del acumulado del empleado
description: Este reporte contiene la misma información que el ‘ Estado del acumulado del empleado ‘ por equipo.
contentType: concept
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Estado del acumulado del empleado
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: acumulado
    label: Acumulado
  - id: empleado
    label: Empleado
  - id: estado
    label: Estado
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
    - https://manual.aturnos.com/knowledgebase/5-estado-del-acumulado-del-empleado/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-estado-del-acumulado-del-empleado/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre estado del acumulado del empleado?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-estado-del-acumulado-del-empleado/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-estado-del-acumulado-del-empleado/
  contentHash: 374fba01f37861f65d48dbf7009344da23a19f83cefc77306e3a518f8281ddec
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Este reporte contiene la misma información que el ‘ Estado del acumulado del empleado ‘ por equipo.

Muestra las horas del estado acumuladas al comparar las horas planificadas y presenciales del trabajador. Computando las horas planificadas computables, las horas planificadas no computables y el acumulado de horas (horas presenciales menos planificadas).

Al igual que otros reportes, dependiendo del volumen de datos se puede consultar por pantalla.

Y en el caso de superar ese volumen, generar una ‘ Petición de reporte ‘ para su descarga en un Excel.

## Filtros

En la consulta del reporte se puede definir:

- Fechas.

- Equipos.

- Trabajadores, filtrando por Nombre, Email o ID Empleado.

## Variables

En el reporte obtendremos la siguiente información por defecto (se pueden añadir otros campos con la ‘ Configuración Reportes de RRHH ‘):

- Horas planificadas sin ajustes, total de horas planificadas, excepto las horas generadas por el ajuste en el control de presencia. Incluyen las horas de los tipos de turnos y las horas añadidas que no son de turnos (normales, extraordinaria y complementarias).
- Horas, que no pertenecen a los tipos de turnos. Son horas añadidas como tipo normales en el cuadrante o generadas por el ajuste del Control Horario, si son tipo normales (se excluyen horas tipos extraordinarias y complementarias).
- Horas computables planificadas, total de las horas computables de los turnos y/o horas tipo normales planificadas en el cuadrante. No se incluyen las horas de los turnos con absentismos de cualquier tipo.
- Horas no computables planificadas, horas tipo extraordinaria y complementarias más la suma de la duración de horas de los turnos que no computan.
- Acumulado, como diferencia de horas entre las horas presenciales menos las horas computables planificadas y horas no computables planificadas.

Si el valor es positivo significa que el trabajador tiene más horas presenciales que planificadas. Cuando se ajuste el acumulado será de 0, y se añaden horas en la planificación del cuadrante como horas añadidas.

Si el valor es negativo significa que las horas presenciales son menores que las planificadas. Cuando se ajuste el acumulado será de 0, y se añaden horas de absentismo temporal en la planificación del cuadrante.

- Horas computables planificadas + Acumulado, suma de ambas variables.

Por ejemplo, este trabajador tiene este ‘Estado del acumulado del empleado’ en el mes de enero.

El acumulado es resultado de las ‘Horas presenciales’ menos las ‘Horas planificadas’ y las ‘Horas no computables planificadas’

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5. Estado del acumulado del empleado](/media/manual/5-estado-del-acumulado-del-empleado-5be4a3e15c.webp)

![5. Estado del acumulado del empleado](/media/manual/5-estado-del-acumulado-del-empleado-f3ee7f4f54.webp)

![Filtros](/media/manual/filtros-85e5546128.webp)

![Filtros](/media/manual/filtros-497319d229.webp)

![Variables](/media/manual/variables-3540f96216.webp)

![Filtros](/media/manual/filtros-6178d571fb.webp)

![Variables](/media/manual/variables-879b5a961d.webp)
