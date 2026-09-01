---
schemaVersion: "1.0"
contentId: planificacion-7-2-festivos
title: Festivos
description: En resumen, para hacer una planificación precisa en un calendario, es necesario tener en cuenta y configurar previamente los días festivos del equipo.
contentType: reference
module: Planificación
submodule: Usuarios y perfiles
subtopic: ""
intent: Festivos
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: festivos
    label: Festivos
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
    - https://manual.aturnos.com/knowledgebase/7-2-festivos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-2-festivos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre festivos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-2-festivos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-2-festivos/
  contentHash: 9ad283916d2fd6c5d71b269d7b9926d42c0f869fa7707c7f713969b67e73e6cc
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre festivos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
En resumen, para hacer una planificación precisa en un calendario, es necesario tener en cuenta y configurar previamente los días festivos del equipo. Los días festivos pueden variar considerablemente entre empresas e incluso entre equipos de la misma empresa. Por ejemplo, en la “Empresa X”, los festivos serán diferentes para el equipo de “Madrid” y el equipo de “Barcelona” debido a su ubicación geográfica.

Para definir qué se considera como festivos hay que configurar “Consideración de festivos según convenio”.

Guardada la configuración de qué se considera como festivo, se pueden crear las fechas festivas del año en el equipo.

Desde el botón de”Acciones” se ofrecen dos opciones: añadir o importar festivos.

Todos los festivos que se hayan configurado en este menú, se mostrarán en el cuadrante con el día subrayado y coloreados de rosa (incluidos los que tengan una localización asignada). Al pasar el cursor sobre la fecha se mostrará la descripción del festivo.

Al hacer clic sobre el botón de la acción “Añadir”, se creará un día festivo de forma manual, rellenando los siguientes campos:

- Descripción: nombre del festivo.
- Fecha: fecha a la que corresponde ese día festivo.
- Opción para repetir el festivo anualmente (Ej. 1 de enero todos los años), o solo aplicará para ese año en específico (Ej. Jueves y Viernes Santo, cuya fecha cambia por año).
- Festivo especial: cuando tiene un suplemento especial adicional al día de compensación correspondiente.
- Localización: se aplicará el día como festivo a los trabajadores, que tengan la localización por defecto del listado de Localizaciones. Por ejemplo, si existen varios centros de trabajo en distintas localidades en un mismo equipo, las festividades locales son diferentes y se pueden discriminar aplicando una localización distinta a cada festivo local. Solo afectará visualmente en el cuadrante a los trabajadores que tengan en su perfil la localización por defecto informada en el festivo (coloreado en rosa y día subrayado). Afectará con respecto al cómputo de horas en las estadísticas como festivos. Por el contrario, no se verá afectado a los conceptos de nóminas (ver Conceptos nóminas festivos ), ya que siempre tomarán la localización por defecto del trabajador.

Completando el formulario con el código postal de la localidad del equipo (por defecto aparece el indicado en los Datos del equipo ) y el año de los festivos a importar. Automáticamente, se importarán y se mostrarán en la planificación del cuadrante. Se importarán festivos nacionales y autonómicos, los locales deben informarse manualmente a través de la opción “Añadir” del punto anterior.

Los festivos también se pueden añadir mediante la importación de un fichero CSV (ver Importación de festivos mediante un Excel ).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![7.2 Festivos](/media/manual/7-2-festivos-7d6768d15e.png)

![7.2 Festivos](/media/manual/7-2-festivos-75e255a5a9.webp)

![7.2 Festivos](/media/manual/7-2-festivos-323d78b6d2.png)

![7.2 Festivos](/media/manual/7-2-festivos-10b6b6a8d4.png)
