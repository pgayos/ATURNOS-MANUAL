---
schemaVersion: "1.0"
contentId: "costes-y-nominas-guia-conceptos-de-comparacion-para-administradores"
title: "Conceptos de comparación para administradores"
description: "Información sobre conceptos de comparación para administradores, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: concept
module: "Costes y nóminas"
submodule: "Nóminas"
intent: "Conceptos de comparación"
audience:
  - role: "Administrador"
    access: applicable
entities: []
synonyms: []
prerequisites: []
platforms: [web]
governance:
  status: draft
  owner: "Equipo de Producto de aTurnos"
  reviewer: null
  reviewedAt: 2026-01-27
  reviewDueAt: null
  sourceUrls:
    - "https://guias.aturnos.com/guias/otros-recursos-disponibles/nominas/conceptos-de-comparacion/"
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Qué debo saber sobre conceptos de comparación para administradores?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
---
## Resumen

Estos conceptos sirven para comparar un concepto ya calculado (por ejemplo, horas nocturnas) con otro concepto o con un valor fijo (por ejemplo, 10). En otras palabras: el sistema se hace una pregunta del tipo “¿es mayor que…?” o “¿es igual que…?” y, según la respuesta, devuelve un resultado.

### Introducción

Las comparaciones permitidas son:

- Igual que
- Mayor que
- Mayor o igual que
- Menor que
- Menor o igual que
- Distinto a

El objetivo es crear “activadores inteligentes”: conceptos que devuelven normalmente 1 (sí, se cumple) o 0 (no, no se cumple). Luego, esos activadores se usan para encender o apagar un pago (multiplicando, igual que en la guía anterior).

Dónde se configura: al crear el concepto, en el campo “Tipo de dato” se selecciona “Operadores de comparación”.

### Configuración

Vamos a ver un caso muy típico, siguiendo el ejemplo de nocturnidad:

Regla del convenio (ejemplo):

- Si las horas nocturnas son ≥ 10, se pagan con el concepto 3000
- Si las horas nocturnas son < 10, se pagan con el concepto 3K00

La idea es hacerlo en dos fases:

1. Crear valores/ conceptos base (horas nocturnas + valor fijo 10)
2. Crear dos activadores (uno para “≥10” y otro para “<10”) que devuelven 1 ó 0
3. Usar “Operar entre conceptos” para multiplicar y así pagar el código correcto

Nota importante: cuando crees un campo fijo con decimales, el valor se escribe con punto (.) y no con coma. Por ejemplo: 0.142

- Accede a: Administrar → Nóminas → Plantilla de nómina → Campo fijo.
- Crea un campo fijo con el valor 10.

Crea (o asegúrate de tener creado) el concepto común de nómina que recupera las horas de nocturnidad en el día de inicio:

- Concepto: recomendable indicar algo identificable (ej.: “Horas nocturnidad día inicio”)
- Descripción: opcional, pero aconsejable (para que cualquiera lo entienda)
- Tipo de dato: “Horas nocturnidad en el día de inicio”
- Localización (del turno/horas planificadas): “Todas las localizaciones”
- Localización por defecto del trabajador: “Todas las localizaciones”
- Categoría: “Todas las categorías”

Sugerencia: usa un nombre que luego puedas buscar fácil con filtros (por ejemplo, incluyendo “nocturnidad”).

Este concepto será el “interruptor” para el caso 3000.

- Concepto: por ejemplo:“3000 – Nocturnidad día inicio ≥ 10”
- Descripción: recomendable (explica la condición)
- Tipo de dato: “Operadores de comparación”
- Localización: “Todas las localizaciones”
- Localización por defecto del trabajador: “Todas las localizaciones”
- Tipo (primer comparador): Concepto (porque comparas las horas calculadas)
- Selecciona el concepto de “Horas nocturnidad en el día de inicio”
- Operador: Mayor o igual que
- Tipo (segundo comparador): Campo fijo (porque comparas contra 10)
- Selecciona el campo fijo con valor 10
- Valor Verdadero: 1
- Valor Falso: 0

Comportamiento: Si el trabajador tiene 10 o más horas nocturnas, este concepto devuelve 1. Si no, devuelve 0.

Este activador será el “interruptor” para el caso 3K00.

- Concepto: por ejemplo:“3K00 – Nocturnidad día inicio < 10”
- Tipo de dato: “Operadores de comparación”
- Tipo (primer comparador): Concepto (horas nocturnas)
- Operador: Menor que
- Tipo (segundo comparador): Campo fijo (valor 10)
- Valor Verdadero: 1
- Valor Falso: 0
- Localización / Localización por defecto: “Todas las localizaciones”

Comportamiento: Si tiene menos de 10 horas nocturnas, devuelve 1. Si tiene 10 o más, devuelve 0.

Aquí usamos lo ya visto: Operar entre conceptos para multiplicar:

- Horas nocturnas × Activador (≥10)
- Concepto: 3000 (si coincide con el código de nómina)
- Tipo de dato: “Operar entre conceptos”
- Operador: Multiplicar
- Conceptos seleccionados para operar:
- Concepto base: “Horas nocturnidad en el día de inicio”
- Activador: “3000 – Nocturnidad día inicio ≥ 10”
- Resultado sencillo: Si el activador vale 1 → se paga el valor real Si el activador vale 0 → se queda en 0 (no aplica)

Misma lógica:

- Horas nocturnas × Activador (<10)
- Concepto: 3K00
- Tipo de dato: “Operar entre conceptos”
- Operador: Multiplicar
- Conceptos seleccionados para operar:
- Concepto base: “Horas nocturnidad en el día de inicio”
- Activador: “3K00 – Nocturnidad día inicio < 10”
