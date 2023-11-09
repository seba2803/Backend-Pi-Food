const sequelize = require('../../config/database');

const { DataTypes } = require('sequelize');

const Diets = sequelize.define(
  'diets',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Diets;
