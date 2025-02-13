let boton = document.getElementById("boton1");

boton.addEventListener('click', function () {
    alert("El botón fue presionado");
});

function mostrarMensaje() {
    alert("El segundo boton ha sido presionado");
}

let boton2 = document.getElementById("boton2");
boton2.addEventListener('click', mostrarMensaje);

let boton3 = document.getElementById("boton3");

function mouseOver() {
    alert("Has pasado por encima del 3er botón");
}

boton3.addEventListener('mouseover', mouseOver);
