const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use(require('./routes'));

server.use('*', (req, res) => {
  res.status(404).send('Not found');
});

server.use(require('./utils/handlerError'));

module.exports = server;
