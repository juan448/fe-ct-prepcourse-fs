function sumarLikesDeUsuario(objetoUsuario) {
    // Inicializa el contador de likes
    let totalLikes = 0;
  
    // Itera sobre el arreglo de posts
    objetoUsuario.posts.forEach(post => {
      // Suma los likes de cada post al total
      totalLikes += post.likes;
    });
  
    // Retorna el total de likes
    return totalLikes;
  }
  
  module.exports = sumarLikesDeUsuario;
  