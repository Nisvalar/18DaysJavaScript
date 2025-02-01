
let empleados = [];

function Empleado(numero, nombre, apellido, nacimiento, cargo){ 
    this.numero = numero;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

function cargarEmpleados(){
    let numero = document.getElementById("textoNumero").value;
    let nombre = document.getElementById("textoNombre").value;
    let apellido = document.getElementById("textoApellido").value;
    let nacimiento = document.getElementById("textoFecha").value;
    let cargo = document.getElementById("textoCargo").value;

    let empleado = new Empleado(numero, nombre, apellido, nacimiento, cargo);

    empleados.push(empleado);

    limpiarCampos();

    //Esta ultima parte fue mi forma de hacerlo, declarando fuera de la funcion x = 0;
    //empleados[x] = empleado;
    //x++;

}


function mostrarEmpleados() {
    let lista = document.getElementById("empleados-list");
    lista.innerHTML = ""; // Limpiamos la lista antes de mostrar los empleados

    for(let item of empleados){
            let li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.nombre} ${item.apellido}</strong><br>
            Número: ${item.numero}<br>
            Fecha de Nacimiento: ${item.nacimiento}<br>
            Cargo: ${item.cargo}
        `;
        lista.appendChild(li);
    }
}

function limpiarCampos() {
    document.getElementById("textoNumero").value = "";
    document.getElementById("textoNombre").value = "";
    document.getElementById("textoApellido").value = "";
    document.getElementById("textoFecha").value = "";
    document.getElementById("textoCargo").value = "";

}
