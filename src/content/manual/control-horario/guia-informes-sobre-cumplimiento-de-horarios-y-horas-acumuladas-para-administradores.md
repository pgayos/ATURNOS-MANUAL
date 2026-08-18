---
schemaVersion: "1.0"
contentId: control-horario-guia-informes-sobre-cumplimiento-de-horarios-y-horas-acumuladas-para-administradores
title: Informes sobre cumplimiento de horarios y horas acumuladas para administradores
description: El módulo de Control Horario no solo registra la asistencia de los empleados, sino que también ofrece herramientas de análisis para que puedas gestionar de forma eficiente el tiempo de traba.
contentType: concept
module: Control horario
submodule: Horas trabajadas
intent: Informes sobre cumplimiento de horarios y horas acumuladas
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms:
  - web
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: 2025-05-22
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/control-de-horas-trabajadas-y-extras/informes-sobre-cumplimiento-de-horarios-y-horas-acumuladas/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre informes sobre cumplimiento de horarios y horas acumuladas para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 7
featured: false
labels:
  - PENDIENTE
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/control-de-horas-trabajadas-y-extras/informes-sobre-cumplimiento-de-horarios-y-horas-acumuladas/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/control-de-horas-trabajadas-y-extras/informes-sobre-cumplimiento-de-horarios-y-horas-acumuladas/
  contentHash: a26e6f1531a1e944bc4df7120182d096bd48e789d982551b599a9976f15274c9
  migratedAt: 2026-08-18
---
## Resumen

El módulo de Control Horario no solo registra la asistencia de los empleados, sino que también ofrece herramientas de análisis para que puedas gestionar de forma eficiente el tiempo de trabajo. A través de sus completas estadísticas, podrás:

### Introducción

- Comparar horas planificadas frente a horas realmente trabajadas.
- Identificar discrepancias que afectan la productividad.
- Controlar el absentismo y las incidencias de fichaje.
- Facilitar la gestión de nóminas gracias a informes detallados.

Acceder a estas estadísticas es muy sencillo: solo debes ir a Control Horario → Estadísticas, donde encontrarás una variedad de informes adaptados a diferentes necesidades.

### Tipos de informes

Ofrece una comparación entre las horas planificadas (computadas) y las horas realmente trabajadas (presenciales) por los empleados. Para comprender mejor los datos que muestra este informe, es indispensable conocer la diferencia ente estos dos términos:

- Horas computadas: Total de horas y turnos que cuentan para el contrato del trabajador, excluyendo absentismos no justificados.
- Horas presenciales: Total de horas trabajadas según lo planificado, descontando descansos (según configuración) y excluyendo cualquier absentismo.

Proporciona un informe detallado de las horas registradas por cada trabajador mediante el control de presencia. Este informe se clasifica en tres categorías:

- Horas presenciales: Total de horas desde el fichaje de entrada hasta el de salida que realiza un trabajador.
- Horas presenciales computables: Horas presenciales que coinciden con los turnos que cuentan cómo horas de contrato y no extraordinarias.
- Horas presenciales no computables: Horas presenciales que corresponden a turnos que no se consideran dentro de las horas de contrato

Compara las horas planificadas con las horas presenciales registradas. Muestra:

- Horas planificadas: Total de horas programadas sin ajustes.
- Horas computables: Horas que cuentan para el contrato, excluyendo absentismos no justificados.
- Horas no computables: Horas extraordinarias, complementarias o de turnos no computables.
- Acumulado: Diferencia entre horas presenciales y planificadas. Si es positivo, hay horas extra; si es negativo, faltan horas (se ajusta como absentismo). Permite filtrar por fechas, empleados y localizaciones para una gestión detallada.

Permite comparar, para cada día, las horas que un trabajador ha trabajado realmente (horas presenciales) con las horas que estaban planificadas en su cuadrante. Además, muestra si la jornada está correctamente ajustada, considerando posibles absentismos.

- Columnas principales del informe: Trabajador: Nombre del empleado. Horas presenciales: Tiempo registrado desde el fichaje de entrada hasta el de salida. Horas planificadas: Duración de trabajo programada en el cuadrante para ese día. Horas de absentismo planificadas: Tiempo de absentismo registrado en el cuadrante, incluyendo ajustes por fichajes. Estado: Diferencia entre horas presenciales y planificadas, ajustada por las horas de absentismo. Un estado de «0h 0m» indica que los fichajes han sido ajustados correctamente.

Ofrece una visión detallada de la actividad diaria de cada empleado, permitiendo a los administradores supervisar y analizar diversos aspectos relacionados con la jornada laboral.

