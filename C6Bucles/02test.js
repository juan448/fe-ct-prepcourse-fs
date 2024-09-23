const esVerdaderoYFalso = require('./ruta/a/tu/archivo');

console.log(esVerdaderoYFalso(true, true));   // true
console.log(esVerdaderoYFalso(true, false));  // false
console.log(esVerdaderoYFalso(false, true));  // false
console.log(esVerdaderoYFalso(false, false)); // false
