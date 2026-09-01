---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-b-datos-del-equipo
title: Datos del equipo
description: Permite configurar los datos del equipo y cómo se estructura dentro de la empresa. Puedes agregar o modificar las siguientes casillas:.
contentType: concept
module: Configuración y cuenta
submodule: Roles y permisos
subtopic: ""
intent: Datos del equipo
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
entities:
  - id: datos
    label: Datos
  - id: equipo
    label: Equipo
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
    - https://manual.aturnos.com/knowledgebase/b-datos-del-equipo/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/b-datos-del-equipo/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre datos del equipo?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/b-datos-del-equipo/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/b-datos-del-equipo/
  contentHash: 81dafa74671890e468cfe63e7243776f69711f44cae9d204db7a8f4bd924fcd0
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Permite configurar los datos del equipo y cómo se estructura dentro de la empresa. Puedes agregar o modificar las siguientes casillas:.

## Qué debes saber
- Descripción: dispone de texto para añadir más información descriptiva que ayude a diferenciarlo de los otros equipos a los que pertenece un mismo administrador/empresa.
- Código Postal: es un código que asigna a distintas zonas o lugares de un país. Generalmente es una serie de dígitos, aunque en algunos países incluyen letras. Es muy útil a la hora de realizar la importación de los festivos para recuperarlos automáticamente.
- ID de externo: código o nomenclatura que se le asigna al equipo por parte de terceros (ej. Algún programa informático de RRHH). En aTurnos existe un código único por cada equipo, de gran ayuda a los procesos de importación/exportación con otros sistemas informáticos. Se puede informar uno por parte del cliente y mantenerlo sincronizados con los maestros de datos que tenga. Por ejemplo, se puede indicar como ID externo de un equipo, el ID de la Unidad Organizativa.
- Profesión: describe el sector laboral al que pertenece el equipo de trabajo. aTurnos dependiendo del sector puede configurar diferentes herramientas que le ayuden en el desarrollo del sistema.
- Compañía: en el caso de que queramos agrupar a equipos dentro de una compañía, aquí indicamos en cuál de ellas. Cuando tenemos clientes corporativos, todos se encuentran identificados dentro de la misma compañía y sirve para agrupar estos equipos y simplificar la configuración.
- Zona horaria: se informa a la que pertenezca por su localización geográfica. Esto afecta a aTurnos en procesos como los marcajes, los widgets, las notificaciones o los correos de avisos.
- Equipo padre: En caso de existir una estructura de equipos, se puede definir una jerarquía que ayuda en la configuración y en la generación de reportes. Desde aquí se puede definir el equipo padre del que se está configurando, es decir, se debe informar el nombre del equipo del que depende o es superior dentro la estructura de la organización.
- Logo de equipo: inserta, sustituye o borra el logo corporativo de la empresa. El logo se encuentra visible en diferentes puntos del sistema y te ayuda a localizar más rápido la información.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![b. Datos del equipo](/media/manual/b-datos-del-equipo-36fa97e12d.png)
