function encontrarNumeroFaltante(numeros) {
    // La función recibe un argumento "numeros" correspondiente a un array de números.
    if (numeros.length === 0) return null; // Devuelve null si el array es vacío
  
    const min = Math.min(...numeros);
    const max = Math.max(...numeros);
    const sumaEsperada = ((max * (max + 1)) / 2) - ((min * (min - 1)) / 2);
    const sumaActual = numeros.reduce((acc, num) => acc + num, 0);
  
    const numeroFaltante = sumaEsperada - sumaActual;
  
    return (numeroFaltante > 0 && !numeros.includes(numeroFaltante)) ? numeroFaltante : null;
  }
  
  module.exports = encontrarNumeroFaltante;
  