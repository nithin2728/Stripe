const Sequelize = require("sequelize");
let database = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: 50,
      min: 0,
      idle: 10000,
    },
  }
);

module.exports = database;
