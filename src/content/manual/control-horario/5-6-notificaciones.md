---
schemaVersion: "1.0"
contentId: control-horario-5-6-notificaciones
title: Notificaciones
description: Los trabajadores o administradores pueden ser notificados en dos casos:.
contentType: reference
module: Control horario
submodule: Fichajes
intent: Notificaciones
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: notificaciones
    label: Notificaciones
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
    - https://manual.aturnos.com/knowledgebase/5-6-notificaciones/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-6-notificaciones/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre notificaciones?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-6-notificaciones/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-6-notificaciones/
  contentHash: 528fb04913d549243b7fa847932b416b66f9c9db0c373c62634ab7a1d3edb03a
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Los trabajadores o administradores pueden ser notificados en dos casos:.

## Opciones y datos disponibles
- Fichaje realizado sobre un día de vacaciones.
- Horas Extra/Complementarias sin fichar.

Al activar esta opción, los usuarios escogidos, recibirán un correo cuando un trabajador realice un marcaje en un día planificado con vacaciones. La notificación es inmediata.

En este caso, si un trabajador no ficha un tramo completo de horas complementarias o extras, recibirán un correo los usuarios escogidos en la configuración. Este aviso no es inmediato, sino que se calcula en un proceso nocturno, y se notifican pasadas las 24 horas del evento.

Existen dos configuraciones:

- Usuario implicado, al estar marcada la opción en “Si”, el usuario implicado recibiría las notificaciones activadas (independientemente de su rol, al ser su propia gestión de fichajes).
- Nivel mínimo y nivel máximo, para escoger desde qué rol de administradores deben recibir las notificaciones y hasta qué rol como máximo.

Por ejemplo, si se quiere activar que se notifique a los administradores validadores y planificadores cuando un trabajador suyo realiza un fichaje en vacaciones, pero no se quiere notificar al trabajador afectado, tendríamos la siguiente configuración.

Por otro lado, si se quiere notificar a los trabajadores para recordarles de que no han fichado sus horas extra o complementarias planificadas, pero no queremos que sus administradores reciban nada al respecto, tendríamos la siguiente configuración.
