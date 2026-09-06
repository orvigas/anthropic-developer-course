/* Página «Qué reforzar» · Certificación Anthropic

   Reúne todo lo fallado en las páginas de práctica y en el simulacro, lo
   agrupa por módulo, lo atribuye a un pilar concreto y propone qué estudiar.
   Es la única página que carga los seis bancos: los necesita para poder
   mostrar el texto de cada fallo. */

"use strict";

/* Cómo leer cada banco: de dónde sale el texto y a qué página se vuelve. */
const BANCOS_DATOS = {
    t: { datos: flashcardsData, texto: x => x.q,      tipo: 'Tarjeta' },
    q: { datos: quizzesData,    texto: x => x.q,      tipo: 'Opción múltiple' },
    f: { datos: trueFalseData,  texto: x => x.s,      tipo: 'Verdadero/Falso' },
    c: { datos: codeData,       texto: x => x.titulo, tipo: 'Completar código' },
    p: { datos: matchSets,      texto: x => x.titulo, tipo: 'Emparejar' },
    e: { datos: ejemplosData,   texto: x => x.tema,   tipo: 'Ejemplo' }
};

/* Cada banco necesita su índice: en las páginas de práctica lo asigna su
   propio script, pero aquí se cargan solo los datos. */
Object.keys(BANCOS_DATOS).forEach(b => {
    BANCOS_DATOS[b].datos.forEach((item, i) => { item.i = i; });
});

let repFiltro = 'TODOS';

/* ---------------------- Recolección ---------------------- */

function recopilarFallos() {
    const fallos = [];
    Object.keys(BANCOS_DATOS).forEach(b => {
        const def = BANCOS_DATOS[b];
        fallosDe(b).forEach(i => {
            const item = def.datos[i];
            if (!item) return;   // el banco cambió de tamaño desde el último guardado
            const texto = def.texto(item);
            fallos.push({
                banco: b, i, m: item.m, texto,
                tipo: def.tipo,
                pagina: PAGINA_DE_BANCO[b],
                pilar: pilarDe(item.m, texto)
            });
        });
    });
    return fallos;
}

function resumenPorModulo() {
    const r = {};
    Object.keys(MODULOS).forEach(m => { r[m] = { total: 0, ok: 0, mal: 0, sinVer: 0 }; });
    Object.keys(BANCOS_DATOS).forEach(b => {
        BANCOS_DATOS[b].datos.forEach((item, i) => {
            const casilla = r[item.m];
            if (!casilla) return;
            casilla.total++;
            const e = estadoItem(b, i);
            if (e === 1) casilla.ok++;
            else if (e === 2) casilla.mal++;
            else casilla.sinVer++;
        });
    });
    return r;
}

function ejemplosPendientes(modulo) {
    return ejemplosData.filter(e => e.m === modulo && estadoItem('e', e.i) !== 1);
}

/* ---------------------- Render ---------------------- */

function claseDePct(pct) {
    return pct >= 75 ? 'bien' : pct >= 50 ? 'medio' : 'flojo';
}

