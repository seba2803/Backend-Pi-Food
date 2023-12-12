const mongoose = require('mongoose');
const { v4 } = require('uuid');
const recipeSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4,
  },
  title: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
  },
  summary: String,
  diets: [{ type: String }],
  instructions: {
    type: Array,
  },
});

recipeSchema.statics.list = async function () {
  const allRecipe = await this.find();
  return allRecipe;
};

recipeSchema.statics.get = async function (id) {
  const oneRecipe = await this.findById(id);
  return oneRecipe;
};

recipeSchema.statics.insert = async function (recipe) {
  const create = await this.create(recipe);
  return create;
};

module.exports = recipeSchema;
