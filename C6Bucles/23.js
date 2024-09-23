function esNumeroPrimo(numero) {
    // Un número primo es mayor que 1
    if (numero <= 1) {
      return false;
    }
  
    // Verifica si el número es divisible por algún número desde 2 hasta la raíz cuadrada de "numero"
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false; // Si es divisible, no es primo
      }
    }
  
    return true; // Si no se encontró un divisor, es primo
  }
  
  module.exports = esNumeroPrimo;
  