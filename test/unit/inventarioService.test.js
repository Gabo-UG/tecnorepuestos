const {
  calcularStockDisponible,
  calcularTotalCompra
} = require('../../src/services/inventarioService');

// --- Pruebas de calcularStockDisponible ---

describe('calcularStockDisponible', () => {

  test('debe restar correctamente la cantidad vendida del stock actual', () => {
    const resultado = calcularStockDisponible(100, 30);
    expect(resultado).toBe(70);
  });

  test('debe retornar 0 si se vende exactamente todo el stock', () => {
    const resultado = calcularStockDisponible(50, 50);
    expect(resultado).toBe(0);
  });

  test('debe lanzar error si la cantidad vendida supera el stock', () => {
    expect(() => calcularStockDisponible(10, 20))
      .toThrow('Stock insuficiente para realizar la venta');
  });

});

// --- Pruebas de calcularTotalCompra ---

describe('calcularTotalCompra', () => {

  test('debe calcular correctamente el total de varios productos', () => {
    const items = [
      { precioUnitario: 5.00, cantidad: 10 },  // 50.00
      { precioUnitario: 15.00, cantidad: 2 }   // 30.00
    ];
    const resultado = calcularTotalCompra(items);
    expect(resultado).toBe(80.00);
  });

  test('debe calcular correctamente con un solo producto', () => {
    const items = [{ precioUnitario: 25.50, cantidad: 4 }];
    const resultado = calcularTotalCompra(items);
    expect(resultado).toBe(102.00);
  });

  test('debe lanzar error si la lista está vacía', () => {
    expect(() => calcularTotalCompra([]))
      .toThrow('La compra debe tener al menos un producto');
  });

  test('debe lanzar error si no se pasa un arreglo', () => {
    expect(() => calcularTotalCompra(null))
      .toThrow('La compra debe tener al menos un producto');
  });

});
