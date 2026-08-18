---
schemaVersion: "1.0"
contentId: "integraciones-y-api-guia-importacion-exportacion-de-datos-para-administradores"
title: "Importación / Exportación de datos para administradores"
description: "Información sobre importación / Exportación de datos para administradores, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Integraciones y API"
submodule: "Sistemas externos"
intent: "Importación / Exportación de datos"
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
  reviewedAt: 2026-01-27
  reviewDueAt: null
  sourceUrls:
    - "https://guias.aturnos.com/guias/otros-recursos-disponibles/integracion-con-sistemas-externos/importacion-exportacion-de-datos/"
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre importación / Exportación de datos para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
---
## Resumen

aTurnos facilita la gestión masiva de información de tu equipo mediante las funciones de importación y exportación. Desde la configuración inicial hasta la implementación en masa, estas herramientas te ahorran tiempo y aseguran una gestión eficiente.

### 1. Introducción

Las herramientas de importación y exportación en aTurnos te permiten:

- Importar datos: Añadir o actualizar grandes cantidades de información como horarios, turnos, fichajes y más.
- Exportar datos: Descargar información detallada en formatos personalizables, como Excel, para realizar análisis o reportes externos.

Estas funcionalidades son ideales para equipos grandes o situaciones donde manejar datos manualmente sería ineficiente.

### 2. Importación de datos

A. Consideraciones iniciales

Antes de empezar, verifica la configuración del formato en:

Administrar → Importar/Exportar → Configuración.

Esto garantiza que tus archivos cumplan los requisitos y eviten errores.

B. Tipos de importaciones más comunes

Útil para cargar de manera masiva información del personal.

Campos obligatorios:

- Nombre: Nombre completo del trabajador.
- Email: Correo electrónico del trabajador.
- Fecha de alta: Fecha de incorporación.

Campos adicionales recomendados:

- Localización: Área de trabajo del empleado.
- Rol de usuario en aTurnos: Define el nivel de acceso del trabajador: Superusuario: 50 Administrador Total: 40 Administrador Planificador: 30 Administrador Validador: 20 Trabajador: 1

Permite cargar múltiples tipos de turnos o motivos de absentismo de forma simultánea.

Campos obligatorios:

- Descripción: Nombre del turno.
- Abreviatura: Identificador corto (máx. 4 caracteres).
- Hora inicio: Hora de inicio del turno.
- Duración total: Duración completa del turno.
- Duración computada: Duración efectiva después de descontar descansos.

Campos adicionales recomendados:

- Absentismo: 1 para indicar absentismo, 0 para turnos regulares.
- Descanso: Duración del descanso (hh:mm).

Para cargar registros de entrada y salida de los empleados.

Campos obligatorios:

- Fecha: Fecha del fichaje (consulta formato en Configuración).
- Tipo de marcaje: Tipo de registro (entrada o salida).
- Dirección: 0 para entrada, 1 para salida.
- Email: Correo electrónico del trabajador.

### 3. Exportación de datos

A. Opciones de exportación estándar

- Desde pantallas específicas (como Cuadrante o Estadísticas), busca el icono de descarga.
- Selecciona el formato deseado para exportar el archivo.

B. Exportación avanzada

- Accede a Administrar → Importar/Exportar.
- Marca las casillas de los campos que deseas incluir en el archivo.
- Cada casilla seleccionada se traduce en una columna del archivo Excel.

Esta funcionalidad te permite personalizar tus exportaciones y simplificar la recopilación de datos clave.
