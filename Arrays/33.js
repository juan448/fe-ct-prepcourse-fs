function combine(str1, str2, str3) {
    // Esta función debe combinar de forma alternada cada caracter de cada string.
    let resultado = '';
    const maxLength = Math.max(str1.length, str2.length, str3.length); // Determina la longitud máxima
  
    for (let i = 0; i < maxLength; i++) {
      if (i < str1.length) resultado += str1[i]; // Agrega carácter de str1 si existe
      if (i < str2.length) resultado += str2[i]; // Agrega carácter de str2 si existe
      if (i < str3.length) resultado += str3[i]; // Agrega carácter de str3 si existe
    }
  
    return resultado; // Retorna el string combinado
  }
  
  module.exports = combine;
  