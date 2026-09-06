/* Página de verdadero / falso
   Extraído de tarjetas-interactivas.html · Certificación Anthropic */

"use strict";

/* =========================================================================
   VERDADERO / FALSO
   ========================================================================= */
trueFalseData.forEach((x, i) => { x.i = i; });

let vfMazo = shuffled(trueFalseData);
let vfIndice = 0, vfAciertos = 0, vfRespondida = false;

function renderVF() {
    const item = vfMazo[vfIndice];
    $('vf-total').textContent = vfMazo.length;
    $('vf-aciertos').textContent = vfAciertos;

    if (!item) {
        $('vf-panel').innerHTML = '<div class="empty-state">No hay afirmaciones para este filtro.</div>';
        $('vf-pos').textContent = '0';
        $('vf-progress').style.width = '0%';
        return;
    }

    $('vf-pos').textContent = vfIndice + 1;
    $('vf-progress').style.width = ((vfIndice + 1) / vfMazo.length * 100) + '%';
    vfRespondida = false;

    $('vf-panel').innerHTML = `
        <div class="module-badge">${MODULOS[item.m]}</div>
        <div class="vf-statement">${item.s}</div>
        <div class="vf-buttons">
            <button class="vf-btn" data-val="true">✓ Verdadero</button>
            <button class="vf-btn" data-val="false">✗ Falso</button>
        </div>
        <div class="vf-feedback" id="vf-feedback"></div>`;

    $('vf-panel').querySelectorAll('.vf-btn').forEach(btn => {
        btn.addEventListener('click', () => responderVF(btn.dataset.val === 'true'));
    });
}

function responderVF(eleccion) {
    if (vfRespondida) return;
    vfRespondida = true;
    const item = vfMazo[vfIndice];
    const acierto = eleccion === item.v;
    if (acierto) vfAciertos++;
    $('vf-aciertos').textContent = vfAciertos;

    registrarResultado('f', item.i, acierto);
    actualizarStatsGlobales();

    $('vf-panel').querySelectorAll('.vf-btn').forEach(btn => {
        const val = btn.dataset.val === 'true';
        btn.disabled = true;
        if (val === eleccion) btn.classList.add(acierto ? 'picked-right' : 'picked-wrong');
        else if (val === item.v) btn.classList.add('reveal');
    });

    $('vf-feedback').innerHTML = `
        <div class="answer-explanation show">
            <strong>${acierto ? '✅ Correcto' : '❌ Incorrecto'} — la respuesta es ${item.v ? 'Verdadero' : 'Falso'}.</strong><br>${item.e}
        </div>`;

    if (vfIndice === vfMazo.length - 1) {
        const pct = Math.round(vfAciertos / vfMazo.length * 100);
        $('vf-feedback').innerHTML += `
            <div class="summary" style="margin-top:20px;">
                <h2>Ronda completada</h2>
                <div class="score ${scoreClass(pct)}">${pct}%</div>
                <div class="score-sub">${vfAciertos} de ${vfMazo.length} correctas</div>
                <p>${scoreMessage(pct)}</p>
            </div>`;
    }
}

$('vf-next').addEventListener('click', () => {
    if (vfIndice < vfMazo.length - 1) { vfIndice++; renderVF(); }
});
$('vf-restart').addEventListener('click', () => {
    vfMazo = shuffled(vfMazo); vfIndice = 0; vfAciertos = 0; renderVF();
});
construirFiltros('vf-filtros', (mod) => {
    vfMazo = shuffled(mod === 'TODOS' ? trueFalseData : trueFalseData.filter(x => x.m === mod));
    vfIndice = 0; vfAciertos = 0; renderVF();
});

/* ---------------------- Arranque ---------------------- */
construirNav('truefalse');
construirBotonReinicio();
renderVF();
actualizarStatsGlobales();
