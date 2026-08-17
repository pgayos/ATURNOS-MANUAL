---
schemaVersion: "1.0"
contentId: "gestion-de-personal-7-listado-de-fichajes"
title: "Listado de fichajes"
description: "En esta consulta se informan todos los fichajes resumidos en un listado con los campos configurados en RRHH."
contentType: concept
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Listado de fichajes"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "fichajes"
    label: "Fichajes"
  - id: "listado"
    label: "Listado"
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - "https://manual.aturnos.com/knowledgebase/7-listado-de-fichajes/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/7-listado-de-fichajes/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre listado de fichajes?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "4888a91bfffa1d67108db901c42ce2a65e4b35cdd27f6628d8507987ceaa77a2"
  migratedAt: 2026-08-17
---
## Resumen

En esta consulta se informan todos los fichajes resumidos en un listado con los campos configurados en RRHH.

Es un informe similar al que se puede consultar por equipo en ‘Listado de fichajes’.

El listado se puede ver por pantalla o generar una ‘ Petición de reporte ‘ para su descarga cuando el volumen de datos se sobrepasa.

## Filtros

Se puede definir en la consulta:

- Fechas

- Equipos

- Trabajadores, filtrando por Nombre, Email o ID Empleado.

- Fichajes: Sin fichajes realizados. Con fichajes realizados.

- Ficticio, son todos aquellos trabajadores que al crearlo se les informa como ficticio, así como aquellos trabajadores que no tienen un correo real. Se puede filtrar por: Todos. Ocultar ficticios. Mostrar solo ficticios.

- Horario, Desde y Hasta una hora predefinida de la jornada planificada.

- Planificados, se pueden filtrar por aquellos trabajadores que tienen alguna planificación de turnos u horas. No está planificado. Está planificado.

## Variables

Encontramos la siguiente información en el listado, además de los campos configurados en RRHH:

- Hora de marcaje: muestra la fecha (dd/mm/aaaa) y la hora en la que se registró el marcaje.
- Dirección: indica si es una entrada o una salida.
- Localización: en el caso de que el marcaje esté asociado a alguna localización ( ver más sobre las localizaciones ), se indicará en esta columna.
- Computable: cuando se crea un Tipo de Marcaje, se informa si éste computa o no en el horario, en el caso de computar, aparecería un ‘Si’, en el caso contrario un ‘No’ ( ver más sobre tipos de fichajes ).
- Tipo de marcaje: informa del tipo de marcaje que se ha realizado si hay varios tipos creados: descansos, almuerzo, fumar, etc. ( ver más sobre tipos de fichajes ).
- Datos del fichaje: si estos han sido realizado desde un dispositivo registrado, por IP o Geolocalización.
