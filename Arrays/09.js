function obtenerElementoAleatorio(array) {
    // Devuelve un elemento aleatorio del arreglo array.
    // PISTA: Usa el método Math.random().
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  module.exports = obtenerElementoAleatorio;
  