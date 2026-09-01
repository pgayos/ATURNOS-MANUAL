---
schemaVersion: "1.0"
contentId: planificacion-6-tabla-de-cobertura
title: Tabla de cobertura
description: Las tablas de cobertura en los equipos que tienen activado el módulo de planificación automática permiten controlar de forma ágil cuando estás cubriendo la demanda previamente cargada, ident.
contentType: concept
module: Planificación
submodule: Vacaciones y ausencias
subtopic: ""
intent: Tabla de cobertura
audience:
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: cobertura
    label: Cobertura
  - id: tabla
    label: Tabla
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
    - https://manual.aturnos.com/knowledgebase/5-tabla-de-cobertura/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-tabla-de-cobertura/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre tabla de cobertura?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 9
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-tabla-de-cobertura/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-tabla-de-cobertura/
  contentHash: 4214ed1f7766d7a2fa27fe7cf76e9aeb441865b9d905d522442eac0db30840b1
  migratedAt: 2026-08-17
labels:
  - PENDIENTE
order: 1
---
## Resumen

Información sobre tabla de cobertura, con instrucciones y contexto revisables por el equipo de aTurnos.

Las tablas de cobertura en los equipos que tienen activado el módulo de planificación automática permiten controlar de forma ágil cuando estás cubriendo la demanda previamente cargada, identificando los mínimos y máximos según los siguientes colores:

- Color rojo: indica que estás por debajo de la demanda de turnos que has definido y, por lo tanto, necesitas planificar más personal para cubrirla.
- Color verde: indica que estás cubriendo al 100% los trabajadores y/o turnos que requieres según la demanda.
- Color naranja: indica que existen exceso de trabajadores en ese turno y podemos librar o replanificar estos trabajadores, es decir, superas la demanda establecida.

Estas tablas de cobertura de turnos no son solo a nivel visual, sino que permiten hacer funciones que ayudan a los mandos intermedios en el mantenimiento del día a día. Haciendo clic en el turno y en el día puedes realizar las funciones que detallamos a continuación:

- Buscar trabajador para turno: permite buscar un trabajador para que puedas cumplir con la demanda y automáticamente buscará los trabajadores que pueden realizar los turnos tomando en cuenta las restricciones tanto generales como individuales, es decir, ofrecerá solamente a trabajadores que no incumplen ninguna de las restricciones.
- Añadir demanda de turno: Incrementar la demanda de ese turno para ese día.
- Quitar demanda del turno: Decrementar la demanda en ese turno para ese día.

La información que ofrecen estas tablas se adapta a la selección del modo de ver el cuadrante, como puede ser con el uso filtros aplicados en el cuadrante, por el periodo de tiempo en la que se ve el cuadrante (un solo día, semanas o mes). Más detalle en: modo de ver cuadrantes.

En el desplegable de la tabla de cobertura se muestran varios tipos, destacando principalmente:

### Total por turnos

El comportamiento del sistema en la tabla Total por turno con demanda varía significativamente según se tenga activada o no la opción de cálculo directo. Esta configuración afecta a cómo se interpreta la cobertura de los turnos frente a la demanda y cómo se detectan los excesos o carencias.

Cálculo directo activado

Cuando el cálculo directo está activado, el sistema adopta una lógica estricta en el computo de los tipos de turnos:

- Solo contabiliza los turnos exactamente iguales al que está definido en la demanda. Si la demanda es para el turno “M”, únicamente se tendrán en cuenta los trabajadores con turno “M”.

- No se buscan ni se aceptan turnos alternativos que coincidan en horario, como H o J, aunque puedan cubrir parcialmente o totalmente la franja horaria de la demanda.

- Como consecuencia, si hay menos personas con turno M de las necesarias, se mostrará un déficit; y si hay más, se mostrará un exceso (en naranja). Todo esto ocurre sin considerar si otros turnos podrían cubrir ese horario.

Este modo es útil cuando se quiere una planificación estricta y controlada, donde solo se aceptan turnos específicos como válidos para cada tipo de demanda.

Contabiliza solo el tipo de turno con el cual se ha generado de la demanda.

