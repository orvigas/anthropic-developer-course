# Inventario del Curso Claude Certified Developer

**Fecha de análisis:** 2026-09-02  
**Directorio base:** `/raw/`  
**Total de archivos:** 146  
**Total de módulos:** 5

---

## 📋 Estructura General

La estructura del curso es consistente y modular. Cada módulo se presenta como un archivo HTML principal que funciona como contenedor y una carpeta asociada (`_files`) con todos los recursos necesarios (hojas de estilos, scripts, imágenes y contenido).

```
raw/
├── 01-mso-foundations/
│   ├── MSO Foundations.html                    (Contenedor principal)
│   └── MSO Foundations_files/                  (Recursos del módulo)
├── 02-product-engineering-evals-security/
│   ├── Production Engineering, Evals & Security.html
│   └── Production Engineering, Evals & Security_files/
├── 03-mcp-integration/
│   ├── Claude Code, MCP & Integration.html
│   └── Claude Code, MCP & Integration_files/
├── 04-production-grade-promting/
│   ├── Production-Grade Prompting, Agents & Tool Use.html
│   └── Production-Grade Prompting, Agents & Tool Use_files/
└── 05-acceleratos-ip-contribution/
    ├── Accelerators & IP Contribution.html
    └── Accelerators & IP Contribution_files/
```

---

## 📚 Módulos Identificados

### Módulo 1: MSO Foundations
- **Directorio:** `01-mso-foundations/`
- **Tamaño:** ~3.3 MB
- **Archivos:** 29
- **Título:** MSO Foundations
- **Descripción:** Fundamentos de Model-System-Optimization

**Archivos principales:**
- `MSO Foundations.html` - Contenedor SCORM
- `MSO Foundations_files/Developer_M1_vF2.html` - Contenido educativo interactivo con estilos embebidos
- `MSO Foundations_files/1zuxexjatih0p.html` - Aplicación web compilada (JavaScript/HTML minificado)

---

### Módulo 2: Production Engineering, Evals & Security
- **Directorio:** `02-product-engineering-evals-security/`
- **Tamaño:** ~3.4 MB
- **Archivos:** 29
- **Título:** Production Engineering, Evals & Security
- **Descripción:** Ingeniería en producción, evaluaciones y seguridad

**Archivos principales:**
- `Production Engineering, Evals & Security.html` - Contenedor SCORM
- `Production Engineering, Evals & Security_files/Developer_M4_vF2.html` - Contenido educativo interactivo
- `Production Engineering, Evals & Security_files/1twknqoor0w46.html` - Aplicación web compilada

---

### Módulo 3: Claude Code, MCP & Integration
- **Directorio:** `03-mcp-integration/`
- **Tamaño:** ~3.4 MB
- **Archivos:** 29
- **Título:** Claude Code, MCP & Integration
- **Descripción:** Integración de Claude Code y MCP (Model Context Protocol)

**Archivos principales:**
- `Claude Code, MCP & Integration.html` - Contenedor SCORM
- `Claude Code, MCP & Integration_files/Developer_M3_vF2.html` - Contenido educativo interactivo
- `Claude Code, MCP & Integration_files/173ln01ww7hgd.html` - Aplicación web compilada

---

### Módulo 4: Production-Grade Prompting, Agents & Tool Use
- **Directorio:** `04-production-grade-promting/`
- **Tamaño:** ~3.6 MB
- **Archivos:** 29
- **Título:** Production-Grade Prompting, Agents & Tool Use
- **Descripción:** Técnicas avanzadas de prompting en producción, agentes y uso de herramientas

**Archivos principales:**
- `Production-Grade Prompting, Agents & Tool Use.html` - Contenedor SCORM
- `Production-Grade Prompting, Agents & Tool Use_files/Developer_M2_vF2.html` - Contenido educativo interactivo
- `Production-Grade Prompting, Agents & Tool Use_files/3k33sihfb1tww.html` - Aplicación web compilada

---

### Módulo 5: Accelerators & IP Contribution
- **Directorio:** `05-acceleratos-ip-contribution/`
- **Tamaño:** ~3.4 MB
- **Archivos:** 29
- **Título:** Accelerators & IP Contribution
- **Descripción:** Aceleradoras y contribución de propiedad intelectual

**Archivos principales:**
- `Accelerators & IP Contribution.html` - Contenedor SCORM
- `Accelerators & IP Contribution_files/Developer_M5_vF2.html` - Contenido educativo interactivo
- `Accelerators & IP Contribution_files/1gpfepjydcsjm.html` - Aplicación web compilada

---

## 📂 Inventario Detallado de Recursos

### Archivos por Tipo (en cada carpeta `_files`)

