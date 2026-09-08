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
        cont.innerHTML = `<div class="panel estado-vacio">${T.ej.vacio}</div>`;
        $('ej-contador').textContent = '';
        return;
    }

    actualizarContadorEjemplos();

    cont.innerHTML = ejActivos.map((ej, i) => {
        const hecho = estadoItem('e', ej.i) === 1;
        return `
        <div class="ejemplo${hecho ? ' ejemplo--hecho' : ''}" id="ej-${i}">
            <button class="ejemplo__cabecera" data-toggle="${i}" aria-expanded="false">
                <span class="ejemplo__modulo">${ej.m}</span>
                <span class="ejemplo__titulo">${ej.tema}</span>
                <span class="ejemplo__lenguaje">${ej.lang}</span>
                <span class="ejemplo__flecha">▾</span>
            </button>
            <div class="ejemplo__cuerpo" id="ej-body-${i}">
                <p class="ejemplo__objetivo"><strong>${T.ej.objetivo}</strong> ${ej.objetivo}</p>
                <p class="ejemplo__requisitos"><strong>${T.ej.necesitas}</strong> ${ej.requisitos}</p>
                <ol class="ejemplo__pasos">${ej.pasos.map(p => `<li>${p}</li>`).join('')}</ol>
                <div class="ejemplo__codigo">
                    <button class="ejemplo__copiar" data-copy="${i}">${T.ej.copiar}</button>
                    <pre class="codigo">${escaparCodigo(ej.code)}</pre>
                </div>
                ${ej.salida ? `<h4 class="ejemplo__subtitulo">${T.ej.queVeras}</h4>
                <pre class="codigo codigo--salida">${escaparCodigo(ej.salida)}</pre>` : ''}
                <div class="ejemplo__nota"><strong>${T.ej.dondeSeRompe}</strong> ${ej.notas}</div>
                <label class="ejemplo__marca">
                    <input type="checkbox" data-hecho="${i}"${hecho ? ' checked' : ''}>
                    <span>${T.ej.yaLoProbe}</span>
                </label>
            </div>
        </div>`;
    }).join('');
}

$('ej-container').addEventListener('click', (ev) => {
    const cabecera = ev.target.closest('.ejemplo__cabecera');
    if (cabecera) {
        const bloque = cabecera.parentElement;
        const abierto = bloque.classList.toggle('ejemplo--abierto');
        cabecera.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        return;
    }

    const copiar = ev.target.closest('.ejemplo__copiar');
    if (copiar) {
        const ej = ejActivos[parseInt(copiar.dataset.copy, 10)];
        copiarTexto(ej.code, copiar);
    }
});

/* navigator.clipboard no existe al abrir el archivo con file://,
   asi que se cae al metodo del textarea temporal. */
function copiarTexto(texto, boton) {
    const ok = () => {
        boton.textContent = T.ej.copiado;
        setTimeout(() => { boton.textContent = T.ej.copiar; }, 1600);
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
    caja.closest('.ejemplo').classList.toggle('ejemplo--hecho', caja.checked);
    actualizarContadorEjemplos();
    actualizarStatsGlobales();
});

$('ej-expandir').addEventListener('click', () => {
    const abrir = $('ej-expandir').dataset.estado !== 'abierto';
    document.querySelectorAll('#ej-container .ejemplo').forEach(b => {
        b.classList.toggle('ejemplo--abierto', abrir);
        b.querySelector('.ejemplo__cabecera').setAttribute('aria-expanded', abrir ? 'true' : 'false');
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
