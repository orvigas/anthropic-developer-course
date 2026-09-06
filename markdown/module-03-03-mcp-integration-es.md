# Claude Code, MCP e Integración: Módulo de Desarrollador 3

**Módulo 3 de 5**

---

Certificación de Desarrollador · Módulo 3
# Claude Code, MCP e Integración

En módulos anteriores, configuraste componentes esenciales de la API: prompts, esquemas de herramientas, ingeniería de contexto, bucles de agentes e ingesta multimodal; este módulo se construye directamente sobre esa base. Claude Code te permite operar el mismo modelo dentro de tu entorno de terminal, introduciendo una capa de permisos, un sistema de configuración y características de intercambio orientadas al equipo. El protocolo MCP permite la integración segura con servicios externos. En este módulo, aprenderás a configurar Claude Code y MCP para una seguridad robusta y un despliegue efectivo.

**Tabla de contenidos**
- Introducción del Módulo: 1 pantalla
- Orientación

- Modos de Permiso y Puertas Humanas: 3 pantallas
- Enseñanza
- Ten cuidado
- Punto de control

- Contexto de Proyecto Duradero: 3 pantallas
- Enseñanza
- Ten cuidado
- Punto de control

- Empaquetamiento de Flujos de Trabajo: 4 pantallas
- Enseñanza
- Punto de control
- Ten cuidado
- Punto de control

- Servidores MCP: 3 pantallas
- Enseñanza
- Ten cuidado
- Punto de control

- Integración Empresarial: 3 pantallas
- Enseñanza
- Ten cuidado
- Punto de control

- Tarea de Integración Acumulada: 2 pantallas
- Identificar Bug
- Ensamblaje

- Conclusiones Clave: 2 pantallas
- Recapitulación
- Glosario

- Módulo Completado: 1 pantalla
- Módulo Completado

21 pantallas · 8 secciones · 142 minutos · 8 puntos de control

---

`[TAG MODULE]` Orientación · 2 min
# Qué podrás hacer al final

Claude Code es tu socio de desarrollo nativo de terminal.

En módulos anteriores, configuraste componentes esenciales de la API: prompts, esquemas de herramientas, ingeniería de contexto, bucles de agentes e ingesta multimodal; este módulo se construye directamente sobre esa base. Claude Code te permite operar el mismo modelo dentro de tu entorno de terminal, introduciendo una capa de permisos, un sistema de configuración y características de intercambio orientadas al equipo. El protocolo MCP permite la integración segura con servicios externos. En este módulo, aprenderás a configurar Claude Code y MCP para una seguridad robusta y un despliegue efectivo.

## Al final de este módulo, podrás:

- 1 Ejecutar Claude Code a través del bucle explorar, planificar y programar, y seleccionar un modo de permiso que coincida con el nivel de riesgo del trabajo, para que el agente permanezca productivo sin recibir más autoridad de la que la tarea requiere.
- 2 Leer código generado por IA, revisar la salida con confianza calibrada, y actuar sobre los hallazgos que son confiables, verificar los que no son, y colocar una puerta de revisión humana donde el costo de una llamada equivocada es alto.
- 3 Dar a Claude Code contexto de proyecto duradero usando CLAUDE.md, archivos de instrucciones de reglas, ganchos y subagentes.
- 4 Empaquetar un flujo de trabajo como skills, comandos personalizados y un plugin. Escribir una skill una sola vez que se ejecute de la misma manera en Claude Code, la API de Mensajes y el Agent SDK.
- 5 Construir un servidor MCP que ponga a disposición de Claude las herramientas, recursos y prompts, seleccionar el transporte que coincida con cómo se comunican el cliente y servidor, y establecer el alcance de configuración que controla quién lo carga.
- 6 Conectar Claude a sistemas empresariales, autenticar esas conexiones usando patrones que un cliente regulado aceptará, y delimitar el alcance de un proyecto de modernización de código para que el trabajo resista una revisión de seguridad.

*Este módulo es para el Desarrollador que ya tiene Claude funcionando en código y ahora tiene que hacer que ese trabajo sea configurable, compartible y seguro para conectarse a sistemas reales. Eres práctico, orientado al código y enfocado en patrones. Este módulo asume que estás cómodo con los patrones de API del Módulo 2. No re-enseña el bucle de agentes, esquemas de herramientas o ingeniería de contexto. Enseña las decisiones de ingeniería que rodean una integración funcional: cómo ejecutar Claude Code en tu terminal bajo un modelo de permisos, cómo darle contexto de proyecto duradero, cómo empaquetar un flujo de trabajo para que un compañero de equipo pueda instalarlo, y cómo conectar Claude a sistemas externos y empresariales a través de MCP sin filtrar credenciales o fallar una revisión de seguridad.*

**Nota:**
"La construcción" en este módulo

Todo en este módulo se construye alrededor de un problema recurrente: código que funciona en tu máquina, en tu sesión, o en staging ahora debe resistir cuando alguien más lo ejecuta, en producción, contra sistemas reales de la empresa. En tu máquina el modo de permiso se sentía seguro, las reglas del proyecto eran lo suficientemente pequeñas para seguir, la skill encontró su script, la credencial estaba ahí en el archivo de configuración, y la conexión funcionó en la prueba de staging. El momento en que el trabajo abandona tu máquina, cada una de esas comodidades podría convertirse en un fallo: un modo de permiso elimina un archivo que nunca estuvo en el alcance, una regla se entierra bajo cientos de líneas, una skill apunta a una ruta que no existe en ninguna otra máquina, una clave subida al repositorio se filtra dentro de horas, y un paso de configuración solo de staging derriba la conexión de producción. El trabajo en este módulo es aprender qué decisión de configuración previene cuál de esos fallos, antes de que aparezcan frente a un compañero de equipo o un auditor.

**Descargo de Responsabilidad / Aviso para Contenido Educativo**

Construimos este Módulo 3 del Curso de Desarrolladores: Claude Code, MCP e Integración para ayudarte a hacer trabajo real con Claude. Trátalo como contenido educativo. No constituye asesoramiento legal, financiero u otro tipo de asesoramiento profesional, así que adapta lo que aprendas a tu propia situación. Nuestros productos y servicios evolucionan rápidamente, así que cierto contenido puede contener errores o estar desactualizado; recuerda verificar en el sitio web o documentación de Anthropic. Los ejemplos y escenarios utilizados en el curso son ilustrativos y a menudo ficticios. Si el material del curso menciona una empresa o producto, no significa que Anthropic los respalde, que ellos respalden a Anthropic, o que seamos afiliados. También ten en cuenta que tu uso de los productos y servicios de Anthropic está cubierto por nuestros términos, políticas y documentación; si algo en este curso entra en conflicto con ellos, esos términos prevalecen.

---

`[TAG TEACHING]` Enseñanza - Modos de Permiso y Puertas Humanas · 17 min

# Bucle de agentes de Claude Code, modos de permiso, configuraciones y dónde va la puerta humana

El Módulo 2 estableció cómo funciona el bucle de agentes en el nivel de la API: el modelo llama herramientas, obtiene resultados y continúa hasta que se completa la tarea.

Claude Code ejecuta ese mismo bucle en tu terminal pero agrega una capa adicional: un sistema de permisos que cierra el paso a cada acción que el agente quiere tomar. Antes de que puedas configurar cualquier cosa, necesitas entender cómo se ejecuta el bucle y qué controlan los modos de permisos.

## Cómo Claude Code funciona a través de una tarea: explorar, planificar y programar

Cuando le das a Claude Code una tarea, no comienza a escribir inmediatamente. Lee archivos, rastrea la lógica relevante y construye una imagen del código base primero; esta es la fase de exploración. Luego, una vez que entiende lo suficiente para proponer un cambio, crea un plan. Un plan es una descripción estructurada de las ediciones que pretende hacer. Solo después de que revises y apruebes el plan se mueve a la fase de programación, donde escribe y ejecuta los cambios.

Esta secuencia es importante por dos razones. Primero, produce mejor salida: Claude Code entiende el código base antes de tocar nada, por lo que hace menos suposiciones y detecta más efectos descendentes. Segundo, es donde se conectan los modos de permisos: el **modo de plan** mantiene a Claude Code en la fase de exploración, bloqueando todas las ediciones de archivos y comandos de shell hasta que lo liberes, lo que lo hace útil por defecto para código base desconocido o trabajo de alto riesgo.

## Modos de permiso: aprobaciones, puertas y restricciones

Los modos de permiso controlan con qué frecuencia Claude Code se detiene para solicitar confirmación. Cada modo establece un equilibrio distinto entre velocidad y supervisión. La elección correcta depende de qué tan bien conoces el código base y qué tan reversibles son los cambios.

Selecciona cada pestaña para ver qué auto-aprueba ese modo, qué sigue cerrando con puerta y sus limitaciones.

**Modo Predeterminado**
- **Qué auto-aprueba:** Solo lecturas. Solicita antes de casi cada edición o comando.
- **Qué aún cierra con puerta:** Todas las ediciones de archivos y comandos de shell requieren confirmación.
- **Limitaciones:** Seguro pero lento en trabajo de confianza. La línea base para cualquier proyecto nuevo o código base desconocido.

**Modo Aceptar Ediciones**
- **Qué auto-aprueba:** Lecturas, ediciones de archivos y comandos comunes del sistema de archivos (`mkdir`, `touch`, `rm`, `rmdir`, `mv`, `cp`, y `sed`) dentro del directorio de trabajo. La auto-aprobación se limita a rutas dentro del directorio de trabajo, y las rutas protegidas aún solicitan.
- **Qué aún cierra con puerta:** Todos los otros comandos de shell; escrituras fuera del directorio de trabajo; escrituras a rutas protegidas.
- **Limitaciones:** Trabajo local de confianza donde la ejecución de shell aún necesita un ojo humano. No es apropiado si el agente debe ejecutar scripts.

**Modo de Plan**
- **Qué auto-aprueba:** Solo lecturas. Investiga y propone; no hace ediciones.
- **Qué aún cierra con puerta:** Todas las ediciones de archivos y comandos de shell hasta que apruebes un plan.
- **Limitaciones:** Exploración y planificación en código base sensible o desconocido. No es apropiado para tareas que deben escribir salida.

**Modo Auto (Vista Previa de Investigación)**
- **Qué auto-aprueba:** Todo, pero un clasificador separado revisa cada acción primero y bloquea cualquier cosa que escale más allá de tu solicitud, apunte a infraestructura no reconocida, o parezca impulsada por contenido hostil o inapropiado.
- **Qué aún cierra con puerta:** Despliegues de producción y migraciones, eliminaciones masivas, exfiltración de credenciales, y force-push a main se bloquean por defecto.
- **Limitaciones:** Reduce solicitudes pero no garantiza seguridad; esto es una vista previa de investigación, no un sustituto de la revisión de operaciones sensibles. La disponibilidad depende de plan, versión de modelo y configuración de admin. Siempre verifica los requisitos actuales antes de construir.

**Modo de Lista de Permitidos**
- **Qué auto-aprueba:** Solo herramientas que pre-aprobaste en una regla de permiso, más comandos de solo lectura. Auto-NIEGA todo lo demás.
- **Qué aún cierra con puerta:** Cada llamada de herramienta que no esté en la lista de permitidos se niega. No hay cola para confirmación.
- **Limitaciones:** Construido para CI y scripts bloqueados. Restringe bien, pero no es una forma de reducir fricción en trabajo interactivo local.

**Modo de Bypass de Permisos**
- **Qué auto-aprueba:** Todas las llamadas de herramienta. Sin solicitudes de confirmación y sin verificaciones de seguridad.
- **Qué aún cierra con puerta:** Nada en operación normal. Las verificaciones de permiso estándar se omiten; solo comandos de eliminación catastrófica como `rm -rf /` y `rm -rf ~` aún disparan una solicitud de último recurso.
- **Limitaciones:** Solo dentro de un contenedor aislado o VM donde el entorno es desechable. Nunca en una estación de trabajo de desarrollador contra un código base activo.

## Dónde vive la configuración y a quién se aplica

La configuración se puede colocar en varios niveles, y cada nivel determina el alcance de las reglas que contiene.

- **Nivel de usuario (`~/.claude/settings.json`):** Se aplica a cada proyecto en la máquina. Este es el lugar correcto para preferencias que deberían seguirte a todas partes, como un modo predeterminado preferido para trabajo de exploración.
- **Nivel de proyecto (`.claude/settings.json`, confirmado al repositorio):** Se aplica a todos que clonen el repositorio. Este es el lugar correcto para convenciones de equipo, reglas de permiso para las herramientas que tu proyecto usa, y reglas de negación para rutas que no deberían tocarse.
- **Nivel de proyecto local (`.claude/settings.local.json`):** Anulaciones personales para un proyecto, automáticamente ignoradas por git. Este es el lugar correcto para tus propias preferencias que no deberían subirse al repositorio de todo el equipo.
- **Nivel empresarial (`managed-settings.json`, establecido por administradores):** No puede ser anulado por usuarios o archivos de proyecto. El lugar correcto para controles de seguridad de toda la organización como negar ediciones a archivos de entorno o bloquear comandos de shell específicos en todos los proyectos.

Las reglas de permiso y de negación se apilan sobre el modo seleccionado. Una regla de negación siempre gana sobre una regla de permiso, independientemente del modo en efecto. El control de gobernanza más duradero es una regla de negación a nivel empresarial: no puede ser removido por ningún desarrollador individual y se aplica incluso cuando se establece un modo de bypass.

## Dónde un humano aún tiene que mirar: colocar la puerta de revisión por costo de peor caso

Los modos de permiso y reglas de negación deciden qué el agente puede hacer sin preguntar. No deciden dónde tú, el humano, aún necesitas mirar antes de que una acción se ejecute. Esa decisión descansa en una pregunta, la misma que separa un modo seguro de uno riesgoso: ¿cuál es el peor resultado si esta acción se ejecuta sin que una persona la verifique? Cuanto menor sea el costo de estar equivocado, más puedes dejar pasar. Cuanto más alto sea el costo, y más difícil sea deshacer, más una etapa necesita una puerta humana antes de ejecutarse.

