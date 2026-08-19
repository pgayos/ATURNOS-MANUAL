---
schemaVersion: "1.0"
contentId: gestion-de-personal-5-limites-superiores-de-horas-de-los-empleados
title: Límites superiores de horas de los empleados
description: Esta restricción impide que las horas planificadas en el cuadrante superen las horas anuales establecidas en el contrato del trabajador, según lo informado en su perfil.
contentType: reference
module: Gestión de personal
submodule: Contratos
intent: Límites superiores de horas de los empleados
audience:
  - role: RRHH
    access: applicable
  - role: Planificador
    access: applicable
  - role: Trabajador
    access: applicable
entities:
  - id: empleados
    label: Empleados
  - id: horas
    label: Horas
  - id: limites
    label: Limites
  - id: superiores
    label: Superiores
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
    - https://manual.aturnos.com/knowledgebase/5-limites-superiores-de-horas-de-los-empleados/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/5-limites-superiores-de-horas-de-los-empleados/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre límites superiores de horas de los empleados?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 9
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-limites-superiores-de-horas-de-los-empleados/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-limites-superiores-de-horas-de-los-empleados/
  contentHash: e68c700305c4cdf2dab448217ab203245f0f1945d0d0526e0a99ea66c255cc09
  migratedAt: 2026-08-17
labels: []
order: 1
---
## Resumen

Esta restricción impide que las horas planificadas en el cuadrante superen las horas anuales establecidas en el contrato del trabajador, según lo informado en su perfil.

## Opciones y datos disponibles
Sirve para garantizar que la planificación no sobrepase el total pactado, asegurando el cumplimiento de las condiciones laborales. Si se supera el número de horas anuales permitido, el sistema mostrará una alerta.

Por ejemplo, si el contrato del trabajador es de 1.756 horas al año, no podrá planificarse por encima de ese valor, salvo que se haya definido un margen de flexibilidad.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Flexibilidad. Permite establecer un porcentaje adicional sobre las horas anuales de contrato, que puede ser excedido antes de que se active la restricción. Por ejemplo, con un 5 % de flexibilidad sobre 1.756 horas, el sistema permitirá hasta 1.843,8 horas antes de alertar.

En caso de que la restricción tuviera configura una “Flexibilidad” fuera del 5%, permitiría un límite de 87,8 más, siendo el total de 1.843,8 horas.

Esta restricción impide que un trabajador tenga planificadas más horas en un día de las que figuran como máximas en su perfil de contrato. Se utiliza para garantizar que, diariamente, la planificación respete los límites establecidos por jornada.

Por ejemplo, si un trabajador tiene un contrato de 10 horas máximas por día, cualquier turno que supere ese valor activará la restricción.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene seis campos adicionales.

- Mínimo. Define un mínimo de horas que deben existir en el día para que la restricción se aplique. Comprobación día al que pertenece el evento. Permite decidir si la validación se realiza en el día de inicio o en el día de fin del evento, útil en turnos que cruzan medianoche. Considerar complementarias y extras. Determina si las horas complementarias o extraordinarias deben incluirse en el cálculo total. Flexibilidad. Define el porcentaje de exceso permitido respecto al máximo diario configurado en el perfil del trabajador. Días de la semana. Permite seleccionar en qué días (por ejemplo, solo festivos o fines de semana) debe aplicarse la restricción.

Esta restricción impide que se planifiquen más horas de las indicadas en el perfil del trabajador como su máximo semanal por contrato. La validación se realiza considerando semanas naturales (de lunes a domingo). Si el total de horas planificadas para una semana supera el límite contractual, se genera una alerta. Por ejemplo, si un trabajador tiene 38,06 horas semanales por contrato, no podrá exceder ese valor sin activar la restricción.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Flexibilidad. Permite establecer un porcentaje de exceso tolerado respecto al límite de horas semanales del contrato. Este margen se suma al total de horas semanales permitido antes de que se active la restricción.

