function esAnagrama(str1, str2) {
    // Verifica si las longitudes son diferentes
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Convierte las cadenas en arreglos, ordénalos y únelos de nuevo
    const ordenadoStr1 = str1.split('').sort().join('');
    const ordenadoStr2 = str2.split('').sort().join('');
  
    // Compara las cadenas ordenadas
    return ordenadoStr1 === ordenadoStr2;
  }
  
  module.exports = esAnagrama;
  