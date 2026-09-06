# Módulo 2 · Prompting de Grado de Producción, Agentes y Uso de herramientas · Desarrollador

**Módulo 2 de 5**

---

Desarrollador · Módulo 2
# Prompting de Grado de Producción, Agentes y Uso de herramientas
Escribir código que usa Claude es distinto de usar Claude para escribir código. Este módulo aborda todo lo que va más allá del uso interactivo básico, incluyendo esquemas de herramientas, gestión del contexto y bucles de agentes, para que puedas integrar Claude de forma programática, garantizar un manejo confiable de la salida y desplegar una solución de producción robusta.

**Tabla de contenidos**
- Orientación: 1 pantalla
- Orientación

- Arte del Prompting: 3 pantallas
- Arte del Prompting
- Ten cuidado
- Punto de control 1

- Pensamiento Extendido: 2 pantallas
- Pensamiento Extendido
- Punto de control 2

- Uso de herramientas y Diseño de Esquemas: 3 pantallas
- Esquemas de Herramientas
- Ten cuidado
- Punto de control 3

- Respuestas en Streaming: 3 pantallas
- Streaming
- Ten cuidado
- Punto de control 4

- Ingeniería de Contexto: 3 pantallas
- Ingeniería de Contexto
- Ten cuidado
- Punto de control 5

- Construcción de Agentes: 3 pantallas
- Construcción de Agentes
- Ten cuidado
- Punto de control 6

- Memoria del Agente: 3 pantallas
- Memoria del Agente
- Ten cuidado
- Punto de control 7

- Tarea Acumulativa de Depuración: 2 pantallas
- Depuración: Identificar
- Depuración: Corregir

- Multimodal e Ingesta por Lotes: 3 pantallas
- Multimodal y Lotes
- Ten cuidado
- Punto de control 8

- Cierre del Módulo: 3 pantallas
- Recapitulación
- Glosario
- Módulo Completado

29 pantallas · 10 secciones · 209 minutos · 9 puntos de control

- Enseñanza
- Ten cuidado
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
- Enseñanza
- Ten cuidado
- Punto de control
- Enseñanza
- Ten cuidado
- Punto de control
- Identificar
- Corregir
- Enseñanza
- Ten cuidado
- Punto de control
- Recapitulación
- Glosario
- Módulo Completado

---

`[TAG MODULE]` Módulo 2 - Orientación · 2 min

# Qué podrás hacer al final

Escribir código que usa Claude es distinto de usar Claude para escribir código.

Probablemente ya has usado Claude de forma interactiva: escribiste un prompt, leíste la respuesta y la ajustaste según hiciera falta. Este módulo aborda todos los aspectos posteriores del uso de Claude más allá de ese nivel básico, incluyendo esquemas de herramientas, gestión del contexto y bucles de agentes. Este módulo se construye sobre tu capacidad de dar forma a las salidas de Claude. Como ingeniero, eres responsable de integrar Claude de forma programática, de asegurar un manejo confiable de la salida y de desplegar exitosamente una solución de producción robusta.

Cada tema de este módulo aborda un modo de fallo específico que con frecuencia se pasa por alto durante el desarrollo, pero que exige mucho tiempo y esfuerzo para identificarse y resolverse una vez que el desarrollo ya está en marcha. Cuando aprendes a identificar y evitar estos modos de fallo, quedas en posición de integrar Claude en tus procesos de desarrollo de manera eficaz y eficiente.

## Al final de este módulo, podrás:

- 1 Escribir prompts listos para producción usando prompts de sistema, etiquetas XML, ejemplos few-shot y restricciones de salida, y diagnosticar por qué un prompt tiene bajo rendimiento cuando los resultados del primer intento no dan en el blanco.
- 2 Decidir cuándo habilitar el pensamiento extendido, calibrar su ajuste de esfuerzo y manejar correctamente los bloques de pensamiento a lo largo de los turnos de uso de herramientas.
- 3 Definir e implementar un esquema de herramienta que Claude seleccione correctamente, construir el bucle de uso de herramientas, manejar bloques de mensajes de múltiples turnos y distinguir cuándo usar una sola llamada a herramienta frente a múltiples llamadas paralelas.
- 4 Consumir una respuesta en streaming, ensamblar los eventos transmitidos en bloques de contenido completos y recuperarte limpiamente cuando un flujo se interrumpe a la mitad.
- 5 Aplicar técnicas de ingeniería de contexto, incluyendo gestionar la ventana de contexto, compactar, limpiar el historial entre tareas y traspasos a subagentes, para mantener las sesiones de agente de múltiples turnos dentro del presupuesto sin perder la continuidad de la tarea.
- 6 Construir un agente de producción eligiendo entre patrones de flujo de trabajo y de agente, cableando herramientas y contexto en un bucle funcional, seleccionando una ruta de cableado que se ajuste a tus restricciones de despliegue y agregando puntos de control con humano en el bucle (HITL) donde las acciones son irreversibles.
- 7 Gestionar la memoria del agente entre sesiones usando patrones de almacenamiento persistente y eligiendo el alcance de memoria correcto, de modo que el estado del agente sobreviva entre turnos sin inflar el costo del contexto.
- 8 Enviar imágenes y PDF a Claude usando la estructura correcta de bloques de mensaje, aplicar la Files API para activos reutilizables y enviar cargas de trabajo de alto volumen usando la Message Batches API para que se completen de forma asíncrona.

*Este módulo es para el Desarrollador que está listo para usar Claude y convertir un prototipo en un sistema de producción completo que se sostenga durante el uso real. Eres práctico, orientado al código y enfocado en patrones. Este módulo asume que ya te sientes cómodo escribiendo código; no enseña fundamentos de programación, y no se trata de usar Claude de manera casual en una ventana de chat. Enseña las decisiones de ingeniería alrededor del modelo: cómo estructurar prompts, definir herramientas, manejar streaming de forma segura, gestionar contexto y memoria, y construir bucles de agente que se mantengan confiables, asequibles y controlables una vez desplegados.*

**Nota:**
"La construcción" en este módulo
Todo en este módulo se construye alrededor de un problema de ingeniería recurrente: una integración de Claude que funcionaba bien durante el desarrollo pero que ahora tiene que sostenerse en producción. En desarrollo, el prompt se veía sólido, la llamada a herramienta funcionaba, la sesión se mantenía corta y las entradas de prueba eran manejables. Sin embargo, en producción ese mismo sistema tiene que sobrevivir a sesiones más largas, salidas de herramientas más grandes, flujos interrumpidos, restricciones más estrictas de costo y latencia, memoria entre turnos y acciones que pueden ser irreversibles. Este módulo te enseña qué decisión de implementación previene qué fallo de producción: cómo estructurar prompts, definir herramientas, manejar streaming, gestionar el contexto, elegir el alcance de la memoria y cablear agentes de forma segura antes de que esos fallos aparezcan.

Descargo de Responsabilidad / Aviso para Contenido Educativo
Construimos este Módulo 2 del curso de Desarrollador: Prompting de Grado de Producción, Agentes y Uso de herramientas, para ayudarte a realizar trabajo real con Claude. Trátalo como contenido educativo. No constituye asesoría legal, financiera ni profesional de ningún otro tipo, así que adapta lo que aprendas a tu propia situación. Nuestros productos y servicios evolucionan rápidamente, por lo que cierto contenido puede contener errores o estar desactualizado; recuerda verificar en el sitio web o la documentación de Anthropic. Los ejemplos y escenarios usados en el curso son ilustrativos y a menudo ficticios. Si el material del curso menciona una empresa o producto, no significa que Anthropic los respalde, que ellos respalden a Anthropic, ni que estemos afiliados. Además, ten en cuenta que tu uso de los productos y servicios de Anthropic está cubierto por nuestros términos, políticas y documentación; si algo en este curso entra en conflicto con ellos, ellos prevalecen.

---

`[TAG TEACHING]` Enseñanza - Arte del Prompting · 20 min

# Prompts de sistema, XML, few-shot y restricciones de salida

Un prompt que funciona una vez en uso interactivo a menudo se rompe cuando se ejecuta en producción contra entradas no probadas. La solución no consiste solo en agregar más palabras, sino en identificar qué pieza estructural le falta al prompt y agregar esa única pieza. Esta sección repasa cómo leer una salida fallida y luego recorre las cuatro técnicas que producen las correcciones.

## Cuatro técnicas que le dan a Claude una forma de salida confiable

Cuando una respuesta de primer intento falla, el instinto suele ser agregar más palabras al prompt y ejecutarlo de nuevo. Sin embargo, ese instinto puede hacer que el problema sea más difícil de aislar y rara vez lo corrige. Reformular cambia cómo dices algo, pero no agrega la pieza estructural que le falta al prompt. Por ejemplo, si Claude está cruzando el límite entre tus instrucciones y tus datos de entrada, una redacción más clara no lo va a arreglar; y si el formato de salida sigue desviándose, "por favor formatea esto correctamente" tampoco lo va a arreglar.

El modo de fallo te dice cuál de las cuatro técnicas está ausente. Diagnostica primero cómo está fallando tu prompt y luego agrega la técnica específica que aborda ese fallo. Las cuatro técnicas se definen por completo más abajo en esta pantalla.

| Qué observaste | Qué le falta al prompt | Por qué esta técnica es la solución |
|---|---|---|
| El resultado vuelve con la forma equivocada: una oración donde esperabas una etiqueta, prosa donde esperabas JSON. | Una restricción de salida. El prompt nunca especificó la forma, los nombres de campo ni el punto de parada de la respuesta. | Una restricción de salida controla la forma de la respuesta con independencia de su contenido. Sin ella, Claude devuelve texto plausible que el parser aguas abajo no fue construido para aceptar. |
| El contenido está desviado: el alcance se corre, el tono cambia, o Claude responde una pregunta más amplia de la que hiciste, y empeora conforme avanza la conversación. | Un prompt de sistema, o uno más específico. El contrato de comportamiento era demasiado vago para sostenerse entre turnos. | El prompt de sistema fija las reglas que aplican a cada respuesta sin importar el turno del usuario. Cuando está poco especificado, no hay nada que mantenga firmes el rol, el alcance y el formato conforme la conversación se extiende. |
| La tarea es correcta, pero la estructura está inventada: Claude entendió qué hacer y produjo una salida con una forma que nunca pediste. | Ejemplos few-shot. Claude no puede inferir una estructura exacta solo a partir de una descripción. | Los ejemplos few-shot muestran el patrón en lugar de describirlo. Un par correcto de entrada-salida le da a Claude la forma exacta que debe igualar, algo que una instrucción escrita a menudo no logra precisar. |
| La salida es limpia con las entradas que probaste pero se rompe con una variante: un caso límite, un campo inusual, una entrada que no anticipaste. | Una restricción que cubra la variante. El prompt maneja el camino feliz y no tiene ninguna regla para el caso con el que el parser se rompe. | El prompt se validó contra un conjunto estrecho de entradas. Nombrar la variante en la restricción, o agregar un ejemplo que la cubra, cierra la brecha que las entradas de prueba nunca expusieron. |

## Diagnosticar un prompt de clasificación que devuelve la forma de salida equivocada

La regla es simple: nombra el fallo, agrega la única técnica que le corresponde y vuelve a ejecutarlo. Si sigue fallando, diagnostica de nuevo. Cuando un prompt se hace más largo con cada pasada, esa es la señal de que te estás saltando el paso de diagnóstico y solo estás agregando palabras.

El patrón de abajo es la primera fila de la tabla en acción: un prompt que produce el contenido correcto con una forma que el código aguas abajo no puede aceptar. El clasificador entiende la tarea y devuelve la categoría correcta, pero la forma de esa respuesta varía de ejecución en ejecución, así que el enrutador que la consume falla. La pieza faltante es una restricción de salida, y la corrección incorpora dos de las otras técnicas para fijar el conjunto de etiquetas y mostrar el formato. El recorrido va desde el prompt pelado que causa el problema hasta la versión restringida que lo resuelve.

### Ejemplo trabajado: un prompt de clasificación antes y después

Un desarrollador necesita que Claude clasifique tickets de soporte en tres categorías: facturación, técnico y escalamiento. El primer prompt es una instrucción pelada, sin ninguna restricción sobre la salida:

```
System: "You are a support classifier. Classify the ticket."

User: <ticket>I was charged twice for the same month.</ticket>
```

Claude devuelve "Billing" en algunas ejecuciones, "billing" en otras y ocasionalmente una oración completa como "This looks like a billing issue." El enrutador aguas abajo espera una de un conjunto fijo de etiquetas y se rompe con la inconsistencia.

Al leer esto contra la tabla de arriba, esta situación coincide con lo que se describe en la primera fila: la salida vuelve con una forma que el parser no puede aceptar, así que la pieza faltante es una restricción de salida. Agregar esa restricción incorpora dos técnicas más, porque fijar el conjunto de etiquetas y mostrar el formato son trabajos que esas técnicas hacen mejor de lo que puede hacerlo una instrucción escrita. Los ejemplos few-shot le muestran a Claude la etiqueta y las mayúsculas exactas que debe devolver, y las etiquetas XML mantienen esos ejemplos separados de la instrucción para que Claude no los lea como parte de la tarea:

```
System: "You are a support classifier. Classify each ticket into exactly one of: BILLING, TECHNICAL, ESCALATION. Return only the label. No other text."

<sample_input>My account shows two charges for April.</sample_input>
<ideal_output>BILLING</ideal_output>

<sample_input>The API keeps returning a 429 error.</sample_input>
<ideal_output>TECHNICAL</ideal_output>

User: <ticket>I was charged twice for the same month.</ticket>
```

Aquí hay tres técnicas haciendo trabajos distintos. El prompt de sistema fija el contrato de salida: exactamente una etiqueta de un conjunto fijo, nada más. Las etiquetas XML marcan dónde termina cada ejemplo y comienza el siguiente, para que Claude no lea los ejemplos como parte de la instrucción. Los pares few-shot muestran las mayúsculas y el formato exactos en lugar de describirlos. Juntos producen un resultado lo bastante consistente para enrutarlo de forma programática.

La tabla de abajo muestra cómo podemos apilar las cuatro técnicas juntas, dónde debería simplificarse el prompt y dónde deberíamos diagnosticar antes de agregar más, antes de acumular demasiadas iteraciones.

| | |
|---|---|
| Apila las cuatro técnicas | Apilar las cuatro técnicas contra un contrato de salida claramente definido. Tareas con formatos bien especificados y casos límite que pueden cubrirse con ejemplos. |
| Simplifica el prompt | Agregar las cuatro técnicas a una tarea simple que solo necesita una. Un prompt de "resume este párrafo" no necesita ejemplos few-shot ni un esquema de salida. |
| Diagnostica antes de agregar más | Prompts que se hacen más largos con cada iteración en lugar de más precisos. Si has vuelto a hacer el prompt cinco veces y la salida sigue estando mal, diagnostica el tipo de fallo antes de agregar más texto. |

## Cuándo recurrir a cada técnica

Ahora, entendamos más sobre cada una de estas técnicas y cuándo aplica cada una:

Los prompts de sistema cargan el contrato de comportamiento de toda la sesión. Escríbelos una vez y trátalos como tu capa de instrucción persistente. Definen el rol de Claude, el formato de salida y cualquier regla que no deba cambiar entre conversaciones.

Las etiquetas XML se usan cuando el prompt mezcla entradas con instrucciones. Un prompt que le pide a Claude depurar código usando documentación provista es un buen ejemplo; sin etiquetas, el código y la documentación se ven igual para Claude.

Envuélvelos con nombres de etiqueta descriptivos como `<my_code>` y `<docs>` y el límite queda inequívoco. No necesitas usar nombres oficiales de etiquetas XML; los nombres descriptivos que coincidan con tu contenido funcionan mejor.

Los ejemplos few-shot se consideran útiles porque muestran en lugar de solo decir. En vez de intentar describir el formato exacto que quieres, proporcionas un par correcto de entrada-salida y dejas que Claude infiera el patrón. Para usar esto, envuelve los ejemplos con una estructura XML consistente, por ejemplo `<sample_input>` e `<ideal_output>`, de modo que el límite entre el ejemplo y el prompt quede claro. Puedes usar algunos ejemplos tomados de tus salidas de evaluación mejor puntuadas en lugar de escribirlos desde cero.

Las restricciones de salida son la última línea de defensa antes de que la respuesta de Claude llegue a tu parser. Debes especificar exactamente lo que necesitas, incluyendo nombres de campo, tipos, límites de longitud, si incluir preámbulo y qué hacer cuando falten datos. Usa funcionalidades de salida estructurada en los casos en que el formato deba ser legible por máquina.

## El bucle de iteración: diagnosticar antes de volver a hacer el prompt

Cuando una respuesta de primer intento no da en el blanco, el instinto es agregar más palabras al prompt e intentarlo de nuevo. Ese instinto casi siempre hace que el problema sea más difícil de diagnosticar y rara vez lo corrige.

En su lugar, diagnostica primero el problema y luego vuelve a hacer el prompt con base en tus hallazgos. El tipo de fallo te dice qué técnica falta:

- **Formato equivocado:** Esto se debe a una restricción de salida faltante. El prompt nunca especificó qué forma debía tomar el resultado.
- **Contenido equivocado o desvío de alcance:** Esto se debe a un prompt de sistema poco especificado; el contrato de comportamiento era demasiado vago para sostenerse entre conversaciones.
- **Tarea correcta pero estructura alucinada:** Esto ocurre cuando hacen falta ejemplos few-shot. Claude no puede inferir la estructura exacta solo a partir de una descripción.
- **Buena salida con entradas simples pero se rompe en casos límite:** El prompt maneja el camino feliz pero no tiene ninguna restricción que cubra la variante con la que el parser se rompe.

La corrección es estructural, no una cuestión de redacción. Por ejemplo, si Claude está ignorando un límite entre tus instrucciones y tu contenido, una redacción más clara no lo va a arreglar; y si el formato de salida sigue desviándose, decir "por favor formatea esto correctamente" tampoco lo va a arreglar. En cada caso, identifica cuál de las cuatro técnicas está ausente y agrégala.

## Mover el control de la salida del prompt hacia la API con salidas estructuradas

Todo lo visto hasta este punto da forma a la salida escribiendo instrucciones dentro del prompt y esperando que Claude las siga. Eso funciona la mayoría de las veces, pero el prompt es una petición, así que un modelo todavía puede devolver una oración perdida, un nombre de campo equivocado o JSON malformado que rompe el parser aguas abajo.

La Claude API tiene un mecanismo aparte que elimina esa brecha para el código de producción. Se llama **salidas estructuradas** (structured outputs), y en lugar de pedir una forma con palabras, le entregas a la API un esquema JSON, y el modelo queda restringido en tiempo de generación para producir una salida que lo cumpla. Esta técnica es decodificación restringida: conforme Claude genera cada token, la API solo permite tokens que mantengan la salida válida contra tu esquema, de modo que una respuesta que viole el esquema no puede producirse en primer lugar.

Las salidas estructuradas cubren dos situaciones que aparecen en pipelines reales. Cada una restringe una parte distinta de lo que el modelo devuelve, y puedes usarlas por separado o juntas en la misma solicitud.

- **Las salidas JSON restringen la respuesta final.** Configuras el parámetro `output_config.format` con el tipo `json_schema` y tu esquema, y Claude devuelve JSON válido en el texto de la respuesta que coincide con ese esquema todas las veces. Recurre a esto cuando el propio modelo esté produciendo la carga estructurada que tu código consume, como extraer campos de un ticket de soporte o dar formato a una respuesta de API, porque elimina el código de parseo y reintento que de otro modo escribirías alrededor de cada llamada.
- **El uso estricto de herramientas restringe las entradas que Claude pasa a tus herramientas.** Configuras `strict` en `true` en la definición de una herramienta, y los argumentos que Claude envía a esa herramienta se validan contra el esquema de entrada antes de que tu código se ejecute. Recurre a esto en bucles agénticos donde un argumento de herramienta malformado haría fallar la función o dispararía una acción equivocada; esto ayuda a garantizar que la llamada que recibe tu código ya cumpla el contrato que definiste.

