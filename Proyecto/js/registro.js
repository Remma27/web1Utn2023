const nombreInput = document.getElementById("nombre");

nombreInput.addEventListener("input", function () {
  const valor = nombreInput.value;
  if (valor && /[0-9]/.test(valor)) {
    alert("El campo Nombre solo admite letras");
    nombreInput.value = valor.slice(0, -1);
  }
});

const correoInput = document.getElementById("correo");
const numeroInput = document.getElementById("numero");
const usuarioInput = document.getElementById("usuario");
const contrasenaInput = document.getElementById("contrasena");
const formulario = document.getElementById("registro-form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = nombreInput.value;
  const correo = correoInput.value;
  const numero = numeroInput.value;
  const usuario = usuarioInput.value;
  const contrasena = contrasenaInput.value;
  
  let mensaje = "Por favor, complete los siguientes campos correctamente: ";
  
  if (!nombre || !validarNombre(nombre)) {
    mensaje += "\n- Nombre (solo se permiten letras)";
  }
  
  if (!correo || !validarCorreo(correo)) {
    mensaje += "\n- Correo electrónico";
  }
  
  if (!numero || !validarNumero(numero)) {
    mensaje += "\n- Número de teléfono (solo se permiten números)";
  }
  
  if (!usuario) {
    mensaje += "\n- Nombre de usuario";
  }
  
  if (!contrasena) {
    mensaje += "\n- Contraseña";
  }
  
  if (mensaje !== "Por favor, complete los siguientes campos correctamente: ") {
    alert(mensaje);
  } else {
    alert("¡Registro exitoso!");
    location.href = "index.html";
  }
});

function validarNombre(nombre) {
  const expReg = /^[A-Za-z]+$/;
  return expReg.test(nombre);
}

function validarCorreo(correo) {
  const expReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expReg.test(correo);
}

function validarNumero(numero) {
  const expReg = /^\d+$/;
  return expReg.test(numero);
}
