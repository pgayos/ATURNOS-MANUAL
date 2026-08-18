---
schemaVersion: "1.0"
contentId: control-horario-1-detalle
title: Detalle en aTurnos
description: Este submenú permite al administrador visualizar, en un determinado día, información sobre los marcajes que realizan los trabajadores en comparación con la planificación.
contentType: concept
module: Control horario
submodule: Fichajes
intent: Detalle en aTurnos
audience:
  - role: Administrador
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: detalle
    label: Detalle
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
    - https://manual.aturnos.com/knowledgebase/1-detalle/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/1-detalle/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre detalle en aTurnos?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 6
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/1-detalle/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/1-detalle/
  contentHash: 6c1d90393189ecc7431dd2d5ee70146208a5098b0ab04a8970952491c222a822
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre detalle en aTurnos, con instrucciones y contexto revisables por el equipo de aTurnos.

Este submenú permite al administrador visualizar, en un determinado día, información sobre los marcajes que realizan los trabajadores en comparación con la planificación. Es importante entender como funcionan los gráficos (ver Interpretación de gráficos ). Incluye los siguientes elementos:

### Barra de filtros

Desde aquí se puede filtrar por la fecha del día, tipos de marcajes, periodo del día y características de clasificación (como la localización). La visualización de los marcajes se puede filtrar por diferentes valores como son:

- Todos los marcajes: aparecen todos los trabajadores con planificación de turnos u horas, así como en el caso de no tenerla los que hayan realizado algún marcaje.
- Marcajes sin finalizar: se muestran los trabajadores que tienen algún marcaje (de entrada o salida) y no han cerrado su fichaje por falta de un marcaje de entrada o de salida.
- Solo sin ajustar: aparecen los trabajadores que aún no han sido sometidos a un ajuste del marcaje por parte del administrador.
- Solo ajustados: se visualizan los trabajadores que han sido sometidos a un ajuste del marcaje por parte del administrador.
- Trabajadores trabajando y sin turno: aparecen los trabajadores que han realizado acción de marcajes (en el detalle si presenta una línea roja de inicio de marcaje, o un periodo presencial naranja), pero no tienen planificación en el cuadrante (no disponen de periodo verde planificado).
- Trabajadores con turno y sin marcaje: se muestran los trabajadores que no han realizado acción de marcajes (en el detalle no presenta línea roja de inicio de marcaje, ni periodo presencial naranja), pero si tiene planificación en el cuadrante (disponen de periodo verde planificado).
- Puntualidad: aparecen los trabajadores que se encuentran en rango de puntualidad. Esto quiere decir que tomando las tolerancias configuradas, el trabajador ha realizado algún marcaje fuera del tiempo definido como permitido para fichar una entrada o salida. Por ejemplo: un trabajador que tenía un turno de inicio a las 22:00 horas y ha fichado a las 22:10, cuando tolerancia por defecto de tiempo al inicio son 5 minutos. Estos casos se pueden supervisar de forma más específica en ‘Detalle por trabajador’. De igual forma se mostrarán los trabajadores que no hayan realizado ningún marcaje.

- Marcajes automáticos: se muestran los marcajes realizado por los trabajadores a través de los distintos sistemas de control de presencia sin ninguna acción de terceros (administradores).
- Marcajes manuales: aparecen los trabajadores que tienen marcajes que han sido añadidos o editados en algún momento por algún administrador desde las acciones de ‘Añadir marcajes’ o ‘Insertar marcajes’.
- Estado negativo: se visualizan los trabajadores cuyas horas planificadas son mayores que las horas presenciales. Interpretado como saldo o estado negativo.
- Estado positivo: aparecen los trabajadores cuyas horas planificadas son menores que las horas presenciales. Interpretado como saldo o estado negativo
- Usuarios dentro (fecha actual): son los trabajadores que en el momento de hacer la consulta están en tiempo de trabajo y han fichado.

- Usuarios fuera (fecha actual): se muestran los trabajadores que en el momento de hacer la consulta, no están en tiempo de trabajo, tienen informado un absentismo en el cuadrante (ver añadir absentismo en el cuadrante ) o no han fichado.

### Añadir marcajes

