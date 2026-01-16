import db from "../models/index.js";
const User = db.User;
const Role = db.Role;
import bcrypt from "bcryptjs"; //เข้ารหัส
import jwt from "jsonwebtoken"; //แลกเปลี่ยนสื่อสารข้อมูล
//import op
import { Op } from "sequelize";
const authController = {};

authController.signUp = async (req, res) => {
  const { username, name, email, password } = req.boby;
  if (!username || !name || !email || !password) {
    res.status(400).send({ message: "Please provide all required fileds" });
    return;
  }
  //SELECT * FROM User WHERE username = username
  await User.findOne({ where: { username } })
    //.select(-password)
    .then((user) => {
      if (user) {
        res.status(400).send({ message: "Username is already existed" });
        return;
      }

      const newUser = {
        username,
        name,
        email,
        password,
      };
      User.create(newUser)
        .then((user) => {
          if (req.body.roles) {
            //SELECT * FROM Role WHERE name=role1 OR name= role2
            Role.findAll({
              where: {
                name: { [Op.or]: req.body.roles },
              },
            }).then((roles) => {
              if (roles?.length === 0) {
                user.setRoles([1]).then(() => {
                  res.send({ message: "User registered successfully3" });
                });
              } else {
                user.setRoles(roles).then(() => {
                  res.send({ message: "User registered successfully" });
                });
              }
            });
          } else {
            user.setRoles(roles).then(() => {
              res.send({ message: "User registered successfully" });
            });
          }
        })
        .catch((error) => {
          res.status(500).send({
            message: "Someting wrong error while registered a new user",
          });
        });
    });
};
module.exports = authController;
