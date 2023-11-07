const { Router } = require('express');

const dietRouter = Router();

dietRouter.get('/diets', (req, res) =>
  res.status(200).send('ruta /api/diet/diets')
);

module.exports = dietRouter;
