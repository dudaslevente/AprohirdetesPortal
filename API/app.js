const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/user.routes');
const advertisementRoutes = require('./routes/advertisement.routes');
const categoryRoutes = require('./routes/category.routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/advertisements', advertisementRoutes);
app.use('/api/categories', categoryRoutes);

module.exports = app;