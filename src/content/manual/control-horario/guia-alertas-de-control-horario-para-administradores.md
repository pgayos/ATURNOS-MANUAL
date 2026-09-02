---
schemaVersion: "1.0"
contentId: control-horario-guia-alertas-de-control-horario-para-administradores
title: Alertas de control horario para administradores
description: El sistema de control de presencia está diseñado para garantizar la precisión y el cumplimiento en el registro de la jornada laboral.
contentType: troubleshooting
module: Control horario
submodule: Alertas
subtopic: ""
intent: Alertas de control horario
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
  reviewedAt: 2025-02-17
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/comunicacion-con-el-equipo/alertas-de-control-horario/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo resuelvo el problema: Alertas de control horario para administradores?"
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
    - https://guias.aturnos.com/guias/guias-administrador/comunicacion-con-el-equipo/alertas-de-control-horario/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/comunicacion-con-el-equipo/alertas-de-control-horario/
  contentHash: aa39cc9783bbaad026d5acef4f68db8d4da8132568d1da5878a906a5c5d9baa1
  migratedAt: 2026-08-18
order: 1
---
## Resumen

El sistema de control de presencia está diseñado para garantizar la precisión y el cumplimiento en el registro de la jornada laboral. Para un mejor control, puedes configurar alertas que notifican errores o incidencias en los fichajes de los trabajadores.

Estas alertas permiten:

1. Detectar discrepancias entre la planificación y los registros reales.
2. Evitar errores en la gestión de horarios, absentismos y descansos.
3. Mantener un control eficiente sobre las horas trabajadas y planificadas.

Cada alerta aparece junto a la línea del tiempo del empleado con un icono triangular. Al hacer clic en el icono, se detalla la naturaleza de la alerta. Aquí te explicaremos cómo interpretar y gestionar cada tipo de alerta.

### Configuración de Alertas

Puedes personalizar qué alertas deseas recibir y cómo se gestionan desde el apartado de ‘ Configuración de alertas ’:

1. Accede al menú principal y selecciona Control horario → Configuración
2. Dirígete a Alertas.
3. En «Calcular alertas» indica «Sí»
4. En alertas a mostra r, selecciona las alertas que quieres que se muestren.
5. Haz clic en el botón, añadir.
6. Guarda los cambios para aplicarlos de inmediato.

### Tipos de Alertas y Su Gestión

Descripción: Notifica si hay cambios solicitados por los trabajadores que aún no han sido aprobados o rechazados.

Acción pendiente: Accede al apartado de solicitudes pendientes y confirma o deniega el cambio.

Descripción: Indica que un trabajador realizó horas complementarias o extras durante un periodo de absentismo.

Acción pendiente: Revisa los registros de fichajes y ajusta el absentismo o las horas complementarias según sea necesario.

Descripción: Un trabajador fichó en un día donde su turno estaba configurado como sin horas.

Acción pendiente: Corrige la planificación del turno o valida el fichaje si fue autorizado.

Descripción: Un empleado fichó en un día en el que tenía absentismo planificado.

Acción pendiente Ajusta los fichajes o el periodo de absentismo para reflejar correctamente la situación.

Descripción: Un trabajador fichó en un día con turno de vacaciones (V).

Acción pendiente: Confirma si el fichaje fue un error y modifica los registros o la planificación.

Descripción: El fichaje realizado no coincide con las horas planificadas.

Acción pendiente: Comprueba el turno planificado y ajusta los fichajes o la planificación.

Descripción: Se registraron fichajes en días donde no había turnos asignados.

Acción pendiente: Valida si los fichajes son correctos y actualiza la planificación si es necesario.

Descripción: El trabajador anuló un descanso configurado automáticamente.

Acción pendiente: Revisa la política de descansos y ajusta los registros si procede.

Descripción: El trabajador no registró su descanso según las configuraciones.

Acción pendiente: Solicita los fichajes faltantes desde el apartado de “Peticiones de fichajes”.

Descripción: El descanso registrado supera el límite configurado.

Acción pendiente: Verifica los motivos del descanso prolongado y ajusta los registros.

Descripción: El descanso realizado es inferior al 50% del tiempo planificado.

Acción pendiente: Ajusta el registro del descanso o actualiza la planificación si corresponde.

Descripción: El trabajador no completó su fichaje (entrada o salida).

Acción pendiente: Solicita los fichajes faltantes o realiza un ajuste manual.

Descripción: Un empleado tiene 3 días consecutivos planificados sin registrar fichajes.

Acción pendiente: Verifica si hubo ausencias no justificadas y ajusta los registros.

Descripción: Un turno planificado no tiene fichajes registrados.

Acción pendiente: Consulta al trabajador o ajusta la planificación según corresponda.

Descripción: Un trabajador tiene un defecto de tiempo en su registro.

Acción pendiente: Revisa los fichajes y aplica las correcciones necesarias.

Descripción: La entrada al turno siguiente se registró antes de transcurrir 12 horas desde el último fichaje de salida.

Acción pendiente: Asegúrate de cumplir con las normativas laborales y ajusta los turnos.

Descripción: Un trabajador superó las 9 horas de presencia continuada.

Acción pendiente: Revisa la configuración del límite y ajusta los registros si procede.

Descripción: Existen tiempos de absentismo no justificados en los registros.

Acción pendiente: Justifica el absentismo o corrige los fichajes.

Descripción: El trabajador excedió el límite configurado de minutos trabajados.

Acción pendiente: Valida si se deben aplicar horas extras o ajusta la planificación.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