Esta restricción impide que se planifiquen más horas de las establecidas como límite mensual en el perfil del trabajador. Sirve para controlar la carga de trabajo dentro de un mes natural y asegurar el cumplimiento de los valores contractuales o estimados. Si el total de horas mensuales planificadas supera el valor permitido, el sistema alertará sobre el incumplimiento.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Flexibilidad. Define el porcentaje de exceso permitido respecto al total mensual configurado en el perfil del trabajador. Comparar con cálculo estimado de horas. Permite decidir si se utiliza el valor mensual indicado explícitamente en el perfil del trabajador o el resultado del cálculo estimado (por ejemplo, a partir del total anual dividido por meses o según reglas del equipo).

Esta restricción impide que se planifiquen más horas extras que las permitidas anualmente según el perfil del trabajador. Por defecto, se aplica el límite legal de 80 horas extra al año, aunque este valor puede personalizarse. La restricción permite controlar y prevenir el exceso de horas extras planificadas, garantizando el cumplimiento normativo.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene un campo adicional.

- Multiplicar por el coeficiente de horas para calcular las horas planificadas. Permite aplicar un coeficiente a las horas planificadas antes de compararlas con el límite establecido por la restricción. Calcular a proporción del periodo de contrato. Ajusta el límite anual de horas extra en función del número de días que dura el contrato. Por ejemplo, si un trabajador tiene un contrato de 182 días (de enero a junio), se calculará el límite proporcional a ese periodo (ej. 39,78 horas en un año no bisiesto).

Esta restricción limita a los trabajadores con contrato a tiempo parcial (menos del 100 %) para que no superen el porcentaje de horas complementarias permitido sobre sus horas semanales de contrato. Se utiliza para controlar que las horas adicionales respeten los límites definidos en el perfil del trabajador. Por ejemplo, un trabajador con un contrato al 75 % y 37,5 horas semanales solo podrá planificar hasta 11,25 horas complementarias semanales si tiene configurado un 30 % de margen.

⚙️ Configuración: Esta restricción tiene una configuración básica.

Esta restricción impide que los trabajadores con contrato a tiempo parcial (menos del 100 %) superen el porcentaje de horas complementarias permitido sobre sus horas mensuales de contrato. Se utiliza para controlar que las horas complementarias se mantengan dentro del límite establecido en el perfil del trabajador.

Por ejemplo, si un trabajador tiene un contrato al 75 % con 150 horas al mes, y un 30 % de margen para complementarias, solo podrá realizar hasta 45 horas complementarias en ese mes.

⚙️Configuración: Esta restricción tiene una configuración básica.

Esta restricción impide que los trabajadores con contrato a tiempo parcial (por debajo del 100 %) superen el porcentaje de horas complementarias permitido sobre sus horas anuales de contrato. Su objetivo es asegurar que las horas adicionales respeten los límites establecidos por el perfil del trabajador durante todo el año.

Por ejemplo, un trabajador con un contrato al 75 % y 1.756 horas anuales solo podrá planificar hasta 395 horas complementarias si tiene configurado un 30 % como tope.

⚙️Configuración: Esta restricción tiene una configuración básica.

Esta restricción impide planificar cualquier tipo de horas complementarias a trabajadores con contrato a jornada completa (100 %). Se aplica para asegurar el cumplimiento de la normativa laboral, ya que las horas complementarias están destinadas exclusivamente a trabajadores con contrato a tiempo parcial.

⚙️Configuración: Esta restricción tiene una configuración básica.

Esta restricción limita el número máximo de un tipo de hora determinado a la semana.

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Valor de la restricción: Indica el número máximo del tipo de hora determinado que deseas establecer por semana. Tipos de horas personalizadas: Indica los tipos de hora a los que afecta esta restricción.

Esta restricción limita el tiempo máximo que se puede realizar o solicitar de un tipo de hora personalizada al mes.

⚙️ Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Valor de la restricción: Indica el número máximo del tipo de hora determinado que deseas establecer por mes. Tipos de horas personalizadas: Indica los tipos de hora a los que afecta esta restricción.

