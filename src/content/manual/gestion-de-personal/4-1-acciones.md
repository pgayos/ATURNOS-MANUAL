---
schemaVersion: "1.0"
contentId: gestion-de-personal-4-1-acciones
title: Acciones
description: En aTurnos, los administradores disponen de un registro de todas las acciones que se realizan por parte de los trabajadores y administradores del equipo.
contentType: concept
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Acciones
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: acciones
    label: Acciones
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
    - https://manual.aturnos.com/knowledgebase/4-1-acciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/4-1-acciones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre acciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/4-1-acciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/4-1-acciones/
  contentHash: 458774f726e704a226dcef30c47fcbac180e88911cb81bff26e3392c5f93a459
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre acciones, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
En aTurnos, los administradores disponen de un registro de todas las acciones que se realizan por parte de los trabajadores y administradores del equipo. De esta manera queda constancia de todas las acciones que se han ejecutado en un equipo dentro de los últimos tres meses. En este apartado quedan asentadas todas las operaciones que ocurren, quién ha realizado cada una de las acciones y a qué usuarios ha afectado.

Desde esta ventana se muestra:

– Listado de acciones: con nombre del trabajador, que ha ejecutado la acción, y todos los detalles de la misma como es el ámbito de la acción, su descripción, el día y la hora en que se realizó, usuario involucrado en la acción, si esta acción viene de un sistema de terceros a través de la API como, por ejemplo: SAP, Meta4, entre otros. A simple vista, se muestran los comentarios que tenga la acción y si ha sido validada.

– Tienes la opción de agregar un comentario u observación en la tarea (acción) realizada para dejar asentada alguna anotación que consideres importante recordar (Columna de Acciones). Desde “Ajustes” se puede definir si el trabajador tendrá permiso para indicar incidencias o comentarios sobre este registro de acciones (ver más en: Ajustes de Privacidad ).

– Validar una acción: el registro de acciones dispone una opción de validar operaciones ejecutadas para ayudar en la trazabilidad de la misma (Columna de Acciones). Por ejemplo, en el sector hospitalario, el responsable de las agendas o el facultativo que tiene asignado un turno para pasar consulta podrá validar o confirmar por esta vía que efectivamente se abrió la agenda.

– Filtro: es muy útil ya que facilita la visualización de la información que se requiere, definiendo por ejemplo, si se quiere ver las acciones relacionadas a un trabajador o a un ámbito en específico como puede ser las peticiones, turnos, permisos,… A continuación, se detallan las opciones de filtros existentes:

- Trabajador/E-mail/ID Empleado: si informa alguno de esos datos en el campo, aparecerá el listado con la información relacionada al nombre del trabajador que ha ejecutado la acción, de esta manera solo se mostrarán las acciones que haya realizado ese trabajador en aTurnos.
- Usuario Involucrado: en este caso, si informa Nombre / E-mail / ID Empleado en este campo, aparecerá listado con los datos relacionados al trabajador sobre el cual se realizó la acción. Ejemplo: un Administrador realiza un cambio de turno en el cuadrante al “Trabajador X” (Trabajador Involucrado), con solo colocar en este filtro “Trabajador X” le mostrará el listado de acciones que se han ejecutado para este trabajador incluyendo ese cambio.
- Estado de Validación: si se realizan validaciones en el registro, puedes optar por ver solo las acciones que están validadas, las no validadas o ambas.
- Estado de Comentarios: en el listado tienes la posibilidad de escribir algún comentario o acotación que consideres importante recordar acerca de una acción. Partiendo de esta base, cuentas con la facilidad de seleccionar si quieres visualizar el listado de acciones que tienen Comentarios, los que no tengan comentarios o ambos.
- Ámbito: el sistema, por defecto, clasifica cada tipo de acción dentro de un ámbito o conjunto de acciones según la operación realizada, por ejemplo: al añadir o modificar el perfil de un usuario, la acción se incluirá dentro del grupo o ámbito de “Trabajadores”, de igual forma, si se añaden horas o se aplica un patrón a un trabajador, la acción estará dentro del ámbito “Cuadrante”.

– Exportar: También existe la posibilidad de descargar (en CSV o Excel) la información deseada para su posterior estudio o tratamiento.

La descripción de las acciones en algunos casos aparece en inglés, debido a que es extraída directamente desde la BBDD de aTurnos.
