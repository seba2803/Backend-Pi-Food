const { Diets, Recipes, RecipeDietInterm } = require('./index');

Recipes.belongsToMany(Diets, {
  through: RecipeDietInterm,
  foreignKey: 'recipe_id',
});

Diets.belongsToMany(Recipes, {
  through: RecipeDietInterm,
  foreignKey: 'diet_id',
});
