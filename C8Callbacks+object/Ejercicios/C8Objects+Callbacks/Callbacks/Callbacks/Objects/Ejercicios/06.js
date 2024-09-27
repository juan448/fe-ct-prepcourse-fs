const contarPropiedades = (objeto) => {
    let contador = 0; // Inicializa el contador
    for (let propiedad in objeto) {
      contador++; // Incrementa el contador por cada propiedad
    }
    return contador; // Retorna el total de propiedades
  };
  
  module.exports = contarPropiedades;
  