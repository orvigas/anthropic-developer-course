/* Página «Qué reforzar» · Certificación Anthropic

   Reúne todo lo fallado en las páginas de práctica y en el simulacro, lo
   agrupa por módulo, lo atribuye a un pilar concreto y propone qué estudiar.
   Es la única página que carga los seis bancos: los necesita para poder
   mostrar el texto de cada fallo. */

"use strict";

/* Cómo leer cada banco: de dónde sale el texto y a qué página se vuelve. */
const BANCOS_DATOS = {
    t: { datos: flashcardsData, texto: x => x.q,      tipo: T.tipos.t },
    q: { datos: quizzesData,    texto: x => x.q,      tipo: T.tipos.q },
    f: { datos: trueFalseData,  texto: x => x.s,      tipo: T.tipos.f },
    c: { datos: codeData,       texto: x => x.titulo, tipo: T.tipos.c },
    p: { datos: matchSets,      texto: x => x.titulo, tipo: T.tipos.p },
    e: { datos: ejemplosData,   texto: x => x.tema,   tipo: T.tipos.e }
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

/* El nivel se traduce a un modificador BEM del elemento que lo pinta:
   el mismo porcentaje colorea `repaso__num` y `repaso__relleno`. */
function claseDePct(pct, elemento) {
    const nivel = pct >= 75 ? 'bien' : pct >= 50 ? 'medio' : 'flojo';
    return `${elemento}--${nivel}`;
}

function renderResumen(resumen, fallos) {
    let ok = 0, mal = 0, total = 0;
    Object.values(resumen).forEach(d => { ok += d.ok; mal += d.mal; total += d.total; });
    const vistos = ok + mal;
    const acierto = vistos ? Math.round(ok / vistos * 100) : 0;
    const cobertura = Math.round(vistos / total * 100);
    const ultimo = progreso.x.length ? progreso.x[progreso.x.length - 1] : null;

    $('rep-resumen').innerHTML = `
        <div class="repaso__cifras">
            <div class="repaso__cifra">
                <span class="repaso__num ${claseDePct(acierto, 'repaso__num')}">${vistos ? acierto + '%' : '—'}</span>
                <span class="repaso__etiqueta">${T.rep.deAcierto}</span>
                <span class="repaso__sub">${T.rep.respondidos(ok, vistos)}</span>
            </div>
            <div class="repaso__cifra">
                <span class="repaso__num">${cobertura}%</span>
                <span class="repaso__etiqueta">${T.rep.materialVisto}</span>
                <span class="repaso__sub">${T.rep.elementos(vistos, total)}</span>
            </div>
            <div class="repaso__cifra">
                <span class="repaso__num ${mal ? 'repaso__num--flojo' : 'repaso__num--bien'}">${mal}</span>
                <span class="repaso__etiqueta">${T.rep.porReforzar}</span>
                <span class="repaso__sub">${mal ? T.rep.pendientes : T.rep.nadaPendiente}</span>
            </div>
            <div class="repaso__cifra">
                <span class="repaso__num">${ultimo ? ultimo.pct + '%' : '—'}</span>
                <span class="repaso__etiqueta">${T.rep.ultimoSimulacro}</span>
                <span class="repaso__sub">${ultimo ? fechaLegible(ultimo.fecha) : T.rep.sinIntentos}</span>
            </div>
        </div>

        <div class="repaso__barras">
            ${Object.keys(MODULOS).map(m => {
                const d = resumen[m];
                const v = d.ok + d.mal;
                const pct = v ? Math.round(d.ok / v * 100) : 0;
                const cob = Math.round(v / d.total * 100);
                return `
                <div class="repaso__barra">
                    <div class="repaso__barra-cabecera">
                        <strong>${m}</strong>
                        <span>${MODULOS[m].replace(/^M\d · /, '')}</span>
                        <em>${v ? pct + '%' : T.rep.sinPracticar}</em>
                    </div>
                    <div class="repaso__pista" title="${T.rep.moduloPracticado(cob)}">
                        <div class="repaso__relleno ${claseDePct(pct, 'repaso__relleno')}" style="width:${v ? pct : 0}%"></div>
                    </div>
                    <div class="repaso__barra-pie">
                        ${T.rep.pieBarra(d.ok, d.mal, d.sinVer)}
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
            <div class="panel repaso__vacio">
                <h3>${T.rep.vacioTitulo}</h3>
                <p>${T.rep.vacioTexto}</p>
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
        <div class="panel repaso__modulo">
            <div class="repaso__modulo-cabecera">
                <span class="insignia">${m}</span>
                <h3>${info.titulo}</h3>
                <span class="repaso__sigla">${info.sigla}</span>
                <span class="repaso__cuenta ${fm.length ? 'repaso__cuenta--flojo' : ''}">
                    ${fm.length ? T.rep.cuenta(fm.length) : T.rep.sinPracticar}
                </span>
            </div>

            ${pilares.length ? pilares.map(p => `
                <div class="repaso__consejo">
                    <h4>${p.nombre} <span class="repaso__tocado">${T.rep.tocado(cuenta[p.nombre])}</span></h4>
                    <p>${p.repasa}</p>
                    <p class="repaso__donde">
                        📖 <code class="inline">${info.fuente}</code>
                        &nbsp;·&nbsp; ${T.rep.practicaCon} <a href="${p.practica.pagina}">${p.practica.que}</a>
                    </p>
                </div>`).join('') : `
                <div class="repaso__consejo">
                    <h4>${T.rep.pilaresTitulo}</h4>
                    <p>${info.pilares.map(p => p.nombre.replace(/^[A-Z] · /, '')).join(' · ')}</p>
                    <p class="repaso__donde">📖 <code class="inline">${info.fuente}</code></p>
                </div>`}

            ${sinPilar > 0 ? `
                <p class="repaso__nota">${T.rep.sinPilar(sinPilar)}</p>` : ''}

            ${pendientes.length ? `
                <p class="repaso__nota">${T.rep.ejemplosPendientes(pendientes.length)}
                   <a href="${T.paginaDeBanco.e}">${T.rep.irEjemplos}</a>.</p>` : ''}
        </div>`;
    }).join('');
}

function renderFallos(fallos) {
    const lista = repFiltro === 'TODOS' ? fallos : fallos.filter(f => f.m === repFiltro);

    if (!lista.length) {
        $('rep-fallos').innerHTML = `
            <div class="panel repaso__vacio">
                <p>${fallos.length ? T.rep.nadaEnModulo : T.rep.nadaFallado}</p>
            </div>`;
        return;
    }

    const porModulo = {};
    lista.forEach(f => { (porModulo[f.m] = porModulo[f.m] || []).push(f); });

    $('rep-fallos').innerHTML = Object.keys(MODULOS).filter(m => porModulo[m]).map(m => `
        <div class="panel">
            <h3 class="repaso__grupo"><span class="insignia">${m}</span> ${T.rep.grupo(porModulo[m].length)}</h3>
            ${porModulo[m].map(f => `
                <div class="repaso__fallo">
                    <div class="repaso__fallo-texto">
                        <span class="repaso__tipo">${f.tipo}</span>
                        ${f.texto}
                        ${f.pilar ? `<span class="repaso__pilar">${f.pilar.nombre}</span>` : ''}
                    </div>
                    <div class="repaso__fallo-acciones">
                        <a class="repaso__boton" href="${f.pagina}">${T.rep.practicar}</a>
                        <button class="repaso__boton repaso__boton--resuelto" data-resuelto="${f.banco}:${f.i}">${T.rep.yaLoSe}</button>
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
