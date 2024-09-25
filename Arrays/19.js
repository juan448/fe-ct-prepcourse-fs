function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    if (arguments.length === 0) return 0; // Si no se pasan argumentos, retorna 0
    
    let producto = 1; // Iniciamos el producto en 1
  
    for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i]; // Multiplicamos cada argumento
    }
  
    return producto; // Retornamos el producto total
  }
  
  module.exports = multiplicarArgumentos;
  