function crearGato(nombre, edad) {
    // Crea un nuevo objeto gato
    const gato = {
      nombre: nombre,
      edad: edad,
      meow: function() {
        return "Meow!";
      }
    };
    // Retorna el objeto
    return gato;
  }
  
  module.exports = crearGato;
  