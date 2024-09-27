function tienePropiedad(objeto, propiedad) {
    // Verifica si el objeto tiene la propiedad
    return objeto[propiedad] !== undefined;
  }
  
  module.exports = tienePropiedad;
  