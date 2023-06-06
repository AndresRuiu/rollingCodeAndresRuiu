let colorSeleccionado = 'white';

    function crearPizarra() {
            for (let i = 0; i < 10000; i++) {
                let pixel = document.createElement('div');
                pixel.className = 'pixel';
                pixel.onmouseover = cambiarColor;
                document.querySelector('.container').appendChild(pixel);
            }
        }

        function cambiarColor(event) {
            event.target.style.backgroundColor = colorSeleccionado;
        }

        function seleccionarColor(color) {
            colorSeleccionado = color;
        }

        crearPizarra();