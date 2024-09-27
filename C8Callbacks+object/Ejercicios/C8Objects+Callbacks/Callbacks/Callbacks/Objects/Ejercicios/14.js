function tieneEmail(objetoUsuario) {
    // Verifica si la propiedad email tiene un valor definido
    return objetoUsuario.email !== undefined && objetoUsuario.email !== null;
  }
  
  module.exports = tieneEmail;
  