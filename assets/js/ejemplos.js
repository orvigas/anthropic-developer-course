/* Página de ejemplos aplicados
   Extraído de tarjetas-interactivas.html · Certificación Anthropic */

"use strict";

/* =========================================================================
   EJEMPLOS APLICADOS
   ========================================================================= */
ejemplosData.forEach((e, i) => { e.i = i; });

let ejActivos = ejemplosData.slice();

function actualizarContadorEjemplos() {
    const hechos = ejActivos.filter(e => estadoItem('e', e.i) === 1).length;
    $('ej-contador').textContent =
        `${ejActivos.length} ejemplo${ejActivos.length === 1 ? '' : 's'} · ${hechos} probado${hechos === 1 ? '' : 's'}`;
}

function renderEjemplos() {
    const cont = $('ej-container');

    if (!ejActivos.length) {
        cont.innerHTML = '<div class="panel empty-state">No hay ejemplos para este filtro.</div>';
        $('ej-contador').textContent = '';
        return;
    }

    actualizarContadorEjemplos();

    cont.innerHTML = ejActivos.map((ej, i) => {
        const hecho = estadoItem('e', ej.i) === 1;
        return `
        <div class="ejemplo${hecho ? ' hecho' : ''}" id="ej-${i}">
            <button class="ej-head" data-toggle="${i}" aria-expanded="false">
                <span class="ej-mod">${ej.m}</span>
                <span class="ej-titulo">${ej.tema}</span>
                <span class="ej-lang">${ej.lang}</span>
                <span class="ej-caret">▾</span>
            </button>
            <div class="ej-body" id="ej-body-${i}">
                <p class="ej-objetivo"><strong>Objetivo.</strong> ${ej.objetivo}</p>
                <p class="ej-req"><strong>Necesitas:</strong> ${ej.requisitos}</p>
                <ol class="ej-pasos">${ej.pasos.map(p => `<li>${p}</li>`).join('')}</ol>
                <div class="ej-codewrap">
                    <button class="ej-copy" data-copy="${i}">📋 Copiar</button>
                    <pre class="code">${escaparCodigo(ej.code)}</pre>
                </div>
                ${ej.salida ? `<h4 class="ej-sub">Qué verás</h4>
                <pre class="code out">${escaparCodigo(ej.salida)}</pre>` : ''}
                <div class="ej-nota"><strong>Dónde se rompe.</strong> ${ej.notas}</div>
                <label class="ej-hecho">
                    <input type="checkbox" data-hecho="${i}"${hecho ? ' checked' : ''}>
                    <span>Ya lo probé</span>
                </label>
            </div>
        </div>`;
    }).join('');
}

$('ej-container').addEventListener('click', (ev) => {
    const cabecera = ev.target.closest('.ej-head');
    if (cabecera) {
        const bloque = cabecera.parentElement;
        const abierto = bloque.classList.toggle('abierto');
        cabecera.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        return;
    }

    const copiar = ev.target.closest('.ej-copy');
    if (copiar) {
        const ej = ejActivos[parseInt(copiar.dataset.copy, 10)];
        copiarTexto(ej.code, copiar);
    }
});

/* navigator.clipboard no existe al abrir el archivo con file://,
   asi que se cae al metodo del textarea temporal. */
function copiarTexto(texto, boton) {
    const ok = () => {
        boton.textContent = '✓ Copiado';
        setTimeout(() => { boton.textContent = '📋 Copiar'; }, 1600);
    };
    const respaldo = () => {
        const area = document.createElement('textarea');
        area.value = texto;
        area.setAttribute('readonly', '');
        area.style.cssText = 'position:fixed;top:0;left:-9999px;';
        document.body.appendChild(area);
        area.select();
        let logrado = false;
        try { logrado = document.execCommand('copy'); } catch (e) { logrado = false; }
        document.body.removeChild(area);
        if (logrado) ok();
        else boton.textContent = '⚠️ Copia manual';
    };
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(texto).then(ok).catch(respaldo);
    } else {
        respaldo();
    }
}

$('ej-container').addEventListener('change', (ev) => {
    const caja = ev.target.closest('input[data-hecho]');
    if (!caja) return;
    const ej = ejActivos[parseInt(caja.dataset.hecho, 10)];
    marcarItem('e', ej.i, caja.checked ? 1 : 0);
    caja.closest('.ejemplo').classList.toggle('hecho', caja.checked);
    actualizarContadorEjemplos();
    actualizarStatsGlobales();
});

$('ej-expandir').addEventListener('click', () => {
    const abrir = $('ej-expandir').dataset.estado !== 'abierto';
    document.querySelectorAll('#ej-container .ejemplo').forEach(b => {
        b.classList.toggle('abierto', abrir);
        b.querySelector('.ej-head').setAttribute('aria-expanded', abrir ? 'true' : 'false');
    });
    $('ej-expandir').dataset.estado = abrir ? 'abierto' : 'cerrado';
    $('ej-expandir').textContent = abrir ? '⊟ Contraer todo' : '⊞ Expandir todo';
});

construirFiltros('ej-filtros', (mod) => {
    ejActivos = mod === 'TODOS' ? ejemplosData.slice() : ejemplosData.filter(e => e.m === mod);
    $('ej-expandir').dataset.estado = 'cerrado';
    $('ej-expandir').textContent = '⊞ Expandir todo';
    renderEjemplos();
});

/* ---------------------- Arranque ---------------------- */
construirNav('ejemplos');
construirBotonReinicio();
renderEjemplos();
actualizarStatsGlobales();
