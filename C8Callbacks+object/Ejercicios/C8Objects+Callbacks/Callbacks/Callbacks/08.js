const buscarElemento = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) { // Evalúa si el elemento cumple con la condición del callback
        return array[i]; // Retorna el elemento encontrado
      }
    }
    return "No se encontró el elemento"; // Mensaje si no se encuentra
  };
  
  module.exports = buscarElemento;
  