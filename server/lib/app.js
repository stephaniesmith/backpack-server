const express = require('express');
const morgan = require('morgan');
const app = express();
const errorHandler = require('./util/error-handler');
const spa = require('./util/spa');
require('./models/register-plugins');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('../client/dist'));

const gear = require('./routes/gear');
const backpacks = require('./routes/backpacks');

app.use('/api/gear', gear);
app.use('/api/backpacks', backpacks);

app.use((req, res) => {
    res.sendFile('index.html', { root: './public' });
});

app.use('*', spa('../client/dist/index.html'));

app.use(errorHandler());

module.exports = app;