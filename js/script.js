// Obtener el input y el label
var inputNombre = document.getElementById('nombreInput');
var labelNombre = document.querySelector('#contenedorNombre label');

// Agregar un evento al input
inputNombre.addEventListener('input', function() {
    // Verificar si el input está vacío
    if (inputNombre.value.trim() !== '') {
        // Cambiar el color del label
        labelNombre.style.color = '#464646';
    } else {
        // Si el input está vacío, volver al color original
        labelNombre.style.color = '#A2A2A2';
    }
});