La razón por la que esto pertenece al código de producción y no solo al prompt es la confiabilidad ante entradas que no probaste. Una instrucción a nivel de prompt para devolver solo JSON se sostiene en los casos que intentaste y luego se resbala en un caso límite que no intentaste, que es exactamente el fallo que recorrió el ejemplo de clasificación anterior. Una restricción de esquema no se resbala, porque la API la hace cumplir en cada token en lugar de confiar en que el modelo recuerde la instrucción. Eso convierte la corrección de la salida de algo que verificas después del hecho en algo que la API descarta antes de que ocurra.

Restringir la generación tiene costos, y un desarrollador que elige esto en producción necesita sopesarlos en lugar de habilitarlo en todas partes por defecto. Abajo están algunos de esos costos que debes considerar:

- **La primera solicitud con un esquema nuevo es más lenta.** La API compila tu esquema en una gramática antes de poder restringir la salida, y esa compilación agrega latencia en la primera llamada. Las gramáticas compiladas se almacenan en caché por 24 horas desde el último uso, así que un tráfico estable sobre un esquema estable paga el costo una sola vez, pero una carga de trabajo que cambia de esquema constantemente lo paga repetidamente.
- **Tu conteo de tokens de entrada aumenta.** Cuando las salidas estructuradas están activadas, la API agrega un prompt de sistema que describe el formato esperado, y ese prompt inyectado se cobra como cualquier otro token de entrada. El incremento es pequeño por llamada, pero vale la pena saberlo cuando estimas costos a gran volumen.
- **Un esquema garantizado no es un éxito garantizado.** Dos casos todavía devuelven una salida que no coincide: un rechazo, donde el modelo declina por razones de seguridad y la respuesta lleva `stop_reason refusal`, y un truncamiento, donde la respuesta alcanza el límite de `max_tokens` y se detiene a mitad de la estructura con `stop_reason max_tokens`. Tu código sigue revisando `stop_reason` en lugar de asumir que toda respuesta se parsea.
- **No se combina con el prellenado de mensajes.** Las salidas JSON y prellenar el mensaje del asistente son incompatibles, así que un patrón que empieza la respuesta por Claude y un patrón que restringe toda la respuesta a un esquema no pueden correr en la misma solicitud. Elige el que se ajuste a la tarea.

---

`[TAG FAILURE]` Ten cuidado - Arte del Prompting · 5 min

## El prompt que se hizo más largo en lugar de mejor

**Configuración**

Aunque un prompt parezca listo para producción, todavía puede producir fallos silenciosos. A veces los casos límite hacen que falten campos o que se ignoren restricciones; cuando esto pasa, suele ser porque las restricciones no se especificaron con suficiente precisión.

### Seis pasadas de revisión, cada una más larga que la anterior

El prompt que usamos en el ejemplo anterior se muestra abajo: un desarrollador necesita que Claude clasifique tickets de soporte en tres categorías: facturación, técnico y escalamiento. El primer prompt es una instrucción pelada:

```
System: "You are a support classifier. Classify the ticket."

User: <ticket>I was charged twice for the same month.</ticket>
```

La traza de abajo muestra a un desarrollador iterando sobre un prompt de clasificación y, aunque cada pasada agrega más palabras, la salida sigue desviándose. Este patrón emerge cuando un desarrollador agrega cosas a su prompt sin atender a las especificaciones de las restricciones.

| Pasada | Qué se agregó | Comportamiento de la salida |
|---|---|---|
| 1 | "Classify this ticket as billing, technical, or escalation." | Devuelve oraciones completas: "This appears to be a billing issue." El parser se rompe. |
| 2 | Se agregó "Be concise." y "Use only the category name." | Devuelve "Billing" con mayúscula a veces, "billing" en minúscula otras veces. El enrutador se rompe por la discordancia de mayúsculas. |
| 3 | Se agregaron tres párrafos describiendo cada categoría en detalle. | La salida es correcta en tickets simples. Para tickets ambiguos, devuelve 'billing/technical' en lugar de una sola etiqueta. El parser se rompe con la barra. |
| 4 | Se agregó "Never return two categories." y "If ambiguous, choose the most likely one." | Funciona en el 80% de los tickets. Falla en tickets que razonablemente podrían encajar en dos categorías (p. ej., 'I was charged but the feature also stopped working'). Aquí devuelve una explicación completa en lugar de una etiqueta. |
| 5 | Se agregaron dos párrafos más sobre casos límite y un recordatorio de ser preciso. | El prompt verboso ahora está produciendo una salida verbosa, más de 2,000 caracteres por llamada, ya que los prompts largos y poco enfocados tienden a producir salidas largas y poco enfocadas. El modelo calibra la longitud y el estilo de la respuesta para que coincidan con la entrada. La latencia ha aumentado significativamente debido a la longitud de la salida, pero la precisión no ha mejorado. |
| 6 | Se reemplazaron todas las instrucciones con un esquema JSON y dos ejemplos few-shot que muestran pares exactos de entrada/salida | Devuelve {"category": "billing"} en cada ticket. El parser funciona. La latencia baja. La precisión en tickets ambiguos iguala a la de la Pasada 4. |

Dos cosas salieron mal a lo largo de estas seis pasadas y vale la pena identificarlas por separado. La Pasada 4 es el fallo de diagnóstico: el desarrollador identificó el problema equivocado, agregó descripción en lugar de una restricción, y la salida siguió rota. La Pasada 5 es el fallo de ingeniería: el prompt se volvió lo bastante verboso como para inducir una regresión de latencia, y el modelo calibra la longitud de la respuesta para que coincida con la entrada, generando más de 2,000 caracteres por llamada, sin ninguna ganancia de precisión. La corrección para ambos es el mismo movimiento estructural: una restricción de salida y dos ejemplos few-shot; pero reconocer que son dos fallos distintos importa, porque el segundo puede aparecer incluso cuando el primero ya se resolvió. Aquí está el prompt con la restricción de salida y los ejemplos few-shot aplicados:

```
System: "You are a support classifier. Classify each ticket into exactly one of: BILLING, TECHNICAL, ESCALATION. Return only the label. No other text."

<sample_input>My account shows two charges for April.</sample_input>
<ideal_output>BILLING</ideal_output>

<sample_input>The API keeps returning a 429 error.</sample_input>
<ideal_output>TECHNICAL</ideal_output>

User: <ticket>I was charged twice for the same month.</ticket>
```

**Qué debes tener en cuenta**

Cada pasada hizo el prompt más largo y ninguna de ellas agregó la restricción de salida faltante. El desarrollador estaba describiendo el problema con más precisión en cada iteración, pero Claude no necesita una descripción detallada de cómo se ve un ticket de facturación; en cambio, necesita saber que la única respuesta aceptable es una palabra en mayúsculas.

La corrección son dos líneas: una restricción de salida que especifique el formato exacto y un ejemplo few-shot que cubra el caso ambiguo. La traza de seis pasadas es un patrón que hay que reconocer temprano: si tres reformulaciones seguidas del prompt no han funcionado, deja de agregar texto y diagnostica qué técnica falta.

---

`[TAG CHECKPOINT]` Punto de control - Arte del Prompting · 4 min

# Punto de control 1 · Corrige el prompt defectuoso

El prompt que se muestra aquí extrae un objeto JSON de un ticket de soporte con tres campos: categoría, urgencia y un resumen de una oración. Contiene un defecto. Escribe el prompt de sistema corregido que lo repare.

**Prompt defectuoso**

```
System: "You are a support ticket processor. Extract the key information from the ticket below."

User: <ticket>My API key stopped working after I rotated it last night. I have a production deployment that is failing. This needs to be fixed immediately.</ticket>
```

---

`[TAG TEACHING]` Enseñanza - Pensamiento Extendido · 12 min

# Pensamiento extendido: activar el razonamiento, calibrar el esfuerzo y leerlo de vuelta correctamente

Las técnicas de prompting dan forma a *qué* produce Claude. El pensamiento extendido da forma a *cuánto trabajo* hace Claude antes de responder. Actívalo y el modelo escribe primero su razonamiento paso a paso, y después te da la respuesta final. Tu trabajo es decidir cuándo ese trabajo extra vale su costo y manejar el razonamiento que devuelve.

## Qué hace el pensamiento extendido

Cuando activas el pensamiento extendido, el modelo "piensa en voz alta" antes de responder. Verás ese razonamiento volver como su propio *bloque de pensamiento* en la respuesta de la API, ubicado justo antes del bloque que contiene la respuesta real. En los modelos más nuevos, el contenido del bloque de pensamiento se omite por defecto; debes solicitar un resumen legible a través del ajuste de visualización para verlo.

En los modelos actuales el razonamiento es adaptativo: lo habilitas con el parámetro `thinking` donde no esté ya activado por defecto, y el modelo decide cuánto razonamiento necesita cada solicitud. Ajustas la profundidad con el ajuste de esfuerzo en lugar de un presupuesto fijo de tokens. El control más antiguo `budget_tokens` está obsoleto y, en las generaciones de modelos más nuevas, devuelve un error 400.

Ese razonamiento no es gratis; los tokens de pensamiento cuestan lo mismo que los tokens de salida, así que ejecutar una tarea simple con esfuerzo alto significa pagar por una precisión que no necesitas. La decisión aquí refleja una que ya has tomado: hacer coincidir la herramienta con la tarea. No recurras al pensamiento extendido por defecto; aplícalo estratégicamente donde haga falta.

## Cuándo usar el pensamiento extendido

| Forma de la tarea | Decisión sobre pensamiento extendido | Razón |
|---|---|---|
| Razonamiento de múltiples pasos donde el modelo tiene que sostener varias restricciones a la vez: una derivación matemática, un problema lógico de varios saltos, planificar una secuencia de acciones dependientes. | Actívalo, con el nivel de esfuerzo ajustado a la profundidad del problema. | La pasada de razonamiento es donde el modelo trabaja las dependencias que de otro modo se saltaría. |
| Tareas mecánicas o de búsqueda: clasificación, conversión de formato, extraer un campo, respuestas fácticas cortas. | Déjalo apagado. | El pensamiento extendido no mejorará la respuesta, y estarás pagando más tokens por algo que no necesitabas. Un prompt pelado con una restricción de salida es la herramienta correcta. |
| Bucles agénticos donde el modelo planifica a lo largo de varias llamadas a herramientas. | Actívalo y presupuesta para el paso de planificación en lugar de por llamada. | Razonar antes de un plan reduce la selección de herramienta equivocada aguas abajo. Nota la regla de devolución de abajo, que aplica en todo bucle de uso de herramientas. |

## La regla de devolución: los bloques de pensamiento deben volver a la API sin cambios

Cuando el pensamiento extendido está activado *y* tu conversación usa herramientas, hay una regla que no puedes saltarte: cada bloque de pensamiento que recibes tiene que volver a la API exactamente como llegó en el siguiente turno. Cada bloque viene con una firma que confirma que el razonamiento no fue manipulado. Si lo editas, lo resumes o lo descartas, la firma deja de coincidir y la API rechaza la solicitud.

Los bloques de pensamiento redactados funcionan de la misma manera. Su contenido está cifrado y no está pensado para ser leído por humanos, pero aun así tienen que devolverse intactos.

Este es un requisito estructural, no una elección de prompting que puedas tomar. El desliz más común es quitar el bloque de pensamiento para ahorrar contexto, lo que termina rompiendo tu siguiente solicitud. Si la preocupación real es cuánto contexto se acumula a partir del razonamiento acumulado, la solución es el trabajo de ingeniería de contexto que cubriremos en este módulo.

**Anticipo**

Esta lección habilita el razonamiento y calibra su ajuste de esfuerzo; no cubre la selección de modelo. Elegir qué modelo ejecutar, algo distinto de si habilitar el razonamiento, se enseña en el módulo MSO Foundations que precede a este.

## 

**Maneja bien**
Tareas difíciles de razonamiento y planificación donde una respuesta equivocada es costosa y los tokens extra compran precisión.

**Agrega costo o complejidad**
El requisito de devolución en los bucles de uso de herramientas, y un ajuste de esfuerzo que ahora debes calibrar.

**Usa un enfoque diferente**
Para tareas de clasificación, extracción y formato, un prompt bien restringido es más barato e igual de preciso.

---

`[TAG CHECKPOINT]` Punto de control - Pensamiento Extendido · 3 min

# Punto de control 2 · Decide cuándo el pensamiento extendido justifica su costo

A continuación se describen tres tareas. Empareja cada tarea de la izquierda con la decisión correcta sobre pensamiento extendido de la derecha. Hay una sola respuesta correcta por tarea.

**Tareas**

1. Clasificar 50,000 tickets de soporte en tres etiquetas durante la noche.
2. Planificar una refactorización de múltiples pasos donde cada paso depende del anterior.
3. Quitar el bloque de pensamiento del historial de conversación para ahorrar contexto antes de la siguiente llamada de herramienta.

**Opciones (disponibles para cada tarea)**

- Nunca hagas esto.
- Déjalo desactivado.
- Actívalo, y presupuesta para el paso de planificación.

---

`[TAG TEACHING]` Enseñanza - Uso de Herramientas y Diseño de Esquemas · 20 min

# Esquemas de herramientas que Claude selecciona correctamente: definición, bucle y patrones de llamada

Hasta ahora, el trabajo ha consistido en dar forma a lo que Claude produce: enmarcar la solicitud, dar ejemplos, elegir la técnica que encaja con la salida que quieres. Con el uso de herramientas, ya no estás guiando el lenguaje hacia una buena respuesta: le estás entregando a Claude un conjunto de acciones y confiando en que elija la correcta; esa elección está impulsada casi por completo por lo que escribiste en el esquema.

## Cómo funciona el bucle de uso de herramientas

El error conceptual más común sobre el uso de herramientas es creer que Claude ejecuta las herramientas. En cambio, Claude lee tus definiciones de herramienta, decide cuál encaja con la situación, y le dice a tu aplicación qué llamar junto con las entradas requeridas. Tu aplicación ejecuta la herramienta, obtiene el resultado y lo envía de vuelta; luego Claude usa ese resultado para continuar.

Este ida y vuelta no debe ignorarse en producción: si tu aplicación no maneja el retorno correctamente, Claude nunca recibe los datos que pidió, y el bucle se rompe. La frontera entre lo que le corresponde a Claude y lo que le corresponde a tu código es donde vive la mayoría de los errores de uso de herramientas. Aquí está la secuencia para asegurar una implementación correcta del uso de herramientas.

Haz clic en cada paso para ver qué ocurre.

1. Definir el esquema
2. Enviar el mensaje
3. Bloque tool_use
4. Ejecutar la herramienta
5. Devolver el resultado
6. Claude continúa

**Definir el esquema**

Defines un esquema con un nombre, una descripción y un esquema de entrada. Claude lee esto para decidir si llama a la herramienta y cuándo hacerlo.

Es importante notar que el bucle no es automático y que tú debes completar el cuarto paso. Si el fallo es sistemático, la corrección está en el paso de definición del esquema.

## Estructura de bloques de mensaje en una conversación con uso de herramientas

Una conversación con uso de herramientas se construye a partir de bloques estructurados, no de texto plano. Cada turno del asistente y cada turno del usuario es una lista de bloques, y cuatro tipos de bloque hacen el trabajo en una sesión con uso de herramientas. Un bloque text lleva la respuesta en prosa de Claude. Un bloque tool_use lleva una llamada de herramienta, incluyendo el nombre de la herramienta, un ID único y los argumentos de entrada. Un bloque tool_result lleva lo que tu código devolvió después de ejecutar la herramienta. Un bloque thinking lleva el razonamiento interno de Claude, y solo aparece cuando el pensamiento extendido está habilitado.

La API impone un emparejamiento específico entre estos bloques. Cada bloque tool_use en un turno del asistente debe ser respondido por un bloque tool_result con un ID coincidente en el turno del usuario que sigue inmediatamente. Si los ID no coinciden, si falta el resultado, o si los turnos están fuera de orden, la solicitud falla la validación. Esto no es algo que puedas arreglar ajustando tu prompt; es estructural, y tu código tiene que producir la secuencia correctamente en cada solicitud.

La tabla de abajo resume cada tipo de bloque, qué contiene y la regla que gobierna cómo tu código debe manejarlo.

| Tipo de bloque | Rol | Contiene | Regla crítica |
|---|---|---|---|
| bloque text | Asistente/Claude | La salida en prosa de Claude | Claude puede devolver un bloque text junto a un bloque tool_use en el mismo turno. Cuando lo hace, tu código debe preservar el arreglo de contenido completo, incluyendo el bloque text, al agregar ese turno al historial de conversación. Descartar el bloque text corrompe el contexto del que Claude depende para los turnos de seguimiento. |
| bloque tool_use | Asistente/Claude | El nombre de la herramienta, un ID único y los argumentos de entrada que Claude quiere pasar a tu función | Cada bloque tool_use debe ser respondido por un bloque tool_result en el turno de usuario inmediatamente siguiente. El tool_result debe llevar el mismo ID. Sin ese emparejamiento, la API rechaza la siguiente solicitud. |
| bloque tool_result | Usuario | El ID de tool_use coincidente, el contenido del resultado y una bandera opcional is_error puesta en true cuando la llamada de herramienta falla | El valor de tool_use_id debe coincidir exactamente con el bloque tool_use original. Claude usa este ID para conectar cada resultado con la llamada que lo produjo, lo cual importa cuando un solo turno del asistente emite múltiples llamadas de herramienta y los resultados llegan en un orden distinto. |
| bloque thinking | Asistente (solo con pensamiento extendido)/Claude | El razonamiento interno de Claude, visible solo cuando el pensamiento extendido está habilitado | El bloque debe devolverse a la API sin modificaciones en los turnos posteriores. La firma verifica que el razonamiento no haya sido modificado, así que cualquier edición o resumen rompe la firma y la API rechaza el mensaje. Los bloques de pensamiento redactados siguen la misma regla: devuélvelos tal como los recibiste, aunque el contenido esté cifrado y no sea legible por humanos. |

La invariante crítica es que cada bloque tool_use de un turno del asistente debe tener un bloque tool_result correspondiente en el turno de usuario inmediatamente siguiente. Los bloques tool_result faltantes, o los bloques tool_result que aparecen en un turno posterior en lugar del turno de usuario inmediatamente siguiente, provocan un error de validación de la API.

## Anatomía del esquema: qué lee Claude para tomar una decisión de selección de herramienta

Un esquema de herramienta tiene tres partes: name, description e input_schema. La descripción determina si Claude selecciona la herramienta correctamente o no.

- **Name:** un identificador corto que debe ser específico. Por ejemplo, `get_account_balance` es más útil para Claude que `get_data`.
- **Description:** una parte crítica que Claude lee para decidir si una herramienta es necesaria o no. Siempre debes escribir la descripción en dos partes, incluyendo cuándo usar y cuándo no usar la herramienta:
- Una descripción que dice "usa esto para encontrar información" causará selecciones equivocadas porque Claude no puede distinguirla de cualquier otra herramienta que recupere algo.
- Una descripción que dice "usa esto para recuperar el saldo actual de un ID de cuenta específico y no uses esto para el historial de transacciones" le da a Claude una condición de exclusión con la cual trabajar y es apropiadamente descriptiva.

- **input_schema:** define los parámetros (las entradas que acepta tu función de herramienta) usando JSON Schema.
- Debes marcar los parámetros como requeridos cuando Claude los necesite para llamar la herramienta correctamente.
- Puedes marcar los parámetros como opcionales cuando la herramienta pueda operar sin ellos. Los tipos de parámetro superpuestos entre herramientas son la fuente más común de llamadas a la herramienta equivocada.

## Tabla de decisiones: elecciones de diseño de esquema

El esquema es lo que Claude lee para decidir qué herramienta llamar, qué argumentos pasar y si tiene información suficiente para responder. Un esquema vago, poco descrito o al que le faltan campos requeridos producirá llamadas de herramienta que parecen sintácticamente correctas pero eligen la herramienta equivocada, pasan entradas malformadas o entran en bucles innecesarios. Las cinco decisiones de abajo determinan si tu implementación se comporta de forma predecible en condiciones reales. La tabla señala dónde divergen las llamadas de herramienta secuenciales y las paralelas.

