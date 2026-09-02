---
schemaVersion: "1.0"
contentId: planificacion-1-6-alertas-warnings
title: Alertas (Warnings)
description: El sistema de control de presencia avisa tanto en el ‘ Diario ‘, como en el ‘ Detalle por trabajador ‘ de sucesos que afectan al cómputo de los fichajes de cada trabajador.
contentType: troubleshooting
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Alertas (Warnings)
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: alertas
    label: Alertas
  - id: warnings
    label: Warnings
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
    - https://manual.aturnos.com/knowledgebase/1-6-alertas-warnings/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-6-alertas-warnings/
ai:
  answerableQuestions:
    - "¿Cómo resuelvo el problema: Alertas (Warnings)?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-6-alertas-warnings/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-6-alertas-warnings/
  contentHash: 374fe3b6f19a778614fe5ad04afc126dc291b62046c1f6b79a49f2c5ee2fd35a
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El sistema de control de presencia avisa tanto en el ‘ Diario ‘, como en el ‘ Detalle por trabajador ‘ de sucesos que afectan al cómputo de los fichajes de cada trabajador.

## Diagnóstico y solución
Las alertas pueden aparecer por errores al realizar los fichajes o por una mala planificación (absentismo o turnos de vacaciones erróneo). En la pantalla se mostrará junto línea del tiempo, una señal (icono triangular de peligro) que avisa de que existe una alerta.

Estas alertas se pueden parametrizar en ‘Configuración de alertas’.

Al hacer clic sobre el icono, se mostrará la descripción de la alerta. Existen las siguiente alertas:

Si los trabajadores tienen cambios solicitados que no han sido gestionados para aprobarlos o denegarlos por los administradores, se mostrará una alerta sobre el día afectado por el cambio.

Existen trabajadores que tienen planificadas horas extras/complementarias con un absentismo informado, habiendo fichado tales horas añadidas.

Si existe un tipo de turno sin duración total, ni computada, se considera un turno sin horas. Se mostrará la alerta “No debería de trabajar en este día” si los trabajadores han fichado en un día con un turno sin horas planificados.

Son trabajadores que estando de periodo de absentismo planificado en el cuadrante, han realizado algún fichaje en ese día.

Son trabajadores que han realizado fichajes teniendo planificado un turno (V) de vacaciones.

Son fichajes cerrados que no coinciden con los turnos y horas planificadas a los trabajadores en ese día.

Son trabajadores que han realizado fichajes pero no tenían ningún turno planificado en su cuadrante en ese día.

Aquellos trabajadores que tienen un descanso programado pero no ha sido fichado, pueden anularlo si está configurado de que se calcule automáticamente ese tiempo de descanso.

El trabajador puede anular el descanso.

Si el descanso es anulado, aparecerá esa alerta y desaparece el descanso descontado del detalle.

Si la configuración de los descansos indica que los descansos se ficha y no han sido fichados, aparecerá la siguiente alerta.

Esta alerta puede ajustarse por medio del botón “Solicitar fichaje” para hacer una solicitud de los fichajes del descanso que no se ha fichado (Añadir salida, comienzo del descanso y Añadir Entrada, final del descanso), como si de una petición de fichajes se tratara (ver Peticiones de fichajes ).

Si existe una configuración de descanso a nivel del trabajador (ver descanso trabajador ) o a nivel de un tipo de turno (ver descanso en tipo de turno ), cuando la duración del fichaje de la salida para hacer el descanso y la siguiente entrada para el final del mismo, sea mayor a una hora y media, se mostrará esta incidencia. Hay que tener en cuenta la configuración del “Tiempo máximo en minutos para considerar descanso”.

El empleado ha fichado un descanso menor del 50% del descanso que tiene planificado en su perfil del empleado o en el tipo de turno. Por ejemplo, si un trabajador tiene un tipo de turno que empieza a las 15:00 y acaba a las 22:00 horas, con un descanso planificado de 30 minutos y solo descansa 14 minutos, se mostrará esta incidencia.

Estos trabajadores no han completado el fichaje de ese día, por lo que el fichaje de entrada o salida, no tiene su par que cierra el fichaje.

Estos trabajadores han realizado algún fichaje en un día que tenía indicado un absentismo.

Fichajes no realizados en un día donde de los trabajadores tienen un tipo de horas extra o complementaria planificados.

Aquellos trabajadores que tienen planificados 3 días seguidos y no han fichado en ninguno de ellos, les aparecerá esta alerta.

Son trabajadores que no han realizado ningún fichaje y están planificados en su cuadrante.

Si el trabajador tiene peticiones pendientes de validar por los administradores, se muestra esta alerta.

Los trabajadores que hayan fichado con defecto de tiempo, tendrán un estado negativo y por tanto se mostrará esta alerta.

Si el trabajador ha fichado en su anterior turno la salida y el siguiente fichaje de entrada, se ha realizado antes de transcurrir 12 horas, se visualizará la alerta.

En este caso entre las 17:00 horas del día 15/04/2023 y las 04:00 horas del día 16/04/2023, solo han pasado 11 horas.

Si el trabajador tiene un descanso programado a nivel de turno o de trabajador, si el descanso fichado se supera, se muestra la alerta.

En este caso, si el turno tiene 15 minutos de descanso y el trabajador ha fichado 16 minutos, saltará la alerta.

Los trabajadores que hayan fichado desde la entrada al inicio del turno y la salida al final del turno, más de 9 horas, estarán afectados por esta alerta.

Se produce, cuando se ha fichado defecto de tiempo con respecto a la planificación, existe tiempo de absentismo pendiente de aplicar (de justificar) para ajustar el fichaje.

Por ejemplo si el final del turno era a las 14:00 horas, pero se fichó la salida a las 13:00 horas, esa hora de menos, es un absentismo pendiente de aplicar.

Tanto en la tolerancia a nivel de trabajador, como a nivel de equipo, se puede configurar un límite de minutos fichados.

Si el límite de minutos que se ficha es de 480 (8 horas) y el trabajador ficha de 08:00 a 12:00 horas (4 horas) y de 12:30 a 16:31 (4 horas y un minuto), el límite se supera por un minuto, mostrando la alerta.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-3257ba8913.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-dfa460e35d.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-c9abebb17b.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-b93b6b68c6.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-414026d858.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-7c9826ebb5.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-f6ee88f4b7.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-d619c315cd.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-0177be08f1.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-27e2e56fe7.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-b60e878bdd.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-e6f78df50e.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-63bbf2fe02.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-9017ae8836.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-ec0174f069.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-615cd84861.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-680560d211.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-f2c9ced17d.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-f85a3079d6.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-d9a57931f9.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-806fe5e1e5.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-6959006e3a.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-747d6c0ff3.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-fc9ca55f5d.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-191d3cf22f.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-020e81ff7c.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-4fe3c948f2.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-4db3e13e28.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-1b0145e708.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-25f3e03c52.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-7cb2786666.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-696373a500.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-c6c5ddcd4c.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-3580886c68.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-ce568bc9f6.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-a346dbae07.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-139c06de5d.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-636b121564.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-e04a9912bb.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-27f473f2e1.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-d629bc459b.webp)

![1.6 Alertas (Warnings)](/media/manual/1-6-alertas-warnings-e9951c054b.webp)
