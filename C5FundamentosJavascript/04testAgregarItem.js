// Importa la función desde el archivo correspondiente
const agregarItemAlFinalDelArray = require('./agregarItemAlFinalDelArray');

// Crea un arreglo de ejemplo
const miArray = [1, 2, 3];

// Agrega un elemento al final del arreglo
const nuevoElemento = 4;
const resultado = agregarItemAlFinalDelArray(miArray, nuevoElemento);

// Imprime el arreglo modificado
console.log(resultado); // Debería imprimir: [1, 2, 3, 4]
