function invocarMetodo(objeto, metodo) {
    // Invoca el método que está definido en la propiedad del objeto
    objeto[metodo](); // Llama a la función
  }
  
  module.exports = invocarMetodo;
  