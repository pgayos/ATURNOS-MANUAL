---
schemaVersion: "1.0"
contentId: gestion-de-personal-f-visualizacion
title: Visualización
description: Aquí se puede configurar la visualización de los datos que se necesite tener en el cuadrante.
contentType: procedure
module: Gestión de personal
submodule: Contratos
intent: Visualización
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: visualizacion
    label: Visualizacion
synonyms: []
prerequisites: []
platforms:
  - web
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/knowledgebase/e-visualizacion/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/e-visualizacion/
ai:
  answerableQuestions:
    - ¿Cómo puedo visualización?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/e-visualizacion/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/e-visualizacion/
  contentHash: 950908b6f1387a2c6da5cc62d34cef458848a19da2c83510f2c8eb55c13ca4fd
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Aquí se puede configurar la visualización de los datos que se necesite tener en el cuadrante.

### Ver los turnos libres vacíos. Sino le aparecen: L

Si se desactiva esta opción (seleccionando NO), en las casillas del cuadrante que representan los días libres se indicará con la abreviatura “L”, la “L” representa que está Libre (no tiene turno de trabajo planificado).

Con la opción activada en la cuadrante (Seleccionando SI) no aparece vacío sin ningún tipo de abreviatura cuando no hay turno, es la opción que recomendamos para simplificar la información del cuadrante.

### Ordenar trabajadores por localización por defecto

Los trabajadores se clasifican en el cuadrante según la localización que se indica en su perfil. Se agrupan los trabajadores de forma más visual centrándose en la localización del trabajador.

Así quedarían ordenados por localizaciones.

### Comienzo de semana

A efectos de cálculos, se trata del primer día de la semana por defecto.

De esta forma, por defecto aparece como primer día de la semana el Lunes, pero se puede establecer por ejemplo que sea el Domingo, mostrándose la información en el tooltip de las horas semanales de domingo a sábado.

### Campos identificativos de los trabajadores en el cuadrante

Estos datos ayudan a identificar a cada trabajador. Se pueden añadir datos como:

- Nombre.
- ID usuario (número de identificación de aTurnos).
- ID empleado (número de identificativo del sistema integrado).
- Teléfono.
- Localización.
- Categoría.
- Perfil.
- Datos personalizados (se puede seleccionar cualquier dato personalizado creado).
- Horas por semana.
- Horas periodo visible.
- Balance de horas.
- Balance horas contrato/mes.
- Porcentaje de jornada.
- Horas normales.
- Horas extra.
- Horas complementarias.
- Fecha cierre del cuadrante.
- Fecha de validación de cierre de cuadrante.
- Horas contrato semana.
- Horas contrato mes.
- Fecha de alta.

### Campos identificativos del tooltip del trabajador en el cuadrante

El tooltip del trabajador muestra información adicional que aparece al pasar el cursor sobre el nombre del trabajador en el cuadrante.

Se puede añadir o quitar información.

- Año: muestra las horas del presente año que han sido planificadas en relación a las horas al año por contrato.
- Mes: informa las horas al mes planificadas en el mes que se está visualizando, en comparación con las horas al mes que tiene por contrato.
- Periodo visible: indica las el número de horas que hay visibles en el cuadrante según el tipo de vista seleccionado en la barra superior del cuadrante.
- Semanas: horas planificadas por semana(s) visible(s)/número de horas semanales configuradas para cubrir el contrato (definidas en Administrar-Ajustes-Configuración general en el campo: “Horas semanales por defecto”, o en el perfil del trabajador ).
- Teléfono: número de teléfono indicado en los datos personales del perfil del trabajador (ver más).
- ID Empleado: número identificativo del trabajador (normalmente este campo del perfil del trabajador es usado para identificar a los trabajadores con sus números de referencia en otros sistema integrados con aTurnos) (ver más).
- Porcentaje de jornada: indica el número de porcentaje de jornada que tiene informado en su perfil de trabajador.
- Horas complementarias anuales: muestra las horas complementarias planificadas en el año respecto al número de horas complementarias que por contrato a tiempo parcial debe realizar en función al porcentaje informado en su perfil de trabajador (porcentaje de jornada inferior al 100%) y las horas año correspondientes por contrato.
- Horas complementarias mensuales: muestra las horas complementarias planificadas en el año respecto al número de horas complementarias que por contrato a tiempo parcial debe realizar en función al porcentaje informado en su perfil de trabajador (porcentaje de jornada inferior al 100%) y de las horas al mes a realizar.
- Horas extra: indica la comparación entre las horas extras planificadas y las disponibles según contrato que han sido informadas en su perfil.

### Campos identificativos en los reportes de localizaciones

Añadir información de ‘Datos personalizados’, para ser mostrados en los ‘Reportes por localización’.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![f. Visualización](/media/manual/f-visualizacion-0d5eb286d8.png)

![Sino le aparecen: L](/media/manual/sino-le-aparecen-l-c2b86fc615.webp)

![Sino le aparecen: L](/media/manual/sino-le-aparecen-l-bc6b8f092d.webp)

![Ordenar trabajadores por localización por defecto](/media/manual/ordenar-trabajadores-por-localizacion-por-defecto-9f447fa3a8.webp)

![Campos identificativos de los trabajadores en el cuadrante](/media/manual/campos-identificativos-de-los-trabajadores-en-el-cuadrante-16a569f470.png)

![Ordenar trabajadores por localización por defecto](/media/manual/ordenar-trabajadores-por-localizacion-por-defecto-71865b4cff.webp)

![Comienzo de semana](/media/manual/comienzo-de-semana-ea0e7399c2.webp)

![Comienzo de semana](/media/manual/comienzo-de-semana-d297f43c7d.webp)

![Campos identificativos del tooltip del trabajador en el cuadrante](/media/manual/campos-identificativos-del-tooltip-del-trabajador-en-el-cuadrante-9add60ab41.png)

![Campos identificativos del tooltip del trabajador en el cuadrante](/media/manual/campos-identificativos-del-tooltip-del-trabajador-en-el-cuadrante-99a327a8ba.webp)

![Campos identificativos en los reportes de localizaciones](/media/manual/campos-identificativos-en-los-reportes-de-localizaciones-3697801bb7.webp)
