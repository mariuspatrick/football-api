const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:missme@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync()
  .then(console.log("Schema has been updated"))
  .catch(console.error);

module.exports = db;
