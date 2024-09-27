function forEach(array, cb) {
    // Itera sobre el arreglo
    for (let i = 0; i < array.length; i++) {
      // Ejecuta el callback con el elemento actual
      cb(array[i]);
    }
  }
  
  module.exports = forEach;
  