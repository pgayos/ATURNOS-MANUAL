---
schemaVersion: "1.0"
contentId: planificacion-guia-como-planificar-las-vacaciones-para-administradores
title: Como planificar las vacaciones para administradores
description: "aTurnos te ofrece dos formas principales de gestionar las vacaciones: como tipo de turno o como tipo de absentismo."
contentType: faq
module: Planificación
submodule: Vacaciones
intent: Como planificar las vacaciones
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
  reviewedAt: 2025-03-31
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-vacaciones/configuracion-vac/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre como planificar las vacaciones para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-vacaciones/configuracion-vac/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/gestion-de-vacaciones/configuracion-vac/
  contentHash: 34b95d9c409eb6a24ee809c25553b3bac1a6ac2016e3ae8c03399ef9de74c341
  migratedAt: 2026-08-18
order: 1
---
## Resumen

aTurnos te ofrece dos formas principales de gestionar las vacaciones: como tipo de turno o como tipo de absentismo. Ambas opciones están diseñadas para adaptarse a tus necesidades y facilitar la planificación de vacaciones en tu equipo. A continuación, te explicamos cómo configurarlas y utilizarlas paso a paso.

## 1. Configuración de Vacaciones

Puedes crear un tipo de turno de vacaciones siguiendo estos pasos:

- Ve a Planificador → Tipo de turno → Acciones → Crear turno.
- Introduce un nombre (ej. «Vacaciones») y una abreviatura (ej. «VAC»).
- No configures ningún tipo de hora.
- Haz clic en «Configuración avanzada» y selecciona «Marcar turno de tipo vacaciones» en «Sí».
- Haz clic en «Guardar».

Nota: Este tipo de turno computará como cero horas y estará disponible para planificar vacaciones.

Para gestionar las vacaciones como absentismo, realiza estos pasos:

- Ve a Planificador → Tipo de turno → Acciones → Crear absentismo.
- Introduce un nombre (ej. «Vacaciones») y una abreviatura (ej. «VAC»).
- Selecciona el tipo de absentismo: Vacaciones (las horas computadas suman), si quieres que se contabilicen. Vacaciones (no suma las horas computadas), si prefieres que no sean contabilizadas.
- Haz clic en «Guardar».

Si necesitas gestionar las vacaciones por horas, sigue estos pasos:

- Asegúrate de que el redondeo de vacaciones está configurado como «sin redondeo «.
- Solicita a soporte que añada el permiso correspondiente para gestionar este tipo de vacaciones.
- Configura el tipo de absentismo «Vacaciones» como temporal.
- Desde la opción Peticiones, selecciona el tipo «Vacaciones por horas» habilitado previamente.
- Guarda los cambios.

## 2. Planificación de Vacaciones en el Cuadrante

Una vez configurados los tipos de vacaciones, puedes planificarlas en el cuadrante de dos maneras:

1. El trabajador puede realizar una petición de vacaciones desde El cuadrante. El menú de Peticiones y Cambios.
2. Cuando el administrador recibe la solicitud, puede aprobarla.
3. Las vacaciones se aplicarán automáticamente al cuadrante.

- Ve al cuadrante y selecciona el día o los días correspondientes.
- Haz clic en «Modificar turno» y selecciona la opción «Vacaciones «.

El uso de patrones de vacaciones es una forma práctica de planificar periodos de vacaciones para varios trabajadores de manera eficiente, sin necesidad de solicitudes individuales. Este método es ideal cuando quieres aplicar un esquema predefinido, como una semana completa de vacaciones, a un grupo de empleados.

1. Configuración Previa: Crear el Tipo de Turno de Vacaciones

Antes de crear un patrón de vacaciones, asegúrate de tener configurado un tipo de turno específico para vacaciones. Si aún no lo has hecho:

- Ve a Planificador → Tipo de turno → Acciones → Crear turno.
- Introduce un nombre (ej. «Vacaciones») y una abreviatura (ej. «V»).
- No configures ningún tipo de hora y activa la opción «Marcar turno de tipo vacaciones» en la configuración avanzada.
- Haz clic en Guardar.

2. Crear un Patrón de Vacaciones

- Accede a Planificador → Patrones → Añadir.
- Define un nombre para el patrón (ej. «Semana de Vacaciones»).
- Configura una secuencia de 7 días con el turno de vacaciones que creaste anteriormente:
- Selecciona el tipo de turno «Vacaciones» (abreviatura «V») en cada día de la semana.
- Haz clic en Guardar.

3. Aplicar el Patrón a los Trabajadores

- Accede a Planificador → Patrones y elige el patrón de vacaciones que creaste.
- Indica el periodo de tiempo durante el cual se aplicará el patrón.
- S elecciona los trabajadores a los que deseas aplicar el patrón.
- Asegúrate de seleccionar la opción «Sustituir turnos» para reemplazar cualquier planificación existente durante el periodo seleccionado.
- Haz clic en Aplicar.

Nota: Al aplicar un patrón, se recomienda no guardar los datos de planificación en el patrón, ya que esto puede generar duplicados no deseados.

### 4. Diferencias entre Vacaciones como Turno y como Absentismo

- Aspecto | Tipo de Turno | Tipo de Absentismo
- Cómputo de horas | Las horas computadas son cero. | Puedes decidir si las horas suman o no.
- Visualización | Se muestra con un marco amarillo. | Además del marco amarillo, el fondo del cuadrante se colorea en amarillo.
