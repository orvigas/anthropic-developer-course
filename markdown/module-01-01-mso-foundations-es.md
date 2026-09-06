# Fundamentos de MSO: Módulo 1 para Desarrolladores

**Módulo 1 de 5**

---

Desarrollador · Módulo 1
# Fundamentos de MSO
Antes de escribir una sola línea de código con Claude, es útil entender qué significan las palabras. Este módulo introduce los fundamentos del modelo y las bases técnicas que el resto del curso de Desarrollador asume que ya dominas.

Tabla de contenidos
- Orientación: 1 pantalla
- Orientación

- Comportamiento de LLMs: 1 pantalla
- Enseñanza

- Modelos y Razonamiento: 1 pantalla
- Enseñanza

- Modos de Prompting: 1 pantalla
- Enseñanza

- Sustrato Técnico: 1 pantalla
- Enseñanza

- Conclusión del Módulo: 4 pantallas
- Cuestionario del Módulo
- Ejercicio
- Resumen
- Módulo Completado

9 pantallas · 6 secciones · 59 minutos · 2 puntos de control

- Enseñanza
- Enseñanza
- Enseñanza
- Enseñanza
- Cuestionario del Módulo
- Ejercicio
- Resumen
- Módulo Completado

`[TAG MODULE]` Módulo 1 - Orientación · 2 min
# Qué podrás hacer al final

Antes de escribir una sola línea de código con Claude, es útil entender qué significan las palabras.
Este módulo introduce los fundamentos del modelo y las bases técnicas que el resto del curso de Desarrollador asume que ya dominas.

## Al final de este módulo, podrás:
- 1. Explicar qué es un token, cómo funciona la ventana de contexto como un presupuesto fijo, por qué el muestreo hace que las salidas varíen y qué significa el no-determinismo para las pruebas y evaluaciones.
- 2. Describir la familia de modelos Claude y sus niveles de capacidad, y distinguir entre elegir un modelo y habilitar un modo de razonamiento como el pensamiento extendido.
- 3. Elegir entre prompting zero-shot, one-shot y multi-shot, y evaluar el equilibrio entre costo y calidad al agregar ejemplos.
- 4. Describir cómo un desarrollador accede a Claude: SDK versus REST directo, respuestas síncronas versus streaming, y patrones asincronos para trabajo de alto volumen.

Descargo de responsabilidad / Aviso para Contenido Educativo

Construimos este Módulo 1 del Curso de Desarrolladores (Fundamentos de MSO) para ayudarte a hacer trabajo real con Claude. Trátalo como contenido educativo. No constituye asesoramiento legal, financiero u otro tipo de asesoramiento profesional, así que adapta lo que aprendas a tu propia situación. Nuestros productos y servicios evolucionan rápidamente, así que cierto contenido puede contener errores u estar desactualizado; recuerda verificar en el sitio web o documentación de Anthropic. Los ejemplos y escenarios utilizados en el curso son ilustrativos y a menudo ficticios. Si el material del curso menciona una empresa o producto, no significa que Anthropic los respalde, que ellos respalden a Anthropic, o que seamos afiliados. También ten en cuenta que tu uso de los productos y servicios de Anthropic está cubierto por nuestros términos, políticas y documentación; si algo en este curso entra en conflicto con ellos, esos términos prevalecen.

`[TAG TEACHING]` Enseñanza - Comportamiento de LLMs · 12 min
# Cómo se comportan los LLMs: tokens, contexto, muestreo, no-determinismo

### Tokens: la unidad de entrada, salida y costo

Claude no lee caracteres o palabras directamente. Lee **tokens**, y el promedio de caracteres por token depende del tokenizador del modelo en cuestión y difiere entre generaciones de modelos. Trata cualquier regla práctica de caracteres por token como dependiente del modelo y confirma el comportamiento del tokenizador actual en tiempo de compilación. Todo lo que procesa el modelo se cuenta en tokens: tu prompt, el historial de la conversación, definiciones de herramientas, resultados de herramientas y la respuesta que genera el modelo. Los tokens son la unidad tanto de la tarificación como del presupuesto, así que cuando estimes cuánto cuesta una característica o si una entrada cabe, estás contando tokens, no palabras. Es útil acostumbrarse a pensar en tokens, ya que esa es la unidad que factura la API y que mide la ventana de contexto.

