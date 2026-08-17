---
schemaVersion: "1.0"
contentId: "planificacion-4-cuadro-de-mando-operaciones-planificacion-de-personal"
title: "Cuadro de mando: Operaciones planificación de personal"
description: "Aprende a cuadro de mando: Operaciones planificación de personal, con instrucciones y contexto revisables por el equipo de aTurnos."
contentType: procedure
module: "Planificación"
submodule: "Vacaciones y ausencias"
intent: "Cuadro de mando: Operaciones planificación de personal"
audience:
  - role: "RRHH"
    access: applicable
  - role: "Planificador"
    access: applicable
  - role: "Trabajador"
    access: applicable
entities:
  - id: "cuadro"
    label: "Cuadro"
  - id: "mando"
    label: "Mando"
  - id: "operaciones"
    label: "Operaciones"
  - id: "personal"
    label: "Personal"
  - id: "planificacion"
    label: "Planificacion"
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
    - "https://manual.aturnos.com/knowledgebase/3-cuadro-de-mando-operaciones-planificacion-de-personal/"
  redirectsFrom:
    - "https://manual.aturnos.com/knowledgebase/3-cuadro-de-mando-operaciones-planificacion-de-personal/"
ai:
  answerableQuestions:
    - "¿Cómo puedo cuadro de mando: Operaciones planificación de personal?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  contentHash: "89dca660f53523a3f1db7e0eb1a431093d36c50979135b21d09068e23199f0e4"
  migratedAt: 2026-08-17
---
## Resumen

Aprende a cuadro de mando: Operaciones planificación de personal, con instrucciones y contexto revisables por el equipo de aTurnos.

### Cuadro de mando

Una vez creada la Curva de necesidad o demanda ( Véase como crear curvas de demanda ), podrás visualizarla de forma gráfica en este punto. En color rojo mostrará la cantidad de trabajadores que ya tienen planificación en el cuadrante los días del período seleccionado (aparecerá en rojo solo cuando existan trabajadores con turnos ya planificados en el cuadrante).

Desde esta ventana podrás realizar las funciones enumeradas a continuación.

Período: se debe indicar el periodo durante el cual se va a insertar o visualizar la secuencia de la curva de demanda (desde/hasta).

Casilla Cuadrante: Puedes seleccionar si quieres ver/crear demanda en el cuadrante o en cuadrante borrador.

Filtro: haciendo clic en el icono del filtro se puede filtrar por detalle de trabajadores (nombre, localización, categoría, especialidad) o por turnos (Tipo de turno). Al utilizar el filtro se queda grabada la selección a medida que se navega por las distintas ventanas de aTurnos.

Acciones: Haciendo clic en este botón la aplicación te permite realizar las siguientes acciones:

- Calcular contratos
- Añadir Turno: admite agregar un turno, definiendo el día y trabajadores a los que quieres aplicarles el mismo. Es importante resaltar que dichos turnos se cargan automáticamente en el Cuadrante de los trabajadores.

- Añadir demanda: puedes añadir una demanda ya existente o crearla según tus indicadores de calidad del servicio (QOS). (Ver detalle en Crear Curva de demanda – Curva de demanda desde Cuadro de mando )
- Eliminar demanda: elimina de manera definitiva una demanda creada que ya no sea de utilidad. haciendo clic en la casilla se selecciona la demanda a eliminar.

La ventana mostrará un gráfico de barras en el que se han dispuesto horizontalmente los valores de la cobertura o demanda, y los días según el periodo informado.

Ayuda a visualizar fácilmente el comportamiento de los datos de la(s) demanda(s), contrastándolos con los trabajadores planificados e identificando fácilmente si se cubren las necesidades.

Leyenda: Cada color de las barras representa los valores de las demandas que tengas añadidas en el gráfico, y se visualiza siempre en color rojo los trabajadores planificados. Haciendo clic sobre alguno de los datos de la leyenda (Trabajadores o nombre de la curva de demanda) podrás ocultarla (no la elimina) y/o mostrarla nuevamente. Ejemplo:

De igual forma, posicionando el cursor sobre alguna de las barras se revela el detalle de la demanda y trabajador para ese momento en específico (día y hora) como se presenta:

Resume las horas que genera ese modelo, como lo son horas demandadas, horas por exceso y por defecto. También identifica punto de mayor demanda, Mayor necesidad de trabajadores (día y hora) y Mayor exceso de trabajadores (día y hora).

Adicionalmente, haciendo clic en el icono de “Tabla de cobertura del equipo” se mostrará la cantidad de personas que están cubriendo cada hora por día (según período establecido).
