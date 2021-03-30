const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://zbiwpljb:UUraoIHulRjvOxjbIqgQvcR44BAzyHZF@tai.db.elephantsql.com:5432/zbiwpljb');

exports.sequelize = sequelize;