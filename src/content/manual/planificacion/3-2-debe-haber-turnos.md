---
schemaVersion: "1.0"
contentId: planificacion-3-2-debe-haber-turnos
title: Debe/Haber turnos
description: En el Debe/Haber de aTurnos se visualizan las “deudas” de turnos entre los trabajadores de un mismo equipo.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
intent: Debe/Haber turnos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: debe
    label: Debe
  - id: haber
    label: Haber
  - id: turnos
    label: Turnos
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
    - https://manual.aturnos.com/knowledgebase/3-2-debe-haber-turnos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/3-2-debe-haber-turnos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre debe/Haber turnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/3-2-debe-haber-turnos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/3-2-debe-haber-turnos/
  contentHash: 4cb167ad3589f58396bec9e3526d0f708c4d9557e1a3d62da5ca138d5a30e6ff
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre debe/Haber turnos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
En el Debe/Haber de aTurnos se visualizan las “deudas” de turnos entre los trabajadores de un mismo equipo. Tanto el trabajador como el administrador pueden entrar en detalle, en esta función del menú, para saber si los cambios de turnos, en los que se encuentran implicados, han sido cerrados o no, es decir si no existen deudas de cambios de turnos.

La función debe/haber ofrece una tabla con información si el trabajador que esta logueado debe algún turno a otro compañero del equipo, o por el contrario es el compañero quién le debe algún turno. El debe/haber estará sin “deudas” de cambios de turnos si esta tabla se encuentra vacía, en el caso de que haya alguna deuda de cambios de turno es señal de que hay cambios que aún no se han cerrado.

Estas deudas de cambios pendientes por devolver, se generan cuando se hacen un cambio de turnos entre trabajadores desde el cuadrante ‘Hacer cambios’, en los tipos de cambios por los distintos tipos de cambio: Libres o Doblajes de turno, y siempre que no se “devuelva el cambio”.

Ver registro, ofrece en detalle los cambios que les deben y/o los que deben los trabajadores.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![3.2 Debe/Haber turnos](/media/manual/3-2-debe-haber-turnos-da3bc4f529.png)

![3.2 Debe/Haber turnos](/media/manual/3-2-debe-haber-turnos-364e87a4a4.png)
