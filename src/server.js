const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { handlerError } = require('./utils');
const server = express();

server.use(morgan('dev'));
server.use(cors());
server.use(require('./routes'));

server.use('*', (req, res) => {
  res.status(404).send('Not found');
});

server.use(handlerError);

module.exports = server;
