---
schemaVersion: "1.0"
contentId: wall-app-6-wall-app-no-funciona-borrado-de-token
title: "Por qué Wall App deja de reconocer el dispositivo"
order: 6
description: "Por qué Wall App puede pedir iniciar sesión de administrador en cada fichaje, y cómo comprobar si el token del dispositivo sigue guardado."
contentType: procedure
module: "Wall App"
submodule: "Manual de Wall App"
subtopic: ""
intent: "Por qué Wall App deja de reconocer el dispositivo"
audience:
  - role: Administrador
    access: applicable
entities: []
synonyms: []
relatedTerms: []
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
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  redirectsFrom: []
ai:
  answerableQuestions:
    - "¿Por qué Wall App me pide iniciar sesión de administrador todo el tiempo?"
  excludedQuestions: []
  sensitivity: public
  chunking: by-section
readingTime: 1
featured: false
migration:
  sourceCount: 1
  originUrls:
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  redirectFrom:
    - https://manual.aturnos.com/knowledgebase/5-14-wall-app/
  contentHash: "9fe5216e256037cf9fe6a4deb5c75ac6daab0157702ad4d8c62c234b37dcb549"
  migratedAt: 2026-09-19
labels: []
---

## Resumen

Si al introducir el código o escanear el QR en `https://wall.aturnos.com/checkin` no hay respuesta, o el sistema redirige al inicio de sesión de administrador, es porque el navegador perdió la información que identifica el dispositivo como autorizado para fichar.

## Procedimiento

Esto puede pasar por varias razones:

- Uso del navegador en modo incógnito o privado.
- Políticas corporativas de seguridad que reinician el estado del dispositivo.
- El dispositivo fue eliminado (desde Wall App o desde "Dispositivos").
- Limpieza manual o automática de datos de navegación (cookies, caché).
- Cambio de cuenta de perfil de usuario en el navegador.

Por eso no se recomienda instalar o usar Wall App en dispositivos compartidos para otros usos, o entre varios usuarios con cuentas de sistema distintas.

En el proceso de registro, el navegador guarda en su almacenamiento local (Local Storage) un token que identifica el dispositivo y lo vincula con el equipo configurado en aTurnos. Para comprobar si el dispositivo sigue correctamente registrado, se puede revisar el Local Storage del navegador y buscar la clave `tokens_allowed_checkin`: si existe, el registro es correcto.

![Dispositivo no reconocido como registrado](/media/manual/wall-app-wallapp-dispositivo-no-registrado.jpg)

![Eliminar un dispositivo registrado](/media/manual/wall-app-wallapp-dispositivo-registrado-eliminar-dispositivo.jpeg)

![Datos de navegación que pueden borrar el token](/media/manual/wall-app-wallapp-datos-de-naevegacion.jpeg)

![Cambio de cuenta de perfil de usuario en el navegador](/media/manual/wall-app-wallapp-cuenta-de-perfil-de-usuario.jpeg)
