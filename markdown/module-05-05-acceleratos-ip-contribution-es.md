# Aceleradores y Contribución de IP: Módulo de Desarrollador 5

**Módulo 5 de 5**

---

Certificación de Desarrollador · Módulo 5
# Aceleradores y Contribución de IP

Este módulo retoma el momento en que tu código se ejecuta correctamente y plantea la pregunta más difícil: ¿puede alguien más reutilizarlo?, ¿puede un mantenedor aceptarlo?, ¿puede sobrevivir a una actualización del modelo?, y ¿puede un equipo de seguridad o de compras dar el visto bueno sobre dónde se ejecuta? El trabajo aquí tiene menos que ver con escribir código y más con las decisiones que hacen que el código terminado sea reutilizable, desplegable y defendible ante personas que no lo escribieron.

**Tabla de contenidos**
- Introducción del Módulo: 1 pantalla
- Orientación

- Empaquetamiento para Reutilización: 3 pantallas
- Enseñanza
- Ten cuidado
- Punto de control

- Contribuir de Vuelta: 3 pantallas
- Enseñanza
- Ten cuidado
- Punto de control

- Requisitos y Ciclo de Vida: 4 pantallas
- Enseñanza
- Punto de control
- Enseñanza
- Punto de control

- Despliegue y Versionado: 3 pantallas
- Enseñanza
- Ten cuidado
- Punto de control

- Comparación de Plataformas: 3 pantallas
- Enseñanza
- Ten cuidado
- Punto de control

- Límites de Confianza: 3 pantallas
- Enseñanza
- Ten cuidado
- Punto de control

- Tarea Acumulativa: 2 pantallas
- Diagnosticar
- Ensamblar

- Conclusiones Clave: 3 pantallas
- Recapitulación
- Glosario
- Módulo Completado

25 pantallas · 9 secciones · 139 minutos · 9 puntos de control

- Orientación
- Enseñanza
- Ten cuidado
- Punto de control
- Enseñanza
- Ten cuidado
- Punto de control
- Enseñanza
- Punto de control
- Enseñanza
- Punto de control
- Enseñanza
- Ten cuidado
- Punto de control
- Enseñanza
- Ten cuidado
- Punto de control
- Enseñanza
- Ten cuidado
- Punto de control
- Diagnosticar
- Ensamblar
- Recapitulación
- Glosario
- Módulo Completado

---

`[TAG MODULE]` Orientación - Módulo de Desarrollador 5 · 2 min

# Qué podrás hacer al final

Documenta bien la construcción y el siguiente proyecto (*engagement*) partirá de ella en lugar de partir desde cero.

En los últimos tres módulos construiste un agente de producción, lo conectaste a Claude Code con los controles correctos de permisos y de contexto, y configuraste las conexiones MCP que pasan una revisión de seguridad. Cada una de esas fue una construcción funcional.

Este módulo cubre lo que sucede con una construcción después de que funciona. O la reconstruyes desde cero en el siguiente proyecto, o la empaquetas una sola vez, de modo que el siguiente equipo solo la configure. El segundo camino es el que libera tu tiempo para trabajo nuevo en lugar de reconstrucciones repetidas.

Al final de este módulo, podrás:

- 1 Empaquetar una solución funcional como un **acelerador** reutilizable, ya sea una plantilla de agente parametrizada, un servidor MCP configurable o una suite de evaluaciones portátil, para que el siguiente proyecto configure un activo en lugar de reconstruirlo por completo.
- 2 Contribuir de vuelta una herramienta, un patrón o una corrección a través de los canales documentados y prepararla para que un mantenedor pueda aceptarla, convirtiendo un activo privado en infraestructura compartida.
- 3 Elegir dónde se ejecuta una carga de trabajo de Claude entre la API de primera parte, Amazon Bedrock, Google Vertex AI y plataformas de terceros, y versionar lo que se despacha para que un cambio de modelo o de prompt no rompa silenciosamente la producción.
- 4 Comparar esas plataformas en latencia, cumplimiento y costo para que la elección sea una que un equipo de compras y de seguridad pueda aprobar, en lugar de un valor predeterminado al que tu equipo recurrió.
- 5 Construir una aplicación que coordine varios despliegues de Claude en un solo flujo de trabajo y delimitarla de modo que los límites de datos e identidad se sostengan bajo una revisión de seguridad o de cumplimiento.

*Este módulo es para el Desarrollador que tiene una construcción que funciona y ahora debe hacer que perdure. Eres práctico, orientado al código y enfocado en patrones, y los módulos anteriores asumieron eso y construyeron sobre ello. A esta altura puedes escribir un agente de producción, configurarlo en Claude Code, conectar conexiones MCP que pasan una revisión de seguridad, y demostrarlo todo con evaluaciones. Este módulo no vuelve a enseñar nada de eso. Retoma el momento en que tu código se ejecuta correctamente y plantea la pregunta más difícil: ¿puede alguien más reutilizarlo?, ¿puede un mantenedor aceptarlo?, ¿puede sobrevivir a una actualización del modelo?, y ¿puede un equipo de seguridad o de compras dar el visto bueno sobre dónde se ejecuta? El trabajo aquí tiene menos que ver con escribir código y más con las decisiones que hacen que el código terminado sea reutilizable, desplegable y defendible ante personas que no lo escribieron.*

**Nota:**

**"La construcción" en este módulo**

Todo en este módulo gira en torno a una brecha recurrente: una construcción que funciona todavía no es una construcción que sobreviva a la reutilización, a la revisión o al despliegue. En desarrollo, la plantilla se ejecutó, la contribución resolvió tu problema, el modelo respondió, la plataforma fue fácil para construir encima, y cada plataforma pasó sus propias pruebas. Nada de eso es el estado terminado. La misma plantilla debe poder configurarse para un equipo que nunca habló contigo. La misma contribución debe ser verificable por un mantenedor que no tenga que reconstruir nada. El mismo modelo debe estar fijado para que un cambio aguas arriba sea una decisión y no una sorpresa. La misma plataforma debe superar la revisión de residencia y de cumplimiento de un cliente. Las mismas plataformas conectadas deben sostener sus límites de confianza bajo auditoría. Cada tema de este módulo es una versión distinta de la misma lección: el punto donde el código empieza a funcionar es donde comienza el trabajo de este módulo. Más de estas decisiones de las que podrías esperar están impulsadas por la nube existente del cliente, su postura de cumplimiento y su proceso de revisión.

**Descargo de Responsabilidad / Aviso para Contenido Educativo**

Construimos este Módulo 5 del curso de Desarrollador: Aceleradores y Contribución de IP para ayudarte a realizar trabajo real con Claude. Trátalo como contenido educativo. No constituye asesoría legal, financiera ni de otro tipo profesional, así que adapta lo que aprendas a tu propia situación. Nuestros productos y servicios evolucionan rápidamente, por lo que cierto contenido puede contener errores o estar desactualizado; recuerda verificar en el sitio web o la documentación de Anthropic. Los ejemplos y escenarios usados en el curso son ilustrativos y frecuentemente ficticios. Si el material del curso menciona una empresa o producto, eso no significa que Anthropic los respalde, que ellos respalden a Anthropic, ni que estemos afiliados. Ten en cuenta también que tu uso de los productos y servicios de Anthropic está cubierto por nuestros términos, políticas y documentación; si algo en este curso entra en conflicto con ellos, ellos prevalecen.

---

`[TAG TEACHING]` Enseñanza - Empaquetamiento para Reutilización · 16 min

# Empaquetar una construcción funcional para que el siguiente proyecto parta de un activo

Terminaste los módulos anteriores con una construcción que se ejecuta: un bucle de agente, un servidor MCP configurado, una evaluación que demuestra que el prompt funciona. Lo que más tiempo consume y más caro resulta en un equipo es el tiempo de ingeniería que se gasta reconstruyendo lo mismo para el siguiente cliente.

## Qué hace un acelerador: conservar las partes reutilizables y separar el resto

Un **acelerador** es una solución empaquetada de modo que los proyectos futuros partan de una base funcional en lugar de un repositorio en blanco. En términos del plano de trabajo, esto es empaquetamiento para reutilización: separar el código específico del proyecto del núcleo reutilizable y parametrizar el resto. Toma una construcción funcional, separa las partes que son específicas del cliente y exponlas como parámetros con valores predeterminados documentados. El activo entonces se configura en lugar de reescribirse por completo. Empaquetar para reutilización mientras la construcción está fresca es más barato que reconstruir la intención meses después, cuando la persona que sabía por qué un valor estaba escrito en duro ya se fue.

### La mayor parte del trabajo reutilizable cae en distintos tipos de activo, y cada uno se empaqueta de manera diferente

La mayor parte del trabajo reutilizable cae en una de tres categorías usadas a lo largo de este módulo: una plantilla, un servidor configurable o una evaluación portátil. Cada tipo contiene una clase distinta de trabajo y necesita empaquetarse a su propia manera. Recurrir al tipo equivocado puede hacer que un activo parezca reutilizable mientras sigue siendo difícil de aplicar.

