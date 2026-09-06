# Curso Certificado de Desarrollador Claude

**Índice Completo y Detallado del Curso**

Material educativo extraído de los archivos locales del curso Certificado de Desarrollador Claude.

---

## 📚 Información del Curso

- **Plataforma origen:** Skilljar (Anthropic)
- **Formato:** Material interactivo HTML/JavaScript
- **Módulos:** 5 módulos progresivos
- **Duración aproximada:** ~530 minutos (8.8 horas)
- **Nivel:** Desarrollador/Ingeniero
- **Fecha de extracción:** 2026-09-02
- **Tamaño total de contenido:** ~432 KB en Markdown
- **Idiomas disponibles:** Inglés, Español Latinoamericano

---

## 📖 Módulos del Curso

### Módulo 1: Fundamentos de MSO
**Conceptos fundamentales del modelo y arquitectura técnica**

- **Archivo (Inglés):** [`module-01-01-mso-foundations.md`](module-01-01-mso-foundations.md)
- **Archivo (Español):** [`module-01-01-mso-foundations-es.md`](module-01-01-mso-foundations-es.md)
- **Tamaño:** 24 KB | 141 líneas
- **Duración:** ~59 minutos | 9 pantallas
- **Secciones:** 6
- **Checkpoints:** 2
- **Origen:** `raw/01-mso-foundations/`

**Temas cubiertos:**
1. Orientación - Qué aprenderás
2. Comportamiento de LLM - Tokens, contexto, muestreo, no-determinismo
3. Opciones de modelos y modos de razonamiento
4. Modos de prompting (zero-shot, one-shot, multi-shot)
5. Sustrato técnico - SDKs, REST, streaming, async
6. Resumen y conclusiones

**Conceptos clave:**
- Tokens como unidad de entrada, salida y costo
- Ventana de contexto como presupuesto fijo
- Muestreo y no-determinismo en generación
- Familia de modelos Claude (Fable, Opus, Sonnet, Haiku)
- Modos de razonamiento separados de selección de modelo
- Patrones de acceso a Claude: SDK vs REST, síncrono vs streaming, async

---

### Módulo 2: Prompting Avanzado para Producción, Agentes y Uso de Herramientas
**Prompting avanzado, agentes e integración de herramientas en producción**

- **Archivo (Inglés):** [`module-02-04-production-grade-promting.md`](module-02-04-production-grade-promting.md)
- **Archivo (Español):** `module-02-04-production-grade-promting-es.md` *(En traducción)*
- **Tamaño:** 144 KB | 783 líneas
- **Duración:** ~209 minutos | 29 pantallas
- **Secciones:** 10
- **Checkpoints:** 9
- **Origen:** `raw/04-production-grade-promting/`

**Temas cubiertos:**
1. Orientación - Usando Claude en producción
2. Craft de Prompting - System prompts, XML, few-shot, output constraints
3. Extended Thinking - Razonamiento, calibración de esfuerzo
4. Tool-use y Schema Design - Definición, loops, patrones de llamada
5. Streaming Responses - Consumo de respuestas streameadas
6. Context Engineering - Gestión de ventana de contexto
7. Agent Construction - Construcción de agentes productivos
8. Agent Memory - Persistencia y scope de memoria
9. Multimodal & Batch Ingestion - Imágenes, PDFs, API de lotes
10. Resumen y conclusiones

**Conceptos clave:**
- Cuatro técnicas de prompting: system prompt, XML, few-shot, output constraints
- Diagnosing fallos: formato, contenido, estructura, edge cases
- Structured outputs para garantizar validez de schema
- Razonamiento adaptativo y control de esfuerzo
- Anatomía de schemas: nombre, descripción, input_schema
- Bloques de mensajes: text, tool_use, tool_result, thinking
- Looping de tool-use: definir → enviar → ejecutar → retornar → continuar
- Streaming con recuperación de interrupciones
- Técnicas de context engineering
- Patrones de agent construction (workflow vs agent)
- Scope de memoria: sesión, usuario, global

---

### Módulo 3: Claude Code, MCP e Integración
**Integración mediante Claude Code y Model Context Protocol**

