Swal.fire({
    title: 'Ingresar el número de mesas',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    html: `<h2>Soy un elemento</h2>`

  })

let input = document.querySelector(".swal2-input")