| Tipo de activo | Qué agrupa | Qué requiere un empaquetamiento correcto |
|----------------|-----------|------------------------------------------|
| Plantilla de Agente | El prompt de sistema, los esquemas de herramientas y la estructura del bucle de un agente funcional. | Extraer los valores específicos del dominio hacia la configuración con valores predeterminados documentados, para que un equipo nuevo establezca los valores en lugar de editar el bucle. |
| Paquete de Servidor MCP | Las herramientas que el servidor expone, con sus entradas y el alcance que controla el equipo que lo instala. | Documentar cada entrada de herramienta y dejar que el equipo instalador establezca el alcance, para que el servidor se instale en un entorno nuevo sin editar código. |
| Suite de Evaluaciones | El conjunto de pruebas calificadas y la rúbrica del juez que demuestran que el activo funciona. | Despachar juntos el conjunto de datos y la rúbrica para que un equipo nuevo pueda ejecutarlos en su propio contexto y confirmar que el activo sigue funcionando allí. La misma suite de evaluaciones también actúa como la puerta en el despliegue. Cuando promuevas una nueva versión del modelo a producción, ejecútala contra una puntuación de referencia fijada antes de que la versión entre en vivo. |

Despachar un agente como un conjunto de scripts sueltos en lugar de una plantilla es la versión más común del enfoque equivocado. Los scripts se ejecutan, así que parecen reutilizables, pero cada valor específico del cliente está enterrado en un archivo distinto, y el siguiente equipo los copia y los hace divergir en vez de configurar un solo activo.

### Documenta tanto el código como los supuestos

El código describe el comportamiento. La documentación cubre lo que un constructor futuro no puede inferir de manera confiable leyendo la fuente: los supuestos que el activo hace sobre su entorno, las entradas que espera, los modos de falla que ya maneja y la evaluación que define si sigue funcionando. Sin esto, el siguiente equipo trata el activo como una caja negra y lo reconstruye.

### Incluye el registro de auditoría como parte del paquete

El revisor de un cliente regulado pregunta qué datos toca el activo, bajo qué identidad actúa y qué registro deja. Un acelerador sin esto pasa una demostración y se estanca en la primera revisión de seguridad. Trata el registro de auditoría como parte del paquete.

### La lista de verificación de empaquetamiento

Mantén esta lista de verificación junto a la construcción mientras la empaquetas. Cada columna es una decisión que tomas una vez por activo.

| Tipo de activo | Qué parametrizar | Qué documentar | Qué incluir para auditoría |
|----------------|-----------------|----------------|----------------------------|
| Plantilla de agente | Todo valor que cambia por cliente: prompts, rutas, alcances, credenciales por referencia y umbrales. | Supuestos del entorno, entradas esperadas, modos de falla manejados y la evaluación que define qué significa funcionar. | Los datos tocados, la identidad bajo la que se actuó y el registro de lo que hizo el activo. |
| Servidor MCP | Alcances, credenciales por referencia y rutas específicas de cada cliente. | Entradas esperadas por herramienta, límites de alcance y modos de falla manejados. | Los datos tocados, la identidad bajo la que se actuó y el registro de lo que hizo el activo. |
| Suite de Evaluaciones | Umbrales y rutas de conjuntos de datos que cambian por cliente o entorno. | La lógica de la rúbrica, qué significan las puntuaciones y la línea base a la que el activo está fijado. | Los datos tocados, la identidad bajo la que se actuó y el registro de lo que hizo el activo. |

**Nota:**

**Maneja bien**

Parametrizar mientras la construcción está fresca convierte una entrega en un activo que el siguiente proyecto (*engagement*) configura en horas.

**Agrega costo o complejidad**

Separar las partes generalizables de las específicas del cliente y documentar los supuestos agrega tiempo real a la primera construcción.

**Usa un enfoque diferente**

Para algo puntual que un cliente nunca reutilizará, la sobrecarga del empaquetamiento no vale la pena: despacha la construcción y sigue adelante.

---

`[TAG FAILURE]` Ten cuidado - Empaquetamiento para Reutilización · 2 min

## La plantilla que se despachó rápido y no se pudo reutilizar

**Configuración**

Escribir valores en duro despacha más rápido y estabas trabajando bajo una fecha límite, así que escribiste en duro los valores que hicieron funcionar la demostración. La plantilla funcionó. Precisamente por eso nadie volvió a mirarla hasta que el siguiente equipo intentó reutilizarla.

Esta es una autopsia, escrita como la escribe un equipo después de que falla el intento de reutilización, para que puedas ver la forma de la falla antes de que alguien la etiquete como un error.

### Qué sucedió

Un equipo construyó una plantilla de agente para un proyecto con un cliente y la despachó a tiempo. Para cumplir con la fecha de entrega, los valores específicos del cliente fueron directo al código: la ruta del repositorio, el nombre del modelo, los umbrales de revisión y un puñado de fragmentos de prompt específicos del dominio de ese cliente. La plantilla se ejecutó, el proyecto se cerró, y la construcción pasó al repositorio compartido etiquetada como reutilizable.

Meses después, un segundo equipo la retomó para un proyecto similar. No pudieron configurarla, porque no había nada que configurar. Cada valor que necesitaba cambiar estaba incrustado en el bucle donde el segundo equipo no podía verlo sin leer el archivo completo. No había ningún documento que dijera qué valores eran específicos del cliente y cuáles eran estructurales. Tampoco había una evaluación incluida, así que incluso después de adivinar las ediciones, nada confirmaba que la plantilla siguiera funcionando en el nuevo contexto. Tuvieron que reescribirla desde cero.

**Por qué esto falló**

La construcción se trató como terminada en el momento en que se ejecutó y no en el momento en que podía reutilizarse. Escribir los valores en duro fue la decisión razonable bajo una fecha límite, y nunca se revisó. Una plantilla funcional no anuncia que no puede reutilizarse. El costo apareció solo cuando un segundo equipo pagó por la reconstrucción que el empaquetamiento debía haber evitado, junto con el tiempo que perdieron descubriendo que la plantilla era un callejón sin salida.

**A qué debes prestar atención**

Una plantilla que se ejecuta no ha sido empaquetada para reutilización. Son estados de terminación distintos. Las señales de alerta son la ausencia de tres cosas: ningún parámetro donde corresponden los valores específicos del cliente, ninguna documentación que describa los supuestos, y ninguna evaluación incluida que demuestre que el activo sigue funcionando en un contexto diferente. Empaqueta el activo mientras la construcción está fresca. El conocimiento de qué es específico del cliente es lo más caro de reconstruir después de que las personas que lo tenían ya se fueron.

---

`[TAG CHECKPOINT]` Punto de control - Empaquetar un acelerador reutilizable · 4 min

# Punto de control 1: Corrige la plantilla de acelerador defectuosa

Inténtalo ahora. A continuación hay una plantilla de agente que otro equipo debería reutilizar. Tiene un defecto: un valor específico del cliente está escrito en duro donde corresponde un parámetro.

**La plantilla tal como se despachó**

```python
# agent_template.py : agente de revisión de código "reutilizable"
def build_review_agent():
    return Agent(
        model="claude-opus-4-8",
        system_prompt=SYSTEM_PROMPT,
        tools=[read_file, run_linter],
        repo_path="/home/acme/checkout-service",  # repositorio del cliente
    )
```

(Confirma el ID del modelo actual en platform.claude.com/docs/en/about-claude/models al momento de construir.)

Identifica el valor escrito en duro, luego escribe la firma corregida de la función y la línea parametrizada que la reemplaza.

**Omitido**

Sigue adelante si lo necesitas, pero regresa antes de la tarea acumulativa. Un punto de control posterior planta una versión de este mismo defecto de valores en duro entre otros dos y es más difícil de detectar bajo carga de múltiples capas.

---

`[TAG TEACHING]` Enseñanza - Contribuir de Vuelta · 12 min

# Llevar un activo de la reutilización privada a una infraestructura compartida que un mantenedor acepte

Ya hiciste la mayor parte del trabajo que hace que un activo sea compartible. Cuando lo empaquetaste para que tu propio equipo lo reutilizara, extrajiste los parámetros, escribiste los supuestos e incluiste la evaluación. Los parámetros muestran que el activo puede configurarse en lugar de reescribirse. Los supuestos documentados le dicen al mantenedor qué entorno espera el activo. La evaluación incluida les da una manera de confirmar que sigue funcionando. Un activo empaquetado para reutilización interna ya está cerca de lo que un mantenedor necesita para aceptarlo.

El canal de contribución está diseñado para recibir ese activo empaquetado. Lleva la versión, los pasos de instalación y los componentes como una sola unidad, de modo que un equipo que nunca habló contigo pueda instalarlo y obtener la misma configuración funcional.

## Haz coincidir la contribución con el canal construido para ella

