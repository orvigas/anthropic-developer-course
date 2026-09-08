# Regla: Estándar del stack Web

## Propósito

Define el stack, la arquitectura y las prácticas obligatorias para todo el código web de
este repositorio: `html/` (páginas) y `assets/` (fuentes).

```text
/
├── html/      → páginas por idioma (html/es/, html/en/) + selector de idioma
└── assets/    → css/ y js/ — fuentes, al mismo nivel que html/
```

---

## 0. Decisión de stack para este repositorio

Esta sección es **normativa y tiene prioridad sobre el resto del documento**. Registra qué
piezas del estándar web general aplican aquí y por qué, para que la decisión no se vuelva a
litigar en cada tarea.

| Pieza | Estado | Razón |
|---|---|---|
| HTML5 semántico | **Obligatorio** | Ya se cumple; sin coste. |
| **BEM** | **Obligatorio** | Única pieza con ganancia real: el naming actual es inconsistente por herencia del monolito. |
| **Vanilla JS** | **Obligatorio** | Ya se cumple; sin frameworks ni dependencias. |
| Accesibilidad y responsive | **Obligatorio** | Ya se cumple; sin coste. |
| CSS propio con custom properties, una hoja por vista | **Vigente** | Es el mecanismo de estilos del proyecto. |
| **Tailwind CSS** | **Suspendido** | Ver §8. |
| **Gulp / npm / `dist/`** | **Suspendido** | Ver §8. |

### Por qué no hay build

El material se abre con `open index.html`, desde `file://`, **sin instalar nada**. Esa es su
razón de ser: es material de estudio, no un producto desplegado. Dos mecanismos del código
existen solo para sostener ese camino — el fallback cookie→`localStorage` de
`assets/js/almacen.js` y el `<base href="html/">` que inyecta `html/index.html`.

Introducir un build obliga a elegir entre dos males: versionar `dist/` (que se desincroniza
de `assets/` en un repo cuya actividad principal es editar datos a mano) o exigir
`npm install && npm run build` antes de estudiar (que destruye el propósito del material).

Las cifras que respaldan la decisión, medidas sobre el repo:

- CSS total: **473 líneas, 129 clases, 1 `@keyframes`, 2 `@media`** repartidas en 10 hojas.
- **Cero imágenes y cero fuentes** en `assets/` — la tipografía es el system font stack.
- El CSS ya está particionado por vista: cada página carga `base.css` + su hoja (~14 KB
  efectivos). Un bundle único de Tailwind haría que cada página cargara el CSS de todas.
- El 70% del peso del repo (340 KB) está en `assets/js/datos/`, que son datos editados a
  mano; minificarlos añadiría un paso de build a la actividad principal del proyecto y
  rompería la verificación de índices ES/EN, que hoy cuenta `{m:` sobre el fuente.

**Conclusión:** Tailwind y Gulp son técnicamente viables aquí, pero su beneficio no compensa
perder el particionado de CSS, ensuciar los template literals de JS con cadenas de utilities
y depender de una safelist para las clases que el JS construye en tiempo de ejecución (§3).

---

## 1. Stack vigente

### HTML

- HTML5 semántico; elementos semánticos siempre que sean apropiados.
- No introducir frameworks de frontend.
- No duplicar assets dentro de `html/`: las fuentes viven en `assets/`, referenciadas por
  ruta relativa (`../../assets/…`).

### CSS

- CSS propio, organizado como **una hoja por vista** más `assets/css/base.css`.
- Los colores, sombras y bordes se declaran como **custom properties en `:root`**
  (`--morado`, `--texto`, `--sombra`…) en `base.css`. No escribir literales de color en las
  hojas de vista si ya existe la variable.
- Cada página enlaza `base.css` + su hoja, en ese orden. No crear una hoja global adicional.

### JavaScript

- **Vanilla JS**, sin frameworks ni librerías (React, Vue, Angular, Svelte, Alpine, jQuery…).
- Sin bundler ni ES Modules: los scripts se cargan en orden fijo y comparten ámbito global
  (`"use strict"`). Ese orden está documentado en `CLAUDE.md`; respétalo al añadir un script.
