---
schemaVersion: "1.0"
contentId: costes-y-nominas-costes-por-usuario
title: Costes por usuario
description: Al contar con el Módulo de Costes entre las funcionalidades de aTurnos se activará en el Perfil del trabajador una pestaña de “Costes” desde la cual se pueden configurar costes directamente.
contentType: procedure
module: Costes y nóminas
submodule: Usuarios y perfiles
intent: Costes por usuario
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
  - id: costes
    label: Costes
  - id: usuario
    label: Usuario
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
    - https://manual.aturnos.com/knowledgebase/costes-por-usuario/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/costes-por-usuario/
ai:
  answerableQuestions:
    - ¿Cómo puedo costes por usuario?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/costes-por-usuario/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/costes-por-usuario/
  contentHash: 3331a800af98d876583cb6035acb3602b4157e377b8da778a5637fd5373b1136
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a costes por usuario, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Al contar con el Módulo de Costes entre las funcionalidades de aTurnos se activará en el Perfil del trabajador una pestaña de “Costes” desde la cual se pueden configurar costes directamente relacionados a un usuario del equipo. Esta configuración es recomendada cuando un usuario tiene valores de costes diferentes al resto de los empleados, independientemente de la categoría y/o turno que realice.

- Activar costes usuario: Se selecciona esta casilla para informar las variables que afectarán al cálculo de coste por hora del usuario.
- Salario bruto anual: Indicar el monto del salario anual del usuario sin efectuar las correspondientes deducciones o retenciones para nómina. En base a ese monto se calculará automáticamente el coste por hora del año que imputará el trabajador según planificación en ese año.
- Coste seguridad social %: Sobre porcentaje se calculará el valor que debe aportar la empresa a la Seguridad Social, y afecta el cálculo del coste por hora del usuario.
- Coste por nocturnidad %: En caso de que una hora nocturna de este usuario tenga un valor o coste se debe indicar en el campo el porcentaje que ello significa.
- Indica el coste por hora que imputa el trabajador por localización y horas del día: En aquellos casos en los que se deba definir un coste por hora del usuario tomando en cuenta alguna otra variable como definición por localización, tipo de hora, etc., se deberán informar los campos a continuación (algunos o todos según la necesidad):

1. €/hora: se informa el coste de la hora a imputar. Este punto se debe informar una Localización cuando el coste por hora en esa localización sea diferente, de lo contrario se tendrá la opción de “Cualquier localización” cuando no sea necesario distinguir una de otras. En este numeral se podrá elegir si el costo por hora el trabajador cuando tenga planificación en algún día normal, en fin de semana o festivo. Entre las opciones se puede elegir un coste por hora cuando el usuario tiene planificadas algún tipo de hora, las opciones a elegir son: Normales, Extras, Complementarias o algún tipo de hora que se haya creado adicionalmente (Ver mas en Tipos de horas). Puedes relacionar el coste por hora que imputa el usuario en relación a un rango o periodo de tiempo, en este caso en el numeral 5, se indica la hora de inicio del coste informado. En esta casilla se indica la hora fin del coste a imputar por el usuario en ese período de tiempo. Finalmente debes hacer clic en el botón de Insertar para que se guarden las variables. Una vez guardada la información se ofrece la opción de borrar esos datos de ser necesario (icono de la Papelera).
