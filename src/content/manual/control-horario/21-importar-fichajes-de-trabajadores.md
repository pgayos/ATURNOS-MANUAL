---
schemaVersion: "1.0"
contentId: control-horario-21-importar-fichajes-de-trabajadores
title: Importar fichajes de trabajadores
description: Es posible que si has utilizado otro sistema de registro de jornada, los marcajes hechos en dispositivos puedas trasladarlos al sistema de aTurnos.
contentType: reference
module: Control horario
submodule: Usuarios y perfiles
intent: Importar fichajes de trabajadores
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: fichajes
    label: Fichajes
  - id: importar
    label: Importar
  - id: trabajadores
    label: Trabajadores
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
    - https://manual.aturnos.com/knowledgebase/21-importar-fichajes-control-de-presencia/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/21-importar-fichajes-control-de-presencia/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre importar fichajes de trabajadores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/21-importar-fichajes-control-de-presencia/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/21-importar-fichajes-control-de-presencia/
  contentHash: 57ad079b5f9871410e21b1369d54b28cb60b4542309f19001aa30110e7f8c2e1
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre importar fichajes de trabajadores, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Es posible que si has utilizado otro sistema de registro de jornada, los marcajes hechos en dispositivos puedas trasladarlos al sistema de aTurnos. De la misma forma si por algún fallo técnico, los marcajes no se han volcado, también podemos insertarlos en el Control de Presencia de aTurnos.

Crea un archivo de Excel (también en formato CSV) o completa la plantilla de ejemplo para importar los marcajes de los trabajadores, definiendo las columnas con los siguientes conceptos:

- Fecha*: el formato debe coincidir con el que está informado en la configuración del equipo (ver Configuración Importar/Exportar ). Por ejemplo dd/MM/aaaa hh:mm
- Tipo de marcaje*: se informa con el concepto de descripción de los tipos de marcajes que deben estar creados previamente en el equipo (ver Tipos de marcaje ). Los tipos de marcajes pueden computar en el horario, o no. En el caso de no computar no inserta horas presenciales en las estadísticas.
- Dirección*: nos informa si la consideramos como entrada o salida. En el caso de entrada lo informaremos con el valor 0, para las salidas con el valor 1.
- Email*: correo electrónico del trabajador.
- Id Usuario aTurnos o Id Empleado empresa: número identificativo del trabajador. Hay empresas que por el sistema de integración, su número de identificación es distinto al Id de usuario de aTurnos.

Plantilla ejemplo, para descargarla, haz clic en el enlace: CSV importacion_marcajes_prueba

Una vez se ha creado o completado el archivo, guardar tu documento como formato tipo CSV.

Para importar el archivo debe seguir los pasos que indicamos en nuestro menú Administrar → Importar/Exportar → Importar (ver Importar ).

A continuación, se hace la importación del fichero a aTurnos y se asociará los conceptos de las columnas del fichero con los campos existentes en aTurnos.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![21. Importar fichajes de trabajadores](/media/manual/21-importar-fichajes-de-trabajadores-8cb74dcad3.png)

![21. Importar fichajes de trabajadores](/media/manual/21-importar-fichajes-de-trabajadores-ee91e60971.webp)
