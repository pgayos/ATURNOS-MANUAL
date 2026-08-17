---
schemaVersion: "1.0"
contentId: "gestion-de-personal-4-5-detalle-diario"
title: "Detalle diario"
description: "En esta pestaña por día se pueden ver los siguiente datos:."
contentType: concept
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Detalle diario"
audience:
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "detalle"
    label: "Detalle"
  - id: "diario"
    label: "Diario"
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - "https://manual.aturnos.com/knowledgebase/4-5-detalle-diario/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/4-5-detalle-diario/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre detalle diario?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "bf445a8bf958f10f16fa5492b0b03e0499717313894e01e0f158946d8c23c62a"
  migratedAt: 2026-08-17
---
## Resumen

En esta pestaña por día se pueden ver los siguiente datos:.

## Contenido

- ID Empleado: este campo lo puedes completar en el perfil de cada trabajador ( ver más sobre perfil de trabajadores ).
- Nombre: nombre del trabajador.
- Categoría: categoría del trabajador ( ver más sobre las categorías ).
- Localización: localización por defecto en el perfil del trabajador ( ver más sobre las localizaciones ).
- Porcentaje de jornada: se trata del porcentaje de jornada indicado en el perfil del trabajador ( ver más sobre perfil de trabajadores ).
- Jornada planificada: turnos u horas insertadas ese día para el trabajador en el cuadrante.
- Fichajes: conjuntos de pares de entradas+salidas realizadas ese día.
- Absentismos: marca la hora de inicio del absentismo y la hora final del mismo.
- Incidencias: indica la abreviatura del tipo de absentismo ( ver más sobre tipos de absentismos ).
- Horas ordinarias: son las horas efectivas de trabajo, dentro del turno de trabajo planificado.
- Horas presenciales: es el total de horas desde que se marca la entrada hasta que marca la salida en el control de presencia.
- Estado: restando la tolerancia, nos muestra la cantidad de tiempo de diferencia entre la jornada planificada y la presencial.

Este informe se puede exportar a otros formatos. En la parte superior derecha haciendo clic en el botón “ Acciones”, se desplegarán las distintas opciones de exportar esto datos. También puedes ocultar alguna columna sino necesitas que sea reportada en las estadísticas, haciendo clic en el botón Ocultar y seleccionando aquellas que no quieres mostrar.
