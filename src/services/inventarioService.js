/**
 * Calcula el stock disponible después de una venta
 * @param {number} stockActual - Cantidad actual en inventario
 * @param {number} cantidadVendida - Cantidad que se desea vender
 * @returns {number} Stock resultante
 */
function calcularStockDisponible(stockActual, cantidadVendida) {
  if (cantidadVendida > stockActual) {
    throw new Error('Stock insuficiente para realizar la venta');
  }
  return stockActual - cantidadVendida;
}

/**
 * Calcula el total de una compra dado un arreglo de productos
 * @param {Array} items - Lista de { precioUnitario, cantidad }
 * @returns {number} Total de la compra
 */
function calcularTotalCompra(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('La compra debe tener al menos un producto');
  }
  return items.reduce((total, item) => {
    return total + item.precioUnitario * item.cantidad;
  }, 0);
}

module.exports = { calcularStockDisponible, calcularTotalCompra };
