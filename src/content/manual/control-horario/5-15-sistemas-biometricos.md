---
schemaVersion: "1.0"
contentId: control-horario-5-15-sistemas-biometricos
title: Sistemas biométricos
description: Los lugares físicos de trabajo donde existe un gran número de trabajadores planificados pueden realizar los fichajes entrada y salida por equipos biométricos, que ya existan en la empresa o.
contentType: concept
module: Control horario
submodule: Fichajes
subtopic: ""
intent: Sistemas biométricos
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: biometricos
    label: Biometricos
  - id: sistemas
    label: Sistemas
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
    - https://manual.aturnos.com/knowledgebase/5-15-sistemas-biometricos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-15-sistemas-biometricos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre sistemas biométricos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-15-sistemas-biometricos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-15-sistemas-biometricos/
  contentHash: 9616193cc50768ab9f943f899fe1cd8593f64df71a8300e3d1f2ed56bf390118
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre sistemas biométricos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Qué debes saber
Los lugares físicos de trabajo donde existe un gran número de trabajadores planificados pueden realizar los fichajes entrada y salida por equipos biométricos, que ya existan en la empresa o los modelos de Suprema con los que trabaja aTurnos.

Existen dos formas de fichar:

- Tarjeta, el trabajador recibe una tarjeta la cual utilizará para fichar en los lectores su entrada y salida.
- Huella y/o reconocimiento facial, donde el trabajador a través de su huella o su geometría facial, realiza el fichaje en los dispositivos.

aTurnos ya se integra con hardware de diferentes fabricantes. Tenemos integración nativa con SPEC y con Suprema. Aquí tienes toda la información de como funciona la integración de aTurnos con Suprema.

La información biométrica se almacena de forma local dentro de la red del cliente y se mapea con los datos de aTurnos para identificar al trabajador, pero no recibe ningún tipo de información biométrica de los trabajadores.

Desde el acceso de aTurnos, se obtiene toda la información volcada por los sistemas biométricos sin tener que entrar a los sistemas del fabricante de los lectores e integra toda la información en el mismo punto simplificando las gestiones.

Entre los sistemas biométricos se encuentra la lectura de huella dactilar por medio de dispositivos. Para su instalación, configuración y la recogida de las huellas dactilares puedes consultar nuestro Manual de Biostar para aTurnos
