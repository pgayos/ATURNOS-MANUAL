---
schemaVersion: "1.0"
contentId: gestion-de-proyectos-1-3-integracion-de-datos-en-aturnos
title: "Integración de datos en aTurnos"
description: "Cómo se integran en aTurnos los datos del cliente (empleados, estructura, convenios) durante la implantación."
contentType: concept
module: "Gestión de proyectos"
submodule: "Proceso de Implantación"
intent: "Integración de datos en aTurnos"
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
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/documentation/2-fases-de-la-implantacion/2-2-maestro-de-empleados/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/2-fases-de-la-implantacion/2-2-maestro-de-empleados/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre integración de datos en aTurnos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/documentation/2-fases-de-la-implantacion/2-2-maestro-de-empleados/
  redirectFrom:
    - https://manual.aturnos.com/documentation/2-fases-de-la-implantacion/2-2-maestro-de-empleados/
  contentHash: "67912af922d4a3ded0f160fb78e313ac10e588e658e5f7c8a779397f4c1e0dfc"
  migratedAt: 2026-09-17
labels:
  - PENDIENTE
order: 4
---

## Resumen

Esta fase es una de las mas importantes dentro del proceso de implantación, ya que se hace el ***primer registro de datos*** (maestro de empleados, tipos de turno, absentismos, restricciones, etc) que servirá de base para la correcta planificación de los equipos de trabajo, por lo que debemos procurar hacerlo bien desde el inicio (Right first time).

Las **actividades a realizar** serán las siguientes:

- Envío de plantilla de datos al cliente (Maestro empleados, absentismos, Turnos, Restricciones, Configuración Gral)
- Carga de ficheros a aTurnos: El cliente suministra estos datos y son las primeras pruebas de integración por API (ver *[Proceso de integración con api](https://manual.aturnos.com/2019/11/13/integracion-con-api/)*) o carga de Archivo (ver [Carga de datos por fichero](https://manual.aturnos.com/importar-datos/)) si fuera necesario para el proyecto. En clientes con mucho volumen recomendamos por integración. Los datos se pueden cargar manualmente pero podemos ahorrar este trabajo haciéndolo por API o con una carga inicial de Excel o CSV.
- Creación de datos para gestión de tiempos: tipos de turno, tipos de horas, absentismos en aTurnos.
- Creación de Restricciones en el sistema y Configuración general de los equipos. Horas Convenio, Festivos, Nocturnidad, Flujos de aprobación.
- Definición de Conceptos de cálculo, definición de Conceptos de nómina y de Plantilla de nómina.

Las **personas involucradas** en este proceso son los Jefes de Proyecto, Responsable de RRHH del cliente y Jefe de Proyecto de aTurnos.

### Enlaces de interés

- [Modelos de fichero para importar datos en aTurnos](https://manual.aturnos.com/importar-datos/)
- [Importar tipos de turno y absentismos](https://manual.aturnos.com/Manual/3-importacion-tipos-de-turno-basico/)
- [Restricciones](https://manual.aturnos.com/restricciones/)
- [Exportación nómina](https://manual.aturnos.com/administrar-exportacion-nominas-2/)
