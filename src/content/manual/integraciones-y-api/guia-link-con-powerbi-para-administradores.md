---
schemaVersion: "1.0"
contentId: "integraciones-y-api-guia-link-con-powerbi-para-administradores"
title: "Link con PowerBI para administradores"
description: "Desde aTurnos puedes crear reportes personalizados y visualizarlos directamente en PowerBI. Esta integración es ideal para analizar datos como turnos, ausencias, productividad y otros indicadores clave."
contentType: procedure
module: "Integraciones y API"
submodule: "Sistemas externos"
intent: "Link con PowerBI"
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
    - "https://guias.aturnos.com/guias/otros-recursos-disponibles/integracion-con-sistemas-externos/link-con-powerbi/"
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Cómo puedo link con PowerBI para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
---
## Resumen

Desde aTurnos puedes crear reportes personalizados y visualizarlos directamente en PowerBI. Esta integración es ideal para analizar datos como turnos, ausencias, productividad y otros indicadores clave.

## 1. Introducción

## 2. Paso a paso para configurar y descargar los reportes

### A. Generar y guardar el reporte en aTurnos

- Accede a la sección de reportes:

Ve a Estadísticas → Reportes del trabajador.

- Configura el reporte: Establece las fechas de inicio y fin. Selecciona las variables que deseas incluir en el reporte. Configura la vista deseada (periodo, mes, año). Elige el cuadrante desde el cual se extraerán los datos.
- Carga el reporte:

Haz clic en el botón Cargar para visualizar el reporte generado.

- Guarda el reporte: Haz clic en Guardar → Guardar reporte (botón a la izquierda de «Cargar»). Asigna un nombre al reporte y haz clic en Guardar.
- Obtén el ID del reporte: Ve a Estadísticas → Reportes del trabajador → Reportes guardados. Selecciona el reporte guardado. Copia el número al final de la URL; este es el ID del reporte.

### B. Recolectar los datos necesarios para la consulta

ID del equipo:

- Accede a Administrar → Configuración → Módulos.
- Busca el ID del equipo en la parte inferior de esta pantalla.

Token del API:

- Ve al Perfil del trabajador → Configuración.
- Haz clic en Tokens del API.
- Selecciona Ver Token y copia el valor llamado «Token».

### C. Consultar el reporte en PowerBI

- Abre PowerBI: Ve al menú principal y selecciona Nueva consulta → Consulta web. Configura la consulta avanzada: Haz clic en Uso avanzado.
- Inserta esta URL: https://www.aturnos.com/apirest/:id_aturno/statistics/reports/:id_saved_reports Sustituye los valores::id_aturno por el ID del equipo.:id_saved_reports por el ID del reporte. Añade parámetros al enlace: Incluye las fechas de inicio y fin del reporte:?start_date=AAAA-MM-DD&end_date=AAAA-MM-DD

- Define los encabezados de la solicitud HTTP: En el campo de la izquierda escribe: Authorization. En el campo de la derecha escribe: Bearer token, donde «token» debe ser sustituido por el Token del API obtenido previamente.
- Genera la consulta: Haz clic en Aceptar para ejecutar la consulta. Ahora podrás visualizar en PowerBI el reporte generado en aTurnos.
