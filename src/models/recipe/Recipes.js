const sequelize = require('../../config/database');
const { DataTypes } = require('sequelize');

const Recipes = sequelize.define(
  'recipes',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    imagen: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    resumenPlato: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pasoAPaso: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Recipes;
