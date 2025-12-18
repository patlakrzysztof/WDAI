const sequelize = require("./database");
const Book = require("./models/book");

async function init() {
  try {
    await sequelize.sync({ force: true }); // new table
    console.log("Database made");
  } catch (error) {
    console.error("Database error while making it", error);
  } finally {
    await sequelize.close();
  }
}

init();
