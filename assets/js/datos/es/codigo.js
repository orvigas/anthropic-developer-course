/* Ejercicios de completar código
   Extraído de tarjetas-interactivas.html · Certificación Anthropic */

"use strict";

const codeData = [
    {m:'M2', titulo:'Cerrar el bucle de uso de herramientas',
     code:'response = client.messages.create(model=MODEL, max_tokens=4096,\n                                   tools=TOOLS, messages=messages)\n\nif response.stop_reason == "____":\n    for block in response.content:\n        if block.type == "tool_use":\n            result = run_tool(block.name, block.input)\n            messages.append({"role": "user", "content": [{\n                "type": "tool_result",\n                "tool_use_id": block.id,\n                "content": result }]})',
     options:['end_turn','tool_use','max_tokens','refusal'], correct:1,
     explanation:'stop_reason "tool_use" significa que Claude emitió bloques de herramienta y espera resultados. "end_turn" significa que terminó y no pide nada más.'},

    {m:'M2', titulo:'Emparejar el resultado con la solicitud',
     code:'requests = [{\n    "____": f"doc-{doc.id}",\n    "params": {"model": MODEL, "max_tokens": 1024,\n               "messages": [{"role": "user", "content": doc.text}]}\n} for doc in documents]\n\nbatch = client.messages.batches.create(requests=requests)\n# los resultados regresan en orden arbitrario',
     options:['custom_id','request_id','batch_id','index'], correct:0,
     explanation:'custom_id es el único vínculo fiable: los resultados de un lote no vuelven en el orden de envío.'},

    {m:'M2', titulo:'Marcar un punto de corte de caché',
     code:'system = [{\n    "type": "text",\n    "text": LARGE_SYSTEM_PROMPT,\n    "____": {"type": "ephemeral"}\n}]\n# hasta cuatro puntos de corte por solicitud',
     options:['cache','cache_control','caching','prompt_cache'], correct:1,
     explanation:'cache_control de tipo ephemeral marca el último bloque que quieres cachear. Los mejores candidatos son los prefijos que rara vez cambian entre turnos.'},

    {m:'M2', titulo:'Restringir la salida a un esquema',
     code:'response = client.messages.create(\n    model=MODEL, max_tokens=1024, messages=messages,\n    output_config={"format": {"type": "____", "schema": TICKET_SCHEMA}}\n)\n# sigue revisando response.stop_reason: refusal o max_tokens',
     options:['json_object','json_schema','structured','strict_json'], correct:1,
     explanation:'output_config.format con tipo json_schema aplica decodificación restringida. Aun así un rechazo o un truncamiento devuelven una salida que no coincide.'},

    {m:'M2', titulo:'Medir antes de enviar',
     code:'count = client.messages.____(\n    model=MODEL, messages=messages, tools=TOOLS\n)\nif count.input_tokens > CONTEXT_BUDGET:\n    messages = compact(messages)',
     options:['count_tokens','estimate','usage','tokenize'], correct:0,
     explanation:'El endpoint count_tokens acepta el mismo cuerpo que una llamada de mensajes y devuelve el conteo sin ejecutar inferencia.'},

    {m:'M3', titulo:'Bloquear una edición con un gancho',
     code:'{\n  "hooks": {\n    "____": [{\n      "matcher": "Edit|Write",\n      "hooks": [{ "type": "command",\n                  "command": "./scripts/block-prod-config.sh" }]\n    }]\n  }\n}',
     options:['PostToolUse','PreToolUse','UserPromptSubmit','Stop'], correct:1,
     explanation:'Solo PreToolUse se ejecuta antes de la llamada, que es lo que permite examinarla y salir con código 2 para bloquearla.'},

    {m:'M3', titulo:'Proteger un archivo de entorno',
     code:'{\n  "permissions": {\n    "defaultMode": "acceptEdits",\n    "____": ["Read(.env.production)", "Bash(rm:*)"]\n  }\n}',
     options:['allow','deny','ask','ignore'], correct:1,
     explanation:'Una regla de negación gana siempre sobre cualquier regla de permiso y sobre el modo en efecto. Es la forma determinista de acotar rutas sensibles.'},

    {m:'M3', titulo:'El código de salida que bloquea',
     code:'#!/usr/bin/env bash\n# gancho PreToolUse\nif grep -qE \'"(api_key|token)"\\s*:\\s*"[^$]\' "$CLAUDE_TOOL_INPUT"; then\n  echo "Credencial en línea detectada en .mcp.json" >&2\n  exit ____\nfi\nexit 0',
     options:['0','1','2','127'], correct:2,
     explanation:'Un gancho PreToolUse bloquea la llamada saliendo con código 2 y escribiendo la razón en stderr, que el agente ve como retroalimentación.'},

    {m:'M3', titulo:'Referenciar un secreto sin escribirlo',
     code:'{\n  "mcpServers": {\n    "github": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-github"],\n      "env": { "GITHUB_TOKEN": "____" }\n    }\n  }\n}',
     options:['ghp_a1b2c3d4e5f6','${GITHUB_TOKEN}','<pega tu token aquí>','null'], correct:1,
     explanation:'El valor se lee del entorno en tiempo de ejecución. Un valor literal en un archivo versionado es exactamente lo que el gancho PreToolUse debe bloquear.'},

    {m:'M4', titulo:'Informar un error terminal al modelo',
     code:'try:\n    data = fetch_account(account_id)\nexcept NotFound:\n    tool_result = {\n        "type": "tool_result",\n        "tool_use_id": block.id,\n        "____": True,\n        "content": "account_id no existe"\n    }',
     options:['failed','is_error','terminal','error'], correct:1,
     explanation:'is_error: true dentro del tool_result es como se informa un error terminal para que Claude decida el siguiente paso. Lo que nunca se hace es descartarlo en silencio.'},

    {m:'M4', titulo:'Anclar la puntuación del juez',
     code:'eval_prompt = f"""\nYou are an expert reviewer. Evaluate the solution for the task.\nTask: {task}\nSolution: {solution}\nReturn JSON with:\n"strengths": array of 1-3 points\n"weaknesses": array of 1-3 points\n"____": a one to two sentence explanation, 50 words maximum\n"score": a number from 1 to 10\n"""',
     options:['summary','reasoning','confidence','category'], correct:1,
     explanation:'Pedir el razonamiento junto a fortalezas y debilidades es lo que evita que el modelo derive hacia un número medio y seguro alrededor de seis.'},

    {m:'M4', titulo:'Enrutar por costo',
     code:'def route(query):\n    kind = classify(query)   # llamada barata\n    if kind == "lookup":\n        return ____(query)          # un solo pase\n    return agentic_search(query)    # varias rondas',
     options:['fetch_once','stream_once','batch_call','judge'], correct:0,
     explanation:'Una recuperación única responde las búsquedas de un solo dato en un corpus estable; la búsqueda iterativa se reserva para preguntas de varios pasos, que cuestan más tokens y latencia.'},

    {m:'M5', titulo:'Fijar el modelo para producción',
     code:'# despliegue de producción\nMODEL = "____"\nFALLBACK_MODEL = PREVIOUS_PINNED_ID  # objetivo de reversión\n\nassert eval_score(MODEL) >= BASELINE, "no promover sin puntuación"',
     options:['El alias corto de la familia','El ID de modelo completo fijado','El alias con sufijo -latest','Una variable resuelta en tiempo de ejecución por el proveedor'], correct:1,
     explanation:'Un alias resuelve a una versión que se actualiza y puede diferir por plataforma. Fijar el ID completo, con una versión previa retenida, es lo que da un despliegue controlado y un objetivo de reversión.'},

    {m:'M5', titulo:'Cerrar el límite de confianza',
     code:'page = claude_code.fetch(customer_url)\n\n# el contenido obtenido es no confiable al cruzar la costura (seam)\nnext_prompt = build_prompt(\n    instructions=SYSTEM_CONTRACT,\n    payload=____(page.text)\n)',
     options:['sanitize_html','treat_as_data','trust_source','inline'], correct:1,
     explanation:'Envolver el contenido como datos cierra el límite: lo que viene de una fuente no confiable no es algo sobre lo que el agente deba actuar. La confianza no se hereda del componente que envió los datos.'},

    {m:'M5', titulo:'Parametrizar el acelerador',
     code:'# ❌ despachado así\n# for repo in ["/Users/dev/acme-client/src"]:\n\n# ✅ acelerador reutilizable\nfor repo in config["____"]:\n    analyze(repo)',
     options:['repo_paths','hardcoded_path','local_dir','my_repo'], correct:0,
     explanation:'La ruta escrita en duro es el defecto clásico de una plantilla. Parametrizarla restaura la reutilización: el siguiente compromiso establece el valor en lugar de editar el bucle.'}
];
