function esVocal(letra) {
    // Verifica que la letra sea una cadena de un solo carácter
    if (typeof letra === 'string' && letra.length === 1) {
      // Verifica si la letra es una vocal (tanto minúscula como mayúscula)
      if ('aeiouAEIOU'.includes(letra)) {
        return "Es vocal";
      } else {
        return "Dato incorrecto";
      }
    } else {
      return "Dato incorrecto";
    }
  }
  
  module.exports = esVocal;
  