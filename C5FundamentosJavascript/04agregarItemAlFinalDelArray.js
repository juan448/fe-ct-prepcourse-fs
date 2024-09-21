/**
 * Agrega un elemento al final de un arreglo.
 *
 * @param {Array} array - El arreglo al que se le agregará el elemento.
 * @param {*} elemento - El elemento a agregar al final del arreglo.
 * @returns {Array} - El arreglo con el nuevo elemento agregado.
 */
function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    array.push(elemento);
  
    // Retorna el arreglo modificado.
    return array;
  }
  
  module.exports = agregarItemAlFinalDelArray;
  