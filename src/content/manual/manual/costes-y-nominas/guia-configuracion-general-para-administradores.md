---
schemaVersion: "1.0"
contentId: costes-y-nominas-guia-configuracion-general-para-administradores
title: Configuración General para administradores
description: La exportación a nóminas permite descargar las variables de nómina (por ejemplo, nocturnidad, festivos, jornadas, etc.) a partir de la planificación registrada en el cuadrante.
contentType: troubleshooting
module: Costes y nóminas
submodule: Nóminas
subtopic: ""
intent: Configuración General
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
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/nominas/configuracion-general/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo resuelvo el problema: Configuración General para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
labels:
  - PENDIENTE
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/nominas/configuracion-general/
  redirectFrom:
    - https://guias.aturnos.com/guias/otros-recursos-disponibles/nominas/configuracion-general/
  contentHash: 80bde22062a23095544fd6e2ab08d258150f14d51e3ad641498f2b8eac1d6edd
  migratedAt: 2026-08-18
order: 1
---
## Resumen

La exportación a nóminas permite descargar las variables de nómina (por ejemplo, nocturnidad, festivos, jornadas, etc.) a partir de la planificación registrada en el cuadrante. Esta configuración es clave porque define cuándo se puede exportar, quién puede modificar fechas de cierre y cómo se calculan conceptos sensibles (como turnos nocturnos y festivos).

### Introducción

Estas opciones están pensadas para evitar errores habituales en nómina, como exportar datos antes de tiempo, recalcular variables sin control o modificar turnos cuando el periodo ya debería estar “bloqueado”. En el día a día, esto se traduce en más seguridad, menos revisiones manuales y ahorro de tiempo en cierres mensuales.

Para comenzar, entra en Administrar → Configuración → General y, haciendo scroll, localiza el apartado Nóminas. Ahí encontrarás los parámetros generales que condicionan todo el procedimiento de descarga de variables.

### Configuración de exportación a nóminas

Este ajuste define en qué estado debe estar el cuadrante para permitir la descarga de variables de nómina. Lo encontrarás en Administrar → Configuración → General, dentro del apartado Nóminas, en la opción Modo de validación para la exportación.

Las opciones disponibles son:

- No necesita validación: la descarga siempre se puede ejecutar.
- El cuadrante debe estar cerrado (recomendado): se permite descargar variables hasta la fecha de fin de cierre de cuadrante.
- El cuadrante debe estar cerrado y validado: se permite descargar si el cuadrante está cerrado y, posteriormente, validado; la descarga se permite hasta la fecha de fin de validación.

Ten en cuenta que cerrar el cuadrante impide modificar la planificación (añadir, modificar o borrar turnos, horas y absentismos temporales) hasta el día de la fecha de cierre informada. Tras el cierre, otro usuario (habitualmente con rol superior) puede validar el cálculo de conceptos de nómina por el importe total de cada concepto por equipo.

Este ajuste controla si se puede re-descargar conceptos ya exportados o si se bloquea para evitar duplicidades. Se configura en Administrar → Configuración → General, dentro de Nóminas, en la opción Descarga de nómina.

Las opciones disponibles son:

- No permitir la descarga de conceptos anteriormente descargados (recomendado).
- Permitir la descarga de conceptos anteriormente descargados.

En ambos casos, al ejecutar el cálculo/exportación, se registra en el perfil del trabajador la fecha del último día exportado, que actúa como “límite” de descarga. Por ejemplo, si el último día exportado es 19/03/2022, solo se podrán descargar conceptos desde ese día en adelante. Si se permite re-descargar, cada ejecución volvería a descargar los conceptos.

Para consultar estas referencias, entra en el perfil del trabajador y revisa la pestaña “Nóminas”, donde se muestran: Fecha de cierre de cuadrante, Fecha de validación y Último día exportado.

Este ajuste define qué ocurre si alguien intenta modificar planificación cuando el trabajador tiene una fecha de cierre informada (especialmente cuando no todos los trabajadores comparten la misma fecha, como en finiquitos). Se configura en Administrar → Configuración → General, dentro de Nóminas, en Comportamiento de aviso de cuadrante cerrado por nómina.

Los comportamientos disponibles son:

