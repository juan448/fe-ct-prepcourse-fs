function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
    const resultados = [];
  
    for (let i = 0; i < 10; i++) {
      num += 2; // Aumentamos num en 2
      resultados.push(num); // Guardamos el nuevo valor en el arreglo
  
      // Si la suma y la cantidad de iteraciones coinciden, interrumpimos
      if (num === i + 1) {
        return "Se interrumpió la ejecución";
      }
    }
  
    return resultados; // Retornamos el arreglo de resultados
  }
  
  module.exports = breakStatement;
  