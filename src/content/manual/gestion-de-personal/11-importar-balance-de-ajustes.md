---
schemaVersion: "1.0"
contentId: gestion-de-personal-11-importar-balance-de-ajustes
title: Importar balance de ajustes
description: Los Ajustes que se realizan para saldar horas se pueden registrar en aTurnos a través de la importación de un fichero, el cual se recomienda para agilizar el proceso cuando son muchos los tr.
contentType: procedure
module: Gestión de personal
submodule: Contratos
intent: Importar balance de ajustes
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: ajustes
    label: Ajustes
  - id: balance
    label: Balance
  - id: importar
    label: Importar
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
    - https://manual.aturnos.com/knowledgebase/11-importacion-balance-de-ajustes-2/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/11-importacion-balance-de-ajustes-2/
ai:
  answerableQuestions:
    - ¿Cómo puedo importar balance de ajustes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/11-importacion-balance-de-ajustes-2/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/11-importacion-balance-de-ajustes-2/
  contentHash: 7c5bf1d93ab4582ac26978ebf4fc4500bdbec50dc3b92998992b91f7cda1e20f
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a importar balance de ajustes, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Los Ajustes que se realizan para saldar horas se pueden registrar en aTurnos a través de la importación de un fichero, el cual se recomienda para agilizar el proceso cuando son muchos los trabajadores involucrados. Para importar el archivo debes iniciar creando un documento Excel con formato CSV o descarga una de nuestras plantillas.

La plantilla del fichero debe contener las siguientes columnas:

- Nombre: se informa nombre y apellidos del trabajador.
- Email: correo electrónico del trabajador. El correo es el usuario con el que se accede a la web.
- Id aTurnos
- Id Empleado
- Tipo de ajuste: Indica el valor en número según el tipo de ajuste que quieres importar: Valor -1: Decremento de horas planificadas Valor 0: Abono nómina Valor 1: Incremento de horas planificadas Valor 2: Decremento de saldo de vacaciones Valor 3: Decremento de horas contrato Valor 4: Decremento de vacaciones de contrato Valor 5: Incremento de vacaciones de contrato Valor 6: Incremento de horas de contrato Valor 7: Descuento de nómina Valor 8: Incremento saldo de vacaciones

- Descripción del ajuste: define el motivo del ajuste, o alguna información que ayude a identificar la razón del mismo.
- Valor del ajuste: Número o cantidad de horas a informar. El separador de decimales se realiza a través del punto (.)
- Fecha del ajuste: fecha en la que se va a hacer el ajuste, a partir de la cual afectará el balance total de horas planificadas del trabajador.

Para poder importar los ajustes de horas puedes completar la plantilla de ejemplo que puedes descargar:

CSV Importar balance de ajustes

Por último, antes de realizar la importación, guarda el documento con formato tipo CSV.

Para importar el archivo puedes consultar los pasos que indicamos en nuestro menú de “Importar “.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![11. Importar balance de ajustes](/media/manual/11-importar-balance-de-ajustes-3dcbb78e25.png)

![11. Importar balance de ajustes](/media/manual/11-importar-balance-de-ajustes-8b5db4bb1a.png)