Esa misma pregunta de peor caso coloca la puerta ya sea que el agente esté escribiendo código o ejecutándose desatendido en una etapa automatizada como un bot que comenta o bloquea una solicitud de extracción. Tres ubicaciones resultan de esto:

- Deja pasar acciones de bajo riesgo y reversibles sin una puerta. Una corrección de formato o una edición confinada al directorio de trabajo lleva poco costo si está equivocado, así que requerir que un humano apruebe cada uno compra supervisión que no necesitas y ralentiza el trabajo. Este es el caso para el cual `acceptEdits` está construido.
- Cierra con puerta cualquier acción que sea difícil de deshacer o alcance una ruta sensible: una escritura fuera del directorio de trabajo, un comando de shell destructivo, o una edición a un archivo relevante para seguridad o protegido. El costo de una llamada equivocada ahí es alto, así que el agente debería pausar y exponer la acción para que una persona la revise antes de ejecutarse. Una regla de negación lo aplica determinísticamente, y el modo predeterminado o de plan mantiene la solicitud en su lugar mientras decides.
- Nunca permitas que el agente sea la única puerta en un cambio a código que tu equipo ha marcado como sensible. Allí el trabajo del agente es una entrada a una decisión humana, no un reemplazo para una, así que una persona debe revisar el cambio antes de que se fusione sin importar qué tan confiado esté el agente o su propia revisión.

La colocación de la puerta y la elección de modo de permiso son la misma decisión vista desde dos lados. El modo establece el predeterminado para una sesión completa, y la puerta es dónde anulas ese predeterminado para la única acción cuyo costo es demasiado alto para dejarlo al predeterminado; ambos provienen de preguntar qué se rompe si esto se ejecuta sin verificación.

**Nota:**
Costo · Complejidad · Riesgo

**Costo:** Ejecutar en modo predeterminado en trabajo de confianza agrega latencia de solicitud a cada llamada de herramienta, y esto se acumula en una refactorización larga.
**Complejidad:** Múltiples niveles de configuración y archivos con una jerarquía de anulación requieren cuidado consistente. Una regla de negación a nivel empresarial que contradice una regla de permiso a nivel de proyecto necesita ser entendida por todos que mantengan la configuración del proyecto.
**Riesgo:** El riesgo está en usar el modo incorrecto para el contexto. Por ejemplo, un modo de bypass establecido por impaciencia en una máquina no aislada elimina cada solicitud de seguridad entre el agente y tus archivos activos, y, a diferencia de los otros modos, también elimina la guardia de ruta protegida.

---

`[TAG FAILURE]` Ten cuidado - Modos de Permiso y Puertas Humanas · 3 min

## El modo de bypass que eliminó la única solicitud que importaba

**Configuración**
Cambiaste a permisos de bypass para detener las solicitudes constantes porque el trabajo se sentía rutinario. El agente se había comportado bien durante días, la tarea de limpieza era simple, y el comportamiento de solicitud-antes-de-cada-llamada-de-herramienta se sentía como fricción innecesaria.

## La transcripción
La siguiente sesión de emparejamiento ocurrió durante una limpieza de código base que había estado ejecutándose sin incidentes durante tres días.

Dev: "Bien, voy a cambiar a bypassPermissions para este. Es solo renombrar referencias de punto final antiguas de API. Nada riesgoso."
Claude Code: [Escaneando archivos que coinciden con patrón /v1/legacy/ ... 47 archivos encontrados]
Claude Code: [Actualizando referencias de punto final ...]
Claude Code: [Ejecutando el script cleanup.sh de limpieza post-renombre ...]
Claude Code: [Eliminados 3 archivos que coinciden con /v1/legacy/ en /deploy/config/prod/ ...]
Dev: "Espera. ¿Qué había en /deploy/config/prod/?"
Claude Code: [Los archivos contenían anulaciones de punto final específicas del entorno para el despliegue de producción. Han sido removidos.]
Dev: "Ese directorio no se suponía que estuviera en el alcance. Estaba trabajando en /src/."
Claude Code: [El patrón /v1/legacy/ coincidía con archivos tanto en /src/ como en /deploy/config/prod/. En modo bypassPermissions, no se solicitó confirmación antes de las eliminaciones.]

La solicitud que habría atrapado este error se apagó cuando bypassPermissions fue activado. En modo predeterminado o acceptEdits, el script de limpieza no se habría ejecutado sin confirmación, y el usuario habría podido detener la eliminación antes de que alcanzara los archivos de configuración de producción. En bypassPermissions, la coincidencia de patrón fue más amplia de lo previsto, y ninguna solicitud se interpuso entre el script y los archivos que eliminó.

Nota la ubicación precisa de la puerta: fue la invocación del script la que habría solicitado, no los comandos de eliminación `rm` por sí solos. acceptEdits auto-aprueba comandos comunes del sistema de archivos, incluyendo `rm` en rutas dentro del directorio de trabajo. Si Claude hubiera emitido las eliminaciones directamente como comandos `rm`, acceptEdits las habría dejado pasar silenciosamente; solo el modo predeterminado las solicita.

**Qué debes tener en cuenta**
Un modo de bypass silencia todas las solicitudes de confirmación, incluyendo las que podrías no haber anticipado. El patrón de fallo aquí es un agente que coincide con un conjunto de archivos más amplio del que pretendías, ejecutándose en un modo sin puntos de control. BypassPermissions también omite la guardia de ruta protegida que los otros modos mantienen, así que incluso el estado del repo y la configuración de Claude pierden su solicitud automática. Para cubrir esta brecha, debes establecer una regla de negación en directorios sensibles antes de cambiar modos. Si quieres menos solicitudes sin perder la red de seguridad, usa un modo de puerta clasificada (p. ej., auto) en lugar de un bypass completo.

---

`[TAG CHECKPOINT]` Punto de control - Modos de Permiso y Puertas Humanas · 4 min

# Punto de control 1: ensambla el archivo de configuración y coloca la puerta humana

Inténtalo ahora. Estás configurando Claude Code para una refactorización local de confianza del módulo de pagos.

La refactorización debe auto-aprobar ediciones de archivos pero nunca debe ejecutar comandos de shell destructivos, y el archivo `.env.production` nunca debe ser legible por el agente. A continuación hay piezas de settings.json.

## Parte 1: Selecciona las piezas de setting.json que ensamblan la configuración correcta

Selecciona dos piezas.

✓ **Pieza A.** `{ "permissions": { "defaultMode": "default"} }`
✓ **Pieza B.** `{ "permissions": { "defaultMode": "bypassPermissions" } }`
✓ **Pieza C.** `{ "permissions": { "allow": ["Bash(npm run:*)"], "deny": ["Bash(rm:*)", "Bash(git push:*)"] } }`
✓ **Pieza D.** `{ "permissions": { "deny": ["Read(.env.production)"] } }`
✓ **Pieza E.** `{ "permissions": { "allow": ["Bash(*)", "Edit(*)"] } }`

## Parte 2

Tu configuración permite que el agente edite archivos automáticamente. Durante la refactorización el agente propone un cambio a un archivo de configuración de despliegue que varios servicios de producción leen. ¿Dónde debería ir una puerta humana para esa una acción? Elige la respuesta más apropiada.

a) En ningún lugar: la configuración ya auto-aprueba ediciones, así que déjalo ejecutar.
b) Un humano revisa y aprueba el cambio al archivo de configuración de despliegue antes de que la escritura se ejecute, porque un valor equivocado ahí es difícil de deshacer y alcanza sistemas fuera del archivo.
c) Agrega bypassPermissions para que el agente nunca pause.
d) Revisa el cambio solo después de la escritura, durante la próxima solicitud de extracción.

---

`[TAG TEACHING]` Enseñanza - Contexto de Proyecto Duradero · 20 min

# Contexto de proyecto duradero con CLAUDE.md, archivos de reglas, ganchos y subagentes

Previamente vimos cómo Claude Code cierra con puerta acciones a través de modos de permiso y archivos de configuración. Esa capa de configuración controla qué el agente está permitido hacer.

Este cluster se construye encima: ahora aprenderás cómo configurar qué el agente sabe y cómo se comporta, para que las reglas y contexto de proyecto que defines en una sesión aún estén en efecto al inicio de la siguiente.

## CLAUDE.md: el archivo de proyecto que carga en cada sesión

Cada vez que Claude Code comienza en un directorio de proyecto, busca un archivo llamado **CLAUDE.md** en la raíz y lo lee. El contenido se antepone a tu prompt antes de que cualquier mensaje de ti llegue. Esto significa que cada convención, restricción y comando que pones en CLAUDE.md está presente desde el primer prompt de cada sesión, sin que tengas que re-establecerlo.

El comando `/init` escanea tu código base y genera un CLAUDE.md inicial. El archivo generado es una excelente línea base pero debe ser validado antes de usar. Refínalo para contener las reglas que controlan el resultado de tus prompts: tus comandos de prueba, tus convenciones de framework, las rutas que el agente no debería tocar, y las decisiones de estilo que difieren de los predeterminados.

El tamaño es el principal modo de fallo. Un CLAUDE.md que sigue creciendo con cada nueva instrucción puede diluir las reglas que más importan. Un archivo más grande consume más de la ventana de contexto, lo que hace que cualquier instrucción individual sea una fracción más pequeña de lo que carga, y eso reduce la probabilidad de que el agente siga la única regla que atrapa un error real. Mantén CLAUDE.md a las restricciones que cambian comportamiento y mueve todo lo demás a Skills que carguen bajo demanda.

## Archivos de instrucciones de reglas: limitando la orientación a donde se aplica

En la sección anterior, establecimos que CLAUDE.md carga en cada sesión y debería contener las instrucciones que se aplican en todo el proyecto. La próxima pregunta es qué hacer con orientación que importa solo en una parte del código base. Eso es donde **archivos de instrucciones de reglas** entran: te permiten aplicar instrucciones solo dónde son relevantes, en lugar de cargarlas en cada sesión.

CLAUDE.md siempre está activo, y los archivos de reglas agregan una capa más estrecha encima de esa línea base. Viven en el directorio `.claude/rules/` del proyecto y pueden ser limitados a rutas específicas usando un glob de `paths` en su frontmatter YAML. Una regla limitada de esta manera carga en contexto solo cuando Claude Code trabaja con archivos que coinciden con el patrón, esto permite que una regla sea aplicada a una parte del código base sin saturar el resto del contexto.

Nota que la limitación viene del frontmatter, no de la colocación de archivo. Los archivos de reglas pueden ser organizados en subdirectorios de `.claude/rules/` (p. ej., `.claude/rules/database/`), pero esa estructura es solo organizacional; un archivo de reglas sin un campo de `paths` carga incondicionalmente al lanzamiento, con la misma prioridad que CLAUDE.md, sin importar dónde se siente dentro de `.claude/rules/`.

En la práctica, pon memoria de proyecto amplia y restricciones universales en CLAUDE.md, y pon orientación estrecha y específica del camino en archivos de reglas limitados con `paths`. Una restricción como "nunca modificar el esquema de base de datos" vive en CLAUDE.md porque se aplica a todas partes. Una restricción como "todo SQL en el módulo de base de datos debe incluir un límite de transacción explícito" vive en `.claude/rules/database.md` con frontmatter como:

```
---
paths:
  - "src/db/**/*.sql"
---
```

para que entre en contexto solo cuando Claude esté trabajando con esos archivos.

## Ganchos: ejecutando tus propios scripts en puntos fijos del ciclo de vida

Un **gancho** te permite interceptar y controlar llamadas de herramientas antes o después de que se ejecuten. Cuando escribes una regla específica en CLAUDE.md diciéndole al agente que ejecute Prettier después de cada archivo editado, el agente la seguirá la mayoría de las veces. Alternativamente, un gancho hace que ocurra todas y cada una de las veces, sin excepciones, porque el gancho se dispara independientemente de lo que el modelo decida hacer.

Los ganchos se definen en archivos de configuración y se configuran usando el comando `/hooks`. Cada gancho está vinculado a un evento del ciclo de vida, un matcher opcional que lo limita a tipos de herramientas específicas, y un comando que se ejecuta cuando el evento se dispara. Los eventos centrales para la mayoría de casos de uso de barreras de protección y automatización son:

- **PreToolUse:** Se ejecuta antes de que una llamada de herramienta se ejecute. Porque se ejecuta primero, un gancho PreToolUse puede examinar la llamada de herramienta y salir con código 2 para bloquearlo, escribiendo la razón a stderr como retroalimentación que el agente ve. Esto es cómo aplicas controles de acceso a la capa de configuración en lugar de esperar que el agente respete una instrucción de CLAUDE.md.
- **PostToolUse:** Se ejecuta después de que una llamada de herramienta se completa. Como la llamada ya pasó, este evento no puede bloquearlo, lo que lo hace el lugar correcto para efectos secundarios automatizados: ejecutar un formateador de código después de una edición, disparar pruebas después de un cambio de archivo, o registrar la operación para una pista de auditoría.
- **UserPromptSubmit:** Se ejecuta cuando envías un prompt, antes de que el modelo lo procese. Úsalo cuando necesites inyectar contexto o validar la solicitud antes de que cualquier trabajo comience.
- **Stop:** Se ejecuta cuando el modelo termina de responder. Úsalo para acciones de seguimiento que pertenecen al final de un turno, como notificaciones, tareas de limpieza, o confirmar el registro de auditoría al repositorio.
- **Notification:** Se ejecuta cuando Claude Code envía una notificación, que ocurre cuando Claude necesita permiso para usar una herramienta o después de que Claude Code ha estado inactivo durante 60 segundos. Úsalo para enrutar esas señales a un canal externo o sistema de registro.
- **SessionStart:** Se ejecuta cuando una sesión comienza o se reanuda. Úsalo para inicializar estado, validar variables de entorno, o confirmar que los servicios requeridos son alcanzables antes de que el agente comience a trabajar.
- **SessionEnd:** Se ejecuta cuando una sesión termina. Úsalo para tareas de desmontaje, escrituras de auditoría final, o notificaciones que la sesión se ha cerrado.

Un gancho que bloquea ediciones a una ruta de configuración de producción usando un evento PreToolUse aplica esa restricción en cada llamada de herramienta durante cada sesión, independientemente de modo de permiso. Esa es la diferencia entre una barrera de protección y una convención.

