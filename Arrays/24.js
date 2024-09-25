function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
    const resultados = [];
  
    for (let i = 0; i < 10; i++) {
      if (i === 5) {
        continue; // Saltar la iteración cuando i es 5
      }
      
      num += 2; // Aumentamos num en 2
      resultados.push(num); // Guardamos el nuevo valor en el arreglo
    }
  
    return resultados; // Retornamos el arreglo de resultados
  }
  
  module.exports = continueStatement;
  