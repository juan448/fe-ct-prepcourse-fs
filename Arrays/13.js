function filtrarNumerosPares(array) {
    // Devuelve un arreglo solo con los números pares presentes en el array.
    return array.filter(element => typeof element === 'number' && element % 2 === 0);
  }
  
  module.exports = filtrarNumerosPares;
  