
//Constructor
function Coche(marca, modelo, color, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}


//Declaración de 3 coches
let coche1 = new Coche('Renault', 'Megane', 'Azul Cosmos', 2019, 'José David');
let coche2 = new Coche('Crysler', 'Voyager', 'Verde Oscuro', 2005, 'Encarni');
let coche3 = new Coche('Renault', 'Master', 'Blanco', 2000, 'Pepe');

let listaCoches = [coche1, coche2, coche3];


//Métodos
Coche.prototype.venderAutomovil = function (titular) {
    this.titular = titular;
    alert("El nuevo titular es: "+titular);
}

Coche.prototype.verAuto = function (){
    return `${this.marca} ${this.modelo} ${this.color} - ${this.anio} - ${this.titular}`;
}

Coche.prototype.encender = function(){
    alert("El automovil fue encendido");
}

function verRegistros(){
    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let coche of listaCoches){
        let registro = document.createElement("li");
        registro.innerText = coche.verAuto();
        lista.appendChild(registro);
    }

}