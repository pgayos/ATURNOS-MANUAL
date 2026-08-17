---
schemaVersion: "1.0"
contentId: "recursos-y-partes-2-3-conceptos-comparacion"
title: "Conceptos comparación"
description: "Estos conceptos permiten realizar operaciones de comparación entre conceptos ya existentes o compararlos con un valor fijo que se define en las plantillas de nómina del punto 4 de este Manual."
contentType: concept
module: "Recursos y partes"
submodule: "General"
intent: "Conceptos comparación"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "comparacion"
    label: "Comparacion"
  - id: "conceptos"
    label: "Conceptos"
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
    - "https://manual.aturnos.com/knowledgebase/2-3-conceptos-de-comparacion/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/2-3-conceptos-de-comparacion/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre conceptos comparación?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  contentHash: "b257b6e5530264fdd13f115f6562e05feac45d39cade5b01e4fdbc85a82585ee"
  migratedAt: 2026-08-17
---
## Resumen

Estos conceptos permiten realizar operaciones de comparación entre conceptos ya existentes o compararlos con un valor fijo que se define en las plantillas de nómina del punto 4 de este Manual.

## Contenido

Las acciones de comparación permitidas son:

- Igual que
- Mayor que
- Mayor o igual que
- Menor que
- Menor o igual que
- Distinto a

El objetivo de estos conceptos es la de crear activadores inteligentes, para el abono de un concepto u otro cuando se cumple la condición indicada.

Continuando con el ejemplo anterior con respecto al abono de las horas nocturnas, imaginemos un convenio que establece que si las horas nocturnas son mayores o iguales a 10 se tienen que calcular en el código de concepto 3000 y si las horas nocturnas son menores a 10 se tienen que calcular en el código de concepto 3K00.

En este caso de uso, el concepto horas nocturnidad en el día de inicio tiene que compararse con un valor fijo, en este caso con 10 horas.

La parametrización en la aplicación debe ser la siguiente:

1.- Crear el valor de comparación, en este caso, el valor 10.

Para hacerlo se debe acceder ADMINISTRAR → NOMINAS → PLANTILLA DE NOMINA → CAMPO FIJO → Añadir

Importante: Los decimales en el campo valor se indican con un punto (no con una coma). Ejemplo Valor 0.142

Una vez creado el campo fijo con el valor de comparación se crea:

2.- El concepto común de nómina, en este caso, las horas de nocturnidad en el día de inicio:

