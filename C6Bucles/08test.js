const esPositivoOInferiorA10 = require('./ruta/a/tu/archivo');

console.log(esPositivoOInferiorA10(5));   // true (5 es positivo y menor que 10)
console.log(esPositivoOInferiorA10(10));  // false (10 no es menor que 10)
console.log(esPositivoOInferiorA10(-1));  // false (-1 no es positivo)
console.log(esPositivoOInferiorA10(0));   // false (0 no es positivo)
console.log(esPositivoOInferiorA10(9));   // true (9 es positivo y menor que 10)
