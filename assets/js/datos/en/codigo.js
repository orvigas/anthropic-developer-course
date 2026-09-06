/* Fill-in-the-code exercises
   Extracted from tarjetas-interactivas.html · Anthropic Certification */

"use strict";

const codeData = [
    {m:'M2', titulo:'Closing the tool-use loop',
     code:'response = client.messages.create(model=MODEL, max_tokens=4096,\n                                   tools=TOOLS, messages=messages)\n\nif response.stop_reason == "____":\n    for block in response.content:\n        if block.type == "tool_use":\n            result = run_tool(block.name, block.input)\n            messages.append({"role": "user", "content": [{\n                "type": "tool_result",\n                "tool_use_id": block.id,\n                "content": result }]})',
     options:['end_turn','tool_use','max_tokens','refusal'], correct:1,
     explanation:'stop_reason "tool_use" means Claude emitted tool blocks and is waiting for results. "end_turn" means it finished and is asking for nothing more.'},

    {m:'M2', titulo:'Matching the result to the request',
     code:'requests = [{\n    "____": f"doc-{doc.id}",\n    "params": {"model": MODEL, "max_tokens": 1024,\n               "messages": [{"role": "user", "content": doc.text}]}\n} for doc in documents]\n\nbatch = client.messages.batches.create(requests=requests)\n# results come back in arbitrary order',
     options:['custom_id','request_id','batch_id','index'], correct:0,
     explanation:'custom_id is the only reliable link: batch results do not come back in submission order.'},

    {m:'M2', titulo:'Marking a cache breakpoint',
     code:'system = [{\n    "type": "text",\n    "text": LARGE_SYSTEM_PROMPT,\n    "____": {"type": "ephemeral"}\n}]\n# up to four breakpoints per request',
     options:['cache','cache_control','caching','prompt_cache'], correct:1,
     explanation:'cache_control of type ephemeral marks the last block you want cached. The best candidates are the prefixes that rarely change between turns.'},

    {m:'M2', titulo:'Constraining the output to a schema',
     code:'response = client.messages.create(\n    model=MODEL, max_tokens=1024, messages=messages,\n    output_config={"format": {"type": "____", "schema": TICKET_SCHEMA}}\n)\n# still check response.stop_reason: refusal or max_tokens',
     options:['json_object','json_schema','structured','strict_json'], correct:1,
     explanation:'output_config.format with type json_schema applies constrained decoding. Even so, a refusal or a truncation returns an output that does not match.'},

    {m:'M2', titulo:'Measuring before you send',
     code:'count = client.messages.____(\n    model=MODEL, messages=messages, tools=TOOLS\n)\nif count.input_tokens > CONTEXT_BUDGET:\n    messages = compact(messages)',
     options:['count_tokens','estimate','usage','tokenize'], correct:0,
     explanation:'The count_tokens endpoint accepts the same body as a messages call and returns the count without running inference.'},

    {m:'M3', titulo:'Blocking an edit with a hook',
     code:'{\n  "hooks": {\n    "____": [{\n      "matcher": "Edit|Write",\n      "hooks": [{ "type": "command",\n                  "command": "./scripts/block-prod-config.sh" }]\n    }]\n  }\n}',
     options:['PostToolUse','PreToolUse','UserPromptSubmit','Stop'], correct:1,
     explanation:'Only PreToolUse runs before the call, which is what lets you examine it and exit with code 2 to block it.'},

    {m:'M3', titulo:'Protecting an environment file',
     code:'{\n  "permissions": {\n    "defaultMode": "acceptEdits",\n    "____": ["Read(.env.production)", "Bash(rm:*)"]\n  }\n}',
     options:['allow','deny','ask','ignore'], correct:1,
     explanation:'A deny rule always beats any allow rule and the mode in effect. It is the deterministic way to fence off sensitive paths.'},

    {m:'M3', titulo:'The exit code that blocks',
     code:'#!/usr/bin/env bash\n# PreToolUse hook\nif grep -qE \'"(api_key|token)"\\s*:\\s*"[^$]\' "$CLAUDE_TOOL_INPUT"; then\n  echo "Inline credential detected in .mcp.json" >&2\n  exit ____\nfi\nexit 0',
     options:['0','1','2','127'], correct:2,
     explanation:'A PreToolUse hook blocks the call by exiting with code 2 and writing the reason to stderr, which the agent sees as feedback.'},

    {m:'M3', titulo:'Referencing a secret without writing it down',
     code:'{\n  "mcpServers": {\n    "github": {\n      "command": "npx",\n      "args": ["-y", "@modelcontextprotocol/server-github"],\n      "env": { "GITHUB_TOKEN": "____" }\n    }\n  }\n}',
     options:['ghp_a1b2c3d4e5f6','${GITHUB_TOKEN}','<paste your token here>','null'], correct:1,
     explanation:'The value is read from the environment at runtime. A literal value in a version-controlled file is exactly what the PreToolUse hook should block.'},

    {m:'M4', titulo:'Reporting a terminal error to the model',
     code:'try:\n    data = fetch_account(account_id)\nexcept NotFound:\n    tool_result = {\n        "type": "tool_result",\n        "tool_use_id": block.id,\n        "____": True,\n        "content": "account_id does not exist"\n    }',
     options:['failed','is_error','terminal','error'], correct:1,
     explanation:'is_error: true inside the tool_result is how you report a terminal error so Claude can decide the next step. What you never do is drop it silently.'},

    {m:'M4', titulo:'Anchoring the judge’s score',
     code:'eval_prompt = f"""\nYou are an expert reviewer. Evaluate the solution for the task.\nTask: {task}\nSolution: {solution}\nReturn JSON with:\n"strengths": array of 1-3 points\n"weaknesses": array of 1-3 points\n"____": a one to two sentence explanation, 50 words maximum\n"score": a number from 1 to 10\n"""',
     options:['summary','reasoning','confidence','category'], correct:1,
     explanation:'Asking for the reasoning alongside strengths and weaknesses is what stops the model from drifting to a safe middling number around six.'},

    {m:'M4', titulo:'Routing by cost',
     code:'def route(query):\n    kind = classify(query)   # cheap call\n    if kind == "lookup":\n        return ____(query)          # single pass\n    return agentic_search(query)    # several rounds',
     options:['fetch_once','stream_once','batch_call','judge'], correct:0,
     explanation:'A single retrieval answers one-fact lookups over a stable corpus; iterative search is reserved for multi-step questions, which cost more tokens and latency.'},

    {m:'M5', titulo:'Pinning the model for production',
     code:'# production deployment\nMODEL = "____"\nFALLBACK_MODEL = PREVIOUS_PINNED_ID  # rollback target\n\nassert eval_score(MODEL) >= BASELINE, "do not promote without a score"',
     options:['The short family alias','The full pinned model id','The alias with the -latest suffix','A variable resolved at runtime by the provider'], correct:1,
     explanation:'An alias resolves to a version that updates and can differ by platform. Pinning the full id, with a prior version retained, is what gives you a staged rollout and a rollback target.'},

    {m:'M5', titulo:'Closing the trust boundary',
     code:'page = claude_code.fetch(customer_url)\n\n# fetched content is untrusted as it crosses the seam\nnext_prompt = build_prompt(\n    instructions=SYSTEM_CONTRACT,\n    payload=____(page.text)\n)',
     options:['sanitize_html','treat_as_data','trust_source','inline'], correct:1,
     explanation:'Wrapping the content as data closes the boundary: what comes from an untrusted source is not something the agent should act on. Trust is not inherited from the component that sent the data.'},

    {m:'M5', titulo:'Parameterizing the accelerator',
     code:'# ❌ shipped like this\n# for repo in ["/Users/dev/acme-client/src"]:\n\n# ✅ reusable accelerator\nfor repo in config["____"]:\n    analyze(repo)',
     options:['repo_paths','hardcoded_path','local_dir','my_repo'], correct:0,
     explanation:'The hardcoded path is the classic defect in a template. Parameterizing it restores reuse: the next engagement sets the value instead of editing the loop.'}
];
