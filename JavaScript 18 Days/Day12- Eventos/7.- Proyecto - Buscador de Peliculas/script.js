let lista = document.getElementById("lista");
let selector = document.getElementById("selector");
let input = document.getElementById("busquedaIngresada");
let boton = document.getElementById("botonEnviar");

let archivo = 'peliculas.json';

/**
 * ESCUCHADORES DE EVENTOS
 */
selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('cambioModo', mensajeModo);
input.addEventListener("keydown", verificarInput);
boton.addEventListener("click", buscarCoincidencia);


/**
 * FUNCIONES
 */

function cambiarArchivo() {
    archivo = selector.value;
    let evento = new CustomEvent('cambioModo');
    selector.dispatchEvent(evento);
}

function mensajeModo() {
    alert("El archivo de búsqueda ahora es: "+selector.value);
}

//FUNCION PARA QUE SOLO ADMITA LETRAS, ESPACIO Y BORRAR
function verificarInput(event) {
  const keyCode = event.keyCode || event.which; //ESTA LÍNEA ES SUPER NECESARIA PARA QUE TODO FUNCIONE

  if (
    (keyCode >= 65 && keyCode <= 90) ||
    (keyCode >= 97 && keyCode <= 122) ||
    keyCode === 32 ||
    keyCode === 8
  ) {
    //Puedes pasar
  } else {
    event.preventDefault();
  }
}


function buscarCoincidencia() {
    lista.innerHTML = '';
    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function (salida) {
        for(let item of salida.data){
            if(item.nombre.toUpperCase().startsWith(input.value.toUpperCase())){
                let p = document.createElement('p');
                p.id = item.nombre;
                p.innerHTML = item.sinopsis;
                p.style.display = "none";

                let li = document.createElement('li');
                li.innerHTML = item.nombre;
                li.addEventListener('mouseover', function () {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'block';
                });

                li.addEventListener('mouseout', function () {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                })

                li.appendChild(p);
                lista.appendChild(li);
            }
        }
    })
    .catch(function(error) {
        console.log(error);
    })
}






