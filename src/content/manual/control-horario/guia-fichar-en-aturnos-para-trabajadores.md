---
schemaVersion: "1.0"
contentId: control-horario-guia-fichar-en-aturnos-para-trabajadores
title: Fichar en aTurnos para trabajadores
description: El sistema de fichaje de aTurnos te permite registrar tus entradas y salidas de manera rápida y segura desde cualquier dispositivo con acceso a internet.
contentType: reference
module: Control horario
submodule: Uso por el trabajador
intent: Fichar en aTurnos
audience:
  - role: Trabajador
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
  reviewedAt: 2025-01-29
  reviewDueAt: null
  sourceUrls:
    - https://guias.aturnos.com/guias/guias-trabajador/control-horario/fichar-en-aturnos/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre fichar en aTurnos para trabajadores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 3
featured: false
labels:
  - PENDIENTE
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-trabajador/control-horario/fichar-en-aturnos/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-trabajador/control-horario/fichar-en-aturnos/
  contentHash: 251767b3c0154b55368165d2a4f2903d952b6b254b38580175e2b52f05cbe799
  migratedAt: 2026-08-18
---
## Resumen

El sistema de fichaje de aTurnos te permite registrar tus entradas y salidas de manera rápida y segura desde cualquier dispositivo con acceso a internet. Dependiendo de la configuración de tu empresa, podrás fichar desde una IP autorizada o desde cualquier ubicación si está permitido.

### Fichar desde la Web de aTurnos

Para garantizar seguridad y control, el sistema de aTurnos puede filtrar fichajes por direcciones IP. Esto significa que solo podrás fichar si estás conectado a una red autorizada por tu empresa.

- IP Privada: Se usa dentro de una red local (por ejemplo, en la oficina).
- IP Pública: Es la IP proporcionada por el proveedor de internet y se usa para identificar conexiones externas.

Si tienes problemas para fichar, es posible que la IP no esté registrada o haya cambiado. Contacta con tu administrador si es necesario.

Registrar un fichaje de entrada:

1. Asegúrate de estar conectado a la red registrada.
2. En la parte superior de la pantalla, busca el icono de ‘Play’.
3. Pulsa el botón para abrir la ventana de registro.
4. Selecciona la localización(si es necesario) y el tipo de fichaje.
5. Haz clic en ‘Guardar’ para registrar tu entrada.

Registrar un fichaje de salida:

1. Sigue los mismos pasos que para la entrada.
2. En lugar de ‘Play’, pulsa el botón de ‘Stop’.
3. Guarda el registro para completar el fichaje de salida.

El botón de fichaje no aparece

Posible causa: La IP no está registrada o el navegador bloquea el sistema.

Solución: Verifica que la IP esté correctamente configurada en aTurnos.

Configura tu navegador:

En Google Chrome, instala la extensión «WebRTC Control».

Realiza la prueba «Test WebRTC Leak».

Intenta nuevamente acceder a aTurnos.

Este ajuste también es compatible con navegadores como Edge, Firefox y Opera.

### Fichar desde la App de aTurnos

Si trabajas en remoto o te desplazas entre diferentes ubicaciones, la app de aTurnos es una opción ideal para registrar tu jornada laboral de forma sencilla y eficiente.

Opción 1: Usando el Widget de Inicio

1. Asegúrate de que el widget “Fichar” está habilitado en la web.
2. Inicia sesión en la app con las mismas credenciales de la web.
3. Busca el widget «Fichar» en la pantalla principal.
4. Pulsa sobre “Entrada” o “Salida” según corresponda.

Opción 2: Desde el Menú de la App

1. Inicia sesión en la App.
2. Ve al Menú principal.
3. Selecciona Control Horario → Fichar.
4. Registra tu entrada o salida según corresponda.

Si tienes problemas para fichar, revisa con tu administrador si tu tipo de fichaje está habilitado en la app.

### Peticiones de Fichajes

Si olvidas fichar o necesitas corregir un registro, puedes enviar una solicitud de fichaje desde la plataforma web.

1. Ve a Control Horario → Peticiones de fichajes.
2. Selecciona la fecha del fichaje a solicitar.
3. Indica si es una entrada o salida y la hora correspondiente.
4. Envía la petición para que sea revisada.

Si se aprueba, tu registro horario se actualizará automáticamente.

Si se rechaza, recibirás una notificación con el motivo y podrás corregir el error.

Consejo: Revisa regularmente el estado de tus fichajes y notifica cualquier incidencia con anticipación para evitar problemas con tu registro horario.

## PENDIENTE de validación

El equipo de Producto debe confirmar que los nombres de las opciones, los permisos necesarios y el resultado descrito siguen coincidiendo con la versión actual de aTurnos. El contenido anterior procede de la documentación pública de origen y sirve como punto de partida para la revisión.