- Principales datos proporcionados: ID Empleado: Identificador único del trabajador, configurable en su perfil. Nombre: Nombre completo del empleado. Categoría: Clasificación laboral del trabajador. Localización: Ubicación asignada por defecto en el perfil del empleado. Porcentaje de jornada: Proporción de la jornada laboral según lo indicado en el perfil del trabajador. Jornada planificada: Turnos 0 horas programadas para el empleado en el cuadrante diario. Fichajes: Registros de entradas y salidas realizados durante el día. Absentismos: Períodos de ausencia, indicando hora de inicio y fin. Incidencias: Abreviaturas que representan tipos específicos de absentismo. Horas ordinarias: Horas efectivas de trabajo dentro del turno planificado. Horas presenciales: Total de horas desde el fichaje de entrada hasta el de salida. Estado: Diferencia, descontando la tolerancia, entre la jornada planificada y la efectivamente realizada.

Ofrece una visión detallada de la actividad diaria de cada empleado.

- Principales datos proporcionados: ID Empleado: Identificador único del trabajador, configurable en su perfil.

Nombre: Nombre completo del empleado.

- Localización: Ubicación asignada por defecto en el perfil del empleado. Día: Día que ha realizado el fichaje. Jornada planificada: Turnos o horas programadas para el empleado en el cuadrante diario. Fichajes: Registros de entradas y salidas realizados durante el día. Tiempo fichado: Registro de tiempo de la jornada. Localización del fichaje: Muestra la ubicación desde la que se ha realizado el fichaje. Descripción: Nombre del tipo de fichaje que ha realizado Tipo de fichaje: Indica si el fichaje es de tipo computable o no computable.

Proporciona un resumen detallado de los registros de entrada y salida de los empleados en un periodo de tiempo específico. Este informe se divide en dos pestañas:

- Fichajes: Muestra un resumen de los fichajes realizados en el control de presencia.
- Fichajes automáticos: Presenta los fichajes que se generan automáticamente cuando el trabajador inicia o finaliza su jornada, sin necesidad de una petición manual.
- Principales datos proporcionados: Trabajador: Nombre del empleado que realizó el fichaje. Categoría: Categoría laboral del trabajador. Hora de marcaje: Fecha y hora exacta en que se registró el fichaje. Dirección: Indica si el fichaje corresponde a una entrada o una salida. Localización: Ubicación asociada al fichaje, si corresponde. Computable: Especifica si el fichaje cuenta para el cómputo de horas laborales. Tipo de marcaje: Clasificación del fichaje, como descanso, almuerzo, etc. Borrar: Opción para eliminar un fichaje en caso de error.

Ofrece un resumen detallado de los registros de entrada y salida de cada trabajador, permitiendo evaluar la precisión y consistencia de los fichajes.

- Parámetros principales del informe: Total de fichajes: Número total de registros realizados por el trabajador. Fichajes por petición: Cantidad de fichajes añadidos mediante solicitudes del empleado. Total de fichajes automáticos: Registros generados automáticamente por sistemas de fichaje. Total de fichajes manuales: Número de fichajes introducidos manualmente por el administrador. Fichajes sin cerrar: Registros incompletos, como entradas sin salidas o viceversa. Porcentaje de fichajes no automáticos: Proporción de fichajes que han sido modificados por el administrador o mediante solicitudes de modificación.

Proporciona un resumen de las incidencias registradas en el control de presencia.

- Características principales: Filtros personalizables: Permite seleccionar rangos de fechas específicos y filtrar por uno o varios trabajadores y localizaciones, facilitando un análisis detallado.
- Parámetros del informe: Alerta: Descripción de la incidencia detectada. Total: Número de veces que se ha producido cada tipo de alerta.

Proporciona un resumen de las incidencias registradas en el control de presencia mostrando el total de veces que las ha infringido cada trabajador.

- Principales datos proporcionados: Trabajador: Muestra el nombre del empleado. ID Empleado: Identificador único del trabajador, configurable en su perfil. Alerta: Descripción de la incidencia detectada. Total: Número de veces que se ha producido cada tipo de alerta.

Ofrece una representación gráfica mensual que compara las horas planificadas (computadas) con las horas efectivamente trabajadas (fichadas) por los empleados.

- Elementos clave del informe: Barras verticales azules: Indican las horas computadas de los turnos y horas planificadas para cada día. Línea negra: Representa las horas trabajadas registradas mediante fichajes diarios.
- Opciones de filtrado: Equipo completo: Visualizar las horas de todo el equipo sin aplicar filtros. Localización: Filtrar por una o varias ubicaciones específicas. ID de empleado: Mostrar datos de trabajadores con un ID específico en su perfil. Estado del cuadrante: Filtrar por trabajadores con cuadrantes cerrados, validados o descargados para nóminas. Empleado individual: Buscar por nombre, correo electrónico o ID de empleado para analizar datos de un trabajador en particular.

Muestra el estado del acumulado de horas centrándose en las localizaciones.

- Principales datos proporcionados: Localización: Ubicación asociada al fichaje. Acumulado positivo: Tiempo fichado que se ha trabajado adicionalmente a lo planificado. Acumulado negativo: Tiempo planificado que no se ha fichado.
- Opciones de filtrado: Empleado individual: Buscar por nombre, correo electrónico o ID de empleado para analizar datos de un trabajador en particular. Localización: Filtrar por una o varias ubicaciones específicas.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
