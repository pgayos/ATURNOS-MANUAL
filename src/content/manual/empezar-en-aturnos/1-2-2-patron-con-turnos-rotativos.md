---
schemaVersion: "1.0"
contentId: empezar-en-aturnos-1-2-2-patron-con-turnos-rotativos
title: "Patrón con turnos rotativos"
description: "Cómo funcionan los patrones rotativos, en los que los trabajadores cambian de turno de forma periódica."
contentType: concept
module: "Empezar en aTurnos"
submodule: "Comienza en aTurnos"
subtopic: "Empieza a planificar"
intent: "Patrón con turnos rotativos"
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
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-2-planificar/1-2-2-turnos-rotativos-1/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-2-planificar/1-2-2-turnos-rotativos-1/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre patrón con turnos rotativos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-2-planificar/1-2-2-turnos-rotativos-1/
  redirectFrom:
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-2-planificar/1-2-2-turnos-rotativos-1/
  contentHash: "9376cbaf18f51461973a2b48feba1411d0fdd6dcc2a8b66910774e72c3c3df68"
  migratedAt: 2026-09-08
labels:
  - PENDIENTE
order: 3
---

## Resumen

Los turnos rotativos implican que los trabajadores cambian de turno de forma periódica. Por ejemplo, un patrón rotativo podría ser una semana de turno de mañana, otra de tarde y otra de noche.

### Cómo funciona un patrón rotativo

- Si se aplica a 3 (o cualquier múltiplo de tres) trabajadores durante un periodo mayor a una semana, cada trabajador comenzará con un turno distinto y cambiará al siguiente al finalizar. Por ejemplo:
  - El Trabajador 1 empieza con turno de mañana, luego pasa a tarde la siguiente semana, y a noche la semana posterior. Este ciclo se repite.
  - El Trabajador 2 comienza con turno de tarde, luego noche, y después mañana, siguiendo el mismo ciclo.
- Si se aplica a 3 trabajadores durante una sola semana, el patrón no rota. El Trabajador 1 solo hará turnos de mañana, el Trabajador 2 solo de tarde, y el Trabajador 3 solo de noche. Después de la primera semana, el patrón termina.

**Planificación sin rotación:** Si se desea que cada trabajador mantenga el mismo turno sin rotar durante un periodo prolongado, es necesario asignar un patrón específico a cada uno. Utilizando la función **“Exportar a otro patrón”**, el patrón actual puede dividirse y aplicarse a cada trabajador de manera individual. Esto equivale a planificar con **patrones fijos**.

![Imagen patrón día](/media/manual/1-2-2-patron-con-turnos-rotativos-88fda52666.png)

Una vez se tiene una idea del patrón que se quiere crear, los pasos para materializarlo son los siguientes:

1. Crea los turnos desde Planificador > Tipos de turno. ([Ver Manual Tipos de turno](https://manual.aturnos.com/Manual/b-listado-tipo-de-turno/))
2. Crea patrón desde Planificador > Patrones. ([Ver Manual Añadir/Editar Patrón](https://manual.aturnos.com/anadir-editar-patron-de-turnos-2/))
3. Aplicar el patrón al cuadrante. [(Ver explicación en el Manual)](https://manual.aturnos.com/Manual/1-aplicar-patron/)
