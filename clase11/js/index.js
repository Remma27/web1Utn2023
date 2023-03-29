var num = 5;
var nombre = "Pedro";
let bandera = true;
console.log(bandera);
console.log(nombre);
console.log(num);

if (5 > 3) {
  //let variables en su scoper=ambito
  //var variables globales
  var edad = 50;
  console.log(edad);
}
console.log(edad);

//Tips: String, number, boolean, arrays, objetos, coeccion

if (5 !== "5") {
  console.log("Entra");
}

const persona = {
  cedula: 604800970,
  nombre: "Pedro",
  apellido1: "Perez",
  edad: 50,
};
console.log(persona.apellido1);
var tieneApellido = persona.hasOwnProperty("apellido2");
console.log(tieneApellido);

if (persona.apellido2) {
  console.log("Apellido 2 es: " + persona.apellido2);
} else {
  console.log("No tiene apellido 2");
}
//Concatenar +, string template
const mensaje = `El mensaje es, el nombre de la persona es: ${nombre}, y la edad es: ${edad}`;
console.log(mensaje);
const lista = ["rojo", "azul", "verde", "amarillo"];
//spread
console.log(lista[2]);
lista.forEach((value, index) => {
  const mensaje = `El color es: ${value}, en la posicion ${index}`;
  console.log(mensaje);
});
lista.map((valor, indice) => {
  if ((valor = "rojo")) {
    console.log("Si es rojo");
  } else {
    console.log("Es otro color, " + valor);
  }
});

const listaPersona = [
  {
    cedula: 1,
    nombre: "Pedro",
    apellido1: "Perez",
    edad: 50,
  },
  {
    cedula: 2,
    nombre: "Maria",
    apellido1: "Acosta",
    edad: 25,
  },
  {
    cedula: 3,
    nombre: "Adele",
    apellido1: "Perez",
    edad: 35,
  },
  {
    cedula: 4,
    nombre: "Lady",
    apellido1: "Gaga",
    edad: 38,
  },
  {
    cedula: 5,
    nombre: "Kathy",
    apellido1: "Perry",
    edad: 32,
  },
];

const results = listaPersona
  .map((persona, index) => {
    const nombre = `${persona.nombre} ${persona.apellido1}`;
    return {
      id: index,
      cedula: persona.cedula,
      nombreCompleto: nombre,
      edad: persona.edad,
    };
  })
  .filter((X) => X.edad > 30);

console.log(...results);


function calcular(num1, num2) {
  return num1 + num2;
}

console.log(calcular(5, 10));