### La ventana de contexto: un presupuesto fijo

La **ventana de contexto** es el número total de tokens que el modelo puede recibir en una sola solicitud. Contiene todo a la vez: el prompt del sistema, toda la conversación hasta ahora, cualquier documento que inyectes, cada resultado de herramienta y la salida del modelo. Es un presupuesto fijo con dos comportamientos distintos en los límites. Una solicitud cuya entrada ya es más grande que la ventana se rechaza con un error de validación antes de que comience la generación. Una solicitud que cabe en la entrada aún puede alcanzar el techo durante la generación. Los modelos actuales entonces se detienen y devuelven la salida generada hasta ese momento con una razón de parada model_context_window_exceeded en lugar de lanzar un error. De cualquier forma, mantener una sesión larga en ejecución requiere que la aplicación recorte o resuma el historial antes de cada llamada. En desarrollo, la ventana rara vez se llena porque los inputs de prueba son cortos. En producción, por otro lado, los inputs más largos y más turnos llenan la ventana más rápidamente. Este es el fallo que el Módulo 2 explora en detalle.

### Muestreo: por qué el mismo prompt puede dar respuestas diferentes

Un modelo de lenguaje no elige un único token siguiente fijo. En cada paso produce una distribución de probabilidad sobre posibles tokens siguientes y luego **muestrea** de ella. Configuraciones como la temperatura dan forma a esa distribución: una temperatura más baja concentra la probabilidad en los tokens más probables y hace que la salida sea más repetible, mientras que una temperatura más alta la dispersa y hace que la salida sea más variada. Debido a que la elección se muestrea en lugar de ser fija, el mismo prompt ejecutado dos veces puede devolver redacciones diferentes incluso cuando ambas respuestas son correctas. Esta es una propiedad de cómo genera el modelo. Ten en cuenta que los controles de muestreo dependen del modelo: los modelos Claude más nuevos no aceptan parámetros de muestreo no predeterminados. Establecer temperatura, top_p o top_k devuelve un error 400, y el comportamiento en esos modelos se controla mediante prompting en su lugar. Incluso donde se acepte la temperatura, una temperatura de 0 hace que las salidas sean más repetibles pero no garantiza salidas idénticas entre llamadas. Confirma la compatibilidad actual de parámetros en la referencia de API en tiempo de compilación.

### No-determinismo: qué significa para las pruebas y evaluaciones

El **no-determinismo** es la consecuencia principal del muestreo: entradas idénticas no garantizan salidas idénticas. Eso cambia cómo pruebas una característica de Claude. Una prueba que afirma el texto exacto de una respuesta será inconsistente, porque el modelo puede expresar la misma respuesta correcta de muchas formas. En su lugar, afirma la propiedad que debe cumplirse: un campo requerido está presente, un valor está en rango, la estructura se analiza correctamente. Cuando necesites juzgar el significado en lugar de la estructura, usa una evaluación con un juez calificado por modelo. Por eso el curso trata las evaluaciones como el estándar para saber que una característica es correcta, y por qué el Módulo 3 construye esa capacidad.

`[TAG TEACHING]` Enseñanza - Modelos y Razonamiento · 10 min
# Opciones de modelos y modos de razonamiento

### La familia de modelos Claude

Claude es una familia de modelos que actualmente abarca cuatro niveles: Fable, Opus, Sonnet y Haiku. Cada modelo representa un equilibrio diferente entre costo, latencia y capacidad. Sonnet es el valor predeterminado equilibrado para la mayoría de las cargas de trabajo de producción. Haiku está construido para velocidad y eficiencia de costo en tareas que se ajustan a su envolvente de capacidad. Opus maneja trabajo exigente por encima del envolvente de Sonnet, y Fable es el nivel más capaz, construido para el razonamiento más exigente, codificación y trabajo de agentes donde la inteligencia máxima es la prioridad. El valor predeterminado práctico es comenzar con Sonnet, subir de nivel solo cuando una evaluación muestre que el nivel actual no alcanza tu barra de calidad, y bajar a Haiku solo cuando una evaluación muestre que la caída de calidad es aceptable para la tarea. Confirma la alineación del modelo actual y los identificadores contra platform.claude.com/docs en tiempo de compilación, ya que la familia Claude está evolucionando.