Esta restricción limita el número de horas (normal, extras, complementarias) que se pueden realizar al año.

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Valor de la restricción: Indica el número máximo del tipo de hora determinado que deseas establecer por año. Multiplicar por el coeficiente de horas para calcular las horas planificadas. Permite aplicar un coeficiente a las horas planificadas antes de compararlas con el límite establecido por la restricción. Días de la semana: Indica los días a los que aplicará la restricción. Tipos de horas personalizadas: Indica que tipos de horas se aplicará la restricción. Total de horas iniciales: Indica cuantas horas se descuentan en esta restricción.

Esta restricción limita el número máximo de horas de tipo normal al día. Cualquier otro tipo de hora no se incluye en esta restricción.

⚙️ Configuración: Además de la configuración básica, tiene un campo adicional.

- Valor de restricción: Indica el número máximo de horas que deseas limitar por día.

Esta restricción limita el número máximo de horas que se pueden planificar y solicitar en un día.

⚙️Configuración: Además de la configuración básica, tiene dos campos adicionales.

- Valor de la restricción: Indica el máximo de horas que se pueden planificar al día. Comprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción.

Por ejemplo, que un trabajador con un turno de 05:00 – 13:00, solo pueda tener 2 horas añadidas al poner un valor de 10 horas como máximo.

Esta restricción limita el número máximo de horas extra que se pueden planificar y solicitar al día.

⚙️ Configuración: Además de la configuración básica, tiene un campo adicional.

- Valor de la restricción: Indica el número máximo de horas extras al día (sin incluir subtipos de horas extras).

Esta restricción limita el número máximo de horas complementarias que se pueden planificar y solicitar al día.

⚙️ Configuración: Además de la configuración básica, tiene un campo adicional.

- Valor de la restricción: Indica el número máximo de horas complementarias al día (sin incluir subtipos de horas complementarias).

Esta restricción impide que se pueda planificar un tipo de hora determinado si se tiene anteriormente planificado un turno.

⚙️ Configuración: Además de la configuración básica, tiene tres campos adicionales.

- Comprobación día al que pertenece el evento: Configura qué momento del día utilizar para la comprobación de la restricción. Comprobación día al que pertenece la hora: Configura qué momento de la hora utilizar para la comprobación de la restricción. Tipo de horas personalizadas: Selecciona a qué tipo de hora se le aplica la restricción.

Esta restricción impide planificar un tipo específico de hora personalizada si no existe ningún turno planificado ese mismo día. Se utiliza para garantizar que ciertos tipos de horas (por ejemplo, horas asociadas a una actividad complementaria o dependiente del turno) solo se puedan registrar cuando hay planificación de turnos en la jornada correspondiente. La restricción compara las horas de los turnos y las horas personalizadas sin tener en cuenta la duración computada ni los coeficientes asignados.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene cuatro campos adicionales.

- Comprobación día al que pertenece el evento. Permite definir si la validación se hace según la fecha de inicio o de fin del turno, útil cuando cruzan medianoche. Comprobación día al que pertenece la hora. Establece si la validación de la hora personalizada debe hacerse según su fecha de inicio o de fin. Tipo de horas personalizadas. Indica qué tipo específico de hora se someterá a esta validación.

Esta restricción impide que se planifiquen más horas de las permitidas en un mismo día para uno o varios tipos de horas personalizadas. Su objetivo es limitar el uso diario de ciertos tipos de horas, independientemente del coeficiente de cómputo que tengan asignado. Se contabilizan todas las horas planificadas de los tipos configurados, sin aplicar coeficientes de ponderación.

⚙️Configuración: Esta restricción, además de la configuración básica, tiene dos campos adicionales.

- Valor de restricción. Indica el número máximo de horas diarias permitido para los tipos de horas seleccionados. Tipo de horas personalizadas. Permite seleccionar uno o varios tipos de horas personalizadas sobre los que se aplicará esta limitación diaria.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![5. Límites superiores de horas de los empleados](/media/manual/5-limites-superiores-de-horas-de-los-empleados-097056c5f6.webp)
