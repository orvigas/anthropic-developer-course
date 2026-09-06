/* Matching sets
   Extracted from tarjetas-interactivas.html · Anthropic Certification */

"use strict";

const matchSets = [
    {m:'M1', titulo:'M1 · API access patterns', pares:[
        ['Synchronous','Short backend response where nobody is waiting on a screen.'],
        ['Streaming','The user watches the output appear as it is generated, over server-sent events.'],
        ['SDK async client','Concurrency without blocking the thread; the response still arrives in real time.'],
        ['Message Batches API','Bulk offline work: an id, polling, up to 24 h and a lower per-token cost.']
    ]},
    {m:'M1', titulo:'M1 · Claude family tiers', pares:[
        ['Haiku','Speed and cost efficiency on tasks that fit inside its envelope.'],
        ['Sonnet','The balanced default for most production workloads.'],
        ['Opus','Demanding work above the default’s envelope.'],
        ['Fable','The most capable tier: hardest reasoning, coding and agentic work.']
    ]},
    {m:'M2', titulo:'M2 · Diagnosing failed prompts', pares:[
        ['Returns a sentence where you expected a label','An output constraint is missing: specify the exact format.'],
        ['Content drifts and the scope creeps','The system prompt is vague: make the contract more specific.'],
        ['Right task but invented structure','Few-shot examples are missing: add one or two input-output pairs.'],
        ['Works well until an edge case','The constraint does not cover that variant: name it explicitly.']
    ]},
    {m:'M2', titulo:'M2 · Context strategies', pares:[
        ['Pruning','Rewind to an earlier message and discard the conversation after it.'],
        ['Compaction','Summarize the history while preserving the key accumulated information.'],
        ['Clearing','Start a fresh conversation with an empty context.'],
        ['Subagent handoff','Delegate to an isolated context that returns only a summary.']
    ]},
    {m:'M2', titulo:'M2 · Message blocks in the tool loop', pares:[
        ['text','Claude’s prose; preserved in the array even when there is tool use.'],
        ['tool_use','Name, id and arguments Claude wants to pass to your code.'],
        ['tool_result','Your reply with the identical id, in the immediately following user turn.'],
        ['thinking','Reasoning that must be returned unmodified or the signature breaks.']
    ]},
    {m:'M3', titulo:'M3 · Durable context mechanisms', pares:[
        ['CLAUDE.md','Project memory prepended to the context on every session; it dilutes with size.'],
        ['Rules file','Guidance scoped to the path or condition it watches.'],
        ['Hook','Command that runs deterministically on a lifecycle event.'],
        ['Subagent','Isolated execution context that returns only a summary of the task.']
    ]},
    {m:'M3', titulo:'M3 · Settings levels', pares:[
        ['~/.claude/settings.json','User preferences that apply to every project on the machine.'],
        ['.claude/settings.json','Team conventions committed to the repository.'],
        ['.claude/settings.local.json','Personal overrides for one project, ignored by git.'],
        ['managed-settings.json','Organization controls that no user or project can override.']
    ]},
    {m:'M4', titulo:'M4 · Grading method by output shape', pares:[
        ['One correct label or value','Exact string match, near-zero cost.'],
        ['Structured output or code','Code-based grading: valid JSON, fields and ranges.'],
        ['Open-ended writing quality','LLM-as-judge with a rubric, calibrated against human labels.'],
        ['Boolean decision','Property check: is it present? does it parse? is it non-empty?']
    ]},
    {m:'M4', titulo:'M4 · Testing levels', pares:[
        ['Unit','Isolates one function, such as a parser or a tool wrapper.'],
        ['Functional','Verifies that a call to Claude returns the expected shape.'],
        ['Integration','Exercises the handoff between two components: where silent failures live.'],
        ['End-to-end','Runs the whole flow as a user would; the slowest and hardest to localize.']
    ]},
    {m:'M4', titulo:'M4 · Tool error handling', pares:[
        ['timeout','Retriable; the SDK usually retries it for you already.'],
        ['rate_limit','Retriable with exponential backoff, honoring retry-after.'],
        ['not_found','Terminal: there is nothing to retry, report the decision to the model.'],
        ['auth_error','Terminal: the credential is broken, fail fast and fix it.']
    ]},
    {m:'M5', titulo:'M5 · Contribution channels', pares:[
        ['Cookbook','Home for focused examples and one-off fixes.'],
        ['Skills marketplace','Reusable skill with metadata and tests.'],
        ['MCP Registry','New MCP server that meets the standard and is documented.'],
        ['PR to the Anthropic repo','Official verifiable improvement, such as a fix in the SDK.']
    ]},
    {m:'M5', titulo:'M5 · Lifecycle phases', pares:[
        ['Development','Fast iteration and prototyping; a model alias is acceptable.'],
        ['Evaluation','Formal quality gate before promoting the change.'],
        ['Staging','Production-like and isolated; where the new version is tested.'],
        ['Production','Real users with a pinned model id and the prior version retained.']
    ]}
];
