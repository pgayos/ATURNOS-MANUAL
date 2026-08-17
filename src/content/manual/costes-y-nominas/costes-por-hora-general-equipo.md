---
schemaVersion: "1.0"
contentId: "costes-y-nominas-costes-por-hora-general-equipo"
title: "Costes por hora general (equipo)"
description: "Información sobre costes por hora general (equipo), con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Costes y nóminas"
submodule: "Nóminas"
intent: "Costes por hora general (equipo)"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "costes"
    label: "Costes"
  - id: "equipo"
    label: "Equipo"
  - id: "general"
    label: "General"
  - id: "hora"
    label: "Hora"
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
    - "https://manual.aturnos.com/knowledgebase/costes-por-hora-general-equipo/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/costes-por-hora-general-equipo/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre costes por hora general (equipo)?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "4693daffb81eb637290eaf350f53d48e9e2b6cc78063ee04d497e54de49840ea"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre costes por hora general (equipo), con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Este coste por hora es aquel que se define cuando todos los trabajadores del equipo tienen el mismo coste por hora indistintamente de su categoría, o del tipo de turno que realicen, es decir, será el valor de referencia para contabilizar el coste por cada hora planificada de todos los trabajadores que pertenezcan al equipo sin ninguna distinción, es un coste de hora global para los trabajadores del equipo.

Se configura desde Menú Administrar – Ajustes en la pestaña de “Módulos” tal como mostramos a continuación:

Al acceder a esta pantalla se informarán los siguientes campos:

- Coste / Hora por defecto: valor que se asignará o imputará por cada hora de trabajo.
- Moneda por defecto: tipo moneda por defecto en la que se hará el cálculo de horas, se muestran las opciones: Sin moneda, Euro, Dólar, Libra esterlina y Peso colombiano (abierto para incluir más opciones según la solicitud del cliente).
- Base de cotización máximo: salario bruto anual máximo establecido de ley para los trabajadores dados de alta por nómina. Base máxima de cotización a la Seguridad Social.

Una vez cumplimentados los campos, se debe guardar la información.
