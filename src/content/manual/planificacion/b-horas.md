---
schemaVersion: "1.0"
contentId: planificacion-b-horas
title: Horas en aTurnos
description: "Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas."
contentType: procedure
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Horas en aTurnos
audience:
  - role: RRHH
    access: applicable
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: horas
    label: Horas
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
    - https://manual.aturnos.com/knowledgebase/6-2-horas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-2-horas/
ai:
  answerableQuestions:
    - ¿Cómo puedo horas en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-2-horas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-2-horas/
  contentHash: 0813977eeedbe3aad815a7ac1d6ea7900621440e0771a1f1a80adfa6f2bc9a73
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas.

En las estadísticas de horas encontramos dos pestañas:

### Tabla

Muestra los datos por Horas de nuestra planificación, cada columna se corresponde con una variable diferente, en las cuales podemos ordenar los datos que contiene en orden ascendente y descendente. De la misma forma podemos variar la posición de cada columna como mostramos en puntos anteriores. Veremos las siguientes nomenclaturas:

- Trabajadores: nombre de las personas que componen el equipo.
- Turnos: son las columnas identificadas con las abreviaturas que corresponde con uno de los turnos (ver más) aplicados en el cuadrante del equipo. Informa el número de horas de ese tipo de turno que tiene planificada el trabajador durante el periodo de fechas marcado en la barra de filtros.
- Absentismo: informa el número de horas de absentismos (productivos y no productivos) asociados a los turnos y horas planificadas. Incluyen absentismos totales y temporales.
- Normales: informa el número de horas que no pertenecen a los tipos de turnos y computan como horas de contrato. Se incluyen las planificadas y realizadas.
- Extra: informa el número de horas que no pertenecen a los tipos de turnos y no computan como horas de contrato. Computan de manera independiente a las horas de contrato en las estadísticas y en los conceptos de nómina. Se incluyen en las horas realizadas, pero no en las planificadas.
- Complementarias: informa el número de horas que no pertenecen a los tipos de turnos y no computan como horas de contrato. Computan de manera independiente a las horas de contrato en las estadísticas y en los conceptos de nómina. Se incluyen en las horas realizadas, pero no en las planificadas. Se trata de un tipo de contratación diferente en comparación a las extraordinarias según convenio laboral.
- Planificadas: suma de las horas y turnos planificados en el periodo, teniendo en cuenta el valor de las horas computadas de los turnos, y no de la duración de los turnos. Se excluyen las horas asociadas a los absentismos no justificado.
- Realizadas: total de las horas que incluyen las horas y turnos planificados (computan como horas de contrato) y las horas y turnos extraordinarios (no computan como horas de contrato). Teniendo en cuenta la duración en horas definida en los tipos de turnos. Se excluyen las horas asociadas a los absentismos no justificados.
- Planificadas (año consultado): suma de las horas y turnos planificados en todo el año consultado, teniendo en cuenta el valor de las horas computadas de los turnos. Se excluyen las horas asociadas a los absentismos no justificado
- Contrato (año consultado): número de horas del contrato del trabajador. Son las horas que tiene informada el trabajador en su perfil.
- Ajuste: número de horas incrementadas o decrementadas que no se encuentran registradas en el cuadrante. Computan como horas de contrato. Ver ¿qué son los ajustes de horas?
- Planificadas más ajuste: total de las horas planificadas más las horas del ajuste, computan como horas de contrato.
- Balance con ajuste: diferencia entre las horas planificadas con ajuste y las horas de contrato del año consultado.

### Gráfico

Gráfico de barras, que especifica el total de horas por cada trabajador.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![b. Horas](/media/manual/b-horas-34f7ac0e2a.png)
