---
schemaVersion: "1.0"
contentId: costes-y-nominas-costes-categoria
title: Costes/Categoría
description: Este tipo de coste se recomienda para aquellas empresas que deben diferenciar el coste de las horas por grupos o categorías profesionales.
contentType: reference
module: Costes y nóminas
submodule: Vacaciones y ausencias
intent: Costes/Categoría
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
  - role: Desarrollador API
    access: applicable
entities:
  - id: categoria
    label: Categoria
  - id: costes
    label: Costes
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
    - https://manual.aturnos.com/knowledgebase/costes-por-categoria/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/costes-por-categoria/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre costes/Categoría?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/costes-por-categoria/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/costes-por-categoria/
  contentHash: 85d33e33bfab3ba043885e9384828f2d9241201afb5eebe54542d3ca65c8aa45
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre costes/Categoría, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
Este tipo de coste se recomienda para aquellas empresas que deben diferenciar el coste de las horas por grupos o categorías profesionales. Se podrá establecer el coste por hora de una o varias categorías profesionales que existan en el equipo (Ver más acerca de Categorías).

La configuración del coste por categoría se realiza desde el menú Trabajadores – Datos del Trabajador – Categorías, y editar la categoría (en el icono del lapicero de las Acciones), tal como te mostramos a continuación:

Al entrar a la categoría para editarla se mostrarán los siguientes campos que deberás cumplimentar:

Nombre: Por defecto aparece el nombre de la categoría

Añadir horas automáticamente al exceder un tiempo mínimo de trabajo continuo: permite configurar parámetros para que el sistema añada horas automáticamente tras exceder una cantidad de tiempo mínima de trabajo continuo a los usuarios con dicha categoría.

Es importante resaltar que al seleccionar la opción “Si” esta configuración NO tiene efecto retroactivo en el cuadrante, es decir, solo aplicará a los turnos (planificación) que se asignan nuevos a partir de la configuración (si el trabajador tiene planificación ya registrado en el cuadrante del año antes de hacer la configuración no les añadirá las horas al exceder el tiempo mínimo de trabajado).

- Tiempo mínimo continuado: cantidad mínima de horas de trabajo que servirá de referencia para imputar horas automáticamente de excesos. Es decir, si se informa en ese campo 7 horas y el trabajador realiza 8.
- Tiempo a añadir: Cantidad de horas que se van a añadir automáticamente al superar el tiempo mínimo continuado.
- Tipo de hora: identificar si las horas computarán como Extras, Complementarias ó algún otro tipo de hora que haya definido en el equipo.
- Localización: se debe informar la localización que habrá por defecto esas horas de mas o exceso que realizó el trabajador.

Costos por defecto: valor que se asignará o imputará por cada hora de trabajo de esta categoría en general. También podrás parametrizar una categoría con más detalles en el punto a continuación.

1. € / hora, se informa el coste de la hora a imputar.
2. Este punto se debe informar la localización cuando el coste por hora de la categoría sea diferente en esa localización en particular, de lo contrario se tendrá la opción de “Cualquier localización” cuando no sea necesario distinguir una de otras.
3. En este numeral se podrá elegir si el costo por hora aplica para un día normal, fin de semana o festivo.
4. Entre las opciones se puede elegir un coste por hora en la categoría cuando sean horas normales, extras o complementarias (Ver más en Tipos de horas).
5. Puedes relacionar el coste por hora de la categoría a un rango de tiempo, en este caso en el numeral 5, se indica la hora de inicio del coste informado.
6. En esta casilla se indica la hora fin del coste a imputar.
7. Finalmente debes hacer clic en el botón de Insertar para que se guarden las variables. Una vez guardada la información se ofrece la opción de Borrar esos datos de ser necesario (icono de la Papelera).
