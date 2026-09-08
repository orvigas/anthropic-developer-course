# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es este repositorio

Material de estudio para la certificación **Claude Certified Developer** de Anthropic, extraído
de los HTML originales de Skilljar (`raw/`) y reconstruido como: apuntes en Markdown
(`markdown/`) y una app web de práctica sin dependencias (`html/` + `assets/`), ambos en
español latinoamericano e inglés.

No hay build, ni gestor de paquetes, ni tests. Todo es HTML/CSS/JS estático servido desde
`file://`, y **es una decisión, no una omisión**: el material se abre con un doble clic, sin
instalar nada. `.claude/rules/web-stack-standard.md` §0 registra qué piezas del estándar web
aplican aquí (HTML5 semántico, BEM, Vanilla JS, CSS propio), cuáles están suspendidas
(Tailwind, Gulp, npm, `dist/`) y §8 qué tendría que pasar para reabrir esa decisión.

## Cómo ejecutar y verificar

```bash
open index.html                  # abre el selector de idioma (symlink → html/index.html)
open html/es/index.html          # entrar directo a una página concreta
python3 -m http.server 8000      # solo si necesitas probar el camino "cookie" del almacén
```

Verificación tras editar los bancos de datos (no hay suite automatizada, esto es lo que
sustituye a los tests):

```bash
# Los índices ES y EN deben coincidir uno a uno: el progreso se guarda por posición.
for f in flashcards quizzes verdadero-falso codigo emparejar ejemplos; do
  printf '%-16s ES=%s EN=%s\n' "$f" \
    "$(grep -o '{m:' assets/js/datos/es/$f.js | wc -l | tr -d ' ')" \
    "$(grep -o '{m:' assets/js/datos/en/$f.js | wc -l | tr -d ' ')"
done
```

Después abre la página afectada y mira la consola: los errores de JS son la única señal de
fallo que da esta app.

## Arquitectura

### Tres capas por idioma

Cada una de las 9 páginas carga sus scripts en este orden fijo, y el orden importa porque
todo es global (`"use strict"`, sin módulos ni bundler):

```
i18n/<lang>.js        → const T: TODOS los textos de UI, la navegación y los nombres de banco
datos/<lang>/modulos.js, totales.js   → const MODULOS, TOTALES
almacen.js            → progreso persistido (usa T.bancos, T.meses)
comun.js              → utilidades, barra de stats, nav, botón de reinicio (usa T y MODULOS)
datos/<lang>/<banco>.js → el banco de contenido de esa página
<pagina>.js           → la lógica de la vista
```

**La lógica en `assets/js/*.js` es común a los dos idiomas.** Lo único que cambia entre
`html/es/` y `html/en/` es qué `i18n/` y qué `datos/<lang>/` se cargan. Si añades texto
visible, va en `T` (`assets/js/i18n/es.js` y `en.js`), nunca escrito a mano en la lógica ni
duplicado en el HTML de una sola página.

Las entradas de `T` que dependen de números o género son **funciones** (`stats.tarjetas: n =>
...`), para que cada idioma resuelva su propia gramática.

### Bancos de contenido y el invariante de índices

Seis bancos, identificados por una letra en todo el código (`T.bancos`, `T.paginaDeBanco`):

| clave | banco | archivo de datos | página ES / EN |
|---|---|---|---|
| `t` | tarjetas | `flashcards.js` | `index.html` |
| `q` | opción múltiple | `quizzes.js` | `opcion-multiple.html` / `multiple-choice.html` |
| `f` | verdadero/falso | `verdadero-falso.js` | `verdadero-falso.html` / `true-false.html` |
| `c` | completar código | `codigo.js` | `completar-codigo.html` / `fill-in-code.html` |
| `p` | emparejar | `emparejar.js` | `emparejar.html` / `matching.html` |
| `e` | ejemplos | `ejemplos.js` | `ejemplos.html` / `examples.html` |

**Invariante crítico:** el progreso se guarda como una cadena de dígitos indexada por la
*posición* del elemento en su array. Por eso los arrays ES y EN deben tener el mismo largo y
**el mismo orden**: el elemento nº 5 tiene que ser la misma pregunta en ambos idiomas, o el
progreso de un lector que cambia de idioma queda desalineado. Insertar un elemento a mitad
de un banco invalida el progreso guardado de todos los posteriores; añade al final, o sube
`ALMACEN.version` en `assets/js/almacen.js` para descartar el progreso viejo a propósito.

Al añadir elementos, actualiza también `TOTALES` en **ambos** `datos/<lang>/totales.js`
(la barra de estadísticas de todas las páginas los lee, y cada página carga solo su banco).

### Almacén de progreso (`assets/js/almacen.js`)

Dos restricciones mandan sobre el diseño y explican por qué no es un JSON:

