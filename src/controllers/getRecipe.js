const { response } = require('../utils');

module.exports = (req, res) => {
  response(res, 200, { id: 1, name: 'aqui vienen las recetas' });
};
