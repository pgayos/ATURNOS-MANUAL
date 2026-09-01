---
schemaVersion: "1.0"
contentId: planificacion-f-exportar-y-cambiar-orden
title: Exportar y cambiar orden
description: Te permite descargar el listado de turnos en un formato CSV.
contentType: procedure
module: Planificación
submodule: Turnos y patrones
subtopic: ""
intent: Exportar y cambiar orden
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: cambiar
    label: Cambiar
  - id: exportar
    label: Exportar
  - id: orden
    label: Orden
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
    - https://manual.aturnos.com/knowledgebase/f-exportar-y-cambiar-orden/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/f-exportar-y-cambiar-orden/
ai:
  answerableQuestions:
    - ¿Cómo puedo exportar y cambiar orden?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/f-exportar-y-cambiar-orden/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/f-exportar-y-cambiar-orden/
  contentHash: d9932d48928e4cc1508f8f635faf4c660e29df2714e1654202dcf49ecfb7c304
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Aprende a exportar y cambiar orden, con instrucciones y contexto revisables por el equipo de aTurnos.

## Procedimiento
Te permite descargar el listado de turnos en un formato CSV. Es una funcionalidad muy útil, por ejemplo, para modificar cualquier variable de forma genérica a varios turnos y volver a importar el archivo en aTurnos. Así se evita modificar los tipos de turnos y absentismos, uno a uno, en el caso de equipos donde existe un importante listado de turnos.

El administrador puede ordenar los tipos de turnos, para que en el resto de herramientas de aTurnos se mantengan con este orden y así sea más sencillo de gestionar. Por ejemplo, se recomienda poner más arriba los turnos que más se utilizan para localizarlos más rápido. Para ello, y desde la acción cambiar orden, junto al botón de acción de exportar, se puede realizar este cambio de diferentes maneras:

1. Arrastrando al hacer clic la fila del tipo de turno, buscando el orden que se le quiera dar al tipo de turno que se arrastra de arriba, debajo y viceversa. Es necesario hacer clic en el botón “Guardar orden” (parte superior derecha) para que se guarde el nuevo orden de los turnos.
2. Asignando a cada turno una numeración, en la última columna llamada “orden” de la tabla. A menor valor numérico, más alta será la posición del turno. Es necesario hacer clic en el botón “guardar orden” (parte superior derecha) para que se guarde el nuevo orden de los turnos.
3. Por orden alfabético de la ‘A’ a la ‘Z’ y viceversa, atendiendo a las letras de las abreviaturas del tipo de turno. Para ello, se hace clic en la fecha que aparece en los enunciados de la columna denominada Abreviatura y descripción. Es necesario hacer clic en el botón “Cambiar orden” para que se guarde el nuevo orden de los turnos.
4. Por orden de hora de inicio de turno, al hacer clic en la flecha que aparece en las columnas de Inicio u Horario, los turnos se ordenan atendiendo a la hora de inicio del mismo. Es necesario hacer clic en el botón “Guardar orden” (parte superior derecha) para que se guarde el nuevo orden de los turnos.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![f. Exportar y cambiar orden](/media/manual/f-exportar-y-cambiar-orden-ea08d227b4.png)
