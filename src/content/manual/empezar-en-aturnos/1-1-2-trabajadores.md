---
schemaVersion: "1.0"
contentId: empezar-en-aturnos-1-1-2-trabajadores
title: "Trabajadores"
description: "Métodos para añadir trabajadores al equipo y cómo organizarlos en localizaciones, categorías y especialidades."
contentType: procedure
module: "Empezar en aTurnos"
submodule: "Comienza en aTurnos"
subtopic: "Creación de un equipo"
intent: "Trabajadores"
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
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
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-1-ajustes-trabajadores-y-turnos/1-1-2-trabajadores/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-1-ajustes-trabajadores-y-turnos/1-1-2-trabajadores/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre trabajadores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-1-ajustes-trabajadores-y-turnos/1-1-2-trabajadores/
  redirectFrom:
    - https://manual.aturnos.com/documentation/1-planificar-en-aturnos/1-1-ajustes-trabajadores-y-turnos/1-1-2-trabajadores/
  contentHash: "deb490aab03901b44a68500ca0984715896af559fa83f67b75efee42fc5480d6"
  migratedAt: 2026-09-08
labels:
  - PENDIENTE
order: 3
---

## Resumen

Para añadir trabajadores, se debe acceder a **Trabajadores > Listado** y hacer clic en **Añadir trabajador.** Existen diferentes métodos para hacerlo, y la elección dependerá del nivel de detalle y la información que se desee incluir en cada perfil. (Consultar el [Manual de Perfil del trabajador](https://manual.aturnos.com/editar-perfil-del-trabajador/) para más detalles).

## Opciones para añadir trabajadores

1. **Añadir trabajadores anónimos**. Con esta opción el sistema crea automáticamente perfiles con nombres como “Trabajador X” y correos electrónicos ficticios. Estos perfiles se pueden modificar posteriormente para asignarles nombres y correos reales.

2. **Añadir trabajadores con datos reales**: Se introducen manualmente el nombre, correo y fecha de alta. Cada trabajador debe tener un correo electrónico único, ya que este es su identificador en aTurnos. La fecha de alta es relevante porque se utiliza para calcular las horas anuales y las vacaciones correspondientes. Por ejemplo, un trabajador dado de alta todo el año tiene derecho a todas las horas y vacaciones, mientras que uno que inicia a mitad de año solo tendrá derecho a la mitad.

3. **Añadir trabajadores mediante importación masiva**: Esta opción permite agregar a varios trabajadores al mismo tiempo y completar todos sus datos de forma conjunta. Es útil cuando se necesitan añadir más de 20 trabajadores con datos variados. (Ver más detalles en el [Manual](https://manual.aturnos.com/editar-perfil-del-trabajador/)).

## Organización de los trabajadores

Los trabajadores en aTurnos pueden clasificarse en departamentos, secciones u otras agrupaciones conocidas como **Localizaciones**. Por ejemplo, una localización puede ser “Recepción”. También se pueden asignar categorías, especialidades y restricciones a los trabajadores.

## Cómo crear localizaciones y asignar categorías y especialidades

- Para crear localizaciones, accede a **Administrar** > **Localizaciones** y haz clic en **Acciones** > **Nueva localización**.
- Para añadir especialidades y categorías, accede a **Administrar** > **Perfil de Trabajador** > **Especialidades** o **Categorías**. (Consultar los manuales de **Especialidades** y **Categorías** para más detalles).
