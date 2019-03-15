const Sequelize = require("sequelize");
const db = require("./db");

const Song = db.define("song", {
  Hash: {
    type: Sequelize.STRING
  }
});

module.exports = Song;