- Deseable: permite modificar la planificación, pero la aplicación muestra un aviso en pantalla.
- Obligatoria: no permite la modificación de la planificación.

Este punto es especialmente relevante en entornos donde RR. HH. y managers comparten la operativa, porque define si el sistema actúa como recordatorio (avisa) o como control estricto (bloquea).

Aquí defines qué nivel de usuario puede modificar fechas de cierre (del cuadrante y del empleado) y si puede “reabrir” hacia atrás. Todos estos ajustes se encuentran en Administrar → Configuración → General, dentro del apartado Nóminas.

4.1 Nivel que puede cambiar la fecha de cierre del cuadrante (a futuro)

Ejemplo: si el cuadrante está cerrado a 28/02/2022, el rol indicado puede cerrarlo a 31/03/2022, pero no moverlo a 31/01/2022. Opciones:

- Administrador Validador
- Administrador Planificador
- Administrador Total (por defecto)
- Superusuario (recomendado PYMES y Grandes Empresas)
- Ningún nivel permite modificar la fecha de cierre del cuadrante

4.2 Nivel que puede cambiar la fecha de cierre de un empleado

Opciones:

- Administrador Validador
- Administrador Planificador
- Administrador Total (por defecto)
- Superusuario (recomendado en PYMES y Grandes Empresas muy descentralizadas)

4.3 Nivel para modificar la fecha de cierre del cuadrante a una fecha anterior

Opciones:

- Administrador Validador
- Administrador Planificador
- Administrador Total (por defecto)
- Superusuario (recomendado en PYMES y Grandes Empresas muy descentralizadas)

Sugerencia práctica: documenta internamente qué rol usaréis en cada caso (por ejemplo, “Superusuario” para RRHH central y “Administrador” para responsables de tienda).

### Configuración de nocturnidad, festivos y cálculo de jornadas

Para indicar el rango horario que se considera nocturno, entra en Administrar → Configuración y localiza la primera sección de la pantalla (parte superior). Ahí podrás informar los campos Inicio de nocturnidad y Fin de nocturnidad.

Este ajuste es importante porque condiciona el cálculo de variables asociadas a turnos que caen dentro del tramo nocturno.

Para definir qué días se consideran festivos según el convenio, ve a Administrar → Configuración y busca el campo “Consideración de festivos según convenio”. Desde ahí podrás elegir entre:

- Se considera festivos sábados, domingos y festivos indicados
- Se considera festivos domingos y festivos indicados
- Se considera festivos solo los festivos indicados

Además, para registrar festivos locales, por CCAA y estatales, accede a Administrar → Festivos. En esta sección debes crear los festivos e indicar si tienen la consideración de festivos especiales a efectos de nómina.

Este ajuste define cómo se imputan (y, por tanto, se pagan/calculan) las horas nocturnas cuando un turno empieza un día y termina otro. Lo encontrarás en Administrar → Configuración, dentro de la sección “Cálculo estimado de horas”, en el campo “Computar las horas en el día de inicio”.

Comportamiento:

- Si está en SI: todas las horas nocturnas se calculan en el día de inicio.
- Si está en NO: las horas nocturnas se calculan en el día en que se realizan.

Ejemplo (turno 22:00 a 08:00):

Con SI: 10 horas nocturnas computan en el día de inicio.

Con NO: 2 horas nocturnas en el día de inicio y 8 horas nocturnas en el día final.

Para que aTurnos calcule correctamente Jornadas, Jornadas Nocturnas, Jornadas Festivas, Jornadas Festivas Especiales, etc., debes definir cuatro variables desde Administrar → Ajustes → Configuración.

Notas clave:

- Los conceptos que recuperan jornadas son los conceptos tipo 1.4 (según tu referencia al manual de “Conceptos 1.4”).
- Los valores se expresan en centesimal, no en horas (importante para evitar errores al introducir minutos/decimales).

Variables a definir (4):

1. Horas de trabajo efectivo para considerar jornada (por defecto 0).
2. Horas mínimas para considerar la jornada en ese día (para turnos nocturnos que cruzan día; por defecto 0).
3. Límite de horas para considerar una jornada adicional (por defecto 24h).
4. Horas para considerar jornada nocturna (por defecto 0).

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
