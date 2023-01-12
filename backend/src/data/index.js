const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

let db = {};

db["creditCards"] = require("../models/card")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;