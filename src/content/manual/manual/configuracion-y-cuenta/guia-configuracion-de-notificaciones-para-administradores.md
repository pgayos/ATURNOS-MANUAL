---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-guia-configuracion-de-notificaciones-para-administradores
title: Configuración de notificaciones para administradores
description: aTurnos permite personalizar las notificaciones para que cada usuario reciba únicamente la información relevante según su rol.
contentType: procedure
module: Configuración y cuenta
submodule: Comunicación y notificaciones
subtopic: ""
intent: Configuración de notificaciones
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms:
  - web
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: 2026-01-14
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/comunicacion-con-el-equipo/configuracion-de-notificaciones/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Cómo puedo configuración de notificaciones para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
labels:
  - PENDIENTE
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/comunicacion-con-el-equipo/configuracion-de-notificaciones/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/comunicacion-con-el-equipo/configuracion-de-notificaciones/
  contentHash: b7602354de68e97afcaf559feb94d53b5429c709dc7ed57501f2eb67bdef596b
  migratedAt: 2026-08-18
order: 1
---
## Resumen

aTurnos permite personalizar las notificaciones para que cada usuario reciba únicamente la información relevante según su rol. Este sistema asegura una comunicación eficiente, evitando la sobrecarga de correos y asegurando que las acciones importantes sean notificadas a tiempo.

### 1. Acceso al menú de notificaciones

Haz clic en Administrar → Configuración → Notificaciones en el menú principal de aTurnos.

Identifica los procesos y roles que deseas personalizar.

### 2. Configurar notificaciones por proceso

Cada proceso relevante cuenta con sus propias opciones:

- CUADRANTE:

Notifica cambios como añadir, eliminar o modificar turnos.

- CAMBIOS DE TURNO:

Notifica solicitudes y aprobaciones según el flujo configurado.

- PETICIONES (vacaciones, permisos, etc.):

Recibe alertas sobre solicitudes y aprobaciones.

- DENEGACIONES DE PETICIONES Y CAMBIOS:

Configura notificaciones para rechazos de peticiones o cambios de turno.

- OTROS PROCESOS:

Notificaciones sobre comentarios, tareas, control horario, documentos y más.

- Horizonte de notificación: Es el límite de tiempo que define si una acción en el cuadrante genera o no una notificación, considerando su fecha y la hora actual.

### 3. Seleccionar el grado de notificación

Para cada proceso, elige el nivel de envío adecuado:

Alta: Notifica a los pocos minutos.

Media: Agrupa acciones de una hora en un único correo.

Baja: Envía notificaciones al día siguiente.

No: Desactiva las notificaciones.

Ejemplo:

Para el Tablón de Anuncios, selecciona NO si no quieres saturar con notificaciones frecuentes por comentarios.

Ejemplo de configuración de notificaciones

- Proceso | Trabajadores | Validadores | Planificadores | Superusuario
- Cuadrante | No | Baja | Alta | Alta
- Cambios de Turno | Alta | Media | Media | Baja
- Peticiones | Alta | Alta | Media | Baja
- Denegar peticiones y cambios | Alta | Media | No | No
- Chat/tablón de anuncios | Media | Baja | Baja | No
- Tareas | Media | No | Alta | Media
- Control Horario | No | No | Media | Baja
- Comentarios en Cuadrante | No | No | Media | No
- Documentos | Baja | No | No | Alta

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
