# Claude Certified Developer Course

**Complete and Detailed Course Index**

Educational material extracted from local files of the Claude Certified Developer course.

**Available Languages / Idiomas Disponibles:**
- 🇬🇧 [English (Original)](README.md)
- 🇪🇸 [Español Latinoamericano (Spanish Translation)](README-es.md)

---

## 📚 Course Information

- **Source Platform:** Skilljar (Anthropic)
- **Format:** Interactive HTML/JavaScript Material
- **Modules:** 5 progressive modules
- **Approximate Duration:** ~530 minutes (8.8 hours)
- **Level:** Developer/Engineer
- **Extraction Date:** 2026-09-02
- **Total Content Size:** ~432 KB in Markdown
- **Available Languages:** English, Latin American Spanish

---

## 📖 Course Modules

### Module 1: MSO Foundations
**Model fundamentals and technical architecture concepts**

- **File (English):** [`module-01-01-mso-foundations.md`](module-01-01-mso-foundations.md)
- **File (Spanish):** [`module-01-01-mso-foundations-es.md`](module-01-01-mso-foundations-es.md)
- **Size:** 24 KB | 141 lines
- **Duration:** ~59 minutes | 9 screens
- **Sections:** 6
- **Checkpoints:** 2
- **Source:** `raw/01-mso-foundations/`

**Topics Covered:**
1. Orientation - What you will learn
2. How LLMs Behave - Tokens, context, sampling, non-determinism
3. Model options and reasoning modes
4. Prompting modes (zero-shot, one-shot, multi-shot)
5. Technical substrate - SDKs, REST, streaming, async
6. Summary and conclusions

**Key Concepts:**
- Tokens as unit of input, output, and cost
- Context window as fixed budget
- Sampling and non-determinism in generation
- Claude model family (Fable, Opus, Sonnet, Haiku)
- Reasoning modes separate from model selection
- Claude access patterns: SDK vs REST, synchronous vs streaming, async

---

### Module 2: Production-Grade Prompting, Agents & Tool-use
**Advanced prompting, agents, and tool integration for production**

- **File (English):** [`module-02-04-production-grade-promting.md`](module-02-04-production-grade-promting.md)
- **File (Spanish):** [`module-02-04-production-grade-promting-es.md`](module-02-04-production-grade-promting-es.md)
- **Size:** 144 KB | 783 lines
- **Duration:** ~209 minutes | 29 screens
- **Sections:** 10
- **Checkpoints:** 9
- **Source:** `raw/04-production-grade-promting/`

**Topics Covered:**
1. Orientation - Using Claude in production
2. Prompting Craft - System prompts, XML, few-shot, output constraints
3. Extended Thinking - Reasoning, effort calibration
4. Tool-use and Schema Design - Definition, loops, calling patterns
5. Streaming Responses - Consuming streamed responses
6. Context Engineering - Context window management
7. Agent Construction - Building production agents
8. Agent Memory - Persistence and memory scope
9. Multimodal & Batch Ingestion - Images, PDFs, Batch API
10. Summary and conclusions

**Key Concepts:**
- Four prompting techniques: system prompt, XML, few-shot, output constraints
- Diagnosing failures: format, content, structure, edge cases
- Structured outputs to guarantee schema validity
- Adaptive reasoning and effort control
- Schema anatomy: name, description, input_schema
- Message blocks: text, tool_use, tool_result, thinking
- Tool-use looping: define → send → execute → return → continue
- Streaming with interruption recovery
- Context engineering techniques
- Agent construction patterns (workflow vs agent)
- Memory scope: session, user, global

---

### Module 3: Claude Code, MCP & Integration
**Integration through Claude Code and Model Context Protocol**

- **File (English):** [`module-03-03-mcp-integration.md`](module-03-03-mcp-integration.md)
- **File (Spanish):** [`module-03-03-mcp-integration-es.md`](module-03-03-mcp-integration-es.md)
- **Size:** 100 KB | 641 lines
- **Duration:** ~142 minutes
- **Sections:** 8+
- **Source:** `raw/03-mcp-integration/`

**Topics Covered (Expected):**
- Introduction to Claude Code
- Model Context Protocol (MCP)
- MCP client implementation
- MCP server integration
- Permission modes and project context
- Plugin packaging
- Credential management and security
- End-to-end integration

**Key Concepts:**
- MCP as standard communication layer
- Transport: stdio vs remote HTTP
- Permissions in project mode
- Durable context storage
- Plugin packaging
- Trust boundary

---

