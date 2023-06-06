let suma = 0;
let continuar = true

while (continuar) {
    let numero = prompt ('Ingrese un numero');

    if (isNaN(numero)) {
        alert('No es un numero valido')
    } else {
        numero = parseInt(numero);
        suma =suma + numero;
    }

    continuar = confirm('¿Desea ingresar otro numero?');
}

console.log(`La suma total de todos los numeros ingresados es ${suma}`);