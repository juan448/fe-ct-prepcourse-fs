function map(array, cb) {
    const newArray = []; // Creamos un nuevo arreglo
    for (let i = 0; i < array.length; i++) {
      // Llamamos al callback y guardamos el resultado en el nuevo arreglo
      newArray.push(cb(array[i]));
    }
    return newArray; // Retornamos el nuevo arreglo
  }
  
  module.exports = map;
  