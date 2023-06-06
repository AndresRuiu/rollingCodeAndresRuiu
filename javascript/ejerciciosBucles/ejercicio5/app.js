let continuar = true

while (continuar) {
     let numero = parseInt(prompt('Ingresar un numero de documento'))
     if (isNaN(numero) || (numero<0 || numero>99999999)) {
        alert('El numero ingresado no es valido');
     } else {
        let resto = numero%23;
        switch (resto) {
            case 0:
                console.log('T');
                break;
            case 1:
                 console.log('R');
                break;
            case 2:
                console.log('W');
                break;
            case 3:
                console.log('A');
                break;
            case 4:
                console.log('G');
                break;
            case 5:
                console.log('M');
                break;
            case 6:
                console.log('Y');
                break;
            case 7:
                console.log('F');
                break;
            case 8:
                console.log('F');
                break;
            case 9:
                console.log('F');
                break;
            case 10:
                console.log('F');
                break;
            case 11:
                console.log('F');
                break;
            case 12:
                console.log('F');
                break;    
            case 13:
                console.log('F');
                break;
            case 14:
                console.log('F');
                break;
            case 15:
                console.log('F');
                break;
            case 16:
                console.log('F');
                break;
            case 17:
                console.log('F');
                break;
            case 18:
                console.log('F');
                break;
            case 19:
                console.log('F');
                break;
            case 20:
                    console.log('F');
                    break;
            case 21:
                console.log('F');
                break;
            case 22:
                console.log('F');
                break;
        }
     }
}