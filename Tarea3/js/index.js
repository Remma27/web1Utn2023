function parImpar() {
  let numero = prompt("Introduce un número entero:");
  if (numero % 2 === 0) {
    alert(numero + " es par.");
  } else {
    alert(numero + " es impar.");
  }
}

function analizarCadena() {
  let cadena = prompt("Introduce una cadena de texto:");
  if (cadena === cadena.toUpperCase()) {
    alert("La cadena está formada sólo por mayúsculas.");
  } else if (cadena === cadena.toLowerCase()) {
    alert("La cadena está formada sólo por minúsculas.");
  } else {
    alert("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
  }
}

function palindromo() {
  let cadena = prompt("Introduce una cadena de texto:");
  cadena = cadena.toLowerCase().replace(/\s/g, ""); // Convertir a minúsculas y eliminar espacios
  let alReves = cadena.split("").reverse().join(""); // Invertir la cadena
  if (cadena === alReves) {
    alert("La cadena es un palíndromo.");
  } else {
    alert("La cadena no es un palíndromo.");
  }
}
