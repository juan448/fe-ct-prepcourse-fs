function divide(x, y) {
    // Verifica si el divisor es 0 para evitar división por cero
    if (y === 0) {
      throw new Error('No se puede dividir por cero');
    }
    // Retorna el resultado de dividir x entre y
    return x / y;
  }
  
  module.exports = divide;
  