Este botón permite al administrador insertar marcajes de forma manual a un trabajador que se seleccione, indicando fecha y hora, añadir como entrada o salida, así como la localización del marcaje (ver Localizaciones ) y el tipo de marcaje (ver Tipos de marcaje ).

Cuando se añade un marcaje, aparece reflejado con una raya roja en el gráfico.

Otra forma de añadir marcajes manualmente, es desde ‘Insertar marcajes’.

### Opciones por trabajador

Haciendo clic en el nombre del empleado se puede acceder directamente a su perfil del trabajador.

Desde el icono de “+” se pueden añadir marcajes al trabajador y por último desde el icono del calendario se accede a la ficha por periodos y al informe de marcajes de ese empleado (ver ‘Detalle por trabajador’ ).

### Insertar o modificar marcajes

Los marcajes son todas aquellas rayas rojas que hay en el gráfico de la línea temporal de un día o aquellos marcajes cerrados que forman una barra naranja entre el marcaje de entrada y el de salida (ver Interpretación de los gráficos ).

Al pasar el cursor sobre un marcaje (raya roja) o un marcaje completado (barra naranja) se mostrará información sobre el fichaje realizado por el trabajador. Estos fichajes son modificables al hacer clic sobre ellos.

Si lo que deseas es comprender mejor cómo se pueden modificar los marcajes ya insertados, haz clic en ‘ Modificar marcajes’.

### Ajustar marcajes

Con las siguientes opciones se pueden ajustar los marcajes, que implica añadir absentismos en caso de defecto de horas presenciales o añadir horas en caso de exceso de horas presenciales (ver Ajustar marcajes ). Esto siempre se establece cuando se encuentra fuera de las tolerancias definidas (ver Tolerancias ). Por ejemplo, si existe una tolerancia de 5 minutos de defecto de tiempo al inicio del turno, solo se podrá ajustar cuando haya más de 5 minutos de defecto de tiempo.

Existen distintos tipos de ajustes del estado del control de presencia, al pulsar sobre el botón de ajustar:

- Ajuste Real, con el cual se añaden horas (en caso de exceso de tiempo en el marcaje cerrado con respecto al turno) y/o absentismos (si existe defecto de tiempo en el marcaje cerrado con respecto al turno) al inicio o final del turno (ver ‘Ajuste real’ ).
- Ajuste sobre el total (solo es posible si está configurada la opción ‘Calculando el total de horas de la jornada’ en ‘Mostrar botón de ajustar marcajes’ ) mediante el cual se suman las horas de más de tiempo del marcaje cerrado o se resta en caso de ser tiempo de menos. En caso de que el total sea positivo (exceso de tiempo fichado) se insertarán horas añadidas o si por el contrario el total es negativo (defecto de tiempo) se insertarán absentismos. Por ejemplo, un trabajador que ficha 20 minutos antes del inicio de su turno y ficha la salida 10 minutos antes del final de turno, el ajuste total sería de 10 minutos de horas añadidas. Lo particular de este ajuste, es que las horas añadidas siempre se insertarán al final del turno y los absentismos al inicio del turno (ver ‘Ajuste sobre el total’ ).

Además desde ‘Ajustar’ se pueden realizar otras acciones:

- Insertar Marcajes, siempre que no exista ningún marcaje o el marcaje no esté cerrado (ver Cerrar marcajes ), esta función te permite insertar los marcajes en la hora de inicio y fin del turno planificado (o en la que falte en caso de existir algún marcaje). Más información en ‘ Insertar marcajes ‘.
- Insertar Marcajes con arrastre, se utiliza para el caso de que el trabajador haya realizado un marcaje de entrada fuera de la hora de inicio del turno planificado (barra verde). Más información en ‘ Insertar marcajes con arrastre ‘.
- Reducir Jornada, es aplicable a consecuencia de que el trabajador haya realizado un marcaje cerrado (barra naranja) de menos tiempo que el turno planificado (barra verde), provocando una reducción del turno con la misma duración del marcaje cerrado. Esto provoca una modificación de la planificación, convirtiendo el turno en horas.

Los ajustes también se puede realizar a todos los trabajadores filtrados desde el botón ‘Ajustar todos’, haciendo señalado previamente el botón de selección de todos los trabajadores.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
