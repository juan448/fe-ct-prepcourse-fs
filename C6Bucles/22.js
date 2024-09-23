function doWhile(num) {
    let i = 0; // Inicializa un contador para el número de iteraciones
    
    do {
      num += 5; // Aumenta num en 5
      i++; // Incrementa el contador
    } while (i < 8); // Repite hasta que se hayan realizado 8 iteraciones
    
    return num; // Retorna el valor final
  }
  
  module.exports = doWhile;
  