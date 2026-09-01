---
schemaVersion: "1.0"
contentId: gestion-de-personal-7-10-resetear-contrasena-trabajadores-anonimos
title: Resetear contraseña trabajadores anónimos
description: Se denominan trabajadores anónimos, todos aquellos que se han creado con un correo ‘@aturnos.com’.
contentType: procedure
module: Gestión de personal
submodule: Usuarios y perfiles
subtopic: ""
intent: Resetear contraseña trabajadores anónimos
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: anonimos
    label: Anonimos
  - id: contrasena
    label: Contrasena
  - id: resetear
    label: Resetear
  - id: trabajadores
    label: Trabajadores
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
    - https://manual.aturnos.com/knowledgebase/7-10-resetear-contrasena-trabajadores-anonimos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-10-resetear-contrasena-trabajadores-anonimos/
ai:
  answerableQuestions:
    - ¿Cómo puedo resetear contraseña trabajadores anónimos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-10-resetear-contrasena-trabajadores-anonimos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-10-resetear-contrasena-trabajadores-anonimos/
  contentHash: 333abf28645254723fafae1d37f6488e3675c71f790a9b29be732adc87ee660a
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Se denominan trabajadores anónimos, todos aquellos que se han creado con un correo ‘@aturnos.com’.

## Procedimiento
Por ejemplo, son aquellos trabajadores que se crean sin email, ni nombre, a la hora de añadir un nuevo trabajador al equipo.

Para que se pueda resetear la contraseña a un trabajador anónimo, primero debe haber sido activado. Al tener un correo ficticio (@aturnos.com), para activarlo hay que hacerlo desde la opción ‘Activar usuarios’.

Una vez ha sido activado, se podrá resetear la contraseña de acceso.

En listado aparecerán todos aquellos trabajadores anónimos (con email ficticio) que han sido activados.

El proceso de resetear la contraseña consiste en:

1. Seleccionar el trabajador anónimo.

1. En ‘Acciones’, hacer clic sobre el botón ‘Resetear contraseñas usuarios seleccionados’.

El sistema preguntará ‘ ¿Desea restaurar contraseña a todos los usuarios? Esta acción es irreversible. Una vez reseteada la contraseña a los usuarios debe guardar el archivo de descargas que se generará automáticamente. Si no se genera el archivo de descarga, debe hacer click en Acciones (parte superior de la tabla) y descargar su archivo de contraseñas. ¡Ojo! ¡El archivo de contraseñas solo se genera una vez! ‘, para terminar la acción se hacer clic en ‘Aceptar’.

1. Introduce la contraseña como usuario de aTurnos y ‘Aceptar’ para finalizar la acción.

Automáticamente el sistema descargará un archivo Excel con las contraseñas de los trabajadores reseteados.

¡IMPORTANTE! La tabla de contraseñas solo se puede consultar una vez, por ello es muy importante descargarse el archivo de contraseñas y asegurarse de que se puede leer correctamente antes de abandonar la página (o antes de que el sistema cierre la sesión automáticamente por inactividad).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![7.10 Resetear contraseña trabajadores anónimos](/media/manual/7-10-resetear-contrasena-trabajadores-anonimos-ce7d36c797.webp)

![7.10 Resetear contraseña trabajadores anónimos](/media/manual/7-10-resetear-contrasena-trabajadores-anonimos-5a0741970f.webp)

![7.10 Resetear contraseña trabajadores anónimos](/media/manual/7-10-resetear-contrasena-trabajadores-anonimos-88d8fd20ea.webp)

![7.10 Resetear contraseña trabajadores anónimos](/media/manual/7-10-resetear-contrasena-trabajadores-anonimos-728c5a242c.webp)

![7.10 Resetear contraseña trabajadores anónimos](/media/manual/7-10-resetear-contrasena-trabajadores-anonimos-c437442670.webp)

![7.10 Resetear contraseña trabajadores anónimos](/media/manual/7-10-resetear-contrasena-trabajadores-anonimos-d68d52c84d.webp)