## Subagentes: delegando trabajo a un contexto aislado

Un **subagente** es un asistente especializado al que Claude Code puede delegar tareas, y cada asistente ejecuta una tarea en su propio contexto separado y devuelve solo su salida. No hereda tu historial de conversación principal, los archivos que has acumulado en contexto, o tu estado de sesión actual. Cuando envías una tarea a un subagente, comienza desde un pizarrón limpio, hace el trabajo, y entrega el resultado.

Los subagentes incorporados difieren en lo que cargan al inicio; esta diferencia determina cómo se aplican tus reglas de proyecto. Siempre revisa la lista actual en la documentación de Claude Code, porque el conjunto ha crecido con el tiempo, pero sabe que la división específica que afecta tus reglas de proyecto se mantiene en versiones. Los subagentes incorporados Explore y Plan omiten CLAUDE.md y estado de git para mantener la investigación rápida y barata. Están optimizados para velocidad, así que las reglas a nivel de proyecto y estado del repositorio definidos en CLAUDE.md no están en su contexto cuando se ejecutan. El subagente de propósito general carga ambos. Si delegas una tarea a Explore o Plan y una regla de tu CLAUDE.md aplica, es porque ese contexto no fue cargado. Para tareas donde tus restricciones de proyecto deben ser respetadas, usa el subagente de propósito general o un subagente personalizado que cargue explícitamente las reglas que necesita.

Los subagentes personalizados tampoco ven automáticamente tus skills. Si defines un subagente personalizado en `.claude/agents` y necesita una skill específica, debes listar explícitamente esa skill en el frontmatter del agente. Los agentes incorporados no tienen skills precargadas. Si un agente incorporado necesita comportamiento respaldado por skill, el camino correcto es crear un subagente personalizado con esas skills listadas en su configuración.

El mapa a continuación nombra cada mecanismo, qué carga, cuándo se ejecuta, su costo de contexto, y qué pertenece en él. Úsalo para decidir qué mecanismo lleva una pieza específica de conocimiento de proyecto, dado que cada uno establece un equilibrio distinto entre cuánto contexto cuesta y qué tan confiablemente se aplica.

| Mecanismo | Qué Carga | Cuándo Se Ejecuta | Costo de Contexto | Pertenece Aquí |
|-----------|----------|------------------|------------------|-----------------|
| CLAUDE.md | Contenido de archivo completo antepuesto a contexto al inicio de sesión. | Cada sesión, incondicionalmente. | Persistente por sesión. Se diluye con tamaño. | Restricciones de proyecto universales, comandos y decisiones de framework. |
| Archivo de Regla | Contenido de archivo. Limitado vía glob de `paths` en frontmatter YAML; sin `paths`, carga como CLAUDE.md. | Cuando Claude lee un archivo que coincide con patrones de paths de la regla. Las reglas sin límite cargan al inicio. | Con límite de ruta: se agrega a contexto solo cuando se dispara. Sin límite: mismo costo persistente que CLAUDE.md. | Orientación específica del camino que sería ruido en todas partes. |
| Gancho | Ejecuta tu script en el evento del ciclo de vida. Ningún contenido agregado a contexto. | En el evento configurado (PreToolUse, PostToolUse, etc.). | Mínimo: solo salida del script si se enruta de vuelta a Claude. | Barreras de protección aplicadas, efectos secundarios automatizados, registro de auditoría. |
| Subagente | Contexto de tarea solo. Aislado de la sesión principal. | Cuando se despacha por la sesión principal para una tarea delegada. | Devuelve un resumen, no el historial de tarea completo. | Exploración, investigación, y tareas cuya salida de otro modo abultaría el contexto principal. Útil también para tareas que pueden ser divididas y paralelizadas. |

**Maneja bien**
Proyectos a los que volverás en muchas sesiones, donde un conjunto estable de reglas, variación por directorio, o barreras de protección incondicionales recompensa la configuración.

**Usa un enfoque diferente**
Tareas únicas que no revisarás. Para una exploración rápida de un código base desconocido, la sobrecarga de configuración no se justifica.

---

`[TAG FAILURE]` Ten cuidado - Contexto de Proyecto Duradero · 4 min

## El CLAUDE.md que siguió creciendo hasta que las reglas dejaron de aterrizar

**Configuración**
Tu CLAUDE.md siguió creciendo porque cada nueva regla parecía valer la pena agregarla. Cada adición era individualmente razonable, y el archivo parecía el lugar correcto para cada regla. Pero durante un par de semanas, el archivo creció a más de 800 líneas.

## El rastro
Lo siguiente es un fragmento de registro de sesión de un proyecto con un CLAUDE.md que acumuló durante dos meses de adiciones de equipo.

```
Contexto de sesión cargado:
  CLAUDE.md: 847 líneas
  El contenido incluye: preferencias de framework (líneas 1–40), convenciones de prueba (líneas 41–90), guía de estilo (líneas 91–210), reglas de dependencia (líneas 211–320), restricciones de ruta (líneas 321–360), registro de decisiones históricas (líneas 361–700), notas archivadas (líneas 701–847)

Usuario prompt: "Refactoriza el módulo de auth para usar el nuevo servicio de token. No modifiques el directorio /legacy/tokens/."

Acción de Claude Code: [Leyendo módulo de auth ...]
Acción de Claude Code: [Editando auth/service.ts ...]
Acción de Claude Code: [Leyendo /legacy/tokens/store.ts para referencia ...]
Acción de Claude Code: [Editando /legacy/tokens/store.ts para actualizar interfaz de token ...]

Restricción de ruta de CLAUDE.md (línea 347): "No modifiques archivos en /legacy/tokens/."

Usuario: "Justo editaste /legacy/tokens/store.ts. Dije no tocar ese directorio."

Claude Code: "Me disculpo. La restricción /legacy/tokens/ está en las instrucciones del proyecto. La edición se hizo en el curso de actualizar la interfaz de token. No marqué el conflicto antes de proceder."
```

La regla estaba en el archivo; el agente tenía acceso a ella. Sin embargo, el fallo fue dilución: 846 otras líneas redujeron el peso efectivo de la única instrucción que importaba. El registro de decisiones históricas y notas archivadas deberían haber sido notadas en algún lugar, pero no pertenecían en el CLAUDE.md.

**Qué debes tener en cuenta**
CLAUDE.md es un conjunto de trabajo de reglas que cambian comportamiento para la sesión actual, no un registro de adición creciente. Cada línea que añades reduce el peso de cada otra línea. Si una regla es específica del camino, pertenece en un archivo de regla. Si una regla es contexto histórico, pertenece en un documento de referencia separado que el agente lee bajo demanda. Cuando tu CLAUDE.md crece más allá de un par de cientos de líneas, audítalo: identifica cuáles reglas son verdaderamente críticas para sesión y mueve el resto. La única regla que no puedes permitirte diluir debería ser el camino más corto a un gancho.

---

`[TAG CHECKPOINT]` Punto de control - Contexto de Proyecto Duradero · 3 min

# Punto de control 2: arrastra el valor correcto

Inténtalo ahora. Estás configurando un gancho que aplica una restricción de ruta, y la configuración a continuación tiene dos espacios en blanco.

Selecciona el correcto: el evento del ciclo de vida que se ejecuta antes de que se ejecute una llamada de herramienta, y el comando que el gancho ejecuta para bloquear lecturas de `.env.production`.

```json
{
  "hooks": {
    "________": [
      {
        "matcher": "Read",
        "hooks": [{ "type": "command", "command": "________" }]
      }
    ]
  }
}
```

**Espacio en blanco 1:** el evento del ciclo de vida
- PreToolUse
- PostToolUse
- UserPromptSubmit
- SessionStart

**Espacio en blanco 2:** el comando
- A) Un script que lee la llamada de herramienta de stdin, revisa la ruta del archivo, y sale con código 2 cuando la ruta es .env.production (escribiendo la razón a stderr).
- B) Un script que registra la llamada de herramienta a un archivo de auditoría y sale 0.
- C) Un script que imprime una advertencia y sale 0 incondicionalmente.

---

`[TAG TEACHING]` Enseñanza - Empaquetamiento de Flujos de Trabajo · 8 min

# Empaquetando un flujo de trabajo como plugin: skills, comandos personalizados e instalación del mercado

Previamente, cubrimos los mecanismos que dan a Claude Code contexto duradero y comportamiento de aplicación: CLAUDE.md para memoria de proyecto siempre activada, archivos de reglas para orientación limitada, ganchos para barreras de protección determinísticas, y subagentes para delegación de tarea aislada.

Estos mecanismos viven en tu directorio `.claude` y son versionados con el proyecto. Ahora nos dirigimos a la próxima pregunta: ¿cómo puedes empaquetar esa configuración para que un compañero de equipo pueda instalarla simplemente en un paso en lugar de repetir tu configuración manual por mano?

## Las skills son flujos de trabajo reutilizables que el agente carga bajo demanda

Una **skill** es un archivo portable de Markdown (archivo `SKILL.md`) colocado en `.claude/skills`. El frontmatter identifica la skill y describe cuándo aplica, y el cuerpo sostiene los pasos. La misma skill puede ejecutarse en Claude Code, ser invocada a través de la API de Mensajes, o ser cargada por el Agent SDK. Lo que cambia en los tres no es el archivo en sí; es dónde se ejecuta la skill, cómo se carga, y qué está permitido tocar. Un desarrollador que solo ha visto skills en Claude Code puede dar por sentadas cosas que no se cumplen en la API, así que esta sección perfila las diferencias.

## Cómo la skill carga y se ejecuta en cada

Selecciona cada pestaña para ver cómo la skill carga, dónde se ejecutan los pasos, y qué necesitas saber.

| Tiempo de Ejecución | Cómo Carga | Dónde se Ejecutan los Pasos | Qué Necesitas Saber |
|-----------------|----------|------------------------|--------------------|
| Claude Code | Descubierta de `.claude/skills` en el sistema de archivos. Carga en coincidencia de descripción o cuando la invocas por nombre. | En tu sesión de terminal, contra tus archivos locales, bajo el modo de permiso activo y reglas de negación. | Es basada en sistema de archivos y es gobernada por la capa de configuración. |
| API de Mensajes | Enviada junto con la solicitud y ejecuta dentro del contenedor de ejecución de código, no en el entorno de tu aplicación. Requiere headers de beta de code-execution y skills. | Dentro del contenedor de ejecución de código de Anthropic, no en tu máquina. El acceso a sistema de archivos y herramientas de la skill es cualquier que ese contenedor proporciona. | Una skill que asume archivos locales o herramientas locales no se comportará de la misma manera aquí, porque no está ejecutándose donde esos archivos están. |
| Agent SDK | Cargada por el agente que el SDK ejecuta, pero si las configuraciones del sistema de archivos (CLAUDE.md, skills) se cargan o no lo controla la configuración de settingSources. No confíes en un predeterminado: siempre establécelo explícitamente a las fuentes que tienes la intención, y confirma el comportamiento predeterminado actual contra la referencia de Agent SDK al construir. Lo estableces a través de "settingSources" (TypeScript) / "setting_sources" (Python). | En el proceso que el SDK ejecuta, que es tu entorno, una vez que le has dicho que cargue fuentes de sistema de archivos. | La sorpresa común: una skill que funcionó en Claude Code no hace nada bajo el SDK porque settingSources nunca fue establecido, así que la skill nunca cargó. |
| Agentes Manejados | Definida una sola vez como un recurso de API que nombra el modelo, prompt del sistema, herramientas, servidores MCP y skills. Anthropic carga la skill del lado del servidor cuando el agente se ejecuta, así que no hay paso de descubrimiento de sistema de archivos de tu parte. | Dentro de una caja de arena que Anthropic aprovisiona y ejecuta, no en tu entorno. Tu aplicación envía eventos de usuario y lee resultados streaming de vuelta. La skill tiene acceso a cualquier que esa caja de arena gestionada proporciona, no tus archivos locales. | Actualmente una beta pública que requiere el header de beta `managed-agents-2026-04-01`, y las sesiones se almacenan del lado del servidor, lo que significa que los Agentes Manejados actualmente no son elegibles para Retención de Datos Cero o cobertura de BAA de HIPAA. Las skills se adjuntan cuando se define el recurso de agente, no al tiempo de sesión. Actualiza la definición del agente para cambiar cuáles skills están disponibles. |

## Tres reglas de portabilidad

- Escribe la descripción como el criterio de coincidencia. El modelo carga una skill comparando tu solicitud a su descripción, así que una descripción que identifique cuándo aplica la skill funciona en cada tiempo de ejecución, pero una vaga falla para cargar en todos ellos.
- No asumas que un sistema de archivos local o herramientas locales existen dentro del cuerpo de la skill. Una skill que usa shell para un comando local funciona en Claude Code pero se quiebra en la API de Mensajes, donde se ejecuta en un contenedor sin un comando. Mantén los pasos de la skill confinados a lo que el tiempo de ejecución es garantizado proporcionar, o documenta la dependencia.
- Recuerda que los subagentes no heredan skills. Esto fue verdadero en Módulo 2, y aún es verdadero aquí: un subagente comienza limpio, así que una skill en que el padre confió tiene que ser listada para el subagente explícitamente, en cada tiempo de ejecución que soporta subagentes.

La conclusión práctica es que puedes escribir una skill una sola vez y reutilizarla, pero debes diseñarla específicamente para poder usarla en distintos tiempos de ejecución. Una skill que está limitada a una descripción clara y libre de suposiciones de entorno local se porta limpiamente; una que asume un entorno local específico no.

| Maneja bien | Agrega complejidad | Usa un enfoque diferente |
|------------|------------------|------------------------|
| Un procedimiento específico de una tarea, escrito una sola vez y reutilizado en el terminal interactivo, una integración de API, y un trabajo del SDK sin interfaz (headless). | Cada tiempo de ejecución carga y aisla la skill diferentemente, así que debes contabilizar headers de beta en la API y settingSources en el SDK. | Para instrucciones que deben aplicar a cada sesión en un proyecto, CLAUDE.md aún es la herramienta correcta. Las skills son para procedimientos bajo demanda y portables. |

