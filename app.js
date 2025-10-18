const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const userRoutes = require('./rest/routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/produtos', productRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
