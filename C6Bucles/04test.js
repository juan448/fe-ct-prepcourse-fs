const mayoriaDeEdad = require('./ruta/a/tu/archivo');

console.log(mayoriaDeEdad(20)); // "Allowed"
console.log(mayoriaDeEdad(17)); // "Not allowed"
console.log(mayoriaDeEdad(18)); // "Allowed"
console.log(mayoriaDeEdad(15)); // "Not allowed"
