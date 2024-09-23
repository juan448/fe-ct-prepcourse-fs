function obtenerDiaSemana(numero) {
    const dias = {
      1: "Lunes",
      2: "Martes",
      3: "Miércoles",
      4: "Jueves",
      5: "Viernes",
      6: "Sábado",
      7: "Domingo"
    };
  
    // Verifica si el número está entre 1 y 7
    if (numero >= 1 && numero <= 7) {
      return dias[numero];
    } else {
      return "No es un dia de la semana";
    }
  }
  
  module.exports = obtenerDiaSemana;
  