## Dándole a un flujo de trabajo un punto de entrada explícito

Un comando personalizado es un atajo para un procedimiento definido. En Claude Code actual, las skills son el formato recomendado para invocación tanto explícita como automática: invocas una skill directamente con `/skill-name`, o Claude la carga automáticamente cuando es relevante. El formato de directorio `.claude/commands/` más antiguo aún funciona, pero es un proceso heredado. Usa skills con `disable-model-invocation: true` en el frontmatter cuando quieras un flujo de trabajo que solo se ejecute cuando lo invocas explícitamente.

Los comandos del plugin reciben automáticamente un espacio de nombres: el nombre del plugin se convierte en el prefijo, así que un comando `run-tests` en un plugin nombrado `payments` se invoca como `/payments:run-tests`. Esto es por qué dos plugins pueden ambos enviar un comando `run-tests` sin colisionar. Los autores deben tratar el nombre del plugin como parte de la interfaz, dado que prefija cada comando que envíes, y ser conscientes de que renombrar el plugin los renombra todos.

## La capa de empaquetamiento que hace instalable una configuración

Un **plugin** agrupa skills, ganchos, subagentes y servidores MCP en una unidad instalable única. Los plugins pueden ser empaquetados y distribuidos a través de un mercado, que es un catálogo de plugins que alguien más ha creado y compartido. El mercado oficial de Anthropic está disponible automáticamente cuando comienzas Claude Code, y puedes agregar mercados de terceros alojados en un repositorio de GitHub con un comando como `/plugin marketplace add <owner/repo>`. Los compañeros de equipo entonces pueden ejecutar un comando de instalación simple para obtener la misma configuración. El plugin reemplaza una página de pasos de configuración manual con una instalación versionada y auditable. El plugin coloca componentes como sigue:

- Las skills van en un directorio de skills.
- Los ganchos, subagentes y configuración van en sus ubicaciones respectivas.

El manifiesto del plugin describe el paquete, y el comando de instalación lo conecta a la instalación objetivo. Los plugins pueden ser descargados por individuos o a nivel empresarial.

Los administradores empresariales pueden desplegar plugins a nivel de organización a través de configuración manejada. Una lista de permitidos de mercados, definida en la configuración manejada, controla qué fuentes de mercado pueden agregar los usuarios, así que la organización controla de dónde pueden venir los plugins. La lista de permitidos restringe lo que los usuarios pueden agregar, pero no registra mercados automáticamente. Si te gustaría empujar un mercado a todos los usuarios sin requerirles que ejecuten el comando de adición ellos mismos, combina la configuración de lista de permitidos con `extraKnownMarketplaces` en configuración manejada. La precedencia viene del alcance de despliegue: porque la configuración manejada se sitúa por encima de la configuración de usuario y de proyecto en la jerarquía de configuración, un plugin desplegado a alcance manejado toma prioridad y no puede ser anulado por usuarios o archivos de proyecto. Revisa la capa de referencia para los nombres de configuración exactos.

## La tabla de decisión de empaquetamiento

La tabla a continuación identifica cada capa, quién es para, y cuándo alcanzarla.

| Capa | Qué Es | Quién Es Para | Cuándo Alcanzarla |
|------|--------|--------------|------------------|
| Skill | Un archivo de Markdown en `.claude/skills` que carga cuando su descripción coincide la tarea o cuando la invocas por nombre. | Un desarrollador individual o equipo usando Claude Code interactivamente. | Alcanza una skill cuando un procedimiento específico de tarea debe mantenerse fuera de contexto hasta que sea necesario, como una revisión de PR o lista de verificación de despliegue que solo carga cuando el trabajo lo requiere. |
| Comando Personalizado | Un atajo nombrado que ejecuta un procedimiento definido cuando lo invocas explícitamente. | Desarrolladores que quieren un punto de entrada predecible y explícito para procedimientos de alta frecuencia. | Alcanza un comando personalizado cuando el procedimiento tiene un nombre claro y quieres dispararlo directamente en lugar de confiar en la descripción para coincider la tarea. |
| Plugin | Un paquete versionado de skills, ganchos, subagentes y configuraciones de servidor MCP distribuido a través de un mercado. | Un equipo que quiere instalación de un paso de una configuración compartida y versionada. | Alcanza un plugin cuando una configuración funcional actualmente vive en una máquina y necesita ser compartida, versionada, y mantenida consistente en un equipo. |

**Nota:**
Costo · Complejidad · Riesgo

**Costo:** Las skills agregan costo de contexto al activarse, pero un plugin agrega sobrecarga de instalación y mantenimiento. La pregunta a hacer es si quieres pagar el costo de configuración una sola vez, como haces con una instalación de plugin, o repetidamente, como haces cuando cada desarrollador ejecuta los mismos pasos manuales por mano.
**Complejidad:** Un plugin que codifica de forma rígida rutas absolutas en sus skills instalará correctamente para el autor y fallará para todos los demás, porque cualquier ruta o suposición de entorno cocida en una skill u orden de gancho es la cosa más probablemente que se rompa en máquinas.
**Riesgo:** Un plugin lleva los componentes que agrupa en cada instalación. Es importante recordar que una regla de negación o gancho en los que el autor confió localmente no están incluidos a menos que esté explícitamente listado como parte del paquete. Si las skills o ganchos están atados a una barrera de protección que no está incluida en el paquete, entonces la protección no se lleva en la máquina de un compañero de equipo.

---

`[TAG CHECKPOINT]` Punto de control - Empaquetamiento de Flujos de Trabajo · 3 min

# Punto de control 3: coloca la skill en el tiempo de ejecución correcto

Inténtalo ahora. Tres equipos quieren reutilizar la misma skill de lista de verificación de revisión en diferentes lugares.

Para cada, empareja lo que debe ser configurado para que la skill cargue y se ejecute. Nota: la fuente presenta cuatro situaciones de tiempo de ejecución. Los cuatro están incluidos aquí para que la comparación se complete.

| Situación | Configuración Requerida |
|-----------|----------------------|
| Un desarrollador quiere que la skill cargue cuando pide una revisión en el terminal de Claude Code. | Habilita fuentes de sistema de archivos estableciendo settingSources explícitamente para que el agente cargue skills del proyecto. No confíes en un predeterminado, y confirma el comportamiento predeterminado actual contra la referencia de Agent SDK al construir. / Coloca SKILL.md en .claude/skills con una descripción que coincida solicitudes de revisión. / Define el agente como un recurso de API que lista la skill y establece el header de beta `managed-agents-2026-04-01` en las llamadas. / Escribe la skill para que sus pasos no dependan de archivos locales, porque se ejecutará en la caja de arena de Anthropic. / Envía los headers de beta de code-execution y skills y escribe la skill para que sus pasos no dependan de archivos o herramientas locales. |
| Un servicio llama la API de Mensajes y quiere que la skill se ejecute como parte de la solicitud. | Habilita fuentes de sistema de archivos estableciendo settingSources explícitamente para que el agente cargue skills del proyecto. No confíes en un predeterminado, y confirma el comportamiento predeterminado actual contra la referencia de Agent SDK al construir. / Coloca SKILL.md en .claude/skills con una descripción que coincida solicitudes de revisión. / Define el agente como un recurso de API que lista la skill y establece el header de beta `managed-agents-2026-04-01` en las llamadas. / Escribe la skill para que sus pasos no dependan de archivos locales, porque se ejecutará en la caja de arena de Anthropic. / Envía los headers de beta de code-execution y skills y escribe la skill para que sus pasos no dependan de archivos o herramientas locales. |
| Un trabajo programado sin interfaz (headless) usa el Agent SDK y espera que la skill del repo cargue. | Habilita fuentes de sistema de archivos estableciendo settingSources explícitamente para que el agente cargue skills del proyecto. No confíes en un predeterminado, y confirma el comportamiento predeterminado actual contra la referencia de Agent SDK al construir. / Coloca SKILL.md en .claude/skills con una descripción que coincida solicitudes de revisión. / Define el agente como un recurso de API que lista la skill y establece el header de beta `managed-agents-2026-04-01` en las llamadas. / Escribe la skill para que sus pasos no dependan de archivos locales, porque se ejecutará en la caja de arena de Anthropic. / Envía los headers de beta de code-execution y skills y escribe la skill para que sus pasos no dependan de archivos o herramientas locales. |
| Un equipo de producto quiere la misma skill de lista de verificación de revisión para ejecutar dentro de un agente de largo plazo que Anthropic aloja, alcanzable por una identificación de agente a través de sesiones. | Habilita fuentes de sistema de archivos estableciendo settingSources explícitamente para que el agente cargue skills del proyecto. No confíes en un predeterminado, y confirma el comportamiento predeterminado actual contra la referencia de Agent SDK al construir. / Coloca SKILL.md en .claude/skills con una descripción que coincida solicitudes de revisión. / Define el agente como un recurso de API que lista la skill y establece el header de beta `managed-agents-2026-04-01` en las llamadas. / Escribe la skill para que sus pasos no dependan de archivos locales, porque se ejecutará en la caja de arena de Anthropic. / Envía los headers de beta de code-execution y skills y escribe la skill para que sus pasos no dependan de archivos o herramientas locales. |

---

`[TAG FAILURE]` Ten cuidado - Empaquetamiento de Flujos de Trabajo · 3 min

## El plugin que se instaló en tu máquina y falló en la de todos los demás

**Configuración**
Un plugin que se instala limpiamente te dice que el paquete fue ensamblado correctamente; sin embargo, no te dice que el plugin se ejecutará efectivamente, porque la instalación y la ejecución son cosas diferentes. La instalación copia archivos en su lugar. La ejecución resuelve las rutas y variables a las que esos archivos apuntan, contra la máquina donde se están ejecutando. Cuando un autor de plugin incrusta el diseño de su propia máquina en una skill, la instalación aún tiene éxito en todas partes, pero la ejecución falla en todas partes excepto la configuración propia del autor. Esta brecha ocurre porque es algo que el autor no puede ver.

## Qué pasó
Un desarrollador construyó una skill de flujo de trabajo de despliegue, la empaquetó como un plugin, y la probó localmente. Las pruebas locales pasaron, el plugin salió al equipo a través del mercado interno, y la instalación de cada compañero de equipo tuvo éxito, pero el momento en que cualquier compañero de equipo ejecutó la skill, falló.

La causa raíz estaba en el SKILL.md de la skill, en un comando que apuntaba a `/Users/alexmorgan/projects/deploy-utils/validate.sh`.

Ese directorio existía en la máquina del autor y en ningún otro lugar. La skill llevaba una ruta absoluta al directorio home del autor, así que cada ejecución del compañero de equipo buscaba un archivo que estaba en su sistema o incluido en la skill.

Una segunda skill en el mismo plugin se apoyó en una variable de entorno, `DEPLOY_TOKEN`, que el autor había establecido en su propio perfil de shell, y el README del plugin nunca lo mencionó. Tres compañeros de equipo gastaron dos horas depurando antes de que rastrearan la segunda falla a la variable faltante.

El plugin incorrectamente trató la máquina del autor como la máquina del equipo, lo que causó la rotura. Ambos fallos en el ejemplo anterior tienen la misma causa raíz y la misma ruta absoluta. Está en el SKILL.md como texto plano, y un revisor leyendo el archivo puede atraparlo. La variable de entorno puede ser peligrosa porque nada en el paquete anuncia la dependencia asociada, significando que la skill se ejecuta bien hasta el paso que necesita la variable, y solo entonces falla. Esto es por qué puede costar a tres personas dos horas arreglarlo.

**Qué debes tener en cuenta**
Cualquier referencia de ruta en una skill, comando de gancho, o componente de plugin debe ser relativo a la raíz del proyecto o usar una variable de entorno para la ruta base. Usa `$CLAUDE_PROJECT_DIR` para referenciar scripts almacenados en el proyecto, y `${CLAUDE_PLUGIN_ROOT}` para scripts agrupados dentro del plugin en sí, para que la ruta se resuelva correctamente sin importar cuya máquina la ejecuta o qué directorio la sesión comenzó. Asegúrate de que cualquier script, archivo de configuración, u otro activo del que el plugin depende esté ya sea agrupado dentro del plugin o incluido en una ubicación de proyecto compartida, para que cada compañero de equipo pueda acceder a los mismos archivos después de la instalación. Documenta cada variable de entorno que el plugin requiere y valídala al tiempo de instalación para que una faltante salga a la superficie de inmediato en lugar de a mitad de la ejecución. Luego prueba la instalación en una máquina limpia antes de distribución; esto atrapará cualquier problema que la máquina de construcción pueda estar ocultando.

---

`[TAG CHECKPOINT]` Punto de control - Empaquetamiento de Flujos de Trabajo · 4 min

# Punto de control 4: arregla la definición de plugin rota

Inténtalo ahora. El siguiente SKILL.md funciona en la máquina del autor pero fallará cuando un compañero de equipo clone el proyecto e instale el plugin.

Selecciona el defecto único, luego selecciona el arreglo correcto.

```yaml
---
name: deploy-validate
description: Validates a deployment configuration before release.
---

## Steps
1. Run the validation script: /Users/alexmorgan/projects/deploy-utils/validate.sh
2. If the script exits with a non-zero code, report the error to the developer.
3. If validation passes, confirm the deployment configuration is safe to proceed.
```

**Parte 1 · ¿Cuál es el defecto?**
- A) El nombre de skill no coincide el nombre del plugin.
- B) La descripción es demasiado corta para que el modelo coincida.
- C) La ruta absoluta /Users/alexmorgan/projects/deploy-utils/validate.sh en el paso 1.
- D) El paso 2 debería reportar al usuario, no al desarrollador.

**Parte 2 · ¿Cuál es el arreglo correcto?**
- A) Referencia el script de la raíz del proyecto usando CLAUDE_PROJECT_DIR, para que se resuelva sin importar dónde el proyecto sea clonado.
- B) Reemplaza la ruta con otra ruta absoluta que apunta a una unidad de red compartida.
- C) Reemplaza la ruta con un atajo de directorio home: ~/projects/deploy-utils/validate.sh.
- D) Elimina el paso 1 para que la skill ya no llame un script externo.

