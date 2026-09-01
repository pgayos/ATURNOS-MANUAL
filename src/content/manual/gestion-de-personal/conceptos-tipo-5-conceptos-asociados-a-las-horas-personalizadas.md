---
schemaVersion: "1.0"
contentId: gestion-de-personal-conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas
title: "Conceptos tipo 5.: Conceptos asociados a las horas personalizadas"
description: Los conceptos tipo 5 recuperan la información de las “horas personalizadas” creadas en el equipo. Consulta el Manual, aquí, para ampliar información.
contentType: concept
module: Gestión de personal
submodule: Altas y bajas
subtopic: ""
intent: "Conceptos tipo 5.: Conceptos asociados a las horas personalizadas"
audience:
  - role: Administrador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: asociados
    label: Asociados
  - id: conceptos
    label: Conceptos
  - id: horas
    label: Horas
  - id: personalizadas
    label: Personalizadas
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
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas/
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre conceptos tipo 5.: Conceptos asociados a las horas personalizadas?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas/
  contentHash: f9ae75cd616439246c6c7c99aa8a42e221dcb4a434659a1c21e05f2573042e32
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Los conceptos tipo 5 recuperan la información de las “horas personalizadas” creadas en el equipo. Consulta el Manual, aquí, para ampliar información.

## Qué debes saber
Por cada tipo de hora personalizada se crean 7 conceptos:

5.1.- Recupera el número de horas del tipo “Ejemplo Manual” planificadas a las que se les aplica el coeficiente indicado en el tipo de hora, pudiendo filtrar por:

- La localización de las horas del tipo indicado
- La localización por defecto del trabajador
- La categoría del trabajador
- Días de la semana, admite múltiples selecciones.

5.2.- Recupera el número de horas del tipo “Ejemplo Manual” planificadas sin aplicar coeficiente indicado en el tipo de hora, pudiendo filtrar por:

- La localización de las horas del tipo indicado
- La localización por defecto del trabajador
- La categoría del trabajador
- Días de la semana, admite múltiples selecciones.

A través de PLANIFICADOR → TIPOS DE TURNO → Pestaña Horas se visualiza si la hora tiene un coeficiente aplicado, el concepto tipo 5.1 multiplicará el número de horas por el coeficiente aplicado y en el caso del concepto tipo 5.2, devolver el número de horas del tipo informadas sin aplicar el coeficiente

5.3.- Recupera el número de días en los que se ha planificadas el tipo de horas “Ejemplo Manual”.

5.4.- Recupera el número de veces en los que se ha planificado el tipo de horas “Ejemplo Manual”, pudiendo filtrar por:

- La localización de las horas del tipo indicado
- La localización por defecto del trabajador
- La categoría del trabajador
- Días de la semana, admite múltiples selecciones.

5.5.- Recupera el número de horas con límite del tipo “Ejemplo Manual” planificadas. En este caso el limite establecido son 8 horas, pudiendo filtrar por:

- La localización de las horas del tipo indicado
- La localización por defecto del trabajador

5.6.- Recupera el número horas diurnas del tipo “Ejemplo Manual” informada, es decir las horas planificadas desde las 08:00 a las 22:00, siempre que el periodo nocturno en el equipo esté definido de 22:00 a 08:00, pudiendo filtrar por:

- La localización de las horas del tipo indicado
- La localización por defecto del trabajador
- La categoría del trabajador

5.7.- Recupera el número horas nocturnas del tipo “Ejemplo Manual” planificadas en el periodo nocturno definido, pudiendo filtrar por:

- La localización de las horas del tipo indicado
- La localización por defecto del trabajador
- La categoría del trabajador

5.8.- Recupera el número de horas en la franja horaria del tipo “Ejemplo Manual” planificadas, pudiendo filtrar por:

- La localización de las horas del tipo indicado
- La localización por defecto del trabajador
- La categoría del trabajador

El trabajador tiene en el cuadrante:

- El día 7 de junio tiene planificadas Horas del tipo “Ejemplo Manual” desde las 20:00 a las 08:00 del día 8 de junio: 12 horas

