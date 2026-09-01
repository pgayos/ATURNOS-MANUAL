---
schemaVersion: "1.0"
contentId: recursos-y-partes-conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos
title: "Conceptos tipo 8: Conceptos asociados al módulo de recursos"
description: A través del módulo de Recursos se pueden informar variables que no dependen de la planificación, como por ejemplo, cuando se abonan “Dietas”.
contentType: concept
module: Recursos y partes
submodule: General
subtopic: ""
intent: "Conceptos tipo 8: Conceptos asociados al módulo de recursos"
audience:
  - role: Administrador
    access: applicable
  - role: RRHH
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: asociados
    label: Asociados
  - id: conceptos
    label: Conceptos
  - id: modulo
    label: Modulo
  - id: recursos
    label: Recursos
  - id: tipo
    label: Tipo
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
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre conceptos tipo 8: Conceptos asociados al módulo de recursos?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos/
  contentHash: c0f5ff0c7b4d97fd3e27037529d21a7b95960e84ad811155b7e8557e83f778b9
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

A través del módulo de Recursos se pueden informar variables que no dependen de la planificación, como por ejemplo, cuando se abonan “Dietas”.

## Qué debes saber
En la mayor parte de nuestros clientes, los trabajadores son los que introducen sus variables para que posteriormente el responsable los valide.

Solo los recursos con el estado “Validado” se recuperaran en las estadísticas correspondientes.

1.- Se deben crear los recursos, a través de RECURSOS → RECURSOS, en este ejemplo, el Recursos “Dietas” que debe ser de tipo “N umérico”.

2.- Asociar el recurso como concepto de nómina, a través de ADMINISTRAR → NÓMINAS → CONCEPTOS DE CALCULO3.- Informar el campo:

- Concepto, es el valor con el que se va a exportar el dato. Obligatorio
- Descripción: No obligatorio
- Seleccionar tipo de dato: Buscar en el desplegable el recurso.
- Localización, en su caso.
- Localización (por defecto) del trabajador, en su caso.
- Días de la semana: Lunes, Martes, etc.

4.- Publicar concepto de nómina en el caso de que no se haya marcado el campo “Incluir como concepto seleccionado para nómina” a SI. La asociación se realiza a través de ADMINISTRAR → NOMINAS → CONCEPTOS DE NÓMINA.

1.- Los recursos se informan en el cuadrante, es obligatorio que el trabajador tenga planificación (turnos, horas) para poder informar el recurso.

2.- Se indica la cantidad, con una descripción si se desea.

3.- Se valida el recurso a través de RECURSOS → RESUMEN. En el ejemplo, solo el recurso Dietas está validado el día 02/05/2022.

4.- Al marcar “Validar”

5.- Se visualiza el usuario que ha validado los recursos

6.- En la estadística diaria (NOMINAS → ESTADISTICA DIARIA) se visualiza el concepto “Dietas” del día 02%05/2022, solo el recurso validado.

7.- Para “desvalidar” un recurso, en el caso de que se quiera modificar, desde RECURSOS → RESUMEN, se desmarca el check “Validado” y se marca “Validar”.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-d4f9564d26.png)

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-398b1dcf95.png)

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-8e3ed9afa9.png)

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-bd7a22e20d.png)

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-19ec266eaa.png)

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-b664142381.png)

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-c0d85d9973.png)

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-916f9c932d.png)

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-8399ee3f83.png)

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-4df0df8557.png)

![Conceptos tipo 8: Conceptos asociados al módulo de recursos](/media/manual/conceptos-tipo-8-conceptos-asociados-al-modulo-de-recursos-a4ec7b6565.png)
