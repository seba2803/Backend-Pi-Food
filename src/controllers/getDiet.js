const { response } = require('../utils');
const store = require('../database');

module.exports = async (req, res) => {
  const diets = await store.Diet.list();

  response(res, 200, diets);
};
