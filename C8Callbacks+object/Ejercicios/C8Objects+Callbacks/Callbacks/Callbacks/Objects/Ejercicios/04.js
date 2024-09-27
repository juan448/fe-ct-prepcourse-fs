function verificarPropiedad(objeto, propiedad) {
    // Verifica si el objeto posee la propiedad recibida
    return objeto.hasOwnProperty(propiedad); // Retorna true o false
 }
 
 module.exports = verificarPropiedad;
 