**HTML (3 por módulo):**
1. `Developer_M[N]_vF2.html` - Contenido del curso con estilos CSS embebidos
   - Estructura: Interfaz educativa con sidebar de navegación, área de contenido principal
   - Contiene: Títulos, objetivos, secciones temáticas, etiquetas de progreso
   - Estilos incluidos: Tokens de marca Anthropic (colores, tipografía)
   - Tamaño aproximado: 96-100 KB

2. `[ID aleatorio].html` - Aplicación web compilada (bundle JavaScript/React minificado)
   - Ejemplos: `1zuxexjatih0p.html`, `1twknqoor0w46.html`, `173ln01ww7hgd.html`, etc.
   - Contenido: JavaScript compilado y HTML de bootstrapping para aplicación interactiva
   - Tamaño aproximado: 70-80 KB

3. `saved_resource.html` - Archivo de referencia mínimo
   - Contenido: Pequeño bootstrap HTML (~1.1 KB)
   - Propósito: Recurso de backup o referencia

**JavaScript (15-16 por módulo):**
- `index.9d2fb9f7ac84.js` - Bundle principal de la aplicación (~356 KB, minificado)
- `jquery-3.7.min.96f75983395e.js` - Librería jQuery (~86 KB)
- `sanitize-html.8c542bd581c3.js` - Sanitización de HTML (~183 KB)
- `modernizr.min.026065b74e62.js` - Detección de características del navegador (~90 KB)
- `plugins.min.0a4b763b37fa.js` - Plugins (~92 KB)
- `scripts.min.b2481308ca5e.js` - Scripts personalizados (~22 KB)
- `prism.15b0a331cd32.js` - Resaltado de sintaxis (~39 KB)
- `widget-sdk.js` - SDK de widgets (~17 KB)
- `api-service.f69996feead0.js` - Servicio API (~3 KB)
- `analytics.js` - Analytics (~52 KB)
- `scorm-content.c6c6afeeed77.js` - Integración SCORM (~16 KB)
- `lesson.97bc810e9180.js` - Lógica de lecciones (~7 KB)
- `coursePlatformSessionInactivity.b63622bc1b80.js` - Control de inactividad (~7 KB)
- `lesson-session-time-collector.7f3ec0571216.js` - Recopilador de tiempo (~2 KB)
- `page-lifecycle.es5.b837a2a2bc25.js` - Ciclo de vida de página (~4 KB)
- `isMobile.min.1b752e86c43f.js` - Detección de dispositivo móvil (~1.8 KB)

*Nota: La mayoría de archivos JS son compartidos entre módulos (hashes idénticos)*

**CSS (2-3 por módulo):**
- `sj_course_platform_v2.30fa1c521af7.css` - Estilos principales (~183 KB, minificado)
- `1y5v9mdh7gf8v.css` - Estilos personalizados (~7.9 KB)
- `prism.47d40f251583.css` - Estilos para resaltado de sintaxis (~2.5 KB)
- `css2` y `css2(1)` - Referencias a Google Fonts (~1.5 KB cada)

**Imágenes (2 por módulo):**
- `568e9ebcf56a8d3378a58e5b471749d4.png` - Icono pequeño (32×32 px, PNG)
- `header-logo.1770138194.png` - Logo de encabezado (1140×128 px, PNG)

**Otros:**
- `pdfobject.min.ad30e3f7a310.js` - Visor de PDF (~3.8 KB)
- `js` - Archivo de referencia JavaScript/metadata (~8.3 KB)

---

## 🎓 Contenido por Módulo

### Módulo 1: Foundations (Developer_M1_vF2.html)
**Estructura identificada:**
- Interfaz con sidebar de navegación
- Sistema de progreso visual
- Secciones temáticas numeradas
- Sistema de etiquetas: `tag-teaching`, `tag-checkpoint`, `tag-exercise`, `tag-quiz`
- Listas de objetivos de aprendizaje
- Paneles de escenarios ("scenario"), callouts, y observaciones
- Términos tooltips interactivos
- Soporte para contenido multimedia