Contribuir de vuelta significa llevar un activo de la reutilización privada a la infraestructura compartida a través de un canal documentado. Cada canal está construido para un tipo específico de contribución. El **Claude Cookbook** es un repositorio de GitHub con implementaciones de referencia enfocadas. Está diseñado para implementaciones autocontenidas de un patrón o de varios patrones, demostradas con claridad y funcionando de extremo a extremo (*end-to-end*). Los servidores MCP y las herramientas de código abierto viven cada uno en su propio repositorio con sus propias convenciones de contribución. Enviar una aplicación completa de múltiples componentes al Cookbook es un desajuste. El repositorio está configurado para revisar un patrón enfocado en lugar de una aplicación entera, así que un envío de ese tamaño no encaja con lo que los revisores buscan y se estancará. El primer paso es hacer coincidir la contribución con el canal construido para ella. Poner una aplicación completa donde corresponde un ejemplo enfocado es una de las razones más comunes por las que una contribución nunca llega a revisarse.

### Qué hace posible verificar una contribución

Un mantenedor acepta una contribución que puede verificar. El listón lo fija lo que necesita comprobar, no lo ingenioso que sea el código. Cuatro cosas hacen posible esa verificación:

- 1 El código hace una sola cosa. Una contribución dispersa obliga al revisor a reconstruir tu intención antes de poder evaluarla.
- 2 Un ejemplo lo muestra en ejecución. Un revisor no debería tener que construir un andamiaje para ver el comportamiento.
- 3 Una prueba demuestra que funciona. Una prueba le permite a un mantenedor verificar el resultado sin reproducir el razonamiento por su cuenta.
- 4 Una declaración breve nombra los supuestos. De lo contrario, la primera falla se convierte en el problema del mantenedor.

### Los derechos y la atribución van antes de la revisión técnica

Las licencias y la atribución deciden si una contribución puede aceptarse siquiera, y por eso van antes de la revisión técnica. El código traído de un proyecto con un cliente puede tener restricciones sobre a dónde puede ir. Confirmar que tienes el derecho de contribuirlo, y atribuir aquello sobre lo que construiste, es una puerta que la contribución debe pasar primero. Saltarse esto es lo que convierte una contribución en un problema que el equipo legal debe deshacer después.

El ejemplo que se trabaja aquí es el caso del agente de servicio al cliente. Un patrón reutilizable de manejo de conversaciones, construido durante un proyecto, se despoja de las particularidades del cliente y se prepara como un ejemplo general para el Cookbook. El movimiento de contribuir de vuelta es compartido por los tres roles de este plan de estudios. Tu trabajo como Desarrollador es la preparación técnica: el código enfocado, el ejemplo, la prueba, los supuestos y la verificación de derechos. El contexto del proyecto viene del equipo en general.

### La referencia de preparación para contribuir

| Canal | Qué revisa un mantenedor | Licencias y atribución | El listón de ejemplo y prueba que hay que superar |
|-------|--------------------------|------------------------|---------------------------------------------------|
| El Cookbook para un ejemplo enfocado, o el repositorio propio de la herramienta o del servidor para una herramienta o una corrección. | Que el código haga una sola cosa y que puedan leerlo por completo. | Confirma que tienes el derecho de contribuir código proveniente de un proyecto, con el trabajo previo atribuido. | Un ejemplo ejecutable más una prueba que demuestre el comportamiento, no solo una descripción de él. |

**Nota:**

**Maneja bien**

A un activo empaquetado solo le faltan el ejemplo, la prueba y la verificación de derechos para convertirse en infraestructura compartida sobre la que otros construyen.

**Agrega costo o complejidad**

Superar el listón del mantenedor y la puerta de licencias es trabajo real por encima de hacer que el código funcione para ti.

**Usa un enfoque diferente**

Cuando el código carga una restricción de licencia del proyecto que no puedes resolver, no lo contribuyas: escala el asunto al propietario en su lugar.

---

`[TAG FAILURE]` Ten cuidado - Contribuir de Vuelta · 2 min

## El pull request que un mantenedor no pudo verificar

**Configuración**

Abriste la contribución con exactamente el código que resolvió tu problema. Esta fue la elección natural porque funcionaba en tu caso y estaba a la mano. Funcionó para ti, pero precisamente por eso le faltaba todo lo que un desconocido necesita para confiar en él.

Este es un intercambio de un canal interno para que escuches cómo un mantenedor explica el silencio en un pull request.

### El intercambio

**Desarrollador:** Mi PR lleva tres semanas abierto sin revisión. El código funciona, lo uso todos los días. ¿Cuál es la demora?

**Mantenedor:** Probablemente funciona para ti. El problema es que yo no puedo saberlo. No hay una prueba que pueda ejecutar, ni un ejemplo que demuestre el comportamiento, ni nada que diga qué supone sobre el entorno.

**Desarrollador:** Entonces, ¿quieres que agregue una prueba y un ejemplo?

**Mantenedor:** Sí. Una contribución que un revisor no puede verificar se queda al final de la fila hasta que alguien tenga tiempo de reconstruir qué hace. Un PR enfocado con una prueba y un ejemplo se revisa rápido porque no me queda nada por descifrar en reversa.

**Por qué esto falló**

El código era correcto. La contribución se estancó porque el mantenedor no podía verificarla sin reconstruir el trabajo del desarrollador. Esa brecha es fácil de pasar por alto porque el autor ya tiene el contexto que falta. El ejemplo, la prueba y la declaración de supuestos le parecen obvios a la persona que creó el código. Para el mantenedor, sin embargo, no lo son, y un revisor que deba reconstruir la intención siempre lo hará al final.

**A qué debes prestar atención**

Un pull request se estanca por aquello que el revisor no puede verificar. Antes de abrir una contribución, agrega el ejemplo que la muestra en ejecución, la prueba que demuestra el comportamiento y la declaración breve que nombra lo que supone. Esas tres características son las que mueven una contribución del final de la fila a una revisión rápida, porque no le dejan nada al mantenedor por descifrar en reversa.

---

`[TAG CHECKPOINT]` Punto de control - Contribuir de vuelta al ecosistema · 3 min

# Punto de control 2: Elige el canal de contribución y la corrección de preparación

Inténtalo ahora. Lee los tres casos a continuación. Haz coincidir cada caso con el canal construido para él y haz coincidir cada caso con el único elemento de preparación que le falta al fragmento.

**Caso A:** Una herramienta enfocada que envuelve una sola API en una función limpia. El fragmento es la función y nada más.

**Caso B:** Una aplicación completa de servicio al cliente que un desarrollador quiere compartir entera, incluidos su interfaz de usuario y sus scripts de despliegue.

**Caso C:** Una corrección de una línea a un ejemplo existente del Cookbook. El fragmento es la línea corregida, traída de un proyecto con un cliente.

### Coincidencia 1: caso con canal

Caso A: Una herramienta enfocada que envuelve una sola API en una función limpia. El fragmento es la función y nada más.
- El repositorio propio de la herramienta
- El Cookbook, pero solo después de extraer el patrón reutilizable como un ejemplo enfocado
- El repositorio propio del ejemplo del Cookbook

Caso B: Una aplicación completa de servicio al cliente compartida entera, incluidos su interfaz de usuario y sus scripts de despliegue.
- El repositorio propio de la herramienta
- El Cookbook, pero solo después de extraer el patrón reutilizable como un ejemplo enfocado
- El repositorio propio del ejemplo del Cookbook

Caso C: Una corrección de una línea a un ejemplo existente del Cookbook. El fragmento es la línea corregida, traída de un proyecto con un cliente.
- El repositorio propio de la herramienta
- El Cookbook, pero solo después de extraer el patrón reutilizable como un ejemplo enfocado
- El repositorio propio del ejemplo del Cookbook

### Coincidencia 2: caso con el elemento de preparación faltante

Caso A: Una herramienta enfocada que envuelve una sola API en una función limpia. El fragmento es la función y nada más.
- Una prueba que demuestre que el envoltorio se comporta correctamente
- La reducción a un solo patrón enfocado, porque una aplicación entera no encaja en una revisión construida para un patrón
- La verificación de derechos, porque el código de un proyecto puede cargar una restricción de licencia que bloquea la fusión antes de cualquier revisión técnica

Caso B: Una aplicación completa de servicio al cliente compartida entera, incluidos su interfaz de usuario y sus scripts de despliegue.
- Una prueba que demuestre que el envoltorio se comporta correctamente
- La reducción a un solo patrón enfocado, porque una aplicación entera no encaja en una revisión construida para un patrón
- La verificación de derechos, porque el código de un proyecto puede cargar una restricción de licencia que bloquea la fusión antes de cualquier revisión técnica

Caso C: Una corrección de una línea a un ejemplo existente del Cookbook. El fragmento es la línea corregida, traída de un proyecto con un cliente.
- Una prueba que demuestre que el envoltorio se comporta correctamente
- La reducción a un solo patrón enfocado, porque una aplicación entera no encaja en una revisión construida para un patrón
- La verificación de derechos, porque el código de un proyecto puede cargar una restricción de licencia que bloquea la fusión antes de cualquier revisión técnica

---

