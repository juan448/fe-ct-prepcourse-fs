function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario, retornar false.
    if (array.length === 0) return true; // Si el arreglo está vacío, podemos considerar que todos son iguales.
  
    const primerElemento = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== primerElemento) {
        return false; // Si encontramos un elemento diferente, retornamos false.
      }
    }
  
    return true; // Si todos son iguales, retornamos true.
  }
  
  module.exports = todosIguales;
  