---
schemaVersion: "1.0"
contentId: recursos-y-partes-6-2-reporte-de-localizaciones
title: Reporte de localizaciones
description: "Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas."
contentType: procedure
module: Recursos y partes
submodule: Usuarios y perfiles
intent: Reporte de localizaciones
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: localizaciones
    label: Localizaciones
  - id: reporte
    label: Reporte
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
    - https://manual.aturnos.com/knowledgebase/6-2-reporte-de-localizaciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/6-2-reporte-de-localizaciones/
ai:
  answerableQuestions:
    - ¿Cómo puedo reporte de localizaciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/6-2-reporte-de-localizaciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/6-2-reporte-de-localizaciones/
  contentHash: 0cb3862e63fd2b8fbac3e66de59808f96733cea2515b61760ac0a50bfd65c780
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Para ver más sobre las funciones de filtrado, ocultar columnas y las opciones de exportar datos, accede al siguiente enlace: Introducción de estadísticas.

Este informe te posibilitará comparar diferentes variables como: Turnos, Horas, Festivos, Vacaciones, Absentismo, Horas Extra, etc., desde las distintas localizaciones que previamente has creado en tu equipo.

### Barra superior de reportes de localizaciones

Para obtener este reporte, se te muestran una serie de campos, los cuales tienes que proceder a añadir para posteriormente analizar el reporte. Dichos campos son los siguientes:

1. Desde/hasta: elige el período a consultar.
2. Variable: haciendo clic en el campo en blanco se desplegaran todas las opciones o variables que tiene la tabla de reportes. Elige la(s) variable(s) que deseas ver o comparar, una, dos o más, según requieras.
3. Período: este campo despliega opciones para seleccionar cómo quieres que aparezca la información en el reporte, entre las que están: Periodo, si quieres que el reporte estadístico te muestre el mismo período que colocaste en el campo Desde/hasta. Día: te muestra la información comparativa día a día según el período reflejado en Desde/hasta. Mes: muestra los datos comparativos por mes o meses contenidos dentro del período solicitado. Año: te muestra la información comparativa anual según el período reflejado en Desde/hasta.
4. Filtro: si haces clic en el embudo, se abrirá un Menú lateral en la izquierda. Es en este, donde puedes filtrar la información según tus necesidades de análisis. Por Nombre/Email/ID Empleado, la Experiencia que tienen (si se le ha asignado alguna en su perfil), las Localizaciones (si han sido registradas en el equipo), las Categorías (si cada trabajador tiene aplicada una categoría) y la Especialidad/Rol (si el trabajador tiene alguna habilidad o rol específico al que darle valor a la hora de poderlo encontrar en alguna búsqueda).
5. Cuadrante: en este campo debes elegir la base de datos que quieres utilizar para tu reporte. En este caso, tomar datos desde el “Cuadrante” o tomarlos del “Cuadrante Borrador”.

### Variables de las tabla del reporte de localizaciones

A partir de esta tabla, podrás construir tu propio reporte para visualizar cómo se comportan las diferentes variables según las Localizaciones que previamente has creado.

Dicha tabla se configura de la siguiente forma, y para ello se muestran una serie de variables, que son las siguientes:

- Localizaciones: se define como cada una de las localizaciones que previamente has creado en tu equipo.
- Variables seleccionables: Turnos: como periodo de tiempo definido con una hora de entrada y hora de salida, en el cual un trabajador cubre su puesto de trabajo. Jornadas: cantidad de tiempo definida en Ajustes (enlazar nuevo Administrar) que se considera como jornada en un día, dependiendo de lo estipulado en contrato de trabajo o convenio. Vacaciones: número de días de vacaciones disfrutados y planificados a la fecha por el trabajador. Libres: número de días libres de cada persona por periodo indicado. Jornadas absentismos: es la suma de absentismos de cada trabajador según la Jornada establecida por contrato o convenio. Horas: muestra el total de horas planificadas y trabajadas, dispuestas en el cuadrante de cada trabajador. Complementarias/Extras: presenta la suma de horas complementarias y extras. Horas absentismos: indica el total de horas de todos los tipos de absentismos en los que ha incurrido cada trabajador. Horas Extra: aquellas horas de trabajo que se realicen sobre la duración máxima de la jornada ordinaria de trabajo, fijada mediante convenio colectivo o, en su defecto, contrato individual. Complementaria: número de horas realizadas como adición a las horas ordinarias pactadas en el contrato a tiempo parcial. Normal: muestra las horas adicionales que se han añadido a cualquier tipo de turno por cada trabajador, que no son consideradas ni extras, ni complementarias. Horas festivas: refleja las horas planificadas en días que son declarados como festivos (domingos y festivos marcados en el calendario laboral correspondiente). Horas nocturnas: cantidad de horas realizadas en un turno considerado nocturno, entre las diez de la noche y las seis de la mañana, según estipula la legislación.

Todos estos datos se generan a lo largo de un periodo, el cual puede abarcar más de un mes.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