**Tecnologías:**
- Tipografía: Poppins (encabezados), Lora (cuerpo), JetBrains Mono (código)
- Tokens de color de marca Anthropic (primario: #d97757)
- Diseño responsivo con breakpoints móvil

---

## 📊 Análisis de Contenido

### Contenido Cargado Estáticamente
✅ **HTML con estilos embebidos** - Completamente disponible
- Los archivos `Developer_M*.html` contienen toda la estructura y estilos necesarios
- Pueden procesarse sin dependencias externas

### Contenido Cargado Dinámicamente
⚠️ **Aplicaciones interactivas** - Dependencia de JavaScript compilado
- Los archivos HTML aleatorios contienen JavaScript compilado que se ejecuta en el navegador
- Requieren análisis con herramientas de descompilación o ejecución en navegador
- Probable contenido interactivo: cuestionarios, ejercicios, simulaciones

### Contenido No Disponible Localmente
❌ **Recursos remotos:**
- Google Fonts (tipografía externa)
- APIs de la plataforma Skilljar (sin credenciales disponibles)
- Imágenes o recursos vinculados desde servidores externos

---

## 🔍 Limitaciones y Observaciones

### Archivos Vacíos o Incompletos
- **`js`** - Archivo de referencia que parece ser un placeholder o metadata
- **`css2` y `css2(1)`** - Referencias a hojas de estilos externas (Google Fonts)

### Contenido Dinamizado
1. **JavaScript compilado y minificado:**
   - Los archivos HTML con nombres aleatorios (`1zuxexjatih0p.html`, etc.) contienen bundles de webpack/bundler
   - Requieren ejecución en navegador para acceder al contenido real
   - Decompilación no es viable sin tooling especializado

2. **SCORM Integration:**
   - Los archivos principales heredan de plataforma SCORM (Skilljar)
   - Contienen referencias a APIs de sesión y tracking
   - Requieren contexto de plataforma para funcionalidad completa

3. **Dependencias de estado:**
   - El contenido de lecciones probablemente dependa de:
     - Autenticación de usuario (no disponible)
     - Estado de progreso almacenado en servidor
     - Datos de sesión de la plataforma

---

## 💡 Recomendaciones de Procesamiento

### Para Extraer Contenido Educativo

**✅ VIABLE - Contenido HTML con estilos:**
1. Procesar archivos `Developer_M*.html` directamente
2. Extraer la estructura HTML de las secciones de contenido
3. Preservar estilos CSS embebidos
4. Generar Markdown manteniendo jerarquía de encabezados
5. Convertir etiquetas personalizadas (`<div class="tag-*">`) a notación Markdown

**⚠️ PARCIALMENTE VIABLE - JavaScript compilado:**
1. Ejecutar archivos HTML aleatorios en navegador (Puppeteer/Playwright)
2. Capturar el DOM renderizado después de ejecutar JavaScript
3. Extraer contenido del DOM
4. Limitación: No se puede acceder sin contexto de autenticación

**❌ NO VIABLE - Recursos externos:**
1. APIs de Skilljar (requieren credenciales)
2. Contenido dinámico de servidor
3. Sesiones de usuario autenticadas

---

## 📈 Estadísticas de Recursos

| Métrica | Valor |
|---------|-------|
| **Total de módulos** | 5 |
| **Archivos por módulo** | 29 |
| **Total de archivos** | 146 |
| **Tamaño total** | ~17.1 MB |
| **Tamaño promedio por módulo** | ~3.4 MB |
| **Archivos HTML** | 15 (3 por módulo) |
| **Archivos JavaScript** | ~80 (16 por módulo, con duplicados) |
| **Archivos CSS** | ~15 (3 por módulo, con duplicados) |
| **Imágenes PNG** | 10 (2 por módulo) |
| **Otros** | 6 |

---

## 🎯 Próximos Pasos Sugeridos

### Fase 1: Análisis Estático (sin dependencias)
- [ ] Procesar todos los archivos `Developer_M*.html`
- [ ] Extraer estructura de contenido
- [ ] Generar tabla de contenidos global
- [ ] Documentar lecciones y objetivos

### Fase 2: Análisis Dinámico (con navegador)
- [ ] Lanzar navegador headless
- [ ] Ejecutar archivos HTML compilados
- [ ] Capturar DOM renderizado
- [ ] Extraer contenido interactivo

### Fase 3: Generación de Documentación
- [ ] Convertir a Markdown
- [ ] Crear índice del curso
- [ ] Generar documentos separados por módulo
- [ ] Preservar referencias cruzadas

### Fase 4: Estructuración de Recursos
- [ ] Organizar archivos de salida por módulo
- [ ] Vincular imágenes correctamente
- [ ] Crear índice navegable
- [ ] Validar integridad de referencias

---

## 📝 Notas Técnicas

- **Plataforma origen:** Skilljar (LMS empresarial de Anthropic)
- **Tecnología de frente:** React/Vue compilado con webpack
- **Versiones de librería detectadas:**
  - jQuery 3.7.0
  - Modernizr (última)
  - Prism (resaltado de sintaxis)
- **Patrón de contenido:** Single Page Application (SPA) embebida en HTML
- **Encoding:** UTF-8 con CRLF/LF mixto
- **Diseño:** Responsive con soporte móvil

---

**Estado:** ✅ Inventario completado  
**Última actualización:** 2026-09-02  
**Acceso:** No requiere autenticación remota (archivos locales)
