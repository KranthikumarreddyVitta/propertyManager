const express = require('express');
const app = express();
const propertyRouter = require('./routes/propertyRoutes');
const managerRouter = require('./routes/managerRoutes');

app.use(express.json());
app.use('/api/v1/property', propertyRouter);
app.use('/api/v1/manager', managerRouter);

module.exports = app;