function deEuroAdolar(euro) {
    // La tasa de cambio es 1 euro = 1.20 dólares
    const tasaDeCambio = 1.20;
    // Calcula el valor en dólares
    return euro * tasaDeCambio;
  }
  
  module.exports = deEuroAdolar;
  