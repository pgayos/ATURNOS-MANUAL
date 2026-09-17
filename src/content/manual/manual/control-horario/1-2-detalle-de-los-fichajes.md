---
schemaVersion: "1.0"
contentId: control-horario-1-2-detalle-de-los-fichajes
title: Detalle de los fichajes
description: Los fichajes son todas aquellas líneas rojas que hay en la línea del tiempo de un día o aquellos fichajes cerrados que forman un periodo naranja entre el fichaje de entrada y el de salida.
contentType: concept
module: Control horario
submodule: Vacaciones y ausencias
subtopic: ""
intent: Detalle de los fichajes
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: detalle
    label: Detalle
  - id: fichajes
    label: Fichajes
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
    - https://manual.aturnos.com/knowledgebase/1-2-detalle-de-los-fichajes/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-2-detalle-de-los-fichajes/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre detalle de los fichajes?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-2-detalle-de-los-fichajes/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-2-detalle-de-los-fichajes/
  contentHash: a3be001de0e736985d7c9003239a610f214319257bcec5e32fd4da3f3b2842cc
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Los fichajes son todas aquellas líneas rojas que hay en la línea del tiempo de un día o aquellos fichajes cerrados que forman un periodo naranja entre el fichaje de entrada y el de salida.

## Qué debes saber
Al pasar el cursor sobre un fichaje (línea roja) o un fichaje completado (periodo naranja) se mostrará información sobre el fichaje realizado por el trabajador.

Cada fichaje insertado, puede ser modificable de forma manual, para ello hay más información en ‘ Modificar fichajes’.

La representación gráfica en la línea del tiempo, ayuda a entender los fichajes realizados en comparación con los turnos y/o tipo de horas planificadas en el cuadrante. Para ello se muestran distintos colores según el evento o acción:

Representa el horario planificado con turnos y/o un tipo de hora (de tipo normales) planificada en el cuadrante del equipo.

Representa un día de vacaciones planificado.

Muestra cualquier tipo de hora extra/complementaria planificada en el cuadrante o insertada mediante un ajuste con motivo de un exceso de tiempo sobre el turno planificado. También es posible que se muestren por una petición de horas del trabajador que haya sido aprobada por el administrador.

Representa la duración de un absentismo. Este absentismo puede afectar a la totalidad del turno y/o horas planificadas en el cuadrante, afectando todo el periodo negro al total de lo planificado.

El absentismo también puede ser temporal y afectar a parte de la totalidad de un turno y/o horas planificadas. El administrador puede haberlo planificado en el cuadrante o aprobado al ser pedido por los trabajadores mediante una petición. También se puede dar el caso al realizar la acción de ajuste de un fichaje cerrado con defecto de tiempo (teniendo en cuenta los tiempos de tolerancia previamente configurados).

Muestra gráficamente las horas trabajadas presenciales (las fichadas descontando los descansos no fichados) por el trabajador.

Representa un fichaje insertado que no está cerrado (una entrada sin salida o una salida cuya entrada no se fichó).

Indica un fichaje no computable que no está cerrado.

Representa un fichaje no computable cerrado (una entrada con una salida no computable).

Muestra gráficamente un turno sin horas.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.2 Detalle de los fichajes](/media/manual/insertar-o-modificar-marcajes-fe79415dd9.png)

![1.2 Detalle de los fichajes](/media/manual/1-4-anadir-insertar-modificar-y-cerrar-fichajes-22fe4ecb01.webp)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-e1b7422a23.png)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-e49ffd2980.webp)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-c82821aa0a.png)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-80e8c39bea.webp)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-558697faae.png)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-37621d2603.webp)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-3c0af9c10e.png)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-e168c6344e.png)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-499d4cd59f.webp)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-56c9fb6f91.webp)

![1.2 Detalle de los fichajes](/media/manual/1-2-detalle-de-los-fichajes-8c774eb72d.webp)
