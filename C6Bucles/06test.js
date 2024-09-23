const tieneTresDigitos = require('./ruta/a/tu/archivo');

console.log(tieneTresDigitos(100));   // true
console.log(tieneTresDigitos(999));   // true
console.log(tieneTresDigitos(1000));  // false
console.log(tieneTresDigitos(-345));  // true
console.log(tieneTresDigitos(12));    // false
console.log(tieneTresDigitos(0));     // false
