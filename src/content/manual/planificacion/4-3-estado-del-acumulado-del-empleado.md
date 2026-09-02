---
schemaVersion: "1.0"
contentId: planificacion-4-3-estado-del-acumulado-del-empleado
title: Estado del acumulado del empleado
description: Es un reporte que ofrece las horas del estado acumuladas al comparar las horas planificadas y presenciales del trabajador.
contentType: reference
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Estado del acumulado del empleado
audience:
  - role: Administrador
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
    - https://manual.aturnos.com/knowledgebase/4-3-estado-del-acumulado-del-empleado/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-3-estado-del-acumulado-del-empleado/
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
    - https://manual.aturnos.com/knowledgebase/4-3-estado-del-acumulado-del-empleado/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-3-estado-del-acumulado-del-empleado/
  contentHash: 21e9b7a2e16c6c272e7c3a1e4deb46ba20cf7fa53425fea6cc2878e0e7bebc31
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre estado del acumulado del empleado, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Es un reporte que ofrece las horas del estado acumuladas al comparar las horas planificadas y presenciales del trabajador. Teniendo en cuenta las horas planificadas computables, las horas planificadas no computables y el acumulado de horas (horas presenciales menos planificadas).

Desde la barra superior se pueden filtrar los datos entre dos fechas, así como buscar mediante el botón de filtro.

Para acotar la consulta, se puede filtrar buscando uno o más trabajadores, por una o varias localizaciones, así como por la especialidad y en el nivel de la misma del trabajador.

Los parámetros que se pueden consultar en este reporte son los siguientes:

- Horas planificadas sin ajustes: total de horas planificadas, excepto las horas generadas por el ajuste en el control de presencia. Incluyen las horas de los tipos de turnos y las horas añadidas que no son de turnos (normales, extraordinaria y complementarias).
- Horas (Normales): son las horas tipos normales que no pertenecen a los tipos de turnos. Son horas añadidas como tipo normales en el cuadrante o generadas por el ajuste del control de presencia, si son tipo normales (se excluyen horas tipos extraordinarias y complementarias).
- Horas computables planificadas: Suma total de las horas computables de los turnos y/o horas tipo normales planificadas en el cuadrante. No se incluyen las horas asociadas a absentismos no justificados (no productivos).
- Horas no computables planificadas: suma de horas de las horas tipo extraordinaria y complementarias más la suma de la duración de horas de los turnos que no computan.
- Acumulado: resultado de la diferencia de horas entre las horas presenciales menos las horas computables planificadas y horas no computables planificadas.

Si el valor es positivo significa que el trabajador tiene más horas presenciales que planificadas. Cuando se ajuste el acumulado será de 0, y se añaden horas en la planificación del cuadrante como horas añadidas.

Si el valor es negativo significa que las horas presenciales son menores que las planificadas. Cuando se ajuste el acumulado será de 0, y se añaden horas de absentismo temporal en la planificación del cuadrante.

- Horas computables planificadas más acumulado: total de horas computables planificadas más el acumulado.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![4.3 Estado del acumulado del empleado](/media/manual/4-3-estado-del-acumulado-del-empleado-da73a91e2f.webp)

![4.3 Estado del acumulado del empleado](/media/manual/4-3-estado-del-acumulado-del-empleado-719576ef35.webp)

![4.3 Estado del acumulado del empleado](/media/manual/4-3-estado-del-acumulado-del-empleado-e69eace276.webp)
