/* Página de opción múltiple
   Extraído de tarjetas-interactivas.html · Certificación Anthropic */

"use strict";

/* =========================================================================
   OPCIÓN MÚLTIPLE
   ========================================================================= */
quizzesData.forEach((q, i) => { q.i = i; });

let quizActivo = quizzesData.slice();

function renderQuizzes() {
    const cont = $('quiz-container');
    $('quiz-results').style.display = 'none';
    $('quiz-submit').style.display = 'block';

    if (!quizActivo.length) {
        cont.innerHTML = `<div class="panel estado-vacio">${T.ui.vacioPreguntas}</div>`;
        return;
    }

    cont.innerHTML = quizActivo.map((quiz, i) => `
        <div class="quiz__pregunta" id="qq-${i}">
            <div class="quiz__meta">${MODULOS[quiz.m]} · ${T.ui.pregunta(i + 1, quizActivo.length)}</div>
            <h3>${quiz.q}</h3>
            <div class="quiz__opciones">
                ${quiz.options.map((op, j) => `
                    <label class="quiz__opcion">
                        <input type="radio" name="q-${i}" value="${j}">
                        <span>${op}</span>
                    </label>`).join('')}
            </div>
            <div class="quiz__explicacion" id="qexp-${i}"></div>
        </div>`).join('');
}

$('quiz-submit').addEventListener('click', () => {
    let ok = 0, sinResponder = 0;
    const porModulo = {};

    quizActivo.forEach((quiz, i) => {
        porModulo[quiz.m] = porModulo[quiz.m] || { ok: 0, total: 0 };
        porModulo[quiz.m].total++;

        const bloque = $(`qq-${i}`);
        bloque.classList.remove('quiz__pregunta--sin-responder');

        const elegida = document.querySelector(`input[name="q-${i}"]:checked`);
        const inputs = bloque.querySelectorAll('input[type="radio"]');
        const respuesta = elegida ? parseInt(elegida.value, 10) : -1;
        const acierto = respuesta === quiz.correct;

        if (acierto) { ok++; porModulo[quiz.m].ok++; }
        if (respuesta === -1) { sinResponder++; bloque.classList.add('quiz__pregunta--sin-responder'); }

        // Solo se registra aquello sobre lo que hay evidencia: una pregunta
        // sin responder no dice nada, ni a favor ni en contra.
        if (respuesta !== -1) registrarResultado('q', quiz.i, acierto);

        inputs.forEach((input, j) => {
            const label = input.parentElement;
            label.classList.remove('quiz__opcion--correcta', 'quiz__opcion--incorrecta');
            if (j === quiz.correct) label.classList.add('quiz__opcion--correcta');
            else if (j === respuesta) label.classList.add('quiz__opcion--incorrecta');
            input.disabled = true;
        });

        const exp = $(`qexp-${i}`);
        exp.innerHTML = (respuesta === -1 ? T.ui.sinResponderPrefijo : '') + quiz.explanation;
        exp.classList.add('quiz__explicacion--visible');
    });

    const pct = Math.round(ok / quizActivo.length * 100);
    $('quiz-results').innerHTML = `
        <h2>${T.ui.resultados}</h2>
        <div class="resumen__nota ${scoreClass(pct)}">${pct}%</div>
        <div class="resumen__detalle">${T.ui.correctas(ok, quizActivo.length)}${sinResponder ? T.ui.sinResponderN(sinResponder) : ''}</div>
        <p>${scoreMessage(pct)}</p>
        <div class="desglose">${renderBreakdown(porModulo)}</div>
        <button class="boton-accion boton-accion--secundario" id="quiz-reset" style="margin-top:18px;">${T.ui.intentar}</button>`;
    actualizarStatsGlobales();
    $('quiz-results').style.display = 'block';
    $('quiz-submit').style.display = 'none';
    $('quiz-reset').addEventListener('click', () => { renderQuizzes(); window.scrollTo({top:0, behavior:'smooth'}); });
    $('quiz-results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

construirFiltros('quiz-filtros', (mod) => {
    quizActivo = mod === 'TODOS' ? quizzesData.slice() : quizzesData.filter(q => q.m === mod);
    renderQuizzes();
});

/* ---------------------- Arranque ---------------------- */
construirNav('quizzes');
construirBotonReinicio();
renderQuizzes();
actualizarStatsGlobales();