| Decisión | Cómo manejarla | Por qué importa |
|---|---|---|
| Dependencia entre subtareas | Cuando la salida de una herramienta alimenta a la siguiente, las llamadas tienen que correr en secuencia porque la segunda llamada no puede construirse hasta que regrese el primer resultado. Cuando las subtareas son independientes entre sí, puedes estructurar el conjunto de herramientas para que Claude emita múltiples bloques tool_use en un solo turno y tu código los ejecute de forma concurrente. | Esta es la única decisión que cambia cómo diseñas el esquema. Los modelos actuales de Claude usan llamadas en paralelo por defecto cuando las llamadas son independientes. Donde exista una dependencia real, modélala como turnos separados para que el primer resultado esté disponible antes de construir la siguiente llamada. Usa disable_parallel_tool_use para forzar una llamada de herramienta por turno si es necesario. |
| Campos requeridos | Marca un campo como requerido solo cuando la llamada no tenga sentido sin él. Colócalos en el arreglo required del esquema de entrada. | Marcar todo como requerido obliga a Claude a fabricar valores para campos que no tiene base para completar. El arreglo required es la forma en que le dices a Claude qué entradas son innegociables. |
| Campos opcionales | Usa campos opcionales para parámetros con valores predeterminados sensatos o donde la ausencia tenga significado. Déjalos fuera del arreglo required y dales valores predeterminados en la firma de la función. | Los campos opcionales le permiten a Claude omitir información que no tiene, en lugar de adivinar. Si un campo es opcional pero está marcado como requerido, cada llamada debe inventar un valor, lo que puede causar entradas incorrectas. |
| Longitud de la descripción | Escribe de tres a cuatro oraciones por herramienta que cubran qué hace, cuándo debería Claude recurrir a ella y qué devuelve. Incluye ejemplos de entradas válidas donde el formato importe. | Si la descripción es demasiado corta, Claude adivina porque no hay suficiente señal para distinguir tu herramienta de las demás. Si la descripción es demasiado larga, las condiciones de activación quedan sepultadas bajo detalles que Claude no consulta al momento de decidir. |
| Tipos de parámetro superpuestos | Cuando dos herramientas aceptan la misma forma de parámetro, agrega lenguaje desambiguador a cada descripción que nombre el dominio o el disparador para el que está pensada la herramienta. | Claude enruta por nombre más descripción, con los tipos de parámetro como señal secundaria. Cuando las firmas son idénticas, el enrutamiento se reduce solo a la descripción, y las descripciones que suenan parecido se vuelven indistinguibles. |

### Ejemplo trabajado: un esquema que causa selección de herramienta equivocada y su corrección

*Este es un ejemplo ilustrativo basado en patrones comunes observados en implementaciones de uso de herramientas. Los nombres de herramienta, las descripciones y los resultados de prueba están construidos para demostrar el principio de desambiguación de selección, no tomados de un sistema de producción específico.*

Un desarrollador registra dos herramientas: `search_knowledge_base` y `get_cached_result`. Los nombres de las herramientas son distintos, pero la selección de herramienta de Claude pondera fuertemente las descripciones; cuando las descripciones se superponen, el nombre por sí solo no es suficiente para desambiguar. Ambas tienen descripciones que empiezan con "usa esto para encontrar información". Sin condiciones de exclusión, Claude seleccionaba con frecuencia la herramienta equivocada ante entradas ambiguas durante las pruebas de desarrollo.

El problema es que ambas descripciones se ven idénticas para Claude en el punto donde se toma la decisión de selección. La corrección consiste en agregar una oración adicional por descripción:

search_knowledge_base: "Usa esto para buscar en la base de conocimiento cuando el usuario haga una pregunta que requiera consultar información actual. No uses esto si el resultado de una búsqueda previa en esta sesión ya cubre la pregunta."

get_cached_result: "Usa esto para recuperar un resultado que ya fue obtenido durante esta sesión. Úsalo solo si search_knowledge_base fue llamada antes en esta conversación para la misma consulta."

Las condiciones de exclusión le dan a Claude una regla de decisión en lugar de dos opciones de apariencia idéntica. Estas condiciones dependen de que el historial completo de la conversación se pase en cada solicitud. Si los turnos previos se truncan o se descartan, Claude no puede evaluarlos y la lógica de exclusión falla de forma silenciosa.

Cada herramienta adicional que registras aumenta la superficie sobre la que Claude tiene que razonar, así que esta disciplina solo rinde frutos cuando las herramientas subyacentes son distintas. La tabla de abajo muestra dónde ayuda la desambiguación por condiciones de exclusión y dónde se justifica un enfoque diferente.

**Maneja bien**
Enrutar a Claude a la herramienta correcta de forma confiable cuando las descripciones son específicas y las condiciones de exclusión están declaradas.

**Mal ajuste.**
Dos herramientas que hacen cosas similares y necesitan descripciones cada vez más largas para mantenerse separadas: en ese punto, fusiónalas en una sola herramienta con un parámetro de tipo.

## Cuando alguien más ya escribió tus herramientas: MCP como alternativa a redactar esquemas manualmente

Todo lo de las secciones anteriores asume que tú escribes los esquemas de herramienta: name, description, input_schema y la función que se ejecuta cuando Claude emite un bloque tool_use. Para muchas integraciones, no necesitas hacer eso. El Model Context Protocol, MCP, es una capa de comunicación estandarizada que mueve las definiciones de herramienta y su ejecución fuera del código de tu aplicación hacia servidores dedicados. Cuando existe un servidor MCP para el servicio al que quieres llegar, puedes conectarte directamente al servidor MCP en lugar de construir la integración tú mismo.

Toma una integración con GitHub como caso concreto. GitHub expone repositorios, pull requests, issues, proyectos y más. Para construir una integración completa usando el enfoque de esquemas de herramienta de este módulo, necesitarías escribir un esquema y una función de ejecución para cada pieza de esa funcionalidad y mantenerla a medida que la API de GitHub evoluciona. Un servidor MCP para GitHub ya hizo eso. Entonces, tu aplicación se conecta al servidor, recibe la lista completa de herramientas disponibles, y Claude selecciona entre ellas usando el mismo enrutamiento basado en descripciones con el que ya has estado trabajando. El mecanismo subyacente es idéntico, pero lo que cambia es quién lo escribió y quién es dueño de las definiciones de herramienta.

### Cómo encaja MCP en el bucle de uso de herramientas

El bucle que construiste antes en este módulo no cambia cuando introduces MCP. Claude sigue emitiendo un bloque tool_use, tu aplicación sigue ejecutando la herramienta y devolviendo un tool_result, y las reglas de emparejamiento de bloques de mensaje siguen aplicando. La diferencia está en el paso de configuración. En lugar de registrar esquemas que tú escribiste, tu cliente MCP envía una solicitud `ListToolsRequest` al servidor MCP, recibe de vuelta la lista completa de herramientas y pasa esas definiciones a Claude. Desde la perspectiva de Claude, esas herramientas son indistinguibles de las que redactaste manualmente.

Vale la pena notar una implicación práctica: los servidores MCP agregan definiciones de herramienta a la ventana de contexto incluso cuando las herramientas no se están usando en el turno actual. Si conectas varios servidores a la vez, las definiciones de herramienta mismas consumen presupuesto antes de que llegue el primer mensaje. La disciplina de diseño de esquemas de la parte anterior de este módulo también aplica aquí. Registra solo los servidores que estés usando activamente, y revisa el costo de contexto contra el límite de tu ventana si estás conectando múltiples servidores en la misma sesión.

Si estás usando el MCP Connector de la API, controlas el costo de carga mediante un objeto `mcp_toolset` en el arreglo tools. El `mcp_toolset` lleva un bloque `default_config` que aplica a todas las herramientas del servidor, y puedes anular herramientas individuales mediante configs indexados por nombre de herramienta. Dos ajustes importan para el costo de contexto:

- El booleano `defer_loading`, definido dentro de `default_config` o en una entrada por herramienta en configs, retrasa la carga de una definición de herramienta hasta que el modelo la necesita, lo que reduce el costo de contexto inicial cuando conectas un servidor con una lista de herramientas grande.
- El booleano `enabled` activa o desactiva herramientas individuales, de modo que puedes registrar un servidor pero exponer solo las herramientas que quieres que el modelo vea. El MCP Connector requiere que el encabezado beta `mcp-client-2025-11-20` esté establecido en la solicitud.

Sin ese encabezado, la configuración de mcp_toolset no aplicará como se describe aquí.

La otra pieza que vale la pena conocer en esta etapa es cómo el cliente habla realmente con el servidor. MCP corre sobre uno de dos transportes, y cuál uses depende de dónde viva el servidor. Los servidores locales usan stdio: tu aplicación lanza el servidor como un subproceso y se comunica por entrada y salida estándar. Los servidores remotos usan Streamable HTTP: tu aplicación se conecta por la red vía HTTP, usando POST para los mensajes de cliente a servidor y un flujo SSE opcional basado en GET para los mensajes iniciados por el servidor. Existe un transporte anterior solo-SSE, pero está obsoleto, y las integraciones nuevas deben usar Streamable HTTP. Una restricción que vale la pena señalar si usas el conector MCP de Anthropic en la API: solo se soportan servidores expuestos por HTTP a través del conector, y los servidores stdio requieren que gestiones tú mismo la conexión del cliente MCP mediante el SDK. Una vez que la conexión está establecida y las definiciones de herramienta se reciben, el código de tu aplicación trata ambos transportes de forma idéntica.

**Nota:**
Usa MCP cuando
Ya existe un servidor MCP bien mantenido para el servicio que necesitas (verifica que cubra las operaciones específicas que requieres y que se mantenga activamente frente a la API actual del servicio). Escribir y ser dueño de esos esquemas tú mismo agrega sobrecarga de implementación sin capacidad adicional. Nota que el MCP Connector de la API de Claude solo soporta servidores remotos. Los servidores stdio locales requieren Claude Desktop o Claude Code como cliente; no pueden conectarse directamente a través de la API.

**Nota:**
Escribe esquemas manualmente cuando
Ningún servidor MCP cubre tu caso de uso, o cuando necesitas control preciso sobre el alcance de las herramientas y la calidad de las descripciones que un servidor de propósito general no provee. Antes de recurrir por defecto a esquemas manuales para controlar el alcance, nota que el MCP Connector de la API soporta listas de permitidos y listas de bloqueados de herramientas específicas por servidor mediante la configuración de MCPToolset. La redacción manual todavía puede justificarse por calidad de descripción, pero no siempre por alcance.

**Nota:**
Usa ambos cuando
Conéctate a un servidor MCP para obtener amplitud y luego aplica la disciplina de ajuste de descripciones de la parte anterior de este módulo a las herramientas específicas hacia las que estás enrutando activamente. MCP y la redacción manual de esquemas no son mutuamente excluyentes: el servidor te da cobertura, y tus descripciones te dan precisión donde importa. Aplica listas de permitidos de herramientas mediante MCPToolset para limitar la superficie sobre la que Claude razona antes de agregar el ajuste de descripciones. Estrechar el conjunto de herramientas y afinar las descripciones son dos palancas separadas, y deberías usar ambas.

---

`[TAG FAILURE]` Ten cuidado - Uso de Herramientas y Diseño de Esquemas · 5 min

## La descripción que mandó a Claude a la herramienta equivocada

**Configuración**

*Un esquema puede verse correcto y aun así fallar. Los parámetros tipados y el pasar las pruebas del camino feliz te dicen que la estructura es válida, pero no te dicen si Claude puede elegir de forma confiable entre tus herramientas cuando una entrada se sitúa cerca de la frontera de dos descripciones superpuestas. Ese es el modo de falla que las pruebas iniciales pasan por alto y el que tiene más probabilidad de aparecer en producción.*

### Un desarrollador lleva tres horas en una revisión de código cuando pega una conversación de un canal interno en una sesión de depuración.

*Este es un intercambio compuesto basado en patrones comunes de conversaciones de depuración entre desarrolladores. El diálogo está construido para ilustrar el momento diagnóstico en el que se nombra la superposición de descripciones, no transcrito de una revisión de código específica.*

Veamos el intercambio de abajo, que ocurre después de que un desarrollador ha estado depurando selecciones de herramienta incorrectas desde la mañana. El desarrollador senior hace una sola pregunta que replantea todo el problema:

**Desarrollador:** "¿Por qué Claude sigue llamando a search_docs cuando la respuesta ya está en el contexto? Lo he vuelto a correr cuatro veces, y sigue yéndose a la herramienta equivocada."

**Desarrollador senior:** "¿Qué dice la descripción de search_docs?"

**Desarrollador:** "'Usa esto para encontrar información sobre el producto.'"

**Desarrollador senior:** "¿Y qué dice get_context_summary?"

**Desarrollador:** "'Usa esto para recuperar información relevante de la sesión actual.'"

**Desarrollador senior:** "Esas descripciones son lo mismo desde la perspectiva de Claude. Ambas dicen 'encontrar información'. Una de ellas necesita decir cuándo no llamarla."

**Desarrollador:** "Entonces, ¿necesito agregar una exclusión?"

**Desarrollador senior:** "Exacto. Prueba usar en search_docs 'cuando el usuario haga una pregunta que requiera consultar contenido que no esté ya presente en esta conversación. No llames a esto si la respuesta está disponible en el contexto de la sesión actual.' Entonces get_context_summary maneja el caso en contexto. Vas a querer ajustar la descripción de get_context_summary de la misma manera: agrega 'Usa esto solo si la respuesta ya está presente en la sesión actual. No uses esto para consultar información nueva.' Ambas herramientas necesitan la frontera, no solo una."

**Desarrollador:** "Eso son dos oraciones."

**Desarrollador senior:** "Exacto. Una para decir cuándo usarla, otra para decir cuándo no. Esa es toda la corrección."

**Qué debes tener en cuenta**

Claude selecciona una herramienta razonando sobre todas las descripciones registradas en el contexto de la conversación completa. Cuando dos descripciones se ven similares, ese razonamiento no tiene una señal confiable para distinguirlas, así que Claude elige con base en pequeñas diferencias superficiales que pueden no corresponder a la distinción que tú pretendías.

Cuando la falla son descripciones superpuestas, la corrección es consistente: agrega una oración que nombre cuándo no llamar a la herramienta, para darle a Claude una frontera de decisión. Si las descripciones no pueden separarse limpiamente ni siquiera con condiciones de exclusión, puede que las herramientas necesiten fusionarse en una sola con un parámetro de tipo.

---

`[TAG CHECKPOINT]` Punto de control - Uso de Herramientas y Diseño de Esquemas · 4 min

# Punto de control 3 · Detecta y corrige el error del esquema

La traza de sesión de abajo muestra un agente llamando a una herramienta, recibiendo un resultado y luego fallando con un error de validación de la API en la siguiente solicitud. El esquema es válido, la descripción de la herramienta es específica, y el contenido del resultado de herramienta es correcto.

Hay una convención que necesitas conocer antes de leer la traza: los bloques tool_result siempre se envían con el rol de usuario, aunque el contenido lo genere tu aplicación en lugar de escribirlo una persona. El campo role marca quién está enviando el mensaje a Claude, no quién redactó el contenido subyacente. El turno 3 de la traza está etiquetado como "Usuario (resultado de herramienta)" para hacer explícita esa asignación.

Lee la traza, identifica qué bloque de mensaje falta o está mal ordenado, nombra la regla que se rompió y selecciona la corrección puntual entre las tres opciones de abajo.

**Traza de sesión**

```
Turno 1: Usuario:
  [text]: "¿Cuál es el saldo actual de la cuenta A-4471?"

Turno 2: Asistente:
  [text]: "Voy a consultarlo."
  [tool_use]: id="toolu_01", name="get_account_balance", input={"account_id": "A-4471"}

Turno 3: Usuario (resultado de herramienta):
  [tool_result]: tool_use_id="toolu_02", content="Balance: $1,240.18"

Turno 4: Respuesta de la API:
  Error: invalid_request_error
  "tool_result block references unknown tool_use_id"
```

A. Actualizar la descripción de get_account_balance para agregar una condición de exclusión.
B. Corregir el tool_use_id en el bloque tool_result para que coincida con el id emitido en el turno del asistente.
C. Agregar un arreglo required al input_schema de la herramienta para que account_id no pueda omitirse.

---

`[TAG TEACHING]` Enseñanza - Respuestas en Streaming · 16 min

# Respuestas en streaming y manejo de salida parcial sin corromper el estado

Cada solicitud hasta ahora ha esperado a que llegue la respuesta completa antes de hacer algo con ella. Eso está bien, hasta que la respuesta es larga, o hay un usuario ahí sentado mirando una pantalla en blanco. El streaming envía la respuesta en piezas, mandándolas conforme el modelo las genera. Eso hace que se sienta más rápido, pero también le da a tu código un trabajo nuevo: ahora te toca ensamblar el contenido final tú mismo a partir de la serie de salidas, y tienes que estar preparado por si la serie se detiene antes de tiempo.

## Qué cambia el streaming respecto de la respuesta

En una solicitud sin streaming, la API te entrega un mensaje completo con cada bloque de contenido, plenamente formado. En una solicitud con streaming, la API en cambio envía una serie de eventos que describen el mensaje *mientras se está construyendo*. Tu código escucha esa serie y reensambla los bloques. El mensaje con el que terminas es idéntico al que te habría dado una llamada sin streaming, pero la diferencia es que *tú* tienes que ensamblar las piezas, y *tú* decides qué hacer si los eventos se detienen antes de que el mensaje esté terminado.

Ayuda saber qué no está pasando: el modelo no está manteniendo abierto algún objeto vivo para ti. Cada evento es su propio pequeño mensaje que describe un solo cambio: un bloque empezó, se le agregó algo de texto o de entrada, un bloque terminó, el mensaje completo terminó. Tu manejador toma cada evento y lo aplica al estado parcial que ha venido construyendo.

## La secuencia de eventos y qué hace tu manejador con cada uno

| Evento | Qué señala | Qué hace tu manejador |
|---|---|---|
| message_start | Un nuevo mensaje está comenzando. Lleva el armazón del mensaje con contenido vacío y el uso inicial. | Prepara un arreglo de contenido vacío en el cual recolectar los bloques. |
| content_block_start | Un nuevo bloque de contenido se está abriendo, con su tipo (text, tool_use o thinking) e índice. | Crea un espacio en ese índice para el tipo de bloque nombrado. Un bloque tool_use se abre con su nombre e id, pero todavía sin entrada. |
| content_block_delta | Una pieza incremental de un bloque: un fragmento de texto, un fragmento de entrada JSON para una llamada de herramienta, o un fragmento de pensamiento. | Agrega el fragmento al bloque en ese índice. Las entradas de llamadas de herramienta llegan como una cadena JSON parcial repartida entre varios deltas; no puedes parsearlas hasta que el bloque cierre. |
| content_block_stop | El bloque en este índice está completo. | Finaliza el bloque. Para un bloque tool_use, este es el primer momento en que la entrada JSON acumulada está lo bastante completa para parsearse. |
| message_delta | Cambios de nivel superior al mensaje: el stop_reason y los conteos finales de uso. | Registra el stop_reason. Te dice si el modelo terminó o se detuvo por alguna otra razón. |
| message_stop | El flujo está completo. | El arreglo de contenido ensamblado es ahora el mensaje terminado. De aquí en adelante, trátalo exactamente como una respuesta sin streaming. |

## La regla que evita que tu estado se corrompa: no actúes sobre un bloque parcial

El bloque tool_use es el que hay que vigilar. Su entrada aparece como una cadena JSON parcial repartida entre muchos eventos content_block_delta, y esa cadena *no es* JSON válido hasta que content_block_stop cierra el bloque. Si tu código intenta parsear la entrada o ejecutar la herramienta antes de que el bloque cierre, o se atraganta con JSON malformado o corre con la mitad de los argumentos faltantes. Así que la regla es simple: recolecta los deltas, y actúa solo después del content_block_stop de ese bloque.

