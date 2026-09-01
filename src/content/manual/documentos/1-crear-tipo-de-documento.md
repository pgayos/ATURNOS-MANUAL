---
schemaVersion: "1.0"
contentId: documentos-1-crear-tipo-de-documento
title: Crear tipo de documento
description: El administrador del equipo desde la función Tipos, que se encuentra en el menú Documentos, puede crear los tipos de documentos que necesite desde el botón derecho de Acciones en ‘ Añadir Tipo de Documento ’.
contentType: concept
module: Documentos
submodule: Roles y permisos
subtopic: ""
intent: Crear tipo de documento
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: crear
    label: Crear
  - id: documento
    label: Documento
  - id: tipo
    label: Tipo
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
    - https://manual.aturnos.com/knowledgebase/1-crear-tipo-de-documento/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-crear-tipo-de-documento/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre crear tipo de documento?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-crear-tipo-de-documento/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-crear-tipo-de-documento/
  contentHash: a60a6a82a688a8149af769e8a20ccf906929ee0336abadcb43f5b520c4e53fae
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El administrador del equipo desde la función Tipos, que se encuentra en el menú Documentos, puede crear los tipos de documentos que necesite desde el botón derecho de Acciones en ‘ Añadir Tipo de Documento ’.

## Qué debes saber
Se nos desplegará un menú en el que necesitaremos informar:

- Nombre: para identificar el tipo de documento que queremos generar.
- Descripción: información adicional del tipo de documento.
- Asociado con: los documentos se pueden asociar a diferentes conceptos, tales como: Petición: Los documentos asociados a las peticiones se adjuntan en el momento de realizar una petición. Por ejemplo, un justificante de una cita médica (previa a la asistencia), la documentación necesaria para solicitar un turno libre o unas vacaciones, así como justificantes para permisos por días, adopciones u otros trámites. También puede adjuntarse cualquier otro documento que justifique la petición realizada. Solicitud personal: Este tipo de documento puede utilizarse para el resto de solicitudes que los trabajadores deseen realizar a los administradores. Documentación personal: Los documentos de este tipo se añaden desde Info al tener planificado un absentismo o un período de absentismo. En esta categoría pueden clasificarse documentos relacionados con la información del trabajador como partes de baja, justificantes médicos. Cuadrante: Este tipo de documento se utiliza durante el proceso de sellado, aprobación y publicación del cuadrante (Ajustes de privacidad). Al finalizar dicho proceso, el sistema genera automáticamente un documento PDF del cuadrante en Documentos → Documentos, conservando el contenido del cuadrante sin alteraciones.

- Permisos

A continuación el administrador tiene que configurar los permisos para ver, subir o borrar documentos, dependiendo si estos documentos son del propio usuario (Documentos propios) o si son documentos de otros usuarios, en este último caso se tiene que configurar el acceso al documento en los diferentes roles de usuario.

1. Documento propio: el propietario del documento puede ver y subir sus propios documentos. En este apartado no hay posibilidad de dar permisos para que otros usuarios acceden a los documentos que no hayan sido subidos por ellos. Por defecto, las opciones ver y subir son las que tienen habilitado todos los usuarios en la configuración. El administrador del grupo puede cambiar esta configuración e incluso marcar el permiso de poder borrar su propio documento.
2. Acceso al documento: los usuarios pueden acceder a los documentos de los demás. Este acceso depende de la configuración realizada, por el administrador del equipo, en la tabla de acceso al documento. El administrador total marcará el acceso a los documentos de los demás y seleccionar las acciones ( ver, subir o borrar) que pueden realizar cada uno de ellos. Por defecto, la configuración indica que el administrador total y el superusuario del equipo puedan realizar las tres acciones y configurar el acceso al documento. Por ejemplo, si marcan la casilla ver a rol del trabajador significaría que cualquier trabajador puede ver este tipo documento de todos los trabajadores.

Una vez cumplimentado el formulario, haciendo clic en el botón de acción ‘ Guardar’, se crea el tipo de documento

En el siguiente enlace puedes obtener información de cómo subir documentos: ‘Subir documentos’.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1. Crear tipo de documento](/media/manual/1-crear-tipo-de-documento-6f6367cb8c.png)

![1. Crear tipo de documento](/media/manual/1-crear-tipo-de-documento-347cb2c4aa.webp)
