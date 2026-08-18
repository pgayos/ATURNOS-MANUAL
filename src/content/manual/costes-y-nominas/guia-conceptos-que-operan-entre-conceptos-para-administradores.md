---
schemaVersion: "1.0"
contentId: "costes-y-nominas-guia-conceptos-que-operan-entre-conceptos-para-administradores"
title: "Conceptos que operan entre conceptos para administradores"
description: "Aprende a conceptos que operan entre conceptos para administradores, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Costes y nóminas"
submodule: "Nóminas"
intent: "Conceptos que operan entre conceptos"
audience:
  - role: "Administrador"
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: 2026-01-27
  reviewDueAt: null
  sourceUrls:
    - "https://guias.aturnos.com/guias/otros-recursos-disponibles/nominas/conceptos-que-operan-entre-conceptos/"
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo puedo conceptos que operan entre conceptos para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
---
## Resumen

Esta opción sirve para crear un concepto “final” a partir de otros conceptos que ya existen, haciendo una operación sencilla: sumar, restar, multiplicar o dividir. Dicho de forma simple: es como una “calculadora” dentro del sistema, pero en vez de números sueltos, usa conceptos.

### Introducción

Su utilidad principal es que te permite automatizar reglas de nómina sin hacer cálculos a mano. Así evitas errores y ahorras tiempo cuando hay casos especiales: personas que sí cobran un plus y otras que no, turnos que deben contar “media unidad”, o situaciones donde un mismo turno podría generar dos pagos y hay que corregirlo.

- Dónde se configura: al crear un concepto, en el campo “Tipo de dato” eliges “Operar entre conceptos” (esta opción aparece antes de los conceptos del grupo 1).

### Configuración

La lógica siempre es la misma:

1. Tener creados los conceptos “base” (por ejemplo, horas nocturnas, guardias, turnos).
2. Crear el concepto final seleccionando “Operar entre conceptos” y diciendo qué operación quieres hacer.

Cuando crees un “concepto que opera entre conceptos”, revisa estos datos:

- Concepto: el nombre o código con el que lo reconocerás (obligatorio).
- Descripción: una frase corta para recordar para qué sirve (recomendado).
- Tipo de dato: seleccionar “Operar entre conceptos”.
- Localización / Localización (por defecto) del trabajador: normalmente “Todas las localizaciones”.
- Operador: elegir la operación (Sumar, Restar, Multiplicar o Dividir).
- Conceptos: aquí eliges los 2 conceptos (o valores) que van a participar en la operación.
- Forzar valores negativos a cero (si aparece): muy útil en restas para que el resultado no quede en negativo.

Importante: para verlo en la estadística, recuerda añadirlo en Administrar → Nómina → Conceptos de nómina.

Ejemplo: Operación multiplicación.

A continuación, se explica paso a paso un caso de uso, en el que se calcula el concepto “horas nocturnidad en el día de inicio” por el dato personalizado “No Fijo Noche” para el abono de los pluses nocturnos.

1. Crear el dato personalizado, en este caso, NO_FIJO_NOCHE.
2. Crear el concepto que recupera el valor del Dato Personalizado (los del grupo 6) informando:

- Concepto: Nombre identificativo. Es obligatorio informar este campo.
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Tipo de dato: Seleccionar el dato personalizado creado. Los datos personalizados son conceptos tipo 6.
- Localización: Selecciona “Todas las localizaciones”.
- Localización (por defecto) del trabajador: Por defecto “Todas las localizaciones” a no ser que se desee filtrar por alguna localización en concreto.

3. Crear el concepto común de nómina que recupera el número de horas nocturnas en el día de inicio (1.2.21).

- Concepto: Nombre identificativo. Es obligatorio informar este campo, en este ejemplo “3000 horas nocturnidad”
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Tipo de dato: Seleccionar el concepto 1.2.21 en este ejemplo.
- Localización: Selecciona “Todas las localizaciones”, a no ser que se desee filtrar por la localización del turno/horas planificadas.
- Localización (por defecto) del trabajador: Por defecto “Todas las localizaciones”, a no ser que se desee filtrar por alguna localización en concreto.
- Categoría: Por defecto “Todas las categorías”

4. Crear el concepto que opera entre conceptos indicando:

- Concepto: Indicando en este caso, el concepto “3000”, que coincide con el código del software de nómina que realiza el cálculo. Es obligatorio informar este campo.
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Seleccionar el tipo de dato, en este caso, el concepto “Operar entre conceptos”.
- Localización. Se debe informar “Todas las localizaciones”
- Localización por defecto del trabajador: Se debe informar “Todas las localizaciones”
- Operador: las opciones permitidas son: Sumar Restar Multiplicar, en este caso, es la operación seleccionada. Dividir
- Conceptos: Seleccionar el primer multiplicador, en este ejemplo, el concepto “3000 horas nocturnidad”, añadir como “concepto seleccionado para operar”
- Conceptos: Seleccionar el segundo multiplicador, en este ejemplo, el dato personalizado NO_FIJO_NOCHE”, añadir como “concepto seleccionado para operar”

El dato personalizado tiene la función de activador del pago, sí está informado en el perfil del trabajador con el valor correspondiente, en este caso un 1, calcula el concepto.
