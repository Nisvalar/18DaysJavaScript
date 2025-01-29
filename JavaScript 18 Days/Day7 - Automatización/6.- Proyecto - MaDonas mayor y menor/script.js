
function crearTiendas(contenedorID, min, cantidadTiendas){
    //Encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    //LOOP para crear tantas tiendas como se pidan
    for(let conteoTiendas=1; conteoTiendas <= cantidadTiendas; conteoTiendas++){
        //Crear el texto de label para poder llamar a la funcion
        let textoEtiqueta = "Tienda "+conteoTiendas;

        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //Agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }

}

function crearParrafoTienda(textoLabel, valorMin){
    //Crear Etiquetas <p>
    let elementoParrafo = document.createElement("p");

    //Crear la etiqueta Label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel+" : ";
    
    //Conectar con el Input
    elementoEtiqueta.setAttribute("for", textoLabel);

    //Crear el Input
    let elementoInput = document.createElement("input");

    //Establecer atributos de input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //Agregar Label e Input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //Devolver el parrafo completo
    return elementoParrafo;
    

}

function extraerNumeroDesdeElemento(elemento) {
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function calcular() {
    let ventas = []; 
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    /*Children porque nos tenemos que fijar en cuantos PARRAFOS tiene la etiqueta del div itemsTiendas, 
    que a su vez, los 8 párrafos tienen 2 hijos cada uno, un label y un input
                                        ||  */
    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas++;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        if(valorVenta == ventaMayor){
            item.children[1].className = "mayor";
        }

        if(valorVenta == ventaMenor){
            item.children[1].className = "menor";
        }
    }

    let mensajeSalida = "Total Ventas: "+totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;


}

function sumarTotal(array) {
    let total = 0;

    for(let venta of array){
        total = total + venta;
    }

    return total;
}

function calcularMayor(array) {
    let maximo = array[0];

    for (let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }

    return maximo;
}

function calcularMenor(array) {
    let menor = array[0];

    for(let venta of array){
        if(venta < menor){
            menor = venta;
        }
    }
    return menor;
}