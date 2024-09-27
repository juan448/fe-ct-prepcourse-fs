function verificarPassword(objetoUsuario, password) {
    // Verifica si la propiedad password coincide con el parámetro password
    return objetoUsuario.password === password;
  }
  
  module.exports = verificarPassword;
  