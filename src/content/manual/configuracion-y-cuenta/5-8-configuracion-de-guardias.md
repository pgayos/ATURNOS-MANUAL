---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-5-8-configuracion-de-guardias
title: Configuración de guardias
description: En este apartado se desarrolla cómo se realiza la configuración de aquellos tipos de turnos que vayan a planificarse como guardias en sectores como el sanitario, servicios funerarios, entre.
contentType: reference
module: Configuración y cuenta
submodule: Roles y permisos
intent: Configuración de guardias
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: configuracion
    label: Configuracion
  - id: guardias
    label: Guardias
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
    - https://manual.aturnos.com/knowledgebase/5-8-configuracion-de-guardias/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-8-configuracion-de-guardias/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre configuración de guardias?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-8-configuracion-de-guardias/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-8-configuracion-de-guardias/
  contentHash: b9f814275f23b1d7a2c409ee235122e3f90f50c3dc7e7446beb0b6eccec4306d
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre configuración de guardias, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
En este apartado se desarrolla cómo se realiza la configuración de aquellos tipos de turnos que vayan a planificarse como guardias en sectores como el sanitario, servicios funerarios, entre otros. Se hará una distinción entre aquellas guardias que son presenciales (se fichan y computan las horas) y aquellas que no son presenciales llamadas localizadas (no se fichan, salvo si el trabajador debe acudir al centro de trabajo, cuyo tiempo si deberá ficharlo. pero aparecen en el Informe de Control de presencia ).

Esta opción permite configurar para que aparezcan en el ‘ Informe ‘ del ‘ Detalle ‘, el turno planificado de ‘ Guardia localizada (no presencial) ‘.

No precisan un ajuste de estado. Se puede seleccionar todos aquellos tipos de turno que hay creados y deban ser definidos como guardia localizada.

Tendrán que ser fichadas, así como necesitarán que se ajuste el exceso o defecto de tiempo fichado. Al igual que con las localizadas, se podrá seleccionar entre los distintos tipos de turno creados.

Se selecciona el tipo de hora con el que automáticamente se ajusten aquellos tipos de turno que están definidos como guardias localizadas. Al no computar el tipo de turno por ser una guardia no presencial, el tiempo fichado se ajustará con un tipo de hora añadida. Por ejemplo, un trabajador que tenga que estar localizado las 24 horas del día, recibe un aviso para acudir a realizar una emergencia desde las 22:00 horas hasta las 02:00 horas. Esas 4 horas se ajustarán como un tipo de hora añadida.

Al activar esta opción, se automatizan los ajustes de las guardias localizadas.

Se indica el número de días que tienen que pasar para ajustarse automáticamente las guardias localizadas.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5.8 Configuración de guardias](/media/manual/5-8-configuracion-de-guardias-0b40732f17.webp)

![5.8 Configuración de guardias](/media/manual/5-8-configuracion-de-guardias-1dd70a00ab.webp)

![5.8 Configuración de guardias](/media/manual/5-8-configuracion-de-guardias-bf8fa91456.webp)
