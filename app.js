const BOTON_GENERAR = document.getElementById("generar-parejas");
const CONTENEDOR_RESULTADO = document.getElementById("resultado");

if (BOTON_GENERAR && CONTENEDOR_RESULTADO) {
    BOTON_GENERAR.addEventListener("click", () => {
        const revisionesFinales = generarAsignaciones(INTEGRANTES);

        let tablaHTML = `
            <div class="w-full overflow-x-auto">
                <table class="w-full border-collapse text-sm text-left">
                    <thead>
                        <tr class="border-b border-[#83c5be]/30 text-[#83c5be] font-mono uppercase tracking-wider text-xs">
                            <th class="py-3 px-4">🔍 Revisor</th>
                            <th class="py-3 px-4">📝 Alumno a Revisar</th>
                            <th class="py-3 px-4">📂 Repositorio Asignado</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-[#006d77]/20">
        `;

        revisionesFinales.forEach((rev) => {
            tablaHTML += `
                <tr class="hover:bg-white/2 transition-colors font-mono">
                    <td class="py-3 px-4 text-[#edf6f9] font-bold">${rev.revisor}</td>
                    <td class="py-3 px-4 text-[#83c5be]">${rev.revisado}</td>
                    <td class="py-3 px-4 text-xs break-all">
                        <a href="${rev.repositorio}" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="text-[#83c5be] hover:text-[#edf6f9] underline decoration-[#006d77] transition-colors inline-flex items-center gap-1 font-bold">
                        <svg xmlns="http://w3.org" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
    Ir al GitHub
                        </a>
                    </td>
                </tr>
            `;
        });

        tablaHTML += `
                    </tbody>
                </table>
            </div>
        `;

        CONTENEDOR_RESULTADO.innerHTML = tablaHTML;
    });
}
