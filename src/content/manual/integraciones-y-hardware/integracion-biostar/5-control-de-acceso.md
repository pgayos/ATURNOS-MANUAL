---
schemaVersion: "1.0"
contentId: integracion-biostar-5-control-de-acceso
title: Control de Acceso
description: Los mismos sistemas que utilizamos para el control de presencia, podemos administrarlos mediante grupos de usuarios de acceso o niveles, vinculados a las puertas de cada centro de trabajo.
contentType: reference
module: Integración con Biostar
submodule: Manual de dispositivos Biostar
subtopic: ""
intent: Control de Acceso
audience:
  - role: Administrador
    access: applicable
entities:
  - id: acceso
    label: Acceso
  - id: control
    label: Control
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
    - https://manual.aturnos.com/knowledgebase/7-control-de-acceso/
  redirectsFrom:
    - https://manual.aturnos.com/knowledgebase/7-control-de-acceso/
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre control de acceso?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/7-control-de-acceso/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/7-control-de-acceso/
  contentHash: bcb9d181ec79a3b79ab5a6b06f43149f928e176b7ae21076f4c31658f2ebf574
  migratedAt: 2026-08-17
labels: []
order: 5
---
## Resumen

Los mismos dispositivos que usamos para el control de presencia pueden administrarse mediante grupos de usuarios de acceso o niveles, vinculados a las puertas para controlar el acceso a los centros de trabajo o a una zona concreta.

## Procedimiento

La configuración del control de acceso pasa por informar a Biostar2 sobre qué grupos de personas necesitan control de acceso a un centro de trabajo, o incluso a una zona determinada del mismo, mediante grupos de usuarios de acceso o niveles de acceso.

**Crear un grupo de acceso:**

1. Entra al menú **Control Acceso**, en la barra de iconos de la parte izquierda. Verás el listado de grupos existentes y la opción de añadir uno nuevo.
2. Haz clic en **Añadir Grupo Acceso**.
3. Indica los siguientes parámetros:
   - **Nombre**: para identificar el nuevo grupo de acceso.
   - **Descripción**: algún aspecto concreto que ayude a identificarlo.
   - **Regla de acceso**: bajo qué premisa funciona el grupo — un Nivel de acceso creado previamente, un Grupo de usuarios (listado de usuarios agrupados), o Usuarios concretos que se añaden al grupo de acceso.
   - Para añadir una nueva regla de acceso, pulsa **Añadir** e indica la que quieras asignar.

Los grupos de acceso pueden estar compuestos por Nivel de Acceso, Grupos de Usuarios o Usuarios concretos, y se pueden editar o eliminar desde el mismo listado.

**Crear un nivel de acceso:**

Un nivel de acceso se refiere a una zona restringida por alguna puerta y vinculada a un grupo de acceso. Los niveles creados aparecen en un listado, donde se pueden editar o eliminar.

1. Haz clic en **Añadir Nivel Acceso**.
2. Indica:
   - **Nombre**: para identificar el nivel.
   - **Descripción**: información sobre aspectos importantes del nivel.
   - **Añadir Puerta o Turno**: para asociar una puerta de acceso al nivel.
3. Pulsa **Aplicar** para que quede registrado.

Para configurar el control de acceso es necesario tener definidas previamente las puertas de acceso.

## Imágenes de referencia

Estas imágenes proceden de la documentación pública utilizada para migrar este artículo.

![Control de Acceso](/media/manual/7-control-de-acceso-784da22d5b.png)

![Control de Acceso](/media/manual/7-control-de-acceso-746e6c5a6d.webp)

![Control de Acceso](/media/manual/7-control-de-acceso-b5e834c605.png)

![Control de acceso](/media/manual/control-de-acceso-7002af305d.webp)

![Control de Acceso](/media/manual/7-control-de-acceso-26f45b0fab.png)

![Control de Acceso](/media/manual/7-control-de-acceso-9dfe484b0b.webp)
