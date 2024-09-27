function eliminarPropiedad(objeto, propiedad) {
    // Elimina la propiedad del objeto
    delete objeto[propiedad];
    // Retorna el objeto actualizado
    return objeto;
  }
  
  module.exports = eliminarPropiedad;
  