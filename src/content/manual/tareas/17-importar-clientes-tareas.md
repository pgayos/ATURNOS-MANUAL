---
schemaVersion: "1.0"
contentId: tareas-17-importar-clientes-tareas
title: Importar clientes (Tareas)
description: Si necesitamos hacer una carga de varios clientes a la vez con la importación de clientes a través del módulo de Tareas se podría realizar.
contentType: concept
module: Tareas
submodule: General
subtopic: ""
intent: Importar clientes (Tareas)
audience:
  - role: Administrador
    access: applicable
entities:
  - id: clientes
    label: Clientes
  - id: importar
    label: Importar
  - id: tareas
    label: Tareas
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
    - https://manual.aturnos.com/knowledgebase/17-importar-clientes-tareas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/17-importar-clientes-tareas/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importar clientes (Tareas)?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/17-importar-clientes-tareas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/17-importar-clientes-tareas/
  contentHash: d5c320a2e7d51c7ea674b00a7a62ff4d59a8dc50996518bc2dd59b14bf885129
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Si necesitamos hacer una carga de varios clientes a la vez con la importación de clientes a través del módulo de Tareas se podría realizar.

## Qué debes saber
IMPORTANTE: Antes de realizar cualquier carga, es recomendable comparar las tareas que hay en la herramienta con las tareas a cargar, para verificar que se esta cargando lo mismo y no se está sobrescribiendo ninguna actividad, tarea o subtarea.

Para llevar a cabo la importación del fichero que contiene los catálogos de tareas, se debe crear un documento de tipo Importar clientes (Tareas), que contenga las siguientes columnas:

1. Nombre 2. Código 3. Codigo_padre 4. Descripción 5. Localización

Una vez creadas las columnas, se deberá colocar la información referente al catálogo de tareas en las columnas correspondientes, quedando el fichero de la siguiente forma.

Se debe acceder al módulo Administrar → Importar/Exportar → Importar. Una vez dentro, se selecciona el fichero CSV creado y se elige la opción Importar cliente s (Tareas) para posteriormente clicar en el botón Enviar.

Una vez se clique en dicho botón, la herramienta redirige a una nueva ventana donde se debe asociar los campos del fichero CSV con los campos en aTurnos.

Para poder realizar la asociación de campos, se debe seleccionar el campo correspondiente al desplegable Columna CSV y posteriormente, seleccionar el campo del desplegable “Asociar con…”

Una vez seleccionados dichos campos, se clica en el botón Asociar para que esta asociación aparezca listada en la parte inferior de la página.

Si hemos asociado mal los campos, se puede clicar en el botón Eliminar, y realizar la nueva asociación. Una vez estén todos los campos asociados correctamente, se clica en el botón Asociar para realizar la carga. Cuando la carga se haya completado, en la parte inferior de la página aparecerá el resultado de la carga.

*Se recomienda tener en cuenta que, aunque el resultado de la carga sea satisfactorio, hay que confirmar en el catálogo de tareas que lo nuevo aparece listado.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![17. Importar clientes (Tareas)](/media/manual/4-importacion-de-catalogos-de-tareas-8de302edf3.png)

![17. Importar clientes (Tareas)](/media/manual/4-importacion-de-catalogos-de-tareas-0ed62b94b1.png)

![17. Importar clientes (Tareas)](/media/manual/4-importacion-de-catalogos-de-tareas-f9f1779f7e.png)

![17. Importar clientes (Tareas)](/media/manual/4-importacion-de-catalogos-de-tareas-83e83bfb70.png)

![17. Importar clientes (Tareas)](/media/manual/4-importacion-de-catalogos-de-tareas-8fe635eee7.png)

![17. Importar clientes (Tareas)](/media/manual/4-importacion-de-catalogos-de-tareas-dea62044dd.png)
