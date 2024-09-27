function agregarPropiedad(objeto, propiedad) {
    // Agrega la propiedad al objeto con el valor null
    objeto[propiedad] = null;
    // Retorna el objeto actualizado
    return objeto;
  }
  
  module.exports = agregarPropiedad;
  