- **Archivo (Inglés):** [`module-03-03-mcp-integration.md`](module-03-03-mcp-integration.md)
- **Archivo (Español):** `module-03-03-mcp-integration-es.md` *(En traducción)*
- **Tamaño:** 100 KB | 641 líneas
- **Duración:** ~142 minutos
- **Secciones:** 8+
- **Origen:** `raw/03-mcp-integration/`

**Temas cubiertos (esperados):**
- Introducción a Claude Code
- Model Context Protocol (MCP)
- Implementación de clientes MCP
- Integración de servidores MCP
- Permisología y contexto de proyecto
- Empaquetamiento de plugins
- Manejo de credenciales y seguridad
- Integración end-to-end

**Conceptos clave:**
- MCP como capa de comunicación estándar
- Transporte: stdio vs HTTP remoto
- Permisos en modo proyecto
- Almacenamiento durable de contexto
- Empaquetamiento de plugins
- Frontera de confianza

---

### Módulo 4: Ingeniería de Producción, Evaluaciones y Seguridad
**Evaluaciones, observabilidad y seguridad en producción**

- **Archivo (Inglés):** [`module-04-02-product-engineering-evals-security.md`](module-04-02-product-engineering-evals-security.md)
- **Archivo (Español):** `module-04-02-product-engineering-evals-security-es.md` *(En traducción)*
- **Tamaño:** 100 KB | 588 líneas
- **Duración:** ~211 minutos
- **Secciones:** 8+
- **Origen:** `raw/02-product-engineering-evals-security/`

**Temas cubiertos (esperados):**
- Marco de evaluaciones (Evals)
- Métricas de desempeño
- Tracing y observabilidad
- Manejo de fallos
- Presupuestos de costo
- Presupuestos de latencia
- Orquestación
- Límites de seguridad que funcionan en producción

**Conceptos clave:**
- Evals como estándar de verificación
- Model-graded judges
- Tracing de requests end-to-end
- Failure modes y recovery
- Cost budgets y estimación
- Latency optimization
- Security boundaries

---

### Módulo 5: Aceleradoras y Contribución de IP
**Aceleradoras, contribuciones verificables y deployment**

- **Archivo (Inglés):** [`module-05-05-acceleratos-ip-contribution.md`](module-05-05-acceleratos-ip-contribution.md)
- **Archivo (Español):** `module-05-05-acceleratos-ip-contribution-es.md` *(En traducción)*
- **Tamaño:** 64 KB | 482 líneas
- **Duración:** ~139 minutos
- **Secciones:** 6+
- **Origen:** `raw/05-acceleratos-ip-contribution/`

**Temas cubiertos (esperados):**
- Empaquetamiento de aceleradoras
- Preparación de contribuciones verificables
- Plataformas de deployment
- Marcación de fronteras de confianza
- Versionado y distribución
- Modelos de negocio

**Conceptos clave:**
- Acelerador como unidad empaquetada
- Verificabilidad de contribuciones
- Selección de plataforma de deployment
- Trust boundaries y seguridad
- Distribución y versionado

---

## 🎓 Cómo usar estos materiales

### Estructura de archivos
```
markdown/
├── README.md                                              (Descripción en inglés)
├── README-es.md                                           (Descripción en español)
├── module-01-01-mso-foundations.md                       (Módulo 1 - Inglés)
├── module-01-01-mso-foundations-es.md                    (Módulo 1 - Español)
├── module-02-04-production-grade-promting.md             (Módulo 2 - Inglés)
├── module-02-04-production-grade-promting-es.md          (Módulo 2 - Español)
├── module-03-03-mcp-integration.md                       (Módulo 3 - Inglés)
├── module-03-03-mcp-integration-es.md                    (Módulo 3 - Español)
├── module-04-02-product-engineering-evals-security.md    (Módulo 4 - Inglés)
├── module-04-02-product-engineering-evals-security-es.md (Módulo 4 - Español)
├── module-05-05-acceleratos-ip-contribution.md           (Módulo 5 - Inglés)
└── module-05-05-acceleratos-ip-contribution-es.md        (Módulo 5 - Español)
```

### Recomendaciones de lectura