---

`[TAG TEACHING]` Enseñanza - Servidores MCP · 21 min

# Construyendo y configurando un servidor MCP: transporte, alcance, y el servidor de GitHub

Las secciones anteriores introducieron plugins como la capa de empaquetamiento que agrupa skills, ganchos, subagentes y servidores MCP en una unidad instalable única.

Esta sección explica más sobre qué paquetes de servidores MCP son y cómo construirlos. Un servidor MCP es la capa que expone herramientas a Claude desde fuera de tu código base. Cuando construyes un servidor MCP, una de las primeras decisiones es determinar el mecanismo de transporte apropiado y definir el alcance del servidor.

## Qué es un servidor MCP y por qué es diferente de conectar una herramienta directamente

Cuando conectas una herramienta directamente a una aplicación, eres responsable de definir el esquema de la herramienta y su funcionalidad. Ambos viven en el código de esa aplicación. Si tres aplicaciones diferentes necesitan acceso al mismo servicio externo, cada una mantiene su propia integración.

El **Protocolo de Contexto del Modelo**, o MCP, separa definiciones de herramientas de aplicaciones individuales y las convierte en un proceso llamado un servidor.

Un servidor MCP es un proceso que expone herramientas, recursos y prompts que los clientes MCP pueden usar. Claude Code tiene un cliente MCP incorporado. Cuando te conectas a un servidor MCP, Claude Code descubre las herramientas que proporciona y puede invocarlas durante una sesión. Con un servidor MCP, construyes la capacidad una sola vez, y cada cliente MCP que se conecta a ella obtiene acceso sin re-implementar la integración.

## Los servidores MCP también exponen recursos y prompts

Un servidor MCP expone herramientas, recursos y prompts. Ya hemos aprendido sobre herramientas: acciones que el modelo puede llamar. Los otros dos cubren casos donde una llamada de herramienta no te dará lo que necesitas.

Un **recurso** son datos de solo lectura que el servidor expone para que el cliente lo obtenga y coloque en contexto directamente, en lugar del modelo llamando una herramienta para obtenerlo. El cliente solicita un recurso por su dirección, y el servidor devuelve los datos. Los recursos vienen en dos formas: un recurso directo tiene una dirección fija para datos que no toman parámetros, como una lista de documentos disponibles, y un recurso plantillado pone un parámetro en la dirección, como una dirección de documento que toma un identificador de documento. Alcanza un recurso cuando quieres que ciertos datos conocidos estén en contexto desde el inicio de un turno. Lo quieres cuando jalar un recurso directamente es más barato y más predecible que usar una llamada de herramienta para ir obtenerlo. El soporte de recursos varía entre clientes MCP; verifica que tu cliente tenga un mecanismo para inyectar recursos en contexto antes de confiar en este patrón.

Un **prompt** es una plantilla de instrucción pre-escrita que el servidor expone para que un cliente pueda invocar un prompt vetado por nombre en lugar de pedir a cada usuario que escriba el suyo propio. Un usuario ya puede pedir al modelo hacer la mayoría de tareas en sus propias palabras, así que un prompt es útil cuando se necesita redacción específica: una tarea donde una instrucción cuidadosamente construida produce resultados materialmente mejores que cualquier que un usuario escribiera, y donde quieres que cada cliente obtenga la misma calidad. Empaquetar la instrucción en el servidor significa que el prompt se mantiene en un lugar y se reutiliza en cada lugar donde el servidor está conectado.

## Transporte: cómo Claude Code habla con el servidor

El transporte es el canal de comunicación entre el cliente MCP y el servidor MCP. El transporte correcto depende de dónde el servidor se ejecuta.

Selecciona cada pestaña para ver qué es y cuándo usarlo.

**stdio**
Ejecuta el servidor como un proceso local en la misma máquina que el cliente. El cliente lanza el servidor como un subproceso y se comunica a través de entrada estándar y salida. Esta es la elección correcta para una herramienta local, un script personal, o un servidor de desarrollo que ejecutas en tu propia máquina. No funciona para un servidor que quieres compartir en tu equipo o alojar remotamente.

**HTTP**
Es la forma recomendada de transporte para cualquier servidor que no se ejecuta localmente. Se conecta sobre una conexión HTTP estándar y soporta servidores alojados en una máquina diferente. Cuando registras un servidor HTTP, proporcionas la URL y el cliente se conecta a través de la red. Los servidores de equipo compartidos e integraciones alojadas usan HTTP.

**SSE (Server-Sent Events)**
Es un medio más antiguo de transporte que antecede al transporte HTTP actual. Ha sido superado por transporte HTTP y ya no se recomienda para servidores nuevos. Si encuentras SSE en configuración existente o documentación, trátalo como una opción heredada en lugar de una recomendación actual.

## Costo de contexto

Cada servidor MCP conectado contribuye definiciones de herramientas que ocuparían la ventana de contexto si se cargaran por adelantado. Por defecto, Claude Code difiere estas definiciones en lugar de cargarlas por adelantado, y usa un paso de búsqueda para descubrir y cargar solo las herramientas relevantes cuando una tarea las requiere. Solo las herramientas requeridas entran en contexto.

Un modo de opt-in carga definiciones de herramientas por adelantado cuando se ajustan dentro de aproximadamente el 10 por ciento de la ventana de contexto, difiriendo solo cuando ese límite se excede. De cualquier forma, conectar solo los servidores que necesitas mantiene cada solicitud delgada, porque cada servidor conectado agrega al grupo de definiciones que el modelo tiene que contabilizar.

## Caché de prompt: pagando una sola vez por solicitudes reutilizables

El problema de costo de contexto que justo viste con servidores MCP tiene una dimensión de costo y ventana. Cada solicitud reprocesa su entrada de cero, incluyendo las partes que fueron idénticas en la última solicitud, lo que significa que pagas por reprocesar cada vez.

El **caché de prompt** puede detenerte de pagar dos veces por el mismo contenido estable.

El caché almacena el trabajo de procesamiento hecho en un prefijo estable de tu solicitud para que una solicitud de seguimiento pueda reutilizarlo en lugar de reprocesar los mismos tokens. La primera solicitud escribe el prefijo al caché, y solicitudes de seguimiento envían contenido idéntico hasta el mismo punto en el caché a una fracción del costo. El contenido debe coincidir exactamente: un carácter único cambiado antes del punto de caché invalida ese caché y fuerza una escritura fresca. Eso es por qué los candidatos más fuertes para cachés son las partes de una solicitud que raramente cambian, como un prompt del sistema largo, un conjunto grande de definiciones de herramientas, o un documento de referencia que haces varias preguntas sobre.

Activas el caché marcando un punto de ruptura de caché; no hay configuración global que lo active. En la API de Mensajes agregas un campo de `cache_control` de tipo `ephemeral` al último bloque que quieres cacheado; esto cachea todo hasta e incluyendo ese bloque. Puedes colocar hasta cuatro puntos de ruptura. La solicitud se procesa en un orden fijo de herramientas, prompt del sistema, y mensajes, así que un punto de ruptura después de las herramientas cachea las definiciones de herramientas mientras mantiene los mensajes dinámicos.

El caché tiene un límite de tiempo. La vida útil de caché predeterminada es cinco minutos desde la última lectura. Una vida útil de una hora de opt-in está disponible estableciendo un `ttl` de `1h` en el punto de ruptura. El predeterminado de cinco minutos se adapta a un modelo de ir-y-venir donde solicitudes llegan cada pocos minutos, dado que cada lectura reinicia el reloj. La opción de una hora se adapta a una carga de trabajo con brechas más largas entre solicitudes, como un agente que pausa entre pasos, donde la ventana de cinco minutos expiraría antes de la próxima solicitud. Si la ventana expira antes de la próxima solicitud, se te deja pagando el costo de escritura de nuevo sin beneficio de lectura. Por favor nota que el caché solo se aplica sobre un umbral de token mínimo (1,024 tokens para la mayoría de modelos actuales) así que prompts cortos no serán cacheados incluso si se establece un punto de ruptura.

## Generación aumentada por recuperación: cómo Claude incorpora solo el conocimiento que una solicitud necesita

El problema de costo de contexto que justo viste con servidores MCP es el mismo que un cuerpo grande de material de referencia crea. Un modelo lee todo en su ventana de contexto para cada solicitud, así que cuantos más documentos cargues por adelantado, más contexto se usa, y menos espacio queda para el trabajo.

La **Generación Aumentada por Recuperación**, usualmente acortada a RAG, es el patrón que resuelve esto. En lugar de cargar cada documento en contexto, el sistema almacena el material fuera de la ventana de contexto, encuentra las partes más relevantes a la solicitud actual, y suministra solo esas partes al modelo al tiempo de solicitud. El modelo entonces genera su respuesta a partir de ese trozo recuperado en lugar de la biblioteca completa.

RAG viene en dos formas:

**RAG Clásica** hace el trabajo difícil por adelantado. Antes de que nadie haga una pregunta, el material de fuente se divide en trozos, y cada trozo se convierte en un conjunto de números (llamado una incrustación) que captura su significado matemáticamente. Esos números se almacenan en una base de datos. Cuando un usuario hace una pregunta, el sistema convierte la pregunta en el mismo tipo de números, luego encuentra cuáles trozos tienen los números más similares. Piénsalo como una bibliotecaria que, antes de que la biblioteca abra, ya ha leído cada libro y ha escrito una tarjeta de resumen precisa para cada capítulo, así que cuando llegas con una pregunta, puede jalar las tarjetas correctas instantáneamente.

**Búsqueda Agentiva** omite la indexación por adelantado completamente. No hay base de datos pre-construida. En lugar de eso, el modelo descubre qué necesita el momento en que preguntas, luego va y lo obtiene: buscando fuentes en vivo, leyendo documentos bajo demanda, incorporando resultados a medida que la tarea se desarrolla. Piénsalo como un investigador que, cuando haces una pregunta, va y encuentra la respuesta ellos mismos en lugar de consultar tarjetas pre-preparadas.

Podrías ya haber encontrado búsqueda agentiva sin conocer su nombre. En Claude Code, cuando estás conectado a muchas herramientas externas (servidores MCP), Claude no carga cada definición de herramienta por adelantado; eso sería demasiado para contener a la vez. En lugar de eso, descubre y carga solo las herramientas que necesita para la tarea actual. Claude.ai Projects funciona de la misma manera para documentos subidos: cuando la base de conocimiento de un proyecto crece más grande que puede caber en la ventana activa, muestra solo los fragmentos de documento más relevantes para cada pregunta en lugar de cargar todo.

Ambos enfoques hacen la misma cosa fundamental; ambos encuentran un trozo relevante de material y generan de él. La diferencia es el tiempo: la RAG clásica encuentra el trozo haciendo corresponder contra un índice construido por adelantado; la búsqueda agentiva lo encuentra buscando en el momento de necesidad.

Dos propiedades de recuperación vale la pena entender antes de que alcances por ella:

- **Escalas.** Conforme tu material de fuente crece, el costo de cada solicitud permanece plano, porque el modelo solo recibe el trozo relevante a esa pregunta, no la biblioteca completa. Una base de conocimiento puede crecer a miles de documentos y una sola pregunta aún tira de vuelta aproximadamente la misma cantidad de texto. Eso es lo que permite que la recuperación funcione a escala: la fuente puede seguir creciendo sin que la solicitud crezca con ella.
- **Es solo tan buena como lo que encuentra.** El modelo razona sobre el trozo que recibe. Si el paso de recuperación pierde el documento que necesitabas, el modelo nunca lo ve. Esto significa que cómo organizas tu material es importante: archivos con nombres vagos ("notes_final_v3.pdf") son más difíciles de encontrar que archivos con nombres descriptivos ("Política de reembolso de Q3, actualizado agosto 2024"). Agrupar archivos relacionados juntos ayuda también. La recuperación buena comienza con una fuente bien organizada.

## Alcance de configuración: quién carga el servidor

El alcance determina cuáles usuarios y proyectos cargan el servidor. Cada alcance corresponde a una ubicación de configuración diferente.

- **Alcance local** almacena la configuración del servidor en `~/.claude.json` bajo la ruta del proyecto actual. Se aplica solo al proyecto en que actualmente estás trabajando y no se comparte con compañeros de equipo. Este es el alcance correcto para un servidor atado a un contexto específico de proyecto que no estés listo para confirmar al repositorio, o para herramientas que solo tengan sentido en un proyecto.
- **Alcance de usuario** almacena la configuración del servidor en tus configuraciones personales de Claude y la hace disponible en todos tus proyectos. Aún es personal: los compañeros de equipo no la ven, y no se escribe en el repositorio. Este es el alcance correcto para una utilidad personal que uses en cada proyecto, como una herramienta de base de datos local o un script del que dependerás independientemente de cuál código base estés trabajando.
- **Alcance de proyecto** escribe la configuración del servidor a un archivo `.mcp.json` en la raíz del repositorio. Cuando ese archivo se confirma al control de versiones, todos los que clonan el repositorio obtienen el mismo servidor automáticamente. Este es el alcance correcto para un servidor que todo el equipo puede acceder, porque la configuración viaja con el código. Una cosa a mantener en mente: un servidor con alcance de proyecto se ejecuta desde la máquina de cada compañero de equipo. Para un servidor stdio, la configuración versionada almacena el comando de lanzamiento, y cada clon genera su propio subproceso local, así que cada compañero de equipo necesita el tiempo de ejecución (como Node para un servidor lanzado por npx) instalado localmente.
- **Alcance empresarial** se despliega a través de una configuración manejada centralizada controlada por un administrador. Los administradores pueden empujar servidores a todos los usuarios en la organización sin pasos de configuración individual. Este es el alcance correcto para servicios internos compartidos, herramientas de seguridad, o cualquier servidor que debe estar presente en toda la organización y no puede dejarse a desarrolladores individuales para configurar.

## Reglas de permiso que apuntan a una herramienta MCP individual, no al servidor completo

Conectar un servidor expone su lista de herramientas completa, pero raramente quieres que el agente alcance cada una de esas herramientas sin revisar. La capa de permiso de la sección de modos de permiso se extiende a herramientas MCP, y las reglas pueden nombrar una herramienta individual en lugar del servidor completo.

