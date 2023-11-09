const sequelize = require('../../config/database');
const { DataTypes } = require('sequelize');

const RecipeDietInterm = sequelize.define(
  'recipe_diet_interm',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = RecipeDietInterm;
