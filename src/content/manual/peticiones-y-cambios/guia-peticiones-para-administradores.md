---
schemaVersion: "1.0"
contentId: peticiones-y-cambios-guia-peticiones-para-administradores
title: Peticiones para administradores
description: La función de Peticiones en aTurnos está diseñada para facilitar la gestión de solicitudes laborales de manera eficiente, tanto para empleados como para administradores.
contentType: concept
module: Peticiones y cambios
submodule: Autogestión
intent: Peticiones
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
    - https://guias.aturnos.com/guias/guias-administrador/empoderamiento-del-mando-y-del-trabajador/peticiones/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre peticiones para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
labels:
  - PENDIENTE
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/empoderamiento-del-mando-y-del-trabajador/peticiones/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/empoderamiento-del-mando-y-del-trabajador/peticiones/
  contentHash: ae5a1e1792993e1422f584b7a73d41ec01b2b86f4cb0ce77314643c6119da513
  migratedAt: 2026-08-18
---
## Resumen

La función de Peticiones en aTurnos está diseñada para facilitar la gestión de solicitudes laborales de manera eficiente, tanto para empleados como para administradores. Desde vacaciones hasta permisos especiales, aTurnos simplifica el proceso, asegurando que las solicitudes sean transparentes, organizadas y fáciles de administrar.

Introducción

- Para empleados: Puedes realizar peticiones directamente desde tu cuadrante o el menú de peticiones, y recibirás una notificación tan pronto sean gestionadas.
- Para administradores: Configura y supervisa las peticiones de forma centralizada, personalizando flujos de aprobación según las necesidades de tu organización.

Estas herramientas ayudan a mantener la productividad y el equilibrio del equipo, incluso durante ausencias.

### 1. Configuración y Uso

Cómo realizar una petición:

Desde el cuadrante:

- Haz clic en el día correspondiente.
- Selecciona Peticiones → Tipo de petición (por ejemplo, Vacaciones).
- Completa los detalles requeridos (como fechas) y haz clic en Guardar.

Desde el menú:

- Ve a Peticiones y cambios → Pendientes → Nueva petición.
- Escoge el tipo de petición y sigue las instrucciones en pantalla.

### 2. Tipos de Peticiones:

Vacaciones:

- Indica la fecha de inicio y fin.
- Recibirás una notificación de aprobación/denegación.
- Las vacaciones aprobadas aparecerán en el cuadrante con un marco amarillo y/o sombreado amarillo.

Permisos de días:

- Selecciona el tipo de absentismo (asuntos propios, etc.).
- En caso de aprobación, los días se mostrarán con un marco negro y se eliminarán los turnos planificados.

Permisos de horas:

- Define la franja horaria en que estarás ausente.
- Las aprobaciones mostrarán un evento adicional en el cuadrante con un marco negro.

Periodos de absentismo:

- Ideal para bajas prolongadas.
- Aparece sombreado en azul con un marco negro.

Libres:

- Solicita días libres si no se logró un cambio de turno con tus compañeros.
- Al aprobarse, los turnos asignados se eliminan.

Horas:

- Solicita horas de trabajo (normal, complementaria o extra).
- Las horas complementarias o extras se muestran con un marco marrón.

Turnos:

- Solicita un turno específico. No se mostrarán marcos adicionales en el cuadrante.

Configuración para Administradores:

1. Accede a Administrar → Configuración → Peticiones.
2. Configura:

- Flujos de aprobación: Define etapas y roles para aprobar solicitudes.
- Roles específicos: Asigna validadores (Administrador Validador, Planificador, o Total).

3. Guarda los cambios para que las reglas se apliquen automáticamente.

### Configuración de peticiones

Como administrador, puedes configurar varios aspectos de las peticiones que vas a recibir. Para ello accede a Administrar → Configuración → Peticiones. Estas configuraciones permiten personalizar el flujo de aprobación de peticiones, establecer roles específicos para la validación y definir diversas opciones relacionadas con la gestión de solicitudes.

- Flujo de Peticiones: Es posible personalizar el proceso de aprobación de las peticiones, similar a los cambios de turno. Se pueden definir múltiples etapas, asignando roles específicos de usuarios que aprobarán en cada paso. Por ejemplo, se puede configurar un flujo donde tanto un Administrador Validador como un Administrador Planificador puedan aprobar la petición, o establecer que solo un Administrador Total tenga la autoridad para la aprobación definitiva.

También puedes configurar:

- Autovalidación de Peticiones

Permite que los administradores validadores y planificadores aprueben sus propias solicitudes si están dentro del flujo de aprobación establecido.

- Aprobación por Administradores de Nivel Superior

Restringe la validación de peticiones a administradores de un nivel superior al solicitante.

- Aprobación por Administradores de Localización Padre

Limita la validación a administradores que pertenezcan a una localización superior en la jerarquía organizacional del solicitante.

- Denegación de Peticiones Similares en Otros Equipos

Si se rechaza una solicitud y existe una similar en otros equipos visibles para el administrador, estas también serán denegadas.

- Permitir Aceptar Ofertas a Trabajadores de Otras Localizaciones

Permite a los administradores para aceptar ofertas de trabajadores que no pertenezcan a su misma localización, lo que implica acceso a información de dichos empleados, como su planificación.

- Ofertas de Horas y Turnos en Fechas Pasadas.
- Notificaciones a Trabajadores y Administradores No Visibles.
- Cancelar Peticiones por Administradores Totales

Permite que las solicitudes de administradores totales sean aceptadas por otros administradores.

- Visualización de Peticiones de Compañeros

Permite a los trabajadores para ver las solicitudes de sus compañeros desde el cuadrante, incluso si aún no han sido aprobadas, lo que es útil para coordinar solicitudes y evitar solapamientos.

- Roles Mínimos para Aceptación de Peticiones de horas normales, extra o complementarias.
- Restricciones en Nuevas Peticiones

Otras Configuraciones:

- Rol Mínimo para Solicitar Absentismos a Otros Trabajadores
- Inserción Automática de Turnos tras Vacaciones
- Eliminación de Absentismos Temporales y Horas al Sustituir

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
