---
schemaVersion: "1.0"
contentId: "gestion-de-personal-2-2-conceptos-que-operan-entre-conceptos"
title: "Conceptos que operan entre conceptos"
description: "Estos conceptos permiten realizar operaciones de suma, resta, multiplicación o división entre conceptos comunes creados previamente."
contentType: concept
module: "Gestión de personal"
submodule: "Altas y bajas"
intent: "Conceptos que operan entre conceptos"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "conceptos"
    label: "Conceptos"
  - id: "entre"
    label: "Entre"
  - id: "operan"
    label: "Operan"
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - "https://manual.aturnos.com/knowledgebase/2-2-conceptos-que-operan-entre-conceptos/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-2-conceptos-que-operan-entre-conceptos/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre conceptos que operan entre conceptos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  contentHash: "f9eb8545e02193956817bcade62016bc5ec4773ee93473f5643c218667d31b7f"
  migratedAt: 2026-08-17
---
## Resumen

Estos conceptos permiten realizar operaciones de suma, resta, multiplicación o división entre conceptos comunes creados previamente.

## Contenido

Uno de los usos más frecuentes de estos es, por ejemplo, cuando en un equipo tenemos que diferenciar a unos trabajadores a los que no se abona el plus nocturno porque tienen la consideración de “fijos de noche” y lo perciben como fijo en la nómina, de aquellos a los que hay que abonarle el número de horas nocturnas realizadas por no tener la condición de “fijos de noche”

En estos casos, se debe crear un dato personalizado, con el nombre “No Fijo Noche” e informar a los trabajadores que tienen que perciben el plus con valor 1.

El concepto de pago será el resultado de multiplicar el concepto “horas nocturnidad en el día de inicio” x el dato personalizado, de forma que el concepto solo se calculará si el trabajador tiene el campo indicado con valor 1.

Otro de los usos habituales es cuando, por ejemplo, la realización de un determinado tipo de turno (para los que utilizamos los conceptos tipo 4) no tiene que devolver una unidad sino un valor distinto, 0,5, por ejemplo.

A continuación, se explica paso a paso un caso de uso, en el que se calcula el concepto “horas nocturnidad en el día de inicio” por el dato personalizado “No Fijo Noche” para el abono de los pluses nocturnos.

1.- Crear el dato personalizado, en este caso, NO_FIJO_NOCHE. Consulta en el Manual como crear un dato personalizado en el siguiente enlace Manual Datos personalizados

2.- Crear el concepto que recupera el valor del Dato Personalizado informando:

- Concepto: Nombre identificativo. Es obligatorio informar este campo.
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Tipo de dato: Seleccionar el dato personalizado creado. Los datos personalizados son conceptos tipo 6.
- Localización: Selecciona “Todas las localizaciones”.
- Localización (por defecto) del trabajador: Por defecto “Todas las localizaciones” a no ser que se desee filtrar por alguna localización en concreto.

3.- Crear el concepto común de nómina que recupera el número de horas nocturnas en el día de inicio.

- Concepto: Nombre identificativo. Es obligatorio informar este campo, en este ejemplo “3000 horas nocturnidad”
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Tipo de dato: Seleccionar el concepto 1.2.21 en este ejemplo.
- Localización: Selecciona “Todas las localizaciones”, a no ser que se desee filtrar por la localización del turno/horas planificadas.
- Localización (por defecto) del trabajador: Por defecto “Todas las localizaciones”, a no ser que se desee filtrar por alguna localización en concreto.
- Categoría: Por defecto “Todas las categorías”

4.- Crear el concepto que opera entre conceptos indicando:

