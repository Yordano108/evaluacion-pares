// --- ① DECLARACIÓN DE LA CLASE SOLICITADA ---
class Evaluadores {
    constructor(revisor) {
        this.revisor = revisor;
        this.revisado = "";
        this.repositorio = "";
    }
}

// --- LISTA DE INTEGRANTES CON SUS ENLACES DIRECTOS A GITHUB ---
const INTEGRANTES = [
    { nombre: "Aya", github: "https://github.com/ayaelo9" },
    { nombre: "Cristian", github: "https://github.com/xiles5" },
    { nombre: "Cyrille", github: "https://github.com/cyrille514" },
    { nombre: "David", github: "https://github.com/dayvip369" },
    { nombre: "Guillermo", github: "https://github.com/codeguille98" },
    { nombre: "Jenifer", github: "https://github.com/jenifer-al" },
    { nombre: "Joelle", github: "https://github.com/moussijoelle" },
    { nombre: "Maxi", github: "https://github.com/mx-2-d" },
    { nombre: "Mohammed", github: "https://github.com/MohammedZakhbat" },
    { nombre: "Naomi", github: "https://github.com/naomiquitosalazar-cyber" },
    { nombre: "Nataliya", github: "https://github.com/nataliya-stack" },
    { nombre: "Yolanda", github: "https://github.com/fontanillus" },
    { nombre: "Yordano", github: "https://github.com/yordano108" },
];

// --- ② Y ③ FUNCIÓN ALGORÍTMICA PRINCIPAL ---
const generarAsignaciones = (integrantes) => {
    if (!Array.isArray(integrantes) || integrantes.length < 2) return [];
    const cantidad = integrantes.length;

    const revisiones = integrantes.map(
        (alumno) => new Evaluadores(alumno.nombre),
    );

    let indicesAsignados = [];
    let intentoGeneral = 0;

    while (indicesAsignados.length < cantidad) {
        indicesAsignados = [];
        intentoGeneral++;

        if (intentoGeneral > 100) {
            revisiones.forEach((r) => {
                r.revisado = "";
                r.repositorio = "";
            });
            intentoGeneral = 0;
        }

        for (let i = 0; i < cantidad; i++) {
            const revisorActual = revisiones[i].revisor;
            let indexRevisado;
            let intentos = 0;

            do {
                const numeroAleatorio =
                    Math.floor(Math.random() * cantidad) + 1;
                indexRevisado = numeroAleatorio - 1;
                intentos++;
                if (intentos > 50) break;
            } while (
                revisorActual === integrantes[indexRevisado].nombre ||
                indicesAsignados.includes(indexRevisado)
            );

            if (intentos > 50) break;

            const alumnoRevisado = integrantes[indexRevisado];
            revisiones[i].revisado = alumnoRevisado.nombre;
            revisiones[i].repositorio = alumnoRevisado.github; // Enlace directo

            indicesAsignados.push(indexRevisado);
        }
    }

    return revisiones;
};
