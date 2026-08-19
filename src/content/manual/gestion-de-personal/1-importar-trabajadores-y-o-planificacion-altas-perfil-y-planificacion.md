---
schemaVersion: "1.0"
contentId: gestion-de-personal-1-importar-trabajadores-y-o-planificacion-altas-perfil-y-planificacion
title: "Importar trabajadores y/o planificación: altas, perfil y planificación"
description: Crea un documento CSV o descarga una de nuestras plantillas de ejemplo (CSV). En las columnas del documento deben aparecer los siguientes conceptos:.
contentType: procedure
module: Gestión de personal
submodule: Contratos
intent: "Importar trabajadores y/o planificación: altas, perfil y planificación"
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
  - id: altas
    label: Altas
  - id: importar
    label: Importar
  - id: perfil
    label: Perfil
  - id: planificacion
    label: Planificacion
  - id: trabajadores
    label: Trabajadores
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
    - https://manual.aturnos.com/knowledgebase/1-importacion-altas-de-trabajadores-basico/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-importacion-altas-de-trabajadores-basico/
ai:
  answerableQuestions:
    - "¿Cómo puedo importar trabajadores y/o planificación: altas, perfil y planificación?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-importacion-altas-de-trabajadores-basico/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-importacion-altas-de-trabajadores-basico/
  contentHash: af908e861ca02e805772a05350a8f3b11f459eac394ce76e5d9c5dcdb5486db5
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Crea un documento CSV o descarga una de nuestras plantillas de ejemplo (CSV). En las columnas del documento deben aparecer los siguientes conceptos:.

## Procedimiento
- Nombre*: Dónde se informa nombre y apellidos del trabajador.
- Mail*: Correo electrónico del trabajador. El correo es el usuario con el que se accede a la web acompañado de una contraseña de seguridad.
- Fecha de alta*: El formato debe coincidir con el que está informado en la configuración del equipo (Importar/Exportar → Configuración → Formato de fecha), por defecto es dd/mm/aaaa. En el caso de que no sea relevante la fecha de alta, puedes dejar en blanco este campo e informando una fecha de alta para todo el equipo (no recomendable).

Además, se pueden añadir otras columnas para informar datos adicionales creando un nuevo documento CSV añadiendo en las cabeceras de las columnas los siguientes campos:

- Nombre*: dónde se informa nombre y apellidos del trabajador.
- Localización: área a la que está asignado el trabajador, o zona donde el trabajador realiza su jornada laboral.
- Email*: correo electrónico del trabajador. El correo es el usuario con el que se accede a la web.
- Fecha de alta*: el formato debe coincidir con el que está informado en la configuración del equipo.
- Fecha de baja: si sabemos que el contrato de un trabajador es de duración determinada, podemos indicar la fecha de su finalización.
- ID empleado: número de identificación del empleado, usualmente es generado por el sistema de nómina del cliente (diferente al ID de aTurnos).
- Posición: número que vincule al usuario con una integración externa. Usualmente es generado por el sistema de nómina del cliente.
- Estado de trabajador: si quieres que esté activado (indicar ‘ Trabajando ’) y en caso contrario (indicar ‘ Libre ’).
- Rol de usuario de aTurnos: Superusuario: indicar valor 50. Administrador total: indicar valor 40. Administrador planificador: indicar valor 30. Administrador validador: indicar valor 20. Trabajador: indicar valor 1.
- Datos contrato: Horas por convenio o contrato. Horas mensuales, semanales y/o al día. Porcentaje de la jornada: indicando el número entero. Por ejemplo si esta al 100% de su jornada en la celda del documento indicaremos 100. Porcentaje de horas complementarias: realizadas al año como adición a las horas ordinarias pactadas en el contrato a tiempo parcial. Horas extra anuales: horas de trabajo al año que se permiten realizar sobre la duración máxima de la jornada ordinaria de trabajo (de forma extraordinaria). Vacaciones: número de días de vacaciones por convenio o contrato. Tipo de vacaciones: si son días naturales (indicar valor 1 ) o laborales (indicar valor 2 ), o se dejar a elegir (no indicar valores).
- Otros datos: Categoría: clasificación del puesto de trabajo a desempeñar (ver Categorías ). El mismo proceso de alta crea la categoría. Especialidades: capacidad o habilidad que tiene el trabajador, con la cual se pueden diferenciar o agrupar con el resto de trabajadores (ver Especialidades ). El propio proceso de alta añade tantas especialidades como así se indiquen en las columnas en el documento de Excel. En cada especialidad se indicar la valoración (del 1 al 5) de la habilidad o capacidad. Teléfono. Datos personalizados: hacen referencia al perfil del trabajador (no son obligatorios), pero precisan haberse creado previamente (ver Datos personalizados ). Para asociarlos se deberá indicar el nombre del dato personalizado con la columna “Dato Personalizado”. El trabajador puede fichar en cualquier lugar (ver Configuración Control de Presencia en perfil del trabajador): indicando valor 1 en este campo, activaremos para que los trabajadores fichen desde cualquier lugar en remoto. De la misma forma indicando el valor 0, desactivaremos la opción.

Ejemplo de documento

CSV Importar_trabajadores

Finalmente, debe “Guardar” el documento con formato CSV.

Para importar el archivo, debe seguir los pasos que indicamos en nuestro menú Administrar → Importar/Exportar → Importar (ver Importar ).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1. Importar trabajadores y/o planificación: altas, perfil y planificación](/media/manual/1-importar-trabajadores-y-o-planificacion-altas-perfil-y-planificacion-4783168993.png)

![1. Importar trabajadores y/o planificación: altas, perfil y planificación](/media/manual/1-importar-trabajadores-y-o-planificacion-altas-perfil-y-planificacion-10c0060933.png)
