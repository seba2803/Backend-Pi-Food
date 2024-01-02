const { catchedAsync } = require('../utils');
module.exports = {
  getRecipe: catchedAsync(require('./getRecipe')),
  getDiet: catchedAsync(require('./getDiet')),
};
