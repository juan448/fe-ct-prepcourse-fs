function sumarArray(arrayOfNumbers, cb) {
    // Suma todos los números del arreglo
    const suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
    // Llama al callback pasando el resultado
    cb(suma);
 }
 
 module.exports = sumarArray;
 