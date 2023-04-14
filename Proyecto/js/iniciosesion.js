// Obtener elementos del DOM
const usuario = document.getElementById('usuario');
const contrasena = document.getElementById('contrasena');
const iniciarSesion = document.getElementById('iniciar-sesion');

// Agregar evento para comprobar si se completaron los campos
usuario.addEventListener('input', checkForm);
contrasena.addEventListener('input', checkForm);

function checkForm() {
  if (usuario.value.trim() !== '' && contrasena.value.trim() !== '') {
    iniciarSesion.disabled = false;
  } else {
    iniciarSesion.disabled = true;
  }
}

// Agregar evento para enviar el formulario
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Validar que la contraseña tenga al menos una letra, un número y un símbolo
  const password = contrasena.value;
  if (password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
    // La contraseña es válida
    alert("¡A iniciado sesion!");
    window.location.href = "index.html";
  } else {
    // La contraseña es inválida
    alert('La contraseña debe contener al menos una letra, un número y un símbolo, y tener una longitud mínima de 8 caracteres.');
  }
});
