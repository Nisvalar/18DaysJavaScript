


function multiplicar() {
    //Obtener el número
    let numero = Number(document.getElementById("textoTabla").value);

    //Obtener la Tabla
    let listaTabla = document.getElementById("listaTabla");

    //Producir y mostrar resultados
    for(x = 1; x <= 10; x++){
        //Calcular el resultado
        let resultado = numero * x;

        //Armar el String con el resultado
        resultado = numero+" por "+x+" es igual a: "+numero*x;

        //Crear un elemento de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = resultado;

        listaTabla.appendChild(itemLista);

    }
}


