const express = require('express');
const app = express();
const propertyRouter = require('./routes/propertyRoutes');

app.use(express.json());
app.use('/api/v1/property', propertyRouter);

module.exports = app;