/* Página de completar código
   Extraído de tarjetas-interactivas.html · Certificación Anthropic */

"use strict";

/* =========================================================================
   COMPLETAR CÓDIGO
   ========================================================================= */

codeData.forEach((c, i) => { c.i = i; });

function renderCode() {
    $('code-results').style.display = 'none';
    $('code-submit').style.display = 'block';
    $('code-container').innerHTML = codeData.map((item, i) => `
        <div class="quiz__pregunta" id="cq-${i}">
            <div class="quiz__meta">${MODULOS[item.m]} · ${T.ui.ejercicio(i + 1, codeData.length)}</div>
            <h3>${item.titulo}</h3>
            <pre class="codigo">${marcarHueco(item.code)}</pre>
            <div class="quiz__opciones">
                ${item.options.map((op, j) => `
                    <label class="quiz__opcion">
                        <input type="radio" name="c-${i}" value="${j}">
                        <span><code class="inline">${op}</code></span>
                    </label>`).join('')}
            </div>
            <div class="quiz__explicacion" id="cexp-${i}"></div>
        </div>`).join('');
}

$('code-submit').addEventListener('click', () => {
    let ok = 0, sinResponder = 0;
    const porModulo = {};

    codeData.forEach((item, i) => {
        porModulo[item.m] = porModulo[item.m] || { ok: 0, total: 0 };
        porModulo[item.m].total++;

        const bloque = $(`cq-${i}`);
        bloque.classList.remove('quiz__pregunta--sin-responder');
        const elegida = document.querySelector(`input[name="c-${i}"]:checked`);
        const respuesta = elegida ? parseInt(elegida.value, 10) : -1;
        const acierto = respuesta === item.correct;

        if (acierto) { ok++; porModulo[item.m].ok++; }
        if (respuesta === -1) { sinResponder++; bloque.classList.add('quiz__pregunta--sin-responder'); }

        if (respuesta !== -1) registrarResultado('c', item.i, acierto);

        bloque.querySelectorAll('input[type="radio"]').forEach((input, j) => {
            const label = input.parentElement;
            label.classList.remove('quiz__opcion--correcta', 'quiz__opcion--incorrecta');
            if (j === item.correct) label.classList.add('quiz__opcion--correcta');
            else if (j === respuesta) label.classList.add('quiz__opcion--incorrecta');
            input.disabled = true;
        });

        const exp = $(`cexp-${i}`);
        exp.innerHTML = (respuesta === -1 ? T.ui.sinResponderPrefijo : '') + item.explanation;
        exp.classList.add('quiz__explicacion--visible');
    });

    const pct = Math.round(ok / codeData.length * 100);
    $('code-results').innerHTML = `
        <h2>${T.ui.resultados}</h2>
        <div class="resumen__nota ${scoreClass(pct)}">${pct}%</div>
        <div class="resumen__detalle">${T.ui.correctos(ok, codeData.length)}${sinResponder ? T.ui.sinResponderN(sinResponder) : ''}</div>
        <p>${scoreMessage(pct)}</p>
        <div class="desglose">${renderBreakdown(porModulo)}</div>
        <button class="boton-accion boton-accion--secundario" id="code-reset" style="margin-top:18px;">${T.ui.intentar}</button>`;
    actualizarStatsGlobales();
    $('code-results').style.display = 'block';
    $('code-submit').style.display = 'none';
    $('code-reset').addEventListener('click', () => { renderCode(); window.scrollTo({top:0, behavior:'smooth'}); });
});

/* ---------------------- Arranque ---------------------- */
construirNav('code');
construirBotonReinicio();
renderCode();
actualizarStatsGlobales();