La misma disciplina aplica cuando agregas un turno del asistente recibido por streaming a tu historial de conversación. Agrégalo solo después de message_stop, con cada bloque completamente ensamblado. Un turno construido a partir de un flujo que se cortó a la mitad está incompleto, y las reglas de emparejamiento de tool_use rechazarán tu siguiente solicitud si un bloque tool_use a medio construir termina en el historial.

## Cuando el flujo se detiene antes de tiempo

Los flujos a veces fallan a la mitad. Una conexión de red caída, un tiempo de espera agotado o una desconexión del cliente pueden terminar la serie de eventos antes de que llegue message_stop. La falla que de verdad duele es tratar lo que hayas recolectado hasta ese momento como si estuviera completo. Un bloque de texto parcial mostrado a un usuario es apenas un defecto cosmético; un bloque tool_use parcial escrito en el historial es un problema estructural que corrompe el siguiente turno.

- **Rastrea la finalización a propósito.** Un turno es utilizable solo una vez que ha llegado message_stop. Hasta entonces, trata lo que has acumulado como provisional.
- **Ante un flujo interrumpido, descarta el turno parcial del asistente** en lugar de guardarlo en el historial, y luego reintenta la solicitud. Confirmar un turno a medio construir es exactamente lo que rompe la solicitud siguiente.
- **Revisa el stop_reason de message_delta** antes de continuar un bucle. Un stop_reason de tool_use significa que tus llamadas de herramienta ensambladas están listas para ejecutarse; cualquier otro valor significa que estás en un camino distinto, no en el camino de herramientas.

**Maneja bien**
Respuestas largas e interfaces de cara al usuario donde mostrar la salida conforme se genera elimina la espera frente a la pantalla en blanco.

**Agrega costo o complejidad**
Tú ensamblas los bloques, no debes actuar sobre bloques parciales, y debes manejar explícitamente la interrupción a mitad del flujo.

**Usa un enfoque diferente**
Para respuestas cortas o trabajos de backend donde nadie está esperando la salida, una llamada sin streaming es más simple y elimina por completo el riesgo de estado parcial.

---

`[TAG FAILURE]` Ten cuidado - Respuestas en Streaming · 5 min

## El flujo que dejó una llamada de herramienta a medio escribir en el historial

**Configuración**

*Una respuesta en streaming puede verse bien en pantalla y aun así corromper la siguiente solicitud. El texto se renderizó, el usuario vio una respuesta, y el manejador agregó el turno al historial. Lo que el manejador no detectó fue que el flujo se cayó a mitad de bloque, así que la llamada tool_use que almacenó estaba a la mitad de su entrada. La siguiente solicitud falla la validación, y el error apunta al turno siguiente y no al flujo que lo causó.*

### Postmortem: bloque tool_use parcial confirmado al historial después de un flujo caído

Un agente usaba streaming para que sus operadores pudieran ver las respuestas generarse en tiempo real. El manejador acumulaba eventos content_block_delta y agregaba el turno del asistente al historial cuando su bucle de lectura terminaba. En pruebas sobre una conexión local rápida, los flujos siempre corrían hasta completarse, así que el bucle siempre terminaba en message_stop y los turnos almacenados siempre estaban completos.

En producción, un corte momentáneo de red terminó un flujo después de que el bloque tool_use se había abierto y recibido parte de su entrada JSON, pero antes de content_block_stop. El bucle de lectura terminó igual que siempre lo había hecho, así que el manejador agregó el turno: un turno del asistente que contenía un bloque tool_use cuya cadena de entrada era JSON truncado. El operador vio una respuesta parcial y reintentó. La solicitud de reintento incluyó ese turno corrupto en el historial, y la API la rechazó con un error de validación que apuntaba al bloque tool_use malformado.

El equipo pasó una tarde inspeccionando el esquema y la lógica de reintento, porque el error apareció en la solicitud de reintento. Sin embargo, la causa real estaba río arriba: el manejador trataba 'el bucle de lectura terminó' como equivalente a 'el mensaje está completo', y esas no son la misma cosa.

**Qué debes tener en cuenta**

Que un flujo termine no es lo mismo que un mensaje se complete. Solo message_stop significa que el mensaje está entero. Si tu manejador confirma un turno cada vez que su bucle de lectura sale, un flujo interrumpido escribe un bloque a medio construir en el historial, y la falla aparece en la siguiente solicitud en lugar de en la que la causó. Condiciona la adición al historial a message_stop, descarta el turno parcial ante una interrupción, y reintenta desde el último turno completo. Cuando un error de uso de herramientas aparezca en un reintento, revisa si el turno previo fue ensamblado a partir de un flujo antes de tocar el esquema.

---

`[TAG CHECKPOINT]` Punto de control - Respuestas en Streaming · 4 min

# Punto de control 4 · Repara el manejador de flujo defectuoso

El manejador de abajo recibe una respuesta por streaming y agrega el turno del asistente al historial de conversación. Contiene un solo defecto que solo se manifiesta cuando un flujo se interrumpe. Identifica el defecto y escribe la versión corregida.

**Manejador defectuoso**

```python
blocks = {}
stop_seen = False
with client.messages.stream(
    model=model,
    max_tokens=4096,
    messages=messages,
    tools=tools,
) as stream:
    for event in stream:
        if event.type == "content_block_start":
            blocks[event.index] = init_block(event)
        elif event.type == "content_block_delta":
            apply_delta(blocks[event.index], event.delta)
        elif event.type == "message_stop":
            stop_seen = True
messages.append({"role": "assistant", "content": assemble(blocks)})
```

---

`[TAG TEACHING]` Enseñanza - Ingeniería de Contexto · 16 min

# Selección de modelo y mantener las sesiones de múltiples turnos dentro del presupuesto

Tomas una decisión temprana: qué modelo ejecuta la carga de trabajo. La familia Claude cubre un rango de compromisos entre costo, latencia y capacidad, así que el modelo que elijas fija el piso de precio y de velocidad dentro del cual se mueve cada decisión posterior.

Una vez fijado el modelo, la siguiente restricción es la ventana de contexto: la extensión completa de texto que el modelo puede recibir de una sola vez, incluyendo tu prompt, la conversación hasta ese momento y cada resultado de herramienta. Cada resultado de herramienta que Claude devuelve se agrega a la ventana de contexto y permanece ahí durante el resto de la sesión. En un prompt de un solo turno, eso es invisible. En una sesión de agente de múltiples pasos que corre diez o veinte llamadas de herramienta, la ventana se llena rápido, y una vez que se llena, el agente o compacta (perdiendo detalle) o se estanca antes de que la tarea esté terminada.

Entonces, la pregunta para cualquier flujo de trabajo agéntico es si has decidido de antemano qué entra en la ventana de contexto, qué sale de vuelta como resumen y qué nunca entra en absoluto. Ese conjunto de decisiones es la ingeniería de contexto.

## Selección de modelo: empieza con Sonnet, muévete deliberadamente

La familia de modelos Claude abarca actualmente cuatro niveles: Fable, Opus, Sonnet y Haiku, cada uno optimizado para distintos compromisos de costo, latencia y capacidad. Sonnet es el predeterminado equilibrado para la mayoría de las cargas de trabajo de producción. Haiku está construido para velocidad y eficiencia de costo en tareas que caben en su rango de capacidad. Opus maneja trabajo exigente por encima del rango de Sonnet, y Fable es el modelo más capaz de Anthropic, construido para las tareas más exigentes, incluyendo razonamiento complejo, programación avanzada, síntesis de investigación y flujos de trabajo agénticos sofisticados donde la máxima inteligencia es la prioridad. Confirma la línea de modelos actual y los identificadores de modelo contra platform.claude.com/docs al momento de construir.

El punto de partida predeterminado es Sonnet. Sube a Opus solo cuando un conjunto de evaluaciones te diga que Sonnet no está alcanzando tu estándar de calidad. Baja a Haiku solo cuando un conjunto de evaluaciones te diga que la caída de calidad es aceptable para tu tarea, no simplemente para ahorrar costos. Tu decisión de cambiar de modelo siempre debe ser una decisión medida.

## La ventana de contexto no es un recurso gratuito

Piensa en la ventana de contexto como la cantidad de espacio que Claude puede mantener en memoria de trabajo. Cada mensaje que envías, cada resultado de herramienta que devuelves, cada documento que inyectas y cada respuesta que Claude genera ocupan espacio en esa ventana. Si una solicitud ya es más grande que la ventana de contexto, la Messages API la rechaza con un error de validación antes de generar; si una solicitud cabe pero la generación alcanza el techo a mitad de camino, los modelos actuales devuelven la salida generada hasta ese punto con una razón de detención model_context_window_exceeded. Ninguno de los dos caminos trunca silenciosamente tu contenido más antiguo. Si quieres que una sesión siga corriendo más allá del límite de la ventana, tu aplicación debe gestionarlo por su cuenta recortando o resumiendo el historial antes de que salga la siguiente solicitud.

En desarrollo, la ventana rara vez se llena porque las entradas de prueba son pequeñas y las sesiones son cortas. En producción, las salidas de herramienta suelen ser de tres a cinco veces más largas que los fixtures de prueba, las sesiones corren por más turnos, y la ventana se llena en el turno ocho en lugar del turno cincuenta, lo que significa que se llenan antes que en desarrollo. El costo de no planear para esto es una caída en producción.

## Cuatro estrategias para mantenerte dentro del presupuesto

La sección anterior expuso el argumento para mover el estado fuera de la ventana de contexto viva. La razón detrás de eso es el presupuesto. Cada token en la ventana cuesta dinero en la entrada y agrega latencia a la respuesta, y una sesión larga agrava ambos. Las cuatro estrategias de abajo son formas concretas de gestionar ese presupuesto, cada una adecuada a una forma distinta de conversación.

| Estrategia | Qué hace | Cuándo aplicarla | Qué continuidad pierdes |
|---|---|---|---|
| **Poda** | Te permite saltar de vuelta a un mensaje anterior y continuar desde ahí, eliminando la conversación que vino después. | Después de que Claude haya seguido un camino improductivo o acumulado un ida y vuelta de depuración que no ayudará en la siguiente tarea. | El trabajo hecho después del punto de retroceso se pierde. Si Claude aprendió algo útil en ese tramo, tiene que volver a aprenderlo. |
| **Compactación** (`/compact` en Claude Code; compactación del lado del servidor en la API, una estrategia beta que la plataforma realiza por ti, con el resumen manual como alternativa del lado del cliente) | Resume el historial de conversación en una versión condensada que preserva la información clave que Claude ha aprendido. El resumen cuesta menos tokens que los turnos originales. | Cuando la sesión se está acercando al techo de contexto pero quieres seguir trabajando en la misma funcionalidad con el conocimiento que Claude ha acumulado. | Se pueden perder detalles en el resumen. Cualquier cosa no capturada en el resumen no estará disponible para Claude de ahí en adelante. |
| **Limpieza** (`/clear` en Claude Code; nueva sesión en la API) | Inicia una conversación nueva con contexto vacío. Nada de la sesión anterior se traslada. | Cuando la siguiente tarea es completamente distinta de la actual, y el contexto previo solo introduciría sesgo o confusión. | Todo el contexto de la sesión se pierde. Cualquier cosa que Claude necesite recordar entre sesiones tiene que colocarse en algún lugar persistente, como un archivo CLAUDE.md. |
| **Traspasos a subagentes** | Lanza un subagente en su propia ventana de contexto aislada, solo con la descripción de la tarea y el prompt de sistema que necesita. El subagente hace el trabajo y devuelve un resumen. | Cuando una subtarea es lo bastante autocontenida como para delegarla, especialmente trabajo de exploración donde el recorrido satura el contexto principal pero la respuesta es corta. | La visibilidad sobre cómo el subagente llegó a su conclusión. Los pasos intermedios se descartan junto con el contexto del subagente. |

## Dos palancas más: caché de prompts y conteo de tokens

Las cuatro estrategias de arriba gestionan qué entra en la ventana de contexto. Dos funcionalidades de la API reducen lo que pagas por lo que ya está ahí.

**El caché de prompts** almacena el trabajo de procesamiento hecho sobre un prefijo estable de tu solicitud para que las solicitudes de seguimiento puedan reutilizarlo en lugar de reprocesar los mismos tokens. La primera solicitud escribe el prefijo al caché; las solicitudes posteriores que envíen contenido idéntico hasta ese punto pagan una fracción del costo original. Los candidatos más fuertes son las partes de la solicitud que rara vez cambian entre turnos: un prompt de sistema largo, un conjunto grande de definiciones de herramienta, o un documento de referencia que consultas repetidamente. Habilitas el caché marcando un punto de corte de caché con un campo `cache_control` de tipo `ephemeral` en el último bloque que quieras cachear. Puedes colocar hasta cuatro puntos de corte. Para sesiones de múltiples turnos con un prompt de sistema y esquemas de herramienta estables, cachear esos prefijos una vez y reutilizarlos a lo largo de los turnos es la reducción de costo de mayor apalancamiento disponible.

**El conteo de tokens** te permite medir la presión de contexto antes de que salga una solicitud en lugar de después de que falle. El endpoint `count_tokens` toma el mismo cuerpo de solicitud que una llamada de mensajes y devuelve el conteo de tokens sin ejecutar la inferencia. Úsalo durante el desarrollo para verificar que tus suposiciones de presupuesto de contexto se sostengan frente a salidas de herramienta reales, no solo frente a fixtures de prueba, y en producción para bloquear solicitudes que excederían la ventana antes de que fallen.

## Los tres lugares donde una ruta de RAG puede romperse

La ruta tiene tres lugares donde puede salir mal: el troceado, el emparejamiento por embeddings y el ensamblado dentro del prompt.

- **El troceado** decide qué es una unidad de contexto recuperable. Divide demasiado pequeño y un solo fragmento carece del contexto circundante para ser útil. Divide demasiado grande y un fragmento diluye la coincidencia con texto no relacionado. El troceado por oraciones o por secciones con un poco de solapamiento es un valor predeterminado razonable. El solapamiento importa porque los hechos que cruzan una frontera de otro modo quedarían partidos y se volverían difíciles de recuperar.
- **El emparejamiento por embeddings** decide qué fragmentos se devuelven. Usa una búsqueda por similitud, así que recupera contenido que está semánticamente cerca. Eso no siempre es lo que contiene el término exacto que necesitas. Una consulta por un identificador específico puede fallar en encontrar el fragmento relevante si un resultado semánticamente más similar lo supera en el ranking. Por eso a veces se corre una coincidencia léxica junto con la semántica.
- **El paso de ensamblado** es donde los fragmentos recuperados deben llegar al modelo en la estructura que el prompt espera; de lo contrario, el modelo responde de memoria en lugar de responder desde el texto recuperado.

La ruta de "obtener una sola vez" te da un sistema sobre el que puedes razonar: puedes inspeccionar qué fragmentos se recuperaron para una consulta y probar esa recuperación directamente. El costo es la infraestructura: el índice que debe construirse, almacenarse, mantenerse sincronizado a medida que el corpus cambia y asegurarse dondequiera que viva. La ruta de "buscar a lo largo de varias rondas" elimina esa infraestructura y la obsolescencia que la acompaña, ya que el modelo lee los archivos actuales al momento de la consulta, a costa de gastar más tokens y tiempo por consulta y de darte un proceso menos inspeccionable. Para un corpus de referencia estable consultado con búsquedas simples, vale la pena ser dueño del índice. Para un corpus cambiante o preguntas de múltiples pasos, la búsqueda iterativa suele ser el sistema más simple pese a costar más por consulta.

La ganancia de rendimiento reportada para la búsqueda agéntica de un solo agente frente a un índice de recuperación es una cifra fijada a una versión. Confírmala contra la capa de referencia al momento de construir en lugar de confiar en el número de este módulo.

Ahora, entendamos un poco sobre dos de las estrategias más comunes: la compactación y los traspasos a subagentes.

## Aplicando la compactación: qué se preserva depende de cómo escribas el resumidor

Cuando usas `/compact` en Claude Code, la herramienta decide qué incluir en el resumen. En la API, la estrategia primaria documentada es la compactación del lado del servidor (beta): la plataforma resume la conversación por ti cuando está configurada en la solicitud. Cuando en cambio implementas compactación manual en una sesión de API, escribes el prompt del resumidor tú mismo. Ese prompt determina lo que el agente sabrá en los turnos posteriores.

El prompt del resumidor dice "resume la conversación hasta ahora"

Produce un resumen general que puede descartar estado crítico para la tarea: qué archivos fueron modificados, qué decisión se tomó en un punto de bifurcación, y qué error se encontró y se resolvió.

El prompt del resumidor dice "resume la conversación, preservando todas las rutas de archivo modificadas, todas las decisiones tomadas, y cualquier error encontrado y su resolución"

Produce un resumen que el agente puede usar.

Este no es un caso extremo; la pérdida de estado crítico para la tarea por un resumidor poco especificado es una de las fuentes más comunes de fallas de agentes entre sesiones.

## Traspasos a subagentes: gestionar tareas de horizonte largo

Cuando una tarea es demasiado grande para una sola ventana de contexto, agrandar la ventana no es la solución. La solución es descomponer la tarea y pasar solo el contexto relevante a cada subagente. Un subagente recibe una tarea acotada y el contexto mínimo que necesita: los resultados de pasos previos que son directamente relevantes, las herramientas que necesita para completar su tarea, y condiciones de salida claras. El agente padre recolecta los resultados. Este patrón mantiene bajo el costo por turno y hace tratables las tareas de horizonte largo.

Al igual que la compactación y la poda, los traspasos a subagentes agregan sobrecarga de implementación, así que aplícalos solo donde el costo de contexto sea una restricción real: un prompt simple de un solo turno o un flujo de trabajo corto no necesita esto.

**Maneja bien**
Sesiones de agente de múltiples pasos que exceden el presupuesto de tokens y necesitan descomposición. Se diseñan mejor en la etapa de arquitectura en lugar de parchearse como una corrección de producción.

**Usa un enfoque diferente**
Pipelines que nunca se acercan al límite de la ventana. Mide el uso real de tokens contra el límite de contexto de tu modelo antes de agregar sobrecarga de gestión.

**Anticipo**

Las estrategias cubiertas hasta ahora asumen que sabes que tu presupuesto de contexto está bajo presión y que estás eligiendo una herramienta para gestionarlo. El punto crítico aquí es no enterarte de que la presión existe hasta que la sesión se rompe. Una carga de trabajo puede pasar cada prueba en desarrollo y luego fallar en producción por una razón: la salida de herramienta se hizo más grande, las sesiones se hicieron más largas, y la ventana de contexto que sostenía veinte turnos limpiamente ahora se llena en el turno ocho. La siguiente sección recorre exactamente cómo ocurre eso, usando un postmortem trabajado de un agente que corría bien con fixtures de prueba y luego chocó con su techo una vez que documentos reales empezaron a fluir por él.

---

`[TAG FAILURE]` Ten cuidado - Ingeniería de Contexto · 5 min

## La sesión que corrió bien en desarrollo y luego chocó con un techo en producción

**Configuración**

*Las salidas de las herramientas consumen contexto de la misma forma que lo hacen los prompts y las lecturas de archivos. La ventana de contexto es un presupuesto fijo que contiene todo lo que Claude necesita ver en un turno dado: el prompt de sistema, el historial de la conversación, y cada llamada a herramienta y cada resultado de herramienta acumulados hasta ese momento. Cuando las salidas de las herramientas son cortas, cada turno agrega una cantidad pequeña a ese total acumulado y el presupuesto dura mucho tiempo. Cuando las salidas de las herramientas crecen, cada turno agrega más al mismo total acumulado, y el presupuesto se agota más rápido. La ventana en sí no ha cambiado; lo que cambió es cuánto de ella gasta ahora cada turno. Una sesión que maneja veinte turnos limpiamente en desarrollo puede empezar a fallar en el turno ocho en producción exactamente por esta razón.*

### Postmortem: el presupuesto de contexto nunca se midió contra las salidas de herramientas de producción

