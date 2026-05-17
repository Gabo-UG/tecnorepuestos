const express = require('express');
const router = express.Router();

// Almacén temporal en memoria (simula la BD para pruebas)
let productos = [];

router.get('/', (req, res) => {
  res.json({ ok: true, data: productos });
});

router.post('/', (req, res) => {
  const { nombre, stock, precio } = req.body;

  if (!nombre || stock === undefined || precio === undefined) {
    return res.status(400).json({ ok: false, mensaje: 'Faltan campos obligatorios' });
  }

  const producto = { id: productos.length + 1, nombre, stock, precio };
  productos.push(producto);
  res.status(201).json({ ok: true, data: producto });
});

module.exports = router;
