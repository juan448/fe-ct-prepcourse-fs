function esPositivo(num) {
    // Verifica si el número es positivo, negativo o cero y retorna la cadena correspondiente
    if (num > 0) {
      return "Es positivo";
    } else if (num < 0) {
      return "Es negativo";
    } else {
      return false;
    }
  }
  
  module.exports = esPositivo;
  