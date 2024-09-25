function encontrarIndiceMayor(array) {
    // Encuentra el índice del número más grande en el array de números.
    // Devuelve el valor de este índice.
    
    if (array.length === 0) return -1; // Maneja el caso de un arreglo vacío
    
    let mayor = array[0];
    let indiceMayor = 0;
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
        indiceMayor = i;
      }
    }
  
    return indiceMayor;
  }
  
  module.exports = encontrarIndiceMayor;
  