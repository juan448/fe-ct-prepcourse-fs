function sumarHastaNConBreak(n) {
    let suma = 0; // Inicializa la suma en 0
    for (let i = 1; i <= n; i++) {
      suma += i; // Suma cada número desde 1 hasta n
      if (suma > 100) { // Verifica si la suma supera 100
        break; // Detiene el bucle si la suma es mayor a 100
      }
    }
    return suma; // Retorna la suma total
  }
  
  module.exports = sumarHastaNConBreak;
  