Se construyó un agente para procesar recibos de ventas bajo un presupuesto de 40k tokens de ventana de contexto, un tope que el equipo fijó como control de costo sobre el contexto del agente en lugar del techo del modelo. El modelo en sí ofrecía muchísimo más espacio. Los modelos actuales de la API de Claude cuentan con al menos una ventana de contexto de 200k tokens, y los modelos insignia más nuevos, Fable incluido, sirven 1M de tokens por defecto, así que la cifra de 40k era un presupuesto deliberado que el equipo se impuso, no un límite que el modelo les forzara. Desarrollo usó un conjunto de fixtures de prueba de veinte recibos, cada uno devolviendo un resultado de herramienta de aproximadamente 800 tokens. La sesión completa de veinte turnos consumía cerca de 18,000 tokens, muy dentro del límite de presupuesto de 40k tokens del equipo.

En producción, los recibos contenían documentación de respaldo, incluyendo registros de transacciones y correspondencia. La salida promedio de herramienta creció a aproximadamente 3,200 tokens por llamada. Ocho turnos de salida de herramientas por sí solos sumaban aproximadamente 25,600 tokens, y una vez que se agregaban encima el prompt de sistema, los mensajes del usuario y los mensajes del asistente, el total acumulado alcanzaba el tope de presupuesto de 40k del equipo. El agente llegaba a ese tope en el turno ocho, antes de poder completar su análisis. La falla parecía una degradación en la selección de herramientas, porque el agente empezaba a elegir las herramientas equivocadas y a devolver análisis incompletos. Sin embargo, la causa subyacente era distinta. El prompt de sistema y las instrucciones iniciales habían sido desplazados por salidas de herramientas acumuladas que nunca se podaron después de usarse, y el agente estaba tomando decisiones sobre una ventana de contexto que ya no contenía la guía con la que había empezado.

| | Desarrollo | Producción |
|---|---|---|
| Ventana de contexto disponible | 200k estándar, 1M en los Opus y Sonnet actuales | 200k estándar, 1M en los Opus y Sonnet actuales |
| Tope de presupuesto del equipo | 40k tokens | 40k tokens |
| Salida promedio de herramienta | ~800 tokens por llamada | ~3,200 tokens por llamada |
| Turnos antes de que se llene la ventana | Las sesiones se completaban sin alcanzar el tope | Tope alcanzado en el turno 8 |
| Síntoma observado | Ninguno. Las sesiones se completan limpiamente | Selecciones de herramienta equivocadas y salidas incompletas a partir del turno 8 |
| Causa raíz identificada mediante | No aplica | Auditoría de uso de tokens, dos días después del despliegue |
| Corrección | No aplica | Podar las salidas de herramientas después de usarlas, y aplicar compactación proactivamente antes de alcanzar el tope |

**Qué debes tener en cuenta**

Los fixtures de prueba de desarrollo eran más cortos que los datos de producción. Esto es cierto para casi todo agente construido contra un conjunto de fixtures. La corrección es medir el costo real en tokens del resultado de una herramienta contra la entrada más grande que puedas encontrar en tus datos objetivo antes de que el agente salga a producción.

El síntoma del desbordamiento de contexto a menudo se malinterpreta como una falla de selección de herramientas, porque la salida se ve parecida. Si ves que la selección de herramientas se degrada después de un número fijo de turnos, revisa si la ventana de contexto se está llenando antes de empezar a depurar el esquema.

---

`[TAG CHECKPOINT]` Punto de control - Ingeniería de Contexto · 3 min

# Punto de control 5 · Diagnostica la falla de contexto

La traza de sesión de abajo muestra una ejecución de agente multi-turno con selecciones de herramientas que se degradan. Lee la traza, identifica qué turno disparó la falla, nombra el mecanismo, y selecciona la corrección de una línea entre las tres opciones de abajo.

**Traza de sesión**

Haz clic en cada turno para inspeccionarlo.

| Turno | Herramienta llamada | Tamaño del resultado |
|---|---|---|
| 1 | fetch_policy_document, selección correcta | 2,400 tokens |
| 2 | fetch_policy_document, selección correcta | 2,400 tokens |
| 3 | fetch_policy_document, selección correcta | 2,400 tokens |
| 4 | fetch_policy_document, selección correcta | 2,400 tokens |
| 5 | search_knowledge_base en lugar de apply_coverage_rule, selección equivocada | 1,800 tokens |
| 6 | search_knowledge_base de nuevo, selección equivocada (igual que el turno 5) | 1,800 tokens |
| 7 | La sesión termina sin resultado | N/A |

**Turno 4**

fetch_policy_document, selección correcta, 2,400 tokens. Último turno correcto. Cuatro resultados grandes de herramienta (9,600 tokens) están ahora asentados en la ventana de contexto, desplazando las instrucciones que le dicen a Claude qué herramienta usar a continuación.

A. Agregar una descripción más clara al esquema de la herramienta apply_coverage_rule.
B. Podar los resultados de fetch_policy_document después de cada turno para que las salidas acumuladas no desplacen las instrucciones actuales, y aplicar compactación antes del turno 5.
C. Aumentar max_tokens en la llamada a la API para darle a Claude más espacio para responder.

---

`[TAG TEACHING]` Enseñanza - Construcción de Agentes · 22 min

# Construir un agente de producción: el bucle, las rutas de cableado, la orquestación y el humano en el bucle

Un agente es un bucle de uso de herramientas de múltiples pasos con contexto gestionado y una meta definida. Ya has construido las piezas individuales, incluyendo los esquemas de herramientas y la gestión de contexto. Esta sección las conecta en un sistema funcional y agrega la capa que ninguno de los dos temas cubre por sí solo.

Cuando los componentes corren juntos a lo largo de múltiples turnos, aparecen nuevos modos de falla que las pruebas aisladas no detectan. Las decisiones de enrutamiento que funcionaban en pruebas de un solo turno empiezan a acumularse. El contexto se llena más rápido de lo esperado. Un paso que depende de un resultado previo recibe la entrada equivocada porque una llamada a herramienta anterior estaba mal estructurada. La pregunta que debería preceder a toda construcción de un agente es: ¿este problema realmente requiere un agente?

Los agentes acarrean sobrecarga de coordinación, costos de contexto expandidos, y más superficie de falla que los patrones más simples. Responder esa pregunta deliberadamente es la primera decisión de diseño.

## Flujo de trabajo o agente: toma esta decisión antes de escribir la primera línea

El error más crítico en el desarrollo de agentes es elegir el patrón equivocado desde el inicio. Los flujos de trabajo y los agentes resuelven problemas distintos: usar un agente cuando un flujo de trabajo es suficiente agrega complejidad de comportamiento sin agregar capacidad. Usar un flujo de trabajo cuando se necesita un agente produce un sistema que se rompe cada vez que la entrada del usuario se desvía de la ruta predeterminada.

| Elige un flujo de trabajo cuando… | Elige un agente cuando… |
|---|---|
| Puedes enumerar los pasos exactos en código. | Puedes especificar la meta y las herramientas, pero no la ruta exacta. |
| El costo del error es real y las barreras de protección a nivel de paso importan. | La ruta a través del trabajo no puede enumerarse por adelantado. |
| Se requiere observabilidad con herramientas estándar. | El no determinismo es aceptable y las acciones posibles del agente están restringidas por su conjunto de herramientas registradas. |
| Las entradas están bien acotadas a un conjunto conocido. | Las entradas del usuario varían de forma impredecible en contenido y estructura. |
| Cada ejecución de la tarea sigue la misma secuencia. | La tarea requiere una secuenciación creativa de las herramientas disponibles. |

## El agente es el patrón. La ruta de cableado es una decisión de implementación.

Una vez que has decidido que la tarea necesita un agente, también has decidido un patrón: un bucle que llama herramientas, gestiona contexto y corre hasta que se cumple una meta. Para sistemas de un solo agente, ese patrón es constante a lo largo de las tres rutas de cableado. Las arquitecturas multiagente, donde un planificador, un ejecutor y un evaluador corren como agentes separados que se pasan el trabajo mediante artefactos estructurados, introducen decisiones de diseño adicionales más allá del bucle en sí. Esos patrones se cubren más adelante en este track. Ese patrón no cambia según cómo lo construyas; lo que cambia es cuánto del bucle escribes tú mismo frente a cuánto le entregas a una biblioteca o a un servicio administrado.

Hay tres rutas de cableado, y se ubican en un espectro según cuánta infraestructura posees. Puedes escribir el bucle directamente contra la Messages API, lo que te da control total y responsabilidad total. Puedes usar el Agent SDK, que corre el mismo bucle dentro de tu propio proceso y te entrega la ejecución de herramientas, la gestión de contexto y la estructura de iteración ya construidas. O puedes usar Claude Managed Agents (actualmente en beta pública), donde Anthropic corre el bucle y el sandbox, y tu aplicación transmite eventos hacia dentro y resultados de vuelta. Las secciones que siguen enseñan el bucle en sí, porque el bucle es lo que permanece constante. La ruta que elijas decide quién mantiene las partes a su alrededor.

## Rutas de cableado: quién corre el bucle, y qué asumes tú

Las tres rutas difieren en una variable: cuánto del tiempo de ejecución del agente posees. La tabla está ordenada de arriba hacia abajo según cuánta infraestructura delegas. Elige según tus restricciones de despliegue y cumplimiento; no caigas en la tentación de elegir la ruta que simplemente es más rápida de prototipar.

**Quién corre el bucle:** tu código corre cada iteración. Tú envías la solicitud, lees los bloques de uso de herramientas, ejecutas las herramientas y agregas los resultados tú mismo.

**Qué posees:** el bucle completo, la ejecución de herramientas, la gestión de contexto, los reintentos y las condiciones de salida. Nada se te provee.

**Elige esto cuando:** necesitas control total sobre cada paso, tienes restricciones que una biblioteca no acomoda, o te estás enseñando a ti mismo cómo funciona el bucle antes de agregar abstracción.

**Qué verificar antes de comprometerte:** el costo de mantenimiento es tuyo. Cada comportamiento que el SDK te daría gratis, incluyendo la gestión de contexto y el manejo de herramientas en paralelo, se convierte en código que tú escribes y pruebas.

**Quién corre el bucle:** el SDK corre el bucle dentro de tu propio proceso. Itera y gestiona el contexto, y tu código todavía ejecuta las herramientas que el agente llama.

**Qué posees:** la ejecución de herramientas y la aplicación circundante. El SDK provee la estructura del bucle, la gestión de contexto y el registro de herramientas.

**Elige esto cuando:** quieres el bucle, el manejo de contexto y el andamiaje de herramientas que impulsan a Claude Code sin reconstruirlos, y quieres el agente corriendo en tu propio entorno en Python o TypeScript.

**Qué verificar antes de comprometerte:** si las funcionalidades basadas en el sistema de archivos como CLAUDE.md y las skills se cargan en el Agent SDK está controlado por la configuración `settingSources`. No dependas de un valor por defecto: siempre establece `settingSources` explícitamente a las fuentes que pretendes (por ejemplo, `["user", "project", "local"]` para igualar el comportamiento del CLI de Claude Code, o `[]` para correr completamente aislado con solo lo que pasas programáticamente). Confirma el comportamiento por defecto actual contra la referencia del Agent SDK al momento de construir.

**Quién corre el bucle:** Anthropic corre el bucle y el sandbox. Tu aplicación envía eventos de usuario y transmite los resultados de vuelta mediante server-sent events.

**Qué posees:** la capa de aplicación y la definición del agente. Defines el modelo, el prompt de sistema, las herramientas, los servidores MCP y las skills una sola vez, y luego referencias al agente por ID a través de las sesiones.

**Elige esto cuando:** necesitas ejecución de larga duración medida en minutos u horas, quieres un sandbox administrado, o quieres evitar construir el bucle, el sandbox y la capa de ejecución de herramientas por completo. También está disponible en Claude Platform en AWS con algunas diferencias de funcionalidades; verifica la paridad de capacidades contra tu superficie de despliegue antes de comprometerte.

**Qué verificar antes de comprometerte:** las sesiones tienen estado y se almacenan del lado del servidor, lo que significa que actualmente no son elegibles para Zero Data Retention ni para un Business Associate Agreement de HIPAA. (Consulta la documentación de retención de datos de la API de Anthropic en platform.claude.com; verifica al momento de publicar.)

Actualmente en beta pública, todos los endpoints requieren el encabezado beta `managed-agents-2026-04-01` y los comportamientos pueden refinarse entre versiones. Construye con un plan de migración en marcha.

## Claude Managed Agents: cuándo usarlo

La tabla de arriba lista Managed Agents como la tercera ruta. Hagamos esa elección concreta, porque para algunas cargas de trabajo es el valor predeterminado correcto.

Aquí está la diferencia central: con un bucle crudo o con el Agent SDK, tu código corre la iteración. Tú envías cada solicitud, lees los bloques de uso de herramientas, corres las herramientas y agregas los resultados. Con Managed Agents, Anthropic corre el bucle y el sandbox por ti. Tu aplicación define el agente una sola vez (modelo, prompt de sistema, herramientas, servidores MCP, skills), se refiere a él por ID, envía eventos de usuario, y transmite los resultados de vuelta mediante server-sent events.

### Qué dejas de poseer, y qué asumes a cambio

| Categoría | Qué dejas de poseer | Qué asumes a cambio |
|---|---|---|
| Ejecución e infraestructura | El bucle de iteración, el sandbox de ejecución, los reintentos dentro del bucle, y el tiempo de ejecución de la ejecución de herramientas. Anthropic corre todo eso del lado del servidor. | Una definición de agente gestionada como un recurso de API versionado, más una capa de aplicación que envía eventos y consume los resultados transmitidos. |
| Duración y estado de la sesión | La gestión de la ejecución de larga duración. Las sesiones pueden correr por minutos u horas sin que tu proceso mantenga el bucle abierto. | El estado de sesión del lado del servidor. Las sesiones tienen estado y son almacenadas por Anthropic, y están sujetas a sus políticas y restricciones de manejo de datos (consulta la nota de restricción más abajo). |
| Ciclo de vida del sandbox | El aprovisionamiento y el desmontaje del sandbox para la ejecución de herramientas. | Una dependencia de las herramientas disponibles del sandbox administrado y de su modelo de ejecución, en lugar de tu propio entorno. |

### Elige Managed Agents cuando

- **La tarea corre por mucho tiempo.** Una ejecución medida en minutos u horas es incómoda de mantener abierta en tu propio proceso, y el bucle administrado está construido exactamente para eso.
- **Quieres un sandbox administrado.** Si de otro modo estarías construyendo y asegurando un entorno de ejecución para las llamadas a herramientas, usar Managed Agents te quita de encima una pieza grande de infraestructura.
- **Preferirías no construir el bucle, el sandbox y la capa de ejecución de herramientas en absoluto**, y estás dispuesto a definir el agente como un recurso de API en su lugar.

**La restricción que lo decide para el trabajo regulado**

Las sesiones de Managed Agents tienen estado y se almacenan del lado del servidor. Ese almacenamiento es la razón por la que estas sesiones actualmente no son elegibles para Zero Data Retention ni para un Business Associate Agreement de HIPAA. Así que, si tu carga de trabajo acarrea PHI o cae bajo un requisito de ZDR, esta ruta queda descartada sin importar qué tan bien encaje operativamente, y en su lugar te enrutas al Agent SDK o a un bucle crudo sobre una configuración cubierta. La restricción rectora elige la ruta antes de que la conveniencia tenga voz.

*Una progresión común es prototipar sobre el Agent SDK localmente, y luego moverse a Managed Agents para producción. La definición central del agente se traslada conceptualmente. Lo que cambia es el formato: el Agent SDK usa configuración a nivel de código y del sistema de archivos, mientras que Managed Agents define el agente como un recurso de API versionado. Espera un paso de reexpresión, no una exportación directa.*

**Maneja bien**
Agentes de larga duración, y cargas de trabajo donde preferirías no construir ni asegurar un sandbox y un bucle tú mismo.

**Agrega costo o complejidad**
Sesiones con estado del lado del servidor, un formato de definición de agente como recurso, y una superficie beta que puede cambiar entre versiones.

**Usa un enfoque diferente**
Para cargas de trabajo con PHI o ZDR, o cuando necesitas control total dentro del proceso, quédate con el Agent SDK o un bucle crudo sobre una configuración cubierta.

## Cableando el bucle: los cuatro pasos que se sostienen en toda ruta

Los cuatro pasos de abajo definen un bucle de agente funcional sin importar sobre qué ruta construyas. Cuando escribes el bucle contra la Messages API, implementas los cuatro tú mismo. Cuando usas el Agent SDK, este provee la estructura para registrar herramientas, establecer el prompt de sistema e iterar el bucle, y tu código todavía maneja la ejecución de herramientas. Los pasos son los mismos; lo que difiere es cuánto escribes tú frente a cuánto heredas.

- **Registra las herramientas:** cada herramienta sigue la misma estructura de esquema. El SDK las registra contra el agente, para que Claude sepa qué está disponible.
- **Establece el prompt de sistema:** acótalo a la tarea del agente. Un prompt de sistema amplio produce un enrutamiento de herramientas más amplio y menos confiable. Un prompt de sistema que nombra la tarea específica y las herramientas disponibles para ella produce un comportamiento más consistente.
- **Maneja el bucle de uso de herramientas:** ya sea que itere el bucle tú mismo o que el SDK lo itere por ti, tu código maneja la ejecución. Cada llamada a herramienta que Claude emita debe ser ejecutada por tu código y devuelta en un bloque de tool-result.
- **Define las condiciones de salida:** el bucle del agente corre hasta que recibe una condición de parada. Sin condiciones de salida explícitas, el agente seguirá solicitando llamadas a herramientas más allá de lo que la tarea requiere. Deberías definir cuándo terminado significa terminado.

## Lista de verificación del cableado del bucle: verifica esto sin importar la ruta

| # | Elemento | Qué verificar |
|---|---|---|
| 1 | Herramientas registradas | Toda herramienta que el agente pueda necesitar está en la lista de registro. Ninguna herramienta no registrada se referencia en el prompt de sistema. |
| 2 | Prompt de sistema acotado | El prompt de sistema nombra la tarea y las herramientas disponibles. No describe herramientas que el agente no tiene. No omite herramientas que el agente sí tiene y que requieren guía de alcance. |
| 3 | Bucle de uso de herramientas implementado | Tu código maneja cada bloque de tool-use que Claude emite y devuelve un bloque de tool-result por cada uno antes del siguiente turno del asistente. Todos los bloques de tool-use de un mismo turno del asistente deben resolverse juntos. |
| 4 | Punto de inserción de HITL definido | Al menos un punto en el bucle tiene una verificación de humano en el bucle. Consulta la sección de abajo para saber dónde insertarla. |
| 5 | Condiciones de salida definidas | El bucle tiene un criterio de parada claro que no depende de que Claude se ofrezca voluntariamente a detenerse. |

## Humano en el bucle (HITL): puntos de inserción y cuándo aplica cada uno

Un punto de control de humano en el bucle pausa la ejecución del agente y la enruta a un paso de revisión humana antes de continuar. La pregunta que determina dónde insertar uno es: ¿cuál es el peor resultado posible si este paso corre sin una verificación humana?

| Punto de inserción | Qué dispara la verificación | Nivel de riesgo que aborda |
|---|---|---|
| **Antes de una llamada a herramienta destructiva** | El agente está a punto de ejecutar una operación de escritura, borrado o envío. | **Alto:** acciones irreversibles donde una llamada equivocada no puede deshacerse |
| **Después de un paso de planificación** | El agente ha generado un plan y está a punto de empezar a ejecutarlo. | **Medio:** planes incorrectos que producirían el resultado equivocado incluso si todos los pasos se ejecutan correctamente |
| **Ante una salida inesperada** | El resultado de la herramienta contiene una bandera de error, un resultado vacío, o un valor fuera de los límites esperados. | **Variable:** captura modos de falla que la lógica de reintentos por sí sola no resolverá |