- `const` y `let`, nunca `var`. Funciones pequeñas. APIs nativas del navegador.
- Sin manipulación innecesaria del DOM ni lógica duplicada.

---

## 2. BEM — convención obligatoria

La estructura de componentes DEBE seguir **Block Element Modifier**:

```text
.bloque
.bloque__elemento
.bloque--modificador
.bloque__elemento--modificador
```

Los nombres van **en español**, igual que el resto de los identificadores del repositorio
(ver «Idioma del código» en `CLAUDE.md`).

```html
<article class="ejemplo ejemplo--hecho">
  <div class="ejemplo__cabecera">
    <h3 class="ejemplo__titulo">Título</h3>
  </div>
  <div class="ejemplo__cuerpo">…</div>
</article>
```

### Estado de la migración

El naming actual es **inconsistente por acumulación histórica**: salió de un monolito
(`tarjetas-interactivas.html`) y conserva prefijos ad-hoc y modificadores sueltos.

| Patrón actual | Forma BEM |
|---|---|
| `rep-barra`, `rep-num`, `rep-pilar` | `repaso__barra`, `repaso__num`, `repaso__pilar` |
| `ej-head`, `ej-body`, `ejemplo.hecho` | `ejemplo__cabecera`, `ejemplo__cuerpo`, `ejemplo--hecho` |
| `flip-face.back` | `tarjeta__cara--reverso` |
| `nav-btn.ok`, `nav-btn.review` | `tarjeta__boton--acierto`, `tarjeta__boton--repasar` |
| `quiz-option.correct` | `quiz__opcion--correcta` |
| `match-item.selected/.done/.wrong` | `emparejar__item--activo/--resuelto/--error` |
| `bd-item`, `bd-mod`, `bd-val` | `desglose__item`, `desglose__modulo`, `desglose__valor` |

**Todo código nuevo debe nacer en BEM.** La migración del código existente es progresiva:
migra un bloque completo cuando trabajes sobre él, nunca a medias — un renombrado parcial
deja el CSS y el JS apuntando a nombres distintos. Cada bloque toca tres sitios a la vez:
el HTML, su hoja de `assets/css/` y los selectores del JS (`querySelector`, `classList` y
los template literals que generan markup).

---

## 3. JavaScript y BEM

El JS debe localizar elementos por **clase BEM, `id` o `data-*`**, nunca por selectores
posicionales frágiles.

Preferir:

```javascript
document.querySelector('.navegacion__toggle');
```

sobre:

```javascript
document.querySelector('#header > div:nth-child(2) > button');
```

Los **modificadores de estado** se aplican con `classList` y son parte del contrato entre CSS
y JS. Hay ~35 en el proyecto que no aparecen literales en el HTML porque el JS las construye
o las alterna: `claseDePct()` en `repaso.js`, `scoreClass()` en `comun.js`, concatenaciones
como `` `chip${i === 0 ? ' active' : ''}` ``, y las que pasan por `classList.add/toggle`
(`selected`, `done`, `wrong`, `correct`, `incorrect`, `flipped`, `abierto`, `unanswered`,
`warn`, `picked-right`, `reveal`…).

Al migrarlas a BEM, **renómbralas en el CSS, en el HTML y en el JS en el mismo cambio**.

---

## 4. CSS personalizado

Como no hay framework de utilidades, el CSS propio es el mecanismo normal, no la excepción.
Lo que sí se exige:

1. Reutilizar las custom properties de `base.css` antes de introducir un valor nuevo.
2. Reutilizar un bloque BEM existente antes de crear otro (§7).
3. Los estilos comunes a varias vistas van en `base.css`; los de una sola vista, en su hoja.
4. Nada de estilos inline salvo valores calculados en tiempo de ejecución
   (p. ej. `style="width:${pct}%"`).

---

## 5. Responsive Design

Mobile → Tablet → Desktop. Usa `@media` con moderación: el layout actual resuelve casi todo
con `flex-wrap`, `grid-template-columns: repeat(auto-fit, …)` y `max-width`, y solo necesita
2 media queries en todo el proyecto. Prefiere layouts que no requieran breakpoint.