function renderResumen(resumen, fallos) {
    let ok = 0, mal = 0, total = 0;
    Object.values(resumen).forEach(d => { ok += d.ok; mal += d.mal; total += d.total; });
    const vistos = ok + mal;
    const acierto = vistos ? Math.round(ok / vistos * 100) : 0;
    const cobertura = Math.round(vistos / total * 100);
    const ultimo = progreso.x.length ? progreso.x[progreso.x.length - 1] : null;

    $('rep-resumen').innerHTML = `
        <div class="rep-cifras">
            <div class="rep-cifra">
                <span class="rep-num ${claseDePct(acierto)}">${vistos ? acierto + '%' : '—'}</span>
                <span class="rep-etq">de acierto</span>
                <span class="rep-sub">${ok} de ${vistos} respondidos</span>
            </div>
            <div class="rep-cifra">
                <span class="rep-num">${cobertura}%</span>
                <span class="rep-etq">del material visto</span>
                <span class="rep-sub">${vistos} de ${total} elementos</span>
            </div>
            <div class="rep-cifra">
                <span class="rep-num ${mal ? 'flojo' : 'bien'}">${mal}</span>
                <span class="rep-etq">por reforzar</span>
                <span class="rep-sub">${mal ? 'aciértalos otra vez para quitarlos' : 'nada pendiente'}</span>
            </div>
            <div class="rep-cifra">
                <span class="rep-num">${ultimo ? ultimo.pct + '%' : '—'}</span>
                <span class="rep-etq">último simulacro</span>
                <span class="rep-sub">${ultimo ? fechaLegible(ultimo.fecha) : 'sin intentos'}</span>
            </div>
        </div>

        <div class="rep-barras">
            ${Object.keys(MODULOS).map(m => {
                const d = resumen[m];
                const v = d.ok + d.mal;
                const pct = v ? Math.round(d.ok / v * 100) : 0;
                const cob = Math.round(v / d.total * 100);
                return `
                <div class="rep-barra">
                    <div class="rep-barra-cab">
                        <strong>${m}</strong>
                        <span>${MODULOS[m].replace(/^M\d · /, '')}</span>
                        <em>${v ? pct + '%' : 'sin practicar'}</em>
                    </div>
                    <div class="rep-pista" title="${cob}% del módulo practicado">
                        <div class="rep-relleno ${claseDePct(pct)}" style="width:${v ? pct : 0}%"></div>
                    </div>
                    <div class="rep-barra-pie">
                        ${d.ok} acertados · ${d.mal} por reforzar · ${d.sinVer} sin ver
                    </div>
                </div>`;
            }).join('')}
        </div>`;
}

function renderConsejos(resumen, fallos) {
    // Los módulos se ordenan por lo que más urge: primero los que tienen
    // más fallos; a igualdad, el que tiene menos material visto.
    const modulos = Object.keys(MODULOS)
        .map(m => ({ m, d: resumen[m], fallos: fallos.filter(f => f.m === m) }))
        .filter(x => x.fallos.length || x.d.sinVer === x.d.total)
        .sort((a, b) => b.fallos.length - a.fallos.length || b.d.sinVer - a.d.sinVer);

    if (!modulos.length) {
        $('rep-consejos').innerHTML = `
            <div class="panel rep-vacio">
                <h3>🎉 No hay nada marcado para reforzar</h3>
                <p>Practica en cualquiera de las páginas y lo que falles aparecerá aquí,
                   con la sugerencia de qué repasar y dónde.</p>
            </div>`;
        return;
    }

    $('rep-consejos').innerHTML = modulos.map(({ m, d, fallos: fm }) => {
        const info = REFUERZO[m];

        // Pilares implicados, ordenados por número de fallos que los tocan.
        const cuenta = {};
        fm.forEach(f => {
            const nombre = f.pilar ? f.pilar.nombre : null;
            if (nombre) cuenta[nombre] = (cuenta[nombre] || 0) + 1;
        });
        const pilares = info.pilares
            .filter(p => cuenta[p.nombre])
            .sort((a, b) => cuenta[b.nombre] - cuenta[a.nombre]);

        const sinPilar = fm.length - Object.values(cuenta).reduce((a, b) => a + b, 0);
        const pendientes = ejemplosPendientes(m);

        return `
        <div class="panel rep-modulo">
            <div class="rep-modulo-cab">
                <span class="module-badge">${m}</span>
                <h3>${info.titulo}</h3>
                <span class="rep-sigla">${info.sigla}</span>
                <span class="rep-cuenta ${fm.length ? 'flojo' : ''}">
                    ${fm.length ? fm.length + ' por reforzar' : 'sin practicar'}
                </span>
            </div>

            ${pilares.length ? pilares.map(p => `
                <div class="rep-consejo">
                    <h4>${p.nombre} <span class="rep-tocado">${cuenta[p.nombre]} fallo${cuenta[p.nombre] === 1 ? '' : 's'}</span></h4>
                    <p>${p.repasa}</p>
                    <p class="rep-donde">
                        📖 <code class="inline">${info.fuente}</code>
                        &nbsp;·&nbsp; 🎯 Practica con <a href="${p.practica.pagina}">${p.practica.que}</a>
                    </p>
                </div>`).join('') : `
                <div class="rep-consejo">
                    <h4>Empieza por los cuatro pilares del módulo</h4>
                    <p>${info.pilares.map(p => p.nombre.replace(/^[A-Z] · /, '')).join(' · ')}</p>
                    <p class="rep-donde">📖 <code class="inline">${info.fuente}</code></p>
                </div>`}

            ${sinPilar > 0 ? `
                <p class="rep-nota">${sinPilar} fallo${sinPilar === 1 ? '' : 's'} de este módulo
                   no encaja${sinPilar === 1 ? '' : 'n'} claramente en un pilar: revísalo${sinPilar === 1 ? '' : 's'}
                   en la lista de abajo.</p>` : ''}

            ${pendientes.length ? `
                <p class="rep-nota">🧪 Te quedan ${pendientes.length} ejemplo${pendientes.length === 1 ? '' : 's'}
                   de este módulo sin probar. Escribirlos fija lo que las preguntas solo reconocen:
                   <a href="ejemplos.html">ir a los ejemplos</a>.</p>` : ''}
        </div>`;
    }).join('');
}

