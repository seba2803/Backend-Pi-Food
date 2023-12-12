const { URL_MONGO } = require('../config/envs');
const mongoose = require('mongoose');
const Schemas = require('./schemas');

const conn = mongoose.createConnection(URL_MONGO);

module.exports = {
  Recipe: conn.model('Recipe', Schemas.recipeSchema),
  Diet: conn.model('Diet', Schemas.dietSchema),
};
