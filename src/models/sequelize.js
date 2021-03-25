const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('DB_URL');

exports.sequelize = sequelize;