1. **Orden secuencial:** Los módulos están diseñados progresivamente. Comienza con Módulo 1 y avanza secuencialmente.

2. **Estudio independiente:** Cada módulo es relativamente independiente después del Módulo 1. Puedes saltar a un tema específico si ya dominas los fundamentos.

3. **Referencia rápida:** Usa el índice de este README para encontrar temas específicos dentro de cada módulo.

4. **Profundización:** Para conceptos complejos (tool-use, streaming, agent loops), lee múltiples veces ya que el contenido es técnico.

5. **Elección de idioma:** Elige entre la versión en inglés (original) o en español latinoamericano según tu preferencia.

---

## ⚠️ Nota sobre Contenido Incompleto

Este material se ha extraído de archivos HTML estáticos. Algunos elementos interactivos no están disponibles en formato Markdown:

### Contenido no disponible localmente:
- ❌ Ejercicios interactivos
- ❌ Cuestionarios con validación
- ❌ Simulaciones de código
- ❌ Evaluaciones calificadas
- ❌ Videos demostraciones
- ❌ Elementos JavaScript dinámicos
- ❌ Recursos externos que requieren autenticación
- ❌ Feedback en tiempo real

### Contenido disponible:
- ✅ Lecciones y explicaciones
- ✅ Ejemplos de código (ejemplos estáticos)
- ✅ Tablas y diagramas
- ✅ Descripciones de conceptos
- ✅ Notas y advertencias
- ✅ Estructura y navegación

---

## 📊 Estadísticas de Contenido

| Métrica | Valor |
|---------|-------|
| **Módulos totales** | 5 |
| **Archivos Markdown** | 12 (6 módulos + 2 README + 4 adicionales) |
| **Tamaño total** | ~432 KB (solo contenido en inglés) |
| **Líneas de contenido** | ~2,635 (solo contenido en inglés) |
| **Pantallas/Lecciones** | 29+ |
| **Secciones temáticas** | 38+ |
| **Checkpoints/Evaluaciones** | 25+ |
| **Duración estimada** | ~530 minutos |
| **Idiomas disponibles** | 2 (Inglés, Español Latinoamericano) |

---

## 🔍 Búsqueda y Navegación

### Por tema técnico:

**Tokens y Contexto:**
- Módulo 1: "Tokens: the unit of input, output, and cost"
- Módulo 1: "The context window: a fixed budget"

**Prompting:**
- Módulo 2: "System prompts, XML, few-shot, and output constraints"
- Módulo 2: "Four techniques that give Claude a reliable output shape"

**Tool-use:**
- Módulo 2: "Tool Schemas Claude Selects Correctly"
- Módulo 2: "How the tool-use loop works"
- Módulo 2: "Message block structure in a tool-use conversation"

**Streaming:**
- Módulo 2: "Streaming Responses"

**Agentes:**
- Módulo 2: "Agent Construction"
- Módulo 2: "Agent Memory"

**Seguridad e Integración:**
- Módulo 3: "MCP Integration"
- Módulo 4: "Production Engineering & Security"

### Por tipo de contenido:

**Explicaciones conceptuales:**
- Todas las secciones "Teaching"

**Casos de uso:**
- Secciones "Scenario" y "Watch Out"

**Verificación de conocimiento:**
- Secciones "Checkpoint" y "Quiz"

---

## 💾 Fuente y Metadatos

- **Directorio de origen:** `/raw/`
- **Plataforma LMS:** Skilljar (Anthropic)
- **Formato de fuente:** HTML con estilos embebidos + JavaScript compilado
- **Herramienta de extracción:** Script Python personalizado con parser HTML
- **Fecha de extracción:** 2026-09-02
- **Método:** Análisis estático de archivos locales (sin acceso remoto)
- **Integridad:** No se han modificado archivos originales
- **Traducciones:** Realizadas por interprete profesional al español latinoamericano
- **Certificación de traducción:** Traducción completa de alta calidad técnica y académica

---

## 📚 Recursos de Estudio para Certificación

### 🎯 Guía Integral de Preparación

