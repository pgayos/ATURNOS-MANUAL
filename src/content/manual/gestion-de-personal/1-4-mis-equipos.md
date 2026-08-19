---
schemaVersion: "1.0"
contentId: gestion-de-personal-1-4-mis-equipos
title: Mis equipos
description: Un equipo en aTurnos es un grupo de usuarios que comparten un mismo entorno de trabajo.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
intent: Mis equipos
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
  - id: equipos
    label: Equipos
  - id: mis
    label: Mis
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
    - https://manual.aturnos.com/knowledgebase/mis-equipos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/mis-equipos/
ai:
  answerableQuestions:
    - ¿Cómo puedo mis equipos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/mis-equipos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/mis-equipos/
  contentHash: 092235e364f054a47721e84ae702311b4eee4954ee80e035efe7d5274629d163
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a mis equipos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Un equipo en aTurnos es un grupo de usuarios que comparten un mismo entorno de trabajo. En ese entorno se gestiona todo lo relacionado con turnos, control horario, reportes, documentos y otros servicios que ofrece la plataforma. El usuario cuando accede a aTurnos puede pertenecer al equipo (como puede ser un trabajador/administrador planificable), o no pertenecer al equipo (como puede ser un administrador no planificable).

Dependerá de la configuración del perfil del usuario, en cada uno de los equipos, a los que tiene acceso: ver configuración. Un mismo usuario puede acceder a uno o varios equipos usando sus credenciales de aTurnos.

Los datos del equipo son configurables por el administrador: ver datos del equipo.

Si el usuario está dado de alta en un solo equipo, al iniciar sesión accederá directamente a ese equipo y podrá utilizar las funciones disponibles según su rol.

Si está dado de alta en varios equipos, al iniciar sesión deberá seleccionar el equipo al que quiere acceder haciendo clic sobre él.

¡Importante! La visualización de equipos está limitada a 40. Si no encuentras el equipo que estás buscando, utiliza el campo de búsqueda.

Una vez que ya se encuentra dentro de uno de los equipos, se puede navegar entre los equipos en los que se encuentra dado de alta.

Para ello, tiene que hacer clic sobre el nombre del equipo donde se encuentra logueado y seleccionar el equipo desde el despegable que le aparece en el menú. Si en lugar de seleccionar un equipo determinado, selecciona “Mis equipos” vuelve a la pantalla inicial donde aparecen todos los equipos a los que tiene acceso.

En esta pantalla de “Mis equipos” puede realizar las siguientes acciones:

- Buscar el equipo: En organizaciones con muchos equipos, esta función es especialmente útil. Permite buscar rápidamente un equipo utilizando su nombre o su ID externo.
- Diferentes tipos vistas de los equipos en pantalla: modo tabla, modo línea o modo árbol.
- Filtro de equipo ver solo equipos con usuarios planificables: al activar este filtro con la opción (SI), muestra solo los equipos que tienen algún usuario planificable.

Aquellos equipos que solo tengan usuarios no planificables no se mostrará en pantalla.

- Exportar datos del equipo en excel: en el archivo Excel se obtiene los datos relacionados al equipo (nombre del equipo, id aTurno, id externo, fecha cierre del cuadrante, número de usuarios planificables, nombre y mail de los administradores totales y el id del equipo padre).
- Añadir un equipo: se puede crear un nuevo equipo, siendo administrador del equipo el usuario que se encuentra logueado al ejecutar esta acción.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.4 Mis equipos](/media/manual/1-4-mis-equipos-f55cf16f76.png)

![1.4 Mis equipos](/media/manual/1-4-mis-equipos-fedb4f1ec9.png)

![1.4 Mis equipos](/media/manual/1-4-mis-equipos-3aab509453.png)
