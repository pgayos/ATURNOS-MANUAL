---
schemaVersion: "1.0"
contentId: control-horario-2-2-informe
title: Informe en aTurnos
description: En este informe se detalla toda la información que se necesita presentar ante la inspección laboral debido al obligado cumplimiento del registro de la jornada efectiva de trabajo, de acuerdo.
contentType: concept
module: Control horario
submodule: Fichajes
intent: Informe en aTurnos
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: informe
    label: Informe
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
    - https://manual.aturnos.com/knowledgebase/2-2-informe/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-2-informe/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre informe en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-2-informe/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-2-informe/
  contentHash: 6c4e2f551870f36046cc8e9685726e16ee42f221eb662a573ce750c3cd4b9223
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre informe en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
En este informe se detalla toda la información que se necesita presentar ante la inspección laboral debido al obligado cumplimiento del registro de la jornada efectiva de trabajo, de acuerdo con lo previsto en el Real Decreto de Ley 8/2019, de medidas urgentes de protección social y de lucha contra la precariedad laboral en la jornada de trabajo.

En la estructura del reporte se informarán los siguientes datos:

- Fecha: día, mes y año.
- Planificado: turno planificado en el día.
- Entradas: fichajes de entrada realizados en el día*
- Salidas: cada uno de los fichajes de salida realizados en el día.*
- Horas de absentismo: horas de menos registradas en el control de presencia con respecto al turno planificado.
- Horas voluntarias: horas que el trabajador hace de más de su turno planificado. Por ejemplo, un trabajador que accede a su puesto de trabajo 5 minutos antes, aunque tenga tomada una tolerancia de 5 minutos al inicio (ver tolerancias ), contará como 5 minutos que ha estado de manera voluntaria en el centro de trabajo o realizando su actividad. De la misma forma, si tiene tomada una tolerancia al final de jornada, informará el tiempo de más que no esté ajustado como horas extras.
- Estado: diferencia entre las horas planificadas y las presencial que no han sido ajustadas, ni como absentismo, ni como horas añadidas.

*Las entradas y salidas vienen acompañadas de una abreviatura (A, M, P o MP) que indica el origen de dicho marcaje. Siendo A=automático (originado por el fichaje del trabajador), M=Manual (insertado por el administrador de forma manual), P=Petición (fichaje solicitado mediante el proceso de petición de fichajes ) y por último MP=Petición de modificación de fichaje (solicitar una petición para modificar el día/hora/sentido, es decir si es entrada/salida, mediante el proceso de petición de modificación de fichajes ).

En la parte superior derecha de la tabla, se puede ver el botón para ‘Exportar’ el informe con los fichajes filtrados en la barra superior (fechas, trabajador, localización).

Este informe se puede descargar en dos formatos: Excel y PDF. También se puede exportar por el trabajador seleccionado en la barra superior o que se exporten los informes de todos los trabajadores del equipo.

A la hora de generar el informe, se pueden seleccionar qué campos se quieren o no exportar en el archivo.

En la siguientes imágenes se puede ver un ejemplo de un informe exportado en Excel y otro ejemplo exportado en PDF.
