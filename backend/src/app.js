const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./data');
const app = express();

// enable cors
app.use(cors());

// enable bodyParser
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Api Routes
app.use(routes.path, routes.handler);

// Synchronize sequelize db
db.sequelize
  .sync()
  .then(() => {
    console.log("Sequelize synchronized successfully");
  })
  .catch((error) => console.log(error));

module.exports = app;