---
schemaVersion: "1.0"
contentId: gestion-de-personal-8-1-ejemplos-practicos
title: Ejemplos Prácticos
description: Para obtener la variables de un trabajador para realizar el finiquito:.
contentType: concept
module: Gestión de personal
submodule: Contratos
intent: Ejemplos Prácticos
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: ejemplos
    label: Ejemplos
  - id: practicos
    label: Practicos
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
    - https://manual.aturnos.com/knowledgebase/8-1-ejemplo/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/8-1-ejemplo/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre ejemplos Prácticos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 10
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/8-1-ejemplo/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/8-1-ejemplo/
  contentHash: 6c14b4f1bca063656e3b2ca2e404241ad28e7fbf5681d5c72a9fbb429244dd2b
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Para obtener la variables de un trabajador para realizar el finiquito:.

## Qué debes saber
1.- Informar la fecha de baja en el perfil del trabajador

2.- Guardar la modificación efectuada para que se actualicen los datos, al aceptar al informar la fecha de baja, la aplicación pregunta si se deben recalcular las horas a trabajar, es decir, el trabajador que fue alta el 01/09 hasta fin de año debía hacer unas horas, al terminar su contrato el 25/10, las horas a realizar son menos, por tanto si se deben “Calcular automáticamente”

3.- Informa en el apartado “Nómina” del perfil del trabajador la fecha de cierre de cuadrante.

4.- Solo se exportaran los datos hasta la fecha de cierre de cuadrante, en este ejemplo, los conceptos de nómina a abonar hasta el 25/10/2020.

5.- Ejecutar el proceso de exportación a nóminas.

Una empresa quiere contabilizar todos los turnos entrantes en Fin de Semana (Sábado y Domingo), entendiendo como turnos entrantes, todos aquellos que comienza dentro del día natural correspondiente.

Ahora, hemos de configurar nuestros conceptos de cálculo.

1.- PLUS SÁBADO. Contabilizamos los turnos entrantes en Sábado.

2.- PLUS DOMINGO. Contabilizamos los turnos entrantes en Domingo

3.- PLUS FIN DE SEMANA. Sumamos los conceptos PLUS SÁBADO y PLUS DOMINGO.

4.- Ya tenemos los tres conceptos de cálculo necesarios:

5.- Una vez definidos nuestros conceptos de cálculo, publicamos el Concepto en nómina requerido para proceder a la exportación de las variables.

A continuación, se explica paso a paso un caso de uso, en el que se calcula el concepto “horas nocturnidad en el día de inicio” por el dato personalizado “No Fijo Noche” para el abono de los pluses nocturnos.

1.- Crear el dato personalizado, en este caso, NO_FIJO_NOCHE. Consulta en el Manual como crear un dato personalizado en el siguiente enlace https://manual.aturnos.com/Manual/a-datos-personalizados/

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

El dato personalizado tiene la función de activador del pago, si está informado en el perfil del trabajador con el valor correspondiente, en este caso un 1, calcula el concepto.

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

Este tipo de conceptos (que operan entre conceptos) además de realizar las operaciones entre conceptos ya creados, puede realizar estas mismas operaciones sobre valores fijos que se definen en las plantillas de nómina del punto 4 de este Manual.

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
- Descripción: Texto explicativo del concepto. No es obligatorio, pero es aconsejable informar una explicación del concepto..
- Seleccionar el tipo de dato, en este caso, el concepto “Operadores de comparación”.
- Localización. Se debe informar “Todas las localizaciones”
- Localización por defecto del trabajador: Se debe informar “Todas las localizaciones”
- Tipo: Las opciones permitidas son: Concepto, cuando el primer comparador es un concepto previamente calculado, como es este caso de uso. En este caso se selecciona el concepto creado anteriormente Campo fijo, cuando el primer comparador es un valor fijo
- Operador: las opciones permitidas son: Igual que Mayor que Mayor o igual que, que es la opción seleccionada en este supuesto. Menor que Menor o igual que Distinto a
- Tipo: Las opciones permitidas son: Concepto, cuando el segundo comparador es un concepto previamente calculado. Campo fijo, cuando el segundo comparador es un valor fijo, como es este caso de uso.
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

6.- Para el concepto 3K00 (horas nocturnas menores a 10), el concepto que opera entre conceptos multiplicará el concepto “3000 – 3K00 horas de nocturnidad en el día de inicio” x “3K00 – las horas de nocturnidad en el día de inicio son menores a 10””, es decir multiplica por el activador creado en el punto 4.

- Concepto: Indicando en este caso, el concepto “3K00”, que coincide con el código del software de nómina que realiza el cálculo. Es obligatorio informar este campo.
- Descripción: Breve resumen explicativo, si fuera necesario. No es obligatorio informar este campo.
- Seleccionar el tipo de dato, en este caso, el concepto “Operar entre conceptos”.
- Localización. Se debe informar “Todas las localizaciones”
- Localización por defecto del trabajador: Se debe informar “Todas las localizaciones”
- Operador: las opciones permitidas son: Sumar Restar Multiplicar, en este caso, es la operación seleccionada. Dividir
- Conceptos: Seleccionar el primer multiplicador, en este ejemplo, el concepto “3000 – 3K00 horas nocturnidad en el día de inicio”, añadir como “concepto seleccionado para operar”
- Conceptos: Seleccionar el segundo multiplicador, en este ejemplo, el concepto 3K00 – las horas de nocturnidad en el día de inicio son menores a 10”, es decir el activador creado.
