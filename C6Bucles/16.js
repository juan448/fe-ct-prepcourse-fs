function saludo(idioma) {
    // Verifica el idioma y retorna el saludo correspondiente
    if (idioma === "aleman") {
      return "Guten Tag!";
    } else if (idioma === "mandarin") {
      return "Ni Hao!";
    } else if (idioma === "ingles") {
      return "Hello!";
    } else {
      return "Hola!";
    }
  }
  
  module.exports = saludo;
  
  