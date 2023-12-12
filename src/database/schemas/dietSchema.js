const mongoose = require('mongoose');

const dietSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.UUID,
    default: mongoose.Schema.Types.UUID,
  },
  diets: [{ type: String }],
});

dietSchema.statics.list = async function () {
  const allDiets = await this.find();
  return allDiets;
};

module.exports = dietSchema;
