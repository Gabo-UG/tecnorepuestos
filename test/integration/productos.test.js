const request = require('supertest');
const app = require('../../src/app');

describe('POST /api/productos', () => {

  test('debe crear un producto correctamente con datos válidos', async () => {
    const res = await request(app)
      .post('/api/productos')
      .send({ nombre: 'Cable HDMI 2m', stock: 50, precio: 8.99 });

    expect(res.statusCode).toBe(201);
    expect(res.body.ok).toBe(true);
    expect(res.body.data.nombre).toBe('Cable HDMI 2m');
  });

  test('debe rechazar la creación si faltan campos obligatorios', async () => {
    const res = await request(app)
      .post('/api/productos')
      .send({ nombre: 'Cable USB' }); // falta stock y precio

    expect(res.statusCode).toBe(400);
    expect(res.body.ok).toBe(false);
  });

});

describe('GET /api/productos', () => {

  test('debe retornar la lista de productos', async () => {
    const res = await request(app).get('/api/productos');

    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

});
