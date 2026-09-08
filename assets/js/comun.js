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
    if (pct >= 90) return 'resumen__nota--excelente';
    if (pct >= 75) return 'resumen__nota--bien';
    if (pct >= 60) return 'resumen__nota--mejorable';
    return 'resumen__nota--flojo';
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
        return `<div class="desglose__item"><div class="desglose__modulo">${k}</div>
                <div class="desglose__valor" style="color:var(--${pct>=75?'acierto':pct>=50?'aviso-texto':'error'})">${pct}%</div>
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
        `<span class="estadisticas__dato">${T.stats.tarjetas(TOTALES.tarjetas)}</span>` +
        `<span class="estadisticas__dato">${T.stats.preguntas(TOTALES.preguntas)}</span>` +
        `<span class="estadisticas__dato">${T.stats.ejemplos(TOTALES.ejemplos)}</span>` +
        `<span class="estadisticas__dato">${T.stats.dominadas(dominadas)}</span>` +
        `<span class="estadisticas__dato estadisticas__dato--repaso${repasar ? ' estadisticas__dato--pendiente' : ''}">${T.stats.porRepasar(repasar)}</span>` +
        `<span class="estadisticas__dato">${T.stats.ultimo(ultimo)}</span>`;
}

/* Construye una fila de chips de filtro por módulo. */
function construirFiltros(contenedorId, onChange) {
    const cont = $(contenedorId);
    const claves = ['TODOS', ...Object.keys(MODULOS)];
    cont.innerHTML = claves.map((k, i) =>
        `<button class="filtros__chip${i === 0 ? ' filtros__chip--activo' : ''}" data-mod="${k}">${k === 'TODOS' ? T.filtroTodos : k}</button>`
    ).join('');
    cont.addEventListener('click', (ev) => {
        const btn = ev.target.closest('.filtros__chip');
        if (!btn) return;
        cont.querySelectorAll('.filtros__chip').forEach(c => c.classList.remove('filtros__chip--activo'));
        btn.classList.add('filtros__chip--activo');
        onChange(btn.dataset.mod);
    });
}

function marcarHueco(code) {
    return code
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/____/g, '<span class="codigo__hueco">____</span>');
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
            ? `<span class="navegacion__boton navegacion__boton--activo">${p.etiqueta}</span>`
            : `<a class="navegacion__boton" href="${p.archivo}">${p.etiqueta}</a>`
    ).join('') +
        `<a class="navegacion__boton navegacion__boton--idioma" href="${T.otroIdioma.href}">🌐 ${T.otroIdioma.etiqueta}</a>`;
}

/* =========================================================================
   REINICIO DEL CURSO
   Se inyecta bajo la cabecera en todas las páginas. La confirmación es
   en línea y no un confirm(): un diálogo del navegador bloquea la página
   entera y no deja ver lo que se va a borrar.
   ========================================================================= */
function construirBotonReinicio() {
    const zona = document.createElement('div');
    zona.className = 'reinicio';
    zona.innerHTML = `
        <button class="reinicio__boton" id="btn-reinicio" title="${descripcionDelMedio()}">
            ${T.reinicio.boton}
        </button>
        <span class="reinicio__confirma" id="confirma-reinicio" hidden>
            ${T.reinicio.aviso}
            <button class="reinicio__boton reinicio__boton--peligro" id="btn-reinicio-si">${T.reinicio.si}</button>
            <button class="reinicio__boton" id="btn-reinicio-no">${T.reinicio.no}</button>
        </span>
        <span class="reinicio__nota">${descripcionDelMedio()}</span>`;
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
