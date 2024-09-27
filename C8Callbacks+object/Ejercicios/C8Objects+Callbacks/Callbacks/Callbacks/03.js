function operacionMatematica(num1, num2, cb) {
    // Retorna el resultado del callback pasándole los números num1 y num2
    return cb(num1, num2);
  }
  
  module.exports = operacionMatematica;
  