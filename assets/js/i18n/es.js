/* Catálogo de textos · español
   Toda la lógica de assets/js/ es común a los dos idiomas; lo único que
   cambia es este objeto y los bancos de assets/js/datos/<idioma>/.
   Las entradas que dependen de números o de género son funciones, para que
   cada idioma resuelva su propia gramática. */

"use strict";

const T = {
    lang: 'es',
    htmlLang: 'es',

    /* --------------------------- Navegación --------------------------- */
    paginas: [
        { id: 'tarjetas',  archivo: 'index.html',            etiqueta: '🃏 Tarjetas' },
        { id: 'quizzes',   archivo: 'opcion-multiple.html',  etiqueta: '✅ Opción múltiple' },
        { id: 'truefalse', archivo: 'verdadero-falso.html',  etiqueta: '⚡ Verdadero/Falso' },
        { id: 'match',     archivo: 'emparejar.html',        etiqueta: '🔗 Emparejar' },
        { id: 'code',      archivo: 'completar-codigo.html', etiqueta: '⌨️ Completar código' },
        { id: 'ejemplos',  archivo: 'ejemplos.html',         etiqueta: '🧪 Ejemplos' },
        { id: 'exam',      archivo: 'simulacro.html',        etiqueta: '🎓 Simulacro' },
        { id: 'repaso',    archivo: 'repaso.html',           etiqueta: '🎯 Qué reforzar' },
        { id: 'guide',     archivo: 'guia.html',             etiqueta: '📖 Guía rápida' }
    ],
    otroIdioma: { href: '../en/index.html', etiqueta: 'English' },

    /* Nombre de cada banco de práctica y página donde se practica. */
    bancos: {
        t: 'Tarjetas', q: 'Opción múltiple', f: 'Verdadero/Falso',
        c: 'Completar código', p: 'Emparejar', e: 'Ejemplos'
    },
    paginaDeBanco: {
        t: 'index.html', q: 'opcion-multiple.html', f: 'verdadero-falso.html',
        c: 'completar-codigo.html', p: 'emparejar.html', e: 'ejemplos.html'
    },
    tipos: {
        t: 'Tarjeta', q: 'Opción múltiple', f: 'Verdadero/Falso',
        c: 'Completar código', p: 'Emparejar', e: 'Ejemplo'
    },

    /* -------------------------- Almacenamiento ------------------------- */
    meses: ['ene', 'feb', 'mar', 'abr', 'may', 'jun',
            'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    medio: {
        cookie: 'Progreso guardado en una cookie de este navegador.',
        local: 'Este navegador no admite cookies en archivos locales: el progreso se guarda en localStorage.',
        ninguno: 'Sin almacenamiento disponible: el progreso se perderá al cerrar la página.'
    },

    /* ------------------------ Cabecera compartida ---------------------- */
    score: {
        excelente: '¡Excelente! 🎉 Estás en nivel de examen.',
        bien: '¡Muy bien! 👍 Un repaso más y quedas listo.',
        encaminado: '📚 Vas encaminado. Revisa los módulos donde fallaste.',
        insuficiente: '⚠️ Requiere estudio adicional. Vuelve a los módulos y a las tarjetas.'
    },
    stats: {
        tarjetas: n => `🃏 ${n} tarjetas`,
        preguntas: n => `❓ ${n} preguntas`,
        ejemplos: n => `🧪 ${n} ejemplos`,
        dominadas: n => `✓ ${n} dominadas`,
        porRepasar: n => `↻ ${n} por repasar`,
        ultimo: v => `🎓 Último simulacro: ${v}`
    },
    filtroTodos: 'Todos',
    reinicio: {
        boton: '🗑️ Reiniciar curso',
        aviso: 'Se borrará todo tu progreso y los temas por reforzar.',
        si: 'Sí, borrar',
        no: 'Cancelar'
    },

    /* --------------------- Cuestionarios y código ---------------------- */
    ui: {
        resultados: 'Resultados',
        pregunta: (i, n) => `Pregunta ${i} de ${n}`,
        ejercicio: (i, n) => `Ejercicio ${i} de ${n}`,
        correctas: (ok, n) => `${ok} de ${n} correctas`,
        correctos: (ok, n) => `${ok} de ${n} correctos`,
        sinResponderN: n => ` · ${n} sin responder`,
        sinResponderPrefijo: '<strong>Sin responder.</strong> ',
        intentar: '🔄 Intentar de nuevo',
        vacioPreguntas: 'No hay preguntas para este filtro.'
    },

    /* ------------------------------ Tarjetas --------------------------- */
    fc: {
        vacio: 'No hay tarjetas para este filtro.',
        dominada: '✓ dominada',
        porRepasar: '↻ por repasar',
        sinMarcar: 'sin marcar'
    },

    /* -------------------------- Verdadero/Falso ------------------------ */
    vf: {
        vacio: 'No hay afirmaciones para este filtro.',
        btnV: '✓ Verdadero',
        btnF: '✗ Falso',
        veredicto: (ok, v) =>
            `${ok ? '✅ Correcto' : '❌ Incorrecto'} — la respuesta es ${v ? 'Verdadero' : 'Falso'}.`,
        ronda: 'Ronda completada'
    },

    /* ----------------------------- Emparejar --------------------------- */
    match: {
        vacio: 'No hay ejercicios para este filtro.',
        termino: 'Término',
        definicion: 'Definición',
        estado: (hechos, total) => `${hechos} de ${total} emparejados`,
        completado: total => `✅ Completado: ${total} de ${total}`
    },

    /* ------------------------------ Ejemplos --------------------------- */
    ej: {
        vacio: 'No hay ejemplos para este filtro.',
        objetivo: 'Objetivo.',
        necesitas: 'Necesitas:',
        copiar: '📋 Copiar',
        copiado: '✓ Copiado',
        queVeras: 'Qué verás',
        dondeSeRompe: 'Dónde se rompe.',
        yaLoProbe: 'Ya lo probé'
    },

    /* ---------------------------- Qué reforzar ------------------------- */
    rep: {
        deAcierto: 'de acierto',
        respondidos: (ok, v) => `${ok} de ${v} respondidos`,
        materialVisto: 'del material visto',
        elementos: (v, t) => `${v} de ${t} elementos`,
        porReforzar: 'por reforzar',
        pendientes: 'aciértalos otra vez para quitarlos',
        nadaPendiente: 'nada pendiente',
        ultimoSimulacro: 'último simulacro',
        sinIntentos: 'sin intentos',
        sinPracticar: 'sin practicar',
        moduloPracticado: cob => `${cob}% del módulo practicado`,
        pieBarra: (ok, mal, sinVer) => `${ok} acertados · ${mal} por reforzar · ${sinVer} sin ver`,
        vacioTitulo: '🎉 No hay nada marcado para reforzar',
        vacioTexto: 'Practica en cualquiera de las páginas y lo que falles aparecerá aquí, con la sugerencia de qué repasar y dónde.',
        cuenta: n => `${n} por reforzar`,
        tocado: n => `${n} fallo${n === 1 ? '' : 's'}`,
        practicaCon: '🎯 Practica con',
        pilaresTitulo: 'Empieza por los cuatro pilares del módulo',
        sinPilar: n => `${n} fallo${n === 1 ? '' : 's'} de este módulo no encaja${n === 1 ? '' : 'n'} ` +
                       `claramente en un pilar: revísalo${n === 1 ? '' : 's'} en la lista de abajo.`,
        ejemplosPendientes: n => `🧪 Te quedan ${n} ejemplo${n === 1 ? '' : 's'} de este módulo sin probar. ` +
                                 `Escribirlos fija lo que las preguntas solo reconocen: `,
        irEjemplos: 'ir a los ejemplos',
        nadaEnModulo: 'Nada marcado en este módulo.',
        nadaFallado: 'Todavía no has fallado nada. Empieza por cualquier página de práctica.',
        grupo: n => `${n} elemento${n === 1 ? '' : 's'}`,
        practicar: 'Practicar',
        yaLoSe: '✓ Ya lo sé'
    },

    /* ----------------------------- Simulacro --------------------------- */
    exam: {
        vf: ['Verdadero', 'Falso'],
        sinIntentos: 'Sin intentos todavía',
        mejor: 'Mejor',
        respondidas: (r, n) => `${r}/${n} respondidas`,
        tiempoAgotado: '⏰ Se acabó el tiempo',
        completado: 'Simulacro completado',
        nuevo: '🔄 Nuevo simulacro',
        repasoFallos: n => `Repaso de los ${n} fallos`,
        tuRespuesta: 'Tu respuesta:',
        sinResponder: '— Sin responder',
        sinFallos: '🎯 Sin fallos. Nada que repasar.'
    }
};
