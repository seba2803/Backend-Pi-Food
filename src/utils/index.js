const axios = require('axios');
const { URL_API, API_KEY } = require('../config/env');
const { Recipes } = require('../models/index');
const mongoose = require('mongoose');

const uploadRecipes = async () => {
  try {
    const recetas = await Recipes.find().then((res) =>
      mongoose.connection.close()
    );
    if (recetas) {
      return;
    }

    const { data } = await axios(
      `${URL_API}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );

    const recets = [];
    data.results.map((recet) =>
      recets.push({
        nombre: recet.title,
        resumenPlato: recet.summary,
        imagen: recet.image,
        pasoAPaso: recet.analyzedInstructions,
        healthScore: recet.healthScore,
        dietas: recet.diets.map((diet) => diet).join(' , '),
      })
    );

    Recipes.insertMany(recets).then((res) => {
      console.log(res);
      mongoose.connection.close();
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = uploadRecipes;
