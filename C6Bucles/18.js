function productoEntreNúmeros(a, b) {
    // Asegúrate de que a sea el menor y b el mayor
    if (a > b) {
      [a, b] = [b, a]; // Intercambia a y b si es necesario
    }
    
    let producto = 1;
    for (let i = a; i <= b; i++) {
      producto *= i; // Multiplica cada número en el rango
    }
    
    return producto; // Retorna el producto total
  }
  
  module.exports = productoEntreNúmeros;
  