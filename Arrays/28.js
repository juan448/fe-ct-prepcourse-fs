function esArrayNoVacio(arr) {
    // La función recibe un argumento "arr".
    // Comprueba si este argumento es un array y si tiene al menos un elemento.
    return Array.isArray(arr) && arr.length > 0; // Retorna true si es un array no vacío, de lo contrario false
  }
  
  module.exports = esArrayNoVacio;
  