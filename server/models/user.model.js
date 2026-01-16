const { DataTypes } = require("sequelize");
const sequelize = require("./db.js");
const { PASSWORD } = require("../config/db.config.js");
const Restaurant = sequelize.define("restaurant", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PASSWORD: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
