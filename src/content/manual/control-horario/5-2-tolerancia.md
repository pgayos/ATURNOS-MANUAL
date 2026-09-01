---
schemaVersion: "1.0"
contentId: control-horario-5-2-tolerancia
title: Tolerancia
description: La tolerancia es el lapso de tiempo que se permite al trabajador para poder realizar un fichaje de entrada o salida de su turno de trabajo planificado, sin que se cuantifique como defecto o.
contentType: concept
module: Control horario
submodule: Fichajes
subtopic: ""
intent: Tolerancia
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: tolerancia
    label: Tolerancia
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
    - https://manual.aturnos.com/knowledgebase/5-2-tolerancia/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-2-tolerancia/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre tolerancia?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-2-tolerancia/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-2-tolerancia/
  contentHash: e9926e65fada8f7d1c86e58a0d49f6bd4423f4346a55b88d5b33822bd773b384
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre tolerancia, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
La tolerancia es el lapso de tiempo que se permite al trabajador para poder realizar un fichaje de entrada o salida de su turno de trabajo planificado, sin que se cuantifique como defecto* o exceso** de tiempo. Si existe diferencia por defecto o exceso (estado), entre la duración del fichaje cerrado (horas presenciales) y la duración total de los turnos u horas planificadas (horas realizadas), superando el tiempo de tolerancia, se generará un ajuste de fichajes.

Esta tolerancia se puede calcular de las siguientes formas:

En este caso, la tolerancia engloba el total de la jornada/día en el que está planificado un turno de trabajo u horas. El sistema calcula el defecto o exceso de tiempo registrado en la jornada de trabajo, añadiendo un ajuste con absentismos si existe defecto de tiempo (insertándose al inicio del turno u horas planificadas).

Por el contrario, se añadirá un ajuste con un tipo de horas añadidas (normales, extras, complementarias o de un tipo personalizado) en el caso de que exista exceso de tiempo (insertándose al final del turno u horas planificadas).

Esta opción, permite definir dos tolerancias distintas. Una tolerancia al inicio y otra tolerancia en la hora fin del turno u horas planificadas. En este caso, se calcula un total entre el exceso y defecto de tiempo al inicio del turno. Y otro total entre el exceso y defecto de tiempo final del turno. Por ejemplo, esta función es relevante para concretar los tiempos de incorporación al puesto de trabajo o de finalización del servicio.

En último lugar, se pueden configurar hasta cuatro tipos de tolerancias. Se pueden indicar una tolerancia para el tiempo de defecto al inicio del turno (retraso a la entrada) y otra tolerancia por exceso al inicio del turno (entrar antes en el puesto de trabajo). De la misma forma, se puede disponer de una tolerancia por defecto de tiempo al final del turno (salir antes del trabajo) y otra tolerancia por exceso de tiempo al final del turno (acabar más tarde un servicio).

Para más información con algunos ejemplos, consultar nuestro articulo del blog “Una forma nueva de gestionar las tolerancias del Control Horario “.

* Defecto de tiempo: fichar menos tiempo, ya sea por llegar más tarde de la hora inicio del turno o por salir antes de la hora fin del turno. ** Exceso de tiempo: fichar más tiempo, ya sea por llegar antes de la hora inicio del turno o por salir más tardes de la hora fin del turno.

Si se ha elegido la primera opción en el punto anterior, la tolerancia a rellenar es la total de toda la jornada, por ejemplo: 15 minutos.

Si se ha elegido la segunda opción en el punto anterior, las tolerancias a rellenar son las del inicio y fin de cada turno realizado, por ejemplo: 5 minutos en el inicio y 5 minutos en el final.

Y en última opción, se podrá aplicar una tolerancia por defecto o exceso de tiempo al inicio del turno, así como una tolerancia al final del turno por defecto o exceso. Por ejemplo: 5 minutos por exceso de tiempo al inicio, 10 por defecto de tiempo al inicio, 5 minutos por defecto de tiempo al final del turno y 10 minutos por exceso de tiempo al final del turno.

- Calculando los periodos de absentismos y horas extra. Esta opción permite que se ajuste el tiempo según haya defecto de tiempo (absentismo) insertando un tipo de absentismo si se ha producido al inicio o final del turno. Y en el caso de que el ajuste se realice por un exceso de tiempo (horas añadidas) insertará un tipo de hora al inicio o final del turno.
- Calculando el total de horas de la jornada que faltarían de ajustar. En este caso, solo se añade un ajuste. El sistema calcula de forma automáticamente sumando el tiempo de exceso y restando el defecto de tiempo. Si el resultado es positivo (hay exceso de tiempo) se insertará un ajuste con un tipo de hora al final del turno. Si el resultado es negativo (hay defecto de tiempo) se insertará un ajuste con un tipo de absentismo.

Tiempo en minutos de la tolerancia que puede ser recuperable cuando se ha fichado tiempo de menos (Llegar tarde) al inicio del turno planificado. Por ejemplo, si hay tolerancia recuperable de 10 minutos, si el trabajador llega 10 minutos tarde, se puede quedar al final de la jornada para recuperarlo.

Si llegase más tarde de esos 10 minutos no podría recuperarlo y afectaría al estado, siempre y cuando esté marcada la opción de ‘Restar la tolerancia del total si se supera’.

Para que este tiempo recuperable aparezca en el detalle, se debe configurar la visualización de la columna ‘Horas recuperadas’ en el detalle.

Esta función no permite superar el número de horas que devuelve la comparación entre las horas planificadas y las horas presenciales según el valor informado.

Por ejemplo, si en un turno planificado de 7 horas, el trabajador ficha 8 horas y 30 minutos, en el estado únicamente se contarán los 60 minutos configurados.

No permite superar el número de minutos configurados que se computan entre el fichaje de entrada y salida, es decir de “Horas presenciales”.

Por ejemplo, si se indican 480 minutos, el límite de fichaje estaría en 8 horas. Si se ficharan 8 horas y 30 minutos, solo se computarían 8 horas.

Es decir, si el trabajador tiene un horario de 9:00 a 14:00 y efectúa el fichaje de entrada a las 9:09 teniendo una tolerancia de 15 minutos, con esta opción activada, el sistema al ajustar el fichaje considera que existe un absentismo de 9 minutos (es decir, no tiene en cuenta la tolerancia).

Activando esta función, permite que en el informe del control de presencia que se tenga que presentar ante la inspección laboral, en el estado tenga en cuenta el tiempo de tolerancia configurado.

Es decir, si el trabajador tiene un horario de 9:00 a 14:00 y efectúa el fichaje de entrada a las 9:20 teniendo una tolerancia de 15 minutos, con esta opción activada, el sistema al ajustar el fichaje considera que existe un absentismo de 5 minutos (es decir, resta la tolerancia de los 20 minutos).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5.2 Tolerancia](/media/manual/5-2-tolerancia-7e9612fe4b.webp)

![5.2 Tolerancia](/media/manual/5-2-tolerancia-649340eaad.webp)

![5.2 Tolerancia](/media/manual/5-2-tolerancia-d796e09b6e.webp)

![5.2 Tolerancia](/media/manual/5-2-tolerancia-648b261c87.webp)

![5.2 Tolerancia](/media/manual/5-2-tolerancia-825513ac60.webp)

![5.2 Tolerancia](/media/manual/5-2-tolerancia-292fbac106.webp)

![5.2 Tolerancia](/media/manual/5-2-tolerancia-de741b7036.webp)

![5.2 Tolerancia](/media/manual/5-2-tolerancia-7396f29460.webp)
