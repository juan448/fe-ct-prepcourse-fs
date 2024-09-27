function filter(arrayOfStrings) {
    const result = []; // Nuevo arreglo para almacenar los elementos filtrados
    for (let i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].startsWith('a')) { // Verifica si comienza con "a"
        result.push(arrayOfStrings[i]); // Agrega al nuevo arreglo
      }
    }
    return result; // Retorna el nuevo arreglo
  }
  
  module.exports = filter;
  