## Orquestación de herramientas: exceso de herramientas y falta de herramientas

El comportamiento de enrutamiento del agente está moldeado por dos cosas: cómo se describen las herramientas y cuántas herramientas están registradas. Demasiadas herramientas con descripciones que se solapan producen un enrutamiento errático. Muy pocas herramientas obligan al agente a alucinar una ruta o a devolver un resultado incompleto.

El exceso de herramientas es el problema más común en agentes de producción. Los equipos registran cada herramienta que podrían necesitar "por si acaso" y descubren que la calidad de selección de Claude se degrada a medida que la superficie de herramientas crece. Empieza con el conjunto mínimo requerido para la tarea y agrega herramientas solo cuando se confirme una brecha específica de capacidad.

| Cuándo los agentes son la decisión correcta | Qué asumes cuando usas un agente | Cuándo elegir un flujo de trabajo en su lugar |
|---|---|---|
| Tareas dirigidas a una meta donde la ruta exacta no puede enumerarse por adelantado. Manejo de entradas variables que requerirían decenas de ramificaciones condicionales en un flujo de trabajo. | Los agentes agregan complejidad de comportamiento: la ruta a través de la tarea emerge del razonamiento del modelo sobre el contexto acumulado en lugar de lógica de ramificación explícita en tu código. La observabilidad requiere herramientas a nivel de transcripción en lugar de registro operativo estándar. | Cuando puedes enumerar los pasos en código, usa un flujo de trabajo. Los agentes son el último paso de la progresión. Empieza con el patrón más simple que resuelva el problema, una sola llamada a la API, luego un flujo de trabajo, luego un agente. Y sube de nivel solo cuando el patrón más simple no pueda manejar la variabilidad que la tarea requiere. |

## Las restricciones de datos regulados establecen tu ruta de entrega y tus credenciales antes de que escribas el cableado

Si tus datos necesitan manejarse con restricciones específicas (por ejemplo, secreto profesional abogado-cliente, HIPAA, GDPR, FedRAMP, o una política interna de residencia de datos), esa restricción decide qué endpoint llama tu código, qué credenciales carga, y dónde aterrizan sus registros antes de que tomes una sola decisión de diseño sobre prompts, herramientas o memoria.

Como desarrollador usualmente no eliges la superficie, pero sí escribes el código que apunta a un endpoint específico, adjunta credenciales, configura la región y emite registros. Consigue que la restricción rectora se nombre desde el inicio, porque una configuración de cliente equivocada es mucho más cara de deshacer después de que el agente está cableado que de establecerla correctamente la primera vez. Las cinco restricciones de abajo cubren los casos que es más probable que encuentres en producción.

| Restricción | Qué tiende a descartar en el código | Qué usualmente sobrevive una revisión de código |
|---|---|---|
| Secreto profesional abogado-cliente | Llamadas desde una superficie de Claude.ai de grado consumidor que la firma no puede auditar de extremo a extremo. Rutas de código que envían contenido de documentos privilegiados a cualquier endpoint que la firma no haya aprobado para material privilegiado, sin importar cómo esté estructurado el prompt o el mensaje de sistema. | Llamadas directas a la API o al SDK desde dentro de la propia aplicación de la firma, autenticadas vía SSO, enrutadas a través de una pasarela de LLM aprobada por la firma con registro completo de solicitudes y respuestas. Ten en cuenta que el contenido nativo de las conversaciones de Compliance de Anthropic (prompts, respuestas y cargas útiles de llamadas a herramientas) no es capturado por Anthropic de forma predeterminada en el tráfico directo de la API, así que la organización debe implementar el registro de conversaciones en la capa de aplicación y enrutarlo a un destino de registro aprobado. Las llamadas a herramientas y los resultados de herramientas se quedan dentro de la ruta auditada. Confirma el diseño final de registro con tu equipo de cuenta de Anthropic. |
| HIPAA (manejo de PHI) | Código que envía Información de Salud Protegida a cualquier endpoint o ruta de entrega no cubierta por un Business Associate Agreement para la configuración específica en uso. Esto incluye cualquier ruta de registro o retención a la que tu código escriba y que no haya sido acotada bajo el mismo BAA. | Llamadas directas a la API o al SDK sobre una configuración cubierta por un BAA. La cobertura del BAA para el acceso a la API de primera parte de Anthropic se acuerda con Anthropic, que aprovisiona una organización dedicada habilitada para HIPAA que impone restricciones de funcionalidades por su propia parte. Confirma la configuración cubierta con tu equipo de cuenta de Anthropic. Una alternativa es una ruta mediada por la nube vía AWS Bedrock o GCP Vertex sobre la cuenta de nube elegible para HIPAA que el socio ya tenga. ***Nota***: *el BAA no cubre Console, Workbench, funcionalidades beta ni planes de consumidor. No todas las funcionalidades de la API están cubiertas bajo el BAA; verifica la lista actual de elegibilidad de funcionalidades en la Guía de Implementación de Anthropic antes de configurar.* |
| GDPR y residencia de datos | Rutas de entrega donde la región de ejecución del modelo no puede fijarse en el código, o donde la solicitud puede ser servida desde una región fuera del límite geográfico aprobado. Recurrir por defecto a un endpoint global sin especificar región es el patrón común que se rompe aquí. | Una ruta mediada por la nube como Bedrock o Vertex, con la región fijada en la configuración del cliente a una jurisdicción cubierta. La API directa de Anthropic es un caso aparte; actualmente no provee residencia de datos en la UE, así que los socios con requisitos de residencia de datos en la UE deberían enrutar a través de Bedrock o Vertex en lugar de llamar a la API directamente. |
| FedRAMP y gobierno | Cualquier ruta de código que llame a un endpoint que no esté en un entorno de nube autorizado al nivel de impacto requerido. Esto incluye rutas de desarrollo y de pruebas que golpean el endpoint comercial mientras producción golpea el autorizado, porque las credenciales y los patrones de código se filtran entre ambos. | Existen tres rutas autorizadas al momento de publicar. Claude for Government (C4G) cuenta con una autorización directa FedRAMP High sostenida a través de Palantir Federal Cloud Service – Supporting Services (PFCS-SS). Claude vía Amazon Bedrock GovCloud está aprobado para cargas de trabajo FedRAMP High y DoD IL4/5. Claude vía Vertex AI Assured Workloads también está autorizado por FedRAMP. Claude Enterprise en AWS Marketplace no está autorizado por FedRAMP, así que los equipos que requieran cumplimiento de FedRAMP deben usar una de las tres rutas anteriores. Verifica el estado de autorización actual en trust.anthropic.com antes de configurar. |
| Política interna de residencia de datos | Llamadas desde cualquier cliente de SDK configurado contra un proveedor de nube fuera de la lista aprobada del socio, sin importar si la capacidad técnica subyacente soportaría la carga de trabajo. Las restricciones a nivel de compras descartan la ruta de código antes de que las preferencias de ingeniería entren en la conversación. | La ruta de entrega sobre el proveedor de nube aprobado por el socio. En términos de código, es cualquier configuración de cliente de SDK y de endpoint que su CIO ya haya autorizado. Construye contra esa en lugar de cambiar a mitad de proyecto porque otra ruta parezca más fácil. |

Esta tabla cubre las restricciones que determinan directamente la selección de endpoint y la configuración de credenciales. SOC 2 no está en el alcance aquí. Rige cómo se construyen y operan tus sistemas, no a qué endpoint llama tu código, y se cubre en el Módulo 4 junto con otros requisitos de postura de seguridad y auditoría.

**Anticipo**

El Módulo 4 (Ingeniería de Producción, Evaluaciones y Seguridad) profundiza en patrones seguros por diseño para IAM y privacidad, defensas contra la inyección de prompts desde entradas no confiables, barreras de protección en tiempo de ejecución, y endurecimiento de agentes. El rol de esta sección es más estrecho: sacar a la superficie la restricción en el punto de la construcción donde realmente descarta opciones, que es cuando eliges el endpoint, la configuración del cliente del SDK, y las credenciales que tu agente lleva a producción.

---

`[TAG FAILURE]` Ten cuidado - Construcción de Agentes · 5 min

## El agente que editó un archivo de producción

**Configuración**

*El agente funciona de extremo a extremo en pruebas porque tu entorno de pruebas es indulgente, pero producción no lo es. El agente tiene las mismas herramientas, el mismo bucle y el mismo prompt de sistema, pero el punto de control de HITL falta porque las pruebas nunca sacaron a la superficie un caso de uso donde fuera necesario.*

### Un agente que edita archivos, probado en un directorio temporal, desplegado en un entorno de cliente

Un desarrollador construyó un agente que podía leer, modificar y escribir archivos de configuración. El prompt de sistema le daba acceso a tres herramientas: read_file, write_file y validate_config. El bucle del agente era directo. Después de cada escritura, volvía a ejecutar validate_config, y si la configuración seguía fallando la validación, el agente ajustaba su edición y escribía de nuevo, hasta un tope de diez iteraciones antes de detenerse. El agente fue probado contra un directorio temporal con una copia de la configuración objetivo. Funcionó correctamente en cada caso de prueba, típicamente convergiendo a una configuración válida en dos o tres iteraciones.

Al desplegarse en un entorno de cliente, el agente identificó correctamente que un parámetro de configuración estaba fuera de rango. Propuso una corrección, llamó a write_file, volvió a ejecutar validate_config, y obtuvo un aprobado. El bucle terminó limpiamente después de una sola iteración, exactamente como fue diseñado. El tope de diez iteraciones nunca se alcanzó porque nunca fue necesario. El diseño del bucle era correcto, pero la condición de salida era el problema.

El parámetro que el agente corrigió era un límite de tasa del que dependía la aplicación del cliente. validate_config verificaba que el valor estuviera dentro del rango permitido por el esquema, cosa que ahora ocurría. Lo que validate_config no verificaba, y nunca fue diseñado para verificar, era si los sistemas aguas abajo dependían del valor anterior. A los pocos minutos de la escritura, la aplicación del cliente empezó a fallar porque las solicitudes estaban siendo limitadas a una tasa para la que no fue construida.

El bucle del agente hizo exactamente lo que el desarrollador le pidió hacer. Editó, validó y salió cuando la validación pasó. La falla no estaba en el bucle. La falla fue que la condición de salida del bucle (validate_config devuelve aprobado) estaba acotada al archivo que el agente estaba editando, y no había ningún punto de control entre "la validación pasó en este archivo" y "la escritura quedó confirmada en el entorno del cliente". La pieza faltante era un punto de control en el diseño del bucle: antes de que la primera llamada a write_file tocara la configuración en vivo del cliente, pausar y presentar el cambio propuesto para revisión humana. En la práctica esto significa que el bucle necesita una bifurcación explícita entre 'cambio propuesto listo' y 'escritura confirmada', un estado que el desarrollador nunca agregó porque las pruebas nunca produjeron un caso que lo requiriera.

**Qué debes tener en cuenta**

El patrón que ilustra este incidente es una pregunta de permisos que nunca se hizo durante el diseño. El agente tenía acceso de escritura porque la tarea involucraba edición de archivos, y la tarea en sí era legítima. Lo que el equipo pasó por alto fue la brecha entre un agente que propone un cambio y uno que lo confirma. En un entorno de pruebas desechable, esa brecha nunca sale a la superficie porque nada de lo que toca una "escritura equivocada" importa en pruebas, pero producción es distinta.

La pregunta de diseño que nunca se hizo: "¿Cuál es el peor resultado si write_file corre sin una verificación humana?" La respuesta a esa pregunta determina si se requiere un punto de control de humano en el bucle antes de que la herramienta pueda ejecutarse.

Si una herramienta puede tomar una acción irreversible en producción, necesita un punto de control antes de correr. Registra esa restricción durante el diseño, cuando estás acotando la superficie de herramientas, no después de que ocurre el primer incidente.

---

`[TAG CHECKPOINT]` Punto de control - Construcción de Agentes · 4 min

# Punto de control 6 · Completa el cableado del agente

La implementación parcial del agente de abajo tiene dos huecos. Escribe el contenido faltante para cada hueco: (1) la descripción para update_record, y (2) el código del punto de control de HITL.

**Implementación parcial**

```python
tools = [
    {
        "name": "read_record",
        "description": "Use this to read a customer record by customer_id.",
        "input_schema": {
            "type": "object",
            "properties": {"customer_id": {"type": "string"}},
            "required": ["customer_id"]
        }
    },
    {
        "name": "update_record",
        "description": [EN BLANCO, escribe la descripción para esta herramienta],
        "input_schema": {
            "type": "object",
            "properties": {
                "customer_id": {"type": "string"},
                "field": {"type": "string"},
                "new_value": {"type": "string"}
            },
            "required": ["customer_id", "field", "new_value"]
        }
    }
]

def run_agent_loop(user_request):
    messages = [{"role": "user", "content": user_request}]
    while True:
        response = client.messages.create(
            model=model,
            max_tokens=4096,
            tools=tools,
            messages=messages
        )
        if response.stop_reason == "end_turn":
            return response
        if response.stop_reason == "tool_use":
            messages.append({"role": "assistant", "content": response.content})
            tool_results = []
            for block in response.content:
                if block.type == "tool_use":
                    [EN BLANCO, inserta el punto de control de HITL antes de ejecutar update_record]
                    result = execute_tool(block.name, block.input)
                    tool_results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": result
                    })
            messages.append({"role": "user", "content": tool_results})
```

### Hueco 1: escribe la descripción para update_record

### Hueco 2: escribe el código del punto de control de HITL

---

`[TAG TEACHING]` Enseñanza - Memoria del Agente · 8 min

# Elegir el alcance correcto para el estado que sobrevive a las sesiones

El agente de la sección anterior corre correctamente dentro de una sola sesión. Lo que no puede hacer es recordar nada cuando esa sesión termina. El alcance de la memoria es cómo decides qué debería saber el agente al inicio de la siguiente sesión, y cuánto cuesta llevar ese conocimiento hacia adelante.

## Patrones de memoria y cuándo es correcto cada uno

Más allá del alcance de la memoria, el blueprint agrupa varios patrones de diseño de agentes bajo este objetivo, y ya has construido cada uno antes en este módulo. El bucle de uso de herramientas, donde el modelo llama una herramienta, lee el resultado y continúa, es el patrón central de los clústeres de uso de herramientas y de construcción de agentes. La descomposición de tareas de múltiples pasos divide una meta en subtareas ordenadas, y la planificación y ejecución separa decidir el plan de llevarlo a cabo, la misma división que protege la verificación de humano en el bucle después de un paso de planificación. El alcance de la memoria, que se cubre a continuación, es el patrón que decide qué estado sobrevive una vez que el bucle termina.

El alcance de la memoria establece qué sabe un agente cuando inicia una nueva sesión. Tomar la decisión equivocada tiene dos modos de falla, y tiran en direcciones opuestas:

- Demasiado estado en contexto infla cada llamada a la API, porque el modelo relee la conversación completa en cada turno y la cuenta escala con la longitud de la sesión.
- Muy poco estado en almacenamiento persistente despoja al agente de memoria entre sesiones, porque todo lo que no se escriba desaparece en el momento en que la conversación termina.

| Alcance | Qué persiste | Costo | Cuándo usarlo | Qué pierdes |
|---|---|---|---|---|
| Memoria en contexto | El estado vive en la conversación activa y sobrevive a los turnos dentro de una sola sesión. | Cero sobrecarga de recuperación; infla el costo en tokens a medida que la conversación crece | Sesiones cortas donde todo el estado que el agente necesita cabe dentro de la ventana de contexto y nada tiene que trasladarse entre reinicios. | Todo, una vez que la sesión termina. Un comando de limpieza o una nueva sesión borra el estado. |
| Almacenamiento externo | El estado se escribe en una base de datos y se lee de vuelta al inicio de la sesión o bajo demanda. | Cada llamada a la base de datos agrega latencia de recuperación, y asumes el trabajo de ingeniería de la lógica de lectura y escritura. | Estado que tiene que sobrevivir entre sesiones, moverse entre usuarios, o compartirse entre múltiples instancias del agente. | Nada del lado de la persistencia. El costo aparece como latencia en cada llamada y como complejidad de implementación continua. |
| Memoria resumida | Se genera una versión condensada de la conversación previa y se inyecta al inicio de la siguiente sesión. | Menor costo en tokens por sesión que reproducir el historial completo, pero el paso de resumen descarta detalle que estaba en el original. | Agentes conversacionales de larga duración donde el historial completo excedería el presupuesto de contexto antes de que la conversación termine. | Cualquier detalle que el resumidor no haya preservado. El agente solo ve lo que el prompt de resumen eligió conservar. |
| Sin memoria persistente (sin estado) | Nada. Cada sesión es independiente. | Ninguna sobrecarga en absoluto, ya que no hay nada que recuperar ni almacenar. | Agentes de ejecución de tareas que terminan y cierran, o pipelines donde cada sesión es completamente independiente por diseño. | Todo el contexto previo. Si un seguimiento depende de algo de una sesión anterior, el agente no tiene forma de alcanzarlo. |

## Elegir un alcance de memoria en el momento de diseñar el agente

La elección de cómo un agente recuerda interacciones previas pertenece a la fase de diseño, no a la refactorización en producción. Un agente que ayuda al mismo usuario a lo largo de múltiples días necesita llevar estado entre sesiones, lo que significa almacenar resúmenes o el historial completo fuera de la ventana de contexto del modelo para que la siguiente sesión pueda leerlos de vuelta. Un agente que recibe un solo trabajo, lo completa y lo cierra no tiene sesión previa que recordar, así que corre sin estado.

La ruta por defecto parece razonable al principio. Almacenas el historial completo de la conversación en el arreglo de messages, lo envías en cada llamada a la API, y el prototipo funciona. Sigue funcionando por un tiempo. El problema empieza más adelante, cuando el costo en tokens escala con cada turno adicional, la latencia sube a medida que la ventana de contexto se llena, y eventualmente una sesión larga alcanza el límite duro y el agente deja de responder. En ese punto, necesitas refactorizar: sacar el estado de la conversación del contexto en vivo, ponerlo en almacenamiento externo, y agregar solo lo que cada turno necesita. La refactorización en sí es mecánica, unos cientos de líneas de código y una base de datos que el equipo ya tiene. Lo que cuesta es el momento. El trabajo ocurre bajo presión de producción, usualmente con una fecha límite ya en marcha, y cada hora gastada reestructurando la memoria es una hora no gastada en lo que sea que el agente se supone que debe hacer a continuación. Tomar la decisión durante la fase de diseño es barato, mientras que hacerlo cuando llega la hora de refactorizar es más costoso.

El contenido de abajo describe tres enfoques de memoria y las condiciones donde cada uno encaja, la sobrecarga que acarrea cada uno, y la suposición que más a menudo empuja a los equipos hacia la elección equivocada.

**Maneja bien**
El alcance de la memoria coincide con la tarea en el momento del diseño. Usa almacenamiento externo cuando el agente continúa un hilo a través de sesiones. Usa sin estado cuando cada trabajo es autocontenido. Usa memoria en contexto cuando la sesión es corta y no necesita sobrevivir a un reinicio.

**Agrega costo o complejidad**
El almacenamiento externo agrega latencia de recuperación y la lógica de lectura/escritura que viene con ella. La memoria resumida depende de un prompt de resumidor bien especificado; sin uno, el estado crítico para la tarea se descarta en cada compresión. Ninguno de los dos enfoques es gratis, así que sopesa los costos y elige sabiamente.

**Usa un enfoque diferente**
Mantener todo el estado en contexto bajo la suposición de que la ventana será lo suficientemente grande. El costo en tokens crece con cada turno adicional porque el contexto completo se envía en cada llamada a la API. Sin almacenamiento en caché ni compactación, las sesiones largas acumulan costo más rápido de lo que los equipos esperan cuando solo miden los turnos iniciales. Mide el uso real de tokens de la sesión contra el límite de la ventana antes de comprometerte.

## Skills: conjuntos de instrucciones reutilizables que se cargan bajo demanda sin inflar cada sesión

