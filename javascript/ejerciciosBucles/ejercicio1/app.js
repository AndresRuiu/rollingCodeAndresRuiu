let edad= prompt("Ingresar su edad");

if (isNaN(edad)) {
    console.log("El valor ingresado no es valido");
}
else{
    if (edad>=18) {
        console.log("Ya puede Conducir");
    }
}