Por ejemplo, si la demanda está creada con el valor de 5 turnos de mañana de 7 horas ( M- 8:00/15:00), y solo hay planificado un turno de tipo ( M- 8:00/15:00), a pesar de que haya planificado turnos con el mismo horario ( M7- 8:00/15:00), el resultado será 1/5.

Cálculo directo desactivado

Cuando el cálculo directo está desactivado, el sistema aplica una lógica más flexible y secuencial en el computo de los tipos de turnos para cubrir una demanda de un tipo de turno:

- En primer lugar, busca si hay trabajadores asignados exactamente al mismo turno que el definido en la demanda. Por ejemplo, si se necesita cubrir el turno “Mañana”, el sistema buscará turnos “M”.

- Si no hay suficientes turnos “M” para cubrir la demanda, comienza a buscar otros turnos o bloques de horas que coincidan con la franja horaria de ese turno, aunque tengan nombres distintos (como “H” y “J”).

- Esta búsqueda no penaliza el exceso de personal en esos turnos alternativos. Es decir, aunque haya más personas de las necesarias cubriendo la franja con H y J, no se mostrará exceso en naranja.

- En el caso de que haya una mezcla de turnos (por ejemplo, 3 trabajadores con turno “M” y otros 4 con H y J que también cubren ese horario), el sistema prioriza contar primero los turnos M, y luego completa con H y J solo hasta cubrir la necesidad. Una vez alcanzado el número requerido, el resto de personas no se contabiliza como exceso.

Este enfoque busca adaptarse mejor a escenarios reales, donde los nombres de los turnos no siempre reflejan su utilidad para cubrir una necesidad específica.

Resumen comparativo

-  | Cálculo directo desactivado | Cálculo directo activado
- ¿Acepta turnos alternativos? | Sí, si coinciden en horario | No, solo turnos idénticos al de la demanda
- ¿Detecta exceso en turnos alternativos? | No | No los tiene en cuenta
- ¿Orden de cómputo? | Primero turnos idénticos, luego alternativos hasta cubrir | Solo turnos idénticos
- ¿Marca exceso? | Solo si sobran turnos idénticos | Sí, cuando hay más turnos idénticos que los requeridos
- ¿Flexible con la cobertura? | Sí | No, cobertura estricta

### Total por localización

La tabla de cobertura se subdivide por las localizaciones. Se visualiza las diferentes demandas de cada tipo de turnos, que se han creado dependiendo de la localización. Contabiliza cuantos trabajadores se encuentran planificados por cada tipo de turno que tiene localización, actualizándose el balance de la demanda por localización entre el valor de la demanda y el número turnos con localización.

### Presencia en turno

Contabiliza y agrupa todos los turnos y horas que coincidan con el horario del turno de la demanda. Sin tener en cuenta la localización del turno (en el caso de que la tenga asociada). No contabiliza los horarios de las horas y/o turnos completos, que tengan informados cualquier tipo de absentismos (justificado o injustificado).

En este ejemplo se puede ver que se necesitan dos trabajadores planificados para cubrir la demanda de esos turnos, en caso del miércoles 2 al existir un absentismo temporal, aparece que se está cubriendo un 1.33 y por tanto habría que planificar esas horas para cubrir la demanda.

### Presencia en turno por localización

Muestra el total de trabajadores con turnos de la demanda asignado de una localización en específico (previamente para ello se debió crear la curva de demanda indicando dicha localización, ver mas en Crear curva de demanda ), descontando la horas/jornadas de absentismo tanto justificado como injustificado y contando solo la proporción del turno realmente presencial o trabajado.

### Presencia en turno por Demanda

Muestra el total de trabajadores con turnos por cada una de las demandas que se tengan creadas en el equipo (ver mas en Crear curva de demanda ), descontando la horas/jornadas de absentismo tanto justificado como injustificado y contando solo la proporción del turno realmente presencial o trabajado.

Es recomendable esta tabla cuando se necesita crear dos o mas demandas en una misma localización.

