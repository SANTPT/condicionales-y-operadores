function pedirConfirmacion() {
    // Mostrar el cuadro de diálogo de confirmación
    var resultadoConfirmacion = confirm("¿Estás seguro de que quieres realizar esta acción?");
    
    // Obtener el elemento donde mostraremos el resultado
    var elementoResultado = document.getElementById("resultado");

    // Comprobar el resultado y mostrar un mensaje
    if (resultadoConfirmacion) {
        elementoResultado.textContent = "Has pulsado 'Aceptar'.";
        elementoResultado.style.color = "green";
        // Aquí puedes añadir el código que se ejecutará si se acepta
    } else {
        elementoResultado.textContent = "Has pulsado 'Cancelar'.";
        elementoResultado.style.color = "red";
        // Aquí puedes añadir el código que se ejecutará si se cancela
    }
}


