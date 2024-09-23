const esParYDivisiblePorTres = require('./ruta/a/tu/archivo');

console.log(esParYDivisiblePorTres(6));   // true (6 es par y divisible por 3)
console.log(esParYDivisiblePorTres(12));  // true (12 es par y divisible por 3)
console.log(esParYDivisiblePorTres(5));   // false (5 no es par)
console.log(esParYDivisiblePorTres(9));   // false (9 no es par)
console.log(esParYDivisiblePorTres(0));   // true (0 es par y divisible por 3)
