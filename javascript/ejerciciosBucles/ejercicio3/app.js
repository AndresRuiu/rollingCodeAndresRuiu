let texto = ''
let continuar = true

while (continuar) {
    let cadena = prompt('Ingrese una cadena de texto:');

    if (cadena === null) {
        continuar = false
    }else{
        texto += cadena + '-';
        continuar = confirm('¿Desea ingresar otra cadena de texto?')
    }
}

if (texto.length>0) {
    console.log(texto);
}else{
    console.log('No se ingreso ningun texto');
}