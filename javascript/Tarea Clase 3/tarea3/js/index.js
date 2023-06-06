//tarea 3 comienzo

const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));


const suma = num1 + num2;
const resta = num2 - num1;
const mult = num1 * num2;

if (num1 > num2){
    console.log(num1 + " es mayor que " + num2 + ", la suma de " + num1 + " + " + num2 + " es igual a " + suma);
} else if ( num1 < num2){
    console.log(num1 + " es menor que " + num2 + ", la resta de " + num2 + " - " + num1 + " es igual a " + resta);
}else {
    console.log("Ambos números son iguales, la multiplicación de " + num1 + " * " + num2 + " es igual a " + mult);
}

//tarea 3 fin

function compararNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
  
  
    let resultadoTexto;
    let resultado;

    if (num1 > num2) {
      resultadoTexto = num1 + " es mayor que " + num2 + ", la suma de " + num1 + " + " + num2 + " es igual a ";
      resultado = num1 + num2;
    } else if (num1 < num2) {
      resultadoTexto = num1 + " es menor que " + num2 + ", la resta de " + num2 + " - " + num1 + " es igual a ";
      resultado = num2 - num1;
    } else {
      resultadoTexto = "Ambos números son iguales, la multiplicación de " + num1 + " * " + num2 + " es igual a ";
      resultado = num1 * num2;
    }
  
    let resultadoDiv = document.getElementById("resultado");
    let resultadoP = document.createElement("p");
    resultadoP.textContent = resultadoTexto + resultado;
    resultadoDiv.appendChild(resultadoP);
  }
  
  