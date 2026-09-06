/* Conjuntos para emparejar
   Extraído de tarjetas-interactivas.html · Certificación Anthropic */

"use strict";

const matchSets = [
    {m:'M1', titulo:'M1 · Patrones de acceso a la API', pares:[
        ['Síncrono','Respuesta corta de backend donde nadie está esperando en pantalla.'],
        ['Streaming','El usuario ve la salida aparecer mientras se genera, sobre eventos enviados por el servidor.'],
        ['Cliente async del SDK','Concurrencia sin bloquear el hilo; la respuesta sigue llegando en tiempo real.'],
        ['Message Batches API','Trabajo masivo offline: un identificador, sondeo, hasta 24 h y costo por token menor.']
    ]},
    {m:'M1', titulo:'M1 · Niveles de la familia Claude', pares:[
        ['Haiku','Velocidad y eficiencia de costo en tareas que caben en su envolvente.'],
        ['Sonnet','El predeterminado equilibrado para la mayoría de las cargas de producción.'],
        ['Opus','Trabajo exigente por encima del envolvente del predeterminado.'],
        ['Fable','El nivel más capaz: razonamiento, codificación y trabajo agéntico más exigentes.']
    ]},
    {m:'M2', titulo:'M2 · Diagnóstico de prompts fallidos', pares:[
        ['Devuelve una oración donde esperabas una etiqueta','Falta una restricción de salida: especifica el formato exacto.'],
        ['El contenido se desvía y el alcance se corre','El prompt de sistema es vago: haz el contrato más específico.'],
        ['Tarea correcta pero estructura inventada','Faltan ejemplos few-shot: agrega uno o dos pares entrada-salida.'],
        ['Funciona bien hasta un caso límite','La restricción no cubre esa variante: nómbrala explícitamente.']
    ]},
    {m:'M2', titulo:'M2 · Estrategias de contexto', pares:[
        ['Poda','Retrocede a un mensaje anterior y descarta la conversación posterior.'],
        ['Compactación','Resume el historial preservando la información clave acumulada.'],
        ['Limpieza','Arranca una conversación nueva con contexto vacío.'],
        ['Traspaso a subagente','Delega en un contexto aislado que devuelve solo un resumen.']
    ]},
    {m:'M2', titulo:'M2 · Bloques de mensaje en el bucle de herramientas', pares:[
        ['text','Prosa de Claude; se preserva en el arreglo aunque haya uso de herramientas.'],
        ['tool_use','Nombre, ID y argumentos que Claude quiere pasar a tu código.'],
        ['tool_result','Tu respuesta con el ID idéntico, en el turno de usuario inmediatamente siguiente.'],
        ['thinking','Razonamiento que debe devolverse sin modificar o la firma se rompe.']
    ]},
    {m:'M3', titulo:'M3 · Mecanismos de contexto duradero', pares:[
        ['CLAUDE.md','Memoria de proyecto antepuesta al contexto en cada sesión; se diluye con el tamaño.'],
        ['Archivo de reglas','Orientación acotada a la ruta o condición que supervisa.'],
        ['Gancho','Comando que se ejecuta determinísticamente en un evento del ciclo de vida.'],
        ['Subagente','Contexto de ejecución aislado que devuelve solo un resumen de la tarea.']
    ]},
    {m:'M3', titulo:'M3 · Niveles de configuración', pares:[
        ['~/.claude/settings.json','Preferencias del usuario que aplican a cada proyecto de la máquina.'],
        ['.claude/settings.json','Convenciones de equipo confirmadas al repositorio.'],
        ['.claude/settings.local.json','Anulaciones personales de un proyecto, ignoradas por git.'],
        ['managed-settings.json','Controles de organización que ningún usuario ni proyecto puede anular.']
    ]},
    {m:'M4', titulo:'M4 · Método de calificación por tipo de salida', pares:[
        ['Etiqueta o valor único correcto','Coincidencia exacta de cadena, costo casi nulo.'],
        ['Salida estructurada o código','Verificación calificada por código: JSON válido, campos y rangos.'],
        ['Calidad abierta de redacción','LLM como juez con rúbrica, calibrado contra etiquetas humanas.'],
        ['Decisión booleana','Comprobación de propiedades: ¿está presente?, ¿parsea?, ¿no está vacío?']
    ]},
    {m:'M4', titulo:'M4 · Niveles de prueba', pares:[
        ['Unitaria','Aísla una función, como un parser o un envoltorio de herramienta.'],
        ['Funcional','Verifica que una llamada a Claude devuelva la forma esperada.'],
        ['Integración','Ejercita el traspaso entre dos componentes: donde viven los fallos silenciosos.'],
        ['Extremo a extremo','Ejecuta el flujo completo como un usuario; la más lenta y difícil de localizar.']
    ]},
    {m:'M4', titulo:'M4 · Manejo de errores de herramienta', pares:[
        ['timeout','Reintentable; el SDK ya suele reintentarlo por ti.'],
        ['rate_limit','Reintentable con retroceso exponencial y respeto a retry-after.'],
        ['not_found','Terminal: no hay nada que reintentar, informa la decisión al modelo.'],
        ['auth_error','Terminal: la credencial está rota, falla rápido y arréglala.']
    ]},
    {m:'M5', titulo:'M5 · Canales de contribución', pares:[
        ['Cookbook','Hogar de ejemplos enfocados y correcciones puntuales.'],
        ['Marketplace de skills','Skill reutilizable con metadatos y pruebas.'],
        ['MCP Registry','Servidor MCP nuevo que cumple el estándar y está documentado.'],
        ['PR al repositorio de Anthropic','Mejora oficial verificable, como una corrección en el SDK.']
    ]},
    {m:'M5', titulo:'M5 · Fases del ciclo de vida', pares:[
        ['Desarrollo','Iteración rápida y prototipado; el alias de modelo es aceptable.'],
        ['Evaluación','Puerta de calidad formal antes de promover el cambio.'],
        ['Staging','Producción-like y aislado; donde se prueba la versión nueva.'],
        ['Producción','Usuarios reales con ID de modelo fijado y versión previa retenida.']
    ]}
];
