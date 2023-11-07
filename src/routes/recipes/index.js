const { Router } = require('express');

const recipeRouter = Router();

recipeRouter.get('/recipes', (req, res) =>
  res.status(200).send('ruta /api/recipe/recipes')
);

module.exports = recipeRouter;
