---
schemaVersion: "1.0"
contentId: "costes-y-nominas-4-1-plantilla-de-nomina"
title: "Plantilla de nómina"
description: "Información sobre plantilla de nómina, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Costes y nóminas"
submodule: "General"
intent: "Plantilla de nómina"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Trabajador"
    access: applicable
  - role: "Desarrollador API"
    access: applicable
entities:
  - id: "nomina"
    label: "Nomina"
  - id: "plantilla"
    label: "Plantilla"
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
    - "https://manual.aturnos.com/knowledgebase/c-plantilla-de-nomina/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/c-plantilla-de-nomina/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre plantilla de nómina?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  contentHash: "b60f806098471409fa5f9267479150a5946b46384ac7aa8c12ef2b6b592a0144"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre plantilla de nómina, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Una vez creados los conceptos de nómina, se tiene que definir el formato del fichero de exportación, tanto en lo que se refiere a la configuración del fichero (formato de fecha y el modo de mostrar los conceptos) como a los campos clave (id empleado, código de concepto, cantidad, etc.) que precisa el fichero.

La configuración de la plantilla permite establecer unos valores por defecto cuando se ejecutan las estadísticas de nómina, tanto la estadística por periodo como la estadística diaria en lo que se refiere al formato (por líneas o por columnas), a través del campo “Modo de mostrar los conceptos”

El campo “Tipo de descarga” solo aplica a la estadística diaria donde se puede seleccionar si los conceptos de nómina se recuperan día a día o totalizados entre las fechas de la estadística.

A través de ADMINISTRAR → NOMINAS → PLANTILLAS DE NOMINA se accede a la parametrización

1.- Indicar el formato de fechas, las opciones disponibles son:

- d/m/Y – (10/02/2015)
- d-m-Y – (10-02-2015)
- dmY – (10022015)
- Y/m/d – (2015/02/10)
- Y-m-d – (2015-02-10)
- Ymd – (20150210)

2..- Indicar el modo de mostrar los conceptos, las opciones disponibles son:

- Conceptos en filas. El fichero no tiene cabeceras. Es el aconsejado cuando se ejecuta la estadística diaria. Ver en el Manual (Estadística diaria). Es el que se suele utilizar en la integración con el api. Ver en el Manual la integración (integración_api)

- Conceptos en columnas. El fichero tiene cabeceras en las columnas. Es el que se suele utilizar a través de ADMINISTRAR → NÓMINAS → EXPORTAR NOMINAS. Ver en el Manual (Exportar nóminas)

3.- Tipo de descarga en estadística diaria, aplica cuando se ejecuta desde ADMINISTRAR → NÓMINAS → ESTADISTICA DIARIA, las opciones disponibles son:

- Estadística diaria sin totalizar. Devuelve una fila por empleado, concepto, cantidad y día. Es la que se suele utilizar en las integraciones con el software de gestión de nómina que recupera a través de un api los valores de los empleados. En este ejemplo, se visualiza la estadística diaria de un trabajador, por filas, por trabajador, concepto, día y cantidad.

- Estadística diaria totalizada. Devuelve una fila por empleado, concepto y cantidad con la suma de todos los días. En este ejemplo se visualiza el valor por filas, por trabajador, concepto y cantidad total entre las fechas de ejecución de la estadística.

El valor indicado en el Modo de mostrar los conceptos es el que se recupera por defecto cuando:

1. Se exporta la nómina desde ADMINISTRAR → NOMINAS → EXPORTAR NÓMINAS. Ver en el Manual (Exportar nóminas)
2. Se ejecuta la estadística por periodo. Ver en el Manual (Estadística por periodo)
3. Se ejecuta la estadística diaria. Ver en el Manual (Estadística diaria)

El valor indicado en el Tipo de descarga es el que se recupera por defecto cuando:

1. Se ejecuta la estadística diaria. Ver en el Manual (Estadística diaria)

Definición de los campos necesarios del fichero de importación de variables del software de nómina

- Id aturno: Recupera el valor del id del equipo. Accede a ADMINISTRAR → AJUSTES → Pestaña → MODULOS. El valor es el aturno id.
- Nombre aTurno: Recupera el valor del nombre del equipo que genera variables del trabajador.
- ID Empleado: Recupera el valor del ID del empleado informado en el perfil del trabajador. Suele ser obligatorio.
- Id externo: Recupera el valor del id del equipo. Accede a ADMINISTRAR → AJUSTES → Pestaña → DATOS DEL EQUIPO. El valor es el id externo. P uede ser obligatorio.
- Nombre: Recupera el nombre del trabajador informado en el perfil del trabajador. Suele ser obligatorio.
- Email: Recupera el email del trabajador.
- Localización: Recupera la localización por defecto del trabajador.
- Fecha de inicio: Recupera la fecha de inicio del que se recuperan los conceptos calculados. S uele ser obligatorio.
- Fecha de fin: Recupera la fecha de fin del que se recuperan los conceptos calculados. Suele ser obligatorio.
- Categoría: Recupera la categoría informada en el perfil del trabajador.
- Concepto: Recuperar el código del concepto. Es obligatorio.
- Descripción: Recupera el texto informado en el campo Descripción del concepto de cálculo. Puede ser obligatorio si en la plantilla de nóminas está seleccionado en el modo de cabeceras las opción “con cabeceras”.
- Cantidad: Recupera el valor del cálculo del concepto anterior. Es obligatorio.
- Fecha generación del fichero: Recupera la fecha de ejecución.
- Horas contrato año: Recupera el valor de las horas contrato año informadas en el perfil del trabajador. Total horas de convenio.
- Horas contrato del periodo: Recupera el valor de las horas contrato del periodo informadas en el perfil del trabajador.
- Log: Recupera el estado del cuadrante, los valores pueden ser: CUADRANTE NO CERRADO OK. Devuelve este valor cuando el cuadrante está preparado para la descarga. El cuadrante está cerrado y/o validado en su caso. CUADRANTE YA DESCARGADO
- Localización planificada: Recupera la localización del turno/horas del concepto.
- Tipo de dato: Recupera el tipo de dato del concepto, si es un concepto tipo 1.1 (asociados a los turnos), tipo 1.2 (asociados a las horas).
- Fecha de exportación: Recupera el valor del campo “Último día exportado” del perfil del trabajador.
- Fecha de validación: Recupera el valor del campo “Fecha de validación” del perfil del trabajador.
- Fecha de cierre de cuadrante: Recupera el valor del campo “Fecha de cierre de cuadrante” del perfil del trabajador.

También se pueden seleccionar los valores de los datos personalizados como campos en el formato de importación del fichero de variables incorporarlos (no suelen utilizarse ya que como en el ejemplo indicado en el concepto 2.2 el dato personalizado se utiliza como activador)

Los Campos fijos suelen utilizarse para multiplicar o comparar, además también se pueden seleccionar los valores de los campos fijos (en este caso el valor sería el mismo para todos los trabajadores (no suelen utilizarse ya que como en el ejemplo indicado en los valores que se crean en los campos fijos suelen utilizarse con conceptos de comparación de los concepto 2.3).

Para crear un Campo Fijo, marca Añadir

El separador en el caso de decimales es el punto, no la coma.

Una vez creados los campos necesarios se seleccionan los campos necesarios con el (+), una vez incluidos todos los campos, recuerda que se debe guardar
