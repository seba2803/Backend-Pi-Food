const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASSWORD, DB_HOST } = require('./env');

// const ENVIROMENT = 'dev';

const sequelize = new Sequelize('food', DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

module.exports = sequelize;
