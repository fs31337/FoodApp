const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      resume: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      puntuation: {
        type: DataTypes.INTEGER,
      },
      healthyLevel: {
        type: DataTypes.INTEGER,
      },
      stepbystep: {
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.STRING,
      }
    }
  );
};
