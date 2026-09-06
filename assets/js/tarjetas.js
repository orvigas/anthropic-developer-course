/* Página de tarjetas
   Extraído de tarjetas-interactivas.html · Certificación Anthropic */

"use strict";

/* =========================================================================
   TARJETAS
   ========================================================================= */
/* El progreso se guarda por posición en el banco, no por texto: así cabe
   en una cookie. `i` es esa posición y sobrevive al filtrado y al mezclado. */
flashcardsData.forEach((c, i) => { c.i = i; });

let fcMazo = flashcardsData.slice();
let fcIndice = 0;

function renderTarjeta() {
    const card = fcMazo[fcIndice];
    const flip = $('flip-card');
    flip.classList.remove('flipped');

    if (!card) {
        $('fc-pregunta').textContent = T.fc.vacio;
        $('fc-respuesta').textContent = '';
        $('fc-modulo').textContent = '—';
        $('fc-modulo-b').textContent = '—';
        $('current-card').textContent = '0';
        $('total-cards').textContent = '0';
        $('progress-fill').style.width = '0%';
        $('fc-marca').textContent = '';
        return;
    }

    $('fc-modulo').textContent = MODULOS[card.m];
    $('fc-modulo-b').textContent = MODULOS[card.m];
    $('fc-pregunta').innerHTML = card.q;
    $('fc-respuesta').innerHTML = card.a;

    $('current-card').textContent = fcIndice + 1;
    $('total-cards').textContent = fcMazo.length;
    $('progress-fill').style.width = ((fcIndice + 1) / fcMazo.length * 100) + '%';
    $('prev-btn').disabled = fcIndice === 0;
    $('next-btn').disabled = fcIndice === fcMazo.length - 1;

    const marca = estadoItem('t', card.i);
    $('fc-marca').textContent = marca === 1 ? T.fc.dominada : marca === 2 ? T.fc.porRepasar : T.fc.sinMarcar;
}

function marcarTarjeta(estado) {
    const card = fcMazo[fcIndice];
    if (!card) return;
    // Volver a pulsar la misma marca la quita.
    marcarItem('t', card.i, estadoItem('t', card.i) === estado ? 0 : estado);
    actualizarStatsGlobales();
    if (fcIndice < fcMazo.length - 1) fcIndice++;
    renderTarjeta();
}

$('flip-card').addEventListener('click', () => $('flip-card').classList.toggle('flipped'));
$('prev-btn').addEventListener('click', () => { if (fcIndice > 0) { fcIndice--; renderTarjeta(); } });
$('next-btn').addEventListener('click', () => { if (fcIndice < fcMazo.length - 1) { fcIndice++; renderTarjeta(); } });
$('know-btn').addEventListener('click', () => marcarTarjeta(1));
$('review-btn').addEventListener('click', () => marcarTarjeta(2));
$('shuffle-btn').addEventListener('click', () => { fcMazo = shuffled(fcMazo); fcIndice = 0; renderTarjeta(); });

document.addEventListener('keydown', (ev) => {
    if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'TEXTAREA') return;
    if (ev.key === 'ArrowRight') { $('next-btn').click(); }
    else if (ev.key === 'ArrowLeft') { $('prev-btn').click(); }
    else if (ev.key === ' ') { ev.preventDefault(); $('flip-card').classList.toggle('flipped'); }
});

construirFiltros('fc-filtros', (mod) => {
    fcMazo = mod === 'TODOS' ? flashcardsData.slice() : flashcardsData.filter(c => c.m === mod);
    fcIndice = 0;
    renderTarjeta();
});

/* ---------------------- Arranque ---------------------- */
construirNav('tarjetas');
construirBotonReinicio();
renderTarjeta();
actualizarStatsGlobales();
