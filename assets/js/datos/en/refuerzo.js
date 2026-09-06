/* Review suggestions by module and pillar
   Anthropic Certification · Developer

   Every recorded miss is attributed to a pillar by looking for its `claves`
   in the text of the question. If none match, the advice stays at module
   level. `fuente` points at the course material; `practica`, at the page
   where that specific point is exercised. */

"use strict";

const REFUERZO = {
    M1: {
        sigla: 'T.C.M.S',
        titulo: 'MSO Foundations',
        fuente: 'markdown/module-01-01-mso-foundations.md',
        pilares: [
            {
                nombre: 'T · Tokens',
                claves: ['token', 'tokenizer', 'count_tokens', 'budget', 'count'],
                repasa: 'Everything is paid for in tokens: prompt, history, tool schemas, results and response. The tokenizer depends on the model, so a count does not carry across families.',
                practica: { pagina: 'examples.html', que: 'the example «Measure the request before you pay for it»' }
            },
            {
                nombre: 'C · Context',
                claves: ['context', 'window', 'model_context_window_exceeded', 'truncat', 'fits', 'validation'],
                repasa: 'They are two distinct failures. Input larger than the window: validation error before generating. Ceiling hit during generation: partial output with its stop reason. Neither trims silently.',
                practica: { pagina: 'index.html', que: 'the M1 flashcards on the context window' }
            },
            {
                nombre: 'M · Sampling',
                claves: ['sampl', 'temperature', 'top_p', 'top_k', 'determinis', 'probability', 'identical'],
                repasa: 'Every token is sampled from a distribution: that is why two identical calls do not give identical text. Current models reject sampling parameters with a 400; behavior is steered with the prompt.',
                practica: { pagina: 'true-false.html', que: 'the M1 statements on non-determinism' }
            },
            {
                nombre: 'S · Model selection and thinking',
                claves: ['model', 'thinking', 'sonnet', 'opus', 'haiku', 'family', 'effort'],
                repasa: 'Choosing a model and enabling thinking are two independent controls that compose: the first decides which family member runs, the second is a per-request setting.',
                practica: { pagina: 'examples.html', que: 'the example «Routing by model and by effort»' }
            }
        ]
    },

    M2: {
        sigla: 'P.E.S.A',
        titulo: 'Production-grade prompting, agents and tools',
        fuente: 'markdown/module-02-04-production-grade-promting.md',
        pilares: [
            {
                nombre: 'P · System prompt and structure',
                claves: ['system', 'xml', 'tag', 'few-shot', 'example', 'shot'],
                repasa: 'Three pieces with distinct jobs: the system prompt is the persistent contract, XML tags separate instruction from data, and examples pin down the output shape. When something fails, diagnose which of the three before rewriting.',
                practica: { pagina: 'examples.html', que: 'the example «System prompt + XML + few-shot»' }
            },
            {
                nombre: 'E · Constraining the output',
                claves: ['output_config', 'json_schema', 'schema', 'structured', 'format', 'additionalproperties'],
                repasa: 'The format constraint leaves the prompt and moves to the API with output_config.format. It needs a complete required and additionalProperties: false, and you still have to check stop_reason before parsing.',
                practica: { pagina: 'fill-in-code.html', que: 'the M2 exercises on structured outputs' }
            },
            {
                nombre: 'S · Tools and their loop',
                claves: ['tool', 'tool_use', 'tool_result', 'tool schema', 'mcp', 'loop'],
                repasa: 'stop_reason "tool_use" means Claude is waiting for results. Every tool_use needs its tool_result, they all go back in one user message, and the assistant turn is stored whole. The tool description is what drives selection.',
                practica: { pagina: 'examples.html', que: 'the example «The tool-use loop, complete»' }
            },
            {
                nombre: 'A · Streaming, cache and session budget',
                claves: ['streaming', 'stream', 'partial', 'cache', 'cache_control', 'compact', 'batch', 'custom_id'],
                repasa: 'Never act on a partial block. The cache is prefix matching and any earlier byte invalidates it. In batches, results do not come back in order: custom_id is the only link.',
                practica: { pagina: 'examples.html', que: 'the prefix caching and batching examples' }
            }
        ]
    },

    M3: {
        sigla: 'P.C.S.A',
        titulo: 'Claude Code, MCP and integration',
        fuente: 'markdown/module-03-03-mcp-integration.md',
        pilares: [
            {
                nombre: 'P · Permissions',
                claves: ['permission', 'deny', 'allow', 'acceptedits', 'bypass', 'mode', 'plan'],
                repasa: 'A deny rule always wins, over allow and over the mode in effect. The modes speed up routine work without opening what is denied.',
                practica: { pagina: 'examples.html', que: 'the example «settings.json: mode, permissions and the rule that always wins»' }
            },
            {
                nombre: 'C · Configuration, CLAUDE.md and hooks',
                claves: ['claude.md', 'hook', 'pretooluse', 'posttooluse', 'rule', 'configuration', 'settings'],
                repasa: 'CLAUDE.md is prepended to the context on every session, so only what cannot be inferred from the code belongs in it. A PreToolUse hook blocks by exiting with code 2 and writing the reason to stderr; PostToolUse runs afterwards and can prevent nothing.',
                practica: { pagina: 'examples.html', que: 'the example «A PreToolUse hook that really blocks»' }
            },
            {
                nombre: 'S · Skills, plugins and subagents',
                claves: ['skill', 'plugin', 'subagent', 'command', 'marketplace', 'portab'],
                repasa: 'The description is the only thing the agent reads to decide whether to load a skill. Three portability rules: relative paths, nothing machine-specific, declared scope. A subagent runs in an isolated context and does not inherit yours.',
                practica: { pagina: 'examples.html', que: 'the skill and subagent examples' }
            },
            {
                nombre: 'A · Authentication and the cost of MCP',
                claves: ['mcp', 'server', 'secret', 'token', 'credential', 'transport', 'stdio', 'environment variable'],
                repasa: 'Secrets go in environment variables or a manager, never in the repository. And every connected MCP server adds its schemas to every request: connect only what the task needs.',
                practica: { pagina: 'examples.html', que: 'the example «.mcp.json with secrets outside the repository»' }
            }
        ]
    },

    M4: {
        sigla: 'E.R.C.S',
        titulo: 'Production, evals and security',
        fuente: 'markdown/module-04-02-product-engineering-evals-security.md',
        pilares: [
            {
                nombre: 'E · Evals',
                claves: ['eval', 'grader', 'grading', 'judge', 'rubric', 'threshold', 'coverage', 'calibrat'],
                repasa: 'The grader follows from the shape of the output: exact match for a single label, code-based for JSON, an LLM judge only for open-ended quality. The judge is asked for strengths, weaknesses and reasoning before the score, and is calibrated against human labels.',
                practica: { pagina: 'examples.html', que: 'the minimal eval and calibrated judge examples' }
            },
            {
                nombre: 'R · Resilience and tracing',
                claves: ['test', 'unit', 'integration', 'trace', 'tracing', 'level', 'seam', 'end-to-end'],
                repasa: 'Each testing level catches a failure the others miss, and the seams between components are where what passed every test separately breaks. The trace is what localizes the step that failed.',
                practica: { pagina: 'multiple-choice.html', que: 'the M4 questions on testing levels' }
            },
            {
                nombre: 'C · Cost, errors and model',
                claves: ['cost', 'latency', 'retri', 'is_error', 'terminal', 'backoff', 'routing', 'budget'],
                repasa: 'On any failure, the first question is whether it is retriable or terminal. A terminal error goes back to the model as a tool_result with is_error, never dropped. The spend levers: model, effort, context size, number of calls, caching and batching.',
                practica: { pagina: 'examples.html', que: 'the example «Surviving failure: retriable, terminal and refusal»' }
            },
            {
                nombre: 'S · Security',
                claves: ['securit', 'inject', 'gate', 'human', 'irreversible', 'privilege', 'trust', 'boundary'],
                repasa: 'The reliable boundary is the action one, not the wording of the prompt. The human gate is placed by worst-case cost, and the control lives in your code: an if is a guarantee, a system instruction is a suggestion.',
                practica: { pagina: 'examples.html', que: 'the example «The human gate before the irreversible»' }
            }
        ]
    },

    M5: {
        sigla: 'E.P.R.L',
        titulo: 'Accelerators and IP contribution',
        fuente: 'markdown/module-05-05-acceleratos-ip-contribution.md',
        pilares: [
            {
                nombre: 'E · Packaging',
                claves: ['accelerator', 'template', 'reusab', 'reuse', 'parameteriz', 'config', 'path', 'hardcode'],
                repasa: 'The test of whether something is an accelerator is a single question: does the next engagement configure it or rewrite it? The hardcoded path is the classic defect.',
                practica: { pagina: 'examples.html', que: 'the example «From one-off script to reusable accelerator»' }
            },
            {
                nombre: 'P · Contribution readiness',
                claves: ['contribut', 'pull request', 'maintainer', 'channel', 'rights', 'license', 'runnable example'],
                repasa: 'A contribution a maintainer can accept carries focused code, a runnable example, a test, declared assumptions and confirmed rights. And it goes through the channel built for it.',
                practica: { pagina: 'multiple-choice.html', que: 'the M5 questions on contribution channels' }
            },
            {
                nombre: 'R · Requirements',
                claves: ['requirement', 'functional', 'infrastructure', 'business', 'scope', 'assumption', 'compliance', 'residency'],
                repasa: 'Functional requirements say what it does; infrastructure ones, where it runs and under what constraints. Every infrastructure requirement eliminates design options before you write a line.',
                practica: { pagina: 'examples.html', que: 'the example «From business problem to requirements that decide the design»' }
            },
            {
                nombre: 'Trust boundaries between components',
                claves: ['trust boundary', 'seam', 'privilege', 'component', 'untrusted', 'fetched', 'trust'],
                repasa: 'Every seam between two components is a trust boundary, even if nobody marked it. Trust is not inherited from the component that sent the data: what arrives is treated as data, not as instructions. An application is only as contained as its most privileged seam.',
                practica: { pagina: 'examples.html', que: 'the example «Closing the trust boundary at the seam»' }
            },
            {
                nombre: 'L · Lifecycle and deployment',
                claves: ['lifecycle', 'deploy', 'staging', 'production', 'alias', 'pinn', 'version', 'rollback', 'platform'],
                repasa: 'Development → evaluation → staging → production, with a gate between phases. What is deployed does not change without a commit, and the previous version is kept as a rollback target.',
                practica: { pagina: 'examples.html', que: 'the example «Pin the model and put the gate between phases»' }
            }
        ]
    }
};

/* Strips accents and lowercases so key matching does not depend on how the
   question happens to be written. */
function normalizarTexto(txt) {
    return (txt || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

/* Returns the module pillar sharing the most keys with the text, or null if
   none match (in which case the advice stays at module level). */
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
