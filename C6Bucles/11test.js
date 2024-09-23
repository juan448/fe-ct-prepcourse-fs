const estaEnRango = require('./ruta/a/tu/archivo');

console.log(estaEnRango(30));  // true
console.log(estaEnRango(20));  // false
console.log(estaEnRango(50));  // false
console.log(estaEnRango(25));  // true
console.log(estaEnRango(49));  // true
console.log(estaEnRango(51));  // false
