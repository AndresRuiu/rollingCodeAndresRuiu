const num1 = prompt("Ingrese el primer número:");
const num2 = prompt("Ingrese el segundo número:");

const realNum1 = Number(num1);
const realNum2 = Number(num2);


if (!isNaN(realNum1) && !isNaN(realNum2)) {
    const suma = realNum1 + realNum2;
    console.log("La suma de ambos números es " + suma);
} else {
    console.log("Alguno de los valores ingresados no es un número válido");
}


function sumar() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;


    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").textContent = "Alguno de los valores ingresados no es un número válido";
      } else {
        const suma = Number(num1); + Number(num2);;

        document.getElementById("resultado").textContent = "La suma de ambos números es: " + suma;
      }
  }