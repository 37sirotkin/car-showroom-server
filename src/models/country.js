const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

class Country extends Model {}

Country.init({
    id_country: {
        primaryKey: true,
        autoIncrement: true,
        type:DataTypes.INTEGER
    },
    country_name: DataTypes.CHAR,

}, {
    sequelize,
    modelName: 'countries',
    tableName: 'countries',
    createdAt: false,
    updatedAt: false
});

module.exports.Country = Country;
