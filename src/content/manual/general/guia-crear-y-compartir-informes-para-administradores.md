---
schemaVersion: "1.0"
contentId: general-guia-crear-y-compartir-informes-para-administradores
title: Crear y compartir informes para administradores
description: aTurnos ofrece una herramienta avanzada de generación de reportes que facilita el análisis de datos clave tanto a nivel individual como colectivo.
contentType: concept
module: General
submodule: Informes y estadísticas
intent: Crear y compartir informes
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
  reviewedAt: 2025-02-05
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/creacion-de-informes-personalizados/configuracion-de-metricas-clave-de-gestion-y-planificacion-horaria/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre crear y compartir informes para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/creacion-de-informes-personalizados/configuracion-de-metricas-clave-de-gestion-y-planificacion-horaria/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/creacion-de-informes-personalizados/configuracion-de-metricas-clave-de-gestion-y-planificacion-horaria/
  contentHash: 5fe26fc1978f15abfeec5fe3696552adb9d4b162006ba9d5aae9cde6650f9f0b
  migratedAt: 2026-08-18
order: 1
---
## Resumen

aTurnos ofrece una herramienta avanzada de generación de reportes que facilita el análisis de datos clave tanto a nivel individual como colectivo. Desde el menú de Estadísticas, puedes crear reportes personalizados sobre planificación, control horario, absentismos, y más. Esto es especialmente útil para optimizar la gestión de equipos, identificar tendencias y tomar decisiones informadas.

## Guía para la Generación de Reportes en aTurnos

### Introducción:

- Gestión de un equipo en retail: Un administrador puede extraer reportes mensuales sobre las horas nocturnas y festivas trabajadas por empleados, para garantizar el cumplimiento de la legislación laboral y calcular compensaciones.
- Control de absentismo en una oficina: Genera un reporte detallado de las ausencias clasificadas por tipo (vacaciones, enfermedad, etc.), para detectar patrones que puedan afectar la productividad.
- Optimización de turnos en una fábrica: Crea un informe que combine horas fichadas dentro de turno y horas extra para evaluar si los recursos están siendo utilizados de manera eficiente.

### Configuración de Reportes:

Si tienes el rol de Administrador Total, puedes crear reportes individuales y colectivos siguiendo estos pasos:

1. Accede al menú Estadísticas:
2. Navega a Estadísticas → Reportes por trabajador para informes individuales.
3. O selecciona Estadísticas → Reportes de localizaciones para informes colectivos.
4. Selecciona las variables.
5. Elige entre categorías como Planificación, Absentismos, Horas, Control horario, entre otras.

Por ejemplo:

- Planificación: Vacaciones, Horas extra, Jornadas computadas.
- Absentismos: Tipos de ausencias o total de horas ausentes.
- Horas: Diferentes subgrupos como horas normales, complementarias o extra.

Personaliza la visualización:

1. Configura cómo deseas visualizar los datos: por mes, día, año o periodo específico.
2. Indica el cuadrante del que deseas extraer los datos.

Carga y guarda el reporte:

1. Haz clic en Cargar para generar la tabla con la información seleccionada.
2. Guarda el reporte haciendo clic en el botón correspondiente
3. Navega en Estadísticas → Reportes guardados para futuras consultas.

Los Superusuarios en aTurnos tienen acceso avanzado a la generación de reportes, incluyendo los mismos disponibles para Administradores Totales (por trabajador y por localización) y una f uncionalidad adicional: reportes por equipo. Esta herramienta permite analizar datos a mayor escala, ideal para supervisar el rendimiento y la planificación de equipos completos en distintas ubicaciones o departamentos.

Para acceder a ella debes seguir esta ruta RRHH → Estadísticas → Reportes por equipos.

Selecciona las variables:

- Elige una o más categorías como Planificación, Absentismos, Horas, o Control horario.

Ejemplo:

- Planificación: Vacaciones, Jornadas computadas.
- Absentismos: Horas de absentismo clasificadas por tipo.
- Horas: Subgrupos de horas normales, extra o complementarias.

Configura la visualización:

- Define cómo quieres visualizar los datos: por mes, día, año o periodo personalizado.
- Indica el cuadrante o grupo de datos del que deseas extraer información.

Selecciona los equipos:

- Marca los equipos específicos que necesitas incluir en el reporte.

- Haz clic en Cargar para que el sistema comience a procesar el reporte.
- Si el volumen de datos es alto, se creará una petición de reporte, en lugar de generarlo de forma instantánea.
- Accede a RRHH → Peticiones de reportes para visualizar las solicitudes activas.
- Una vez completada la generación del reporte, podrás: Verlo haciendo clic en el botón del ojo. Descargarlo para compartirlo o integrarlo con otros sistemas. Guardarlo para consultarlo más tarde o mantener la configuración de visualización realizada anteriormente. Para guardarlo haz clic en el botón a la izquierda de cargar.

- Elige el reporte guardado que deseas programar.
- Haz clic en Guardar y selecciona «Envío automático «. Marca esta opción como Sí.
- Configura los parámetros: Frecuencia: diaria, semanal, mensual, etc. Fecha de inicio: determina cuándo comenzará el envío automatizado. Ejemplo: Si configuras la frecuencia mensual y seleccionas el 13/12/2024 como fecha de inicio, el reporte se enviará el 13 de cada mes con los datos correspondientes.
