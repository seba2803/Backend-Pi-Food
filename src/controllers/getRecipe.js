const { response } = require('../utils');

module.exports = async (req, res) => {
  response(res, 200, { name: 'aqui vienen las recetas' });
};
