const input = document.getElementById("inputTarea");
const btn = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

btn.addEventListener("click", () => {
    const texto = input.value.trim();
   
    if (texto === "") return;

    const li = document.createElement("li");
    li.className = "tarea";
    
    const spanTexto = document.createElement("span");
    spanTexto.textContent = texto + " ";
    
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    
    btnBorrar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(spanTexto);
    li.appendChild(btnBorrar);

    lista.appendChild(li);
    
    input.value = "";
});