const app = require('./src/app');
const mongoose = require('mongoose');
const { connectionString } = require('./src/config/database');

const { PORT } = require('./src/config/env');
const uploadRecipes = require('./src/utils/index');
uploadRecipes();

require('./src/models/index');

app.listen(PORT || 3001, async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('conexion establecida con mongoDB');
  } catch (error) {
    console.log(error.message);
  }
});
