/* Almacén de progreso · Certificación Anthropic
   Guarda en cookie, con localStorage como respaldo automático.

   Dos restricciones mandan sobre el diseño:

   1. Una cookie no pasa de ~4 KB. Un mapa de claves de texto no cabe:
      90 tarjetas indexadas por su pregunta recortada ya superan ese tope.
      Por eso cada banco se guarda como una cadena de dígitos, un carácter
      por elemento, indexada por su posición en el array de datos.

   2. Chrome no admite cookies en páginas file://. Como este material se
      abre justamente así (el enlace ./index.html), la capa comprueba al
      arrancar si la cookie realmente se escribe y, si no, cae sola a
      localStorage. `ALMACEN.medio` dice cuál quedó en uso. */

"use strict";

const ALMACEN = {
    nombre: 'cert-anthropic',
    version: 1,
    dias: 365,
    maxCookie: 3800,   // margen sobre el tope real de ~4096 bytes
    medio: 'ninguno'   // 'cookie' | 'localStorage' | 'ninguno'
};

/* Estados que puede tener un elemento en cualquier banco:
     0  sin tocar
     1  acertado / dominado / probado
     2  fallado / marcado para repasar          */
const BANCOS = {
    t: 'Tarjetas',
    q: 'Opción múltiple',
    f: 'Verdadero/Falso',
    c: 'Completar código',
    p: 'Emparejar',
    e: 'Ejemplos'
};

/* Página donde se practica cada banco, para poder enlazar un fallo. */
const PAGINA_DE_BANCO = {
    t: 'tarjetas-interactivas.html',
    q: 'opcion-multiple.html',
    f: 'verdadero-falso.html',
    c: 'completar-codigo.html',
    p: 'emparejar.html',
    e: 'ejemplos.html'
};

function nuevoProgreso() {
    const p = { x: [] };                       // x = historial de simulacros
    Object.keys(BANCOS).forEach(b => { p[b] = []; });
    return p;
}

/* ---------------------- Medio de almacenamiento ---------------------- */

function cookiesFuncionan() {
    try {
        document.cookie = '__prueba_cert=1; path=/; SameSite=Lax';
        const ok = document.cookie.indexOf('__prueba_cert=') !== -1;
        document.cookie = '__prueba_cert=; Max-Age=0; path=/; SameSite=Lax';
        return ok;
    } catch (e) {
        return false;
    }
}

function localStorageFunciona() {
    try {
        localStorage.setItem('__prueba_cert', '1');
        localStorage.removeItem('__prueba_cert');
        return true;
    } catch (e) {
        return false;   // modo privado, o file:// con almacenamiento bloqueado
    }
}

function resolverMedio() {
    if (cookiesFuncionan()) return 'cookie';
    if (localStorageFunciona()) return 'localStorage';
    return 'ninguno';       // el progreso vivirá solo mientras dure la página
}

function descripcionDelMedio() {
    if (ALMACEN.medio === 'cookie') return 'Progreso guardado en una cookie de este navegador.';
    if (ALMACEN.medio === 'localStorage') return 'Este navegador no admite cookies en archivos locales: el progreso se guarda en localStorage.';
    return 'Sin almacenamiento disponible: el progreso se perderá al cerrar la página.';
}

/* ---------------------- Lectura y escritura ---------------------- */

function leerCrudo() {
    if (ALMACEN.medio === 'cookie') {
        const par = document.cookie.split('; ').find(c => c.indexOf(ALMACEN.nombre + '=') === 0);
        return par ? decodeURIComponent(par.slice(ALMACEN.nombre.length + 1)) : '';
    }
    if (ALMACEN.medio === 'localStorage') {
        try { return localStorage.getItem(ALMACEN.nombre) || ''; } catch (e) { return ''; }
    }
    return '';
}

function escribirCrudo(txt) {
    if (ALMACEN.medio === 'cookie') {
        document.cookie = ALMACEN.nombre + '=' + encodeURIComponent(txt) +
            '; Max-Age=' + (ALMACEN.dias * 86400) + '; path=/; SameSite=Lax';
        return;
    }
    if (ALMACEN.medio === 'localStorage') {
        try { localStorage.setItem(ALMACEN.nombre, txt); } catch (e) { /* cuota llena */ }
    }
}

