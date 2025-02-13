let socket = new WebSocket('ws://localhost:8080'); //DIRECCIÓN FICTICIO

let mensajeIngresado = document.getElementById("mensajeIngresado");
let botonEnviar = document.getElementById("botonEnviar");

//Función para agregar al div los mensajes enviados
function mostrarMensajes(contenido) {
    let contenedorMensajes = document.getElementById("mensajeChat");
    let elementoMensaje = document.createElement("p");

    elementoMensaje.innerText = contenido;
    contenedorMensajes.appendChild(elementoMensaje);

}

//Función para enviar el mensaje al servidor
botonEnviar.onclick = function () {
    let mensaje = mensajeIngresado.value;
    mostrarMensajes(mensaje);
    socket.send(mensaje);
}

//Función para recibir los mensajes que llegan del servidor
socket.onmessage = function (event){
    let mensaje = event.data;
    mostrarMensajes(mensaje);
}



