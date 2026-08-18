---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-5-12-ajustes-automaticos
title: Ajustes automáticos
description: Indicando ‘SI’ en esta función, los ajustes se automatizan siguiendo la configuración de los siguientes apartados.
contentType: reference
module: Configuración y cuenta
submodule: Equipo y centros
intent: Ajustes automáticos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: ajustes
    label: Ajustes
  - id: automaticos
    label: Automaticos
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
    - https://manual.aturnos.com/knowledgebase/5-12-ajustes-automaticos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-12-ajustes-automaticos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre ajustes automáticos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-12-ajustes-automaticos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-12-ajustes-automaticos/
  contentHash: 2f18902c7589b103a9fe8fe5af8c6f5d18d3f6975d6cde8b31e14f5cae895a72
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Indicando ‘SI’ en esta función, los ajustes se automatizan siguiendo la configuración de los siguientes apartados.

### Automatizar ajustes

Número de días que tienen que pasar para que se realice el ajuste de forma automática.

Se informa la desde cual hay que ajustar fichajes pasados al día actual.

Muestra la última fecha que ha calculado el ajuste automático.

En este caso, si se ha completado un fichaje con defecto de tiempo y si se supera la tolerancia por defecto, el sistema genera automáticamente un tipo de absentismo.

El sistema genera automáticamente un tipo de hora, cuando el fichaje completado ha superado la duración total del turno y ha sobrepasado la tolerancia configurada.

Se puede añadir los distintos tipos de ajustes que se pueden realizar de forma manual:

Si los trabajadores no han cerrado el fichaje con una entrada o salida, esta acción insertará el fichaje al inicio o final del turno para cerrar el fichaje.

En los equipos de trabajo se pueden configurar tipos de fichajes personalizados. El trabajador puede seleccionar un tipo que tenga configurado un tipo de hora añadida (cuando hay exceso de tiempo fichado) o un absentismo (cuando hay defecto de tiempo fichado), al ajustarse insertará ese tipo de hora o absentismo en el cuadrante.

En los casos, donde el trabajador seleccione al fichar un tipo de fichaje ‘No computable’, al ajustarse insertará el tipo de hora o absentismo configurado en el tipo de fichaje.

Ajusta los fichajes de los días que tienen planificadas horas extra o complementarias cuando se ha fichado exceso o defecto de tiempo.

En el caso de que un trabajador tenga solicitado o planificado un absentismo temporal, como por ejemplo una visita médica. Si el trabajador ficha la entrada, antes de la hora fin del absentismo, el ajuste reducirá el absentismo hasta la hora del fichaje de entrada.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
