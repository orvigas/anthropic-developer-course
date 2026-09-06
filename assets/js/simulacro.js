/* Página del simulacro de examen
   Extraído de tarjetas-interactivas.html · Certificación Anthropic */

"use strict";

/* =========================================================================
   SIMULACRO DE EXAMEN
   ========================================================================= */
const EXAM_N = 25;
const EXAM_SEGUNDOS = 20 * 60;

let examPreguntas = [], examRespuestas = [], examIndice = 0, examTimerId = null, examRestante = 0;
let examAvanceId = null;   // auto-avance pendiente tras elegir una opción

function normalizarParaExamen() {
    // banco + i acompañan a cada pregunta para que un fallo del simulacro
    // acabe en la misma lista de repaso que un fallo de su página propia.
    const mc = quizzesData.map((q, i) => ({ banco: 'q', i, m: q.m, q: q.q, options: q.options, correct: q.correct, explanation: q.explanation, tipo: T.tipos.q }));
    const vf = trueFalseData.map((t, i) => ({ banco: 'f', i, m: t.m, q: t.s, options: T.exam.vf, correct: t.v ? 0 : 1, explanation: t.e, tipo: T.tipos.f }));
    const cd = codeData.map((c, i) => ({ banco: 'c', i, m: c.m, q: c.titulo, code: c.code, options: c.options, correct: c.correct, explanation: c.explanation, tipo: T.tipos.c }));
    return mc.concat(vf, cd);
}

function renderRecordExamen() {
    if (!progreso.x.length) {
        $('exam-record').innerHTML = `<div class="bd-item" style="grid-column:1/-1"><div class="bd-mod">${T.exam.sinIntentos}</div></div>`;
        return;
    }
    const ultimos = progreso.x.slice(-4);
    const mejor = Math.max.apply(null, progreso.x.map(e => e.pct));
    $('exam-record').innerHTML =
        `<div class="bd-item"><div class="bd-mod">${T.exam.mejor}</div><div class="bd-val" style="color:var(--verde)">${mejor}%</div></div>` +
        ultimos.map(e => `<div class="bd-item"><div class="bd-mod">${fechaLegible(e.fecha)}</div><div class="bd-val">${e.pct}%</div></div>`).join('');
}

function formateaTiempo(seg) {
    const m = Math.floor(seg / 60), s = seg % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
}

function iniciarExamen() {
    examPreguntas = shuffled(normalizarParaExamen()).slice(0, EXAM_N);
    examRespuestas = new Array(examPreguntas.length).fill(-1);
    examIndice = 0;
    examRestante = EXAM_SEGUNDOS;

    $('exam-intro').style.display = 'none';
    $('exam-results').style.display = 'none';
    $('exam-run').style.display = 'block';
    $('exam-total').textContent = examPreguntas.length;

    clearInterval(examTimerId);
    examTimerId = setInterval(() => {
        examRestante--;
        $('exam-timer').textContent = formateaTiempo(Math.max(0, examRestante));
        $('exam-timer').classList.toggle('warn', examRestante <= 120);
        if (examRestante <= 0) finalizarExamen(true);
    }, 1000);
    $('exam-timer').textContent = formateaTiempo(examRestante);
    $('exam-timer').classList.remove('warn');

    renderExamPregunta();
}

function renderExamPregunta() {
    const p = examPreguntas[examIndice];
    $('exam-pos').textContent = examIndice + 1;
    $('exam-progress').style.width = ((examIndice + 1) / examPreguntas.length * 100) + '%';
    $('exam-prev').disabled = examIndice === 0;
    $('exam-next').disabled = examIndice === examPreguntas.length - 1;

    const respondidas = examRespuestas.filter(r => r !== -1).length;

    $('exam-panel').innerHTML = `
        <div class="q-meta">${MODULOS[p.m]} · ${p.tipo} · ${T.exam.respondidas(respondidas, examPreguntas.length)}</div>
        <h3 style="margin-bottom:12px;">${p.q}</h3>
        ${p.code ? `<pre class="code">${marcarHueco(p.code)}</pre>` : ''}
        <div class="quiz-options">
            ${p.options.map((op, j) => `
                <label class="quiz-option">
                    <input type="radio" name="ex" value="${j}" ${examRespuestas[examIndice] === j ? 'checked' : ''}>
                    <span>${op}</span>
                </label>`).join('')}
        </div>`;

    $('exam-panel').querySelectorAll('input[name="ex"]').forEach(input => {
        input.addEventListener('change', () => {
            examRespuestas[examIndice] = parseInt(input.value, 10);
            clearTimeout(examAvanceId);
            if (examIndice < examPreguntas.length - 1) {
                // El límite se vuelve a comprobar al disparar: en estos 180 ms
                // el usuario puede haber pulsado «Siguiente» por su cuenta, y
                // avanzar dos veces se saldría del array.
                examAvanceId = setTimeout(() => {
                    if (examIndice < examPreguntas.length - 1) {
                        examIndice++;
                        renderExamPregunta();
                    }
                }, 180);
            } else {
                renderExamPregunta();
            }
        });
    });
}

