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
        <div class="quiz-question" id="cq-${i}">
            <div class="q-meta">${MODULOS[item.m]} · Ejercicio ${i + 1} de ${codeData.length}</div>
            <h3>${item.titulo}</h3>
            <pre class="code">${marcarHueco(item.code)}</pre>
            <div class="quiz-options">
                ${item.options.map((op, j) => `
                    <label class="quiz-option">
                        <input type="radio" name="c-${i}" value="${j}">
                        <span><code class="inline">${op}</code></span>
                    </label>`).join('')}
            </div>
            <div class="answer-explanation" id="cexp-${i}"></div>
        </div>`).join('');
}

$('code-submit').addEventListener('click', () => {
    let ok = 0, sinResponder = 0;
    const porModulo = {};

    codeData.forEach((item, i) => {
        porModulo[item.m] = porModulo[item.m] || { ok: 0, total: 0 };
        porModulo[item.m].total++;

        const bloque = $(`cq-${i}`);
        bloque.classList.remove('unanswered');
        const elegida = document.querySelector(`input[name="c-${i}"]:checked`);
        const respuesta = elegida ? parseInt(elegida.value, 10) : -1;
        const acierto = respuesta === item.correct;

        if (acierto) { ok++; porModulo[item.m].ok++; }
        if (respuesta === -1) { sinResponder++; bloque.classList.add('unanswered'); }

        if (respuesta !== -1) registrarResultado('c', item.i, acierto);

        bloque.querySelectorAll('input[type="radio"]').forEach((input, j) => {
            const label = input.parentElement;
            label.classList.remove('correct', 'incorrect');
            if (j === item.correct) label.classList.add('correct');
            else if (j === respuesta) label.classList.add('incorrect');
            input.disabled = true;
        });

        const exp = $(`cexp-${i}`);
        exp.innerHTML = (respuesta === -1 ? '<strong>Sin responder.</strong> ' : '') + item.explanation;
        exp.classList.add('show');
    });

    const pct = Math.round(ok / codeData.length * 100);
    $('code-results').innerHTML = `
        <h2>Resultados</h2>
        <div class="score ${scoreClass(pct)}">${pct}%</div>
        <div class="score-sub">${ok} de ${codeData.length} correctos${sinResponder ? ` · ${sinResponder} sin responder` : ''}</div>
        <p>${scoreMessage(pct)}</p>
        <div class="breakdown">${renderBreakdown(porModulo)}</div>
        <button class="submit-btn secondary" id="code-reset" style="margin-top:18px;">🔄 Intentar de nuevo</button>`;
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
