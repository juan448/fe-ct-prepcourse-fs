function actualizarValorPropiedad(objeto, propiedad, valor) {
    // Actualiza el valor de la propiedad del objeto
    objeto[propiedad] = valor;
    return objeto; // Retorna el objeto actualizado
 }
 
 module.exports = actualizarValorPropiedad;
 