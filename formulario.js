const temaSelect = document.getElementById("tema");
const temaOtroInput = document.getElementById("tema_otro");
temaSelect.addEventListener("change", () => {
    temaOtroInput.style.display = temaSelect.value === "otro" ? "inline" : "none";
});


const AgregarFoto = document.getElementById("agregarFoto");
const fotosContainer = document.getElementById("fotosContainer");
AgregarFoto.addEventListener("click", () => {
    const totalFotos = fotosContainer.querySelectorAll('input[type="file"]').length;
    if (totalFotos >= 5) {
        alert("Solo puedes subir hasta 5 fotos.");
        return;
    }

    const nuevaFoto = document.createElement("input");
    nuevaFoto.type = "file";
    nuevaFoto.name = "fotos";
    nuevaFoto.accept = "image/*";
    fotosContainer.appendChild(nuevaFoto);
});


const AgregarActividad = document.getElementById("agregarActividad");
const form = document.getElementById("actividadForm");
const confirmacionDiv = document.getElementById("confirmacion");

AgregarActividad.addEventListener("click", () => {
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const inicio = form.inicio.value;
    const termino = form.termino.value;

    if (!nombre || !email || !inicio) {
        alert("Por favor completa nombre, email y fecha de inicio.");
        return;
    }

    const fechaInicio = new Date(inicio);


    if (termino) {
        const fechaTermino = new Date(termino);
        if (fechaTermino <= fechaInicio) {
            alert("La fecha de término debe ser mayor a la fecha de inicio.");
            return;
        }
    }


    const fotosInputs = fotosContainer.querySelectorAll('input[type="file"]');
    const fotosSeleccionadas = Array.from(fotosInputs).filter(input => input.files.length > 0);

    if (fotosSeleccionadas.length < 1) {
        alert("Debes seleccionar al menos una foto.");
        return;
    }
    if (fotosSeleccionadas.length > 5) {
        alert("No puedes subir más de 5 fotos.");
        return;
    }
    confirmacionDiv.style.display = "block";
    form.style.display = "none";
});
const Confirmar = document.getElementById("confirmar");
const Cancelar = document.getElementById("cancelar");
const mensajeFinal = document.getElementById("mensajeFinal");
Confirmar.addEventListener("click", () => {
    confirmacionDiv.style.display = "none";
    mensajeFinal.style.display = "block";
});

Cancelar.addEventListener("click", () => {
    confirmacionDiv.style.display = "none";
    form.style.display = "block";
});
const inputInicio = document.getElementById("inicio");
const inputTermino = document.getElementById("termino");

const now = new Date();
const tresHorasDespues = new Date(now.getTime() + 3 * 60 * 60 * 1000);

inputInicio.value = now.toISOString().slice(0, 16);
inputTermino.value = tresHorasDespues.toISOString().slice(0, 16);