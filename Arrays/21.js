function mesesDelAño(array) {
    // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    
    const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
    const mesesEncontrados = [];
  
    for (let i = 0; i < array.length; i++) {
      if (mesesBuscados.includes(array[i])) {
        mesesEncontrados.push(array[i]);
      }
    }
  
    // Verificamos si encontramos todos los meses
    if (mesesEncontrados.length === mesesBuscados.length) {
      return mesesEncontrados;
    } else {
      return "No se encontraron los meses pedidos";
    }
  }
  
  module.exports = mesesDelAño;
  