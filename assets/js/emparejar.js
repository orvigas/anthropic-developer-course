/* Página de emparejar
   Extraído de tarjetas-interactivas.html · Certificación Anthropic */

"use strict";

/* =========================================================================
   EMPAREJAR
   ========================================================================= */
matchSets.forEach((s, i) => { s.i = i; });

let matchActivos = matchSets.slice();
let matchSeleccion = null;   // { setIdx, termIdx }
let matchResueltos = {};     // "setIdx-termIdx" -> true
let matchFallos = {};        // índice de conjunto -> hubo al menos un error

function renderMatch() {
    matchSeleccion = null;
    matchResueltos = {};
    matchFallos = {};
    const cont = $('match-panel');

    if (!matchActivos.length) {
        cont.innerHTML = `<div class="estado-vacio">${T.match.vacio}</div>`;
        return;
    }

    cont.innerHTML = matchActivos.map((set, si) => {
        const defs = shuffled(set.pares.map((p, i) => ({ texto: p[1], idx: i })));
        return `
        <div class="emparejar__conjunto" data-set="${si}">
            <h3 class="emparejar__titulo">${set.titulo}</h3>
            <p class="emparejar__pie">
                <span class="emparejar__estado" data-status="${si}">${T.match.estado(0, set.pares.length)}</span>
            </p>
            <div class="emparejar__grid">
                <div class="emparejar__columna">
                    <h4>${T.match.termino}</h4>
                    ${set.pares.map((p, i) =>
                        `<div class="emparejar__item" data-side="term" data-set="${si}" data-idx="${i}">${p[0]}</div>`).join('')}
                </div>
                <div class="emparejar__columna">
                    <h4>${T.match.definicion}</h4>
                    ${defs.map(d =>
                        `<div class="emparejar__item" data-side="def" data-set="${si}" data-idx="${d.idx}">${d.texto}</div>`).join('')}
                </div>
            </div>
        </div>`;
    }).join('');
}

$('match-panel').addEventListener('click', (ev) => {
    const item = ev.target.closest('.emparejar__item');
    if (!item || item.classList.contains('emparejar__item--resuelto')) return;

    const side = item.dataset.side;
    const si = item.dataset.set;
    const idx = item.dataset.idx;

    document.querySelectorAll('.emparejar__item--error').forEach(el => el.classList.remove('emparejar__item--error'));

    if (side === 'term') {
        document.querySelectorAll('.emparejar__item--activo').forEach(el => el.classList.remove('emparejar__item--activo'));
        item.classList.add('emparejar__item--activo');
        matchSeleccion = { si, idx };
        return;
    }

    // side === 'def'
    if (!matchSeleccion || matchSeleccion.si !== si) {
        item.classList.add('emparejar__item--error');
        setTimeout(() => item.classList.remove('emparejar__item--error'), 700);
        return;
    }

    const termEl = document.querySelector(`.emparejar__item[data-side="term"][data-set="${si}"][data-idx="${matchSeleccion.idx}"]`);

    if (matchSeleccion.idx === idx) {
        const n = parseInt(idx, 10) + 1;
        termEl.classList.remove('emparejar__item--activo');
        termEl.classList.add('emparejar__item--resuelto');
        item.classList.add('emparejar__item--resuelto');
        termEl.innerHTML = `<span class="emparejar__marca">✓${n}</span>` + termEl.innerHTML;
        item.innerHTML = `<span class="emparejar__marca">✓${n}</span>` + item.innerHTML;
        matchResueltos[`${si}-${idx}`] = true;
        matchSeleccion = null;

        const total = matchActivos[si].pares.length;
        const hechos = Object.keys(matchResueltos).filter(k => k.startsWith(si + '-')).length;
        const status = document.querySelector(`.emparejar__estado[data-status="${si}"]`);
        status.textContent = hechos === total
            ? T.match.completado(total)
            : T.match.estado(hechos, total);
        if (hechos === total) {
            status.style.color = 'var(--acierto)';
            // Un conjunto solo cuenta como dominado si se completó sin fallos.
            const conjunto = matchActivos[si];
            registrarResultado('p', conjunto.i, !matchFallos[conjunto.i]);
            actualizarStatsGlobales();
        }
    } else {
        matchFallos[matchActivos[si].i] = true;
        item.classList.add('emparejar__item--error');
        termEl.classList.add('emparejar__item--error');
        setTimeout(() => {
            item.classList.remove('emparejar__item--error');
            termEl.classList.remove('emparejar__item--error', 'emparejar__item--activo');
        }, 750);
        matchSeleccion = null;
    }
});

construirFiltros('match-filtros', (mod) => {
    matchActivos = mod === 'TODOS' ? matchSets.slice() : matchSets.filter(s => s.m === mod);
    renderMatch();
});

/* ---------------------- Arranque ---------------------- */
construirNav('match');
construirBotonReinicio();
renderMatch();
actualizarStatsGlobales();
