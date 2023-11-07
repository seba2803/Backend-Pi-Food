const { Router } = require('express');
const dietRouter = require('./diets');
const recipeRouter = require('./recipes');
const router = Router();

router.use('/diet', dietRouter);
router.use('/recipe', recipeRouter);

module.exports = router;
