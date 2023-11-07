const { Router } = require('express');
const dietRouter = require('./diets');
const recipeRouter = require('./recipes');
const router = Router();

router.use('/diets', dietRouter);
router.use('/recipes', recipeRouter);

module.exports = router;
