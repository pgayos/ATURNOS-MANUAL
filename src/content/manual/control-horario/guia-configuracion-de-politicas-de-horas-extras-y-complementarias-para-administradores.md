---
schemaVersion: "1.0"
contentId: control-horario-guia-configuracion-de-politicas-de-horas-extras-y-complementarias-para-administradores
title: Configuración de políticas de horas extras y complementarias para administradores
description: En aTurnos, la gestión de horas extras y complementarias se realiza de forma sencilla y controlada, gracias a la configuración de límites y restricciones automáticas.
contentType: reference
module: Control horario
submodule: Horas trabajadas
subtopic: ""
intent: Configuración de políticas de horas extras y complementarias.
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
    - https://guias.aturnos.com/guias/guias-administrador/control-de-horas-trabajadas-y-extras/configuracion-de-politicas-de-horas-extras-y-complementarias/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre configuración de políticas de horas extras y complementarias para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/control-de-horas-trabajadas-y-extras/configuracion-de-politicas-de-horas-extras-y-complementarias/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/control-de-horas-trabajadas-y-extras/configuracion-de-politicas-de-horas-extras-y-complementarias/
  contentHash: 73247c9c0f6d13cffe575afe865ea6a2151be1c082a3e2d857208eba4cd5a7d0
  migratedAt: 2026-08-18
order: 1
---
## Resumen

En aTurnos, la gestión de horas extras y complementarias se realiza de forma sencilla y controlada, gracias a la configuración de límites y restricciones automáticas. Esto asegura que la planificación respete las normativas laborales y las condiciones de los contratos de los trabajadores.

## Introducción

Las horas extras y complementarias se pueden ajustar tanto a nivel global como individual, y las restricciones garantizan que no se excedan los valores establecidos.

## Configuración de Horas Extras y Complementarias

- Acceso a la configuración global:
- Ve a Administrar → Configuración → General.
- Localiza los campos correspondientes: Horas extra anual: Indica el límite de horas extras permitidas al año. Horas complementarias por defecto: Define un valor estándar para estas horas.
- Ajuste en el perfil del trabajador: Accede al Perfil del trabajador. Personaliza el número de horas extras y complementarias al año asignadas a cada empleado según su contrato o convenio.

### Restricciones para Controlar las Horas Extras y Complementarias

En aTurnos hay una gran variedad de restricciones que puedes visualizar y configurar desde Planificador → Restricciones, en particular las que controlan las horas extras y complementarias se muestran en el grupo 5, algunas de las que te podrían interesar son:

Restricción 5.5: Limitar las horas extras planificadas al año a las informadas en el perfil del trabajador.

- Impide planificar horas extras que excedan el límite anual configurado en el perfil del trabajador.
- Ideal para garantizar el cumplimiento de límites legales o contractuales.

Restricción 5.8: Limitar las horas complementarias planificadas al año a las informadas en el perfil del trabajador.

- Restringe la planificación de horas complementarias cuando superan el máximo establecido.
- Útil para gestionar contratos de tiempo parcial y evitar errores en la planificación.

Restricción 5.9: No permitir planificar horas complementarias a los trabajadores de jornada completa.

- Bloquea la asignación de horas complementarias a empleados con contrato de jornada completa, según las normativas aplicables.

### Cómo Activar Restricciones

- Ve a Planificador → Restricciones.
- Selecciona las restricciones que deseas aplicar, en el caso de las horas complementarias y extras se encuentran en el grupo 5.
- Guarda los cambios para activar las restricciones en la planificación.

## Gestión de Horas en aTurnos

### Introducción

La funcionalidad de Gestión de Horas en aTurnos simplifica la administración del balance de horas adicionales o pendientes trabajadas por los empleados. Con esta herramienta, puedes:

- Compensar horas adicionales trabajadas en forma de tiempo libre o abono en nómina.
- Gestionar déficits de horas de manera clara y estructurada.
- Optimizar la administración horaria evitando cálculos manuales.

Antes, el proceso de compensar horas extra o distribuirlas entre pago y descanso era complejo. Ahora, la Gestión de Horas automatiza este proceso y te ofrece control y flexibilidad para personalizar las recompensas según las preferencias del trabajador.

### Acceder a la Gestión de Horas

Navega al perfil del trabajador:

- Ve a Administrar → Trabajadores en la web de aTurnos.
- Selecciona el trabajador cuyo balance de horas deseas gestionar.

Haz clic en la pestaña Gestión de Horas:

- Aquí encontrarás una tabla informativa con el balance mensual de horas trabajadas (positivas o negativas).

