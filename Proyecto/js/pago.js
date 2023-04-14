// Agrega un espacio o guión después de cada cuarto carácter
function formatearNumeroTarjeta() {
  const numeroTarjeta = document.getElementById("numero-tarjeta");
  let valor = numeroTarjeta.value.replace(/\s+/g, "");
  valor = valor.replace(/-/g, "");
  let nuevoValor = "";
  for (let i = 0; i < valor.length; i++) {
    if (i > 0 && i % 4 === 0) {
      nuevoValor += " ";
    }
    nuevoValor += valor.charAt(i);
  }
  numeroTarjeta.value = nuevoValor;
}

// Calcula la fecha mínima permitida para la tarjeta de crédito
function calcularFechaMinima() {
  const ahora = new Date();
  const mes = ahora.getMonth() + 1;
  const anio = ahora.getFullYear();
  return `${anio}-${mes.toString().padStart(2, "0")}`;
}

// Asigna la fecha mínima calculada al elemento input
window.addEventListener("load", () => {
  const fechaExpiracion = document.getElementById("fecha-expiracion");
  fechaExpiracion.min = calcularFechaMinima();
});

// Llama a la función de formateo cada vez que se ingresa o borra un número
window.addEventListener("load", () => {
  const numeroTarjeta = document.getElementById("numero-tarjeta");
  numeroTarjeta.addEventListener("input", formatearNumeroTarjeta);
  numeroTarjeta.addEventListener("keyup", formatearNumeroTarjeta);
});

// Muestra una ventana emergente de agradecimiento cuando se envía el formulario
window.addEventListener("load", () => {
  const formulario = document.getElementById("formulario-pago");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("¡Gracias por realizar la compra!");
    formulario.reset();
    window.location.href = "index.html";
  });
});

const soloLetras = /^[a-zA-Z]+$/;
const soloNumeros = /^[0-9]+$/;

const inputsSoloLetras = document.querySelectorAll(
  "input[type=text][solo-letras]"
);
inputsSoloLetras.forEach((input) => {
  input.addEventListener("keypress", function (e) {
    if (!soloLetras.test(e.key)) {
      e.preventDefault();
      alert("Este campo solo admite letras");
    }
  });
});

const inputsSoloNumeros = document.querySelectorAll(
  "input[type=text][solo-numeros]"
);
inputsSoloNumeros.forEach((input) => {
  input.addEventListener("keypress", function (e) {
    if (!soloNumeros.test(e.key)) {
      e.preventDefault();
      alert("Este campo solo admite números");
    }
  });
});
