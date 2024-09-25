function multiplicarElementosPorIndice(array) {
    // Multiplica cada elemento del array por su índice.
    // Devuelve el nuevo arreglo con los resultados.
    return array.map((element, index) => element * index);
  }
  
  module.exports = multiplicarElementosPorIndice;
  