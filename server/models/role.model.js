import { DataTypes } from "sequelize";
import sequelize from "./db.js";
import Restaurant from "./restaurant.model.js";
const Role = sequelize.define("role", {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//Role.sync({ force: false })
 // .then(() => {
 //   Role.create({ id: 1, name: "user" });
 //   Role.create({ id: 1, name: "moderator" });
 //   Role.create({ id: 1, name: "admin" });
 // })
 // .catch((error) => {
 //   console.log("Error creating table", error);
 // });
export default Restaurant;
