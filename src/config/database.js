const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const { DB_USER, DB_PASSWORD, DB_HOST } = require('./env');

// const ENVIROMENT = 'dev';

const connectionString = `mongodb+srv://mondoDB:${DB_PASSWORD}@cluster0.nqa9xa7.mongodb.net/dbfood?retryWrites=true&w=majority`;

const sequelize = new Sequelize('food', DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

module.exports = { connectionString, model, Schema };
