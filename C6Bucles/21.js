function esPotenciaDeDos(numero) {
    // Si el número es menor o igual a 0, no puede ser potencia de 2
    if (numero <= 0) {
      return false;
    }
    
    // Mientras el número sea mayor que 1
    while (numero > 1) {
      // Si el número no es divisible por 2, no es potencia de 2
      if (numero % 2 !== 0) {
        return false;
      }
      // Divide el número entre 2
      numero /= 2;
    }
    
    // Si llegamos aquí, es potencia de 2
    return true;
  }
  
  module.exports = esPotenciaDeDos;
  