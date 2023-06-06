const frase = prompt("Ingrese una palabra o frase");
let contadorVocales = 0;

for (let i = 0; i < frase.length; i++) {
  const letra = frase[i].toLowerCase();
  if (letra==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u") {
    contadorVocales++;
  }
}

if (contadorVocales>0) {
  console.log(`La frase ingresada contiene ${contadorVocales} vocales.`);
} else {
  console.log("La frase ingresada no contiene ninguna vocal.");
}


let vocales = {a: 0, e: 0, i: 0, o: 0, u: 0 };

for (let i = 0; i < frase.length; i++) {
  let letra = frase[i].toLowerCase();
  if (letra in vocales) {
    vocales[letra]++;
  }
}

console.log("Número de veces que se repite cada vocal en la frase:");
console.log(vocales);

//*hola


