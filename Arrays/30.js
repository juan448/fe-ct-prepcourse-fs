function encontrarElementoRepetido(numeros) {
    // La función recibe un argumento "numeros" que es un array de números.
    const elementosVistos = new Set(); // Usamos un Set para almacenar los elementos vistos
  
    for (let num of numeros) {
      if (elementosVistos.has(num)) {
        return num; // Retorna el primer elemento repetido encontrado
      }
      elementosVistos.add(num); // Agrega el número al Set
    }
  
    return null; // Si no hay elementos repetidos, retorna null
  }
  
  module.exports = encontrarElementoRepetido;
  