---
schemaVersion: "1.0"
contentId: planificacion-guia-uso-avanzado-del-cuadrante-para-administradores
title: Uso avanzado del cuadrante para administradores
description: El cuadrante de planificación es una herramienta versátil diseñada para optimizar la gestión de horarios y tareas en tu equipo.
contentType: reference
module: Planificación
submodule: Turnos y cuadrantes
intent: Uso avanzado del cuadrante
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
  reviewedAt: 2025-02-14
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/crear-y-asignar-turnos/uso-avanzado-del-cuadrante/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre uso avanzado del cuadrante para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/crear-y-asignar-turnos/uso-avanzado-del-cuadrante/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/crear-y-asignar-turnos/uso-avanzado-del-cuadrante/
  contentHash: b5752aaa97ec1e39727c7bc2ccc83db63041cedee44151b3bc3696f56f3658e1
  migratedAt: 2026-08-18
---
## Resumen

El cuadrante de planificación es una herramienta versátil diseñada para optimizar la gestión de horarios y tareas en tu equipo. Además de planificar y modificar turnos, permite realizar operaciones avanzadas como reemplazar turnos, cambiar localizaciones, gestionar sustituciones, copiar/pegar días y extender planificaciones. A continuación, te explicamos cada funcionalidad en detalle para que puedas aprovechar todo su potencial.

### Introducción

## 1. Reemplazar Turnos

Permite sustituir un tipo de turno por otro en un período específico de tiempo, ideal para ajustes masivos en la planificación.

Cómo usarlo:

- En el Cuadrante, h az clic sobre el trabajador correspondiente en el cuadrante.
- Selecciona la opción «Reemplazar turnos».
- Define las fechas de inicio y fin del cambio.
- Selecciona el turno actual que deseas reemplazar y el nuevo turno que lo sustituirá.
- Haz clic en «Guardar» para aplicar los cambios.

Ejemplo:

Un trabajador tiene los turnos «M T M M T». Si deseas reemplazar «M» por «M2», selecciona «M» como turno actual y «M2» como nuevo turno. Al guardar, el cuadrante se actualizará a: «M2 T M2 M2 T».

## 2. Cambiar Localizaciones

Te permite actualizar la localización predeterminada de un trabajador y la asignada a sus turnos, ideal para reflejar cambios en ubicaciones de trabajo.

Cómo usarlo:

- En el Cuadrante, h az clic en el nombre del trabajador.
- Para cambiar la localización del trabajador: selecciona la opción «Localización por defecto» y ajusta según sea necesario.
- Para cambiar las localizaciones de los turnos: selecciona «Modificar las localizaciones» y actualiza la información.

## 3. Sustituciones

Facilita la asignación de un trabajador sustituto en lugar de otro, permitiendo copiar, mover o intercambiar turnos entre ellos.

Cómo usarlo:

En el Cuadrante, h az clic en el trabajador a sustituir y selecciona «Sustituciones».

- Completa los campos necesarios: Fecha: Período de vigencia de la sustitución. Trabajador a sustituir: Se completa automáticamente desde el cuadrante. Acción: Decide entre copiar, intercambiar o mover turnos. Trabajador sustituto: Selecciona al trabajador que asumirá los turnos. Haz clic en «Guardar».

Nota: La lista en la parte inferior de la pantalla muestra los trabajadores disponibles, facilitando la asignación del sustituto.

## 4. Copiar y Pegar Días

Permite replicar fácilmente la planificación de un día o de un turno específico en otras fechas o celdas.

Cómo usarlo:

Para copiar un día completo:

- Haz clic en la celda de la fecha (por ejemplo, L17).
- Selecciona «Copiar día» en el menú.
- Haz clic en la celda del día destino (por ejemplo, M18) y selecciona «Pegar día «, la planificación se replicará para todos los trabajadores.

Para copiar un día específico y asignarlo únicamente a una persona:

- Haz clic en la celda del turno y selecciona «Copiar día «.
- Haz clic en la celda que deseas pegarlo y selecciona «Pegar día «.

## 5. Extender Planificación

Te permite continuar una planificación existente durante un período determinado, ideal para repetir patrones de trabajo.

Cómo usarlo:

- En el Cuadrante, h az clic en el botón de configuración (rueda dentada) del cuadrante y selecciona «Extender planificación».
- Configura los parámetros necesarios:
- Comenzar desde inicio de patrón: Define si los turnos deben iniciar desde el primer día del patrón.
- Hasta final de mes: Extiende hasta el fin del mes o dentro de fechas específicas.
- Vacaciones, absentismos: Indica si respetar o modificar estos eventos.
- Fecha de fin: Define el límite de la extensión.
- Haz clic en «Guardar» para aplicar los cambios.

## 6. Borrar Cuadrante

Elimina completamente la planificación en el rango de fechas indicado, permitiendo empezar desde cero.

Cómo usarlo:

- En el Cuadrante, h az clic en el botón de configuración del cuadrante y selecciona «Borrar cuadrante».
- Configura las opciones necesarias: Fecha de inicio y fin: Define el período a borrar. Trabajadores: Selecciona a quiénes se aplicará. Tipos de turnos, horas, vacaciones: Decide qué eliminar específicamente. Haz clic en «Guardar» para aplicar.