### Los modos de razonamiento son una configuración separada de la elección de modelo

Elegir qué modelo ejecutar es una decisión. Si el modelo razona antes de responder es una decisión separada que tomas por llamada. En los modelos actuales el modo de razonamiento es pensamiento adaptativo: el modelo decide cuándo y cuánto pensar, y ajustas la profundidad con una configuración de esfuerzo (*effort setting*) en lugar de un presupuesto de tokens fijo (el control budget_tokens más antiguo está en desuso y, en las generaciones de modelos más nuevas, devuelve un error 400). El contenido de pensamiento se omite de las respuestas de forma predeterminada en los modelos más nuevos. Solicita una pantalla resumida cuando necesites mostrarlo. El razonamiento justifica su costo en problemas duros y de múltiples pasos y se desperdicia en búsquedas y clasificación. El punto clave para este módulo es que los dos controles se componen: la elección de modelo selecciona el miembro de la familia, mientras que el modo de razonamiento se configura por solicitud. Los valores predeterminados por modelo difieren (algunos de los modelos más nuevos piensan de forma adaptativa de forma predeterminada o siempre), así que confirma los valores predeterminados de pensamiento actuales para tu modelo en tiempo de compilación.

### Cómo trabajan juntos

Debido a que la elección de modelo y el modo de razonamiento son independientes, cada uno se puede configurar por separado. Un modelo capaz sin razonamiento es rápido y directo, mientras que un modelo más pequeño con razonamiento gasta más tokens pensando. Las tareas más exigentes emparejan un modelo capaz con una configuración de esfuerzo (*effort setting*) más alta. El Módulo 2 enseña la mecánica de habilitar el razonamiento y manejar los bloques de pensamiento (*thinking blocks*) que devuelve. La decisión de qué modelo ejecutar, ponderada contra costo, latencia y calidad, se trata en el Módulo 4.

`[TAG TEACHING]` Enseñanza - Modos de Prompting · 8 min
# Modos de prompting: zero-shot, one-shot, multi-shot

### Los tres modos

Separado de cómo redactes un prompt está cuántos ejemplos de trabajo completo das al modelo dentro de él. **Zero-shot** proporciona la instrucción y sin ejemplos: describes la tarea y pides el resultado. **One-shot** agrega un ejemplo de la entrada emparejada con la salida deseada. **Multi-shot**, también llamado few-shot, incluye varios ejemplos de este tipo. Los ejemplos no son datos de entrenamiento; se encuentran en el prompt y muestran al modelo la forma exacta de la respuesta que deseas, algo que solo una descripción a menudo no logra precisar.

### El equilibrio entre costo y calidad

Cada ejemplo que agregas cuesta tokens en cada llamada y consume presupuesto de contexto, así que la elección intercambia calidad por costo. Recurre a zero-shot cuando la tarea es simple y la forma de salida es obvia. Pasa a one-shot o multi-shot cuando la salida tiene una estructura específica, mayúsculas o casos extremos que la descripción sigue perdiendo. A menudo uno o dos ejemplos correctos usualmente resuelven el problema más rápido que otro párrafo de instrucciones. La disciplina general, que el Módulo 2 refuerza, es agregar la menor cantidad de prompt que produce un resultado confiable.

### La elección de modo interactúa con la elección de modelo

El modo de prompting y la elección de modelo son controles relacionados. Un modelo más capaz a menudo tiene éxito zero-shot en una tarea donde un modelo más pequeño necesita algunos ejemplos para coincidir con la estructura, así que agregar ejemplos puede permitir que un modelo más barato haga el trabajo. Las dos decisiones vale la pena hacerlas juntas: prueba el modelo más simple y la menor cantidad de ejemplos que cumplan tu evaluación, y agrega capacidad o ejemplos solo donde la evaluación dice que los necesitas.

`[TAG TEACHING]` Enseñanza - Sustrato Técnico · 12 min
# El sustrato técnico: SDKs, REST, streaming, async

### Cómo accede un desarrollador a Claude: SDK versus REST directo