La estadística que se visualiza desde ADMINISTRAR → NOMINAS → ESTADISTICA DIARIA es:

5.1.- El concepto número de horas con coeficiente son 18, de decir las 12 horas del tipo “Ejemplo Manual” (de 20:00 a 08:00) multiplicadas por el coeficiente 1,5 que está indicado en el tipo de hora.

5.2.- El concepto número de horas sin coeficiente son 12, de decir las 12 horas del tipo “Ejemplo Manual”. (de 20:00 a 08:00)

5.3.- El concepto días que tiene horas planificadas del tipo “Ejemplo Manual” es 1.

5.4.- El concepto veces que tiene horas planificadas del tipo “Ejemplo Manual” es 1.

5.5.- El concepto número de horas con límite (a 8) es 8.

5.6.- Las horas diurnas del tipo “Ejemplo Manual son 2, desde las 20:00 a las 22:00

5.7.- Las horas nocturnas del tipo “Ejemplo Manual son 10, desde las 22:00 hasta las 00:00 del día 7 de junio más las 08:00 desde las 00:00 hasta las 08:00 del día 8.

El trabajador tiene el día 9 planificadas:

- Horas del tipo “Ejemplo Manual” desde las 07:00 a las 09:00: 2 horas
- Horas del tipo Extra desde las 11:00 a las 13:00: 2 horas
- Horas del tipo “Ejemplo Manual” desde las 14:00 a las 17:00: 3 horas

La estadística que se visualiza desde ADMINISTRAR → NOMINAS → ESTADISTICA DIARIA es:

5.1.- El concepto número de horas con coeficiente son 7,5, el resultado de la suma de las horas desde las 07:00 a las 09:00 más las horas desde las las 14:00 a las 17:00 son 5 multiplicadas por el coeficiente 1,5 que está indicado en el tipo de hora.

5.2.- El concepto número de horas sin coeficiente son 5, el resultado de la suma de las horas desde las 07:00 a las 09:00 más las horas desde las las 14:00 a las 17:00.

5.3.- El concepto días que tiene horas planificadas del tipo “Ejemplo Manual” es 1.

5.4.- El concepto veces que tiene horas planificadas del tipo “Ejemplo Manual” son 2, la primera vez por las horas desde las 07:00 hasta las 09:00 y la segunda vez por las horas desde las 14:00 a las 17:00

5.5.- El concepto número de horas con límite (a 8) es 7,5, al no superar el límite devuelve las horas del tipo con el coeficiente aplicado.

5.6.- Las horas diurnas del tipo “Ejemplo Manual son 4, desde las 08:00 hasta las 09:00 y de las 14:00 a las 17:00.

5.7.- Las horas nocturnas del tipo “Ejemplo Manual son 1, desde las 07:00 hasta las 09:00.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Conceptos tipo 5.: Conceptos asociados a las horas personalizadas](/media/manual/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas-763013314f.png)

![Conceptos tipo 5.: Conceptos asociados a las horas personalizadas](/media/manual/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas-54e2facdc8.png)

![Conceptos tipo 5.: Conceptos asociados a las horas personalizadas](/media/manual/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas-37ecd45992.png)

![Conceptos tipo 5.: Conceptos asociados a las horas personalizadas](/media/manual/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas-fab59eb79a.png)

![Conceptos tipo 5.: Conceptos asociados a las horas personalizadas](/media/manual/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas-6c0040db63.png)

![Conceptos tipo 5.: Conceptos asociados a las horas personalizadas](/media/manual/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas-0b57d1a650.png)

![Conceptos tipo 5.: Conceptos asociados a las horas personalizadas](/media/manual/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas-b00bf0997a.png)

![Conceptos tipo 5.: Conceptos asociados a las horas personalizadas](/media/manual/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas-860b4aa03d.png)

![Conceptos tipo 5.: Conceptos asociados a las horas personalizadas](/media/manual/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas-178f0154c4.png)

![Conceptos tipo 5.: Conceptos asociados a las horas personalizadas](/media/manual/conceptos-tipo-5-conceptos-asociados-a-las-horas-personalizadas-d046377d1d.png)
