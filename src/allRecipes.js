const store = require('./database');
const mongoose = require('mongoose');

async function allRecipes() {
  store.Recipe.insertMany(require('../recipes.json'))
    .then((res) => {
      console.log('elementos cargados', res);
      mongoose.connection.close();
    })
    .catch((err) => console.log(err.message));
}
module.exports = allRecipes;
