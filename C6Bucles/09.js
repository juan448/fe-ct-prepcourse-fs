function conection(status) {
    // Verifica el estado de conexión del usuario
    if (status === 1) {
      return "Online";
    } else if (status === 2) {
      return "Away";
    } else {
      return "Offline";
    }
  }
  
  module.exports = conection;
  