- Concepto: Indicando en este caso, el concepto “3000”, que coincide con el código del software de nómina que realiza el cálculo. Es obligatorio informar este campo.
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Seleccionar el tipo de dato, en este caso, el concepto “Operar entre conceptos”.
- Localización. Se debe informar “Todas las localizaciones”
- Localización por defecto del trabajador: Se debe informar “Todas las localizaciones”
- Operador: las opciones permitidas son: Sumar Restar Multiplicar, en este caso, es la operación seleccionada. Dividir
- Conceptos: Seleccionar el primer multiplicador, en este ejemplo, el concepto “3000 horas nocturnidad”, añadir como “concepto seleccionado para operar”
- Conceptos: Seleccionar el segundo multiplicador, en este ejemplo, el dato personalizado NO_FIJO_NOCHE”, añadir como “concepto seleccionado para operar”

El dato personalizado tiene la función de activador del pago, sí está informado en el perfil del trabajador con el valor correspondiente, en este caso un 1, calcula el concepto.

Otro uso frecuente es cuando hay que restar horas de un determinado turno de un concepto común, por ejemplo, en el caso de las guardias.

Habitualmente las guardias de 24 horas se abonan en un concepto distinto (el de guardia), pero para la aplicación un turno de 24 horas tiene al menos 10 horas nocturnas, de forma que este turno de 24 horas generaría los dos conceptos.

La parametrización a realizar en la aplicación sería la siguiente:

1.- Crear el concepto que abona las horas de guardia presencial, en este ejemplo, el concepto 1.2.38. Algunos conceptos comunes de nómina están asociados al módulo de control de presencia, como es el caso del concepto que recupera las horas de guardias presenciales.

2.- Crear el concepto que opera entre conceptos que restará del concepto horas nocturnidad en el día de inicio las horas de guardia presenciales

- Concepto: Indicando en este caso, el concepto “3000”, que coincide con el código del software de nómina que realiza el cálculo. Es obligatorio informar este campo.
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Seleccionar el tipo de dato, en este caso, el concepto “Operar entre conceptos”.
- Localización. Se debe informar “Todas las localizaciones”
- Localización por defecto del trabajador: Se debe informar “Todas las localizaciones”
- Operador: las opciones permitidas son: Sumar Restar, en este caso, es la operación seleccionada. Multiplicar Dividir
- Conceptos: Seleccionar el primer multiplicador, en este ejemplo, el concepto “3000 horas nocturnidad”, y añadirlo como “concepto seleccionado para operar”
- Conceptos: Seleccionar el segundo multiplicador, en este ejemplo, concepto “K385”, y añadirlo como “concepto seleccionado para operar”
- Forzar valores negativos a cero: Se aconseja marcar a SI esta opción para que no devuelva valores negativos.

En este ejemplo, se multiplica el concepto “Turnos N12” (que recupera el número de turnos de este tipo que el trabajador tenga planificados) por un valor fijo, 0,5. Cada turno planificado N12 tiene valor 0,5.

1.- Crear campo fijo accede a ADMINISTRAR → NOMINAS → PLANTILLA DE NÓMINA y sigue las instrucciones del Manual Creación de campo fijo

Una vez creado el campo fijo y creado el concepto de cálculo que recupera el número de turnos N12. En este enlace se visualiza el proceso. Conceptos tipo 4, se crea el concepto que opera entre conceptos.

- Concepto: “Multiplica los turnos N12 por un valor fijo 0,5”. Es obligatorio informar este campo.
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Seleccionar el tipo de dato, en este caso, el concepto “Operar entre conceptos”.
- Localización. Se debe informar “Todas las localizaciones”
- Localización por defecto del trabajador: Se debe informar “Todas las localizaciones”
- Operador: las opciones permitidas son: Sumar Restar Multiplicar, en este caso, es la operación seleccionada. Dividir
- Conceptos: Seleccionar el primer multiplicador, en este ejemplo, el concepto “Turnos N12”, y añadirlo como “concepto seleccionado para operar”
- Conceptos: Seleccionar el segundo multiplicador, en este ejemplo, campo fijo “Valor 0,5”, y añadirlo como “concepto seleccionado para operar”

Recordad que para que el concepto creado se visualice en la estadística se debe añadir como concepto de nómina, acceded a ADMINISTRAR → NOMINA → CONCEPTOS DE NÓMINA