`[TAG TEACHING]` Enseñanza - Requisitos y Ciclo de Vida · 8 min

# De los requisitos de negocio a los requisitos funcionales y de infraestructura

Las decisiones de plataforma de despliegue que siguen asumen todas que los requisitos ya existen: la regla de residencia, el objetivo de latencia, el modelo de identidad. Esta pantalla es de donde provienen esos requisitos: convertir un problema de negocio en los requisitos funcionales y de infraestructura contra los cuales se puede defender una decisión de despliegue.

## Capturar requisitos funcionales a partir de un problema de negocio

Un requisito funcional nombra lo que el sistema debe hacer, expresado con suficiente detalle para poder comprobarlo. Un problema de negocio (por ejemplo, "ayudar a los agentes de soporte a responder más rápido") todavía no es un requisito; los requisitos funcionales se derivan de él (por ejemplo, "clasificar cada ticket en una de cuatro colas; redactar una respuesta citando la política pertinente; nunca enviar automáticamente sin aprobación humana"). La disciplina consiste en escribir cada uno como una declaración comprobable de comportamiento. Una meta vaga no puede diseñarse ni verificarse, mientras que una específica se convierte en una línea de una evaluación y en un criterio en la revisión.

## Derivar los requisitos de infraestructura

Los requisitos de infraestructura son las restricciones no funcionales que el despliegue debe satisfacer. La mayoría de ellos no están enunciados en el problema de negocio; en cambio, los derivas haciendo las preguntas que el problema de negocio implica. Latencia: ¿qué tan rápido debe ser una respuesta, medida donde está el usuario? Escala: ¿cuántas solicitudes, y en qué pico? Residencia: ¿dónde deben procesarse los datos, y bajo qué regulación? Identidad: ¿quién actúa, bajo qué credenciales, y qué debe ser auditable? La latencia, la escala, la residencia y la identidad son los requisitos de infraestructura que con más frecuencia deciden la plataforma de despliegue, y son más fáciles de capturar al principio, antes de que se elija una plataforma por otras razones.

## Documentar los requisitos para que una decisión pueda defenderse

Los requisitos se escriben porque la decisión de despliegue será revisada por personas que no los recopilaron. Un registro breve de requisitos que cubra los comportamientos funcionales, las restricciones de infraestructura y la regulación de la que proviene cada restricción te permite defender la elección de plataforma como una consecuencia de los requisitos y no de la familiaridad. Este registro es la entrada que lee la decisión de despliegue de la siguiente pantalla.

**Nota:**

**Maneja bien**

Convertir un problema de negocio en requisitos funcionales y de infraestructura comprobables antes de elegir cualquier plataforma.

**Agrega costo o complejidad**

Obtener las restricciones de infraestructura por adelantado requiere una conversación de alcance que el equipo se ve tentado a saltarse.

**Usa un enfoque diferente**

Para un prototipo desechable sin revisión y sin datos regulados, unas notas ligeras son suficientes.

---

`[TAG CHECKPOINT QUIZ]` Punto de control (Cuestionario) - Requisitos y Ciclo de Vida · 2 min

# Punto de control 3: extrae los requisitos

Inténtalo ahora. Un banco regulado de la UE quiere un agente que resuma las transcripciones de llamadas de clientes para su equipo de soporte, con los resúmenes revisados antes de almacenarse en la UE.

Pregunta 1
Un banco regulado de la UE quiere un agente que resuma las transcripciones de llamadas de clientes para su equipo de soporte. ¿Cuál de los siguientes es un requisito funcional válido?
- A El agente debe ser rápido y preciso.
- B El agente produce un resumen que un humano aprueba antes de que se almacene.
- C El sistema debe construirse usando un proveedor de nube aprobado.
- D Los datos de las transcripciones no deben salir de la UE.

Pregunta 2
Del mismo escenario, ¿cuál de los siguientes es un requisito de infraestructura válido?
- A El agente debe producir resúmenes con suficiente rapidez para que el personal de soporte pueda actuar sobre ellos.
- B El agente resume las transcripciones usando una plantilla de prompt preaprobada.
- C Los datos de las transcripciones se procesan en la UE.
- D Un humano revisa cada resumen antes de que se almacene.

---

`[TAG TEACHING]` Enseñanza - Requisitos y Ciclo de Vida · 8 min

# Ciclo de vida de sistemas para aplicaciones de Claude

Los requisitos que acabas de capturar son la primera fase de un arco más largo. Esta pantalla nombra ese arco como el ciclo de vida de sistemas, para que el trabajo de despliegue, versionado y límites del resto de este módulo se ubique en la fase correcta en lugar de llegar como tareas inconexas.

## Las fases del ciclo de vida aplicadas a una aplicación de Claude

Una aplicación de Claude atraviesa el mismo ciclo de vida que cualquier sistema de ingeniería, con el trabajo del modelo mapeado sobre él:

- 1 **Requisitos:** capturar las necesidades funcionales y de infraestructura
- 2 **Diseño:** elegir la plataforma, el modelo y los límites de confianza
- 3 **Construcción:** escribir el agente, las herramientas y los prompts
- 4 **Prueba:** evaluaciones, pruebas unitarias, de integración y de extremo a extremo (*end-to-end*)
- 5 **Despliegue:** fijar la versión, condicionar la promoción a la evaluación
- 6 **Operación:** instrumentar costo, latencia y errores; hacer cumplir los guardarraíles
- 7 **Iteración:** retroalimentar los hallazgos de producción hacia los requisitos

Las fases son las mismas que los módulos anteriores enseñaron una por una. Identificarlas como un ciclo de vida es lo que muestra cómo se conectan.

## Puertas entre fases

Una puerta es una decisión de pasar de una fase a la siguiente, y es donde un proyecto regulado mantiene el control. No pasas de diseño a construcción hasta que la plataforma satisface el requisito de residencia; no pasas de despliegue hacia producción plena hasta que la nueva versión supera la evaluación contra la línea base fijada. Colocar el trabajo de ingeniería en la fase correcta, y negarse a saltar una puerta, es lo que mantiene revisable una aplicación de Claude.

**Nota:**

**Maneja bien**

Colocar cada pieza de trabajo de ingeniería en la fase del ciclo de vida a la que pertenece, con un artefacto y una puerta definidos.

**Agrega costo o complejidad**

Poner puertas entre fases agrega puntos de control que un equipo bajo fecha límite se ve tentado a saltarse.

**Usa un enfoque diferente**

Un experimento puntual puede colapsar fases, pero un despliegue regulado no puede.

---

`[TAG CHECKPOINT]` Punto de control - Requisitos y Ciclo de Vida · 2 min

# Punto de control 4: ubica el trabajo en la fase correcta

Inténtalo ahora. Ubica cada actividad en la fase del ciclo de vida a la que pertenece: requisitos, diseño, prueba, despliegue, operación.

(a) fijar el ID completo del modelo y conservar la versión anterior
- requisitos / diseño / prueba / despliegue / operación

(b) condicionar la promoción al resultado de la evaluación antes de que una versión llegue a producción
- requisitos / diseño / prueba / despliegue / operación

(c) decidir que los datos deben procesarse en una región específica
- requisitos / diseño / prueba / despliegue / operación

(d) instrumentar el costo de tokens y la latencia por llamada en producción
- requisitos / diseño / prueba / despliegue / operación

(e) elegir Amazon Bedrock porque el cliente mantiene allí su postura de cumplimiento
- requisitos / diseño / prueba / despliegue / operación

---

`[TAG TEACHING]` Enseñanza - Despliegue y Versionado · 15 min

# Elegir dónde se ejecuta una carga de trabajo de Claude y versionar lo que se despacha

Un activo empaquetado y uno contribuido son ambos apenas código hasta que algo los ejecuta. El activo ahora enfrenta una pregunta distinta: dónde se ejecuta y cómo bloquear su versión, para que un cambio aguas arriba no se convierta en un cambio no rastreado en producción. Esa decisión de plataforma rara vez se trata solo de mérito técnico. En la práctica, suele estar moldeada por dónde el cliente ya tiene infraestructura de nube, gestión de identidad y acuerdos de cumplimiento vigentes. La primera pregunta suele ser sobre qué plataforma ya opera el cliente y en cuál confía.

## La nube del cliente normalmente determina la plataforma

