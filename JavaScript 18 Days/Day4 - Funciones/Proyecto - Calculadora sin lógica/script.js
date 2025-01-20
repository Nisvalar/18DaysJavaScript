
//Declaración de variables
let resultado = 0;

function mostrarResultado() {
    let textoResultado = document.getElementById("resultado");
    textoResultado.textContent = resultado;
}

function suma(){
    let campo1 = parseFloat(document.getElementById("campo1").value);
    let campo2 = parseFloat(document.getElementById("campo2").value);

    resultado = campo2 + campo1;
    mostrarResultado();
}

function resta() {
    let campo1 = parseFloat(document.getElementById("campo1").value);
    let campo2 = parseFloat(document.getElementById("campo2").value);

    resultado = campo2 - campo1;
    mostrarResultado();
}

function multiplicacion(){
    let campo1 = parseFloat(document.getElementById("campo1").value);
    let campo2 = parseFloat(document.getElementById("campo2").value);

    resultado = campo2 * campo1;
    mostrarResultado();
}

function division() {
    let campo1 = parseFloat(document.getElementById("campo1").value);
    let campo2 = parseFloat(document.getElementById("campo2").value);

    resultado = campo2 / campo1;
    mostrarResultado();
}

function potencia() {
    let campo1 = parseFloat(document.getElementById("campo1").value);
    let campo2 = parseFloat(document.getElementById("campo2").value);

    resultado = Math.pow(campo2, campo1);
    mostrarResultado();
}

function raiz() {
    let campo1 = parseFloat(document.getElementById("campo1").value);

    resultado = Math.sqrt(campo1);
    mostrarResultado();
}

function absoluto() {
    let campo1 = parseFloat(document.getElementById("campo1").value);

    resultado = Math.abs(campo1);
    mostrarResultado();
}

function random() {

    resultado = Math.random() * 101;
    mostrarResultado();
}

function redondeo() {
    resultado = Math.round(resultado);
    mostrarResultado();
}

function alSuelo() {
    resultado = Math.floor(resultado);
    mostrarResultado();
}

function alTecho() {
    resultado = Math.ceil(resultado);
    mostrarResultado();
}









