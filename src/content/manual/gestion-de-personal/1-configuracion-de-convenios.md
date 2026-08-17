---
schemaVersion: "1.0"
contentId: "gestion-de-personal-1-configuracion-de-convenios"
title: "Configuración de convenios"
description: "Información sobre configuración de convenios, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Gestión de personal"
submodule: "Contratos"
intent: "Configuración de convenios"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "configuracion"
    label: "Configuracion"
  - id: "convenios"
    label: "Convenios"
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
    - "https://manual.aturnos.com/knowledgebase/8-configuracion-de-convenios/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/8-configuracion-de-convenios/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre configuración de convenios?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "eb064f95027d9391af36a2475fc52f29a57f0a6d6c3f099d073f4a65b4310ad5"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre configuración de convenios, con instrucciones y contexto revisables por el equipo de aTurnos.

Antes de realizar los Ajustes de Turnos para generar la Propuesta de planificación según la demanda creada, es fundamental revisar previamente ciertos datos de configuración del sistema. Estos datos son determinantes para garantizar el cumplimiento del convenio de horas, uno de los principales criterios utilizados por los algoritmos para asignar correctamente la planificación al personal.

A continuación, se detallan las formas en las que el sistema asigna las horas que debe cumplir un trabajador:

### 1. Configuración General

Desde el menú Administrar → Ajustes, en la pestaña Configuración general, deben estar definidas las horas a cumplir según el convenio: diarias, semanales, mensuales y anuales para el equipo. El sistema utilizará esta información como referencia para calcular la planificación propuesta. Puedes consultar cómo registrar estos datos en el siguiente enlace: Datos del convenio.

Es recomendable establecer estos valores por defecto, ya que se aplicarán automáticamente a los nuevos trabajadores que se den de alta en el sistema. No obstante, estos parámetros pueden ser modificados de forma individual para casos específicos.

### 2. Perfil del Trabajador

En algunos casos, un trabajador puede estar sujeto a un convenio distinto, con una jornada de horas diferente a la del resto del equipo (ya sea anual, mensual o semanal). En estas situaciones, se pueden personalizar las horas desde su ficha o perfil. Consulta cómo hacerlo aquí: Categoría & Contrato.

### 3. Restricciones

Las restricciones permiten definir límites para la asignación de horas, tanto a nivel de equipo como de trabajador, utilizando como base los valores definidos en la configuración general (Datos del convenio). Por ejemplo, se puede establecer que la planificación semanal no supere un número determinado de horas.

También es posible definir restricciones relacionadas con los turnos, como impedir que un trabajador realice determinados turnos o limitar su disponibilidad a ciertos días o franjas horarias. Más información disponible en el siguiente enlace: Restricciones.
