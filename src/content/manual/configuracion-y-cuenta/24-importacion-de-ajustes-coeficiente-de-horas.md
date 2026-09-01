---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-24-importacion-de-ajustes-coeficiente-de-horas
title: Importación de Ajustes-Coeficiente de Horas
description: Si necesitas informar en aTurnos el coeficiente de horas de nocturnidad y festivos a los trabajadores de tu equipo puedes hacerlo a través de la importación de un fichero, tal como te mostra.
contentType: procedure
module: Configuración y cuenta
submodule: Usuarios y perfiles
subtopic: ""
intent: Importación de Ajustes-Coeficiente de Horas
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: ajustes
    label: Ajustes
  - id: coeficiente
    label: Coeficiente
  - id: horas
    label: Horas
  - id: importacion
    label: Importacion
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
    - https://manual.aturnos.com/knowledgebase/24-importacion-de-ajustes-coeficiente-de-horas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/24-importacion-de-ajustes-coeficiente-de-horas/
ai:
  answerableQuestions:
    - ¿Cómo puedo importación de Ajustes-Coeficiente de Horas?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/24-importacion-de-ajustes-coeficiente-de-horas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/24-importacion-de-ajustes-coeficiente-de-horas/
  contentHash: 3568a5cd27521bba4b0c0b5f7f22c1613e8b25695a30f23407ee87b8b2ddc229
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a importación de Ajustes-Coeficiente de Horas, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Si necesitas informar en aTurnos el coeficiente de horas de nocturnidad y festivos a los trabajadores de tu equipo puedes hacerlo a través de la importación de un fichero, tal como te mostraremos a continuación. Para ver mas detalle acerca de Ajustes – Coeficiente de horas entra al siguiente enlace: Ajuste de Coeficientes en nocturnidad y festivos

Debes crear un fichero con los datos que deseas informar, la plantilla debe contener las siguientes columnas:

- Nombre: se informa nombre y apellidos del trabajador.
- Email: correo electrónico del trabajador. El correo es el usuario con el que se accede a la web.
- Fecha de alta: el formato debe coincidir con el que está informado en la configuración del equipo.
- Coeficiente Horas Nocturnas: coeficiente sobre el cual se va a multiplicar e incrementar el conteo de las horas nocturnas en el ajuste cuando se planifiquen horas con esas características.
- Coeficiente Horas Festivas: coeficiente sobre el cual se va a multiplicar e incrementar el conteo de las horas festivas en el ajuste cuando se planifiquen horas con esas características.
- Coeficiente Horas Festivas Nocturnas: coeficiente sobre el cual se va a multiplicar e incrementar el conteo de las horas festivas nocturnas en el ajuste cuando se planifiquen horas con esas características.
- Coeficiente Horas Festivas Especiales: coeficiente sobre el cual se va a multiplicar e incrementar el conteo de las horas festivas especiales en el ajuste cuando se planifiquen horas con esas características.
- Coeficiente Horas Festivas Especiales Nocturnas: coeficiente sobre el cual se va a multiplicar e incrementar el conteo de las horas festivas especiales nocturnas en el ajuste cuando se planifiquen horas con esas características.

Es importante destacar que los decimales en el coeficiente deben estar separados por punto “.”, ejemplo: 0.50

Por último, antes de realizar la importación, guarda el documento como formato Excel o un fichero tipo CSV.

Para importar el archivo puedes consultar los pasos que indicamos en nuestro menú de “Importar “.

- Paso 1: seleccionar el archivo a importar y elegir la opción de “Importar trabajadores y/o planificación: altas, perfil y planificación” en el tipo de importación a realizar.
- Paso 2: asociar los conceptos de las columnas del fichero (Columna CSV) con los campos que hay que añadir (Asociar con…)
