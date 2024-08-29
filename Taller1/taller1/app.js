
function AgregarTarea() {
    let texto = document.getElementById("texto").value;

    if (texto.trim() === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(texto);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    document.getElementById("texto").value = "";

   
    alert("Tarea registrada ");
}
function mostrarTareas() {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    if (cuerpoTabla) { 
        cuerpoTabla.innerHTML = ""; 

        tareas.forEach((tarea, index) => {
            let fila = document.createElement("tr");

            let celdaTarea = document.createElement("td");
            celdaTarea.textContent = tarea;
            fila.appendChild(celdaTarea);

            let celdaOpciones = document.createElement("td");
            let btnEliminar = document.createElement("button");
            btnEliminar.className = "btn btn-danger btn-sm";
            btnEliminar.textContent = "Eliminar";
            btnEliminar.onclick = function() {
                eliminarTarea(index);
            };
            celdaOpciones.appendChild(btnEliminar);
            fila.appendChild(celdaOpciones);

            cuerpoTabla.appendChild(fila);
        });
    }
}


function eliminarTarea(index) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.splice(index, 1); 
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas(); 
}


document.addEventListener("DOMContentLoaded", function() {
    mostrarTareas();
});
