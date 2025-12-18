const { Sequelize } = require("sequelize");

// join SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./books.db", // database
  logging: false, // SQL logs
});

module.exports = sequelize;
