const { Schema } = require('../../config/database');

const RecipeSchema = new Schema({
  nombre: String,
  imagen: String,
  resumenPlato: String,
  healthScore: String,
  pasoAPaso: String,
  dietas: Array,
});
