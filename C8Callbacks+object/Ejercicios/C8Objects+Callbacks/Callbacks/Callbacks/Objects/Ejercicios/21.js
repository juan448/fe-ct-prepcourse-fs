function agregarMetodoCalculoDescuento(objetoProducto) {
    // Agrega la función calcularPrecioDescuento al objeto
    objetoProducto.calcularPrecioDescuento = function() {
      // Calcula el descuento
      const descuento = this.precio * this.porcentajeDeDescuento;
      // Retorna el precio final
      return this.precio - descuento;
    };
    
    // Retorna el objeto actualizado
    return objetoProducto;
  }
  
  module.exports = agregarMetodoCalculoDescuento;
  