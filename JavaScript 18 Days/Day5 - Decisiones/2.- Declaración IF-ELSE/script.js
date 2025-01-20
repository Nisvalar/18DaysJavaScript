function evaluarCompra() { 
    let respuesta = document.getElementById("decision");

    let precio = document.getElementById("textoPrecio").value;

    if(precio <5){
        respuesta.textContent = "Comprar 2 cartones de leche";
    }else{
        if (precio <8){
            respuesta.textContent = "Comprar 1 cartón de leche";
        }
        else{
            respuesta.textContent = "No comprar leche"
        }
    }
}