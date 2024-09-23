const esIgualYNegativo = require('./ruta/a/tu/archivo');

console.log(esIgualYNegativo(-5, -5)); // true
console.log(esIgualYNegativo(-5, 5));  // false
console.log(esIgualYNegativo(5, 5));   // false
console.log(esIgualYNegativo(-10, -10)); // true
console.log(esIgualYNegativo(-10, -5));  // false