### Module 4: Production Engineering, Evals & Security
**Evaluations, observability, and security in production**

- **File (English):** [`module-04-02-product-engineering-evals-security.md`](module-04-02-product-engineering-evals-security.md)
- **File (Spanish):** [`module-04-02-product-engineering-evals-security-es.md`](module-04-02-product-engineering-evals-security-es.md)
- **Size:** 100 KB | 588 lines
- **Duration:** ~211 minutes
- **Sections:** 8+
- **Source:** `raw/02-product-engineering-evals-security/`

**Topics Covered (Expected):**
- Evaluation framework (Evals)
- Performance metrics
- Tracing and observability
- Failure handling
- Cost budgets
- Latency budgets
- Orchestration
- Security boundaries that hold in production

**Key Concepts:**
- Evals as verification standard
- Model-graded judges
- End-to-end request tracing
- Failure modes and recovery
- Cost budgets and estimation
- Latency optimization
- Security boundaries

---

### Module 5: Accelerators and IP Contribution
**Accelerators, verifiable contributions, and deployment**

- **File (English):** [`module-05-05-acceleratos-ip-contribution.md`](module-05-05-acceleratos-ip-contribution.md)
- **File (Spanish):** [`module-05-05-acceleratos-ip-contribution-es.md`](module-05-05-acceleratos-ip-contribution-es.md)
- **Size:** 64 KB | 482 lines
- **Duration:** ~139 minutes
- **Sections:** 6+
- **Source:** `raw/05-acceleratos-ip-contribution/`

**Topics Covered (Expected):**
- Accelerator packaging
- Verifiable contributions preparation
- Deployment platforms
- Trust boundary marking
- Versioning and distribution
- Business models

**Key Concepts:**
- Accelerator as packaged unit
- Contribution verifiability
- Deployment platform selection
- Trust boundaries and security
- Distribution and versioning

---

## 🎓 How to Use These Materials

### File Structure
```
markdown/
├── README.md                                              (This file - English)
├── README-es.md                                           (Spanish Translation)
├── module-01-01-mso-foundations.md                       (Module 1 - English)
├── module-01-01-mso-foundations-es.md                    (Module 1 - Spanish)
├── module-02-04-production-grade-promting.md             (Module 2 - English)
├── module-02-04-production-grade-promting-es.md          (Module 2 - Spanish)
├── module-03-03-mcp-integration.md                       (Module 3 - English)
├── module-03-03-mcp-integration-es.md                    (Module 3 - Spanish)
├── module-04-02-product-engineering-evals-security.md    (Module 4 - English)
├── module-04-02-product-engineering-evals-security-es.md (Module 4 - Spanish)
├── module-05-05-acceleratos-ip-contribution.md           (Module 5 - English)
└── module-05-05-acceleratos-ip-contribution-es.md        (Module 5 - Spanish)
```

### Reading Recommendations

1. **Sequential Order:** The modules are designed progressively. Start with Module 1 and advance sequentially.

2. **Independent Study:** Each module is relatively independent after Module 1. You can jump to a specific topic if you already master the fundamentals.

3. **Quick Reference:** Use the index of this README to find specific topics within each module.

4. **Deep Dive:** For complex concepts (tool-use, streaming, agent loops), read multiple times as the content is technical.

5. **Language Choice:** Choose between the English version (original) or Latin American Spanish translation according to your preference.

---

## ⚠️ Note on Incomplete Content

This material has been extracted from static HTML files. Some interactive elements are not available in Markdown format:

### Content Not Available Locally:
- ❌ Interactive exercises
- ❌ Validated quizzes
- ❌ Code simulations
- ❌ Graded assessments
- ❌ Video demonstrations
- ❌ Dynamic JavaScript elements
- ❌ External resources requiring authentication
- ❌ Real-time feedback

### Content Available:
- ✅ Lessons and explanations
- ✅ Code examples (static examples)
- ✅ Tables and diagrams
- ✅ Concept descriptions
- ✅ Notes and warnings
- ✅ Structure and navigation

---

## 📊 Content Statistics

| Metric | Value |
|---------|-------|
| **Total modules** | 5 |
| **Markdown files** | 12 (6 modules + 2 READMEs + 4 future translations) |
| **Total size** | ~432 KB (English content) |
| **Content lines** | ~2,635 (English content) |
| **Screens/Lessons** | 29+ |
| **Topical sections** | 38+ |
| **Checkpoints/Assessments** | 25+ |
| **Estimated duration** | ~530 minutes |
| **Available languages** | 2 (English, Latin American Spanish) |

---

## 🔍 Search and Navigation