Ejemplo, en la localización hay una necesidad de turnos que se deben cubrir para mantener la calidad del servicio prestado, pero adicionalmente también necesitan controlar que al menos uno de los trabajadores que cubren esos turnos en la misma localización tenga una especialidad (habilidad, conocimiento o destreza) determinada.

### Gráfico de demandas

En este caso en un gráfico cada 15 minutos se compara la demanda como la línea de color verde y la cantidad de trabajadores para esa demanda que se corresponde con la barra roja. Al ponerse encima del gráfico se muestra el detalle de cada una de las variables. Es una tabla de cobertura muy visual que es útil en empresas donde existe mucha cantidad de turnos y es necesario ver de forma ágil si se cubren toda la demanda sin estar encorsetado en turnos.

### Ver cuadrante de otro equipo

Para conocer acerca de esta opción debes entrar al siguiente enlace: Ver cuadrante de otro equipo

### Comparación entre cálculo directo activado y desactivado

El comportamiento del sistema en la tabla Total por turno con demanda varía significativamente según se tenga activada o no la opción de cálculo directo. Esta configuración afecta a cómo se interpreta la cobertura de los turnos frente a la demanda y cómo se detectan los excesos o carencias.

Cálculo directo desactivado

Cuando el cálculo directo está desactivado, el sistema aplica una lógica más flexible y secuencial:

En primer lugar, busca si hay trabajadores asignados exactamente al mismo turno que el definido en la demanda. Por ejemplo, si se necesita cubrir el turno “Mañana”, el sistema buscará turnos “M”.

Si no hay suficientes turnos “M” para cubrir la demanda, comienza a buscar otros turnos o bloques de horas que coincidan con la franja horaria de ese turno, aunque tengan nombres distintos (como “H” y “J”).

Esta búsqueda no penaliza el exceso de personal en esos turnos alternativos. Es decir, aunque haya más personas de las necesarias cubriendo la franja con H y J, no se mostrará exceso en naranja.

En el caso de que haya una mezcla de turnos (por ejemplo, 3 trabajadores con turno “M” y otros 4 con H y J que también cubren ese horario), el sistema prioriza contar primero los turnos M, y luego completa con H y J solo hasta cubrir la necesidad. Una vez alcanzado el número requerido, el resto de personas no se contabiliza como exceso.

Este enfoque busca adaptarse mejor a escenarios reales, donde los nombres de los turnos no siempre reflejan su utilidad para cubrir una necesidad específica.

Cálculo directo activado

Por el contrario, cuando el cálculo directo está activado, el sistema adopta una lógica más estricta:

Solo contabiliza los turnos exactamente iguales al que está definido en la demanda. Si la demanda es para el turno “M”, únicamente se tendrán en cuenta los trabajadores con turno “M”.

No se buscan ni se aceptan turnos alternativos que coincidan en horario, como H o J, aunque puedan cubrir parcialmente o totalmente la franja horaria de la demanda.

Como consecuencia, si hay menos personas con turno M de las necesarias, se mostrará un déficit; y si hay más, se mostrará un exceso (en naranja). Todo esto ocurre sin considerar si otros turnos podrían cubrir ese horario.

Este modo es útil cuando se quiere una planificación estricta y controlada, donde solo se aceptan turnos específicos como válidos para cada tipo de demanda.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![6. Tabla de cobertura](/media/manual/6-tabla-de-cobertura-2ced159f31.png)

![Total por turnos](/media/manual/total-por-turnos-574cce910c.png)

![Total por turnos](/media/manual/total-por-turnos-ee15b17d33.png)

![Presencia en turno](/media/manual/presencia-en-turno-c3fc6e3a5f.webp)

![Presencia en turno por Demanda](/media/manual/presencia-en-turno-por-demanda-0382d787bd.webp)

![Presencia en turno por localización](/media/manual/presencia-en-turno-por-localizacion-3d35f8d056.webp)

![Total por turnos](/media/manual/total-por-turnos-026799df4a.png)

![Gráfico de demandas](/media/manual/grafico-de-demandas-00f074c648.png)

![Total por localización](/media/manual/total-por-localizacion-4bef1c2a81.png)