function finalizarExamen(porTiempo) {
    clearInterval(examTimerId);
    clearTimeout(examAvanceId);
    let ok = 0;
    const porModulo = {};

    examPreguntas.forEach((p, i) => {
        porModulo[p.m] = porModulo[p.m] || { ok: 0, total: 0 };
        porModulo[p.m].total++;
        const acierto = examRespuestas[i] === p.correct;
        if (acierto) { ok++; porModulo[p.m].ok++; }
        // Sin responder no se registra: no hay evidencia de si se sabía.
        if (examRespuestas[i] !== -1) registrarResultado(p.banco, p.i, acierto);
    });

    const pct = Math.round(ok / examPreguntas.length * 100);
    const sinResponder = examRespuestas.filter(r => r === -1).length;

    registrarSimulacro(pct);
    actualizarStatsGlobales();

    const fallos = examPreguntas
        .map((p, i) => ({ p, elegida: examRespuestas[i] }))
        .filter(x => x.elegida !== x.p.correct);

    $('exam-run').style.display = 'none';
    $('exam-results').style.display = 'block';
    $('exam-results').innerHTML = `
        <div class="panel summary">
            <h2>${porTiempo ? T.exam.tiempoAgotado : T.exam.completado}</h2>
            <div class="score ${scoreClass(pct)}">${pct}%</div>
            <div class="score-sub">${T.ui.correctas(ok, examPreguntas.length)}${sinResponder ? T.ui.sinResponderN(sinResponder) : ''}</div>
            <p>${scoreMessage(pct)}</p>
            <div class="breakdown">${renderBreakdown(porModulo)}</div>
            <button class="submit-btn" id="exam-again" style="margin-top:20px;">${T.exam.nuevo}</button>
        </div>
        ${fallos.length ? `
        <div class="panel">
            <h3 style="color:var(--morado-osc); margin-bottom:14px;">${T.exam.repasoFallos(fallos.length)}</h3>
            ${fallos.map(x => `
                <div class="quiz-question">
                    <div class="q-meta">${MODULOS[x.p.m]} · ${x.p.tipo}</div>
                    <h3>${x.p.q}</h3>
                    ${x.p.code ? `<pre class="code">${marcarHueco(x.p.code)}</pre>` : ''}
                    <div class="quiz-options">
                        <div class="quiz-option correct"><span>✓ ${x.p.options[x.p.correct]}</span></div>
                        ${x.elegida !== -1 ? `<div class="quiz-option incorrect"><span>✗ ${T.exam.tuRespuesta} ${x.p.options[x.elegida]}</span></div>`
                                           : `<div class="quiz-option"><span>${T.exam.sinResponder}</span></div>`}
                    </div>
                    <div class="answer-explanation show">${x.p.explanation}</div>
                </div>`).join('')}
        </div>` : `<div class="panel summary"><p>${T.exam.sinFallos}</p></div>`}`;

    $('exam-again').addEventListener('click', () => {
        $('exam-results').style.display = 'none';
        $('exam-intro').style.display = 'block';
        renderRecordExamen();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('exam-start').addEventListener('click', iniciarExamen);
$('exam-prev').addEventListener('click', () => { clearTimeout(examAvanceId); if (examIndice > 0) { examIndice--; renderExamPregunta(); } });
$('exam-next').addEventListener('click', () => { clearTimeout(examAvanceId); if (examIndice < examPreguntas.length - 1) { examIndice++; renderExamPregunta(); } });
$('exam-finish').addEventListener('click', () => finalizarExamen(false));

/* ---------------------- Arranque ---------------------- */
construirNav('exam');
construirBotonReinicio();
renderRecordExamen();
actualizarStatsGlobales();
