const { Schema } = require('../../config/database');

const RecipeSchema = new Schema({
  nombre: String,
  resumenPlato: String,
  imagen: String,
  pasoAPaso: [],
  healthScore: String,
  dietas: String,
});

module.exports = RecipeSchema;
