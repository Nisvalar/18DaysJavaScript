let arrayNotas = [5, 8, 6, 4, 7];

function mostrarLista() {
  for (let notas of arrayNotas) {
    let listaNotas = document.getElementById("listaNotas");

    //Crear un elemento de la lista
    let itemLista = document.createElement("li");
    itemLista.innerText = notas;

    listaNotas.appendChild(itemLista);
  }
}

function promedio() {
  let mensaje = document.getElementById("mensaje");
  let sumaNotas = 0;
  for (let x = 0; x < 5; x++) {
    sumaNotas = sumaNotas + arrayNotas[x];
  }
  let promedio = sumaNotas / 5;
  mensaje.textContent = "El promedio es: " + promedio;
}

function masAlta() {
  let mensaje = document.getElementById("mensaje");
  let notaMasAlta = 0;
  let x = 0;

  while (x < arrayNotas.length) {
    if (notaMasAlta < arrayNotas[x]) {
      notaMasAlta = arrayNotas[x];
    }
    x++;
  }
  mensaje.textContent = "La nota más alta es: " + notaMasAlta;
}

function suspensos() {
    let mensaje = document.getElementById("mensaje");
    let suspenso = 5;
    let x = 0;
    do{
        if(arrayNotas[x] < suspenso){
            suspenso = arrayNotas[x];
            mensaje.textContent = "Hay al menos un suspenso con una nota de: "+suspenso;
            break;
        }
        x++
    }while(x < arrayNotas.length);
}
