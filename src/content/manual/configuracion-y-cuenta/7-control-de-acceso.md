---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-7-control-de-acceso
title: Control De Acceso
description: Los mismos sistemas que utilizamos para el control de presencia, podemos administrarlos mediante la configuración de grupos usuarios de acceso o niveles, que pueden estar vinculados a las pu.
contentType: reference
module: Configuración y cuenta
submodule: Roles y permisos
intent: Control De Acceso
audience:
  - role: Administrador
    access: applicable
entities:
  - id: acceso
    label: Acceso
  - id: control
    label: Control
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
    - https://manual.aturnos.com/knowledgebase/7-control-de-acceso/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-control-de-acceso/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre control De Acceso?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-control-de-acceso/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-control-de-acceso/
  contentHash: 96562223ae7a03ab05233fe8823028fec32e6cbe9b4a3ab94a99f7b07f7893cc
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre control De Acceso, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Los mismos sistemas que utilizamos para el control de presencia, podemos administrarlos mediante la configuración de grupos usuarios de acceso o niveles, que pueden estar vinculados a las puertas para el control de acceso a los centros de trabajo.

La configuración del control de acceso pasa por informar a Biostar2 sobre qué grupos de personas será necesario su control de acceso a un centro de trabajo o incluso a una determinada zona del mismo.

Para ello podemos crear grupos de usuarios de acceso o niveles de acceso de usuarios.

Si queremos añadir un grupo o nivel de acceso, debemos entrar al menú de ‘Control Acceso’ que tenemos en la barra de iconos de la parte izquierda de la ventana.

Es la primera definición por la cual podemos administrar los controles de acceso al centro de trabajo. Se nos mostrará un listado con los grupos que hay creados y la opción de añadir nuevos grupos.

Los grupos de acceso pueden estar compuestos por Nivel de Acceso, Grupos de Usuarios o Usuarios concretos. Podemos añadir y editar grupos de acceso, para crear un nuevo grupo, solo hay que hacer clic en el botón de ‘Añadir Grupo Acceso’.

Se nos abrirá una nueva ventana en la que tendremos que indicar los siguientes parámetros para crear un grupo de acceso:

1. Nombre: para identificar al nuevo grupo de acceso que vamos a crear.
2. Descripción: informar sobre algún aspecto concreto que ayude a identificarlo.
3. Regla de acceso: bajo qué premisa va a funcionar ese grupo, es decir, si va a afectar a: Nivel de acceso, creado previamente. Grupo de usuarios, donde están agrupados un listado de usuarios. Usuarios, incluyendo al grupo de acceso a los usuarios que seleccionemos para añadir.
4. Para añadir una nueva regla de acceso, únicamente habrá que pulsar en el botón ‘Añadir’ e indicar cuál queremos asignar.

Dentro de control de acceso también se pueden definir niveles de acceso. Un nivel se refiere a una zona de acceso que quede restringida por alguna puerta y esté vinculada a un grupo de acceso.

Los niveles creados aparecen disponibles en un listado, pudiéndose editar y/o eliminar.

De la misma forma, tenemos un botón ‘Añadir Nivel Acceso’ donde crear un nuevo nivel. Para su edición, debemos de informar de los siguientes parámetros:

1. Nombre: sirve para identificar el nivel.
2. Descripción: información sobre aspectos importantes del nivel.
3. Añadir Puerta o Turno: desde aquí podemos añadir una puerta de acceso al nivel.

Para que se registre el nivel, solo quedaría en pulsar el botón de ‘Aplicar’.

Para configurar el control de acceso, se necesita que estén definidas las puertas de acceso, a continuación explicamos cómo hacerlo.
