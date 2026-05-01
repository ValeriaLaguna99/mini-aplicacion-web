const form = document.getElementById("formTarea");
const input = document.getElementById("inputTarea");
const lista = document.getElementById("listaTareas");
const contador = document.getElementById("contador");

function actualizarContador() {
    const pendientes = document.querySelectorAll(".tarea:not(.completada)").length;
    contador.textContent = `Pendientes: ${pendientes}`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (texto === "") return; // No permitir vacíos

    crearTarea(texto, false);
    input.value = "";
    actualizarContador();
});

function crearTarea(texto, completada) {
    const li = document.createElement("li");
    li.className = "tarea";
    if (completada) li.classList.add("completada");

    const span = document.createElement("span");
    span.textContent = texto;
    
    span.addEventListener("click", () => {
        li.classList.toggle("completada");
        actualizarContador();
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.addEventListener("click", () => {
        li.remove();
        actualizarContador();
    });

    li.appendChild(span);
    li.appendChild(btnBorrar);
    lista.appendChild(li);
}