La **plataforma de despliegue** es el entorno donde se ejecuta la carga de trabajo de Claude. El mismo modelo puede ejecutarse en varios entornos de despliegue, y la nube existente del cliente normalmente determina cuál. La API de Claude de primera parte es el entorno propio de Anthropic y típicamente recibe primero las nuevas características. Claude Platform on AWS se accede a través de la cuenta de AWS del cliente usando los IDs de modelo y el ciclo de vida propios de Anthropic; la inferencia es operada por Anthropic, fuera del límite de AWS. Amazon Bedrock ofrece dos integraciones: Claude in Amazon Bedrock usa la API de Mensajes en /anthropic/v1/messages con amplia paridad de características; confirma cualquier requisito específico de una característica contra la documentación de Bedrock, ya que existe una lista de características no soportadas, mientras que Claude on Amazon Bedrock (heredado) usa las APIs InvokeModel/Converse con identificadores versionados por ARN. Google Vertex AI hace lo mismo dentro de Google Cloud. Las plataformas de terceros, como Microsoft Foundry, incrustan Claude dentro de un producto que el cliente ya usa. Microsoft Foundry ofrece Claude en dos formas de alojamiento: Alojado en Azure (actualmente Claude Opus 4.8, Claude Sonnet 5 y Claude Haiku 4.5, con la inferencia ejecutándose de extremo a extremo (*end-to-end*) en infraestructura de Azure, disponible de forma general) y Alojado en Anthropic (todos los demás modelos Claude de Foundry, con la inferencia en infraestructura operada por Anthropic). Los supuestos de residencia para clientes regulados dependen de la forma de alojamiento del modelo específico. Confirma la forma de alojamiento y la división actual de modelos con Microsoft al momento de construir.

### La identidad y la residencia de datos son importantes para la seguridad

La identidad y la ubicación de los datos las responde la plataforma, no tu código. Bedrock usa la identidad de AWS y mantiene los datos dentro del límite de AWS del cliente; Vertex usa la identidad y el límite de Google Cloud. Ambos ofrecen enrutamiento regional cuando la residencia es una restricción. Hacer coincidir la plataforma con el acuerdo de cumplimiento existente del cliente evita una revisión de residencia de datos desde cero.

### Fija la versión para que un cambio de modelo aguas arriba no sea un cambio silencioso en producción

El versionado es lo que impide que un cambio de modelo o de prompt se convierta en un cambio silencioso en producción. Cada ID de modelo de Claude apunta a una instantánea específica del modelo. Los alias como Opus y Sonnet son convenientes, pero evolucionan con el tiempo y pueden resolverse a versiones diferentes en distintas plataformas de despliegue. Un ID completo de modelo fijado se resuelve a una instantánea fija. Fija la versión específica del modelo en lugar del alias, para que una actualización de modelo aguas arriba sea una elección deliberada y no un cambio silencioso en producción. Luego versiona el prompt y el activo junto con el código. Finalmente, mantén disponible la versión anterior para que la regresión pueda revertirse. Un despliegue sin fijar convierte cada actualización de modelo aguas arriba en un cambio no rastreado en tu salida.

La primera línea sigue un alias móvil. La segunda fija la instantánea.

```python
# Ejemplo anterior a 4.6: un alias de conveniencia puede resolverse a una nueva
# versión sin que te enteres
model = "claude-haiku-4-5"

# Instantánea fijada anterior a 4.6: la versión queda fija hasta que cambies esta línea
model = "claude-haiku-4-5-20251001"
```

Para Claude 4.6 y posteriores, el ID del modelo por sí solo fija una instantánea específica; para modelos anteriores, se requiere el ID más un sufijo de fecha. Verifica la convención actual en platform.claude.com al momento de construir.

### Promueve una versión a través de la evaluación

Condiciona la promoción a la suite de evaluaciones. Envía una nueva versión a una porción del tráfico, compárala contra la línea base fijada, y promueve o revierte según el resultado. Aquí es donde la evaluación deja de ser una prueba única y se convierte en la puerta de despliegue.

### La tabla de decisión de plataforma de despliegue

| Plataforma | Modelo de identidad y datos | Cuándo elegirla | Cómo se fija el versionado |
|-----------|------------------------------|-----------------|----------------------------|
| API de Claude de primera parte | Identidad y términos de Anthropic. | El cliente no tiene una restricción vinculante de nube o de residencia y quiere las capacidades más nuevas. | Fija el ID completo del modelo y conserva la instantánea anterior. |
| Claude Platform on AWS | Identidad y términos de Anthropic, accedidos a través de la cuenta de AWS del cliente; la inferencia es operada por Anthropic fuera del límite de AWS. El ciclo de vida del modelo sigue el calendario de obsolescencia de Anthropic. | El cliente está en AWS pero quiere los IDs de modelo, el ciclo de vida y la paridad de características de Anthropic con la API de primera parte. | Fija usando el mismo formato de ID de modelo que la API de Claude (por ejemplo, claude-opus-4-8). El ciclo de vida sigue el calendario de Anthropic. (Confirma al momento de publicar.) |
| Claude in Amazon Bedrock | API de Mensajes en /anthropic/v1/messages, amplia paridad de características con la API de primera parte; confirma los requisitos específicos de cada característica contra la documentación de Bedrock. Los datos permanecen dentro del límite de AWS configurado por el cliente. | El cliente está en AWS, quiere amplia paridad de características con la API de primera parte (confirma los requisitos específicos de cada característica) y mantiene allí una postura de cumplimiento. | Fija el ID completo del modelo usando el formato con prefijo anthropic. Las fechas de retiro del socio difieren del calendario de Anthropic. Confirma al momento de publicar. |
| Claude on Amazon Bedrock (heredado) | Identidad y facturación de AWS, APIs InvokeModel/Converse con identificadores de modelo versionados por ARN. | El cliente está en una integración existente de Bedrock que usa InvokeModel o Converse y no ha migrado a la API de Mensajes. | Fija mediante identificadores de modelo versionados por ARN según los controles de versionado de Bedrock. |
| Google Vertex AI | Identidad, Gestión de Identidad y Acceso (IAM) y facturación de Google Cloud, con puntos de acceso regionales o globales para la residencia. | El cliente está en Google Cloud y mantiene allí una postura de cumplimiento. | Fija el ID completo del modelo antes del lanzamiento usando el formato de ID de modelo de Vertex. Las fechas de retiro del socio difieren del calendario de Anthropic. |
| Plataforma de terceros | El modelo de identidad y facturación del producto que la envuelve. Nota: Claude en Microsoft Foundry ofrece dos formas de alojamiento: Alojado en Azure (actualmente Opus 4.8, Sonnet 5 y Haiku 4.5; inferencia de extremo a extremo (*end-to-end*) en Azure) y Alojado en Anthropic (todos los demás modelos Claude de Foundry). Confirma los términos de residencia y cumplimiento con Microsoft antes de seleccionar esta ruta para un cliente regulado. | El cliente ya opera la plataforma que incrusta Claude. | Fija según los controles de versionado de la plataforma. |

**Nota:**

**Maneja bien**

Hacer coincidir la plataforma con la nube del cliente y fijar la versión mantiene una migración revisable y una reversión (*rollback*) posible.

**Agrega costo o complejidad**

Fijar versiones, conservar versiones anteriores y condicionar la promoción a la evaluación agregan sobrecarga de proceso de lanzamiento a cada despliegue.

**Usa un enfoque diferente**

Para un prototipo desechable que nunca toca producción, un alias móvil está bien: fijar es para lo que se despacha.

---

`[TAG FAILURE]` Ten cuidado - Despliegue y Versionado · 3 min

## El despliegue que se rompió cuando el alias del modelo avanzó

**Configuración**

Lanzaste contra el alias que apuntaba a la versión recomendada, porque ese era el valor por defecto conveniente y te daba el modelo más reciente gratis. Funcionó. Luego el alias avanzó, y lo que era gratis resultó tener un precio.

Este es un extracto de rastreo (*trace*) de un registro de producción, del tipo que revisarías hacia atrás después de un incidente. Muestra el día en que la forma de la salida cambió y por qué no había nada a lo cual revertir.

**El registro**

```
--: deploy: model="opus" status=ok
--: alias advanced -> new opus version (no app change)
--: parser: KeyError "summary" in response payload
--: Error: output shape changed; downstream parse failed
--: rollback attempted -> no pinned prior version retained
--: incident: hotfix parser; root cause = unpinned deployment
```

**Por qué esto falló**

La aplicación nunca cambió, pero el alias sí. No se había retenido ninguna versión previa fijada, así que no había nada a lo cual revertir. El parche de emergencia reparó el analizador, pero dejó el despliegue sin fijar en su lugar.

**A qué debes prestar atención**

Un alias resuelve a un objetivo móvil; un ID de modelo completo y fijado es una instantánea fija. Fija el ID de modelo completo para que una actualización aguas arriba sea algo que adoptes a propósito. Mantén disponible la versión fijada anterior para que una regresión sea una reversión (*rollback*) y no un parche de emergencia. Somete la nueva versión a tu evaluación antes de promoverla, de modo que el cambio en la forma de la salida aparezca en una corrida de prueba en lugar de en producción.

---

`[TAG CHECKPOINT]` Punto de control - Plataforma de despliegue y versionado · 4 min

# Punto de control 5: Empareja la plataforma de despliegue y la fijación de versión con cada escenario

Inténtalo ahora. Un cliente opera en AWS con un requisito de residencia de datos y necesita poder revertir una actualización de modelo. Selecciona la única pieza correcta en cada grupo a continuación para ensamblar la configuración de despliegue mínima que satisfaga ambos requisitos. Deja fuera lo que no corresponde.

