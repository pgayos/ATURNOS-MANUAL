---
schemaVersion: "1.0"
contentId: peticiones-y-cambios-guia-solicitar-aprobar-y-gestionar-permisos-bajas-para-administradores
title: Solicitar, aprobar y gestionar permisos, bajas para administradores
description: Gestionar los permisos y bajas de los empleados es esencial para mantener un equipo organizado y una planificación eficiente.
contentType: procedure
module: Peticiones y cambios
submodule: Permisos y bajas
subtopic: ""
intent: Solicitar, aprobar y gestionar permisos, bajas
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
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-permisos-y-absentismos/solicitar-aprobar-y-gestionar-permisos-bajas/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Cómo puedo solicitar, aprobar y gestionar permisos, bajas para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-permisos-y-absentismos/solicitar-aprobar-y-gestionar-permisos-bajas/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-permisos-y-absentismos/solicitar-aprobar-y-gestionar-permisos-bajas/
  contentHash: 55435590aa0f189734d65f098505678b5e55ed0688e800a200ee4895cd2e9ddc
  migratedAt: 2026-08-18
order: 1
---
## Resumen

Gestionar los permisos y bajas de los empleados es esencial para mantener un equipo organizado y una planificación eficiente. Con este sistema, los trabajadores pueden solicitar permisos fácilmente, mientras que los administradores tienen herramientas claras para aprobar, denegar o deshacer solicitudes. Además, se contemplan diferentes tipos de permisos según las necesidades específicas, como permisos de días, permisos de horas o periodos de absentismo.

## 1. Configuración inicial:

Antes de comenzar, asegúrate de que los trabajadores y los absentismos estén registrados en el sistema.

Configuración del flujo de aprobaciones (si aplica):

- Accede a Administrar → Configuración → Peticiones
- Define los niveles de aprobación necesarios, asignando roles como validador, planificador o superusuario.

## 2. Procedimiento para gestionar solicitudes:

Para los trabajadore s:

1. Realiza la petición

- Accede a tu cuadrante o al menú de «Peticiones y cambios «.
- Selecciona el tipo de permiso: Permiso de días (abs. total): Para ausencias completas que pueden ser o no consecutivos. Permiso de horas (abs. temporal): Para ausencias parciales durante el día. Periodo de absentismo: Ideal para bajas médicas o ausencias prolongadas de manera consecutiva.
- Rellena los datos requeridos y envía la solicitud.

Para los administradores:

1. Gestiona las notificaciones de solicitudes:

- Recibirás una notificación en forma de globo rojo sobre tu avatar cuando haya solicitudes pendientes.
- Haz clic en el globo o ve a Cuadrante → Peticiones y cambios → Pendientes.

Acciones disponibles:

- Aprobar: La solicitud se inserta automáticamente en el cuadrante del trabajador.
- Denegar: La solicitud se elimina y el cuadrante permanece sin cambios.
- Deshacer: Si ya aprobaste la solicitud y deseas revertirla, accede al histórico en Cuadrante → Peticiones y cambios → Histórico.

Flujo de aprobación multinivel:

Si el flujo tiene varios niveles, las solicitudes pendientes aparecerán en rosa claro. Al ser aprobadas por el primer nivel, cambian a un rosa más oscuro para el siguiente nivel.

### Ejemplos de Casos de uso

Caso 1: Solicitud de un permiso breve.

Marta, una asistente administrativa, necesita un permiso de dos días para atender asuntos personales. Desde su menú de «Peticiones y cambios», solicita un permiso de días (abs. total). El administrador revisa la petición y la aprueba, asegurándose de que el cuadrante se actualice automáticamente.

Caso 2: Gestión de una baja médica.

Luis, un operario, presenta una baja médica que durará una semana. En este caso, elige la opción de «periodo de absentismo», ya que está diseñado para ausencias prolongadas. El administrador valida la solicitud, que aparece reflejada en el cuadrante como periodo de absentismo.

Caso 3: Flujo de aprobación multinivel.

En una empresa grande, las peticiones de ausencia pasan por dos niveles de aprobación: un validador y un administrador. Cuando Juan solicita un permiso, su solicitud pasa primero al validador. Una vez aprobado, se marca con un color más oscuro en el sistema para que el administrador total dé la aprobación final.
