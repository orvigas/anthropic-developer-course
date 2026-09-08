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
        $('vf-panel').innerHTML = `<div class="estado-vacio">${T.vf.vacio}</div>`;
        $('vf-pos').textContent = '0';
        $('vf-progress').style.width = '0%';
        return;
    }

    $('vf-pos').textContent = vfIndice + 1;
    $('vf-progress').style.width = ((vfIndice + 1) / vfMazo.length * 100) + '%';
    vfRespondida = false;

    $('vf-panel').innerHTML = `
        <div class="insignia">${MODULOS[item.m]}</div>
        <div class="afirmacion__texto">${item.s}</div>
        <div class="afirmacion__botones">
            <button class="afirmacion__boton" data-val="true">${T.vf.btnV}</button>
            <button class="afirmacion__boton" data-val="false">${T.vf.btnF}</button>
        </div>
        <div class="afirmacion__respuesta" id="vf-feedback"></div>`;

    $('vf-panel').querySelectorAll('.afirmacion__boton').forEach(btn => {
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

    $('vf-panel').querySelectorAll('.afirmacion__boton').forEach(btn => {
        const val = btn.dataset.val === 'true';
        btn.disabled = true;
        if (val === eleccion) btn.classList.add(acierto ? 'afirmacion__boton--acierto' : 'afirmacion__boton--fallo');
        else if (val === item.v) btn.classList.add('afirmacion__boton--revelada');
    });

    $('vf-feedback').innerHTML = `
        <div class="quiz__explicacion quiz__explicacion--visible">
            <strong>${T.vf.veredicto(acierto, item.v)}</strong><br>${item.e}
        </div>`;

    if (vfIndice === vfMazo.length - 1) {
        const pct = Math.round(vfAciertos / vfMazo.length * 100);
        $('vf-feedback').innerHTML += `
            <div class="resumen" style="margin-top:20px;">
                <h2>${T.vf.ronda}</h2>
                <div class="resumen__nota ${scoreClass(pct)}">${pct}%</div>
                <div class="resumen__detalle">${T.ui.correctas(vfAciertos, vfMazo.length)}</div>
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
