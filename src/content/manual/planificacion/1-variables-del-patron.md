---
schemaVersion: "1.0"
contentId: planificacion-1-variables-del-patron
title: Variables del patrón
description: Al crear un patrón de turnos es necesario informar en primer lugar los siguientes campos o variables que definirán el patrón:.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Variables del patrón
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: patron
    label: Patron
  - id: variables
    label: Variables
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
    - https://manual.aturnos.com/knowledgebase/1-variables-del-patron/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-variables-del-patron/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre variables del patrón?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-variables-del-patron/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-variables-del-patron/
  contentHash: d0b276f121c8d8889256cb4113751d31c5c357ed357cb0bc13e2019576c84f24
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Al crear un patrón de turnos es necesario informar en primer lugar los siguientes campos o variables que definirán el patrón:.

## Qué debes saber
- Describe tu patrón: nombre con el que se identificará la secuencia de turnos a crear.
- Escalonados con diferencia: número de días que constituye cada período en el patrón. Es decir, duración en días de los periodos del patrón, cada cuánto tiempo van a rotar los periodos. El escalonado a 7 días es el más común, ya que cuadran los fines de semana al rotar (Ver más acerca de los períodos en Qué es un período del patrón de turnos ).
- Festivos: cuando se planifique con el patrón, se insertará los tipos de turnos en los festivos en el caso que se informe en este campo “aplicar a festivos”, de lo contrario, no se aplicará turnos en los días festivos, previamente informados en el cuadrante (ver detalle de cómo informar días festivos en el equipo ).
- Aplicar patrón desde: informa el día de inicio del patrón, por defecto aTurnos lo asocia con un lunes, considerado como el primer día de la semana, aunque hay empresas que el primer día para aplicar el patrón puede ser cualquiera o un “día indefinido”. El día que se informe en esta casilla será el día de la semana desde cuando se aplicará o iniciará el patrón.

Además, dispones de las siguientes variables de información que se irán actualizando a medida que completas o modificas la composición de tu patrón:

- Número de días: se trata del número total de días que has introducido en el patrón (sumando todos los periodos que haya).
- Escalonado: La duración de cada periodo. Esta variable la puedes modificar en el apartado superior de nombre “Escalonados con diferencia”.
- Número de trabajadores requeridos: Se trata de la cantidad de trabajadores que necesitas para completar la tabla de cobertura en la parte inferior de la pantalla (Ver más).
- Horas Anuales (Neto): se trata de la suma de horas si aplicaras este patrón desde el 1 de enero hasta el 31 de diciembre del mismo año, descontando los festivos indicados en el equipo (ver más) así cómo la cantidad de vacaciones por convenio indicadas en Administrar → Ajustes (ver más).
- Horas Anuales (Bruto): Se trata de la suma total de horas si se aplicara el patrón desde 1 de enero a 31 de diciembre del mismo año (descontando vacaciones).

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![1. Variables del patrón](/media/manual/1-variables-del-patron-fb2c6b0b32.png)
