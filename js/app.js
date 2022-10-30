alert("Practico 1 Java Script");

document.write("Hello World");

document.write(3 + 5);

prompt("Hola, ¿Cual es tu usuario?");

let suma;
n1 = parseInt(prompt("Ingresar número 1"));
n2 = parseInt(prompt("Ingresar número 2"));
let vsuma = n1 + n2;
document.write("La suma es:" + vsuma);

let a = prompt("Ingresar primer número");
let b = prompt("Ingresar segundo número");
if (a > b) {
  document.write("El número mayor es" + a);
} else {
  document.write("El número mayor es" + b);
}

let num1 = prompt("Ingresar primer número a comparar");
let num2 = prompt("Ingresar segundo número a comparar");
let num3 = prompt("Ingresar el tercer número a comparar");

if (num1 > num2 && num1 > num3) {
  document.write("El mayor es :" + num1);
} else if (num2 > num3) {
  document.write("El mayor es : " + num2);
} else {
  document.write("El mayor es :" + num3);
}

let num = prompt("ingresa un número y sabremos si es divisible por 2");
if (num % 2 === 0) {
  document.write("Es divisible por 2");
} else {
  document.write("No es divisible por 2");
}

let text = prompt("Escriba una frase");
let nText = text.length;
let i;
for (i = 0; i < nText; i++) {
  if (
    text.substring(i, 1) === "a" ||
    text.substring(i, 1) === "e" ||
    text.substring(i, 1) === "i" ||
    text.substring(i, 1) === "o" ||
    text.substring(i, 1) === "u"
  ) {
    document.write(text.substring(i, 1));
  }
}

let nn1 = prompt(
  "Aca agrega un número para saber si es divisible por 2,3,5 o 7"
);
if (nn1 % 2 === 0 || nn1 % 3 === 0 || nn1 % 5 === 0 || nn1 % 7 === 0) {
  document.write("Es divisible por 2, 3, 5 o 7");
} else {
  document.write("No es divisible por 2, 3, 5 o 7");
}

let nn2 = prompt("Aca inserta un número");
if (nn2 % 2 === 0 || nn2 % 3 === 0 || nn2 % 5 === 0 || nn2 % 7 === 0)
  if (nn2 % 2 === 0) {
    document.write("Es divisible por 2");
  }
if (nn2 % 3 === 0) {
  document.write("Es divisible por 3");
}
if (nn2 % 5 === 0) {
  document.write("Es divisible por 5");
}
if (nn2 % 7 === 0) {
  document.write("Es divisible por 7");
} else {
  document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}
