
let misAmigos = ['Monica', 'Ross', 'Chandler', 'Joey', 'Rachel', 'Phoebe'];

console.log("El Array contiene: "+misAmigos);
console.log("El Array tiene una longitud de: "+misAmigos.length);
console.log("El valor del Array con el índice 0 es: "+misAmigos[0]);
console.log("El valor del Array con el índice 4 es: "+misAmigos[4]);
console.log("El indice del Array que contiene el valor Chandler es: "+misAmigos.indexOf('Chandler'));
console.log("Si quiero borrar el último elemento utilizo el método .pop(): "+misAmigos.pop());
console.log("Ahora el array contiene: "+misAmigos);

let eliminado = misAmigos.pop();
console.log("También puedo guardar al elemento eliminado en una variable --> por ejemlo: let eliminado = array.pop(): "+eliminado);
console.log("Ahora el array contiene: "+misAmigos);

console.log("Si quiero borrar el primer elemento utilizo el método .shitf(): "+misAmigos.shift());
console.log("Ahora el array contiene: "+misAmigos);

console.log("Si quiero agregar nuevos elementos al inicio utilizo el método .unshitf(): "+misAmigos.unshift('Rachel'));
console.log("Ahora el array contiene: "+misAmigos);

console.log("Si quiero agregar nuevos elementos al final utilizo el método .push(): "+misAmigos.push('Phoebe'));
console.log("Ahora el array contiene: "+misAmigos);

console.log("Si quiero borrar desde un elemento, un número de elementos utilizo el método .splice(): "+misAmigos.splice(2, 3));//Borro desde el indice 2, 3 elementos
console.log("He Borrado desde el indice 2, 3 elementos con array.splice(2, 3)");
console.log("Ahora el array contiene: "+misAmigos); 

console.log("Si quiero recorrer el array utilizo el método .forEach() con un callBack con un parametro para denominar a los elementos: ");
console.log("La función con el callBack es: misAmigos.forEach(function (amigo) { console.log(amigo); });");
misAmigos.forEach(function (amigo) { console.log(amigo); });

console.log("Si quiero recorrer el array y mostrar los índices utilizo el método .forEach() con un callBack con dos parametros para denominar a los elementos y a los índices: ");
console.log("La función con el callBack es: misAmigos.forEach(function (amigo, index) { console.log(index+:+amigo); });");
misAmigos.forEach(function (amigo, index) { console.log(index+" : "+amigo); });

