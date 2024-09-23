function sumarHastaN(n) {
    let suma = 0; // Inicializa la suma en 0
    for (let i = 1; i <= n; i++) {
      suma += i; // Suma cada número desde 1 hasta n
    }
    return suma; // Retorna la suma total
  }
  
  module.exports = sumarHastaN;
  