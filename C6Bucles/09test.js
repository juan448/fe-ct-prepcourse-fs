const conection = require('./ruta/a/tu/archivo');

console.log(conection(1)); // "Online"
console.log(conection(2)); // "Away"
console.log(conection(3)); // "Offline"
console.log(conection(0)); // "Offline"
console.log(conection(-1)); // "Offline"
