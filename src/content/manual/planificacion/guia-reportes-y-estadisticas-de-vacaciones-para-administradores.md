---
schemaVersion: "1.0"
contentId: planificacion-guia-reportes-y-estadisticas-de-vacaciones-para-administradores
title: Reportes y estadísticas de vacaciones para administradores
description: aTurnos facilita la gestión y visualización de las vacaciones para administradores y trabajadores, proporcionando herramientas avanzadas para analizar saldos, balances y periodos vacacionale.
contentType: reference
module: Planificación
submodule: Vacaciones
intent: Reportes y estadísticas de vacaciones
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
  reviewedAt: 2025-08-06
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-vacaciones/reportes-vac/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre reportes y estadísticas de vacaciones para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
labels:
  - PENDIENTE
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-vacaciones/reportes-vac/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-vacaciones/reportes-vac/
  contentHash: aae5025a81849b97037bb1f3dd33672de6f2a95421b0e15c667890d409edec73
  migratedAt: 2026-08-18
order: 1
---
## Resumen

aTurnos facilita la gestión y visualización de las vacaciones para administradores y trabajadores, proporcionando herramientas avanzadas para analizar saldos, balances y periodos vacacionales. A continuación, detallamos las principales funciones disponibles.

### 1. Estadísticas Básicas de Vacaciones

Para consultar los saldos de vacaciones de todos los trabajadores e identificar rápidamente posibles desajustes o excedentes.

- Ve a Estadísticas → Estadísticas por defecto → Vacaciones.
- Visualiza el estado de los saldos: Texto en rojo: Indican trabajadores que están superando su saldo vacacional permitido. Texto en negro: El saldo vacacional está a 0 o aún quedan días por disfrutar.

### 2. Reportes por Trabajador

El administrador puede configurar reportes detallados que incluyan múltiples variables, no solo relacionadas con vacaciones.

Configuraciones de los reportes

En estos reportes se puede configurar:

- Fecha: Indica las fechas de las que quieres extraer la información.
- Variables: Indica qué tipo de información quieres extraer: Saldos vacacionales, horas planificadas, ausencias, balances, entre otras.
- Formatos de vista: Diaria: Ideal para seguimiento detallado. Mensual o anual: Para análisis a largo plazo. Por periodo: Selecciona un rango de fechas específico.
- Cuadrante: Elige de qué cuadrante quieres extraer la información.

Cómo generar un reporte personalizado:

Obtén una visión integral del rendimiento y la planificación de cada trabajador.

- Accede a Estadísticas → Reportes por trabajador.
- Selecciona las variables que deseas incluir.
- Elige el formato de vista y el periodo de tiempo.
- Genera y exporta el reporte si es necesario.

### 3. Información de Vacaciones en Diferentes Equipos

Esta función es especialmente útil para administradores que gestionan trabajadores asignados a varios equipos. No obstante, solo se puede acceder a ella con el rol superusuario.

Qué información se puede consultar:

Simplifica la gestión de trabajadores que colaboran en varios equipos, permitiendo un análisis rápido y completo.

- Horas planificadas: Visualización del total de horas trabajadas en cada equipo.
- Vacaciones y balances: Saldos vacacionales acumulados en todos los equipos.
- Distribución anual: Detalle de dónde y cómo ha sido planificado el trabajador a lo largo del año.

### 4. Información Detallada por Periodos

Desde el perfil del trabajador, puedes consultar:

- Tiempos relacionados con vacaciones: Días pendientes, balances anuales y ajustes realizados.
- Horas de contrato: Total de horas asignadas en el contrato.
- Horas planificadas: Registro de las horas ya programadas.
- Cálculo estimado: Proyección de las horas totales que trabajará el empleado en el año.

Dependiendo de la configuración, tanto administradores como trabajadores pueden visualizar:

- Vacaciones anuales: Tiempos y balances de vacaciones acumulados.
- Distribución por años: Análisis de los periodos planificados en un año específico.

### 5. Periodos de Vacaciones

Este registro proporciona una tabla clara y estructurada con información mensual sobre los periodos de vacaciones planificados:

- Columna «Inicio»: Indica el primer día del periodo vacacional.
- Columna «Fin»: Indica el último día del periodo, ambos inclusive.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
