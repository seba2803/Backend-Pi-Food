const { response } = require('../utils');
const store = require('../database');

module.exports = async (req, res) => {
  const recipe = await store.Recipe.list();

  response(res, 200, recipe);
};