function renderFallos(fallos) {
    const lista = repFiltro === 'TODOS' ? fallos : fallos.filter(f => f.m === repFiltro);

    if (!lista.length) {
        $('rep-fallos').innerHTML = `
            <div class="panel rep-vacio">
                <p>${fallos.length ? 'Nada marcado en este módulo.' : 'Todavía no has fallado nada. Empieza por cualquier página de práctica.'}</p>
            </div>`;
        return;
    }

    const porModulo = {};
    lista.forEach(f => { (porModulo[f.m] = porModulo[f.m] || []).push(f); });

    $('rep-fallos').innerHTML = Object.keys(MODULOS).filter(m => porModulo[m]).map(m => `
        <div class="panel">
            <h3 class="rep-grupo"><span class="module-badge">${m}</span> ${porModulo[m].length} elemento${porModulo[m].length === 1 ? '' : 's'}</h3>
            ${porModulo[m].map(f => `
                <div class="rep-fallo">
                    <div class="rep-fallo-txt">
                        <span class="rep-tipo">${f.tipo}</span>
                        ${f.texto}
                        ${f.pilar ? `<span class="rep-pilar">${f.pilar.nombre}</span>` : ''}
                    </div>
                    <div class="rep-fallo-acc">
                        <a class="rep-btn" href="${f.pagina}">Practicar</a>
                        <button class="rep-btn ok" data-resuelto="${f.banco}:${f.i}">✓ Ya lo sé</button>
                    </div>
                </div>`).join('')}
        </div>`).join('');
}

function renderRepaso() {
    const fallos = recopilarFallos();
    const resumen = resumenPorModulo();
    renderResumen(resumen, fallos);
    renderConsejos(resumen, fallos);
    renderFallos(fallos);
}

/* Marcar «ya lo sé» a mano: sirve para lo que se ha repasado fuera de la
   aplicación. Lo honesto es volver a acertarlo en su página, pero obligar
   a ello convertiría la lista en algo que no se puede limpiar. */
$('rep-fallos').addEventListener('click', (ev) => {
    const btn = ev.target.closest('[data-resuelto]');
    if (!btn) return;
    const [banco, i] = btn.dataset.resuelto.split(':');
    marcarItem(banco, parseInt(i, 10), 1);
    renderRepaso();
    actualizarStatsGlobales();
});

construirFiltros('rep-filtros', (mod) => {
    repFiltro = mod;
    renderFallos(recopilarFallos());
});

/* ---------------------- Arranque ---------------------- */
construirNav('repaso');
construirBotonReinicio();
renderRepaso();
actualizarStatsGlobales();