- **[ESTUDIO-CERTIFICACION-ANTHROPIC.md](ESTUDIO-CERTIFICACION-ANTHROPIC.md)** - Guía completa de estudio para el examen de certificación
  - Conceptos clave comprimidos por módulo
  - Mnemotecnia (T.C.M.S, P.E.S.A, etc.)
  - Tarjetas de estudio para memorización rápida
  - Cuestionarios basados en contenido oficial
  - Tablas de referencia para decisiones prácticas
  - Checklist de autoevaluación
  - Los 10 errores más costosos

### 🃏 Herramienta Interactiva

- **[tarjetas-interactivas.html](../html/tarjetas-interactivas.html)** - Aplicación web interactiva
  - 27 tarjetas de estudio con flip animation
  - Función de mezcla aleatoria
  - 11 cuestionarios de práctica
  - Rastreador de progreso
  - Resumen de resultados
  - Disponible sin conexión

### 📖 Cómo Estudiar con Estos Recursos

**Opción 1: Revisión Rápida (15 minutos)**
1. Lee la Mnemotecnia de cada módulo en la guía
2. Repasa tarjetas de estudio (1 min cada una)
3. Responde 3 cuestionarios rápidos

**Opción 2: Estudio Profundo (2-3 horas)**
1. Lee cada sección de la guía completa
2. Toma notas en tus propias palabras
3. Completa todos los cuestionarios
4. Intenta enseñar conceptos a otra persona

**Opción 3: Preparación Final (día anterior)**
1. Repasa Mnemotecnia y tarjetas (30 min)
2. Haz cuestionario de práctica (30 min)
3. Revisa los 10 errores más costosos
4. Descansa, no sobre-estudies

---

## 🚀 Próximos Pasos

Para completar tu formación como Claude Developer Certified:

1. **Lee los módulos en orden** - Cada uno construye sobre el anterior
2. **Usa la guía de estudio** - Consulta [ESTUDIO-CERTIFICACION-ANTHROPIC.md](ESTUDIO-CERTIFICACION-ANTHROPIC.md)
3. **Practica con tarjetas interactivas** - Abre [tarjetas-interactivas.html](../html/tarjetas-interactivas.html)
4. **Toma notas** - Especialmente sobre conceptos de production engineering
5. **Practica con código** - Los conceptos de Módulo 2 requieren implementación práctica
6. **Accede a la plataforma oficial** - Para ejercicios interactivos y certificación oficial
7. **Verifica actualizaciones** - Los productos de Anthropic evolucionan rápidamente

---

## 📝 Avisos Legales

Este material es contenido educativo. Se proporciona "tal como está" sin garantías. 

Para información autorizada:
- Visite: [platform.claude.com/docs](https://platform.claude.com/docs)
- Documentación oficial de Anthropic
- Términos de servicio de Anthropic

Los ejemplos son ilustrativos y a menudo ficticios. Las menciones de empresas o productos no implican afiliación o respaldo.

---

## 📈 Progresión de Aprendizaje

```
Módulo 1: Fundamentos
├─ Tokens, contexto, muestreo
├─ Opciones de modelo
├─ Modos de prompting
└─ Acceso técnico a Claude

    ↓

Módulo 2: Producción
├─ Craft de prompting
├─ Extended thinking
├─ Tool-use avanzado
├─ Streaming y context engineering
└─ Construcción de agentes

    ↓

Módulo 3: Integración
├─ Claude Code
├─ MCP
└─ Arquitectura de plugins

    ↓

Módulo 4: Observabilidad
├─ Evaluaciones
├─ Tracing
├─ Manejo de fallos
└─ Seguridad

    ↓

Módulo 5: Deployment
├─ Empaquetamiento
├─ Verificabilidad
└─ Production deployment
```

---

**Estado:** ✅ Contenido extraído y organizado (Inglés), 🔄 Traducciones en progreso (Español Latinoamericano)  
**Última actualización:** 2026-09-02  
**Formato:** Markdown con UTF-8  
**Licencia:** Material educativo de Anthropic - Véase términos originales

---

## 🌐 Versiones Disponibles

- [**English Version** (README.md)](README.md) - Contenido original en inglés
- [**Versión en Español** (README-es.md)](README-es.md) - Traducción completa al español latinoamericano
