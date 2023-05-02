let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));

let maximo = Math.max(num1, num2, num3);
let minimo = Math.min(num1, num2, num3);

//let maximo, minimo;

/*if (num1 > num2 && num1 > num3) {
    maximo = num1;
    if (num2 < num3) {
      minimo = num2;
    } else {
      minimo = num3;
    }
  } else {
    if (num2 > num3) {
      maximo = num2;
      minimo = num3;
    } else {
      maximo = num3;
      minimo = num2;
    }
  }

*/
let raiz = Math.sqrt(num2);

console.log("El número mayor es: " + maximo);
console.log("El número menor es: " + minimo);
console.log("La raíz cuadrada del segundo número es: " + raiz);



function calcular() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);

    let maximo = Math.max(num1, num2, num3);

    let minimo = Math.min(num1, num2, num3);

    let raiz = Math.sqrt(num2);

    let resultadoDiv = document.getElementById("resultado");

    resultadoDiv.style.width = "450px";
    resultadoDiv.style.height = "65px";


    document.getElementById("resultado").innerHTML = "El número mayor es: " + maximo + "<br>";
    document.getElementById("resultado").innerHTML += "El número menor es: " + minimo + "<br>";
    document.getElementById("resultado").innerHTML += "La raíz cuadrada del segundo número es: " + raiz;
  }