function borrarCrudo() {
    document.cookie = ALMACEN.nombre + '=; Max-Age=0; path=/; SameSite=Lax';
    try { localStorage.removeItem(ALMACEN.nombre); } catch (e) { /* nada que borrar */ }
}

/* ---------------------- Codificación compacta ---------------------- */
/* Formato:  1|t:0102...|q:1122...|x:91@0609,78@0509
   Los ceros finales de cada banco se recortan: un banco sin tocar no ocupa. */

function codificar(p) {
    const partes = [String(ALMACEN.version)];
    Object.keys(BANCOS).forEach(b => {
        const s = (p[b] || []).map(v => v || 0).join('').replace(/0+$/, '');
        if (s) partes.push(b + ':' + s);
    });
    if (p.x && p.x.length) {
        partes.push('x:' + p.x.map(e => e.pct + '@' + e.fecha).join(','));
    }
    return partes.join('|');
}

function decodificar(txt) {
    const p = nuevoProgreso();
    if (!txt) return p;
    const partes = txt.split('|');
    // Un formato de versión distinta se descarta: es preferible empezar de
    // cero a interpretar índices que ya no significan lo mismo.
    if (partes[0] !== String(ALMACEN.version)) return p;

    partes.slice(1).forEach(par => {
        const corte = par.indexOf(':');
        if (corte === -1) return;
        const clave = par.slice(0, corte), valor = par.slice(corte + 1);
        if (clave === 'x') {
            p.x = valor.split(',').filter(Boolean).map(e => {
                const t = e.split('@');
                return { pct: parseInt(t[0], 10) || 0, fecha: t[1] || '' };
            });
        } else if (BANCOS[clave]) {
            p[clave] = valor.split('').map(d => parseInt(d, 10) || 0);
        }
    });
    return p;
}

/* ---------------------- API pública ---------------------- */

ALMACEN.medio = resolverMedio();
let progreso = decodificar(leerCrudo());

function guardarProgreso() {
    let txt = codificar(progreso);
    // Si el historial de simulacros hace crecer la cookie por encima del
    // tope, se recorta por el extremo más antiguo antes de perder nada más.
    while (ALMACEN.medio === 'cookie' && txt.length > ALMACEN.maxCookie && progreso.x.length) {
        progreso.x.shift();
        txt = codificar(progreso);
    }
    escribirCrudo(txt);
}

function reiniciarProgreso() {
    progreso = nuevoProgreso();
    borrarCrudo();
}

function estadoItem(banco, i) {
    return (progreso[banco] && progreso[banco][i]) || 0;
}

function marcarItem(banco, i, estado) {
    if (!progreso[banco]) progreso[banco] = [];
    for (let k = progreso[banco].length; k < i; k++) progreso[banco][k] = 0;
    progreso[banco][i] = estado;
    guardarProgreso();
}

/* Registra el resultado de un intento. Acertar un elemento que estaba
   marcado como fallado lo saca de la lista de repaso: esa es la señal de
   que el repaso surtió efecto. */
function registrarResultado(banco, i, acertado) {
    marcarItem(banco, i, acertado ? 1 : 2);
}

function fallosDe(banco) {
    const lista = progreso[banco] || [];
    const fallos = [];
    for (let i = 0; i < lista.length; i++) if (lista[i] === 2) fallos.push(i);
    return fallos;
}

function conteoBanco(banco) {
    const lista = progreso[banco] || [];
    let ok = 0, mal = 0;
    lista.forEach(v => { if (v === 1) ok++; else if (v === 2) mal++; });
    return { ok, mal, vistos: ok + mal };
}

function registrarSimulacro(pct) {
    const d = new Date();
    const fecha = String(d.getDate()).padStart(2, '0') + String(d.getMonth() + 1).padStart(2, '0');
    progreso.x.push({ pct, fecha });
    progreso.x = progreso.x.slice(-12);
    guardarProgreso();
}

function fechaLegible(ddmm) {
    if (!ddmm || ddmm.length !== 4) return ddmm || '—';
    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun',
                   'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    return ddmm.slice(0, 2) + ' ' + (meses[parseInt(ddmm.slice(2), 10) - 1] || '');
}
