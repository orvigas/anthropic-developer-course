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
        cont.innerHTML = '<div class="empty-state">No hay ejercicios para este filtro.</div>';
        return;
    }

    cont.innerHTML = matchActivos.map((set, si) => {
        const defs = shuffled(set.pares.map((p, i) => ({ texto: p[1], idx: i })));
        return `
        <div class="match-set" data-set="${si}" style="margin-bottom:34px;">
            <h3 style="color:var(--morado-osc); margin-bottom:4px; font-size:1.05em;">${set.titulo}</h3>
            <p style="font-size:.82em; color:var(--texto-suave); margin-bottom:14px;">
                <span class="match-status" data-status="${si}">0 de ${set.pares.length} emparejados</span>
            </p>
            <div class="match-grid">
                <div class="match-col">
                    <h4>Término</h4>
                    ${set.pares.map((p, i) =>
                        `<div class="match-item" data-side="term" data-set="${si}" data-idx="${i}">${p[0]}</div>`).join('')}
                </div>
                <div class="match-col">
                    <h4>Definición</h4>
                    ${defs.map(d =>
                        `<div class="match-item" data-side="def" data-set="${si}" data-idx="${d.idx}">${d.texto}</div>`).join('')}
                </div>
            </div>
        </div>`;
    }).join('');
}

$('match-panel').addEventListener('click', (ev) => {
    const item = ev.target.closest('.match-item');
    if (!item || item.classList.contains('done')) return;

    const side = item.dataset.side;
    const si = item.dataset.set;
    const idx = item.dataset.idx;

    document.querySelectorAll('.match-item.wrong').forEach(el => el.classList.remove('wrong'));

    if (side === 'term') {
        document.querySelectorAll('.match-item.selected').forEach(el => el.classList.remove('selected'));
        item.classList.add('selected');
        matchSeleccion = { si, idx };
        return;
    }

    // side === 'def'
    if (!matchSeleccion || matchSeleccion.si !== si) {
        item.classList.add('wrong');
        setTimeout(() => item.classList.remove('wrong'), 700);
        return;
    }

    const termEl = document.querySelector(`.match-item[data-side="term"][data-set="${si}"][data-idx="${matchSeleccion.idx}"]`);

    if (matchSeleccion.idx === idx) {
        const n = parseInt(idx, 10) + 1;
        termEl.classList.remove('selected');
        termEl.classList.add('done');
        item.classList.add('done');
        termEl.innerHTML = `<span class="pair-tag">✓${n}</span>` + termEl.innerHTML;
        item.innerHTML = `<span class="pair-tag">✓${n}</span>` + item.innerHTML;
        matchResueltos[`${si}-${idx}`] = true;
        matchSeleccion = null;

        const total = matchActivos[si].pares.length;
        const hechos = Object.keys(matchResueltos).filter(k => k.startsWith(si + '-')).length;
        const status = document.querySelector(`.match-status[data-status="${si}"]`);
        status.textContent = hechos === total
            ? `✅ Completado: ${total} de ${total}`
            : `${hechos} de ${total} emparejados`;
        if (hechos === total) {
            status.style.color = 'var(--verde)';
            // Un conjunto solo cuenta como dominado si se completó sin fallos.
            const conjunto = matchActivos[si];
            registrarResultado('p', conjunto.i, !matchFallos[conjunto.i]);
            actualizarStatsGlobales();
        }
    } else {
        matchFallos[matchActivos[si].i] = true;
        item.classList.add('wrong');
        termEl.classList.add('wrong');
        setTimeout(() => {
            item.classList.remove('wrong');
            termEl.classList.remove('wrong', 'selected');
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
