---
schemaVersion: "1.0"
contentId: recursos-y-partes-7-6-localizaciones
title: Localizaciones
description: Las localizaciones en un equipo pueden ser consideradas como departamentos, áreas o grupos de una empresa, que facilitan a los administradores para agrupar a trabajadores en los cuadrantes,.
contentType: concept
module: Recursos y partes
submodule: Contratos
intent: Localizaciones
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
  - id: localizaciones
    label: Localizaciones
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
    - https://manual.aturnos.com/knowledgebase/7-6-localizaciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-6-localizaciones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre localizaciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-6-localizaciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-6-localizaciones/
  contentHash: 81be2e2e25486c6bc5c6d815b3304fc2794cae80326cc2bf11dc025e0431f8d1
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre localizaciones, con instrucciones y contexto revisables por el equipo de aTurnos.

Las localizaciones en un equipo pueden ser consideradas como departamentos, áreas o grupos de una empresa, que facilitan a los administradores para agrupar a trabajadores en los cuadrantes, tablas de coberturas y otros reportes que ofrece el sistema.

Una localización puede ser asociada al trabajador y/o a los turnos, horas y absentismos planificados en un cuadrante. A los trabajadores se les puede atribuir una localización por defecto. A su vez esta será la misma localización que tienen configurada en su perfil del trabajador (ver Categoría & Contrato ).

También se puede asociar localizaciones a los turnos planificados, de esta manera define la zona donde el trabajador realiza su jornada laboral.

El uso de las localizaciones es importante por ejemplo, al momento de clasificar una búsqueda de los trabajadores o turnos que tengan asignados localizaciones (ver Tipos de turno ), por medio del filtro de localizaciones en cuadrantes, estadísticas y otros reportes, para visualizar solo los trabajadores y/o turnos de una localización en particular.

En la tabla de cobertura del cuadrante, se obtiene gran información de las localizaciones, al existir la opción de visualizar en detalle la demanda y cobertura real de los turnos por localizaciones.

El administrador podrá configurar la privacidad de visualizar las localizaciones de un mismo equipo donde se encuentran distribuidos los trabajadores, es decir, en los ajustes se puede delimitar para que los trabajadores, administradores validadores y administradores planificadores, solo vean los turnos de su localización por defecto, no teniendo acceso a ver en el cuadrante trabajadores de otras localizaciones (ver Visualizar turnos y compañeros de su misma localización ).

En Localizaciones los administradores pueden añadir, modificar, borrar y reutilizar una localización.

así como definir la estructura de las mismas, es decir, existen localizaciones de las cuales pueden depender otras, y que son llamadas Localización padre. Se pueden cambiar el orden y generar una jerarquía entre ellas en las que una deriven de otras. Ejemplo las localizaciones Zona 1, Zona 2 y Zona 3 depende de la localización URGENCIAS (localización padre).Estas acciones la contamos a continuación.

### Añadir, Cambiar orden y Acciones

En la barra superior existen estas tres funciones sobre el menú de Localizaciones.

Se despliegan dos opciones desde el botón de ‘Añadir’: Nueva localización y Localizaciones borradas.

Para crear una nueva localización es necesario darle un nombre, para ello indicarlo en el campo del formulario descripción (nombre de la localización) que debe ser único (no se pueden repetir dos localizaciones con el mismo nombre).

Las localizaciones puede ser editadas y/0 planificables por todos los administradores del equipo (validadores, planificadores, totales y superusuarios) o solo por los administradores totales o superusuarios. Las opciones son las siguientes

Finalmente para registrarla y crearla, hay que hacer clic en ‘ Guardar ‘.

Aparece un listado de localizaciones que se encuentran deshabilitadas al haber sido borradas del listado principal de localizaciones. Existen tres opciones con tres botones para estas localizaciones:

- Seleccionarla: botón de selección de la localización.
- Deshacer: reestablece o recupera la localización en el listado de localizaciones.
- Eliminar: se borra definitivamente sin opción de ser recuperada.

Por medio del botón (flechas) se puede cambiar el orden en el que se muestran las localizaciones haciendo clic en ellas y arrastrándolas hacia arriba o abajo.

También se puede establecer un orden por jerarquías, arrastrando una localización e incluirla dentro del recuadro de otra (Localización padre).

Para guardar los cambios realizados, hay que hacer clic en el icono “Cambiar Orden”. Si por el contrario no quiere guardar los cambios, se debe hacer clic en el icono de “Volver”.

Esta opción permite descargar el listado de localizaciones en formato CSV.

Se muestran todas aquellas localizaciones que se han creado, con la siguiente información:

- Descripción: nombre de la localización.
- Padre: corresponde a los localizaciones de las que dependen otras. Por ejemplo, en una empresa, “Dirección” puede ser una localización padre y los diferentes departamentos (administración, ventas, almacén, RRHH) localizaciones hijas. Esto depende de la ordenación asignada (ver Cambiar orden localizaciones).
- ID: es el número identificativo de la localización en la base de datos. Este número se va a mostrar a la hora de descargar los datos de planificación desde la función Exportar.

Por último, desde los botones de este listado, se puede:

- Editar una localización.
- Seleccionarla para borrarla.

A continuación se explican ambas acciones.

Al hacer clic en Editar (icono del lápiz), se pueden modificar datos como:

- Nombre, para describir la localización.
- Localización padre, formando una jerarquía de una localización superior.
- Orden: también se puede configurar el orden de aparición en el listado.
- Beacon: necesario para un tipo de fichaje del control de presencia, a través de sistemas con dispositivos bluetooth.

Existen dos variables que no se pueden editar y que están relacionadas con el menú de Geolocalización.

Esta función nos permitirá configurar el radio de acción dentro del cual se podrá fichar mediante el control de presencia por Geolocalización (ver Fichar por geolocalización ).

Desde el botón de ‘ Borrar seleccionada’ (papelera) se pueden eliminar las localizaciones que se hayan seleccionado. Una vez realizada la acción, esta se puede deshacer desde el ‘ Localizaciones borradas ‘.

### Mapa

Al editar una localización, se le puede asignar una dirección física, apareciendo geolocalizada en el mapa.

### Acciones de la tabla

- Ocultar: con esta acción se pueden ocultar columnas de la tabla para una visión más resumida.
- Acciones: con esta opción se puede escoger copiar la tabla o descargarla (exportar) en el formato deseado (CSV, Excel o PDF).

### Datos personalizados

Las localizaciones pueden contener mayor información para realizar estadísticas.

Se pueden añadir desde ‘Datos personalizados’ creados para ‘Localizaciones’.

De esta forma, al hacer la consulta de ‘Reportes por localización’, se puede añadir información como el Centro de Coste o un ID, que lo identifica en un sistema integrado con aTurnos.

Para mostrar esta información, también debe estar configurado en la ‘Visualización’.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
