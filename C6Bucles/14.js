function operadoresLogicos(num1, num2, num3) {
    // Verifica si todos los números son cero
    if (num1 === 0 && num2 === 0 && num3 === 0) {
      return "Error";
    }
    
    // Verifica si alguno de los números es negativo
    if (num1 < 0 || num2 < 0 || num3 < 0) {
      return "Hay negativos";
    }
    
    // Verifica si num1 es mayor y positivo
    if (num1 > num2 && num1 > num3 && num1 > 0) {
      return "Numero 1 es mayor y positivo";
    }
    
    // Verifica si num3 es más grande que num1 y num2
    if (num3 > num1 && num3 > num2) {
      return num3 + 1;
    }
    
    // Si ninguna de las condiciones anteriores se cumple
    return false;
  }
  
  module.exports = operadoresLogicos;
  