---

## 6. Accesibilidad

Todo HTML nuevo debe considerar, como mínimo:

- HTML semántico y `label` asociados correctamente.
- `alt` apropiado en imágenes.
- Navegación por teclado y estados `:focus` visibles.
- Botones reales para acciones, enlaces reales para navegación.
- ARIA únicamente cuando sea necesario.

**Nada de diálogos del navegador.** Las confirmaciones se hacen en línea (ver
`construirBotonReinicio()` en `assets/js/comun.js`): un `confirm()` bloquea la página entera
y no deja ver qué se va a borrar.

---

## 7. Reutilización

Antes de crear un bloque nuevo:

1. Busca un bloque BEM existente que sirva.
2. Reutilízalo; evita variantes innecesarias.
3. Evita duplicar HTML y lógica JS entre las dos versiones de idioma — **la lógica de
   `assets/js/*.js` es común a ES y EN**, y el texto visible va en `T` (`assets/js/i18n/`),
   nunca escrito a mano en la lógica ni en el HTML de una sola página.

---

## 8. Cuándo reabrir la decisión sobre Tailwind y Gulp

La suspensión de §0 es una decisión medida sobre el estado actual, no un veto permanente.
**Reabre la evaluación cuando se cumpla alguno de estos disparadores:**

**Tailwind**
- El CSS supera ~1.500 líneas o las hojas por vista empiezan a duplicar reglas entre sí.
- Aparece un requisito de tema (modo oscuro, temas por idioma) o una escala tipográfica seria.
- El proyecto deja de servirse desde `file://`.

**Gulp (o cualquier build)**
- Entran imágenes o fuentes en `assets/` — hoy no hay ninguna, y es el argumento principal.
- El peso de la app pasa a importar para el lector final.
- Aparece un despliegue real (hosting), no solo `open index.html`.

Cuando llegue ese momento, la vía de menor daño es en este orden: **primero completar BEM**,
luego Tailwind vía `@apply` sobre las clases BEM ya estables (así el JS nunca toca utilities
y la purga es trivial), y `dist/` versionado con una verificación que falle si está
desactualizado. Gulp, solo cuando exista un asset que procesar.

**No adelantes ninguno de estos pasos sin que se haya cumplido un disparador.**

---

## 9. Prohibición de introducir dependencias

No introduzcas frameworks, bundlers, librerías de frontend ni gestores de paquetes.
El proyecto **no tiene `package.json`, y esa es la intención** (§0).

Antes de proponer cualquier dependencia:

1. Verifica si se resuelve con Vanilla JS o CSS propio.
2. Evalúa el impacto sobre el camino `file://` sin instalación.
3. Solo entonces plantéalo al usuario — no la agregues por iniciativa propia.

---

## 10. Validación

No hay suite automatizada; esto la sustituye. Tras cambios en `html/` o `assets/`:

- **Abre la página afectada en el navegador y mira la consola.** Los errores de JS son la
  única señal de fallo que da esta app.
- Comprueba que el cambio se ve igual por los dos caminos: `open index.html` (symlink con
  `<base href>` inyectado) y `open html/es/index.html`.
- Verifica **ambos idiomas**: `html/es/` y `html/en/` comparten la lógica y el CSS.
- Si tocaste bancos de datos, corre la comprobación de índices ES/EN de `CLAUDE.md`.
- Confirma que no quedaron clases huérfanas tras un renombrado BEM: una clase en el CSS que
  ya nadie usa, o una en el JS que ya no existe en el CSS.

---

## 11. Principio de mínima modificación

```text
HTML          → estructura y semántica
BEM           → identidad y organización de componentes
CSS propio    → presentación y responsive, sobre custom properties
Vanilla JS    → comportamiento e interacción
assets/       → fuentes, servidas tal cual
```

Modifica únicamente lo necesario. No refactorices un módulo entero ni hagas cambios
cosméticos que la tarea no pidió. El objetivo es un frontend **simple, predecible, portable
y ligero**, que siga abriéndose con un doble clic.
