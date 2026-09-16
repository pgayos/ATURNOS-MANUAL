---
schemaVersion: "1.0"
contentId: gestion-de-proyectos-3-analisis-funcional
title: "Análisis Funcional"
description: "Qué es el análisis funcional y por qué es el punto de partida de todo proyecto de implantación de aTurnos."
contentType: concept
module: "Gestión de proyectos"
submodule: "Análisis Funcional"
intent: "Análisis Funcional"
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
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/documentation/1-analisis-funcional/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/1-analisis-funcional/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre análisis Funcional?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/documentation/1-analisis-funcional/
  redirectFrom:
    - https://manual.aturnos.com/documentation/1-analisis-funcional/
  contentHash: "fbc51b105e640348cdd7343136738cc691e02260c5ca288ff1e5a9a5c4a5a477"
  migratedAt: 2026-09-17
labels:
  - PENDIENTE
order: 1
---

## Resumen

El análisis funcional es el inicio de todo proyecto, nos permite sentar las bases para el posterior desarrollo de los procesos y adaptación de nuestro sistema, dejando el producto lo más próximo posible a lo que los usuarios necesitan y demandan.

## Procedimiento

Es vital contar con un buen análisis funcional para el éxito del proyecto, en él se define el alcance que tendrá la herramienta así como las responsabilidades de cada una de las partes implicadas, ya que el proyecto prosperará con la implicación de sus usuarios, resaltando las funcionalidades que se utilizarán según los requerimientos del cliente y precisando cómo será el flujo de la información en relación a peticiones y variables para nómina (por ejemplo, solicitud y aprobación de peticiones como vacaciones y permisos como el de matrimonio, etc).

En este punto se busca aclarar a los implicados ***¿Qué van a hacer en aTurnos y cómo lo van a hacer?***

Podemos resumir la **información que contiene el diseño del análisis funcional** en los siguientes puntos:

1. Estructura organizativa del cliente en aTurnos
2. Maestro de empleados y su mantenimiento: gestión de personal y nómina, dependerá de la integración o no del sistema de nómina del cliente.
3. Definición de turnos, absentismos y restricciones de trabajo, así como su mantenimiento.
4. Planificación, mandos que accederán a crear, editar o modificar los cuadrantes o agendas. Uso de módulos adicionales como: Control de presencia, Operaciones, Costes, Tareas, entre otros.
5. Operaciones diarias.
6. Exportación a nóminas.

![](/media/manual/3-analisis-funcional-83788c4054.png)

Para establecer el rango de acción de cada uno de los involucrados se deben conocer previamente las necesidades generales del cliente tanto a nivel del área Operativa como de RRHH, así como las necesidades específicas de cada uno de sus equipos piloto, por ejemplo los relacionados con:

- Convenio colectivo: Horas anuales de contrato, días de vacaciones, categorías, horas extra anuales u otro tipo de horas, etc.
- Estructura organizativa (por departamento, centro de trabajo, entre otros)
- Planificación del trabajo: consideración o no de festivos, turnos y patrones de turno con los que trabajan, tipo de planificación (turnos fijos, rotativos, etc)
- Restricciones de trabajo (avisos de incumplimientos establecidos, por ejemplo: 12 horas entre turno y turno, no trabajar mas de “X” días seguidos, entre otros).
