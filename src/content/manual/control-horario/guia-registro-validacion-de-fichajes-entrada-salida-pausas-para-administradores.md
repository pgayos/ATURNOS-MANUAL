---
schemaVersion: "1.0"
contentId: control-horario-guia-registro-validacion-de-fichajes-entrada-salida-pausas-para-administradores
title: Registro, validación de fichajes (entrada, salida, pausas) para administradores
description: El sistema de fichaje por IP de aTurnos permite a los trabajadores registrar su entrada y salida de manera fácil y segura desde cualquier dispositivo conectado a internet (ordenadores o móvi.
contentType: reference
module: Control horario
submodule: Horas trabajadas
intent: Registro, validación de fichajes (entrada, salida, pausas).
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
    - https://guias.aturnos.com/guias/guias-administrador/control-de-horas-trabajadas-y-extras/registro-validacion-de-fichajes-entrada-salida-pausas/
  redirectsFrom: []
ai:
  answerableQuestions:
    - ¿Qué debo saber sobre registro, validación de fichajes (entrada, salida, pausas) para administradores?
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 5
featured: false
labels: []
migration:
  sourceCount: 1
  originUrls:
    - https://guias.aturnos.com/guias/guias-administrador/control-de-horas-trabajadas-y-extras/registro-validacion-de-fichajes-entrada-salida-pausas/
  redirectFrom:
    - https://guias.aturnos.com/guias/guias-administrador/control-de-horas-trabajadas-y-extras/registro-validacion-de-fichajes-entrada-salida-pausas/
  contentHash: 345186eb9283531da35c6efa66b314932787855030a44b96ad7bef0e0112ee17
  migratedAt: 2026-08-18
---
## Resumen

El sistema de fichaje por IP de aTurnos permite a los trabajadores registrar su entrada y salida de manera fácil y segura desde cualquier dispositivo conectado a internet (ordenadores o móviles). Para garantizar que los fichajes se realicen solo desde ubicaciones autorizadas, el sistema utiliza un filtrado por IP, que valida las conexiones según la configuración que establezcas.

## Registrar los fichajes desde la Web de aTurnos

### Configuración del Sistema de Fichaje por IP

Antes de comenzar:

- IP Privada: Identifica dispositivos dentro de una red local (ej. 192.168.1.x).
- IP Pública: Proporcionada por el proveedor de internet, identifica la red externamente.

Recomendaciones:

- Configura una IP privada personalizada para mayor seguridad (consultar a un técnico si es necesario).
- Si usas una IP pública, procura que sea fija para evitar actualizaciones constantes.

### Pasos para Configurar las IPs en aTurnos:

Accede a la configuración:

- Ve al menú Control horario y selecciona Configuración.
- Haz clic en la pestaña IPs.

Añade una nueva IP:

- Pulsa el botón ‘ + ’.
- Introduce la IP que desees registrar (puede ser privada o pública).
- Asocia la IP a una o varias localizaciones.

Guarda los cambios:

- Verifica que la IP está correctamente añadida.

Configura la localización:

- Cada IP puede vincularse a una ubicación específica para que los fichajes indiquen dónde se realizó.

### Fichar Usando el Filtrado por IP (web)

Registrar un fichaje de entrada:

1. Verifica que tu dispositivo esté conectado a la red registrada.
2. Localiza el botón con el icono de ‘Play’ en la parte superior de la pantalla.
3. Pulsa el botón para abrir el modal de registro.
4. Indica la localización (si corresponde) y el tipo de marcaje.
5. Haz clic en ‘Guardar’ para registrar la entrada.

Registrar un fichaje de salida:

1. Sigue los mismos pasos que para fichar la entrada, pero pulsa el botón de ‘Stop’.
2. Guarda el registro para completar el proceso.

Problemas Comunes

El botón de fichaje no aparece.

Causa:

- La IP no está registrada en el sistema.

El navegador está bloqueando el filtrado por IP.

Solución:

1. Revisar la configuración de IPs en aTurnos:

Asegúrate de que la IP privada o pública esté correctamente añadida.

2. Configurar el navegador:

En Google Chrome, instala la extensión WebRTC Control.

3. Configura la extensión como sigue:

Fija la extensión al navegador.

- Abre las opciones de la extensión.
- Realiza la prueba Test WebRTC Leak.
- Accede nuevamente al sistema.

Compatibilidad con otros navegadores:

- La extensión también está disponible para Edge, Firefox, y Opera.
- Si utilizas varios perfiles en el navegador, instala la extensión en cada uno.

### Fichar desde la App en aTurnos

La aplicación móvil de aTurnos permite a los trabajadores realizar fichajes de entrada y salida directamente desde sus dispositivos móviles. Esto es especialmente útil para empleados que trabajan en remoto, se trasladan entre ubicaciones o no tienen acceso constante a un ordenador.

Con una configuración sencilla, podrás habilitar esta funcionalidad y disfrutar de un control horario eficiente desde la palma de tu mano.

Pasos para Configurar el Tipo de Fichaje:

- Accede a la plataforma web de aTurnos.
- Ve a Control Horario → Configuración → Tipos de fichaje.
- Verifica la columna «Disponible para «: Debe indicar «Web y App» o «Solo App».
- Si no hay un tipo de fichaje habilitado para la App: Modifica uno existente: Haz clic en el tipo de fichaje y actualiza la disponibilidad a «Web y App» o «Solo App». Crea uno nuevo: Define un tipo de fichaje exclusivo para la App.

Acceso al Fichaje desde la App

Opción 1: Widget de Inicio

- Configura el widget desde la web: Ve a Administrar → Configuración → Pantalla de inicio. Añade el widget «Fichar».
- Abre la App e inicia sesión con las mismas credenciales que usas en la web.
- Localiza el widget «Fichar» en la pantalla de inicio de la App.
- Realiza el fichaje según el tipo configurado.

Opción 2: Menú de la App

- Inicia sesión en la App.
- Accede al menú principal.
- Selecciona Control Horario → Fichar.
- Completa el registro según corresponda (entrada o salida).

En aTurnos, los fichajes se pueden configurar para garantizar control y seguridad según las necesidades de cada empresa. Sin embargo, hay ocasiones en las que un trabajador necesita fichar desde cualquier lugar, como en casos de teletrabajo, tareas con ubicaciones variables o viajes de negocio.

Con un ajuste rápido, puedes deshabilitar el control Web/IP para permitir que estos empleados registren sus fichajes sin restricciones de red o ubicación.

Configuración para fichar en Remoto

Accede al perfil del trabajador:

- Desde la web, ve a Trabajadores → Listado
- Busca la configuración «Sin control web/IP» dentro del perfil del trabajador.
- Marca la opción «Sí» para deshabilitar el control por red IP para ese trabajador.
- Guarda los cambios:
- Asegúrate de que la opción está activada antes de cerrar la configuración.

Acceder a las Peticiones de Fichajes:

- Navega a la sección de Peticiones de Fichajes: En la plataforma web, ve a Control Horario → Peticiones de fichajes. Selecciona la pestaña Peticiones pendientes.
- Revisa las solicitudes: Asegúrate de que la fecha seleccionada cubra el periodo en el que los trabajadores realizaron las solicitudes. Verifica cada solicitud para confirmar su validez.

Gestionar las Solicitudes

- Aceptar una Solicitud Identifica la solicitud en la lista. Haz clic en el botón Aceptar. El sistema actualizará automáticamente el registro de fichajes del trabajador.
- Denegar una Solicitud Localiza la solicitud en cuestión. Haz clic en Denegar. Informa al trabajador si es necesario, explicando el motivo del rechazo.

- Revisa regularmente las solicitudes: Esto garantiza que los registros horarios estén siempre actualizados.
- Comprueba las fechas: Asegúrate de revisar todas las solicitudes de los periodos correspondientes para no dejar ninguna sin gestionar.
- Comunicación clara: Si deniegas una solicitud, explica al trabajador los pasos necesarios para resolver cualquier inconveniente.
