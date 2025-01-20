
function calcular() {
    let respuesta1 = document.getElementById("respuesta1");
    let respuesta2 = document.getElementById("respuesta2");
    let respuesta3 = document.getElementById("respuesta3");

    let elementoEdad = document.getElementById("textoEdad");
    let edad = elementoEdad.value;

    let puedeBeber = edad >= 18;
    respuesta1.textContent = puedeBeber;

    let puedeIngresar = edad >= 18 && edad <=30;
    respuesta2.textContent = puedeIngresar;

    let tieneEntradaGratis = edad === 20 || edad === 25;
    respuesta3.textContent = tieneEntradaGratis;

} 




