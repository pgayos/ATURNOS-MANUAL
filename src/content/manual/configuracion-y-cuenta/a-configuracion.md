---
schemaVersion: "1.0"
contentId: "configuracion-y-cuenta-a-configuracion"
title: "Configuración"
description: "Información sobre configuración, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: reference
module: "Configuración y cuenta"
submodule: "Equipo y centros"
intent: "Configuración"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
entities:
  - id: "configuracion"
    label: "Configuracion"
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
    - "https://manual.aturnos.com/knowledgebase/a-configuracion/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/a-configuracion/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre configuración?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  contentHash: "421c127bd97fbd9959441b80a9c95515fa033348fd8223cb40954f341abb00b4"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre configuración, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Para un correcto funcionamiento de la importación y la exportación es necesario configurar el comportamiento de la plataforma de aTurnos para obtener los resultados deseados. Dentro de la pestaña de configuración aparecen 3 secciones distintas:

- Formato de exportación: se trata del separador que se insertará en el archivo csv a la hora de exportarlo. Se puede elegir entre cuatro opciones distintas: Coma (,), Punto y coma (;), Tabulador (t) o Tubería (|).
- Formato de fecha: para una correcta asociación de campos se puede definir el formato de fecha deseado para la importación y para cualquier tipo de exportación.
- Asocia los campos para la exportación: desde este apartado, podrás indicar el nombre de la columna que deseas que te aparezca a la hora de exportar esos campos. Por ejemplo, en Nombre del aTurno, puedes indicar que se muestre como: Centro de trabajo, de forma que en el archivo exportado a parecerá dicha columna como: Centro de trabajo.
