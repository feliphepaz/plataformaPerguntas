const Sequelize = require("sequelize");

const connection = new Sequelize("perguntas", "root", "MercenaryMusty@9719", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