En esencia, Claude se alcanza a través de una API REST HTTP: tu código envía una solicitud a un punto final con tu clave de API y un cuerpo JSON, y lee una respuesta JSON de vuelta. Puedes llamar a ese punto final directamente con cualquier cliente HTTP. Más comúnmente usas un SDK oficial, disponible para Python y TypeScript entre otros, que es una capa de conveniencia delgada sobre la misma API REST. Maneja la autenticación, construcción de solicitudes, reintentos y análisis de respuesta para que escribas menos código boilerplate. El SDK y REST directo alcanzan la misma API y el mismo modelo. El SDK te ahorra de ensamblar solicitudes manualmente. El Módulo 2 se construye contra el SDK y la API de Mensajes, que descansa en esta misma base.

### Respuestas síncronas, streaming y en tiempo real

Una solicitud **síncrona** es el patrón más simple: envías la solicitud y esperas a que la respuesta completa vuelva en una pieza, luego actúas sobre ella. Eso está bien para respuestas cortas y trabajos de backend donde nadie está esperando. Cuando una respuesta es larga o un usuario está viendo, **streaming** envía la respuesta en piezas mientras el modelo la genera. La salida aparece inmediatamente en lugar de después de una espera de pantalla en blanco, y tu código reensambla las piezas en el mensaje final. Claude expone streaming sobre la misma conexión HTTP usando eventos enviados por servidor. El Módulo 2 enseña cómo consumir un stream de manera segura y recuperarse cuando se interrumpe.

### Patrones asincronos para trabajo de alto volumen

Dos patrones abordan el trabajo de alto volumen, y resuelven diferentes problemas.

El SDK de Python expone un cliente async (AsyncAnthropic) que usa async/await sin bloqueo para hacer llamadas a API sin atar el hilo de tu aplicación. En el SDK de TypeScript el cliente estándar de Anthropic está basado en Promesas, así que esperas llamadas directamente. No hay una clase de cliente async separada. De cualquier forma la solicitud aún se devuelve en tiempo real, pero tu aplicación puede manejar otro trabajo mientras espera. Este es el patrón correcto cuando necesitas concurrencia sin bloqueo.

La **API de Lotes de Mensajes** es un patrón separado para cargas de trabajo sin conexión masivas. Envías un gran conjunto de solicitudes en una llamada, recibes un identificador, y sondejas la finalización. Los trabajos de lote pueden tomar hasta 24 horas en completarse y se ejecutan a un costo por token más bajo a cambio de esa latencia. Esto se adapta a canales sin conexión, ejecuciones de evaluación y trabajos masivos donde ningún usuario espera en cada resultado y el costo es más importante que el tiempo de respuesta.

`[TAG CHECKPOINT QUIZ]` Cuestionario - Módulo 1 · 5 min
# Cuestionario del módulo

Inténtalo ahora. Aquí hay algunas preguntas de opción múltiple para probar tu comprensión del curso hasta ahora.

**Pregunta 1:** Un compañero de equipo dice que dos prompts idénticos deben devolver texto idéntico. ¿Cuál es la respuesta más precisa?
- A. Eso es verdad, el modelo es determinista.
- B. No necesariamente, el modelo muestrea cada token siguiente de una distribución de probabilidad, así que la redacción puede variar incluso cuando ambas respuestas son correctas.
- C. Eso es solo verdad si el streaming está desactivado.
- D. Eso es solo verdad en el modelo más grande.

**Pregunta 2:** ¿Cuál afirmación separa mejor la elección de modelo del modo de razonamiento?
- A. Son la misma configuración.
- B. El pensamiento extendido es un modelo diferente.
- C. La elección de modelo selecciona qué miembro de la familia se ejecuta; el pensamiento extendido es una configuración por llamada que cualquier modelo compatible puede ejecutar activado o desactivado.
- D. El modo de razonamiento se fija por cuenta.

**Pregunta 3:** Una tarea de clasificación corta y bien especificada devuelve la respuesta correcta zero-shot. ¿Qué probablemente hace agregar tres ejemplos?
- A. Mejora sustancialmente la precisión.
- B. Agrega costo de token en cada llamada por poco o ninguna ganancia.
- C. Cambia el modelo que se está utilizando.
- D. Desactiva el muestreo.

