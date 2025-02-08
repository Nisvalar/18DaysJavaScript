
class Animal{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años`;
    }
}

//Declaración de clases que heredan de Animal
class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.raza}`;
    }
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.sexo}`;
    }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color = color;
    }

    informacion(){
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.color}`;
    }
}


//Declaración de 3 instancias de cada uno.
let perro1 = new Perro("Max", 20, 1, "Pastor Alemán");
let perro2 = new Perro("Yaki", 12, 3, "Cocker Spaniel");
let perro3 = new Perro("Wilson", 1, 7, "Pinscher Mini");

let perros = [perro1, perro2, perro3];

let gato1 = new Gato("Pecas", 2, 5, "Macho");
let gato2 = new Gato("Pelusa", 1, 3, "Hembra");
let gato3 = new Gato("Gordo", 3, 7, "Macho");

let gatos = [gato1, gato2, gato3];

let conejo1 = new Conejo("Nube", 1, 4, "Blanco");
let conejo2 = new Conejo("Negri", 1, 6, "Negro");
let conejo3 = new Conejo("Manchas", 1, 3, "Blanco y Marron");

let conejos = [conejo1, conejo2, conejo3];

let animales = [perros, gatos, conejos];


function mostrarAnimales(){
    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for(let animal of animales){
        for(let individuo of animal){
            let item = document.createElement("li");
            item.innerText = individuo.informacion();
            lista.appendChild(item);
        }
    }





}