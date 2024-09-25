function encontrarPrimerMultiploDeN(n, secuencia) {
    // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
    // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
    
    for (let i = 0; i < secuencia.length; i++) {
      if (secuencia[i] % n === 0) {
        return secuencia[i]; // Retornamos el primer múltiplo encontrado
      }
    }
  
    return null; // Si no se encuentra ningún múltiplo, retornamos null
  }
  
  module.exports = encontrarPrimerMultiploDeN;
  