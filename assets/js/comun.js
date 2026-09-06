/* Utilidades compartidas: almacén de progreso, filtros y navegación
   Extraído de tarjetas-interactivas.html · Certificación Anthropic */

"use strict";

/* =========================================================================
   UTILIDADES
   ========================================================================= */

const $ = (id) => document.getElementById(id);
const shuffled = (arr) => {
    const c = arr.slice();
    for (let i = c.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [c[i], c[j]] = [c[j], c[i]];
    }
    return c;
};

/* El progreso vive en almacen.js (cookie con respaldo en localStorage).
   Aquí solo se consume: `progreso`, marcarItem(), registrarResultado()... */

function scoreClass(pct) {
    if (pct >= 90) return 'excellent';
    if (pct >= 75) return 'good';
    if (pct >= 60) return 'needs-improvement';
    return 'poor';
}
function scoreMessage(pct) {
    if (pct >= 90) return T.score.excelente;
    if (pct >= 75) return T.score.bien;
    if (pct >= 60) return T.score.encaminado;
    return T.score.insuficiente;
}
function renderBreakdown(porModulo) {
    return Object.keys(MODULOS).filter(k => porModulo[k]).map(k => {
        const d = porModulo[k];
        const pct = Math.round(d.ok / d.total * 100);
        return `<div class="bd-item"><div class="bd-mod">${k}</div>
                <div class="bd-val" style="color:var(--${pct>=75?'verde':pct>=50?'ambar':'rojo'})">${pct}%</div>
                <div style="font-size:.78em;color:var(--texto-suave)">${d.ok}/${d.total}</div></div>`;
    }).join('');
}
/* Total de elementos marcados para repasar en todos los bancos. */
function totalPorRepasar() {
    return Object.keys(BANCOS).reduce((n, b) => n + conteoBanco(b).mal, 0);
}

function actualizarStatsGlobales() {
    const dominadas = conteoBanco('t').ok;
    const repasar = totalPorRepasar();
    const ultimo = progreso.x.length ? progreso.x[progreso.x.length - 1].pct + '%' : '—';
    $('global-stats').innerHTML =
        `<span>${T.stats.tarjetas(TOTALES.tarjetas)}</span>` +
        `<span>${T.stats.preguntas(TOTALES.preguntas)}</span>` +
        `<span>${T.stats.ejemplos(TOTALES.ejemplos)}</span>` +
        `<span>${T.stats.dominadas(dominadas)}</span>` +
        `<span class="stat-repaso${repasar ? ' hay' : ''}">${T.stats.porRepasar(repasar)}</span>` +
        `<span>${T.stats.ultimo(ultimo)}</span>`;
}

/* Construye una fila de chips de filtro por módulo. */
function construirFiltros(contenedorId, onChange) {
    const cont = $(contenedorId);
    const claves = ['TODOS', ...Object.keys(MODULOS)];
    cont.innerHTML = claves.map((k, i) =>
        `<button class="chip${i === 0 ? ' active' : ''}" data-mod="${k}">${k === 'TODOS' ? T.filtroTodos : k}</button>`
    ).join('');
    cont.addEventListener('click', (ev) => {
        const btn = ev.target.closest('.chip');
        if (!btn) return;
        cont.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        onChange(btn.dataset.mod);
    });
}

function marcarHueco(code) {
    return code
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/____/g, '<span class="blank">____</span>');
}

function escaparCodigo(txt) {
    return txt.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* =========================================================================
   NAVEGACIÓN
   Se genera aquí para que las ocho páginas compartan una sola definición.
   ========================================================================= */
const PAGINAS = T.paginas;

function construirNav(actual) {
    $('tab-nav').innerHTML = PAGINAS.map(p =>
        p.id === actual
            ? `<span class="tab-btn active">${p.etiqueta}</span>`
            : `<a class="tab-btn" href="${p.archivo}">${p.etiqueta}</a>`
    ).join('') +
        `<a class="tab-btn idioma" href="${T.otroIdioma.href}">🌐 ${T.otroIdioma.etiqueta}</a>`;
}

/* =========================================================================
   REINICIO DEL CURSO
   Se inyecta bajo la cabecera en todas las páginas. La confirmación es
   en línea y no un confirm(): un diálogo del navegador bloquea la página
   entera y no deja ver lo que se va a borrar.
   ========================================================================= */
function construirBotonReinicio() {
    const zona = document.createElement('div');
    zona.className = 'zona-reinicio';
    zona.innerHTML = `
        <button class="btn-reinicio" id="btn-reinicio" title="${descripcionDelMedio()}">
            ${T.reinicio.boton}
        </button>
        <span class="confirma-reinicio" id="confirma-reinicio" hidden>
            ${T.reinicio.aviso}
            <button class="btn-reinicio peligro" id="btn-reinicio-si">${T.reinicio.si}</button>
            <button class="btn-reinicio" id="btn-reinicio-no">${T.reinicio.no}</button>
        </span>
        <span class="nota-medio">${descripcionDelMedio()}</span>`;
    document.querySelector('header').appendChild(zona);

    $('btn-reinicio').addEventListener('click', () => {
        $('btn-reinicio').hidden = true;
        $('confirma-reinicio').hidden = false;
    });
    $('btn-reinicio-no').addEventListener('click', () => {
        $('confirma-reinicio').hidden = true;
        $('btn-reinicio').hidden = false;
    });
    $('btn-reinicio-si').addEventListener('click', () => {
        reiniciarProgreso();
        location.reload();
    });
}
