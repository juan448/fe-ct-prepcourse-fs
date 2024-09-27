function actualizarPassword(objetoUsuario, nuevaPassword) {
    // Reemplaza la contraseña guardada
    objetoUsuario.password = nuevaPassword;
    // Retorna el objeto actualizado
    return objetoUsuario;
  }
  
  module.exports = actualizarPassword;
  