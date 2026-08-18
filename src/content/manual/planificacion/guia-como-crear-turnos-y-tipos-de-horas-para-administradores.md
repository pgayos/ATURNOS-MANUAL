---
schemaVersion: "1.0"
contentId: planificacion-guia-como-crear-turnos-y-tipos-de-horas-para-administradores
title: Cómo crear turnos y tipos de horas para administradores
description: Una vez has añadido a tus trabajadores al equipo, el siguiente paso es el de crear turnos y tipos de horas que les planificarás posteriormente.
contentType: faq
module: Planificación
submodule: Turnos y cuadrantes
intent: Cómo crear turnos y tipos de horas
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
  reviewedAt: 2025-05-22
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/crear-y-asignar-turnos/como-crear-turnos-y-tipos-de-horas-2/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre cómo crear turnos y tipos de horas para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/crear-y-asignar-turnos/como-crear-turnos-y-tipos-de-horas-2/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/crear-y-asignar-turnos/como-crear-turnos-y-tipos-de-horas-2/
  contentHash: 3ce3a1ce20b3e7c26fb7a21df92d0122c1fe276dd657a5de17d1369514b21470
  migratedAt: 2026-08-18
---
## Resumen

Una vez has añadido a tus trabajadores al equipo, el siguiente paso es el de crear turnos y tipos de horas que les planificarás posteriormente. Con aTurnos, puedes configurar turnos y tipos de hora personalizados para adaptarte a las necesidades específicas de tu equipo.

## 1. Crear Tipos de Turno

Los tipos de turno son esenciales para planificar de manera eficiente. Aquí aprenderás a crearlos desde cero.

### 1.1. ¿Quién puede crear tipos de turno?

Solo los usuarios con los roles de Administrador, planificador, total o superusuario pueden realizar esta acción.

### 1.2. ¿Cómo crear un tipo de turno?

Ve a Planificador → Tipos de turno → Acciones → Crear turno.

Completa el formulario con la información básica:

- Descripción: Nombre del turno (por ejemplo, «Mañana»).
- Abreviatura: Código único para identificar el turno (por ejemplo, «M»).
- Inicio: Hora en que comienza el turno.
- Duración total: Tiempo total del turno (incluye descansos).
- Duración computada: Tiempo efectivo de trabajo. Si incluye un descanso de 30 minutos, réstalo aquí.

Opcionalmente, ajusta la Configuración avanzada, donde puedes:

- Permitir que el turno sea intercambiado entre trabajadores.
- Habilitar que los empleados soliciten trabajar este turno.
- Configurar el turno como vacaciones (si corresponde).

Haz clic en Guardar. El turno aparecerá en la lista de Tipos de turno.

Nota: La configuración avanzada es opcional. Si no la modificas, el turno funcionará correctamente con las configuraciones predeterminadas.

### 1.3. Turnos predeterminados en aTurnos

aTurnos incluye algunos turnos básicos:

L (Libre): Días no laborales.

V (Vacaciones): Computa como cero horas.

X (No disponible): El trabajador no puede ser planificado ese día.

Importante: Puedes planificar vacaciones como tipo de turno o como tipo de absentismo, dependiendo de cómo prefieras que sean contabilizadas. Como tipo de turno, se contabilizan como turno de cero horas, mientras que como tipo de absentismo puedes decidir si sumar las horas computadas o no.

## 2. Crear Tipos de Horas

En aTurnos, los tipos de horas te permiten contabilizar y clasificar las horas de trabajo según las normativas o necesidades de tu empresa.

### 2.1. Tipos de horas disponibles

- Normales: Horas incluidas en el contrato del trabajador.

Ejemplo: «Horas a recuperar» para equilibrar el saldo de horas.

- Complementarias: Horas adicionales que no forman parte del contrato estándar, aplicables solo a jornadas parciales.

Un trabajador con un contrato del 50% puede realizar hasta un 10% de horas complementarias.

- Extras: Horas extraordinarias que no computan dentro del horario contratado.

Según la legislación española, el límite anual es de 80 horas extras.

### 2.2. ¿Cómo crear un tipo de hora?

- Ve a Planificador → Tipos de turno → Acciones → Crear tipos de horas.
- Rellena el formulario: Nombre: Nombre del tipo de hora (por ejemplo, «Horas extra nocturnas»). Abreviatura: Código único (por ejemplo, «HEN»). Tipo: Selecciona Normal, Complementaria o Extra. Coeficiente: Multiplicador para calcular las horas. Por ejemplo, un coeficiente de 1.5 significa que las horas computarán un 50% más en las estadísticas.

Haz clic en Guardar para registrar el nuevo tipo de hora.

Nota: Los tipos de horas creados manualmente son personalizados y pueden no aplicar a restricciones específicas.

Configuración avanzada: Tanto en turnos como en horas, esta sección es opcional y no es necesario modificarla si no tienes requerimientos específicos.

Nota: La creación de turnos en aTurnos también puede realizarse a través de una importación masiva, consulta la sección de importaciones para ahorrar tiempo.

## 3. Jornadas partidas y Franjas horarias

Dentro del menú Planificador → Tipos de Turno, además de definir tipos de turno y horas, puedes aprovechar dos opciones más: Jornadas Partidas y Franjas Horarias. Ambas están pensadas para ofrecerte más flexibilidad y control al planificar el trabajo de tu equipo.

- Jornadas Partidas: Te permiten combinar varios turnos en una sola jornada con descansos definidos, ideal para reflejar horarios divididos (como “mañana y tarde”).
- Franjas Horarias: Agrupan intervalos de tiempo y ayudan a visualizar en las tablas de cobertura, cuántos turnos hay en cada franja, para que siempre haya personal suficiente en los momentos clave del día.

### 3.1. Configuración Paso a paso.

Cómo crear una jornada Partida

1. Accede a Planificador → Tipos de Turno. 2. Haz clic en el botón de Acciones (puede aparecer como tres puntos o similar). 3. Selecciona «Crear Jornada Partida «. 4. Rellena los siguientes campos:

- Descripción: Escribe un nombre claro, como «Mañana + Tarde».
- Seleccionar turnos: Elige hasta 3 turnos ya creados (por ejemplo, “M” y “T”).
- Localización: Solo modifica este campo si cada turno ocurre en un lugar distinto al habitual del trabajador.
- Haz clic en Guardar.

Cómo crear franjas horarias

1. Desde el menú de configuración del planificador, accede a la sección de Franjas Horarias. 2. Crea una nueva franja definiendo:

- El nombre de la franja (por ejemplo, “Franja Mañana”).
- El rango horario exacto (por ejemplo, de 08:00 a 12:00).
- Estas franjas se usarán en las tablas de cobertura para asignar turnos según la necesidad de personal en cada tramo horario.
