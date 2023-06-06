//declaración de un objetos
let persona = {
    nombre: "Dami",
    edad: 23,
    activa: true,
    saludo: function () {
        return `Hola soy ${this.nombre} tengo ${this.edad} años.`
    }
}
persona.altura = 1.58;
// alert(persona.saludo()+ "y mi altura es "+persona.altura)
// persona.edad=22;
// alert(persona["edad"])
// delete persona.edad;
console.log(persona);
const alumno = {
    nombre: "Natalia"
}
alumno.edad = 21

console.log(alumno);
//función constructora
class Curso {
    constructor(nombre, duracion, alumnos, profesores) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.alumnos = alumnos;
        this.profesores = profesores;
    }
}

let html = new Curso("html", " 3 meses", ["Natalia", "Esteban", "Pato"]);
new Curso()
let html2 = new Curso("Js", " 7 meses", ["Natalia", "Esteban", "Pato"], ["Dami", "Luis"]);
let html3 = new Curso("React", " 3 meses", ["Dami", "Luis"], ["Natalia", "Esteban", "Pato"]);
html3.tiempoExtra = "1 meses";
html.profesores = ["Tutti"];
let aux = html3.profesores
html3.profesores = html3.alumnos;
html3.alumnos = aux
console.log(html);
console.log(html2);
console.log(html3);

//Crear objeto con Object

let auto = new Object();
this.color = "Azul";
auto.puertas = 3;
auto.marca = "Fiat";
auto.anio = 2023;
console.log(auto);
console.log(this.color);



// console.log(html===html);

class Paint {
    constructor(pizarra, pinceles, tamanio, texto) {
        this.pizarra = pizarra;
        this.pinceles = pinceles;
        this.tamanio = tamanio;
        this.texto = texto;
    }
}

const pizarra = {
    height: "529px",
    width: "672px",
    position: "absolute",
    left: "23px",
    top: "17px",
    background: "black"
};

const pinceles = [
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "768px",
        top: "53px",
        background: "#D9D9D9"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "768px",
        top: "77px",
        background: "#D9D9D9"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "768px",
        top: "102px",
        background: "#D9D9D9"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "792px",
        top: "53px",
        background: "#F3C073"

    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "792px",
        top: "77px",
        background: "#F3C073"

    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "792px",
        top: "102px",
        background: "#F3C073"

    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "819px",
        top: "53px",
        background: "#D2F373"

    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "819px",
        top: "77px",
        background: "#D2F373"

    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "819px",
        top: "102px",
        background: "#D2F373"

    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "847px",
        top: "53px",
        background: "#7378F3"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "847px",
        top: "77px",
        background: "#7378F3"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "847px",
        top: "102px",
        background: "#7378F3"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "876px",
        top: "53px",
        background: "#8D73F3"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "876px",
        top: "77px",
        background: "#8D73F3"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "876px",
        top: "102px",
        background: "#8D73F3"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "906px",
        top: "53px",
        background: "#E973F3"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "906px",
        top: "77px",
        background: "#E973F3"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "906px",
        top: "102px",
        background: "#E973F3"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "936px",
        top: "53px",
        background: "#F3737B"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "936px",
        top: "77px",
        background: "#F3737B"
    },
    {
        height: "10px",
        width: "10px",
        position: "absolute",
        left: "936px",
        top: "102px",
        background: "#F3737B"
    },
];

const tamanio = [
    {
        text: "5px>",
        position: "absolute",
        height: "15px",
        width: "35px",
        left: "770px",
        top: "165px",
    },
    {
        text: "10px>",
        position: "absolute",
        height: "15px",
        width: "35px",
        left: "770px",
        top: "185px",
    },
    {
        text: "15px>",
        position: "absolute",
        height: "15px",
        width: "35px",
        left: "770px",
        top: "205px",
    },
    {
        text: "20px>",
        position: "absolute",
        height: "15px",
        width: "35px",
        left: "770px",
        top: "225px",
    },
    {
        text: "25px>",
        position: "absolute",
        height: "15px",
        width: "35px",
        left: "770px",
        top: "245px",
    },
];
const texto = [
    {
        text: "Seleccioná un color",
        position: "absolute",
        height: "15px",
        width: "130px",
        left: "770px",
        top: "22px",
    },
    {
        text: "Seleccioná un tamaño",
        position: "absolute",
        height: "15px",
        width: "150px",
        left: "770px",
        top: "147px",

    },
    {
        text: "Seleccioná un evento",
        position: "absolute",
        height: "15px",
        width: "140px",
        left: "770px",
        top: "270px",
    },
    {
        text: "click>",
        position: "absolute",
        height: "15px",
        width: "130px",
        left: "770px",
        top: "300px",
    },
];
const nuestraPaint = new Paint(pizarra, pinceles, tamanio, texto);

function crearElemento(id, atributos) {
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    div.id = id;
    Object.assign(div.style, atributos);
    div.innerText = atributos.text || ""; 
    container.appendChild(div);
}

function agregarAtributos(id, atributos) {
    const elemento = document.getElementById(id);
    Object.assign(elemento.style, atributos);
}

crearElemento("pizarra", nuestraPaint.pizarra);
for (let i = 0; i < nuestraPaint.pinceles.length; i++) {
    const pincelId = `pincel${i + 1}`;
    crearElemento(pincelId, nuestraPaint.pinceles[i]);
}

for (let i = 0; i < nuestraPaint.tamanio.length; i++) {
    const tamanioId = `tamanio${i + 1}`;
    crearElemento(tamanioId, nuestraPaint.tamanio[i]);
}

for (let i = 0; i < nuestraPaint.texto.length; i++) {
    const textoId = `texto${i + 1}`;
    crearElemento(textoId, nuestraPaint.texto[i]);
}

console.log(nuestraPaint.pinceles);