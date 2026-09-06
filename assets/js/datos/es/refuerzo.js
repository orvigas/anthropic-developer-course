/* Sugerencias de refuerzo por módulo y pilar
   Certificación Anthropic · Desarrollador

   Cada fallo registrado se atribuye a un pilar buscando sus `claves` en el
   texto de la pregunta. Si ninguna coincide, el consejo queda a nivel de
   módulo. `fuente` apunta al material del curso; `practica`, a la página
   donde se ejercita ese punto concreto. */

"use strict";

const REFUERZO = {
    M1: {
        sigla: 'T.C.M.S',
        titulo: 'Fundamentos MSO',
        fuente: 'markdown/module-01-01-mso-foundations-es.md',
        pilares: [
            {
                nombre: 'T · Tokens',
                claves: ['token', 'tokenizador', 'count_tokens', 'presupuesto', 'contar'],
                repasa: 'Todo se paga en tokens: prompt, historial, esquemas de herramientas, resultados y respuesta. El tokenizador depende del modelo, así que un conteo no se traslada entre familias.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «Medir la solicitud antes de pagarla»' }
            },
            {
                nombre: 'C · Contexto',
                claves: ['contexto', 'ventana', 'model_context_window_exceeded', 'trunca', 'cabe', 'validación'],
                repasa: 'Son dos fallos distintos. Entrada mayor que la ventana: error de validación antes de generar. Techo alcanzado durante la generación: salida parcial con su razón de detención. Ninguno recorta en silencio.',
                practica: { pagina: 'tarjetas-interactivas.html', que: 'las tarjetas de M1 sobre ventana de contexto' }
            },
            {
                nombre: 'M · Muestreo',
                claves: ['muestre', 'temperature', 'top_p', 'top_k', 'determinis', 'probabilidad', 'idéntic'],
                repasa: 'Cada token se muestrea de una distribución: por eso dos llamadas idénticas no dan texto idéntico. Los modelos actuales rechazan los parámetros de muestreo con error 400; el comportamiento se controla con el prompt.',
                practica: { pagina: 'verdadero-falso.html', que: 'las afirmaciones de M1 sobre no-determinismo' }
            },
            {
                nombre: 'S · Selección de modelo y razonamiento',
                claves: ['modelo', 'razonamiento', 'sonnet', 'opus', 'haiku', 'familia', 'esfuerzo', 'effort'],
                repasa: 'Elegir modelo y activar razonamiento son dos controles independientes que se componen: el primero decide qué miembro de la familia corre, el segundo es una configuración por solicitud.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «Enrutamiento por modelo y por esfuerzo»' }
            }
        ]
    },

    M2: {
        sigla: 'P.E.S.A',
        titulo: 'Prompting de grado de producción, agentes y herramientas',
        fuente: 'markdown/module-02-04-production-grade-promting-es.md',
        pilares: [
            {
                nombre: 'P · Prompt de sistema y estructura',
                claves: ['sistema', 'system', 'xml', 'etiqueta', 'few-shot', 'ejemplo', 'shot'],
                repasa: 'Tres piezas con trabajos distintos: el prompt de sistema es el contrato persistente, las etiquetas XML separan instrucción de dato, y los ejemplos fijan la forma de salida. Cuando algo falla, diagnostica cuál de las tres antes de reescribir.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «Prompt de sistema + XML + few-shot»' }
            },
            {
                nombre: 'A · Acotar la salida',
                claves: ['output_config', 'json_schema', 'esquema', 'estructurad', 'formato', 'additionalproperties'],
                repasa: 'La restricción de formato sale del prompt y pasa a la API con output_config.format. Requiere required completo y additionalProperties: false, y sigue habiendo que revisar stop_reason antes de parsear.',
                practica: { pagina: 'completar-codigo.html', que: 'los ejercicios de M2 sobre salidas estructuradas' }
            },
            {
                nombre: 'Herramientas y su bucle',
                claves: ['herramienta', 'tool_use', 'tool_result', 'esquema de herramienta', 'mcp', 'bucle'],
                repasa: 'stop_reason "tool_use" significa que Claude espera resultados. Todo tool_use necesita su tool_result, todos vuelven en un solo mensaje de usuario, y el turno del asistente se guarda completo. La descripción de la herramienta es lo que decide la selección.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «El bucle de uso de herramientas, completo»' }
            },
            {
                nombre: 'Streaming, caché y presupuesto de sesión',
                claves: ['streaming', 'flujo', 'parcial', 'caché', 'cache_control', 'compacta', 'lote', 'batch', 'custom_id'],
                repasa: 'No actúes nunca sobre un bloque parcial. El caché es coincidencia de prefijo y cualquier byte previo lo invalida. En lotes, los resultados no vuelven en orden: custom_id es el único vínculo.',
                practica: { pagina: 'ejemplos.html', que: 'los ejemplos de caché de prefijo y de lotes' }
            }
        ]
    },

    M3: {
        sigla: 'P.C.S.A',
        titulo: 'Claude Code, MCP e integración',
        fuente: 'markdown/module-03-03-mcp-integration-es.md',
        pilares: [
            {
                nombre: 'P · Permisos',
                claves: ['permiso', 'deny', 'allow', 'acceptedits', 'bypass', 'modo', 'plan'],
                repasa: 'Una regla deny gana siempre, sobre allow y sobre el modo en efecto. Los modos aceleran el trabajo rutinario sin abrir lo negado.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «settings.json: modo, permisos y la regla que siempre gana»' }
            },
            {
                nombre: 'C · Configuración, CLAUDE.md y ganchos',
                claves: ['claude.md', 'gancho', 'hook', 'pretooluse', 'posttooluse', 'regla', 'configuración', 'settings'],
                repasa: 'CLAUDE.md se antepone al contexto en cada sesión, así que solo entra lo que no se deduce del código. Un gancho PreToolUse bloquea saliendo con código 2 y escribiendo la razón en stderr; PostToolUse corre después y no puede impedir nada.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «Un gancho PreToolUse que bloquea de verdad»' }
            },
            {
                nombre: 'S · Skills, plugins y subagentes',
                claves: ['skill', 'plugin', 'subagente', 'comando', 'mercado', 'portabilidad'],
                repasa: 'La description es lo único que el agente lee para decidir si carga una skill. Tres reglas de portabilidad: rutas relativas, nada específico de una máquina, alcance declarado. El subagente corre en contexto aislado y no hereda el tuyo.',
                practica: { pagina: 'ejemplos.html', que: 'los ejemplos de skill y de subagente' }
            },
            {
                nombre: 'A · Autenticación y coste de MCP',
                claves: ['mcp', 'servidor', 'secreto', 'token', 'credencial', 'transporte', 'stdio', 'variable de entorno'],
                repasa: 'Los secretos van en variables de entorno o en un gestor, nunca en el repositorio. Y cada servidor MCP conectado añade sus esquemas a cada solicitud: conecta solo lo que la tarea necesita.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «.mcp.json con secretos fuera del repositorio»' }
            }
        ]
    },

    M4: {
        sigla: 'E.R.C.S',
        titulo: 'Producción, evaluaciones y seguridad',
        fuente: 'markdown/module-04-02-product-engineering-evals-security-es.md',
        pilares: [
            {
                nombre: 'E · Evaluaciones',
                claves: ['evaluac', 'eval', 'calificador', 'juez', 'rúbrica', 'rubrica', 'umbral', 'cobertura', 'calibra'],
                repasa: 'El calificador se elige por la forma de la salida: exacta para una etiqueta, por código para JSON, juez LLM solo para calidad abierta. Al juez se le piden fortalezas, debilidades y razonamiento antes de la puntuación, y se calibra contra etiquetas humanas.',
                practica: { pagina: 'ejemplos.html', que: 'los ejemplos de evaluación mínima y de juez calibrado' }
            },
            {
                nombre: 'R · Resiliencia y rastreo',
                claves: ['prueba', 'test', 'unitar', 'integración', 'rastreo', 'traza', 'nivel', 'costura', 'punto de unión', 'seam', 'extremo a extremo'],
                repasa: 'Cada nivel de prueba detecta un fallo que los otros pasan por alto, y las costuras (<em>seams</em>) entre componentes son donde se rompe lo que pasó todas las pruebas por separado. La traza es lo que localiza el paso que falló.',
                practica: { pagina: 'opcion-multiple.html', que: 'las preguntas de M4 sobre niveles de prueba' }
            },
            {
                nombre: 'C · Costo, errores y modelo',
                claves: ['costo', 'coste', 'latencia', 'reintent', 'is_error', 'terminal', 'backoff', 'enrutamiento', 'presupuesto'],
                repasa: 'Ante cualquier fallo, la primera pregunta es si es reintentable o terminal. Un error terminal vuelve al modelo como tool_result con is_error, nunca se descarta. Las palancas de gasto: modelo, esfuerzo, tamaño de contexto, número de llamadas, caché y lotes.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «Sobrevivir al fallo: reintentable, terminal y rechazo»' }
            },
            {
                nombre: 'S · Seguridad',
                claves: ['segurid', 'inyec', 'puerta', 'humano', 'irreversible', 'privilegio', 'confianza', 'límite'],
                repasa: 'El límite fiable es el de la acción, no la redacción del prompt. La puerta humana se coloca por costo de peor caso, y el control vive en tu código: un if es una garantía, una instrucción de sistema es una sugerencia.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «La puerta humana antes de lo irreversible»' }
            }
        ]
    },

    M5: {
        sigla: 'E.P.R.L',
        titulo: 'Aceleradores y contribución de IP',
        fuente: 'markdown/module-05-05-acceleratos-ip-contribution-es.md',
        pilares: [
            {
                nombre: 'E · Empaquetamiento',
                claves: ['acelerador', 'plantilla', 'reutiliz', 'parametriz', 'config', 'ruta', 'hardcode'],
                repasa: 'La prueba de si algo es un acelerador es una sola pregunta: ¿el siguiente compromiso lo configura o lo reescribe? La ruta escrita en duro es el defecto clásico.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «De script de un solo uso a acelerador reutilizable»' }
            },
            {
                nombre: 'P · Preparación para contribuir',
                claves: ['contribu', 'pull request', 'mantenedor', 'canal', 'derechos', 'licencia', 'ejemplo ejecutable'],
                repasa: 'Una contribución que un mantenedor pueda aceptar lleva código enfocado, un ejemplo ejecutable, una prueba, los supuestos declarados y los derechos confirmados. Y va por el canal construido para ella.',
                practica: { pagina: 'opcion-multiple.html', que: 'las preguntas de M5 sobre canales de contribución' }
            },
            {
                nombre: 'R · Requisitos',
                claves: ['requisito', 'funcional', 'infraestructura', 'negocio', 'alcance', 'supuesto', 'cumplimiento', 'residencia'],
                repasa: 'Los requisitos funcionales dicen qué hace; los de infraestructura, dónde corre y bajo qué restricciones. Cada requisito de infraestructura elimina opciones de diseño antes de escribir una línea.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «De problema de negocio a requisitos que deciden el diseño»' }
            },
            {
                nombre: 'Límites de confianza entre componentes',
                claves: ['límite de confianza', 'costura', 'punto de unión', 'seam', 'privilegio',
                         'componente', 'no confiable', 'obtenido', 'confianza'],
                repasa: 'Cada costura (<em>seam</em>) entre dos componentes es un límite de confianza, aunque nadie lo haya marcado. La confianza no se hereda del componente que envió los datos: lo que llega se trata como dato, no como instrucción. Una aplicación está contenida solo tanto como su costura más privilegiada.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «Cerrar el límite de confianza en la costura»' }
            },
            {
                nombre: 'L · Ciclo de vida y despliegue',
                claves: ['ciclo de vida', 'despliegue', 'staging', 'producción', 'alias', 'fijad', 'versión', 'reversión', 'plataforma'],
                repasa: 'Desarrollo → evaluación → staging → producción, con una puerta entre fases. Lo desplegado no cambia sin un commit, y se conserva la versión anterior como objetivo de reversión.',
                practica: { pagina: 'ejemplos.html', que: 'el ejemplo «Fijar el modelo y poner la puerta entre fases»' }
            }
        ]
    }
};

/* Quita acentos y baja a minúsculas para que la coincidencia de claves no
   dependa de cómo esté escrita la pregunta. */
function normalizarTexto(txt) {
    return (txt || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

/* Devuelve el pilar del módulo que más claves comparte con el texto, o null
   si ninguna coincide (entonces el consejo se queda a nivel de módulo). */
function pilarDe(modulo, texto) {
    const mod = REFUERZO[modulo];
    if (!mod) return null;
    const t = normalizarTexto(texto);
    let mejor = null, mejorPuntos = 0;
    mod.pilares.forEach(p => {
        const puntos = p.claves.filter(c => t.indexOf(normalizarTexto(c)) !== -1).length;
        if (puntos > mejorPuntos) { mejor = p; mejorPuntos = puntos; }
    });
    return mejor;
}
