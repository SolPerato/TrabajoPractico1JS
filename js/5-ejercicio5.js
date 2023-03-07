/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt */

var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
document.write("La suma es: "+ ( parseInt(n1)+ parseInt(n2) ) );