La tabla de alcance de memoria de arriba cubre cómo un agente lleva estado entre sesiones. Hay un problema relacionado pero distinto: cómo llevas instrucciones repetibles entre tareas sin pagar por inyectarlas en cada sesión. El patrón para eso es una Skill, un archivo markdown reutilizable que le enseña a Claude cómo manejar un tipo específico de tarea una sola vez. Claude carga la Skill automáticamente cuando una solicitud coincide con su descripción. Las instrucciones permanecen en disco hasta que se necesitan; no son residentes en cada conversación.

Una Skill vive en un archivo `SKILL.md` dentro de un directorio identificado. El archivo tiene dos partes: un bloque de frontmatter con un nombre y una descripción, y las instrucciones debajo. La descripción es el criterio de coincidencia. Cuando envías una solicitud, Claude lee el nombre y la descripción de cada Skill disponible, los compara contra tu mensaje, y carga las instrucciones completas solo cuando hay una coincidencia. Si las instrucciones no son relevantes para la solicitud actual, nunca entran en la ventana de contexto.

Este es el contraste clave con los patrones de memoria de la tabla de arriba. La memoria en contexto siempre está presente y crece con cada turno. El comportamiento de CLAUDE.md depende de dónde estés ejecutando Claude Code. En el CLI de Claude Code, un archivo CLAUDE.md se carga en cada sesión sin importar qué tarea esté corriendo. En el Agent SDK, si los ajustes del sistema de archivos, incluyendo CLAUDE.md, se cargan está controlado por la configuración settingSources. No dependas de un valor por defecto: establécelo explícitamente a las fuentes que pretendes, y confirma el comportamiento por defecto actual contra la referencia del Agent SDK al momento de construir. Una Skill, en contraste, se carga solo cuando la tarea lo requiere, en ambos entornos. Para conjuntos de instrucciones que aplican a tareas recurrentes específicas en lugar de a cada sesión, las Skills son un patrón de menor sobrecarga que cualquiera de las alternativas.

### Skills vs. CLAUDE.md vs. instrucciones en contexto: elegir el patrón correcto

| Patrón | Cuándo se carga | Costo de contexto | Mejor para |
|---|---|---|---|
| Skill (SKILL.md) | Bajo demanda, cuando la solicitud coincide con la descripción de la skill | Bajo. Solo el nombre y la descripción se cargan al inicio; el contenido completo se carga solo al coincidir | Experiencia específica de una tarea que no debería inflar sesiones donde no se necesita. *Los ejemplos incluyen formatos de salida específicos de un dominio, listas de verificación de revisión especializadas, y flujos de trabajo que aplican a un subconjunto de tareas en lugar de a cada interacción.* |
| CLAUDE.md | Cada sesión, incondicionalmente | Sobrecarga fija por sesión sin importar la tarea | Estándares de proyecto siempre activos que aplican a todo. *Los ejemplos incluyen convenciones de programación que el equipo ha estandarizado, reglas de formato de salida que el proyecto requiere, y restricciones que se sostienen a lo largo de todas las tareas del código base.* |
| Instrucciones en contexto | Presentes en cada turno dentro de esa sesión | Crece con la longitud de la sesión; no sobrevive al fin de la sesión | Sesiones cortas donde el historial completo cabe dentro de la ventana y nada necesita persistir. *Los ejemplos incluyen trabajo exploratorio de una sola vez y tareas acotadas a una sola conversación.* |

### Disponibilidad actual: Skills en la Messages API

Las Skills están disponibles hoy en la Messages API, pero la integración está en beta y la configuración no es la misma que las rutas de Claude Code o del Agent SDK. Se requieren dos encabezados beta en la solicitud de la API: `code-execution-2025-08-25` y `skills-2025-10-02`. Las Skills invocadas de esta forma corren dentro del contenedor de ejecución de código en lugar de en el entorno de la aplicación que llama, lo que tiene implicaciones sobre qué herramientas y qué acceso al sistema de archivos puede asumir la Skill.

Los encabezados beta están versionados y cambian a medida que las funcionalidades avanzan hacia la disponibilidad general. Antes de construir contra esta configuración en producción, revisa la documentación actual de la API de Anthropic para confirmar los valores de los encabezados, si la funcionalidad ha alcanzado la disponibilidad general, y si el contenedor de ejecución de código sigue siendo la ruta de tiempo de ejecución.

***Una restricción importante:*** los subagentes no heredan automáticamente las Skills de la sesión padre. Cuando delegas una tarea a un subagente, este empieza con un contexto limpio. Ten en cuenta que, si bien las Skills y el historial de la conversación no se trasladan, los subagentes sí heredan el contexto de permisos de la sesión padre; el alcance de permisos no se reinicia en la delegación. Si el subagente necesita una Skill, debes listarla explícitamente en la configuración del subagente. Esto importa en el momento de diseñar el agente: si estás cableando un subagente para realizar una tarea que depende de instrucciones específicas, esas instrucciones necesitan estar registradas contra el subagente, no asumirse como trasladadas desde el padre.

---

`[TAG FAILURE]` Ten cuidado - Memoria del Agente · 2 min

## El agente que llenó la ventana en la sesión cuatro

**Configuración**

*El agente corre perfectamente en desarrollo porque lo estás ejecutando en una sola sesión larga y continua. La ventana de contexto nunca se llena, así que la memoria en contexto lo sostiene todo. Pero ahora, producción corre múltiples sesiones más cortas con más turnos a lo largo de más días, y la ventana se llena en la sesión cuatro.*

### Postmortem: el estado en contexto se infla hasta que la ventana se cierra

Se construyó un agente para asistir a un ingeniero de soporte con casos de escalamiento en curso. Desarrollo corría sesiones continuas de 10 a 15 turnos. El estado en contexto sostenía el historial completo correctamente. El desarrollador lo lanzó sin medir el uso de tokens por sesión.

En producción, cada sesión era más corta, pero el estado se acumulaba a través de las sesiones. Para la sesión cuatro, el historial en contexto inyectado excedía los 40,000 tokens antes de que el agente hubiera procesado una sola llamada a herramienta. Combinado con el prompt de sistema y los esquemas de herramientas registrados, más de 45,000 tokens del presupuesto de contexto se consumían antes del primer turno productivo de la sesión. A medida que las llamadas a herramientas se acumulaban durante la sesión, el presupuesto restante se agotaba antes de que el agente pudiera completar su análisis. El agente empezó a devolver resultados incompletos, un síntoma que inicialmente parecía una falla de selección de herramientas en lugar de un problema de arquitectura de memoria.

La corrección fue una refactorización de una hora hacia almacenamiento externo: sacar el historial de sesión acumulado del contexto en vivo, persistirlo en una base de datos, e inyectar solo el subconjunto relevante al inicio de la sesión. La refactorización bajo presión de producción tomó significativamente más tiempo del que habría tomado en el momento del diseño. La capa de almacenamiento, la lógica de recuperación y la gestión de sesiones necesitaban todas decisiones que debieron tomarse antes del primer despliegue.

**Qué debes tener en cuenta**

Desarrollo usó una sola sesión larga. Producción usó muchas sesiones cortas con estado acumulado. Esas son formas distintas, y la memoria en contexto las maneja de forma distinta. Mide el tamaño de estado esperado por sesión (historial más prompt de sistema más esquemas de herramientas) contra el límite de contexto antes de elegir la memoria en contexto como opción por defecto.

---

`[TAG CHECKPOINT]` Punto de control - Memoria del Agente · 3 min

# Punto de control 7 · Elige el patrón de memoria correcto

Lee los tres casos de uso de agentes de abajo. Empareja cada caso de uso de la izquierda con el alcance de memoria correcto de la derecha. Hay un alcance correcto por caso de uso.

**Caso 1.** Un agente de soporte al cliente asiste al mismo usuario a lo largo de revisiones diarias durante dos semanas. Cada sesión empieza donde la anterior se quedó.

- Memoria en contexto: todo el estado vive en la conversación activa.
- Almacenamiento externo: escribir el estado en una base de datos al final de la sesión, y luego leerlo de vuelta al inicio de la sesión.
- Sin memoria persistente (sin estado): cada sesión empieza desde cero.

**Caso 2.** Un formateador de documentos recibe un archivo, aplica una transformación, devuelve la salida, y termina. Cada trabajo es completamente independiente.

- Memoria en contexto: todo el estado vive en la conversación activa.
- Almacenamiento externo: escribir el estado en una base de datos al final de la sesión, y luego leerlo de vuelta al inicio de la sesión.
- Sin memoria persistente (sin estado): cada sesión empieza desde cero.

**Caso 3.** Un asistente de programación trabaja con un desarrollador a lo largo de una sesión de varias horas. La sesión no continuará después de que termine.

- Memoria en contexto: todo el estado vive en la conversación activa.
- Almacenamiento externo: escribir el estado en una base de datos al final de la sesión, y luego leerlo de vuelta al inicio de la sesión.
- Sin memoria persistente (sin estado): cada sesión empieza desde cero.

---

`[TAG CUMULATIVE]` Acumulativa - Tarea de Depuración · 8 min

# Tarea de depuración acumulativa · Identifica cada bug

La implementación de agente de abajo tiene cuatro bugs plantados, uno en cada una de cuatro capas: la capa de esquema, la capa de streaming donde la respuesta se ensambla y se confirma, la capa de contexto donde se construye la estructura de mensajes, y la capa de memoria.

Trabaja a través de las dos etapas de abajo. Esta pantalla cubre la Etapa 1: identificar cada bug. La Etapa 2, escribir la versión corregida, está en la siguiente pantalla.

**Implementación con bugs**

```python
# --- DEFINICIONES DE HERRAMIENTAS ---
tools = [
    {
        "name": "get_customer_data",
        "description": "Gets data.",
        "input_schema": {
            "type": "object",
            "properties": {"id": {"type": "string"}},
            "required": ["id"]
        }
    }
]

# --- BUCLE DEL AGENTE ---
def run_agent(user_request, session_history):
    messages = session_history + [{"role": "user", "content": user_request}]
    while True:
        blocks = {}
        stop_seen = False
        with client.messages.stream(
            model=model,
            max_tokens=4096,
            tools=tools,
            messages=messages,
            thinking={"type": "adaptive"}
        ) as stream:
            for event in stream:
                if event.type == "content_block_start":
                    blocks[event.index] = init_block(event)
                elif event.type == "content_block_delta":
                    apply_delta(blocks[event.index], event.delta)
                elif event.type == "message_stop":
                    stop_seen = True
        assistant_content = [b for b in assemble(blocks) if b["type"] != "thinking"]
        messages.append({"role": "assistant", "content": assistant_content})
        response = finalize(blocks)
        if response.stop_reason == "end_turn":
            return response
        for block in response.content:
            if block.type == "tool_use":
                result = execute_tool(block.name, block.input)
                messages.append({
                    "role": "user",
                    "content": [{
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": result
                    }]
                })

# --- MEMORIA ---
def build_session_history(prior_sessions):
    # Concatenando todas las transcripciones de sesiones previas en el contexto
    full_history = []
    for session in prior_sessions:
        full_history.extend(session["messages"])
    return full_history
```

## Etapa 1: identifica cada bug

La implementación de arriba tiene cuatro bugs, uno en cada una de cuatro capas. Para cada bug: nombra la capa a la que pertenece y escribe una oración describiendo qué causa en tiempo de ejecución.

---

`[TAG CUMULATIVE]` Acumulativa - Tarea de Depuración · 10 min

# Tarea de depuración acumulativa · Escribe la versión corregida

Etapa 2: escribe la versión corregida de cada bug identificado en la pantalla anterior. Para cada uno, muestra el código corregido y nombra qué cambia.

**Implementación con bugs (como referencia)**

```python
# --- DEFINICIONES DE HERRAMIENTAS ---
tools = [
    {
        "name": "get_customer_data",
        "description": "Gets data.",
        "input_schema": {
            "type": "object",
            "properties": {"id": {"type": "string"}},
            "required": ["id"]
        }
    }
]

# --- BUCLE DEL AGENTE ---
def run_agent(user_request, session_history):
    messages = session_history + [{"role": "user", "content": user_request}]
    while True:
        blocks = {}
        stop_seen = False
        with client.messages.stream(
            model=model,
            max_tokens=4096,
            tools=tools,
            messages=messages,
            thinking={"type": "adaptive"}
        ) as stream:
            for event in stream:
                if event.type == "content_block_start":
                    blocks[event.index] = init_block(event)
                elif event.type == "content_block_delta":
                    apply_delta(blocks[event.index], event.delta)
                elif event.type == "message_stop":
                    stop_seen = True
        assistant_content = [b for b in assemble(blocks) if b["type"] != "thinking"]
        messages.append({"role": "assistant", "content": assistant_content})
        response = finalize(blocks)
        if response.stop_reason == "end_turn":
            return response
        for block in response.content:
            if block.type == "tool_use":
                result = execute_tool(block.name, block.input)
                messages.append({
                    "role": "user",
                    "content": [{
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": result
                    }]
                })

# --- MEMORIA ---
def build_session_history(prior_sessions):
    # Concatenando todas las transcripciones de sesiones previas en el contexto
    full_history = []
    for session in prior_sessions:
        full_history.extend(session["messages"])
    return full_history
```

---

`[TAG TEACHING]` Enseñanza - Multimodal e Ingesta por Lotes · 13 min

# Imágenes, PDFs y procesamiento de alto volumen

Hasta ahora has estado gestionando qué recuerda Claude entre turnos. La ingesta multimodal desplaza la pregunta hacia qué estás enviando: cada imagen y cada PDF consume presupuesto de contexto antes de que Claude lea un solo carácter de tu prompt, lo que cambia cómo estructuras las solicitudes y qué puedes caber en una sola. La segunda mitad de este tema aborda el extremo opuesto del mismo problema. Cuando tienes miles de entradas que procesar, enviar una solicitud a la vez y esperar cada respuesta deja de tener sentido, y la Batch API es la forma de manejar ese volumen sin bloquear tu aplicación.

## Costo en tokens de las imágenes: calcula antes de comprometerte

Las imágenes no son gratis en términos de presupuesto de contexto. Claude ve las imágenes en parches: cada bloque de 28×28 píxeles de la imagen es un token visual, así que una imagen cuesta ⌈ancho / 28⌉ × ⌈alto / 28⌉ tokens visuales. Una imagen de 1,000 × 1,000 píxeles equivale a ⌈1000/28⌉ × ⌈1000/28⌉ = 36 × 36 parches, alrededor de 1,296 tokens visuales. A ese ritmo, diez capturas de pantalla de alta resolución consumen tanto contexto como un prompt de sistema detallado. Cada modelo también tiene una resolución de imagen nativa máxima, expresada como un límite de borde largo y un límite de tokens visuales, y estos límites difieren según el nivel del modelo. Los modelos más nuevos aceptan imágenes sustancialmente más grandes que el nivel estándar. Las imágenes más grandes que cualquiera de los dos límites se reducen de escala antes de procesarse, así que la fórmula corre sobre las dimensiones escaladas. Confirma los límites vigentes por nivel contra la página de Visión (Resolución y costo en tokens) al momento de construir; los límites han cambiado entre generaciones de modelos y volverán a cambiar.

El cálculo importa en el momento del diseño. Si estás construyendo un pipeline que procesa imágenes, mide el costo en tokens de una imagen de producción típica contra el límite de contexto de tu modelo antes de escribir el código de ingesta. La corrección para un pipeline que se pasa del presupuesto suele ser un paso de redimensionamiento de imagen de diez minutos. Si descubres esto después del despliegue, toma todavía más tiempo.

## Distintas formas de enviar una imagen: cuándo es correcta cada una

**Cómo funciona:** Codifica los bytes de la imagen como una cadena Base64 e incluye los datos directamente en el bloque de mensaje.

**Sobrecarga:** La carga útil codificada completa viaja con cada solicitud, lo que infla el tamaño de la solicitud y cuenta contra la latencia en imágenes grandes.

**Cuándo usarla:** Es la mejor opción para imágenes de una sola vez, donde agregar un paso de subida añadiría complejidad sin ninguna ganancia. La misma imagen enviada repetidamente multiplica el costo, así que recurre a otro método si es probable que haya reutilización.

**Cómo funciona:** Pasa una URL públicamente alcanzable en el bloque source, y Claude descarga la imagen al momento de la solicitud.

**Sobrecarga:** Ninguna carga útil viaja con la solicitud, pero asumes la dependencia de que la URL debe ser estable, pública y alcanzable en el momento en que Claude intenta descargarla.

**Cuándo usarla:** Es la mejor opción cuando la imagen ya está alojada en una URL pública estable que tú controlas. Descártala para cualquier cosa detrás de autenticación, cualquier cosa firmada con una expiración corta, o cualquier cosa cuya accesibilidad no puedas garantizar cuando la solicitud se ejecute.

**Cómo funciona:** Sube el archivo una sola vez mediante una llamada a la API aparte, recibe un `file_id`, y referencia ese ID en cualquier mensaje futuro.

**Sobrecarga:** La subida es un costo único; cada solicitud posterior lleva el ID en lugar de los bytes, así que la sobrecarga de carga útil cae a casi cero desde ese punto en adelante. Actualmente está en beta y no está disponible en Bedrock ni en Vertex AI; verifica la disponibilidad para tu plataforma de despliegue.

**Cuándo usarla:** Es la mejor opción cuando la misma imagen o PDF aparece a lo largo de múltiples solicitudes, o cuando el activo es lo bastante grande como para que reenviarlo domine el tamaño de la solicitud. Además, es la elección más limpia cuando quieres que la gestión de activos viva por separado de las llamadas de inferencia, y la elección correcta para imágenes que aparecen a lo largo de múltiples turnos de conversación, ya que el file_id no carga peso de carga útil a medida que crece el historial.

## Enviar PDFs: el bloque document

Para los PDFs, el tipo de bloque es `document` en lugar de `image`. La estructura de source sigue el mismo patrón que en las imágenes, lo que significa que puede ser Base64, una URL o un `file_id` de la Files API. No hay un campo `name` obligatorio en un bloque document. El bloque acepta un campo opcional `title` para un nombre de documento legible, y un campo opcional `context` para metadatos adicionales, pero ninguno de los dos es obligatorio para enviar un PDF. Todas las demás mecánicas, incluidas las consideraciones de costo en tokens y la reutilización mediante la Files API, aplican de la misma manera.

```json
{
  "type": "document",
  "source": {
    "type": "base64",
    "media_type": "application/pdf",
    "data": "<base64-encoded-pdf-bytes>"
  },
  "title": "contract_review.pdf"
}
```

## Aplicar técnicas de prompting a entradas multimodales

Las mismas técnicas de prompting de la primera sección aplican al análisis de imágenes y PDFs. Un prompt escueto de "describe esta imagen" produce una salida superficial por la misma razón que lo hace un prompt de texto escueto: Claude no tiene una estructura objetivo a la cual apuntar.

La diferencia es que las imágenes cargan una ambigüedad que el texto no puede tener, lo que incluye objetos superpuestos, profundidad y relaciones espaciales, y oclusión parcial. Un prompt para análisis visual debería nombrar cómo debe manejar Claude cada tipo de ambigüedad. "Si los objetos se superponen, describe cada uno por separado y señala la superposición" es una restricción concreta que un prompt solo de texto nunca necesitaría.

## La Message Batches API: procesamiento asíncrono de alto volumen

Cuando necesitas ejecutar el mismo patrón de prompt contra cientos o miles de entradas, la API síncrona es el modelo equivocado. Cada llamada síncrona bloquea hasta completarse. A escala, eso significa que tu aplicación está quemando hilos o corriendo miles de conexiones concurrentes contra los límites de tasa.

La Message Batches API acepta hasta 100,000 solicitudes o 256 MB (lo que ocurra primero) en una sola llamada por lotes. Envías el lote, recibes un `batch_id` y sondeas hasta que se complete. Cuando el lote termina, descargas los resultados. El costo por token de las solicitudes por lotes es menor que el de las síncronas.

