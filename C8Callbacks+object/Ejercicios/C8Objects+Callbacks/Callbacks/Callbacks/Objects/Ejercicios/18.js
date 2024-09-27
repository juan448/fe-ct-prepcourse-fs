function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // Agrega el nuevo amigo al final del arreglo de amigos
    objetoUsuario.amigos.push(nuevoAmigo);
    // Retorna el objeto actualizado
    return objetoUsuario;
  }
  
  module.exports = agregarAmigo;
  