const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/recipe', controllers.getRecipe);
router.get('/diet', controllers.getDiet);

module.exports = router;
