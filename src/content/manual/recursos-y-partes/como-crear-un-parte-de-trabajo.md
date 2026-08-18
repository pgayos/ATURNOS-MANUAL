---
schemaVersion: "1.0"
contentId: recursos-y-partes-como-crear-un-parte-de-trabajo
title: ¿Cómo crear un parte de trabajo?
description: El primer paso que tiene que realizar un administrador es crear los recursos que forman parte del parte de trabajo.
contentType: faq
module: Recursos y partes
submodule: Usuarios y perfiles
intent: ¿Cómo crear un parte de trabajo?
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
  - id: crear
    label: Crear
  - id: parte
    label: Parte
  - id: trabajo
    label: Trabajo
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
    - https://manual.aturnos.com/knowledgebase/como-personalizar-el-parte-hoja-de-trabajo/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/como-personalizar-el-parte-hoja-de-trabajo/
ai:
  answerableQuestions:
    - ¿Cómo crear un parte de trabajo?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/como-personalizar-el-parte-hoja-de-trabajo/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/como-personalizar-el-parte-hoja-de-trabajo/
  contentHash: 9ae5c6cbbcc9505a74a329f36be84d967930ef715560b1d51f1d5d7f98d45ec9
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El primer paso que tiene que realizar un administrador es crear los recursos que forman parte del parte de trabajo.

## Respuesta
Los Recursos se crean través del menú RECURSOS → RECURSOS, clicando el botón “Acciones” y “Añadir Recursos”.

Los datos que se precisan para crear un recurso son:

- Nombre: Descripción del recurso a crear.
- Tipo: El recurso puede ser de tipo (Consulta en el Manual los Tipos de recursos): Texto. Numérico. Pregunta Si o No. Fórmula. Rango. Horas. Si el recurso va a ser exportado en un concepto de nómina, el recurso debe ser numérico o tipo fórmula.
- Tipo de turno: Con la opción todos los turnos se puede añadir este recurso en cualquier tipo de turno. En caso de que seleccione uno o varios turnos solo se puede añadir el recurso en los tipos de turnos indicados siempre que el trabajador lo tenga planificado en el cuadrante.
- Clasificación: Los recursos se pueden agrupar a través de clasificaciones, se precisa crear la clasificación antes de crear el recurso.
- Orden: Indica un número para ordenar el listado de recursos.
- Oculto: Existe la opción de crear un recurso oculto o visible en el cuadrante. Con la opción SI o NO.
- Categorías y / o localización: Se pueden crear recursos para que solo algunos de los trabajadores, atendiendo a la categoría y/o a la localización en el perfil puedan informarlos. En caso de no seleccionar ninguna categoría o localización, el recurso estará disponible para todos los trabajadores del equipo.

- Trabajadores: Los recursos pueden ser asignados específicamente para trabajadores “sueltos”. Para ello se debe seleccionar al trabajador en el listado de Disponibles para traspasarlo al Listado de disponibles (columna derecha). En caso de no mover a ningún trabajador el recurso puede ser asignado a cualquier trabajador del equipo.

El administrador del equipo desde el menú acceder a la página de recursos → recurso. En la parte superior derecha en el botón de acciones selecciona la opción ‘ Añadir Clasificación’.

Una clasificación de recurso se crea para agrupar a los recursos. Es obligatorio crear las clasificaciones antes de crear los recursos, para que puedan seleccionarse al crear el recurso. También se puede asignar una clasificación a un recurso ya creado, editando las propiedades.