Una herramienta MCP se identifica en una regla de permiso por su servidor y nombre de herramienta: `mcp__server__tool`. Una regla de permiso en `mcp__github__create_issue` permite que esa herramienta se ejecute sin una solicitud mientras cada otra herramienta en el servidor de GitHub aún solicita. Una regla de negación en una herramienta capaz de escritura la bloquea mientras herramientas de solo-lectura en el mismo servidor permanecen disponibles. Esto es cómo conectas un servidor amplio pero mantienes el agente dentro de una tajada estrecha de lo que puede hacer. Una regla de negación sobre una herramienta anula una regla de permiso sobre el servidor.

El conector MCP de la API es otro control útil. Si estás alcanzando el servidor a través del conector MCP de la API, un objeto de `mcp_toolset` te permite establecer una bandera `enabled` por herramienta. Esa bandera te permite registrar un servidor pero exponer solo las herramientas específicas que quieres que el modelo vea. Una regla de permiso decide si una herramienta expuesta puede ejecutarse; la bandera `enabled` decide si el modelo llega siquiera a ver la herramienta. El primero es un control de gobernanza, el segundo es un control de costo de contexto y alcance. Estos controles a menudo se usan juntos. Siempre verifica la sintaxis exacta de la regla y el header de beta del conector contra la documentación antes de publicar.

## El Servidor MCP de GitHub: transporte, alcance y autenticación en un ejemplo concreto

El servidor MCP de GitHub es un servidor remoto mantenido por GitHub que expone herramientas para gestión de repositorio incluyendo revisión de solicitudes de extracción, apertura de problemas, búsqueda de código, y más. Al recorrer el proceso de conexión, puedes ver cómo transporte, alcance y autenticación trabajan juntos en un servidor mantenido por alguien más.

El servidor de GitHub usa transporte HTTP porque está alojado remotamente por GitHub. Lo registras proporcionando la URL del servidor, y el cliente se conecta a través de la red. Para alcance, elige alcance de proyecto cuando todo tu equipo necesita acceso a la misma herramienta de repositorio, y alcance local cuando solo tú necesitas acceso al servidor.

La autenticación para el servidor MCP de GitHub usa un Token de Acceso Personal. Generas el token en GitHub, luego lo pasas como un token Bearer en el encabezado de solicitud de tu configuración MCP. El token debe ser suministrado a través de una variable de entorno y referenciado en el archivo de configuración. No debe incluirse en línea en `.mcp.json`, porque un token escrito directamente en un archivo versionado entra en el historial del repositorio y no puede ser eliminado sobrescribiendo el archivo en una confirmación posterior.

OAuth es un mecanismo de autenticación diferente, usado por servidores donde el servicio autentica usuarios individuales a través de un flujo de inicio de sesión basado en navegador. Linear es un ejemplo de un servidor que usa este patrón. Cuando te conectas a un servidor MCP de Linear por primera vez, el cliente redirige a la página de inicio de sesión de Linear. Después de que apruebes el acceso, se emite un token y se almacena automáticamente. Ninguna credencial es copiada o manejada a mano. OAuth es el patrón correcto para cualquier integración donde el modelo de autorización del servicio está atado a la identidad del usuario.

GitHub MCP usa una credencial de servicio que generas y almacenas; Linear MCP inicia un flujo de inicio de sesión que maneja la credencial para ti. Ambos son servidores HTTP remotos, y ambos siguen la misma lógica de transporte y alcance. El paso de autenticación es lo que difiere.

## La referencia de configuración MCP

La tabla a continuación captura decisiones de transporte y alcance para cada contexto de despliegue.

| Contexto | Transporte | Alcance | Ubicación de Configuración | Manejo de Secretos |
|---------|-----------|--------|---------------------------|------------------|
| Herramienta local personal (se ejecuta en tu máquina solamente) | stdio | Local | `~/.claude.json` (entrada por proyecto) | Solo variables de entorno. Nunca en archivo de configuración. |
| Servidor de equipo compartido (todos los compañeros de equipo se conectan al mismo servicio) | HTTP | Proyecto (`.mcp.json`) | `.mcp.json` confirmado a la raíz del repo | OAuth o variables de entorno. Las claves API nunca deben incluirse en .mcp.json. |
| Experimento personal (no listo para compartir) | stdio o HTTP | Local | Configuración personal de Claude | Solo variables de entorno. |
| Despliegue de toda la organización (admin-manejado) | HTTP | Empresarial | Configuración manejada (admin-controlada) | Secretos manejados por administrador. Configuración cerrada para prevenir anulación. |

**Nota:**
Costo · Complejidad · Riesgo

**Costo:** Cada servidor MCP conectado agrega sus definiciones de herramientas a la ventana de contexto. Cuantos más servidores conectados, más grande cada solicitud. Carga solo los servidores que una tarea dada necesita.
**Complejidad:** Transporte y alcance son decisiones independientes, pero interactúan: un servidor stdio no puede ser limitado a alcance de proyecto para compartir porque solo se ejecuta en una máquina. Empareja transporte a dónde se ejecuta el servidor antes de elegir alcance.
**Riesgo:** Confirmar una clave API dentro de `.mcp.json` al control de versiones es el error más común de esta sección. La clave viaja al historial del repositorio, donde rotarla después no es suficiente para eliminar la exposición. Los secretos van en variables de entorno. El archivo de configuración solo contiene la dirección del servidor.

**Maneja bien**
Una integración reutilizable que quieres usar a través de múltiples sesiones de Claude Code y compartir con el equipo, donde la capacidad es lo suficientemente estable como para mantenerla como un proceso separado. El servidor de GitHub es un excelente ejemplo.

**Agrega costo o complejidad**
Los equipos que no están manejando los secretos de entorno con cuidado deben ser vigilados de cerca. Agregar servidores MCP incrementa la cantidad de lugares donde un secreto podría manejarse mal. El riesgo se concentra en el archivo `.mcp.json`, que se confirma al repositorio.

**Usa un enfoque diferente**
Una tarea puntual donde la lógica de la herramienta puede vivir directamente en el código base y no necesita ser reutilizada a través de sesiones o aplicaciones. Para una integración de un solo proyecto usada por una sola persona, cablear la herramienta directamente en la llamada a la API puede ser más simple que mantener un servidor.

---

`[TAG FAILURE]` Ten cuidado - Servidores MCP · 4 min

## La clave API que viajó con el archivo de configuración hasta el repositorio

**Configuración**
El servidor estaba funcionando, el equipo necesitaba una configuración compartida, y limpiar el método de autenticación se sentía como algo que podías hacer después de la entrega. Ese atajo convirtió una clave API temporal escrita en duro en una exposición de credencial compartida en el momento en que el archivo de configuración fue confirmado al repositorio.

## Qué pasó

Un desarrollador se conectó a un servidor MCP de un almacén de datos usando una clave API de cuenta de servicio. Para poner el servidor a funcionar rápido durante la configuración, la clave se colocó directamente en el archivo de configuración `.mcp.json`. El plan era moverla a una variable de entorno antes de compartir la configuración con el equipo.

El desarrollador confirmó el `.mcp.json` al repositorio del proyecto para que sus compañeros de equipo pudieran conectarse al mismo servidor clonando el repo, y la clave quedó incluida en el repositorio junto con él. Dentro de 48 horas, tres compañeros de equipo habían clonado el repositorio, y un pipeline de CI había disparado un clon nuevo. La clave estaba ahora en cuatro lugares: la máquina local, el historial del repositorio, las tres máquinas de los compañeros de equipo, y el sistema de archivos del runner de CI.

Después de darse cuenta de esto, el desarrollador movió la clave a una variable de entorno, actualizó el `.mcp.json`, y confirmó el archivo corregido al repositorio. Pero la clave seguía en el historial de commits, y la cuenta de servicio tuvo que ser rotada. La rotación rompió dos servicios externos que habían sido configurados con la misma clave, y esto tomó tres horas de trabajo para arreglar.

El `.mcp.json` corregido usa una referencia a variable de entorno en lugar de un valor en línea:

**Antes (no usar)**
```json
{
  "type": "http",
  "url": "https://warehouse.internal/mcp",
  "headers": {
    "Authorization": "Bearer sk-abc123..."
  }
}
```
_............ credencial en línea_

**Después (correcto)**
```json
{
  "type": "http",
  "url": "https://warehouse.internal/mcp",
  "headers": {
    "Authorization": "Bearer ${WAREHOUSE_MCP_TOKEN}"
  }
}
```
_............ referencia a variable de entorno_

**Qué debes tener en cuenta**
Las claves API confirmadas a un archivo de configuración quedan registradas en el historial del repositorio. Sobrescribir el archivo en un commit posterior no elimina la clave del historial; solo la elimina de la versión actual. Cualquier credencial escrita en línea en un archivo versionado debe tratarse como comprometida y debe rotarse. El patrón correcto es poner el valor en una variable de entorno y referenciar la variable en el archivo de configuración.

Para evitar que el agente escriba valores de credenciales directamente en archivos versionados, usa dos capas. Primero, agrega una instrucción de convención a CLAUDE.md indicando que los valores de credenciales nunca deben escribirse en línea en `.mcp.json`. Esto señala la regla al modelo durante cada sesión. Segundo, respalda esa instrucción con un gancho PreToolUse que inspeccione las operaciones de escritura y edición sobre `.mcp.json` en busca de patrones que parezcan valores de credenciales en línea, y que salga con un código que bloquee la operación si detecta uno. La instrucción de CLAUDE.md comunica la intención; el gancho la hace cumplir de forma determinista sin importar lo que el modelo decida hacer. Esta es la misma distinción entre gancho e instrucción cubierta en la sección de contexto de proyecto duradero: una instrucción en CLAUDE.md puede seguirse de forma inconsistente cuando el archivo crece o el contexto cambia, y un gancho se dispara en cada llamada de herramienta relevante sin excepción.

---

`[TAG CHECKPOINT]` Punto de control - Servidores MCP · 4 min

# Punto de control 5: empareja transporte y alcance con cada escenario de despliegue

Inténtalo ahora. Para cada escenario de despliegue a continuación, selecciona el transporte y el alcance correctos.

Se proporcionan fragmentos de configuración etiquetados.

| Escenario de despliegue | Opciones |
|-------------------------|----------|
| Una herramienta local de consultas SQLite que usas solo en tu máquina de desarrollo. | HTTP + Proyecto (`.mcp.json`) / HTTP + Empresarial (configuración manejada) / stdio + Local / stdio o HTTP + Local |
| Un servicio de búsqueda de código alojado en la infraestructura de tu empresa al que todo el equipo de ingeniería debería acceder. | HTTP + Proyecto (`.mcp.json`) / HTTP + Empresarial (configuración manejada) / stdio + Local / stdio o HTTP + Local |
| Un servidor experimental de web-scraping que estás probando esta semana contra un repositorio específico, que no está listo para compartir. | HTTP + Proyecto (`.mcp.json`) / HTTP + Empresarial (configuración manejada) / stdio + Local / stdio o HTTP + Local |
| Un servidor de escaneo de seguridad que el equipo de TI de tu organización necesita desplegar en la instalación de Claude Code de cada desarrollador. | HTTP + Proyecto (`.mcp.json`) / HTTP + Empresarial (configuración manejada) / stdio + Local / stdio o HTTP + Local |

---

`[TAG TEACHING]` Enseñanza - Integración Empresarial · 18 min

# Conectando Claude a sistemas empresariales y autenticando de manera segura

Anteriormente el módulo cubrió cómo construir un servidor MCP y configurar su transporte y alcance. Para un servidor usado solo por tu equipo en un proyecto interno, el ejemplo de token de acceso personal de GitHub cubre el patrón de autenticación.

Esta sección cubre qué cambia cuando la integración debe funcionar en un entorno regulado: las preguntas de identidad, manejo de secretos, y residencia de datos que un prototipo típicamente ignora se convierten en requisitos que deben ser respondidos en el despliegue de producción.

## Por qué la integración empresarial es diferente de un prototipo funcional

Un prototipo que conecta Claude a un servicio interno responde una pregunta: ¿funciona la conexión? Una integración empresarial de producción debe responder varias preguntas adicionales: ¿Como quién está actuando el modelo, y es esa identidad auditable? ¿A qué datos puede acceder, y por dónde salen esos datos de la organización? ¿Puede un administrador cerrar la configuración para que ningún desarrollador individual pueda cambiar la configuración de autenticación? ¿Puede el acceso ser registrado de una manera que satisfaga una auditoría de cumplimiento?

Estas preguntas no son nuevas para software empresarial; tienen los mismos requisitos de identidad, acceso, y cumplimiento que aplican a cualquier sistema externo tocando datos regulados. Tratarlas como parte del diseño de integración es lo que separa una demostración de algo listo para despliegue.

## Patrones de autenticación por tipo de servicio

El mecanismo de autenticación correcto depende de dónde se ejecuta el servicio y qué modelo de identidad soporta. Selecciona cada pestaña para ver el patrón y cuándo usarlo.

**Para Servicios SaaS con Identidad de Usuario**
Usa OAuth. El servidor MCP devuelve 401 Unauthorized para señalar que se requiere autenticación. El cliente inicia un flujo de inicio de sesión basado en navegador. Después de que el usuario aprueba el acceso, se emite un token y se almacena. Nadie copia un secreto a mano; el flujo OAuth es el patrón esperado para servicios en la nube, herramientas SaaS, y cualquier integración donde la identidad del usuario es parte del modelo de autorización. El servidor MCP de Linear visto antes en este módulo usa este patrón; el servidor de GitHub, en contraste, se autentica con un token de acceso personal pasado como encabezado.

**Para APIs Internas con Identidad de Servicio**
Usa una clave API pasada a través de una variable de entorno. La clave identifica la cuenta de servicio. La clave nunca debe incluirse en un archivo de configuración; vive en el entorno en el punto de ejecución. Para un pipeline de CI que usa el Agent SDK, la clave es inyectada como un secreto por el runner del pipeline, no queda incrustada en el código.

**Para Herramientas Locales**
Transporte stdio sin autenticación de red. El límite de seguridad es el modelo de permisos del sistema de archivos. Una regla de negación en los archivos de configuración es la capa de gobernanza.

