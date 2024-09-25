function promedioResultadosTest(resultadosTest) {
    // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
    if (resultadosTest.length === 0) return 0; // Maneja el caso de un arreglo vacío
  
    const suma = resultadosTest.reduce((acc, nota) => acc + nota, 0);
    return suma / resultadosTest.length;
  }
  
  module.exports = promedioResultadosTest;
  