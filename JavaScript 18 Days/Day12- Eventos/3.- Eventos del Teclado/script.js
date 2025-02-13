let campo = document.getElementById("miCampo");

function verificarNumero(event) {
    //PARA ASCII Los números desde el 1 al 0 van del 48 al 57
    if(event.key < '0' || event.key > '9'){
        event.preventDefault();
    }
}

campo.addEventListener('keydown', verificarNumero);

campo.addEventListener('keyup', function(event){
    console.log("Entrada del usuario: " + event.target.value);
});

campo.addEventListener('keypress', function(event){
    console.log("Caracter ingresado: " + event.key);
});