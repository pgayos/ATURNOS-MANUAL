---
schemaVersion: "1.0"
contentId: "gestion-de-personal-a-datos-personalizados"
title: "Datos personalizados"
description: "Información sobre datos personalizados, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Gestión de personal"
submodule: "Usuarios y perfiles"
intent: "Datos personalizados"
audience:
  - role: "Administrador"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
  - role: "Desarrollador API"
    access: applicable
entities:
  - id: "datos"
    label: "Datos"
  - id: "personalizados"
    label: "Personalizados"
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
    - "https://manual.aturnos.com/knowledgebase/a-datos-personalizados/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/a-datos-personalizados/"
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre datos personalizados?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "4814a29b856ca3f5a8768f08aecd6476b184b0ca129f97b8c9e3cffdd4dbec34"
  migratedAt: 2026-08-17
---
## Resumen

Información sobre datos personalizados, con instrucciones y contexto revisables por el equipo de aTurnos.

## Contenido

Los datos personalizados definen qué información o campos podemos añadir a la ficha de los empleados que nos sean de interés para que después sea añadida, modificada o borrada por los diferentes roles dentro de aTurnos ( ver más sobre los distintos tipos de usuario ). Podemos configurar qué tipo de usuario tiene acceso a estos datos, qué tipo de dato es, si necesita algún tipo de validación para poder actualizarse, a qué afecta si solo a los trabajadores, a las localizaciones, tareas, etc.

Por ejemplo, si quieres almacenar en los perfiles de cada trabajador si han solicitado formalmente EPI’s (Equipos de Protección Individual) para tener una mayor protección, aquí puedes añadir los tipos de EPI’s que se le entregarán al trabajador (ejemplo: calzado, camiseta y pantalón ) y posteriormente agruparlos en “ grupo de datos ”, creando el bloque EPI’s, agrupando así mismo a cada uno de ellos.

De esta forma, una vez sea entregado cada artículo, se marca con un sí para mantener el registro de qué materiales han sido entregados y cuales no.

En la opción de Datos Personalizados disponemos de las siguientes pestañas:

Como hemos expuesto anteriormente, son aquellos datos o campos personalizados que se quieren añadir en el perfil del trabajador (ver más en el perfil del trabajador ), localizaciones, tareas, etc.

Si quieres crear un dato personalizado tienes que hacer clic sobre el botón ” Acciones ” (esquina superior derecha), posteriormente en “ Añadir D ato Personalizado “, donde aparece un formulario con los siguientes campos:

- Descripción: Es el nombre con el que se identifica el concepto que se va a crear (es el que será visible en aTurnos).
- Descripción corta (integración): Es el nombre que puedes indicar para utilizar en la API de integración. (https://api.aturnos.com/). Para su uso correcto, no debe llevar caracteres como tildes, “ñ”, etc. Por otro lado, si no necesitas utilizar este campo en la integración, no es obligatorio informarlo.
- Bloque de datos: Elige si va a estar asociado a un grupo de datos previamente creado.
- Creado para: Define dónde van a estar ubicados estos datos personalizados. Una vez que haces clic sobre él, se accede a un desplegable que contiene para quien está creado (elegir entre “trabajador”, “localización”, “cliente”, “actividades” y “tareas”).
- Tipo de campo: Muestra qué tipología de dato estás creando, es decir, tienes que especificar en el formulario si el tipo de dato que estás creando está en formato de texto, número, fecha o GeoReferencia.
- Requerido: especifica si es de obligación o no que siempre se proceda a informar sobre este campo.
- Expresión regular: Indica la regla de cómo deben ir ordenadas las siglas de los datos personalizados que se creen. Posteriormente puedes cambiar el orden de los datos personalizados creados haciendo clic en el botón “ cambiar orden ” (situado en la esquina superior derecha, inmediatamente posicionado a la izquierda de “Acciones”).
- Permisos: Muestra a qué tipo de roles dentro de aTurnos quieres que se le muestre el dato personalizado que estás creando. Puedes hacerlo con el fin de que no todos los trabajadores tengan acceso a dicha información (ver más en roles de usuario ). Además, dichos datos personalizados necesitan validación por un manager de un rol superior al trabajador.

Se trata del nombre con el que se puede identificar un determinado tipo de datos personalizados, con el fin de tenerlos todos agrupados en un mismo género o concepto general. Para añadirlos, únicamente hay que informar de la descripción con la que quieres nombrar a ese determinado tipo de datos personalizados. Ejemplo: nombrar un bloque de datos “EPI’s” para agrupar un determinado tipo de datos “calzado”, “pantalón” y “camiseta”.
