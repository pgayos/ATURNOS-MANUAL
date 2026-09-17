---
schemaVersion: "1.0"
contentId: costes-y-nominas-guia-conceptos-de-calculo-para-administradores
title: Conceptos de cálculo para administradores
description: En aTurnos, los conceptos de nómina convierten la planificación (turnos, cambios de horario y ausencias) en valores listos para nómina.
contentType: reference
module: Costes y nóminas
submodule: Nóminas
subtopic: ""
intent: Conceptos de cálculo
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
  reviewedAt: 2026-01-27
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/nominas/conceptos-de-calculo/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre conceptos de cálculo para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
labels:
  - PENDIENTE
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/nominas/conceptos-de-calculo/
  redirectFrom:
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/nominas/conceptos-de-calculo/
  contentHash: 7226ddea68915983d8f56e9fbdd9e44ad9c83b6959d04315eaf159b127079a98
  migratedAt: 2026-08-18
order: 1
---
## Resumen

En aTurnos, los conceptos de nómina convierten la planificación (turnos, cambios de horario y ausencias) en valores listos para nómina. En lugar de revisar cuadrantes y contar a mano, RR. HH. puede obtener reglas consistentes como “número de turnos”, “turnos dobles”, “turnicidad”.

### Introducción

En esta guía profundizamos en los conceptos más utilizados del Grupo 1: Turnos, explicando qué contabiliza cada uno, cómo trata los absentismos, y qué filtros aplicar para que el cálculo sea correcto por centro, categoría o tipo de día.

### Configuración

1. Preparación previa recomendada

Antes de crear conceptos, conviene comprobar que ya están definidos los elementos base que luego aparecen como filtros o desplegables en los conceptos:

- Localizaciones (centros o ubicaciones).
- Categorías de trabajadores.
- Tipos de turno (si vas a filtrar por turno).
- Tipos de absentismo (si vas a filtrar por absentismo).
- Festivos del equipo, incluyendo la distinción entre festivo normal y festivo especial.

Para revisar o añadir festivos, entra en Administrar → Festivos → Festivos del equipo. Al registrar un festivo, aTurnos permite indicar si es Festivo o Festivo especial, y esta diferencia puede ser clave cuando luego filtres conceptos por tipo de día.

2. Definir “Dónde computar las horas”

Aunque muchos conceptos del grupo Turnos no contabilizan horas (cuentan turnos), es importante que el criterio general del sistema esté alineado para evitar interpretaciones distintas en otros cálculos.

Para ello, ve a Administrar → Configuración y localiza el campo “Dónde computar las horas”. Selecciona el criterio que aplique según vuestra política interna y guarda los cambios.

Consejo práctico (RR. HH.): anotad este criterio en vuestra documentación interna para mantener consistencia cuando se comparen periodos.

3. Crear un concepto de nómina

La creación y edición de conceptos se realiza desde Administrar → Nóminas → Conceptos.

- Pasos generales: Entra en Administrar → Nóminas → Conceptos Pulsa Crear (o abre el concepto si vas a editarlo). Completa: Nombre del concepto (ej.: “Turnos dobles festivos”). Descripción Tipo de dato. Aquí aparece el listado de todos los conceptos. Filtros (localización, límite, Incluir como concepto seleccionado para nómina o forzar valores negativos a cero) Haz clic en Guardar. Valida con un caso real (un trabajador con turno normal + un caso con absentismo).

### Conceptos del Grupo 1: Turnos (los más utilizados)

Comportamiento con turnos:

- Descarga el número de turnos entrantes en el día seleccionado (cuenta los turnos cuyo inicio cae en ese día).
- Cuenta turnos por duración total, independientemente de la duración computada.
- No contabiliza horas (solo número de turnos).

Comportamiento con absentismos:

- Totales: descarga con justificado productivo; no descarga con justificado no productivo o no justificado.
- Temporales parciales: descarga siempre.
- Temporales completos: igual que total.

Filtros:

- Días de la semana: Elige en el listado los días de la semana, festivos, días previos a festivos…
- Categorías. Elige la categoría a la que aplica.
- Incluir turnos sin duración computada

Ejemplo: si seleccionas el día «Jueves», contará turnos que empiezan el «Jueves».

Comportamiento con turnos:

- Descarga el número de turnos dobles entrantes en cualquier día, excepto festivos y pre-festivos. Se considera “doble” cuando se realizan varios turnos en un día o cuando el turno supera un límite de horas definido. Ejemplo de cálculo (proporcional): Turno de 12 h con límite 8 h → excede 4 h → 0,5 turnos dobles.
- Cuenta por duración total.
- No contabiliza horas.

Comportamiento con absentismos

- Mismo criterio que “Turnos”.

Filtros:

- Localización
- Límite (horas)

Comportamiento con turnos:

- Igual que “Turnos doble”, pero aplicando a pre-festivos.
- Misma lógica de límite y cálculo proporcional.

Comportamiento con absentismos:

- Misma regla de absentismos.

Filtros:

- Localización
- Límite.

Comportamiento con turnos:

- Igual que “Turnos doble”, pero aplicando a festivos.
- Misma lógica de límite.

Comportamiento con absentismos:

- Misma regla de absentismos.

Filtros:

- Localización
- Límite.

Comportamiento con turnos:

- Añade una restricción indicando que un trabajador (o todos) solo puede hacer un tipo de turno por acuerdo/convenio/contrato.
- Al planificar, muestra una advertencia si se intenta asignar un turno distinto.

Filtros:

- Localización

Comportamiento con turnos:

- Descarga el número de turnos seleccionados cuando, además, existe un absentismo (seleccionado) de tipo total o temporal completo.

Filtros:

- Localización
- Turno (tipo de turno)
- Absentismo (tipo de absentismo)

Comportamiento con turnos:

- Compensa cambios en horarios midiendo diferencias entre horas de inicio de turnos en un periodo de referencia, definiendo: Cambios necesarios Horas mínimas entre turnos Horas máximas entre turnos

Incluye estas reglas:

- No cuenta intercambios entre trabajadores mediante el flujo del equipo.
- Puede considerar el turno “que le hubiera correspondido” en lugar del de vacaciones si la petición está en Historial de Peticiones.

Comportamiento con turnos:

- Igual que Turnicidad, pero analiza el mes anterior.

Comportamiento con turnos:

- Identifica cambios de planificación de diurno a nocturno según vuestra configuración de nocturnidad.

Comportamiento con turnos:

- Igual que la anterior, pero con referencia en el mes anterior.

1.1.11 Cálculo mediante tabla de coeficientes (activador 1/0)

Comportamiento con turnos:

- Devuelve 1 o 0 según lo que el trabajador tenga informado en su perfil, y se utiliza como activador para el pago de variables.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