La contrapartida es la latencia: el procesamiento por lotes es no determinista y puede tomar hasta 24 horas, aunque a menudo es mucho más rápido. El patrón encaja con pipelines offline, ejecuciones de evaluación y trabajos de procesamiento de datos, no con interacciones de usuario en tiempo real.

| Caso de uso | Patrón de API correcto | Por qué |
| --- | --- | --- |
| Un usuario sube una foto y espera una clasificación inmediata | API síncrona | Se requiere una respuesta en tiempo real. La latencia por lotes es inaceptable para uso interactivo. |
| Un pipeline nocturno clasifica 5,000 registros de clientes | Message Batches API | La latencia no es una restricción. Tanto la reducción de costo por lotes como el procesamiento asíncrono son valiosos. |
| Una ejecución de evaluación prueba un nuevo prompt contra 2,000 ejemplos | Message Batches API | Tarea offline sin requisito de tiempo real. El lote es el patrón correcto. |
| Un chatbot genera una respuesta al mensaje de un usuario | API síncrona | El usuario está esperando; el lote introduciría un retraso inaceptable. |

## Cuándo encajan multimodal y lotes juntos, y cuándo no

La combinación funciona para cargas de trabajo offline que reutilizan los mismos activos y necesitan salida estructurada a lo largo de miles de entradas. Un pipeline nocturno que clasifica imágenes contra una taxonomía fija es el caso de manual: la Files API elimina subidas redundantes, la Batches API absorbe la latencia, y las técnicas de salida estructurada mantienen los resultados legibles por máquina.

Dos modos de fallo rompen el encaje.

- El primero es leer mal la latencia: recurrir a los lotes en cualquier flujo de cara al usuario que incluya una imagen produce un sistema que pasa las pruebas y falla en producción, porque el usuario está esperando y el lote no.
- El segundo es subestimar el costo de contexto: las imágenes y los PDFs consumen presupuesto antes de que Claude procese cualquier texto, así que los pipelines que cargan múltiples imágenes grandes por solicitud rebasan los límites de tokens a escala. Mide el costo en tokens sobre entradas a escala de producción antes de construir.

---

`[TAG FAILURE]` Ten cuidado - Multimodal e Ingesta por Lotes · 4 min

## El trabajo por lotes que en realidad no era un lote

**Configuración**

*Dividir un trabajo en fragmentos y procesarlos uno tras otro no es procesamiento por lotes; es serialización con pasos extra. La Message Batches API existe para cargas de trabajo de alto volumen precisamente porque recorrer entradas en un bucle contra la API síncrona choca con los límites de tasa en el momento en que el volumen se vuelve real, sin importar cómo cortes la lista de entradas.*

### Una conversación en un canal interno sobre un trabajo nocturno que seguía chocando con los límites de tasa

Un desarrollador ha estado reejecutando el mismo trabajo nocturno de clasificación durante tres noches y sigue chocando con errores de límite de tasa aproximadamente en el mismo punto cada vez. El desarrollador senior hace una sola pregunta que saca a la luz el problema real.

**Desarrollador:** "Mi trabajo nocturno sigue chocando con los límites de tasa. Ya lo dividí en fragmentos más pequeños. ¿Qué más puedo hacer?"

**Desarrollador senior:** "¿Cómo los estás enviando?"

**Desarrollador:** "Estoy recorriendo la lista en un bucle y llamando a la API por cada elemento."

**Desarrollador senior:** "Eso no es procesamiento por lotes. Eso son llamadas seriales contra el endpoint síncrono. Dividir la lista en fragmentos no cambia lo que la API ve: sigue viendo una solicitud por elemento, una tras otra."

**Desarrollador:** "¿Entonces el límite de tasa se dispara porque estoy haciendo miles de llamadas síncronas?"

**Desarrollador senior:** "Correcto. La Message Batch API acepta hasta 100,000 solicitudes o 256 MB por lote en una sola llamada por lotes, devuelve un batch_id y las procesa de forma asíncrona. Tú sondeas hasta que se complete, lo que significa que tu código revisa repetidamente el estado del lote según una programación hasta que la API te dice que terminó. El costo por token es menor que el síncrono, y el límite de tasa no se dispara porque no estás haciendo miles de solicitudes individuales."

**Desarrollador:** "¿Y la contrapartida?"

**Desarrollador senior:** "La latencia es no determinista. El procesamiento por lotes puede tomar horas. Si esto fuera una interacción de usuario en tiempo real, sería la herramienta equivocada. Sin embargo, esto es perfecto para una ejecución de clasificación nocturna."

**Qué debes tener en cuenta**

Fragmentar una lista y recorrer la API síncrona en un bucle no es procesamiento por lotes, aunque se sienta como si debiera serlo. Produce la misma cantidad de llamadas a la API que la versión sin fragmentar y choca con los mismos límites de tasa. La Message Batches API es un modelo de envío distinto, no un tamaño de lote más pequeño. Úsala siempre que la carga de trabajo sea de alto volumen y offline, y recurre a la API síncrona solo cuando haya un usuario esperando del otro lado. Los resultados regresan en orden arbitrario, no en el orden en que se enviaron las solicitudes. Usa el campo custom_id en cada solicitud para emparejar los resultados de vuelta con las entradas.

---

`[TAG CHECKPOINT]` Punto de control - Multimodal e Ingesta por Lotes · 3 min

# Punto de control 8 · Selecciona la codificación de entrada correcta para cada escenario

Lee los tres escenarios de entrada a continuación. Para cada escenario de entrada, selecciona el método de codificación correcto. La retroalimentación de cada elemento nombra el costo de la elección equivocada.

Un diagrama de producto de referencia usado en cada solicitud que hace tu pipeline
- Message Batches API: envía todas las solicitudes en una sola llamada por lotes, sondea hasta que se complete
- Files API: sube una vez, referencia el file_id en cada solicitud
- Base64 en línea: codifica e incluye directamente en el bloque de mensaje

Una captura de pantalla de una sola vez de un bug de interfaz, enviada por un ingeniero de soporte en una única solicitud
- Message Batches API: envía todas las solicitudes en una sola llamada por lotes, sondea hasta que se complete
- Files API: sube una vez, referencia el file_id en cada solicitud
- Base64 en línea: codifica e incluye directamente en el bloque de mensaje

Un trabajo que clasifica 5,000 respuestas de retroalimentación de clientes
- Message Batches API: envía todas las solicitudes en una sola llamada por lotes, sondea hasta que se complete
- Files API: sube una vez, referencia el file_id en cada solicitud
- Base64 en línea: codifica e incluye directamente en el bloque de mensaje

---

`[TAG MODULE]` Recapitulación - Ocho conclusiones · 3 min

# Ocho conclusiones, una por cada objetivo habilitador

**1**

#### Cuando un prompt falla, el tipo de fallo te dice qué técnica falta.

Una salida con la forma equivocada apunta a una restricción de salida faltante, la deriva a lo largo de los turnos apunta a un prompt de sistema poco especificado, y una estructura alucinada apunta a la ausencia de ejemplos few-shot. El instinto de reformular la instrucción e intentar de nuevo rara vez funciona, porque ninguno de esos fallos es un problema de redacción. Diagnostica primero el tipo de fallo, y luego agrega la técnica que lo atiende. Cuando las instrucciones a nivel de prompt no bastan porque entradas no probadas siguen rompiendo el parser, mueve el control de salida hacia la API con salidas estructuradas: las salidas JSON restringen la respuesta final contra un esquema, y el uso estricto de herramientas valida los argumentos que Claude pasa a tus herramientas, al costo de la latencia de compilación en la primera llamada y de tokens de entrada adicionales.

**2**

#### Ajusta la profundidad del razonamiento a la tarea antes de afinar el prompt.

Habilita el razonamiento solo donde una pasada de razonamiento cambie la respuesta, y calibra el ajuste de esfuerzo al problema en lugar de subirlo en cada llamada. Recuerda que los bloques de pensamiento regresan a la API sin modificaciones o la siguiente solicitud falla. Elegir qué modelo ejecutar, como algo distinto de si habilitar el razonamiento, se enseña en el módulo MSO Foundations que precede a este.

**3**

#### Que un flujo termine no es lo mismo que un mensaje se complete.

El streaming compra latencia percibida al costo de ensamblar tú mismo la respuesta a partir de eventos parciales. Actúa sobre un bloque solo después de que cierre, confirma un turno al historial solo después de message_stop, y ante un flujo interrumpido descarta el turno parcial y reintenta. El modo de fallo a reconocer es un error de uso de herramientas en un reintento que se rastrea hasta un bloque construido a medias por un flujo caído, no hasta el esquema.

**4**

#### Toda selección equivocada de herramienta se rastrea hasta el esquema, y la mayoría de las veces hasta la descripción.

Claude elige una herramienta leyendo el campo description y emparejándolo con la solicitud del usuario, lo que significa que dos herramientas que ambas dicen "usa esta para encontrar información" son indistinguibles desde el lado de Claude, incluso cuando los esquemas de entrada no se parecen en nada. La única oración que resuelve la mayoría de los bugs de herramienta equivocada es la condición de exclusión: una línea en cada descripción que nombre cuándo no llamar a la herramienta, escrita en el esquema en el momento del diseño y no después de que la primera llamada equivocada aparezca en un registro. Cuando alguien más ya escribió las herramientas, MCP te permite conectar un servidor mantenido en lugar de redactar cada esquema a mano, pero cada servidor conectado agrega sus definiciones de herramientas a la ventana de contexto se usen o no las herramientas, así que conecta deliberadamente y controla el costo de carga.

**5**

#### El contexto es un presupuesto fijo, y las salidas de herramientas lo gastan más rápido que cualquier otra cosa en el bucle.

Las salidas de herramientas en producción resultan de tres a cinco veces más largas que los fixtures usados en desarrollo, así que una sesión que se sostiene limpiamente a lo largo de cincuenta turnos en pruebas puede tocar el techo en el turno ocho una vez que se lanza. La poda, la compactación y los traspasos a subagentes recuperan margen de maneras distintas, y cuál aplicar depende de si todavía necesitas el estado anterior. Cuando la selección de herramientas empieza a degradarse después de un número fijo de turnos, la ventana es el primer lugar donde mirar, no el esquema.

**6**

#### La decisión entre flujo de trabajo y agente fija el costo de todo lo que sigue, y los puntos de control humanos pertenecen al diseño.

Un flujo de trabajo es la decisión correcta cuando puedes escribir los pasos exactos en código, y un agente es la decisión correcta cuando puedes especificar el objetivo y las herramientas pero no el camino entre ambos. Elegir mal en cualquiera de las dos direcciones solo sale a la luz en producción: los agentes donde bastarían flujos de trabajo agregan costo de contexto y comportamiento que vive en transcripciones, y los flujos de trabajo donde se necesitan agentes se rompen la primera vez que una entrada cae fuera del camino. Si una herramienta puede tomar una acción irreversible, el punto de control con humano en el bucle va antes de que el bucle se cablee, no después de que la primera escritura llegue al entorno de un cliente.

**7**

#### El alcance de la memoria lo decide la forma de la sesión, no lo que sea más fácil de implementar.

La memoria en contexto es el patrón más simple de escribir, y por eso también es el que falla más temprano cuando las sesiones de producción resultan ser más cortas y más numerosas que las sesiones largas y continuas usadas en desarrollo. El almacenamiento externo agrega latencia pero el estado sobrevive entre sesiones, la memoria resumida recorta costo pero pierde todo lo que el prompt del resumidor no preservó, y el modo sin estado es correcto para trabajos que se completan y se cierran. La refactorización de memoria en contexto a almacenamiento externo bajo presión de producción toma alrededor de una hora, y tomar esa misma decisión deliberadamente en el momento del diseño toma alrededor de veinte minutos. Llevar instrucciones repetibles de una tarea a otra es un problema distinto de llevar estado, y el patrón para eso es una Skill: un archivo markdown que Claude carga bajo demanda al emparejar su descripción, en lugar de instrucciones inyectadas en cada sesión.

**8**

#### Calcula el costo de una entrada multimodal antes de escribir el código de ingesta y ajusta la API a la carga de trabajo.

Una imagen cuesta ⌈ancho / 28⌉ × ⌈alto / 28⌉ tokens visuales, y el techo por imagen difiere según el nivel del modelo. Un original de alta resolución en los modelos más nuevos puede costar muchas veces lo que cuesta una miniatura en tu conjunto de pruebas, así que la fórmula debe correrse contra la entrada más grande que esperas en producción y no contra las entradas que tienes a la mano. El Base64 en línea encaja con imágenes de una sola vez, la Files API encaja con activos reutilizados entre solicitudes, y la Message Batches API maneja trabajo offline a un costo por token menor a cambio de una latencia no determinista. El error que vale la pena evitar es llamar a la API síncrona dentro de un bucle y tratar eso como procesamiento por lotes.

**Nota:**
**Lo que viene a continuación**

Este módulo estableció la biblioteca de primitivas del Desarrollador, incluidos cinco tipos de interacción de los que se nutren todos los módulos posteriores del Desarrollador. Los patrones introducidos aquí, que incluyen el oficio del prompting, los esquemas de herramientas, la ingeniería de contexto, la construcción de agentes, el alcance de la memoria y la ingesta multimodal, forman la base de cada módulo que sigue.

## Fuentes

- Claude 101 (Skilljar): Fundamentos de prompting, bases del uso de herramientas, panorama de agentes y flujos de trabajo, conceptos de ventana de contexto.
- Claude Code 101 In Action (Skilljar): Gestión de contexto (/compact, /clear), bucle del agente de Claude Code, patrones de agentes en producción.
- AI Fluency Framework Foundations (Skilljar): Técnicas de prompting, ejemplos few-shot, especificación de restricciones.
- Building with the Claude API (Skilljar): Esquemas de herramientas, estructura de bloques de mensaje, streaming, salidas estructuradas, Files API, batch API, construcción de agentes.
- platform.claude.com: Referencia canónica para uso de herramientas, agentes, contexto, MCP y mecánica de la API. Consúltala al publicar y vuelve a verificarla.
- Anthropic Blog: "Building Effective Agents": Subpatrones de flujo de trabajo (encadenamiento, enrutamiento, paralelización, evaluador-optimizador), guía de diseño de agentes.

## Ahora puedes llevar un prototipo de Claude a producción.

Los prompts listos para producción, los bucles de uso de herramientas, el streaming, la gestión de contexto y memoria, y los bucles de agente con puntos de control ahora se sostienen bajo uso real.

---

`[TAG MODULE]` Glosario - Términos clave · 3 min

# Términos clave de este módulo

Alfabético. Haz clic en un término para expandir su definición.

**Claude Agent SDK (SDK de Agentes de Claude)**
Un entorno de ejecución de agentes gestionado que se distribuye como @anthropic-ai/claude-agent-sdk (Typescript) / claude-agent-sdk (Python). Le da a un socio acceso programático al mismo bucle de agente que impulsa a Claude Code: iteración, ejecución de herramientas, observación y terminación, de modo que el socio pueda incrustar un agente dentro de su propio producto en lugar de correr Claude Code en una terminal. Es distinto del Anthropic SDK, que es un envoltorio delgado de conveniencia sobre la API y no ejecuta un bucle de agente.

**Context Window (Ventana de contexto)**
El número total de tokens que un modelo puede procesar en una sola solicitud, incluidos el prompt de sistema, el historial de conversación, las definiciones de herramientas, los resultados de herramientas y la propia salida del modelo. Cuando el total acumulado alcanza el límite, el contenido anterior debe eliminarse o resumirse antes de que se pueda agregar contenido nuevo.

**Function signature (Firma de función)**
Firma de función es un término de programación que significa la declaración de una función: su nombre más la lista de parámetros que acepta, incluidos sus nombres, tipos y cualquier valor por defecto.

**HITL (Humano en el bucle)**
Humano en el bucle se refiere a insertar un paso de revisión o aprobación humana dentro de un proceso automatizado antes de que se tome una acción consecuente.

**Refactor (Refactorización)**
Refactorizar se refiere a cambiar la estructura interna del código sin cambiar lo que hace desde afuera. Reorganizas, renombras o reescribes la implementación para hacerla más limpia, más rápida, más fácil de probar o más fácil de extender, pero el comportamiento que ve el resto del sistema permanece igual.

**SOC 2 (SOC 2)**
Service Organization Control 2 es un marco de auditoría desarrollado por el American Institute of Certified Public Accountants (AICPA) para evaluar cómo una organización de servicios maneja los datos de sus clientes. Es el estándar que se cita con mayor frecuencia cuando se le pide a un proveedor SaaS o a un proveedor de servicios en la nube que demuestre que sus prácticas de seguridad cumplen con un estándar reconocido.

**State (Estado)**
El estado es la información que un agente lleva consigo entre turnos: la conversación hasta el momento, lo que el usuario pidió y los resultados de llamadas a herramientas anteriores.

**Stop_reason (Razón de detención)**
Un campo en la respuesta de la API que le dice a tu código por qué el modelo dejó de generar. Los dos valores más relevantes para los bucles agénticos son end_turn, que significa que Claude ha terminado y no está solicitando ninguna acción adicional, y tool_use, que significa que Claude ha emitido uno o más bloques tool_use y está esperando resultados antes de continuar.

**Subagent (Subagente)**
Una instancia de agente separada que un agente orquestador levanta para manejar una subtarea discreta. Los subagentes no heredan el historial de conversación, las skills ni el contexto de la sesión padre; cada uno arranca limpio y debe configurarse explícitamente con las instrucciones y herramientas que necesita. Los resultados se devuelven al orquestador, que los incorpora a la tarea más amplia.

**Token (Token)**
La unidad que Claude usa para medir y procesar texto. El promedio de caracteres por token depende del tokenizador del modelo en cuestión y difiere entre generaciones de modelos. Trata cualquier regla empírica de caracteres por token como dependiente del modelo y confirma el comportamiento vigente del tokenizador al momento de construir. Los tokens los consume todo lo que hay en la ventana de contexto: prompts, respuestas, esquemas de herramientas y resultados de herramientas. Son la base tanto de los precios como de los cálculos de presupuesto de contexto.

**Tool_use_block (Bloque de uso de herramienta)**
Un bloque de contenido devuelto por el asistente cuando Claude quiere llamar a una función. Contiene el nombre de la herramienta, un ID único y los argumentos de entrada que Claude quiere que se pasen a tu código. Todo bloque tool_use debe ser respondido por un bloque tool_result correspondiente en el turno de usuario inmediatamente siguiente, con el mismo ID preservado exactamente.

---

`[TAG MODULE]` Módulo Completado - Ruta del Desarrollador · 2 min

# ¡Felicidades! Has completado exitosamente este módulo.

Ahora puedes escribir prompts listos para producción, cablear un bucle de uso de herramientas que sobreviva a condiciones reales, manejar el streaming de forma segura, gestionar contexto y memoria a escala, y construir un bucle de agente con los puntos de control correctos en los lugares correctos. **Las decisiones de ingeniería de este módulo son las que separan un prototipo de un sistema que se sostiene en producción.**

0 de 10 puntos de control aprobados

**M1**
MSO Foundations
Tokens, ventanas de contexto, muestreo, niveles de modelo, modos de prompting y la mecánica de transporte de la API.

**M2**
Production-Grade Prompting, Agents & Tool-use
Prompts listos para producción, bucles de uso de herramientas, streaming, gestión de contexto y memoria, y bucles de agente con puntos de control.

**Estás aquí**

**M3**
Claude Code, MCP & Integration
Modos de permiso, contexto de proyecto duradero, empaquetado de plugins e integración MCP sin filtrar credenciales.

**A continuación**

**M4**
Production Engineering, Evals, and Security
Evaluaciones, rastreo, manejo de fallos, presupuestos de costo y orquestación, y límites de seguridad que se sostienen en producción.

**M5**
Accelerators and IP Contribution
Empaqueta aceleradores, prepara contribuciones verificables, elige plataformas de despliegue y marca límites de confianza.

Comenzar el Módulo 3 → Volver al inicio del curso

## Módulo 2 completado.

Pantalla 29 de 29

---

*Fuente: Production-Grade Prompting, Agents & Tool Use_files/Developer_M2_vF2.html*
