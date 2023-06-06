// Obtener el elemento div donde se mostrará la carta
var carta = document.getElementById("carta");
var modal = document.getElementById("modal");
var menuCompleto = document.getElementById("menuCompleto");

    // Función para generar y mostrar la carta de menú
    function generarCarta(menu) {
      var cartaHTML = "<h2>" + menu[0].tipo + "</h2>";

      for (var i = 0; i < menu.length; i++) {
        cartaHTML += "<p><strong>" + menu[i].nombre + "</strong>: $" + menu[i].precio + "</p>";
      }

      carta.innerHTML += cartaHTML;
    }

    // Generar y mostrar cada carta de menú
    generarCarta(menuVegetariano);
    generarCarta(menuBebidas);
    generarCarta(menuPostres);

// Mostrar el menú completo en la ventana emergente
function mostrarMenu() {
  modal.style.display = "block";
  carta.style.display = "block"; // Mostrar el elemento "carta"
  menuCompleto.innerHTML = carta.innerHTML;
}


// Cerrar la ventana emergente
function cerrarModal() {
  modal.style.display = "none";
  menuCompleto.innerHTML = ""; // Limpiar el contenido del menú completo
}