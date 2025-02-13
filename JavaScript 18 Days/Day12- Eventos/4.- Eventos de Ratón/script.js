let menu = document.getElementById("miMenu");
let boton = document.getElementById("miBoton");

boton.addEventListener('mouseover', function(){
    menu.style.display = 'block';
})

boton.addEventListener('mouseout', function(){
    menu.style.display = 'none';
})

document.addEventListener('mousemove', function(){
    console.log("Posición X: "+event.clientX+" - Posición Y: "+event.clientY);
})