#### Grupo de Plataforma
API de primera parte / Amazon Bedrock / Google Vertex AI

#### Grupo de Identidad
Referencia de identidad de AWS / Clave de API de Anthropic

#### Grupo de referencia de modelo
Un ID de modelo completo fijado / Un alias móvil

#### Grupo de Reversión
Retener la versión fijada anterior / Sin retención

---

`[TAG TEACHING]` Enseñanza - Comparación de Plataformas · 12 min

# Comparar plataformas en latencia, cumplimiento y costo para que la elección sobreviva a la revisión

En las dos pantallas anteriores elegiste una plataforma y fijaste su versión. Esa elección era la correcta para la nube del cliente, pero "correcta para su nube" todavía no es un argumento que un equipo de compras y seguridad vaya a aprobar.

## Mide la latencia desde la región del cliente

La latencia depende de dónde se ejecuta la plataforma en relación con el cliente y de cómo se enruta el acceso a las nuevas características. Una plataforma que se ejecuta en la propia región de nube del cliente puede reducir el tiempo de ida y vuelta en comparación con un punto de acceso de primera parte ubicado más lejos. La contrapartida es el momento del acceso: la API de primera parte típicamente recibe nuevas capacidades antes de que lleguen a otras plataformas. El número solo es preciso cuando lo mides desde la región real del cliente contra su carga útil real. Una medición desde tu laptop oculta la penalización de ida y vuelta que aparece una vez que la carga de trabajo se ejecuta donde está el cliente. Dentro de Bedrock específicamente, la elección entre puntos de acceso globales y regionales es también el control principal de residencia y puede afectar el costo. Deberías medir desde la región real del cliente contra ambas opciones antes de comprometerte.

## El cumplimiento con frecuencia determina la plataforma

El cumplimiento es a menudo la dimensión que zanja el debate. Es poco probable que un cliente que ya posee una certificación en una nube se recertifique en otra. La **residencia de datos** es una regla que exige que los datos de un cliente sean procesados en un país o región específicos. Las certificaciones de cumplimiento disponibles y quién puede auditar el acceso difieren según la plataforma, y un cliente regulado del sector financiero o de salud las trata como criterios de aprobado-o-reprobado en lugar de contrapartidas por equilibrar. La API de Claude de primera parte puede no ofrecer residencia de datos en la UE; confirma la cobertura regional actual en platform.claude.com, dado que la residencia exclusiva en la UE típicamente requiere Bedrock o Vertex AI; en plataformas de terceros como Microsoft Foundry, el alojamiento es por modelo: los modelos de Foundry alojados en Azure ejecutan la inferencia de extremo a extremo (*end-to-end*) en infraestructura de Azure, mientras que los modelos de Foundry alojados por Anthropic no satisfacen los requisitos de residencia regional en la UE. La residencia debe confirmarse por modelo y despliegue con Microsoft. Plantea la restricción de cumplimiento durante el alcance, o aparecerá en la revisión del contrato después de que el trabajo esté terminado.

## Qué impulsa el costo total más allá de la tarifa por token

Las tarifas por token están ampliamente alineadas entre plataformas; el costo total se mueve por la salida de datos, las tarifas de la plataforma y el esfuerzo de integración. Un precio de token más bajo puede costar más en total una vez que se contabilizan la transferencia de datos y la integración. Instrumenta el costo por llamada para cada plataforma. Confirma las páginas de precios vigentes durante el alcance.

### La referencia de comparación entre plataformas

| Dimensión | Cómo difiere por plataforma | Cómo medirla | Dónde gana cada plataforma |
|-----------|------------------------------|--------------|----------------------------|
| Latencia | Una plataforma en la región del cliente acorta el viaje de ida y vuelta, mientras que la API de primera parte puede recibir primero las nuevas características. | Desde la región real del cliente contra su carga útil real. | Una plataforma de nube en la región gana en latencia de ida y vuelta, mientras que la API de primera parte tiene ventaja en el acceso más temprano a características. |
| Cumplimiento | La residencia de datos, las certificaciones y los controles de auditoría los determina la plataforma de despliegue. | Contra la certificación existente del cliente y sus requisitos de residencia durante el alcance. | Gana la plataforma de nube que el cliente ya certificó, porque no necesita recertificación. |
| Costo | El precio por token, la salida de datos, las tarifas de plataforma y el esfuerzo de integración varían todos. | El costo total por llamada por plataforma, incluyendo salida de datos e integración, en lugar del precio del token por sí solo. | Gana la plataforma con el menor costo total para la carga de trabajo real, que no siempre es el token más barato. |

**Nota:**

**Maneja bien**

Medir las tres dimensiones por plataforma convierte una colocación en una que un equipo de compras aprobará.

**Agrega costo o complejidad**

Instrumentar latencia, cumplimiento y costo entre plataformas requiere trabajo de medición real antes de que se despliegue cualquier código.

**Usa un enfoque diferente**

Cuando el requisito de cumplimiento del cliente ya es de aprobado-o-reprobado, omite la comparación completa. Esa restricción determina la colocación por sí sola.

---

`[TAG FAILURE]` Ten cuidado - Comparación de Plataformas · 2 min

## La plataforma elegida por familiaridad que falló en residencia

**Configuración**

Elegiste la plataforma con la que tu equipo ya estaba familiarizado, porque la migración se veía fácil y la fecha límite se acercaba rápidamente. Se construyó sin problemas; el inconveniente fue que fácil-de-construir y permitido-para-desplegar son criterios diferentes.

La siguiente anécdota es del tipo que un desarrollador le cuenta a un compañero después de que una revisión sale mal. Te permite ver la trampa de la plataforma familiar antes de que alguien la llame un error.

### Qué sucedió

Un desarrollador que construía para un cliente regulado eligió la plataforma sobre la que el equipo ya había desplegado antes. La integración se armó rápidamente porque el equipo conocía las herramientas y los recursos. La construcción pasó sus pruebas funcionales. En la revisión de seguridad del cliente, el revisor preguntó dónde se estaban procesando los datos. La plataforma seleccionada no satisfacía los requisitos de residencia del cliente. Una plataforma diferente, una que el equipo conocía menos, habría satisfecho el requisito mediante opciones de despliegue regional que el cliente ya había aprobado. La colocación fue rechazada, y la integración tuvo que reconstruirse sobre la plataforma que cumplía la restricción de residencia.

**Por qué esto falló**

La familiaridad optimizó para la prueba equivocada. La migración fácil respondía si el equipo podía construir rápidamente. Nunca respondió si el despliegue pasaría la revisión de residencia del cliente, que era la prueba que determinaba si podía salir a producción. Como el requisito de cumplimiento no se atendió durante el alcance, llegó a la revisión de aprobación final. Este es el lugar más costoso para descubrirlo, porque la construcción ya estaba completa.

**A qué debes prestar atención**

Una plataforma que es fácil para que tu equipo construya sobre ella no es necesariamente una plataforma que el cliente tiene permitido ejecutar. Cuando el cliente está regulado, la restricción de residencia y cumplimiento es a menudo de aprobado-o-reprobado, en lugar de una contrapartida. Identifícalas temprano durante el alcance y deja que influyan en la colocación antes de que lo haga la familiaridad. Verificar temprano cuesta una conversación de alcance, mientras que verificar tarde cuesta una reconstrucción completa.

---

`[TAG CHECKPOINT]` Punto de control - Comparar plataformas en latencia, cumplimiento y costo · 3 min

# Punto de control 6: Diagnostica el desajuste de plataforma a partir de un rastreo de comparación

Inténtalo ahora. El rastreo (*trace*) de comparación a continuación muestra una plataforma de despliegue seleccionada por familiaridad que falla un requisito del cliente. Identifica el mecanismo, y luego elige el arreglo puntual entre las tres opciones.

**El rastreo**

```
platform_selected = "team_default"  # elegida por familiaridad
latency_test: measured from dev laptop -> 180ms (looked fine)
customer_region: eu-west, payload 12 KB
compliance_check: data residency = EU-only required
result: REJECTED reason="data processed outside EU on selected platform"
```

**A** Opción 1: Optimizar el analizador para recortar los 180 ms de latencia medidos en la laptop.
**B** Opción 2: Volver a medir la latencia desde eu-west y seleccionar la plataforma cuya región satisfaga la residencia exclusiva en la UE.
**C** Opción 3: Agregar una capa de caché para reducir el costo por llamada en la plataforma seleccionada.

---

`[TAG TEACHING]` Enseñanza - Límites de Confianza · 14 min

# Coordinar varios despliegues de Claude con los límites de confianza sosteniéndose bajo revisión

Los aceleradores, despliegues y contrapartidas ahora se juntan en una sola aplicación. Conectar componentes multiplica los lugares donde la identidad, los secretos y la entrada no confiable pueden cruzar. La disciplina consiste en identificar cada límite antes de conectar nada.

## Mapea qué hace cada componente antes de conectarlos

