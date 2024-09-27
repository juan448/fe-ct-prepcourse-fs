function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // Itera sobre el arreglo de usuarios
    objetoMuchosUsuarios.forEach(usuario => {
      // Establece la propiedad esPremium a true
      usuario.esPremium = true;
    });
    // Retorna el arreglo actualizado
    return objetoMuchosUsuarios;
  }
  
  module.exports = pasarUsuarioAPremium;
  