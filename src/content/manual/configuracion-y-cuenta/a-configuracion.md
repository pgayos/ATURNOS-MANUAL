---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-a-configuracion
title: Configuración
description: Para un correcto funcionamiento de la importación y la exportación es necesario configurar el comportamiento de la plataforma de aTurnos para obtener los resultados deseados.
contentType: reference
module: Configuración y cuenta
submodule: Equipo y centros
intent: Configuración
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
entities:
  - id: configuracion
    label: Configuracion
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
    - https://manual.aturnos.com/knowledgebase/a-configuracion/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/a-configuracion/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre configuración?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/a-configuracion/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/a-configuracion/
  contentHash: 46e44a77c2611c7cb63f2780faa12d0da1f88b73ae561a60b5fbecd4591a0964
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre configuración, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Para un correcto funcionamiento de la importación y la exportación es necesario configurar el comportamiento de la plataforma de aTurnos para obtener los resultados deseados. Dentro de la pestaña de configuración aparecen 3 secciones distintas:

- Formato de exportación: se trata del separador que se insertará en el archivo csv a la hora de exportarlo. Se puede elegir entre cuatro opciones distintas: Coma (,), Punto y coma (;), Tabulador (t) o Tubería (|).
- Formato de fecha: para una correcta asociación de campos se puede definir el formato de fecha deseado para la importación y para cualquier tipo de exportación.
- Asocia los campos para la exportación: desde este apartado, podrás indicar el nombre de la columna que deseas que te aparezca a la hora de exportar esos campos. Por ejemplo, en Nombre del aTurno, puedes indicar que se muestre como: Centro de trabajo, de forma que en el archivo exportado a parecerá dicha columna como: Centro de trabajo.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![a. Configuración](/media/manual/a-configuracion-affcfaf6db.png)
