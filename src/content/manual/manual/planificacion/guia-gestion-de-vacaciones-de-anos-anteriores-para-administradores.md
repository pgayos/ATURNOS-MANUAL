---
schemaVersion: "1.0"
contentId: planificacion-guia-gestion-de-vacaciones-de-anos-anteriores-para-administradores
title: Gestión de vacaciones de años anteriores para administradores
description: En aTurnos, la gestión eficiente de los días de vacaciones pendientes es clave para mantener un control claro del tiempo libre de los empleados y evitar desajustes en la planificación.
contentType: procedure
module: Planificación
submodule: Vacaciones
subtopic: ""
intent: Gestión de vacaciones de años anteriores
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
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-vacaciones/vacaciones-anterior/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Cómo puedo gestión de vacaciones de años anteriores para administradores?
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
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-vacaciones/vacaciones-anterior/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-vacaciones/vacaciones-anterior/
  contentHash: 959ef21d73d0ae47154df7831fdc6e9e0684af603a5d1fecfdf1fcd1b83c890a
  migratedAt: 2026-08-18
order: 1
---
## Resumen

En aTurnos, la gestión eficiente de los días de vacaciones pendientes es clave para mantener un control claro del tiempo libre de los empleados y evitar desajustes en la planificación. Esta funcionalidad te permite trasladar los días no disfrutados del año anterior al nuevo periodo vacacional, asegurando su correcta contabilización y uso antes de que expiren.

### 1. Configuración del Fin del Período Vacacional

- Antes de utilizar cualquiera de los métodos, asegúrate de configurar correctamente hasta cuándo se pueden usar los días del año anterior. Pasos: Accede a Administrar → Configuración. En la sección “Vacaciones”, localiza el campo Fin del período vacacional. Define la fecha límit e del nuevo año en la que aún se pueden usar los días del año anterior. Ejemplo: Si seleccionas el 31 de marzo, los días no utilizados de 2025 podrán utilizarse hasta el 31 de marzo de 2026.

### 2. Métodos para Ajustar Vacaciones Pendientes

Este método es útil cuando quieres automatizar la asignación de vacaciones anteriores a través de absentismos sin cambiar los saldos globales.

Pasos a seguir:

1. Crear un tipo de absentismo:

- Ve a Planificador → Tipo de turno → Acciones → Crear absentismo.
- Nómbralo como «Vacaciones Año Anterior» (VAA) y configúralo como absentismo justificado.
- Asegúrate de que computen las horas asociadas.

2. Configurar una restricción:

- Ve a Administrar → Restricciones.
- Crea la restricción «1.11 Máximo de un tipo de turno o absentismo planificado al año».
- Define el valor como el número de días pendientes del año anterior.
- Selecciona el trabajador al que aplica.

Nota: Desde el perfil del trabajador → General en el botón Acciones, haciendo clic en trasladar, te configura la restricción casi automáticamente, teniendo que personalizar únicamente algunos campos.

3. Planificación:

El administrador planifica los días de vacaciones utilizando el absentismo «VAA» hasta alcanzar el límite establecido por la restricción.

Este proceso ajusta automáticamente el saldo de vacaciones entre años y aplica a múltiples trabajadores simultáneamente. Se puede realizar desde el perfil del trabajador, de manera individual o de manera masiva desde RR. HH. → Acciones → Migrar saldos de horas y vacaciones.

Pasos a seguir para migrar las vacaciones de manera individual:

- Accede al perfil del trabajador al que deseas realizar la migración.
- En la pestaña General busca el apartado de tiempos.
- Haz clic en el botón Acciones, que aparecerá únicamente si tienes vacaciones disponibles.
- Haz clic en el botón Migrar y tras hacer clic de aceptar el saldo del año actual quedará a 0 y se pasarán las vacaciones pendientes al año siguiente.

Pasos a seguir para migrar las vacaciones masivamente:

- Selecciona los equipos para los que deseas realizar la migración.
- En el ajuste selecciona una de las siguientes opciones: Ajustar por planificación: traslada al año siguiente solo los días de vacaciones pendientes. Ajustar por contrato: traslada al año siguiente todos los días de vacaciones del contrato, aunque ya se hayan disfrutado.

Ejemplo: Contrato de 20 días y 2 días disfrutados:

Por planificación → 18 días

Por contrato → 20 días

- Selecciona el año origen y el año destino.
- Elige el dato o combinación de datos que desees migrar.

Ideal para ajustes individualizados y específicos.

Pasos a seguir:

- Accede al perfil del trabajador.
- Realiza los siguientes ajustes:
- Decrementar saldo en el año anterior: Reduce el saldo del año donde aún hay vacaciones pendientes.
- Incrementar saldo en el año siguiente: Añade los días pendientes al balance del nuevo año.

Ejemplo:

Un trabajador con 10 días pendientes de 2023 tendría los siguientes ajustes:

- Decrementar el saldo de 2023 en 10 días (quedando en 0).
- Incrementar el saldo de 2024 en 10 días, sumándolos al saldo asignado por convenio.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