Para personalizar la información que deseas visualizar en la tabla:

Selecciona el tipo de horas teóricas:

- Horas contrato al mes (cálculo estimado): Configuradas en la pestaña General del perfil del trabajador.
- Horas contrato al mes (perfil del trabajador): Según el contrato establecido.
- Horas contrato al mes personalizadas: Define manualmente las horas teóricas por mes.

Elige el año:

- Filtra la información de un año específico.

La tabla de Gestión de Horas incluye las siguientes columnas:

- Mes: Lista los meses del año.
- Horas teóricas: Muestra las horas que deben trabajarse al mes según el convenio.
- Horas computadas: Indica las horas realmente trabajadas o planificadas.
- Ajustes de abono a nómina: Horas compensadas en la nómina del trabajador.
- Ajustes de acumulado: Horas compensadas como tiempo libre.
- Balance mensual: Horas restantes por ajustar cada mes.
- Balance acumulado neto: Horas pendientes con coeficiente aplicado.
- Balance acumulado bruto: Horas pendientes sin coeficiente aplicado.
- Acción: Un botón para compensar horas acumuladas.

Compensar en Tiempo de Descanso

Identifica las horas a compensar:

- En el campo Horas a compensar, introduce el número de horas.
- Aplica el coeficiente si corresponde.

Añade las horas:

- Haz clic en Añadir.
- Las horas compensadas aparecerán en la tabla inferior como un ajuste registrado.

Compensar en Nómina

- Introduce las horas a pagar: En el campo Horas a pagar, añade las horas a compensar mediante abono en nómina.
- Calcula el total aplicando el coeficiente si es necesario.
- Registra el ajuste: Haz clic en Añadir para confirmar la compensación.

En la parte inferior de la pantalla, encontrarás una tabla que resume todas las acciones realizadas:

- Ajustes realizados: Lista las horas compensadas como tiempo libre o abono en nómina.
- Horas pendientes: Muestra el balance de horas aún por ajustar.

## Gestión y Uso de Bolsas de Trabajo en aTurnos

### Introducción

La funcionalidad de bolsas de trabajo en aTurnos permite a los administradores gestionar grupos de trabajadores disponibles para turnos u horas específicas de manera eficiente. Este sistema organiza automáticamente a los trabajadores según el total de horas trabajadas en la bolsa, priorizando a aquellos con menos horas acumuladas y ajustando su posición con penalizaciones si es necesario.

### Creación y Configuración de una Bolsa de Trabajo

1. Crear una nueva bolsa:

- Ve al menú Administrar → Turnos/Horas de Bolsas.
- Haz clic en Añadir y asigna un nombre a la nueva bolsa.
- Una vez creada, usa el botón Editar (icono del lápiz) en la columna de acciones para configurar los detalles.

2. Configuración de la bolsa:

Al editar la bolsa, se muestra una tabla con las siguientes opciones:

- Nombre: Lista a los trabajadores disponibles.
- Participantes: Marca a los trabajadores que formarán parte de la bolsa. Puedes seleccionar de manera individual o a TODOS los trabajadores si es necesario.
- Horas iniciales: Agrega las horas que los trabajadores ya tenían acumuladas antes de implementar la funcionalidad.
- Penalización: Añade horas como penalización para ajustar la posición del trabajador en la lista. Estas horas se suman al total acumulado, descendiendo su prioridad.
- Última llamada: Registra la fecha del último turno u horas asignadas al trabajador.
- Total: Muestra el total de horas realizadas en la bolsa (incluyendo penalizaciones).

3. Guardar los cambios:

Tras configurar la bolsa, haz clic en Guardar para que los ajustes se apliquen.

## Cómo Insertar Horas en la Bolsa

Una vez creada la bolsa, puedes asignar turnos o registrar horas trabajadas. Este proceso es clave para mantener actualizados los totales de horas de cada trabajador en la bolsa.

### Planificar desde la Bolsa de Trabajo

1. Planificar un turno desde la bolsa de trabajo:

- Accede al Cuadrante.
- Selecciona un turno que desees asignar a trabajadores de la bolsa.
- El sistema priorizará a los trabajadores con menos horas acumuladas en la bolsa.

2. Planificar horas desde la bolsa de trabajo:

- Desde el Cuadrante, asigna directamente un número de horas específicas a trabajadores disponibles en la bolsa.
- Este método es ideal para tareas puntuales o proyectos específicos.

3. Planificar horas desde la bolsa a un trabajador específico:

- Localiza al trabajador en la bolsa.
- Asigna las horas deseadas manualmente.
- El total de horas de la bolsa se actualizará automáticamente.
