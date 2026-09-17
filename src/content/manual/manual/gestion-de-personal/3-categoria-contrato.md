---
schemaVersion: "1.0"
contentId: gestion-de-personal-3-categoria-contrato
title: Categoría & Contrato
description: Se trata de la información contractual del trabajador. Son los datos más relevantes que vienen reflejados en su contrato de trabajo. Estos datos quedan registradossss en los siguientes aspectos:.
contentType: concept
module: Gestión de personal
submodule: Contratos
subtopic: ""
intent: Categoría & Contrato
audience:
  - role: RRHH
    access: applicable
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: categoria
    label: Categoria
  - id: contrato
    label: Contrato
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
    - https://manual.aturnos.com/knowledgebase/3-categoria-contrato/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-categoria-contrato/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre categoría & Contrato?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-categoria-contrato/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-categoria-contrato/
  contentHash: 4d4a55ddde416bab9dc52fc7f9b89d5787d7437a3ce1ba0746e09174c2a7adff
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Se trata de la información contractual del trabajador. Son los datos más relevantes que vienen reflejados en su contrato de trabajo. Estos datos quedan registradossss en los siguientes aspectos:.

## Qué debes saber
- Fecha de alta: Es el día en el que el trabajador comenzó la prestación laboral en la empresa o en el equipo de aTurnos. Es muy importante informar este dato de forma correcta, ya que afecta directamente a las horas de contrato, vacaciones, saldo de permisos que pueda tener y a la nómina. Igualmente, es importante que sepas que este dato no es la fecha de antigüedad del trabajador en la empresa, sino cuando comenzó en tu equipo de aTurnos. Ejemplo: puede ser que un trabajador lleve 10 años en la empresa, pero en tu equipo comienza hoy, por lo tanto, la fecha de alta del trabajador es el día de hoy.
- Fecha de baja (Sin baja informada): Es el día que el trabajador deja de estar activo en tu equipo de aTurnos, pasando a formar parte de la lista de trabajadores inactivos. En caso de no tener baja informada, este campo se queda sin rellenar (en blanco). Este dato no se relaciona con la baja del trabajador en la empresa, sino que es cuando pasa a estar en situación de “inactivo” dentro de tu equipo de aTurnos. Ejemplo: un trabajador de tu equipo causa baja contractual, por lo tanto, pasa a situación de “inactivo”, pero lo mantienes en tu equipo en la lista de trabajadores inactivos, ya que posteriormente puede volver a ser contratado, y únicamente tienes que volver a activar al trabajador.
- Categoría: Es la categoría profesional del trabajador, con el fin de realizar planificaciones más eficientes y conocer la composición del equipo. Para poder informar sobre los datos que componen el perfil, se necesita crear una Categoría, la cual te ayudará para extraer reportes o tener una mejor agrupación de las clases de categorías. (Véase Categorías ).
- Perfil: Definen un conjunto de datos que se generan automáticamente en la ficha del empleado al asociar al trabajador a un perfil. Esta información son datos personalizados y especialidades. Se definen los perfiles para asignar de forma más ágil datos a los trabajadores si ya existen tipos donde podemos informar previamente una gran cantidad de información.
- Localización por defecto: Es la ubicación, departamento, espacio físico o nivel jerárquico (según se adopte la configuración de las Localizaciones ) donde el trabajador presta su servicio. Puedes asignarle a un trabajador una determinada localización, en la cual, con carácter general, acomete sus turnos de trabajo.
- Otras localizaciones: Permite al Administrador visualizar y gestionar peticiones de los trabajadores que tengan turnos asociados a las localizaciones indicadas en este campo. El trabajador podrá visualizar al administrador en el cuadrante porque pertenece a esa localización. Los administradores y trabajadores solo podrán visualizar la planificación de turnos y eventos informados con esas localizaciones registradas. En el campo de “Otras localizaciones” puede informarse más de una localización.
- Posición: Identifica qué puesto ocupa un trabajador dentro del organigrama de la empresa, es decir, las posiciones que definen la jerarquía y el volumen de puestos necesarios en la organización que deben ser cubiertos por los trabajadores. Véase ¿Qué son y cómo utilizar las posiciones de los trabajadores para gestionar tu equipo?
- Medida de alta: Las medidas de alta indican cuál es el motivo de contratación de un empleado. Puede ser interesante para un mando que planifica saber si viene de una nueva alta, de cambio de contrato o cualquier otra nueva relación laboral. Los tipos de medidas se crean a nivel de RRHH. Es necesario tener cargado el catálogo de medidas para poder indicar cuál es la que corresponde a cada trabajador y periodo. Es un dato que puede venir por integración.
- Medida de baja: Las medidas de baja indican cuál es el motivo de cambio/baja de un empleado dentro de aTurnos para un periodo. Por ejemplo, podemos cerrar un periodo en aTurnos porque es baja en la empresa, porque se ha cambiado a otra unidad o porque han cambiado sus condiciones laborales.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![3. Categoría & Contrato](/media/manual/3-categoria-contrato-7ef6cfc143.png)
