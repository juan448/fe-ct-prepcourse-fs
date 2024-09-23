const esVerdadero = require('./ruta/a/tu/archivo');

console.log(esVerdadero(true));  // "Soy verdadero"
console.log(esVerdadero(false)); // "Soy falso"
console.log(esVerdadero(1));     // "Soy verdadero"
console.log(esVerdadero(0));     // "Soy falso"
console.log(esVerdadero("texto")); // "Soy verdadero"
console.log(esVerdadero(""));      // "Soy falso"