Manejar el secreto en sí mismo es la otra mitad de una autenticación segura. Una credencial nunca viaja con la configuración que la referencia: el archivo de configuración contiene solo una referencia a una variable, y el valor vive en una variable de entorno o en un gestor de secretos administrado que se inyecta en el punto de ejecución. Almacena las claves de cuentas de servicio en un gestor de secretos en lugar de en archivos, y rótalas según un calendario e inmediatamente después de cualquier sospecha de exposición. Si una clave se filtra, debes rotarla, pero recuerda que no puedes rotar un valor incrustado en código ya confirmado al repositorio. Limita cada credencial al acceso más estrecho que su tarea necesite, para que una clave comprometida alcance solo lo que esa única integración requería.

## Manejando el secreto después de la autenticación: almacenamiento, rotación y separación de la configuración

Elegir el patrón de autenticación correcto establece la conexión, pero mantenerla es un problema aparte. La filtración de la clave MCP mencionada antes no fue una mala elección de método de autenticación: fue una credencial que vivía en el lugar equivocado y que no se pudo limpiar una vez que se propagó. Tres prácticas evitan que eso ocurra, y cada una aborda una manera específica en que una credencial queda expuesta.

La primera práctica es la **separación**: una credencial nunca viaja con la configuración que la referencia. El archivo de configuración contiene una referencia a una variable, y el valor vive en algún lugar donde el archivo no llega. Esta es la regla que rompió el fallo de la clave filtrada. La razón por la que importa es mecánica: los archivos de configuración se confirman al repositorio, se comparten y se clonan. Un valor escrito en línea viaja junto con cada una de esas copias, y un valor confirmado al repositorio entra en el historial de una forma que sobrescribirlo no elimina. Si mantienes el valor fuera del archivo, entonces el archivo sigue siendo seguro de compartir.

La segunda práctica es **a dónde va el valor** una vez que está fuera del archivo. Para un valor que vive solo en una máquina o en una sola ejecución de pipeline, basta con una variable de entorno inyectada en el punto de ejecución: el runner de CI la establece como secreto, la configuración la lee por nombre, y nada se escribe en disco. Para un valor que varios servicios o personas necesitan, un gestor de secretos es mejor. Un gestor de secretos es un servicio administrado que guarda credenciales, las devuelve en tiempo de ejecución a quienes están autorizados a solicitarlas, y registra quién leyó qué. Centraliza el valor, de modo que una sola rotación actualiza a todos los consumidores a la vez, y elimina las copias que se acumulan cuando cada servicio guarda su propia credencial en su propio archivo. Recurre a una variable de entorno cuando el secreto sea local y de corta vida, y a un gestor de secretos cuando el secreto sea compartido o deba poder auditarse.

La tercera práctica es la **rotación**: reemplazar una credencial por una nueva según un calendario e inmediatamente después de cualquier sospecha de exposición. La rotación es la única respuesta apropiada ante una clave filtrada, porque una clave que ha sido expuesta no puede volver a hacerse secreta. Debes emitir una nueva. Por esto el patrón de credencial en línea sale tan caro: un valor incrustado en código ya confirmado al repositorio no puede rotarse limpiamente, dado que el valor antiguo permanece en el historial y todos los consumidores que lo tienen escrito en duro se rompen al cambiarlo. Una credencial leída desde un gestor de secretos o desde una variable de entorno rota sin tocar el código que la usa, porque el código referencia el valor por nombre y el nombre no cambia cuando cambia el valor que hay detrás.

Dos hábitos pueden abaratar la rotación: limita cada credencial al acceso más estrecho que su tarea necesite, para que una clave que se filtre alcance solo lo que esa integración requería. Mantén un registro de qué servicios usan cada credencial, para que una rotación no tenga que descubrir sus consumidores sobre la marcha.

El fallo de la clave filtrada visto antes en el módulo identificó el error: una credencial escrita en línea en un archivo versionado. Para evitar que esto ocurra, aplica estas tres prácticas: la separación mantiene el valor fuera del archivo, un gestor de secretos o una variable de entorno le da al valor un hogar que el archivo no comparte, y la rotación solo puede ayudar en la recuperación cuando las dos primeras se sostienen.

## Qué industrias reguladas agregan encima de una autenticación que funciona

Un cliente de servicios financieros o de atención médica hace más preguntas que "¿funciona la autenticación?". Pregunta dónde se procesan los datos, cómo se registra el acceso, y si un administrador puede cerrar la configuración para que un desarrollador no pueda cambiar la configuración de autenticación durante una ventana de auditoría.

La configuración administrada empresarial de secciones anteriores responde la última pregunta: una configuración de servidor desplegada por un administrador que no puede ser anulada por usuarios individuales significa que la configuración de autenticación es consistente en toda la organización y no depende de que el archivo de configuración de cada desarrollador sea correcto.

Los ganchos de auditoría responden la pregunta del registro: un gancho PostToolUse que registra cada llamada de herramienta y sus parámetros en un almacén de auditoría provee el registro que una revisión de cumplimiento necesita. El gancho se dispara determinísticamente en cada llamada, sin importar lo que el modelo decida, y el registro no es algo que el modelo pueda saltarse.

La residencia de datos responde la pregunta del procesamiento: un servidor configurado con un endpoint HTTP en una región específica, combinado con un despliegue de plataforma que fija el procesamiento a esa región, le da a un revisor de cumplimiento una respuesta verificable sobre a dónde van los datos. Por esto el requisito de infraestructura y la elección de plataforma vistos antes en el módulo importan en el momento de la auditoría, no solo en el momento de la construcción.

## Modernización de código: aplicando el módulo completo al cambio heredado

La modernización de código es un caso de prueba útil para todo lo que este módulo cubre, porque concentra los riesgos que cada herramienta fue diseñada para manejar. Los cambios a gran escala sobre una base de código heredada y desconocida cargan un alto radio de explosión, dependencias impredecibles, y reversibilidad limitada. Las herramientas de este módulo abordan cada uno de esos riesgos directamente cuando las aplicas antes de que el trabajo comience. El bucle de explorar, planificar y programar es el flujo de trabajo central para este tipo de trabajo. El modo de planificación mantiene al agente en la fase de exploración de solo lectura mientras tú construyes confianza en sus cambios. Puedes revisar las ediciones propuestas, identificar cualquier cosa que toque rutas que no esperabas, y objetar antes de que un solo archivo sea modificado. Los ganchos hacen cumplir barreras de protección que impiden ediciones a rutas específicas durante las fases más sensibles. CLAUDE.md carga las convenciones de los nuevos patrones objetivo, de modo que el agente las aplique consistentemente a lo largo de todo el alcance de los cambios en lugar de derivar de vuelta a los patrones heredados que lee en el código circundante.

Un enfoque responsable de delimitación para trabajo de alto riesgo aborda tres preguntas antes de que la sesión comience.

- ¿Cuál es el radio de explosión si algo sale mal: qué sistemas dependen del código que se está cambiando, y qué se rompe aguas abajo si una edición es incorrecta?
- ¿Cómo se auditan los cambios: hay un gancho PostToolUse registrando cada llamada de herramienta, y ese registro satisface a quien necesite revisar lo que el agente tocó?
- ¿Quién aprueba cada fase antes de que comience la siguiente? El modo de planificación hace cumplir el límite entre exploración y ejecución, pero la decisión de aprobación en sí misma te toca a ti definirla y documentarla antes de que el trabajo comience.

Estas preguntas no son específicas del trabajo de modernización. Aplican a cualquier tarea agéntica de alto riesgo. La modernización de código las hace evidentes porque el alcance es grande, la base de código es desconocida, y el costo de equivocarse es alto.

## La lista de verificación de autenticación e integración

La tabla a continuación nombra las decisiones clave para cada tipo de servicio.

| Tipo de servicio | Método de autenticación | Dónde viven los secretos | Qué se registra | Quién puede cerrar la configuración |
|---------|-----------|--------|---------------------------|------------------|
| Remoto con identidad de usuario (SaaS, nube) | OAuth | Token emitido por el proveedor OAuth y almacenado por el cliente. | Gancho PostToolUse hacia el registro de auditoría. | El administrador mediante configuración manejada empresarial. |
| Remoto con identidad de servicio (API interna) | Clave API en una variable de entorno | Solo en el entorno. Nunca en configuración versionada. | Gancho PostToolUse hacia el registro de auditoría. | El administrador mediante configuración manejada empresarial. |
| Local (sistema de archivos, base de datos local) | Permisos del sistema de archivos | No se necesita credencial. Las reglas de negación imponen el acceso a rutas. | Gancho PostToolUse hacia el registro de auditoría. | Reglas de negación en la configuración manejada empresarial. |

**Nota:**
Costo · Complejidad · Riesgo

**Costo:** Los flujos OAuth agregan un paso de configuración de una sola vez por usuario y por servicio. La gestión de claves API requiere un proceso de rotación de secretos, y el registro de auditoría a través de ganchos PostToolUse agrega una pequeña sobrecarga a cada llamada de herramienta.
**Complejidad:** Los entornos regulados agregan requisitos que no aparecen en un prototipo. Identificarlos durante la delimitación es la disciplina que mantiene las integraciones en calendario.
**Riesgo:** El riesgo se concentra cuando un prototipo avanza hacia producción. Un sistema que usa credenciales escritas en duro, no tiene registro de auditoría, y no puede cerrarse centralmente no pasará la revisión de seguridad de un cliente regulado. Los arreglos no son difíciles, pero requieren atención antes de la revisión.

**Maneja bien**
Cualquier integración que toque datos que le importen a un cliente regulado, donde el mismo herramental ya soporta configuración manejada empresarial y ganchos de auditoría. Delimitar los requisitos de seguridad por adelantado agrega poca sobrecarga y evita que la integración se atasque en la revisión final.

**Agrega costo o complejidad**
Los equipos que no están familiarizados con flujos OAuth o con la gestión empresarial de secretos. Estos patrones requieren coordinación con los equipos de seguridad o de TI en la mayoría de las organizaciones reguladas, y el calendario necesita tomar eso en cuenta.

**Usa un enfoque diferente**
Un prototipo o prueba de concepto que nunca verá datos de producción. La lista de verificación completa de integración empresarial no se justifica para una integración solo de demostración, pero aplicar el hábito de la variable de entorno para los secretos no cuesta nada y es una buena práctica.

---

`[TAG FAILURE]` Ten cuidado - Integración Empresarial · 3 min

## La conexión OAuth que funcionó en staging y falló en producción

**Configuración**
La conexión OAuth funcionaba de extremo a extremo en staging, así que moverla a producción se sintió como una transición rutinaria. Lo que el equipo pasó por alto fue que los URI de redirección de OAuth se registran por host y a menudo se gobiernan por entorno, así que el éxito en staging no significaba que el host de producción estuviera autorizado para completar el flujo de inicio de sesión.

## La conversación que reveló el paso faltante
El siguiente intercambio ocurrió en una revisión posterior al despliegue, después de que la integración MCP falló en producción. La integración había pasado todas las pruebas de staging.

Revisor de seguridad: "Todos los intentos de inicio de sesión en producción a través de la conexión MCP están fallando. El error es una discordancia de URI de redirección. ¿Dónde se registró la aplicación OAuth?"
Desarrollador: "La registré para staging.mycompany.com durante el desarrollo. Nos movimos a producción la semana pasada. La conexión funcionó durante todo staging."
Revisor de seguridad: "Ese es el problema. El proveedor OAuth solo acepta los URI de redirección que hayas registrado explícitamente, y production.mycompany.com no está en la lista de permitidos. Cada intento de inicio de sesión llega a la verificación, falla la coincidencia de URI, y regresa en bucle a la pantalla de inicio de sesión."
Desarrollador: "¿Entonces solo necesito agregar el URI de producción al registro de la aplicación?"
Revisor de seguridad: "Sí, y antes de hacerlo, verifica si el registro de tu aplicación de staging debería ser una aplicación separada de la de producción. La mayoría de los clientes empresariales exigen registros de aplicación OAuth separados para cada entorno como parte de su política de seguridad, así que usar el mismo registro de aplicación entre entornos es el segundo problema que yo señalaría."

El desarrollador había probado el flujo OAuth de extremo a extremo en staging y confirmado que funcionaba, lo que significa que el fallo en producción no fue un defecto de código. En cambio, fue un paso de configuración que aplica por host y por entorno, y el desarrollador no había sabido que debía hacerlo para producción.

**Qué debes tener en cuenta**
Los URI de redirección de OAuth se registran por host, así que una conexión OAuth que funciona en staging no significa que la conexión de producción esté configurada. Antes de mover cualquier integración MCP autenticada con OAuth a un nuevo entorno, agrega el URI de redirección del nuevo host al registro de la aplicación OAuth. Para clientes empresariales regulados, verifica si se requieren registros de aplicación OAuth separados para staging y producción. Incluye el paso del registro en la lista de verificación de despliegue para que no se descubra en el primer intento de inicio de sesión en producción.

---

`[TAG CHECKPOINT]` Punto de control - Integración Empresarial · 3 min

# Punto de control 6: diagnostica el fallo de autenticación a partir de una traza

Inténtalo ahora: lee la traza de conexión a continuación.

Nombra el mecanismo del fallo de autenticación, y luego selecciona el arreglo dirigido correcto entre tres opciones.

**Traza de conexión**
```
[MCP Client] Connecting to https://data-api.internal/mcp ...
[MCP Client] GET /auth/token, 401 Unauthorized
[MCP Client] Reading credential from: /home/jenkins/.config/mcp-credentials.json
[MCP Client] Credential value: WAREHOUSE_TOKEN= sk-****[redacted]
[MCP Client] Retrying with credential, 401 Unauthorized
[MCP Client] Connection failed after 3 attempts
```

- **A) Arreglo A:** Rota la clave API y actualiza `/home/jenkins/.config/mcp-credentials.json` con el nuevo valor.
- **B) Arreglo B:** Rota la clave rechazada, luego saca la credencial del archivo e inyéctala como una variable de entorno en la configuración del runner del pipeline de CI. Actualiza la configuración MCP para que referencie la variable.
- **C) Arreglo C:** Cambia de autenticación por clave API a OAuth para este servicio.