**Pregunta 4:** Debes procesar miles de inputs sin conexión al costo más bajo. ¿Cuál forma se ajusta?
- A. Llamadas síncronas en un bucle.
- B. Streaming.
- C. Envío de lotes con sondeo.
- D. Una ventana de contexto más grande.

`[TAG CHECKPOINT EXERCISE]` Ejercicio - Predice el Comportamiento · 6 min
# Ejercicio: predice el comportamiento

Inténtalo ahora. Cada escenario a continuación presenta una configuración extraída de uno de los cuatro fundamentos de este módulo: muestreo, modo de prompting, forma de solicitud y presupuesto de contexto. Para cada uno, selecciona la respuesta que predice el comportamiento correcto e identifica la razón por qué. Se otorga crédito parcial cuando responden correctamente tres de cuatro.

**Escenario 1:** Considera una tarea de clasificación ejecutada a temperatura 0 versus la misma tarea ejecutada a temperatura alta. Predice cómo difieren las salidas entre ejecuciones repetidas.
- A. A baja temperatura, el modelo concentra la probabilidad en los tokens más probables, así que las ejecuciones repetidas devuelven la misma etiqueta mucho más consistentemente, aunque nunca con determinismo garantizado, incluso a temperatura 0. A alta temperatura, la distribución se dispersa, así que la redacción e incluso la etiqueta elegida pueden variar. Para un clasificador quieres el comportamiento repetible de baja temperatura.
- B. Ambas configuraciones devuelven salida idéntica cada ejecución, porque la temperatura solo afecta la longitud de la respuesta, no qué tokens se eligen.
- C. La ejecución de temperatura alta es más precisa, porque dispersar la distribución permite al modelo considerar más de las respuestas correctas.
- D. La temperatura no tiene efecto en una tarea de clasificación, porque la clasificación siempre devuelve una etiqueta fija independientemente del muestreo.

**Escenario 2:** Considera una tarea que sigue devolviendo salida en estructura incorrecta bajo un prompt zero-shot. Predice qué cambia si cambias a multi-shot.
- A. Cambiar a multi-shot reentena el modelo en la nueva estructura, así que el cambio es permanente en cada llamada futura una vez que se envían los ejemplos.
- B. Agregar dos o tres ejemplos correctos entrada-salida muestra al modelo la estructura exacta a coincidir, lo que generalmente resuelve un problema de estructura que más texto de instrucción no hizo. El costo es tokens extra en cada llamada, así que agrega la menor cantidad de ejemplos que hagan confiable la salida.
- C. Multi-shot no ayudará con un problema de estructura; solo elevar la temperatura cambia la forma de la salida.
- D. Multi-shot baja el costo de token por llamada, porque los ejemplos permiten al modelo producir respuestas más cortas.

**Escenario 3:** Considera un conducto que debe procesar 50,000 documentos durante la noche sin nadie esperando. Predice qué forma de solicitud se ajusta y por qué.
- A. Un bucle síncrono se ajusta mejor, porque llamar a la API una vez por documento es el patrón más simple y evita la sobrecarga de enviar un lote.
- B. Streaming se ajusta mejor, porque enviar la respuesta en piezas permite que el conducto comience a procesar cada documento más pronto.
- C. El patrón de lote se ajusta: envía las solicitudes en un lote y sondejas la finalización, aceptando latencia más larga por un costo por token más bajo. Un bucle síncrono golpearía límites de velocidad y ataría la aplicación, y el streaming no compra nada porque nadie está viendo.
- D. Una ventana de contexto más grande se ajusta mejor, porque colocar los 50,000 documentos en una solicitud evita hacer llamadas repetidas.

**Escenario 4:** Considera una sesión de agente multiturno larga cuya ventana de contexto sigue llenándose. Predice los síntomas y nombra el presupuesto culpable.
- A. El modelo silenciosamente deja caer los turnos más antiguos para hacer espacio, así que la sesión continúa pero silenciosamente pierde contexto temprano sin ningún error.
- B. La ventana de contexto es un presupuesto de token fijo; cuando el historial y resultados de herramienta se acumulan se llena. Una entrada que ya es sobredimensionada se rechaza con un error antes de generación, mientras que una solicitud que se ajusta en entrada pero alcanza el techo durante generación viene de vuelta con salida truncada y una razón de parada model_context_window_exceeded. El síntoma es una sesión que se ejecutó bien en pruebas fallando una vez que los inputs crecen, por eso la aplicación debe recortar o resumir historial.
- C. El síntoma es muestreo más lento, y el presupuesto culpable es la configuración de temperatura, que debe reducirse a medida que crece la sesión.
- D. No hay presupuesto fijo; la ventana se expande automáticamente para mantener cualquier historial que se acumule, así que una sesión larga nunca falla por esta razón.

