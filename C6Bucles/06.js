function tieneTresDigitos(num) {
    // Convierte el número a su valor absoluto y lo convierte a string
    const numStr = Math.abs(num).toString();
    // Verifica si la longitud de la cadena es igual a 3
    return numStr.length === 3;
  }
  
  module.exports = tieneTresDigitos;
  