### By Technical Topic:

**Tokens and Context:**
- Module 1: "Tokens: the unit of input, output, and cost"
- Module 1: "The context window: a fixed budget"

**Prompting:**
- Module 2: "System prompts, XML, few-shot, and output constraints"
- Module 2: "Four techniques that give Claude a reliable output shape"

**Tool-use:**
- Module 2: "Tool Schemas Claude Selects Correctly"
- Module 2: "How the tool-use loop works"
- Module 2: "Message block structure in a tool-use conversation"

**Streaming:**
- Module 2: "Streaming Responses"

**Agents:**
- Module 2: "Agent Construction"
- Module 2: "Agent Memory"

**Security and Integration:**
- Module 3: "MCP Integration"
- Module 4: "Production Engineering & Security"

### By Content Type:

**Conceptual Explanations:**
- All "Teaching" sections

**Use Cases:**
- "Scenario" and "Watch Out" sections

**Knowledge Verification:**
- "Checkpoint" and "Quiz" sections

---

## 💾 Source and Metadata

- **Source Directory:** `/raw/`
- **LMS Platform:** Skilljar (Anthropic)
- **Source Format:** HTML with embedded styles + compiled JavaScript
- **Extraction Tool:** Custom Python script with HTML parser
- **Extraction Date:** 2026-09-02
- **Method:** Static analysis of local files (no remote access)
- **Integrity:** Original files have not been modified
- **Translations:** Professional translation to Latin American Spanish
- **Translation Certification:** Complete high-quality technical and academic translation

---

## 📚 Study Resources for Certification

### 🎯 Comprehensive Preparation Guide

- **[ESTUDIO-CERTIFICACION-ANTHROPIC.md](ESTUDIO-CERTIFICACION-ANTHROPIC.md)** - Complete study guide for certification exam (Spanish)
  - Key concepts compressed by module
  - Mnemonics (T.C.M.S, P.E.S.A, etc.)
  - Study flashcards for quick memorization
  - Quizzes based on official content
  - Reference tables for practical decisions
  - Self-assessment checklist
  - Top 10 most costly mistakes

### 🃏 Interactive Tool

- **[tarjetas-interactivas.html](../html/tarjetas-interactivas.html)** - Interactive web application (Spanish)
  - 27 study flashcards with flip animation
  - Shuffle function for random practice
  - 11 practice quizzes
  - Progress tracker
  - Results summary
  - Available offline

---

## 🚀 Next Steps

To complete your Claude Developer Certified training:

1. **Read modules in order** - Each builds on the previous one
2. **Use the study guide** - Consult [ESTUDIO-CERTIFICACION-ANTHROPIC.md](ESTUDIO-CERTIFICACION-ANTHROPIC.md) (Spanish)
3. **Practice with interactive flashcards** - Open [tarjetas-interactivas.html](../html/tarjetas-interactivas.html)
4. **Take notes** - Especially on production engineering concepts
5. **Practice with code** - Module 2 concepts require hands-on implementation
6. **Access the official platform** - For interactive exercises and official certification
7. **Check for updates** - Anthropic products evolve rapidly

---

## 📝 Legal Notices

This material is educational content. It is provided "as is" without warranties.

For authorized information:
- Visit: [platform.claude.com/docs](https://platform.claude.com/docs)
- Anthropic official documentation
- Anthropic terms of service

Examples are illustrative and often fictitious. Mentions of companies or products do not imply affiliation or endorsement.

---

## 📈 Learning Progression

```
Module 1: Foundations
├─ Tokens, context, sampling
├─ Model options
├─ Prompting modes
└─ Technical access to Claude

    ↓

Module 2: Production
├─ Prompting craft
├─ Extended thinking
├─ Advanced tool-use
├─ Streaming and context engineering
└─ Agent construction

    ↓

Module 3: Integration
├─ Claude Code
├─ MCP
└─ Plugin architecture

    ↓

Module 4: Observability
├─ Evaluations
├─ Tracing
├─ Failure handling
└─ Security

    ↓

Module 5: Deployment
├─ Packaging
├─ Verifiability
└─ Production deployment
```

---

**Status:** ✅ English content extracted and organized, 🔄 Spanish translations in progress  
**Last Updated:** 2026-09-02  
**Format:** Markdown with UTF-8  
**License:** Anthropic educational material - See original terms

---

## 🌐 Available Versions

- [**English Version** (README.md)](README.md) - Original content in English
- [**Versión en Español** (README-es.md)](README-es.md) - Complete translation to Latin American Spanish
