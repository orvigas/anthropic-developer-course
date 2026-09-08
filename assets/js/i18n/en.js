/* Text catalogue · English
   All the logic under assets/js/ is shared between both languages; the only
   things that change are this object and the banks in assets/js/datos/<lang>/.
   Entries that depend on counts or agreement are functions, so each language
   resolves its own grammar. */

"use strict";

const T = {
    lang: 'en',
    htmlLang: 'en',

    /* --------------------------- Navigation --------------------------- */
    paginas: [
        { id: 'tarjetas',  archivo: 'index.html',           etiqueta: '🃏 Flashcards' },
        { id: 'quizzes',   archivo: 'multiple-choice.html', etiqueta: '✅ Multiple choice' },
        { id: 'truefalse', archivo: 'true-false.html',      etiqueta: '⚡ True/False' },
        { id: 'match',     archivo: 'matching.html',        etiqueta: '🔗 Matching' },
        { id: 'code',      archivo: 'fill-in-code.html',    etiqueta: '⌨️ Fill in the code' },
        { id: 'ejemplos',  archivo: 'examples.html',        etiqueta: '🧪 Examples' },
        { id: 'exam',      archivo: 'mock-exam.html',       etiqueta: '🎓 Mock exam' },
        { id: 'repaso',    archivo: 'what-to-review.html',  etiqueta: '🎯 What to review' },
        { id: 'cuadros',  archivo: 'comparison-tables.html', etiqueta: '📊 Charts' },
        { id: 'guide',     archivo: 'guide.html',           etiqueta: '📖 Quick guide' }
    ],
    otroIdioma: { href: '../es/index.html', etiqueta: 'Español' },

    /* Name of each practice bank and the page where it is practised. */
    bancos: {
        t: 'Flashcards', q: 'Multiple choice', f: 'True/False',
        c: 'Fill in the code', p: 'Matching', e: 'Examples'
    },
    paginaDeBanco: {
        t: 'index.html', q: 'multiple-choice.html', f: 'true-false.html',
        c: 'fill-in-code.html', p: 'matching.html', e: 'examples.html'
    },
    tipos: {
        t: 'Flashcard', q: 'Multiple choice', f: 'True/False',
        c: 'Fill in the code', p: 'Matching', e: 'Example'
    },

    /* ----------------------------- Storage ----------------------------- */
    meses: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    medio: {
        cookie: 'Progress saved in a cookie in this browser.',
        local: 'This browser does not allow cookies on local files: progress is saved in localStorage.',
        ninguno: 'No storage available: progress will be lost when you close the page.'
    },

    /* ------------------------- Shared header --------------------------- */
    score: {
        excelente: 'Excellent! 🎉 You are at exam level.',
        bien: 'Well done! 👍 One more review pass and you are ready.',
        encaminado: '📚 You are on track. Go back over the modules you missed.',
        insuficiente: '⚠️ Needs more study. Return to the modules and the flashcards.'
    },
    stats: {
        tarjetas: n => `🃏 ${n} flashcards`,
        preguntas: n => `❓ ${n} questions`,
        ejemplos: n => `🧪 ${n} examples`,
        dominadas: n => `✓ ${n} mastered`,
        porRepasar: n => `↻ ${n} to review`,
        ultimo: v => `🎓 Last mock exam: ${v}`
    },
    filtroTodos: 'All',
    reinicio: {
        boton: '🗑️ Reset course',
        aviso: 'This will erase all your progress and everything marked for review.',
        si: 'Yes, erase',
        no: 'Cancel'
    },

    /* ----------------------- Quizzes and code -------------------------- */
    ui: {
        resultados: 'Results',
        pregunta: (i, n) => `Question ${i} of ${n}`,
        ejercicio: (i, n) => `Exercise ${i} of ${n}`,
        correctas: (ok, n) => `${ok} of ${n} correct`,
        correctos: (ok, n) => `${ok} of ${n} correct`,
        sinResponderN: n => ` · ${n} unanswered`,
        sinResponderPrefijo: '<strong>Not answered.</strong> ',
        intentar: '🔄 Try again',
        vacioPreguntas: 'No questions for this filter.'
    },

    /* ---------------------------- Flashcards --------------------------- */
    fc: {
        vacio: 'No flashcards for this filter.',
        dominada: '✓ mastered',
        porRepasar: '↻ to review',
        sinMarcar: 'unmarked'
    },

    /* ---------------------------- True/False --------------------------- */
    vf: {
        vacio: 'No statements for this filter.',
        btnV: '✓ True',
        btnF: '✗ False',
        veredicto: (ok, v) =>
            `${ok ? '✅ Correct' : '❌ Incorrect'} — the answer is ${v ? 'True' : 'False'}.`,
        ronda: 'Round complete'
    },

    /* ----------------------------- Matching ---------------------------- */
    match: {
        vacio: 'No exercises for this filter.',
        termino: 'Term',
        definicion: 'Definition',
        estado: (hechos, total) => `${hechos} of ${total} matched`,
        completado: total => `✅ Complete: ${total} of ${total}`
    },

    /* ----------------------------- Examples ---------------------------- */
    ej: {
        vacio: 'No examples for this filter.',
        objetivo: 'Goal.',
        necesitas: 'You need:',
        copiar: '📋 Copy',
        copiado: '✓ Copied',
        queVeras: 'What you will see',
        dondeSeRompe: 'Where it breaks.',
        yaLoProbe: 'I ran this'
    },
    cua: {
        vacio: 'No charts for this filter.',
        contador: n => `${n} comparison chart${n === 1 ? '' : 's'}`
    },

    /* -------------------------- What to review ------------------------- */
    rep: {
        deAcierto: 'correct',
        respondidos: (ok, v) => `${ok} of ${v} answered`,
        materialVisto: 'of the material seen',
        elementos: (v, t) => `${v} of ${t} items`,
        porReforzar: 'to review',
        pendientes: 'get them right again to clear them',
        nadaPendiente: 'nothing pending',
        ultimoSimulacro: 'last mock exam',
        sinIntentos: 'no attempts',
        sinPracticar: 'not practised',
        moduloPracticado: cob => `${cob}% of the module practised`,
        pieBarra: (ok, mal, sinVer) => `${ok} correct · ${mal} to review · ${sinVer} unseen`,
        vacioTitulo: '🎉 Nothing marked for review',
        vacioTexto: 'Practise on any of the pages and whatever you miss will show up here, with a suggestion of what to review and where.',
        cuenta: n => `${n} to review`,
        tocado: n => `${n} miss${n === 1 ? '' : 'es'}`,
        practicaCon: '🎯 Practise with',
        pilaresTitulo: 'Start with the four pillars of the module',
        sinPilar: n => `${n} miss${n === 1 ? '' : 'es'} in this module ${n === 1 ? 'does' : 'do'} not ` +
                       `map cleanly onto a pillar: review ${n === 1 ? 'it' : 'them'} in the list below.`,
        ejemplosPendientes: n => `🧪 You still have ${n} example${n === 1 ? '' : 's'} from this module to run. ` +
                                 `Writing them out fixes what the questions only let you recognise: `,
        irEjemplos: 'go to the examples',
        nadaEnModulo: 'Nothing marked in this module.',
        nadaFallado: 'You have not missed anything yet. Start on any practice page.',
        grupo: n => `${n} item${n === 1 ? '' : 's'}`,
        practicar: 'Practise',
        yaLoSe: '✓ I know this'
    },

    /* ---------------------------- Mock exam ---------------------------- */
    exam: {
        vf: ['True', 'False'],
        sinIntentos: 'No attempts yet',
        mejor: 'Best',
        respondidas: (r, n) => `${r}/${n} answered`,
        tiempoAgotado: '⏰ Time is up',
        completado: 'Mock exam complete',
        nuevo: '🔄 New mock exam',
        repasoFallos: n => `Review of the ${n} misses`,
        tuRespuesta: 'Your answer:',
        sinResponder: '— Not answered',
        sinFallos: '🎯 No misses. Nothing to review.'
    }
};
