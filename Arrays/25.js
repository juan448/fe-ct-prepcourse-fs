
function contarParesConContinue(numeros) {
    // La función recibe un array de numeros por argumento.
    // Devuelve la cantidad de números pares que hay en el array.
    let contadorPares = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 !== 0) {
        continue; // Si el número es impar, saltamos a la siguiente iteración
      }
      
      contadorPares++; // Incrementamos el contador si es par
    }
  
    return contadorPares; // Retornamos la cantidad de pares
  }
  
  module.exports = contarParesConContinue;
  