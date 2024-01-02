const mongoose = require('mongoose');
const { v4 } = require('uuid');

const dietSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4,
  },
  diets: [{ type: String }],
});

dietSchema.statics.list = async function () {
  const allDiets = await this.find();
  await mongoose.connection.close();
  return allDiets;
};

module.exports = dietSchema;