1. Una cookie no pasa de ~4 KB, así que cada banco se codifica como una cadena de dígitos
   (`0` sin tocar, `1` acertado, `2` a repasar) con los ceros finales recortados.
   Formato: `1|t:0102...|q:1122...|x:91@0609,78@0509`.
2. Chrome no admite cookies en `file://`, que es justamente cómo se abre este material. La
   capa prueba al arrancar si la cookie se escribe de verdad y cae sola a `localStorage`;
   `ALMACEN.medio` dice cuál quedó en uso y `descripcionDelMedio()` lo muestra al lector.

Un fallo registrado en cualquier banco (incluido el simulacro, que reetiqueta cada pregunta
con su `banco` + `i` de origen) alimenta la página «Qué reforzar» / «What to review», la
única que carga los seis bancos a la vez.

### Refuerzo (`datos/<lang>/refuerzo.js`)

Cada fallo se atribuye a un *pilar* del módulo buscando las `claves` del pilar dentro del
texto de la pregunta; si ninguna coincide, el consejo queda a nivel de módulo. Cada pilar
apunta a su `fuente` (un archivo de `markdown/`) y a su `practica` (página + qué ejercicio).
Si renombras o mueves un archivo de `markdown/`, actualiza las `fuente` de ambos idiomas.

### Diálogos del navegador

Las confirmaciones se hacen en línea, no con `confirm()` (ver `construirBotonReinicio()` en
`comun.js`): un diálogo del navegador bloquea la página entera y no deja ver qué se va a
borrar. Mantén ese criterio.

## Contenido en Markdown

`markdown/module-NN-DD-<slug>.md` — **`NN` es el número de módulo del curso, `DD` es el
número de la carpeta en `raw/`, y no coinciden.** El orden de `raw/` es el de descarga, no el
del temario:

| Módulo | archivo markdown | carpeta `raw/` |
|---|---|---|
| M1 Fundamentos MSO | `module-01-01-…` | `raw/01-mso-foundations/` |
| M2 Prompting y agentes | `module-02-04-…` | `raw/04-production-grade-promting/` |
| M3 Claude Code y MCP | `module-03-03-…` | `raw/03-mcp-integration/` |
| M4 Producción y seguridad | `module-04-02-…` | `raw/02-product-engineering-evals-security/` |
| M5 Aceleradores e IP | `module-05-05-…` | `raw/05-acceleratos-ip-contribution/` |

El sufijo `-es` marca la traducción; el archivo sin sufijo es el original en inglés. Ambas
versiones deben conservar la misma estructura de encabezados (`##` sección, `###`
sub-sección), porque es lo que permite compararlas.

`raw/` es la fuente original sin modificar — **no la edites**. `metadata/course-inventory.md`
documenta qué contiene cada carpeta de `raw/`.

## Convenciones

- **Idioma del código:** identificadores, comentarios y nombres de archivo en español
  (`tarjetas.js`, `progreso`, `marcarItem`), en las dos versiones de idioma. Solo los datos y
  los textos de `T` se traducen. Las páginas HTML en `html/en/` sí usan nombres en inglés
  (`multiple-choice.html`), mapeados desde `T.paginas`.
- **Terminología técnica:** en la versión española se usa el término en español con el
  término en inglés entre paréntesis la primera vez (*pensamiento extendido (extended
  thinking)*). Los identificadores de la API (`stop_reason`, `cache_control`,
  `tool_use`) nunca se traducen.
- **Estilos:** CSS propio, una hoja por vista en `assets/css/` más `base.css` con las custom
  properties (`--morado`, `--sombra`…). Las clases siguen **BEM en español**
  (`ejemplo__cabecera`, `tarjeta__cara--reverso`). El naming heredado del monolito aún no lo
  cumple; se migra bloque por bloque —HTML, CSS y JS en el mismo cambio— según
  `.claude/rules/web-stack-standard.md` §2. El código nuevo nace en BEM.
- **Mensajes de commit:** en español, en imperativo («Unifica la terminología técnica ES↔EN»).
- Los comentarios de este repositorio explican *por qué* una decisión es como es, no qué hace
  la línea siguiente. Mantén ese registro al editar.

## Detalles conocidos

- `index.html` de la raíz es un symlink a `html/index.html`; ese archivo inyecta un
  `<base href="html/">` cuando detecta que no se está sirviendo desde dentro de `/html/`,
  para que las rutas relativas resuelvan igual por ambos caminos.
- `markdown/README*.md` e `INDICE_RECURSOS_ESTUDIO.md` aún enlazan a
  `../html/tarjetas-interactivas.html`, el monolito del que salieron las páginas actuales.
  Ese archivo ya no existe; las cifras que citan (27 tarjetas, 11 cuestionarios) tampoco
  corresponden a los `TOTALES` actuales.
- `.codegraph/` está en `.gitignore`: es el índice local, no material del curso.
