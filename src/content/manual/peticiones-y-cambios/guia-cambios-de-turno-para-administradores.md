---
schemaVersion: "1.0"
contentId: peticiones-y-cambios-guia-cambios-de-turno-para-administradores
title: Cambios de turno para administradores
description: Desde aTurnos, puedes gestionar los cambios de turnos, doblajes y libres de una manera mucho más eficiente. Es importante, antes de gestionar cualquier cambio de turno, configurar cómo queremos que estos se comporten:.
contentType: procedure
module: Peticiones y cambios
submodule: Autogestión
intent: Cambios de turno
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms:
  - web
governance:
  status: draft
  owner: Equipo de Producto de aTurnos
  reviewer: null
  reviewedAt: 2026-01-14
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-administrador/empoderamiento-del-mando-y-del-trabajador/cambios/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Cómo puedo cambios de turno para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 4
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/empoderamiento-del-mando-y-del-trabajador/cambios/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/empoderamiento-del-mando-y-del-trabajador/cambios/
  contentHash: cfe3f56332cd5ee4f3d771f8b7a9e9b3ab70006818cde8c1c7901a998c5f4de1
  migratedAt: 2026-08-18
order: 1
---
## Resumen

Desde aTurnos, puedes gestionar los cambios de turnos, doblajes y libres de una manera mucho más eficiente. Es importante, antes de gestionar cualquier cambio de turno, configurar cómo queremos que estos se comporten:

### Configuración cambios de turno

Accede a Administrar → Configuración → Cambios. En esta pantalla podrás configurar varios campos:

- Se permiten cambios entre trabajadores. Es la configuración más importante, ya que será la que determinará si se utilizará la función de hacer cambios de turno o no.
- Flujo de aprobación de cambios de turnos. Define el procedimiento de aprobación que deberá pasar la petición de cambios de turno.
- Indica los días de antelación con los que puedes realizar un cambio
- Al hacer un cambio, requerir que los trabajadores tengan la misma experiencia y especialidad
- Al hacer un cambio, requerir que los turnos tengan la misma duración computada.
- Los turnos tengan la misma localización.
- Al hacer un cambio, requerir que los trabajadores tengan la misma categoría.
- Nivel a partir del cual no se pueden realizar intercambios de turnos de otros compañeros.
- Enviar correos a los implicados en un cambio de turno.
- Indica los días que pueden pasar para devolver un cambio
- Máximo de cambios a deber
- Fecha para el cálculo máximo de cambios a deber.
- Permitir cambios en distintos años fiscales.
- Aplicar restricciones en los cambios de turno
- Mostrar avisos al comprobar restricciones deseables cuando se realiza un cambio

### Tipos de cambio de turno y cómo se gestionan.

- Intercambio: Este tipo de cambio de turno intercambia los turnos de los dos trabajadores. Al hacer dos cambios en el cuadrante se deben aprobar dos peticiones. Lo mismo ocurre si se quiere deshacer una petición aprobada, deberán deshacerse las dos.
- Doblaje: Este tipo de cambio de turno solo se puede realizar si los dos trabajadores involucrados tienen turnos planificados. El turno del que lo solicita, pasa al trabajador al que se le solicita. Solo se aprueba una petición. El trabajador deberá decidir si devuelve el cambio o lo deja a deber. El administrador puede controlar cuántos turnos se han dejado a deber desde Registro → Cambios a deber
- Libre: Este tipo de cambio solo se puede realizar si uno de los dos trabajadores no tiene turno planificado ese día. El turno del trabajador que lo solicita pasa al trabajador al que se le solicita. Al igual que el doblaje, se puede decidir si dejarlo a deber o si devolver el turno.

## Visualización en el Cuadrante de Cambios de Turno

Esta guía te ayudará a comprender cómo visualizar y entender los cambios de turno en el cuadrante de aTurnos. Saber interpretar estos cambios te permitirá gestionar los turnos de manera eficiente y evitar confusiones.

### Introducción

El sistema de visualización de cambios de turno está diseñado para que los administradores y empleados puedan ver con claridad las solicitudes de intercambio, peticiones de días libres y doblajes. Cada tipo de solicitud tiene un formato visual único que permite identificar su estado fácilmente. Esto simplifica la gestión de turnos y asegura que todos los cambios sean transparentes y fáciles de rastrear.

### Casos de Uso

1. Intercambios de turno

- Un empleado solicita intercambiar un turno con otro compañero.
- Antes de la aprobación: El turno que se quiere intercambiar aparece destacado con un marco azul. El turno original planificado se muestra borroso, indicando que está sujeto a cambios. Coloca el cursor sobre el icono ｉ para ver detalles del turno original o usa el filtro «Comentario» para mayor claridad.
- Después de la aprobación: El turno borroso desaparece. El turno aprobado se muestra con un marco verde, indicando que el cambio ha sido aceptado y registrado.

2. Peticiones de día libre

- Un empleado solicita un día libre en su cuadrante.
- Antes de la aprobación: El turno solicitado como libre aparece borroso y con un marco azul. En el cuadrante del compañero que podría cubrir ese turno, este aparece con un marco azul.
- Después de la aprobación: El cuadrante del solicitante queda vacío, reflejando que tiene el día libre. En el cuadrante del compañero, el turno aparece con un marco verde.

3. Peticiones de doblaje

- Un empleado solicita doblar un turno adicional al suyo.
- Antes de la aprobación: El turno solicitado para doblar aparece borroso y con un marco azul.
- Después de la aprobación: El cuadrante del solicitante se actualiza, mostrando el turno con un marco verde como confirmación.

- Detalles del turno original:
- Coloca el cursor sobre el icono ｉ para ver el turno que estaba originalmente planificado.
- Habilita el filtro «Comentario» para obtener información adicional sobre los cambios.
- Estados de los turnos: Borroso y azul: Pendiente de aprobación. Verde: Cambio aprobado y confirmado.

Nota: Revisa los cuadrantes regularmente para verificar el estado de las solicitudes.
