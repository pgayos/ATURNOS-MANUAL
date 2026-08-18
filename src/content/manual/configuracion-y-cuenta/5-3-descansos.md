---
schemaVersion: "1.0"
contentId: configuracion-y-cuenta-5-3-descansos
title: Descansos
description: Esta función permite configurar los descansos a nivel de equipo, aplicándose automáticamente a los trabajadores que no tengan un descanso individual configurado o cuyo tipo de turno no espec.
contentType: reference
module: Configuración y cuenta
submodule: Roles y permisos
intent: Descansos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: descansos
    label: Descansos
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
    - https://manual.aturnos.com/knowledgebase/5-3-descansos/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-3-descansos/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre descansos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 8
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-3-descansos/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-3-descansos/
  contentHash: f02babd6bba904da0f3d158b2da6fb209cbfd4d65d7220224ad3d8e09583ce9c
  migratedAt: 2026-08-17
labels: []
---
## Resumen

Información sobre descansos, con instrucciones y contexto revisables por el equipo de aTurnos.

## Opciones y datos disponibles
La gestión de descansos tiene tres niveles:

- Por tipo de turno.
- A nivel del trabajador.
- En el equipo.

Esta función permite configurar los descansos a nivel de equipo, aplicándose automáticamente a los trabajadores que no tengan un descanso individual configurado o cuyo tipo de turno no especifique un tiempo de descanso.

La jerarquía de aplicación de los descansos es la siguiente:

1. Definidos por tipo de turno: tienen prioridad sobre los descansos establecidos a nivel individual o de equipo.
2. Individuales: prevalecen sobre los descansos definidos para el equipo.
3. A nivel de equipo: se aplican únicamente si no hay configuraciones específicas a nivel individual o por tipo de turno.

Para configurar un descanso a nivel de equipo, simplemente haz clic en el botón “Gestionar descanso” y añade los nuevos parámetros de configuración.

Al configurar los nuevos datos, se nos mostrarán una serie de campos a completar en el formulario:

1. Entrada en vigor: Fecha a partir de la cual se aplicará el tiempo de descanso configurado.
2. Válido hasta: Fecha límite hasta la que será válido el descanso establecido.
3. Mínimo de horas trabajadas en turno: Para que se aplique el tiempo de descanso, el turno debe incluir un mínimo de horas planificadas iguales o superiores a este valor. Este mínimo se calcula como las horas trabajadas entre el inicio del turno y el momento del descanso.
4. Descanso en minutos: Duración del tiempo de descanso asignado.
5. Descanso en minutos sin alcanzar el mínimo de horas: En caso de no cumplirse el mínimo de horas trabajadas, se puede configurar un tiempo de descanso alternativo. Este tiempo se aplicará incluso si el trabajador no alcanza el mínimo de horas planificadas presencialmente.

Acciones disponibles:

- Cancelar: Si no deseas registrar el descanso, haz clic en “Cancelar”.
- Guardar: Para guardar la configuración, haz clic en “Guardar”.

Una vez guardado, el descanso configurado aparecerá registrado en el apartado de Descansos dentro de los ajustes de control horario.

Los descansos que se vayan gestionando a lo largo del tiempo y ya no sea válidos, se recogerán en la pestaña ‘Histórico’ de la ‘Gestión descanso’.

Además existen cuatro modos de funcionamiento de la gestión de descansos que se completan con cinco opciones de configuración.

Los descansos se pueden configurar:

Si esta opción está activada, las salidas y entradas registradas dentro del turno planificado se considerarán como tiempo de absentismo en lugar de descanso.

Ejemplo: En un turno de 7:00 a 15:00, si un trabajador registra una salida a las 12:00 y una entrada a las 12:15, esos 15 minutos se contabilizarán como absentismo.

Si se elige esta opción, el tiempo registrado entre una salida y una nueva entrada dentro del horario planificado del turno se computará como descanso, siempre que no exceda el tiempo permitido para descansos.

Ejemplo:

- Turno de 7:00 a 15:00, con una duración computada de 7 horas y 45 minutos.
- Un trabajador registra una salida a las 12:00 y una entrada a las 12:15. Esos 15 minutos se computan como tiempo de descanso.

Si el tiempo excede el permitido y el trabajador no completa la duración computada del turno, el exceso será considerado absentismo.

Al activar esta opción, el sistema calcula automáticamente el tiempo de descanso como la diferencia entre la duración total del turno y la duración computada (configurable en los turnos ). Esto significa que no será necesario registrar fichajes adicionales para los descansos durante el horario planificado del turno.

Ejemplo práctico: Para un turno de 08:00 a 15:00 con una duración total de 7 horas, si la duración computada es de 6 horas y 30 minutos, el sistema considerará automáticamente los 30 minutos restantes como tiempo de descanso. En el detalle del trabajador, aparecerá reflejado que esos 30 minutos corresponden a su tiempo de descanso.

Esta funcionalidad permite que los descansos se calculen y descuenten de manera automática cuando no se registran mediante fichajes, siempre que se cumplan las condiciones configuradas. El sistema considera tres niveles para aplicar esta lógica:

