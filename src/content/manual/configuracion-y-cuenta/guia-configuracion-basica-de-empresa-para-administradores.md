---
schemaVersion: "1.0"
contentId: "configuracion-y-cuenta-guia-configuracion-basica-de-empresa-para-administradores"
title: "Configuración básica de empresa para administradores"
description: "Aprende a configuración básica de empresa para administradores, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Configuración y cuenta"
submodule: "Configuración inicial"
intent: "Configuración básica de empresa"
audience:
  - role: "Administrador"
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: 2026-01-14
  reviewDueAt: null
  sourceUrls:
    - "https://guias.aturnos.com/guias/guias-administrador/configuracion-inicial-del-equipo/ajustes-basicos-de-empresa/"
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo puedo configuración básica de empresa para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
---
## Resumen

Una vez iniciada la sesión, el rol que se te asigna por defecto es Administrador Total, por lo que podrás configurar el equipo acorde a las políticas y convenios de tu empresa. Esta pantalla incluye una muy extensa variedad de configuraciones para que puedas diseñar tu equipo a medida, pero no es necesario modificar todos los campos para que el equipo funcione. Modifica únicamente los que necesites y cuya configuración sea diferente a la configuración por defecto.

### Introducción

## Añade los convenios de tu empresa

En las opciones del menú, haz clic sobre Administrar → Configuración, y en la pestaña de configuración general puedes configurar datos como:

- Datos de convenio. Los datos de convenio contienen la información que regula términos y condiciones laborales. En este punto encontramos opciones configurables como: Horas al año: son el total de horas de trabajo anual acordadas. En jornada completa suele oscilar entre 1.750 y 1.800 horas, mientras que en jornada partida. En jornada parcial, depende del porcentaje, si la jornada parcial es del 50%, el trabajador realizaría entre 875 y 900 horas al año. Horas semanales. Horas mensuales. Horas por día.

Y adicionalmente encontramos:

- Horas extra anuales: Indica el máximo de horas extras establecidas al año por convenio y que no forman parte de la jornada efectiva de trabajo. El máximo legal en España es de 80 h/año, según lo establecido en el artículo 35.2 del Estatuto de los Trabajadores (ET).
- Horas complementarias por defecto: Indica el porcentaje de horas adicionales a las horas ordinarias pactadas en el contrato.
- Consideración de festivos.
- Vacaciones: En este campo se adaptan las vacaciones al convenio de cada empresa. Entre los datos que se pueden configurar encontramos: El número de vacaciones al año Si las vacaciones aplican a días naturales o laborables La fecha fin del periodo vacacional: esta fecha indica hasta qué día del año siguiente se pueden disfrutar los días de vacaciones que no se han disfrutado en su año fiscal correspondiente. Redondeo de vacaciones: Se trata de redondear el valor de las vacaciones, cuando este no es un número entero. Este caso ocurre cuando el trabajador se incorpora en una fecha que no es inicio de año. El redondeo se comportaría como +1 si es igual o mayor a 0.5.

En la pantalla Administrar → Configuración también encontramos configuraciones relacionadas con múltiples partes del convenio. Estas son muy especializadas, y recordamos que no es necesaria su modificación si esta no difiere del convenio de su empresa en particular.

- Cálculo estimado de horas. Este campo es una extensión del primer campo, el cual se puede configurar si se quiere detallar el convenio de una manera más avanzada. Ente las múltiples opciones que incluyen este campo destacamos que se pueden configurar datos como: Si se trabajan los festivos o el descanso semanal medio. Cálculo de jornadas. En este equipo se configuran las horas que componen una jornada. Entre los datos que se pueden configurar existen: Horas para considerar una jornada en un día, horas mínimas para considerar la jornada en ese día o incluso una configuración específica si el convenio incluyen varias jornadas. Ajuste de coeficientes en nocturnidad y festivos. Este campo se configura si en tu convenio se trabajan los festivos y si se trabajan nocturnidades. Y su configuración envuelve lo relacionado coeficientes de estas horas. Ajuste de absentismos. En este campo se configura todo sobre el tiempo afectado por absentismos. Entre la configuración encontramos: Si calcular los absentismos estimando las horas efectivas, los días a partir de los cuales se estimarán las horas de absentismos o si convertir los absentismos temporales que duren todo el turno en totales.

Nota: Es importante saber que lo que se configura en esta pantalla aplica a todos los trabajadores. Si algún trabajador del equipo tiene alguna configuración o convenio personalizado. Debe configurarse en su perfil del trabajador, que detallaremos más adelante.

## Privacidad

Si deseas dar acceso al equipo a tus trabajadores, un punto a revisar es desde Administrar → Configuración, la pestaña dedicada a la privacidad. Esta pestaña contiene todas las configuraciones que tienen relación con la información que se desea mostrar u ocultar al trabajador.

La pantalla de privacidad en aTurnos te permite controlar quién puede ver la información y cómo se comparte dentro del equipo. A continuación, te explicamos cada opción de manera sencilla para que puedas personalizar tu experiencia según tus preferencias y las políticas de tu empresa.

### Opciones principales

- Visibilidad del Administrador Total: Decide si el Administrador Total aparece en el cuadrante.

- Listado de compañeros: Controla si los trabajadores pueden ver la información básica de sus compañeros.

- Turnos de compañeros: Permite configurar si los trabajadores pueden visualizar los turnos de otros compañeros.

- Restricción por localización: Limita la visibilidad de turnos y compañeros a los que comparten la misma localización.

- Localizaciones visibles: Ajusta si los trabajadores pueden ver la información de las localizaciones asignadas a sus turnos.

- Autoasignación de turnos para administradores: Define si los administradores planificadores pueden asignarse turnos a sí mismos.

- Permiso para registrar absentismos: Establece qué roles pueden registrar sus propias ausencias o absentismos.

- Acceso al equipo: Configura si ciertos roles tienen acceso al equipo en aTurnos.

- Cambio de contraseña para nuevos usuarios: Obliga a los nuevos trabajadores a cambiar su contraseña al acceder por primera vez.

- Visualización de horas: Permite configurar si los trabajadores pueden ver horas registradas, ya sean propias o de otros.

- Visualización de absentismos: Ajusta cómo y quién puede visualizar las ausencias, ya sean propias o de otros compañeros.

- Registro de incidencias: Habilita o deshabilita la capacidad de los trabajadores para registrar incidencias en el sistema.

- Tooltip en el cuadrante: Decide si al pasar el cursor sobre un trabajador se muestra información adicional.

## Festivos

Configurar los días festivos en tu equipo es esencial para adaptar el cuadrante de trabajo y reflejar correctamente las condiciones salariales de estos días, ya sea porque no se trabaja o tienen un pago especial en nómina.

### Cómo añadir festivos

1. Accede al menú de festivos:

Ve a Administrar → Festivos en tu equipo.

2. Opciones para añadir festivos:

- Manual: Haz clic en Acciones → Añadir. Introduce los detalles del festivo, incluyendo si es repetitivo o especial.
- Importación: Selecciona Acciones → Importar festivos. Ingresa el código postal y el año. El sistema cargará automáticamente los festivos correspondientes.
