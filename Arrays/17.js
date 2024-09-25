function agregarNumeros(arrayOfNums) {
    // Suma todos los elementos de arrayOfNums y retorna el resultado.
    return arrayOfNums.reduce((acc, num) => acc + num, 0);
  }
  
  module.exports = agregarNumeros;
  