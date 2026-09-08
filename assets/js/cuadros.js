/* Página de cuadros comparativos
   Certificación Anthropic · Desarrollador */

"use strict";

/* =========================================================================
   CUADROS COMPARATIVOS
   Página de consulta: no registra progreso, así que no toca el almacén.
   ========================================================================= */
let cuadrosActivos = CUADROS.slice();

function renderCuadros() {
    const cont = $('cua-container');

    if (!cuadrosActivos.length) {
        cont.innerHTML = `<div class="panel estado-vacio">${T.cua.vacio}</div>`;
        $('cua-contador').textContent = '';
        return;
    }

    $('cua-contador').textContent = T.cua.contador(cuadrosActivos.length);

    /* La primera celda de cada fila es el eje que se compara, no un dato:
       va como <th scope="row"> para que un lector de pantalla la anuncie. */
    cont.innerHTML = cuadrosActivos.map(c => `
        <article class="panel cuadro">
            <div class="cuadro__cabecera">
                <span class="insignia">${c.m}</span>
                <h3 class="cuadro__titulo">${c.titulo}</h3>
            </div>
            <div class="cuadro__desplazable">
                <table class="tabla">
                    <thead><tr>${c.cols.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                    <tbody>${c.filas.map(f => `<tr>${f.map((v, i) =>
                        i === 0 ? `<th scope="row">${v}</th>` : `<td>${v}</td>`
                    ).join('')}</tr>`).join('')}</tbody>
                </table>
            </div>
        </article>`).join('');
}

construirNav('cuadros');
construirBotonReinicio();
actualizarStatsGlobales();
construirFiltros('cua-filtros', (mod) => {
    cuadrosActivos = mod === 'TODOS' ? CUADROS.slice() : CUADROS.filter(c => c.m === mod);
    renderCuadros();
});
renderCuadros();