---

`[TAG CUMULATIVE]` Tarea Acumulativa - Punto de control · 6 min

# Tarea de integración acumulativa: punto de control

La integración a continuación tiene tres bugs plantados en las capas que este módulo cubre: uno en la capa de configuración de Claude Code, uno en la capa de plugin o empaquetamiento, y uno en la capa de MCP o autenticación.

Para cada archivo: identifica el bug y escribe una oración describiendo qué hace o qué deja de hacer en tiempo de ejecución.

**Archivo 1: .claude/settings.json**
```json
{ "permissions": { "defaultMode": "bypassPermissions", "deny": ["Read(.env.production)"] } }
```

**Archivo 2: .claude/skills/migration-validate/SKILL.md**
```markdown
---
name: migration-validate
description: Validates migration scripts before they run against production.
---

## Steps
1. Run: /Users/priya/scripts/validate-migration.sh
2. Report validation results.
```

**Archivo 3: .mcp.json**
```json
{
  "mcpServers": {
    "data-warehouse": {
      "type": "http",
      "url": "https://warehouse.internal/mcp",
      "headers": {
        "Authorization": "Bearer sk-prod-warehouse-abc123"
      }
    }
  }
}
```

**Respuesta modelo**

**Archivo 1 (settings.json):** `defaultMode` está en `bypassPermissions`; elimina cada solicitud de confirmación en una estación de trabajo de producción, incluyendo las de operaciones destructivas. La regla de negación para `.env.production` es correcta; solo el modo está mal.

**Archivo 2 (SKILL.md):** El paso 1 usa una ruta absoluta, `/Users/priya/scripts/validate-migration.sh`; esta ruta existe solo en la máquina de la autora y no se resolverá en la máquina de ningún compañero de equipo después de que clonen el proyecto.

**Archivo 3 (.mcp.json):** La clave API `sk-prod-warehouse-abc123` está escrita en línea en el encabezado Authorization; entra en el historial del repositorio, donde no puede eliminarse sobrescribiendo el archivo en una confirmación posterior, y debe tratarse como comprometida.

¿Cuántos atrapaste?

---

`[TAG CUMULATIVE]` Tarea Acumulativa - Ensamblaje · 6 min

# Tarea de integración acumulativa: ensamblaje

Ahora escribe la versión corregida de los tres archivos.

Produce el contenido corregido completo para `settings.json`, `SKILL.md` y `.mcp.json`.

**Respuesta modelo**

**Archivo 1: settings.json (corregido)**
```json
{ "permissions": { "defaultMode": "acceptEdits", "deny": ["Read(.env.production)"] } }
```

**Archivo 2: SKILL.md (corregido)**
```yaml
---
name: migration-validate
description: Validates migration scripts before they run against production.
---

## Steps
1. Run: $CLAUDE_PROJECT_DIR/scripts/validate-migration.sh
2. Report validation results.
```

**Archivo 3: .mcp.json (corregido)**
```json
{
  "mcpServers": {
    "data-warehouse": {
      "type": "http",
      "url": "https://warehouse.internal/mcp",
      "headers": {
        "Authorization": "Bearer ${WAREHOUSE_MCP_TOKEN}"
      }
    }
  }
}
```

`settings.json` establece `defaultMode` en `acceptEdits` dentro de `permissions`; auto-aprueba ediciones de archivos y comandos comunes del sistema de archivos, pero pone puerta a los comandos de shell destructivos, el equilibrio correcto para una estación de trabajo de migración de producción. La skill usa `$CLAUDE_PROJECT_DIR` para que la ruta se resuelva desde la raíz del proyecto en cualquier máquina después de clonar. La configuración MCP referencia la credencial como una variable de entorno, así que nunca se confirma al historial del repositorio.

¿Cómo se comparó tu ensamblaje?

---

`[TAG MODULE]` Recapitulación - Siete Conclusiones Clave · 6 min

# Siete conclusiones clave

Una conclusión por sección, atando el módulo completo.

1. **El modo de permiso es una decisión de riesgo, no una decisión de velocidad.**
   Claude Code te da modos que van desde solicitar-antes-de-todo hasta no-solicitar-nada. El modo de permiso debería corresponder al perfil de riesgo del trabajo y del entorno, no a la preferencia por menos solicitudes. Un modo de bypass en una estación de trabajo de desarrollo contra una base de código viva elimina cada punto de control entre el agente y tus archivos. Una regla de negación sobre la ruta que no debe tocarse, establecida a nivel de proyecto o de empresa, cubre la brecha que un modo por sí solo no cubre.

2. **Una revisión de código hecha por IA te da un conjunto de hallazgos para clasificar, no un veredicto para aplicar.**
   Confía en los hallazgos que el revisor puede demostrar a partir del diff que tiene enfrente, como una verificación de nulo faltante o un recurso sin cerrar, y confírmalos en las líneas que cita. Trata cualquier afirmación sobre el comportamiento en tiempo de ejecución o sobre otro sistema como una hipótesis por probar, porque el revisor hizo esa afirmación sin la evidencia que la demostraría. Pon la puerta humana en el punto donde un hallazgo se convierte en una acción difícil de revertir, y eleva la precisión del revisor dándole las convenciones que de otro modo tendría que adivinar.

3. **Una skill es portable, pero "se ejecuta en todas partes" es algo que debes diseñar.**
   El mismo SKILL.md puede ejecutarse en Claude Code, sobre la API de Mensajes, y a través del Agent SDK, pero cada uno la carga y la aísla de manera diferente: descubrimiento por sistema de archivos en Claude Code, headers de beta y un contenedor de ejecución de código en la API, y settingSources en el SDK. Una skill limitada a una descripción clara y libre de suposiciones sobre el entorno local se porta limpiamente; una que asume la terminal en la que fue escrita, no. En cada tiempo de ejecución, los subagentes comienzan limpios: no precargan skills automáticamente.

4. **El contexto duradero requiere el mecanismo correcto para cada preocupación.**
   CLAUDE.md es la memoria de proyecto persistente entre sesiones, pero se diluye con el tamaño. Los archivos de reglas limitan la orientación a donde aplica. Los ganchos hacen cumplir barreras de protección de forma determinista, no probabilística. Los subagentes mantienen el trabajo de exploración fuera del contexto principal. Cada uno de estos cuatro mecanismos resuelve un problema diferente, así que forzarlos a todos dentro de CLAUDE.md produce un solo archivo que es más difícil de mantener y más fácil de ignorar.

5. **Una configuración compartible requiere componentes portables.**
   Un plugin que referencia una ruta absoluta al directorio home del autor se instalará en una máquina y fallará en todas las demás. Las skills, los ganchos y los componentes de plugin que se van a compartir deben referenciar rutas relativas a la raíz del proyecto, y cualquier requisito de variable de entorno debe documentarse o validarse al momento de la instalación. Prueba la instalación desde una máquina limpia antes de distribuirla.

6. **Transporte y alcance son decisiones independientes con consecuencias dependientes.**
   stdio es para servidores que se ejecutan en tu máquina. HTTP es para cualquier cosa alojada remotamente o accedida por múltiples desarrolladores. El alcance local mantiene un servidor personal; el alcance de proyecto lo comparte con el repositorio a través de `.mcp.json`. La combinación debe corresponder a la intención de despliegue: un servidor de equipo compartido requiere transporte HTTP y alcance de proyecto o empresarial. Un servidor stdio en `.mcp.json` es una configuración que parece compartible pero no lo es.

7. **La integración empresarial requiere identificar los requisitos de seguridad antes del despliegue.**
   Un cliente regulado pregunta sobre identidad, residencia de datos, registro de acceso y control de la configuración. Las respuestas vienen de OAuth para servicios con identidad de usuario, variables de entorno para credenciales de servicio, ganchos PostToolUse para el registro de auditoría, y configuración manejada empresarial para cerrar la configuración. Ninguna de ellas es difícil de implementar, pero todas son difíciles de agregar de forma retroactiva después de que un despliegue de producción ha fallado una revisión de seguridad.

**Nota:**
Qué viene después

El Módulo 4 cubre ingeniería de producción, evaluaciones y seguridad: cómo medir si tus integraciones de Claude Code funcionan correctamente a escala, cómo construir arneses de evaluación, y cómo diseñar barreras de protección de grado de producción. Los modos de permiso, los ganchos y los patrones de autenticación de este módulo son la base contra la que esas evaluaciones se prueban.

## Fuentes

- Claude 101 (Skilljar)
- Claude Code 101 In Action (Skilljar)
- Building with the Claude API (Skilljar)
- code.claude.com
- platform.claude.com
- docs.claude.com

## Ahora puedes ejecutar Claude Code de forma segura, compartirlo como un activo de equipo, y conectarlo a sistemas reales.

Desde los modos de permiso hasta la autenticación empresarial, ahora tienes en tus manos las decisiones de configuración que mantienen una integración funcionando mucho después de que deja tu máquina.

---

`[TAG MODULE]` Glosario - Términos Clave · 3 min

# Términos clave de este módulo

Alfabético. Haz clic en un término para expandir su definición.

**Agent SDK de Claude**
Una interfaz programable que expone el mismo bucle de agentes que Claude Code ejecuta en la terminal. Permite a los desarrolladores invocar el bucle desde código, establecer el modo de permiso y las herramientas disponibles, y ejecutar tareas sin una sesión interactiva. El mismo modelo de permisos y las mismas reglas de negación que aplican en la terminal aplican en el SDK.

**CLAUDE.md**
Un archivo Markdown colocado en la raíz de un proyecto de Claude Code. Su contenido se antepone a la ventana de contexto al inicio de cada sesión. Sostiene las restricciones universales del proyecto, las convenciones y los comandos que deberían aplicar incondicionalmente en todas las sesiones. Los archivos que crecen más allá de aproximadamente 200-300 líneas corren el riesgo de diluir las reglas críticas por el peso del contenido.

**Gancho**
Un comando vinculado a un evento del ciclo de vida de la ejecución de Claude Code (PreToolUse, PostToolUse, UserPromptSubmit, Stop). A diferencia de las instrucciones en CLAUDE.md, los ganchos se ejecutan determinísticamente en el evento configurado sin importar lo que el modelo decida. Un gancho PreToolUse puede salir con código 2 para bloquear una llamada de herramienta antes de que se ejecute.

**MCP (Protocolo de Contexto del Modelo)**
Una capa de comunicación abierta que permite a un cliente MCP como Claude Code conectarse a un servidor MCP que expone herramientas, recursos y prompts. El protocolo define cómo el cliente descubre y llama las herramientas del servidor. Usar MCP saca la definición y el mantenimiento de herramientas del código de cada aplicación individual y los lleva a un servidor reutilizable al que cualquier cliente MCP puede conectarse.

**Transporte MCP**
El canal de comunicación entre un cliente MCP y un servidor MCP. stdio ejecuta el servidor como un subproceso local en la misma máquina que el cliente. HTTP se conecta a un servidor alojado remotamente a través de una red. La elección de transporte determina dónde puede ejecutarse el servidor y quién puede conectarse a él.

**Modo de permiso**
Una configuración en Claude Code que controla con qué frecuencia el agente se detiene a solicitar confirmación antes de ejecutar llamadas de herramientas. Los modos van desde el predeterminado (solicita antes de casi cada acción) hasta los modos de bypass (ninguna solicitud). Las reglas de negación anulan cualquier modo; una regla de negación a nivel de configuración empresarial no puede ser evadida por ninguna configuración individual.

**Plugin**
Un paquete versionado de componentes de Claude Code (skills, ganchos, subagentes y configuraciones de servidores MCP) distribuido a través de un marketplace. Instalar un plugin le da al receptor la misma configuración que tiene el autor en un solo paso. Los administradores empresariales pueden desplegar plugins a toda la organización a través de la configuración manejada.

**Archivo de instrucciones de reglas**
Un archivo que limita la orientación a una ruta o condición específica en Claude Code. A diferencia de CLAUDE.md, que carga incondicionalmente en cada sesión, un archivo de reglas se activa solo cuando Claude Code está trabajando en el directorio que supervisa. Se usa para mantener la orientación específica de una ruta fuera del archivo principal de memoria del proyecto.

**Subagente**
Un contexto de ejecución separado lanzado por Claude Code para manejar una tarea delegada. Un subagente no hereda el contexto ni los archivos acumulados de la conversación principal; comienza limpio, realiza la tarea, y devuelve solo un resumen. Usar subagentes para trabajo exploratorio o de investigación evita que el contexto de la sesión principal se llene con contenido que no será reutilizado.

---

`[TAG MODULE]` Módulo Completado - Ruta de Desarrollador · 2 min

# ¡Felicidades! Has completado exitosamente este módulo.

Ahora puedes ejecutar Claude Code bajo el modo de permiso correcto, darle contexto de proyecto duradero, empaquetar un flujo de trabajo como un plugin compartible, y conectar Claude a sistemas reales a través de MCP sin filtrar una credencial ni fallar una revisión de seguridad.

**Las decisiones de configuración de este módulo son lo que mantiene una integración funcionando mucho después de que deja tu máquina.**

**0 de 8 puntos de control aprobados**

**M1 — MSO Foundations**
Tokens, ventanas de contexto, muestreo, niveles de modelo, modos de prompting, y la mecánica de transporte de la API.

**M2 — Production-Grade Prompting, Agents & Tool-use**
Prompts listos para producción, bucles de uso de herramientas, streaming, gestión de contexto y memoria, y bucles de agentes con puntos de control.

**M3 — Claude Code, MCP & Integration**
Modos de permiso, contexto duradero, empaquetamiento de plugins, servidores MCP, y autenticación empresarial.
*Estás aquí*

**M4 — Production Engineering, Evals, and Security**
Evaluaciones, trazado, manejo de fallos, presupuestos de costo y de orquestación, y límites de confianza que se sostienen en producción.
*Siguiente*

**M5 — Accelerators and IP Contribution**
Empaqueta aceleradores, prepara contribuciones verificables, elige plataformas de despliegue, y marca límites de confianza.

Comenzar Módulo 4 → · Volver al inicio del curso

## Módulo 3 completado.

---

