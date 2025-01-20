function calcularLitros(){
    var elementoKM = document.getElementById("textoKM");
    var textoKM = elementoKM.value;
    var cantKM = Number(textoKM);

    var cantLitros = cantKM / 8.8;
    
    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga "+cantLitros+" litros de combustible";
}