1. Condiciones a nivel de trabajador: Descansos definidos de forma individual para cada empleado.
2. Condiciones a nivel de equipo: Descansos comunes establecidos para un grupo de trabajadores.
3. Descansos programados en el tipo de turno: Descansos predefinidos dentro de la configuración del turno.

Ejemplos prácticos:

- Si un trabajador tiene configurado un descanso de 30 minutos cuando trabaja más de 7 horas y no registra su descanso, el sistema descontará automáticamente este tiempo del total fichado. Por ejemplo, si el fichaje es de 7 horas, el sistema contabilizará 6:30 horas trabajadas.

- En un turno de 08:00 a 15:00 (7 horas) con un descanso programado de 20 minutos, el sistema aplicará automáticamente este descuento. El Detalle por trabajador reflejará 6:40 horas trabajadas.

Este método asegura que los descansos se gestionen de manera precisa y automática, respetando las configuraciones establecidas sin necesidad de fichajes adicionales.

Si la habilitamos, cuando un trabajador registra un descanso inferior al tiempo establecido en el tipo de turno o en la configuración individual de su perfil, el sistema ajusta automáticamente la discrepancia sin necesidad de intervención manual. En el Detalle por trabajador, se reflejará el tiempo no disfrutado del descanso, así como el exceso de tiempo trabajado respecto a lo planificado.

Esto garantiza un control claro y transparente sobre los descansos registrados y su impacto en las horas trabajadas.

Ejemplo

Supongamos que un trabajador tiene configurado un descanso de 30 minutos en su tipo de turno o perfil personal. Si en su jornada de trabajo realiza un descanso de 20 minutos, el sistema registrará automáticamente la discrepancia y reflejará lo siguiente en el Detalle por trabajador:

1. Estado de horas: 10 minutos (la diferencia entre los 30 minutos asignados y los 20 minutos efectivamente descansados).
2. Horas trabajadas: Se sumarán esos 10 minutos adicionales al tiempo total trabajado, ya que no se descontaron del descanso asignado.

Por ejemplo:

- Si el turno es de 08:00 a 15:00 (7 horas) y el descanso configurado es de 30 minutos, el tiempo esperado de trabajo efectivo sería 6:30 horas.
- Si el trabajador ficha un descanso de solo 20 minutos, el sistema reflejará 6:40 horas trabajadas y 10 minutos como tiempo no descansado.

Este ajuste automático asegura que las discrepancias en los descansos queden claramente documentadas sin necesidad de intervención manual.

En los casos en que el tipo de turno no tenga un descanso configurado, cualquier tiempo fichado como descanso se descontará del estado del trabajador y se reflejará como un valor negativo.

Ejemplo práctico: Si un turno planificado no incluye descanso y el trabajador registra un descanso de 30 minutos, este tiempo se restará del estado, mostrando una discrepancia negativa de -30 minutos. Esto indicará que el descanso tomado no estaba contemplado en la planificación del turno.

Esta funcionalidad permite un control claro y preciso, destacando los descansos realizados cuando no están previstos en la configuración del turno.

Esta configuración es especialmente útil en casos como las jornadas partidas, donde el tiempo entre un fichaje de salida y el siguiente fichaje de entrada no se considera un descanso, sino el fin de un turno y el inicio de otro. Con esta opción, se asegura que solo los intervalos que cumplan con los criterios establecidos (ya sea a nivel del trabajador o del tipo de turno configurado) se contabilicen como descansos en el ‘Detalle’ y el ‘ Detalle por trabajador ‘.

Ejemplo práctico:

- Si se establece un límite de 50 minutos como tiempo máximo para considerar un descanso, cualquier intervalo mayor a ese tiempo (por ejemplo, más de una hora) en una jornada partida no será considerado como tiempo de descanso, sino como la transición entre dos turnos.
- Por otro lado, si el descanso configurado es de 30 minutos, pero el trabajador ficha un descanso de 60 minutos, el sistema reflejará los 60 minutos como descanso, pero destacará que se han fichado 30 minutos de más, ya que el descanso configurado por defecto es de 30 minutos.

En cualquier caso, el sistema calculará el total del tiempo de descanso registrado y, si corresponde, informará claramente el tiempo fichado de más o de menos en comparación con la configuración establecida. Esto asegura un control preciso de los descansos y su impacto en las horas trabajadas.

Si existe jornada partida, no se contabiliza el tiempo entre un fichaje de salida y una nueva entrada como descanso.

En situaciones donde un trabajador tiene un permiso por horas durante su jornada laboral, puede ser necesario fichar antes o después de haber disfrutado de ese tiempo de absentismo. Al activar esta opción, el sistema permite que, aunque no se hayan cumplido las horas mínimas para contabilizar el descanso, si el trabajador inicia su descanso porque tiene derecho a ello, este tiempo se registrará como descanso.

Si la opción no está activada, el tiempo que el trabajador fiche antes o después de su absentismo será considerado como tiempo presencial no trabajado, lo que implicará que el trabajador deberá recuperarlo en otro momento.

Este ajuste asegura que los descansos sean correctamente contabilizados, incluso si se toman antes o después de un permiso, respetando siempre los derechos del trabajador.
