const { Sequelize } = require("sequelize");

// join SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./users.db", // database
  logging: false, // SQL logs
});

module.exports = sequelize;