`[TAG MODULE]` Resumen - Cinco Conclusiones Clave · 2 min
# Resumen: cinco conclusiones clave

1
#### Los tokens son la unidad de entrada, salida y costo.
Piensa y presupuesta en tokens en lugar de palabras, ya que esa es la unidad que factura la API y que mide la ventana de contexto.

2
#### La ventana de contexto es un presupuesto de token fijo que contiene la solicitud completa a la vez.
Una entrada sobredimensionada genera error antes de generación, mientras que alcanzar el techo durante generación devuelve salida truncada con una razón de parada model_context_window_exceeded, así que gestionar el historial es trabajo de la aplicación.

3
#### El muestreo hace que la generación sea no-determinista.
El mismo prompt puede devolver redacción diferente en cada ejecución, así que las pruebas en texto exacto son poco confiables. Para eso se construyen las evaluaciones.

4
#### La elección de modelo y el modo de razonamiento son controles separados y componibles.
Elige el modelo más pequeño y el razonamiento y prompting más simples que cumplan tu evaluación y agrega capacidad solo donde la evaluación dice que la necesitas.

5
#### Un desarrollador accede a Claude sobre una API REST, generalmente a través de un SDK.
Elige entre síncrono, streaming, async/await o lote basado en si alguien está esperando y si la carga de trabajo es tiempo real o lote sin conexión masivo.

**Qué viene después:** El Módulo 2 pone estos fundamentos a trabajar en toda la creación de prompts, esquemas de herramientas, streaming, ingeniería de contexto y construcción de agentes.

Fuentes
Claude 101 (Skilljar), Building with the Claude API (Skilljar), AI Fluency: Framework & Foundations (Skilljar), platform.claude.com/docs. Verifica especificaciones de producto en tiempo de publicación.

## Ahora puedes hablar el vocabulario compartido del Curso de Desarrolladores.
Tokens, contexto, muestreo, niveles de modelos, modos de prompting y la mecánica de transporte de la API ahora tienen nombres, así que el resto del curso puede construir sobre ellos directamente.

`[TAG MODULE]` Módulo Completado - Ruta de Desarrollador · 2 min
# ¡Felicidades! Has completado exitosamente este módulo.
Ahora puedes explicar tokens, la ventana de contexto, muestreo y no-determinismo, distinguir entre elección de modelo y modo de razonamiento, elegir el modo de prompting correcto para el trabajo, y describir cómo un desarrollador accede a Claude sobre SDKs, REST, streaming y patrones async. **Estos fundamentos son el vocabulario compartido sobre el cual se construye el resto del Curso de Desarrolladores.**

0 de 2 puntos de control aprobados

M1
Fundamentos de MSO
Tokens, contexto, muestreo, niveles de modelos, modos de prompting y el sustrato técnico.
Estás Aquí

M2
Prompting Avanzado para Producción, Agentes y Uso de Herramientas
Creación de prompts, pensamiento extendido, esquemas de herramientas, streaming, ingeniería de contexto y construcción de agentes.
Próximo

M3
Claude Code, MCP e Integración
Modos de permiso, contexto de proyecto duradero, empaquetamiento de plugins e integración MCP sin filtrar credenciales.

M4
Ingeniería de Producción, Evaluaciones y Seguridad
Evaluaciones, rastreo (*trace*), manejo de fallos, presupuestos de costo y orquestación, y límites de seguridad que se mantienen en producción.

M5
Aceleradoras y Contribución de IP
Empaquetar aceleradoras, preparar contribuciones verificables, elegir plataformas de deployment y marcar límites de confianza.

Iniciar Módulo 2 → Volver a inicio del curso

## Módulo 1 completado.
Pantalla 9 de 9

---

*Fuente: MSO Foundations_files/Developer_M1_vF2.html*
