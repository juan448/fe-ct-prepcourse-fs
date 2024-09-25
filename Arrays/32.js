function esPalindromo(string) {
    // La función recibe un argumento "string".
    // Verifica si este string es palíndromo o no.
    const textoLimpio = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Limpia el string y lo convierte a minúsculas
    const textoInvertido = textoLimpio.split('').reverse().join('');
    
    return textoLimpio === textoInvertido; // Retorna true si son iguales, false en caso contrario
  }
  
  module.exports = esPalindromo;
  