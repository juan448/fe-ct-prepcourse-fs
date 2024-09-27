function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto usuario
    const usuario = {
      nombre: nombre,
      email: email,
      password: password
    };
    // Retorna el objeto creado
    return usuario;
  }
  
  module.exports = nuevoUsuario;
  