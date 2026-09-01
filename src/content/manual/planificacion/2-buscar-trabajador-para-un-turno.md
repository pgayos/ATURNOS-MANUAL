---
schemaVersion: "1.0"
contentId: planificacion-2-buscar-trabajador-para-un-turno
title: Buscar trabajador para un turno
description: El administrador, como consecuencia de la planificación del cuadrante, puede ‘Buscar trabajador para turno’ para cubrir un turno con un trabajador más.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Buscar trabajador para un turno
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: buscar
    label: Buscar
  - id: trabajador
    label: Trabajador
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
    - https://manual.aturnos.com/knowledgebase/2-buscar-trabajador-para-un-turno/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/2-buscar-trabajador-para-un-turno/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre buscar trabajador para un turno?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/2-buscar-trabajador-para-un-turno/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/2-buscar-trabajador-para-un-turno/
  contentHash: 1e5137511887c23a5fe06326204df4bd4869644999fb42b677e67d97363d786e
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

El administrador, como consecuencia de la planificación del cuadrante, puede ‘Buscar trabajador para turno’ para cubrir un turno con un trabajador más.

## Qué debes saber
Se inserta y planifica un turno a un trabajador o varios que estén disponibles (es decir, que no tengan un turno insertado con anterioridad) y que no incumpla ninguna restricción.

Los administradores pueden buscar a un trabajador para cualquier turno con una localización determinada. El filtro también permite buscar trabajadores de una localización, una categoría o especialidad, en concreto.

Ejemplo 1: En muchos casos, un trabajador que tiene localización por defecto “Traumatología” y va a cubrir un día el turno de “Urgencias”, no se le va a modificar la localización al trabajador, en este caso solo se seleccionará (en el campo correspondiente) la localización al turno, de esta forma se indicará que ese día el turno lo hará en “Urgencias”. Y al revisar la tabla de cobertura se estará contando este trabajador dentro de la localización de “Urgencias”.

Ejemplo 2: Un trabajador que no puede trabajar en determinada localización, en este caso, “Consultas” (ver Restricción: No trabajar en determinada localización ), si el administrador al buscar trabajador para un turno, selecciona en el campo Localización: “Consultas” no aparecerá este trabajador como opción en el listado de trabajadores a seleccionar para el turno.

El administrador tiene varias opciones:

Cuando se selecciona un turno del listado, aparece un menú contextual donde buscar qué trabajador puede hacer el turno que se quiere cubrir.

Automáticamente el sistema descarta a los trabajadores planificados dentro del mismo horario del turno que se quiere cubrir.

Una vez se selecciona un trabajador, se le asigna ese turno.

Cuando se selecciona el turno, por defecto se asignará a la opción ‘ Fuera de bolsa de trabajo’, mostrando a cualquier trabajador sin planificación para ese horario del turno.

El sistema permite computar estos turnos en una Bolsas de trabajo.

Los administradores podrán seleccionar a qué bolsa imputar esas horas del turno que se quiere cubrir.

Automáticamente, el sistema muestra los trabajadores de la bolsa con horas disponibles y que no están planificados en ese día.

Los turnos que han sido asignados por bolsa, se encontrarán planificados en el Cuadrante, destacando el día con un borde de color rojo a los trabajadores que lo tengan asignados.

La tercera opción para buscar trabajador para un turno, es creando una oferta de turno.

En la parte inferior del menú, después de todos los trabajadores disponibles, se muestra la opción “Crear oferta de turno”.

Al hacer clic sobre esta opción, se nos muestra el siguiente modal, donde debemos informar:

- Visible solo para la localización: se puede elegir una o más localizaciones. Las ofertas de los turnos solo estarán visibles y disponibles para inscribirse a los trabajadores que tengan por defecto las localizaciones seleccionadas en este apartado.
- Especialidad: indicando una especialidad, solo recibirán la oferta de turnos aquellos trabajadores que tenga dicha especialidad.
- Categoría: seleccionando una categoría, los trabajadores que podrán apuntarse a ese turno serán los que tenga la categoría seleccionada.
- Fecha inicio y fin de la oferta.
- Tipo de turno: el turno para el cual se buscan trabajadores.
- Cantidad: esto indica si se necesita cubrir el turno por uno o más trabajadores.
- Comentario: se puede informar algún tipo de información adicional a la oferta, la razón por la cual se hace.
- Adjunto: se puede adjuntar un documento que pueda ser de interés para los trabajadores que se quieran apuntar a la oferta.

Completada esta información, el último paso es ‘Guardar’ para que se registre la oferta de turno y los trabajadores se empiecen a apuntar.

Más información sobre el proceso de oferta de turno.

Es de gran utilidad para el administrador definir la Localización de un Turno, esto le ayudará al momento de clasificar una búsqueda de los turnos (que tengan asignados localizaciones) en el filtro del Cuadrante, para visualizar solo los turnos de una localización en particular. También es de provecho, cuando desea obtener un informe o estadísticas de una determinada localización.

Ejemplo 1: Un trabajador que tiene localización por defecto “Traumatología” tiene que cubrir un día el turno de “Urgencias”. Solo se seleccionará la localización al turno, indicando que ese día el turno lo hará en “Urgencias”. Y al revisar la tabla de cobertura se estará contando este trabajador dentro de la localización de “Urgencias”.

Ejemplo 2: Un trabajador que no puede laborar en determinada localización, en este caso, “Consultas” (ver Restricción: No trabajar en determinada localización ). Si el administrador al buscar trabajador para un turno, selecciona en el campo Localización “Consultas” no aparecerá este trabajador disponible para el turno.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![2. Buscar trabajador para un turno](/media/manual/2-buscar-trabajador-para-un-turno-7cfa99a11b.webp)

![2. Buscar trabajador para un turno](/media/manual/2-buscar-trabajador-para-un-turno-e7f82fd46b.webp)

![2. Buscar trabajador para un turno](/media/manual/2-buscar-trabajador-para-un-turno-281cb263d9.webp)

![2. Buscar trabajador para un turno](/media/manual/2-buscar-trabajador-para-un-turno-83a5c08cf5.webp)

![2. Buscar trabajador para un turno](/media/manual/2-buscar-trabajador-para-un-turno-6c50bec212.webp)

![2. Buscar trabajador para un turno](/media/manual/2-buscar-trabajador-para-un-turno-1d80c990a9.webp)

![2. Buscar trabajador para un turno](/media/manual/2-buscar-trabajador-para-un-turno-704554b717.webp)