Una aplicación multicomponente coordina más de una capacidad de Claude dentro de un solo flujo de trabajo. Una solicitud de API podría disparar una tarea de Claude Code, la cual luego alcanza un sistema del cliente a través de un servidor MCP. Cada componente aporta una capacidad que los otros no tienen. El desafío es que cada conexión entre ellos crea un lugar donde la identidad, los secretos y la entrada no confiable pueden cruzar. Mapea qué hace cada componente antes de conectar nada.

## El límite de confianza es donde los datos se mueven

El **límite de confianza** es el punto donde los datos o las instrucciones se mueven de un entorno de despliegue a otro. Es exactamente donde aplican los controles de inyección y de acceso del módulo anterior. El contenido obtenido por una tarea de Claude Code es no confiable cuando llega al siguiente componente. El componente receptor debería tratarlo como datos, en lugar de como instrucciones, siguiendo el mismo principio usado a lo largo del módulo de seguridad. La disciplina central aquí es identificar cada costura (*seam*) como un límite. No asumas que un componente es confiable simplemente porque funcionó correctamente por su cuenta.

## El privilegio mínimo aplica a toda la aplicación

La identidad y el privilegio mínimo (*least privilege*), que significa dar a cada componente solo el acceso que su tarea necesita y nada más, aplican a la aplicación en su conjunto. Cada componente opera bajo una identidad. La aplicación está contenida solo tanto como lo esté su costura (*seam*) más privilegiada, lo que significa que un solo componente con un alcance demasiado amplio se convierte en el punto débil aun cuando todos los demás componentes estén correctamente acotados. Acotas cada componente al privilegio mínimo que requiere su rol en el flujo de trabajo. Esto es lo que impide que un componente manipulado alcance más allá de su tarea prevista.

## Definir el alcance para una revisión regulada une el módulo

Una revisión regulada exige justificar el registro de auditoría, las decisiones de residencia de datos y los controles de permisos a lo largo de toda la aplicación. Para despliegues regulados, Bedrock y Vertex AI son típicamente las plataformas que satisfacen las restricciones de residencia regional. Confirma la elegibilidad para ZDR y para el BAA de HIPAA de cada componente contra el Anthropic Trust Center y platform.claude.com antes de definir el alcance.

### El mapa de integración multicomponente

| Componente | Qué aporta | El límite de confianza en su costura (*seam*) | El control que lo hace cumplir |
|------------|-----------|--------------------------------------|--------------------------------|
| API de primera parte | Orquesta el flujo de trabajo y sostiene el punto de entrada. | La solicitud que entra a la aplicación desde el exterior. | Validación de entrada y la identidad bajo la cual se ejecuta la llamada. |
| Tarea de Claude Code | Ejecuta el trabajo agéntico y puede obtener contenido externo. | El contenido que obtuvo, que es no confiable aguas abajo. | Tratar el contenido obtenido como datos en la siguiente costura. |
| Servidor MCP | Alcanza un sistema del cliente para leer o actuar. | El acceso al sistema que sostiene en nombre de la aplicación. | Acotar el servidor al privilegio mínimo (*least privilege*) y registrar el acceso. |

**Nota:**

**Maneja bien**

Nombrar cada costura como un límite y acotar cada componente al privilegio mínimo hace que una aplicación multicomponente sea desplegable bajo revisión.

**Agrega costo o complejidad**

Mapear costuras, hacer cumplir controles en cada una y registrar los cruces de límites agrega trabajo de diseño y de auditoría a cada integración.

**Usa un enfoque diferente**

Cuando una costura no puede asegurarse, no la esquives para desplegar: escala el asunto a un responsable humano.

---

`[TAG FAILURE]` Ten cuidado - Límites de Confianza · 2 min

## La costura que nadie marcó como límite

**Configuración**

Conectaste los componentes, cada uno de los cuales pasó sus propias pruebas. Las partes ya estaban verificadas y conectar partes verificadas se siente seguro. Cada una era confiable de forma aislada. La brecha era que una costura (*seam*) entre dos partes confiables no puede ser confiable automáticamente por sí misma.

Esta es una transcripción breve de una sesión de emparejamiento, del tipo de ida y vuelta que termina en el momento en que se identifica la costura sin marcar.

### La sesión

**Dev A:** Los tres componentes pasan sus propias pruebas. Ya los conecté.
**Dev B:** ¿A dónde envía la tarea de Claude Code lo que obtuvo?
**Dev A:** Directo a la siguiente llamada como parte del prompt. Es solo el contenido que extrajimos de la página del cliente.
**Dev B:** Ese contenido es no confiable. Si lleva instrucciones, el siguiente componente las ejecuta, porque nunca marcamos esa costura (*seam*) como un límite.
**Dev A:** Pero cada componente era confiable por su cuenta.
**Dev B:** Correcto, y la costura entre ellos no lo era. Esa es la que nadie trató como un límite, así que el contenido obtenido cruza como instrucciones.

**Por qué esto falló**

Que cada componente hubiera pasado sus propias pruebas no decía nada sobre la costura entre ellos. El contenido obtenido era no confiable desde el momento en que salió de la tarea de Claude Code. Llegó desde un componente que funcionaba de forma aislada y fue pasado a la siguiente llamada como si fueran instrucciones confiables. El límite existía en el flujo de datos. Simplemente no estaba marcado, así que ningún control lo verificó. Un componente que pasa sus propias pruebas no tiene controles a nivel de costura. Cada punto donde los datos cruzan entre entornos de despliegue requiere un control de límite explícito, sin importar cómo se comporte cada componente de forma independiente.

**A qué debes prestar atención**

Un componente que es confiable de forma aislada no vuelve automáticamente confiable la costura que sale de él. Marca como límite cada lugar donde los datos o las instrucciones cruzan de un entorno de despliegue a otro. Pon ahí un control que trate el contenido obtenido como datos en lugar de como instrucciones, exactamente como lo enseñó el trabajo de seguridad. La costura que nadie identifica es la que cruza una acción manipulada.

---

`[TAG CHECKPOINT]` Punto de control - Aplicación multicomponente y límites de confianza · 3 min

# Punto de control 7: Completa la configuración de límites multicomponente

Inténtalo ahora. La aplicación multicomponente a continuación está conectada, con dos espacios en blanco. Arrastra el control correcto sobre la costura (*seam*) que recibe el contenido obtenido no confiable y arrastra el alcance de identidad correcto sobre el componente más privilegiado.

**La aplicación parcial**

```python
# componentes conectados: API -> tarea de Claude Code -> servidor MCP
fetched = code_task.run(fetch_url=customer_page)
# ESPACIO 1: control en la costura que recibe contenido obtenido no confiable
next_call(input=arrastra aquí(fetched))
# el servidor MCP alcanza el sistema del cliente (componente más privilegiado)
mcp_server = MCPServer(
    system=customer_db,
    scope=arrastra aquí,  # ESPACIO 2: alcance de identidad
)
```

**Arrastra los tokens (banco compartido, dos son distractores)**
`treat_as_data` / `least_privilege_read_only` / `run_as_instructions` / `full_access`

---

`[TAG CUMULATIVE]` Acumulativa - Todos los temas · 6 min

# Tarea acumulativa: Encuentra los tres, explica cada uno, escribe la corrección

A continuación hay un acelerador empaquetado ejecutable, desplegado en varias plataformas. Hay tres defectos plantados: uno en la capa de empaquetamiento, uno en la capa de despliegue y versionado, y uno en la capa de límites multicomponente. Tu tarea es encontrar los tres.

**El despliegue tal como se envió**

```python
# Acelerador de revisión de código empaquetado, desplegado para un cliente regulado de AWS
def build_agent():
    return Agent(
        model="opus",
        system_prompt=SYSTEM_PROMPT,
        repo_path="/home/acme/checkout",
        tools=[read_file, run_linter],
    )

deploy(platform="amazon_bedrock", identity=aws_role_arn)
# paso multicomponente: la tarea de Claude Code obtiene una página del cliente
fetched = code_task.run(fetch_url=customer_page)
next_call(input=fetched)
```

*Lleva tus tres líneas corregidas a la siguiente pantalla, donde ensamblarás y verificarás el despliegue arreglado.*

En tus propias palabras, identifica los tres defectos.

---

`[TAG CUMULATIVE]` Acumulativa - Todos los temas · 6 min

# Tarea acumulativa: ensambla y verifica el despliegue corregido

Has identificado tres defectos a lo largo de este módulo. Ahora ensambla el arreglo: en tus propias palabras, describe cuál era cada defecto, qué cambiaste y por qué la versión corregida es desplegable. Luego revisa el código corregido a continuación y confirma que tu razonamiento se sostiene.

Cuando estés listo, revela la respuesta modelo.

**El despliegue corregido**

