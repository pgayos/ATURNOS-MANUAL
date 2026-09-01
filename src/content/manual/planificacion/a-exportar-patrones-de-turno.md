---
schemaVersion: "1.0"
contentId: planificacion-a-exportar-patrones-de-turno
title: Exportar patrones de turno
description: Desde el menú Planificador – Patrones de turnos se tiene la opción de exportar el listado de patrones que existan en el equipo.
contentType: reference
module: Planificación
submodule: Turnos y patrones
subtopic: ""
intent: Exportar patrones de turno
audience:
  - role: Planificador
    access: applicable
entities:
  - id: exportar
    label: Exportar
  - id: patrones
    label: Patrones
  - id: turno
    label: Turno
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
    - https://manual.aturnos.com/knowledgebase/a-exportar-patrones-de-turno/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/a-exportar-patrones-de-turno/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre exportar patrones de turno?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/a-exportar-patrones-de-turno/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/a-exportar-patrones-de-turno/
  contentHash: d9b93bf9fa75b4ecdb5eb6674ad819ad49bfeb12f94550d0ea309bb0507fbcee
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Información sobre exportar patrones de turno, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Desde el menú Planificador – Patrones de turnos se tiene la opción de exportar el listado de patrones que existan en el equipo. En el icono de exportar se mostrará la opción CSV que es el formato de fichero que se utiliza para la exportación, haciendo clic en él se descarga el fichero con los patrones del listado existentes en el equipo.

A continuación se muestra ejemplo de fichero CSV exportado:

El fichero presenta la información de los patrones, según la configuración al crearlos (ver más Cómo crear un patrón de turnos ):

- Descripción: nombre del patrón
- Patrón: muestra la secuencia de rotación de los turnos que tiene el patrón
- Escalonado: indica el número de días que tienen los períodos del patrón, es decir, un patrón puede estar conformado por varios períodos y el escalonado define cada cuánto tiempo van a rotar esos periodos. El escalonado a 7 días es el más común, ya que cuadran los fines de semana cuando rotan los periodos del patrón (Ver más acerca de los períodos en Qué es un período del patrón de turnos ).
- Aplicar a festivos: cuando el dato exportado es 0 (cero) no aplica turnos en días festivos. Cuando el dato exportado es -1 significa que el patrón aplica turnos en días festivos.
- Dia de la semana: muestra el día de la semana en la que inicia el patrón, es decir, 1 = lunes, 2 = martes, 3 = miércoles, 4 = jueves, 5 = viernes, 6 = sábado y 7 = domingo. En caso de que el patrón esté configurado para que inicie con “día indefinido” el dato será igual a -1

Así como en aTurnos se puede exportar el listado de patrones también es posible al contrario, es decir, importar patrones desde un fichero CSV al sistema, desde el menú Administrar – Importar/Exportar. Para ver más detalles: Importación para crear patrones de turnos.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![a. Exportar patrones de turno](/media/manual/a-exportar-patrones-de-turno-14dbc90da9.png)
