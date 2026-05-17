require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas (se irán agregando por módulo)
app.use('/api/productos', require('./routes/productos'));
app.use('/api/compras',   require('./routes/compras'));
app.use('/api/ventas',    require('./routes/ventas'));
app.use('/api/clientes',  require('./routes/clientes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

module.exports = app;