- Concepto: Indicando en este caso, los dos conceptos implicados (es conveniente identificar los conceptos implicados para poder hacer búsquedas a través de los filtros. Es obligatorio informar este campo.
- Descripción: Texto explicativo del concepto. No es obligatorio, pero es aconsejable informar una explicación del concepto.
- Seleccionar el tipo de dato, en este caso, el concepto “Horas nocturnidad en el día de inicio”.
- Localización (del turno/horas planificadas): “Todas las localizaciones”.
- Localización por defecto del trabajador: “Todas las localizaciones”.
- Categoría: “Todas las categorías”.

3.- El concepto de comparación que comprueba si las horas de nocturnidad en el día de inicio son mayores o iguales a 10 horas nocturnas, es el activador cuando las horas nocturnas son mayores o iguales a 10.

- Concepto: Indicando en este caso, el concepto “3000 – las horas de nocturnidad en el día de inicio son mayores o iguales a 10”. Es obligatorio informar este campo.
- Descripción: Texto explicativo del concepto. No es obligatorio, pero es aconsejable informar una explicación del concepto.
- Seleccionar el tipo de dato, en este caso, el concepto “Operadores de comparación”.
- Localización. Se debe informar “Todas las localizaciones”
- Localización por defecto del trabajador: Se debe informar “Todas las localizaciones”
- Tipo: Las opciones permitidas son: Concepto, cuando el primer comparador es un concepto previamente calculado, como es este caso de uso. En este caso se selecciona el concepto creado anteriormente Campo fijo, cuando el primer comparador es un valor fijo
- Operador: las opciones permitidas son: Igual que Mayor que Mayor o igual que, es la opción seleccionada en este supuesto. Menor que Menor o igual que Distinto a
- Tipo: Las opciones permitidas son: Concepto, cuando el segundo comparador es un concepto previamente calculado.Campo fijo, cuando el segundo comparador es un valor fijo, como es este caso de uso.
- Valor Verdadero, en este caso valor 1, es decir, si las horas de nocturnidad en el día de inicio son mayores o iguales al valor indicado, devuelve un 1.
- Valor Falso, en este caso valor 0, es decir, si las horas de nocturnidad en el día de inicio son menores o no iguales al valor indicado, devuelve un 0.

4.- El concepto que comprueba si las horas de nocturnidad en el día de inicio son menores a 10 horas nocturnas, es el activador cuando las horas nocturnas son menores a 10.

- Concepto: Indicando en este caso, el concepto “3K00 – las horas de nocturnidad en el día de inicio son menores a 10”. Es obligatorio informar este campo.
- Descripción: Texto explicativo del concepto. No es obligatorio, pero es aconsejable informar una explicación del concepto.
- Seleccionar el tipo de dato, en este caso, el concepto “Operadores de comparación”.
- Localización. Se debe informar “Todas las localizaciones”
- Localización por defecto del trabajador: Se debe informar “Todas las localizaciones”
- Tipo: Las opciones permitidas son: Concepto, cuando el primer comparador es un concepto previamente calculado, como es este caso de uso. En este caso se selecciona el concepto creado anteriormente Campo fijo, cuando el primer comparador es un valor fijo
- Operador: las opciones permitidas son: Igual que Mayor que Mayor o igual que Menor que, es la opción seleccionada en este supuesto. Menor o igual que Distinto a
- Tipo: Las opciones permitidas son: Concepto, cuando el segundo comparador es un concepto previamente calculado. Campo fijo, cuando el segundo comparador es un valor fijo, como es este caso de uso.
- Valor Verdadero, en este caso valor 1, es decir, si las horas de nocturnidad en el día de inicio son menores al valor indicado, es decir al valor 10, devuelve un 1.
- Valor Falso, en este caso valor 0, es decir, si las horas de nocturnidad en el día de inicio son mayores o no iguales al valor indicado, devuelve un 0.

5.- Para el concepto 3000 (horas nocturnas mayores o iguales a 10), el concepto que opera entre conceptos multiplicará el concepto “3000 – 3K00 horas de nocturnidad en el día de inicio” x “3000 – las horas de nocturnidad en el día de inicio son mayores a 10”, es decir multiplica por el activador creado en el punto 3.

- Concepto: Indicando en este caso, el concepto “3000”, que coincide con el código del software de nómina que realiza el cálculo. Es obligatorio informar este campo.
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Seleccionar el tipo de dato, en este caso, el concepto “Operar entre conceptos”.
- Localización. Se debe informar “Todas las localizaciones”
- Localización por defecto del trabajador: Se debe informar “Todas las localizaciones”
- Operador: las opciones permitidas son: Sumar Restar Multiplicar, en este caso, es la operación seleccionada. Dividir
- Conceptos: Seleccionar el primer multiplicador, en este ejemplo, el concepto “3000 – 3K00 horas nocturnidad en el día de inicio”, añadir como “concepto seleccionado para operar”
- Conceptos: Seleccionar el segundo multiplicador, en este ejemplo, el concepto 3000 – las horas de nocturnidad en el día de inicio son mayores a 10”, es decir el activador creado.

6.- Para el concepto 3K00 (horas nocturnas menores a 10), el concepto que opera entre conceptos multiplicará el concepto “3000 – 3K00 horas de nocturnidad en el día de inicio” x “3K00 – las horas de nocturnidad en el día de inicio son menores a 10” ”, es decir multiplica por el activador creado en el punto 4.

- Concepto: Indicando en este caso, el concepto “3K00”, que coincide con el código del software de nómina que realiza el cálculo. Es obligatorio informar este campo.
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Seleccionar el tipo de dato, en este caso, el concepto “Operar entre conceptos”.
- Localización. Se debe informar “Todas las localizaciones”
- Localización por defecto del trabajador: Se debe informar “Todas las localizaciones”
- Operador: las opciones permitidas son: Sumar Restar Multiplicar, en este caso, es la operación seleccionada. Dividir
- Conceptos: Seleccionar el primer multiplicador, en este ejemplo, el concepto “3000 – 3K00 horas nocturnidad en el día de inicio”, añadir como “concepto seleccionado para operar”
- Conceptos: Seleccionar el segundo multiplicador, en este ejemplo, el concepto 3K00 – las horas de nocturnidad en el día de inicio son menores a 10”, es decir el activador creado.

En el punto 8 de este Manual se ofrecen más ejemplos para una mayor facilidad en la parametrización
