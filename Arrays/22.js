function tablaDelSeis() {
    // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Desde 0 al 60.
    const tabla = [];
    
    for (let i = 0; i <= 10; i++) {
      tabla.push(6 * i); // Multiplicamos 6 por i y lo añadimos al arreglo
    }
    
    return tabla;
  }
  
  module.exports = tablaDelSeis;
  