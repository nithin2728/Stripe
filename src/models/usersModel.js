const Sequelize = require("sequelize");
const sequelize = require("../../config/dbConnection");
const tableName = "users";
const Users = sequelize.define(
  "Users",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4(),
    },
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.NUMBER,
      unique: true,
    },
    media: {
      type: Sequelize.JSON,
    },
    gender: {
      type: Sequelize.STRING,
    },
    customerId: {
      type: Sequelize.INTEGER,
    },
  },
  { tableName, updatedAt: false, createdAt: false }
);

module.exports = Users;