```python
def build_agent(repo_path):  # parametrizado para reutilización
    return Agent(
        model="us.anthropic.claude-opus-4-8",  # ID de modelo completo de Bedrock, fijado
        system_prompt=SYSTEM_PROMPT,
        repo_path=repo_path,  # se establece por cada proyecto
        tools=[read_file, run_linter],
    )

deploy(platform="amazon_bedrock", identity=aws_role_arn,
       retain_previous_pinned_version=True)  # se conserva el objetivo de reversión
fetched = code_task.run(fetch_url=customer_page)
next_call(input=treat_as_data(fetched))  # no confiable -> datos, no instrucciones
# verifica antes de promover: somete la versión a la evaluación incluida
assert eval_suite.run(model="us.anthropic.claude-opus-4-8") >= baseline_score
```

**Respuesta modelo:** El primer defecto era una ruta de repositorio escrita en duro. Parametrizarla restaura la reutilización: un nuevo proyecto establece el valor en lugar de editar el bucle. El segundo defecto era un alias de modelo móvil. Fijar el ID de modelo completo de Bedrock (con el prefijo anthropic.) junto con una versión previa retenida restaura el despliegue controlado y da un objetivo de reversión (*rollback*) si la nueva versión sufre una regresión. El tercer defecto era el contenido obtenido pasado directamente como instrucciones. Envolverlo en `treat_as_data()` cierra el límite de confianza: el contenido de una fuente no confiable se trata como datos, no como algo sobre lo cual el agente deba actuar. La aserción de la evaluación condiciona la promoción a una puntuación de referencia comprobada antes de que la versión salga a producción.

---

`[TAG MODULE]` Recapitulación - Todos los temas · 3 min

# Conclusiones clave

**01**

#### Empaqueta mientras la construcción está fresca.
Un acelerador conserva la lógica reutilizable, expone las partes específicas del cliente como parámetros documentados y agrupa la evaluación y el registro de auditoría junto al activo. Un empaquetamiento correcto produce un activo que los equipos configuran. El conocimiento de qué es específico del cliente es lo más costoso de reconstruir después de que las personas que lo poseían se han ido.

**02**

#### Un mantenedor acepta lo que puede verificar.
Mover un activo a infraestructura compartida significa emparejarlo con el canal construido para su forma, y luego superar el estándar de revisión: código enfocado, un ejemplo ejecutable, una prueba y una declaración de supuestos, con los derechos de licenciamiento confirmados antes de la revisión técnica. Una contribución que un revisor no puede verificar se queda al final de la cola. La preparación es lo que mueve un activo privado hacia la infraestructura compartida sobre la que otros construyen.

**03**

#### Fija lo que sale a producción.
Elige la plataforma de despliegue con base en la nube y la postura de cumplimiento del cliente, luego fija la versión específica del modelo en lugar del alias móvil y mantén disponible la versión anterior. Un alias es como pedir la edición actual de un libro: conveniente, pero el texto puede cambiar. Fijar cita una edición fija, de modo que un cambio de modelo aguas arriba es algo que adoptas deliberadamente en lugar de algo que llega de un día para otro sin ruta de reversión (*rollback*).

**04**

#### Mide la dimensión que decide la colocación.
Una elección de plataforma es defendible solo cuando se miden la latencia, el cumplimiento y el costo: la latencia desde la región del cliente, el cumplimiento contra su certificación existente y el costo como el total por llamada en lugar del precio del token por sí solo. Para clientes regulados, el cumplimiento suele ser de aprobado-o-reprobado. Plantear el cumplimiento como restricción durante el alcance evita que rechace la construcción más tarde en la revisión del contrato.

**05**

#### Marca cada costura como un límite.
Una aplicación multicomponente está contenida solo tanto como lo esté su costura (*seam*) más privilegiada. Acota cada componente al acceso mínimo que su rol requiere y trata cada punto donde los datos cruzan como un límite de confianza. El contenido obtenido se trata como datos, no como instrucciones. La confianza en un límite de componente debe establecerse explícitamente. No se hereda del componente que envió los datos. Cuando una costura no puede asegurarse, va a un responsable humano en lugar de salir a producción.

**Nota:**

**Qué viene después**

Ahora puedes empaquetar una construcción en un activo reutilizable, contribuirlo de vuelta, colocarlo y versionarlo en la plataforma correcta, defender esa colocación y conectar componentes entre sí de modo que los límites se sostengan. Eso completa el arco de construcción-a-despliegue para este perfil: desde escribir código de producción en los módulos anteriores hasta entregar activos que un cliente regulado puede auditar y un equipo puede reutilizar.

### Referencias públicas de Anthropic (sensibles al tiempo)

| ID | Fuente | Tipo | Usada para |
|----|--------|------|------------|
| S1 | platform.claude.com (Claude in Amazon Bedrock, Claude on Vertex AI) | Documentación de producto | Plataformas de despliegue, modelos de identidad y de datos, enrutamiento de residencia, puntos de acceso regionales y globales. |
| S2 | platform.claude.com (IDs de modelo y versionado, Obsolescencia de modelos) | Documentación de producto | IDs de modelo fijados, resolución de alias, ciclo de vida y retiro, calendarios definidos por los socios. |
| S3 | anthropic.com y la organización de Anthropic en GitHub (Cookbook) | Producto y repositorio | Canales de contribución, el Cookbook como hogar para ejemplos enfocados, convenciones de contribución. |
| S4 | Building with the Claude API (Skilljar) | Fuente del curso | Conjuntos de datos de evaluación, calificadores y la canalización de evaluación usada como puerta de despliegue. |
| S5 | Claude Code 101 In Action (Skilljar) | Fuente del curso | Tareas agénticas de Claude Code y roles del servidor MCP en un flujo de trabajo multicomponente. |

## Ahora puedes llevar una construcción funcional hasta convertirla en un activo desplegable y auditable.
Empaquétalo, contribúyelo, colócalo y versiónalo, defiende esa colocación y sostén los límites juntos bajo revisión.

---

`[TAG MODULE]` Glosario - Términos Clave · 3 min

# Términos clave de este módulo

Alfabético. Haz clic en un término para expandir su definición.

**Accelerator (Acelerador)**
Una solución funcional empaquetada de modo que el siguiente proyecto (*engagement*) la configure en lugar de reconstruirla. Las partes específicas del cliente se exponen como parámetros documentados, los supuestos quedan por escrito y se incluye una evaluación para probar que el activo sigue funcionando en un contexto nuevo.

**Contribution readiness (Preparación para contribuir)**
Lo que un mantenedor necesita para verificar una contribución: código enfocado, un ejemplo ejecutable, una prueba que demuestre el comportamiento, una declaración de los supuestos del entorno y derechos confirmados para contribuir el código.

**Deployment platform (Plataforma de despliegue)**
Dónde se ejecuta una carga de trabajo de Claude. Las seis son: la API de Claude de primera parte, Claude Platform on AWS, Claude in Amazon Bedrock, Claude on Amazon Bedrock (heredado), Google Vertex AI y las plataformas de terceros. El mismo modelo puede diferir según la plataforma en identidad, residencia de datos, latencia y costo.

**Model alias versus pinned ID (Alias de modelo frente a ID fijado)**
Un alias como opus o sonnet resuelve a una versión recomendada que se actualiza con el tiempo y puede diferir según la plataforma. Un ID de modelo completo fijado es una instantánea fija. Fijar es lo que impide que un cambio de modelo aguas arriba se convierta en un cambio silencioso en producción.

**Trust boundary (Límite de confianza)**
La costura (*seam*) donde los datos o las instrucciones se mueven de un entorno de despliegue a otro en una aplicación multicomponente. El contenido obtenido por un componente es no confiable cuando llega al siguiente, así que el componente receptor lo trata como datos, no como instrucciones.

---

`[TAG MODULE]` Módulo Completado - Ruta de Desarrollador · 2 min

# ¡Felicidades! Has completado exitosamente este módulo.

Ahora puedes llevar una construcción funcional hasta convertirla en un activo desplegable y auditable: un acelerador reutilizable, una contribución que un mantenedor puede verificar, una plataforma de despliegue elegida y versionada a propósito, y cada costura (*seam*) de una aplicación multicomponente marcada como un límite de confianza.

**El hilo conductor: el punto donde el código empieza a funcionar es donde comienza el trabajo de este módulo.**

4 de 9 puntos de control aprobados

**M1**
MSO Foundations
Tokens, ventanas de contexto, muestreo, niveles de modelo, modos de prompting y la mecánica de transporte de la API.

**M2**
Production-Grade Prompting, Agents & Tool-use
Prompts listos para producción, bucles de uso de herramientas, streaming, gestión de contexto y memoria, y bucles de agente con puntos de control.

**M3**
Claude Code, MCP & Integration
Modos de permiso, contexto de proyecto duradero, empaquetamiento de plugins e integración MCP sin filtrar credenciales.

**M4**
Production Engineering, Evals, and Security
Demuestra que el sistema se sostiene bajo tráfico de producción y sobrevive a una revisión de seguridad.

**M5**
Accelerators and IP Contribution
Empaqueta aceleradores, prepara contribuciones verificables, elige plataformas de despliegue y marca límites de confianza.

Estás aquí. Finalización del módulo registrada. Pantalla 1 de 25

---

*Fuente: Accelerators & IP Contribution_files/Developer_M5_vF2.html*
