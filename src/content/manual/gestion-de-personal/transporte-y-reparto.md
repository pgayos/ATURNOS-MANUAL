---
schemaVersion: "1.0"
contentId: gestion-de-personal-transporte-y-reparto
title: Transporte y Reparto
description: Lo primero es conocer nuestro equipo y los datos que necesitemos para planificarlo mejor.
contentType: concept
module: Gestión de personal
submodule: Usuarios y perfiles
subtopic: ""
intent: Transporte y Reparto
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: reparto
    label: Reparto
  - id: transporte
    label: Transporte
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
    - https://manual.aturnos.com/documentation/4-tabla-de-cobertura-y-operativa-diaria/
    - https://manual.aturnos.com/documentation/algoritmos-planificacion-personal-transporte-reparto/
    - https://manual.aturnos.com/documentation/demanda-personal-transporte-reparto/
    - https://manual.aturnos.com/documentation/empleados-transporte-reparto/
    - https://manual.aturnos.com/documentation/introduccion-planificacion-transporte-y-reparto/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/4-tabla-de-cobertura-y-operativa-diaria/
    - https://manual.aturnos.com/documentation/algoritmos-planificacion-personal-transporte-reparto/
    - https://manual.aturnos.com/documentation/demanda-personal-transporte-reparto/
    - https://manual.aturnos.com/documentation/empleados-transporte-reparto/
    - https://manual.aturnos.com/documentation/introduccion-planificacion-transporte-y-reparto/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre transporte y Reparto?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 5
  originUrls:
    - https://manual.aturnos.com/documentation/4-tabla-de-cobertura-y-operativa-diaria/
    - https://manual.aturnos.com/documentation/algoritmos-planificacion-personal-transporte-reparto/
    - https://manual.aturnos.com/documentation/demanda-personal-transporte-reparto/
    - https://manual.aturnos.com/documentation/empleados-transporte-reparto/
    - https://manual.aturnos.com/documentation/introduccion-planificacion-transporte-y-reparto/
  redirectFrom:
    - https://manual.aturnos.com/documentation/4-tabla-de-cobertura-y-operativa-diaria/
    - https://manual.aturnos.com/documentation/algoritmos-planificacion-personal-transporte-reparto/
    - https://manual.aturnos.com/documentation/demanda-personal-transporte-reparto/
    - https://manual.aturnos.com/documentation/empleados-transporte-reparto/
    - https://manual.aturnos.com/documentation/introduccion-planificacion-transporte-y-reparto/
  contentHash: 9639b80b5fa632d753ec21e930af87fda53948a619771171b422bed19aca276f
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre transporte y Reparto, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Lo primero es conocer nuestro equipo y los datos que necesitemos para planificarlo mejor. Sobre los empleados es necesario definir un mínimo de datos para poder trabajar de forma ágil y tener una visión operativa sobre mi plantilla actual.

1. Explicar las especialidades como conductor, repartidor, manager, etc. Puede ser interesante saber las especialidades que pueden tener cada uno de los empleados y tomar en cuenta su polivalencia a la hora de planificar.
2. Las restricciones o limitaciones a la hora de planificar. Normalmente, en el sector de logística y reparto, tenemos unas horas semanales máximas (39 horas a la semana) o una concreción laboral para el personal que no está el 100% de la jornada al año y baja a 20 horas semanales. Por ejemplo, un trabajador que tiene otro empleo los lunes y martes, va a necesitar una concreción, indicando las ventanas de trabajo que tiene disponibles para poder realizar los repartos.
3. Los datos del perfil, ayuda a definir categoría, fechas de alta, porcentaje de jornada, saldos de vacaciones, máximo de horas complementarias. Las complementarias también son una herramienta importante en este sector para poder ajustar los picos de demanda de los clientes y no tener gastos fijos en las zonas valles.
4. Las localizaciones definen los puestos, es normal que se use para diferentes zonas dentro del espacio de logística o de reparto. Un trabajador por defecto está en una zona pero se puede mover a otras en días determinados. También se pueden usar para calcular horas de facturación a los diferentes clientes.
