---
schemaVersion: "1.0"
contentId: empezar-en-aturnos-4-5-que-ocurre-si-tengo-muchos-usuarios-en-el-equipo
title: "¿Qué ocurre si tengo muchos usuarios en el equipo?"
description: "Proceso por importación para habilitar el fichaje remoto de un número elevado de trabajadores a la vez."
contentType: procedure
module: "Empezar en aTurnos"
submodule: "Control horario"
intent: "¿Qué ocurre si tengo muchos usuarios en el equipo?"
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
  reviewedAt: null
  reviewDueAt: null
  sourceUrls:
    - https://manual.aturnos.com/documentation/4-control-de-presencia/4-5-que-ocurre-si-tengo-muchos-usuarios-en-el-equipo/
  redirectsFrom:
    - https://manual.aturnos.com/documentation/4-control-de-presencia/4-5-que-ocurre-si-tengo-muchos-usuarios-en-el-equipo/
ai:
  answerableQuestions:
    - "¿Qué ocurre si tengo muchos usuarios en el equipo?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 2
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/documentation/4-control-de-presencia/4-5-que-ocurre-si-tengo-muchos-usuarios-en-el-equipo/
  redirectFrom:
    - https://manual.aturnos.com/documentation/4-control-de-presencia/4-5-que-ocurre-si-tengo-muchos-usuarios-en-el-equipo/
  contentHash: "5e8b26d8803d0ffc977ff094b99b402c7147ceaa7b0e4d26f223bc72ecd1459e"
  migratedAt: 2026-09-08
labels:
  - PENDIENTE
order: 6
---

## Resumen

Proceso por importación para habilitar el fichaje remoto de un número elevado de trabajadores a la vez.

## Proceso para habilitar el fichaje remoto desde cualquier ubicación para un número elevado de trabajadores

Puedes habilitar la opción de fichaje remoto para todos los trabajadores siguiendo estos pasos:

### 1. Descargar el listado de usuarios

- Accede a **Trabajadores** > **Listado de trabajadores**.
- Haz clic en el botón de **Acciones** y selecciona la opción **csv**. (Consulta el manual de [Acciones](https://manual.aturnos.com/Manual/e-mostrar-ocultar-y-acciones/#Acciones) si tienes dudas).

### 2. Preparar el archivo

- Abre el archivo descargado y elimina las columnas innecesarias. Mantén únicamente las siguientes:
  - Nombre
  - Email
  - Fecha de alta
  - Fecha de baja
- Añade una columna adicional llamada **“Puede fichar”**.
  - Si el trabajador puede fichar en remoto, escribe uno (1).
  - Si no puede fichar en remoto, escribe cero (0).

![](/media/manual/4-5-que-ocurre-si-tengo-muchos-usuarios-en-el-equipo-e7253fad78.jpg)

### 3. Importar el archivo al sistema

- Accede a **Administrar > Importar/Exportar > Importar**.
- Sube el archivo que preparaste (Consulta el manual de [Importar](https://manual.aturnos.com/importar-datos/) si tienes dudas).
- Haz clic en **Enviar**.

### 4. Asociar los campos

- Aparecerá una pantalla para asociar las columnas del archivo con los campos del sistema. Realiza las asociaciones según las instrucciones del sistema.
- Una vez asociadas las columnas, haz clic en **Asociar**.

![Image 2020-03-18 at 10.24.45 AM.png](/media/manual/4-5-que-ocurre-si-tengo-muchos-usuarios-en-el-equipo-ef8db7f90a.png)

### 5. Verificar la importación

1. Después de asociar los campos, serás redirigido a una pestaña donde podrás comprobar si hubo errores en el proceso. 2. El error más común está relacionado con el **formato de las fechas**.
   - Asegúrate de que el formato de fecha en tu archivo Excel (recomendado: **DD/MM/YYYY**) coincide con el formato configurado en **aTurnos**.
   - Puedes verificar el formato en **Administrar > Importar/Exportar > Configuración**. (Consulta el manual de Importar/Exportar-[Configuración](https://manual.aturnos.com/Manual/a-configuracion/ç)).

### 6. Resultado final

Si todo está correcto, la importación se completará automáticamente y los permisos de fichaje remoto de los usuarios quedarán actualizados.
