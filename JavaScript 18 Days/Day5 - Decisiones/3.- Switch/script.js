
function consultarPrecio() {
    let respuesta = document.getElementById("textoPrecio");
    let fruta = document.getElementById("numeroFruta").value;

    switch (fruta) {
        case "1":
            respuesta.textContent = "3.6€";
            break;
        case "2":
            respuesta.textContent = "2.4€";
            break;
        case "3":
            respuesta.textContent = "1.5€";
            break;    
        case "4":
            respuesta.textContent = "3.2€";
            break;
        case "5":
            respuesta.textContent = "8.3€";
            break;
        default:
            respuesta.textContent = "¿?";
            break;
    }
}