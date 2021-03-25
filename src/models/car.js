const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');
const { Mark } = require('./mark');

class Car extends Model {}

Car.init({
  id_car: {
    primaryKey: true,
    autoIncrement: true,
    type:DataTypes.INTEGER
  },
  model: DataTypes.CHAR,
  color: DataTypes.CHAR,
  price: DataTypes.CHAR,
  year_of_issue: DataTypes.CHAR,
  id_supplier: DataTypes.INTEGER
}, { 
  sequelize, 
  modelName: 'car', 
  tableName: 'car', 
  createdAt: false, 
  updatedAt: false
});

Car.belongsTo(Mark, {
  foreignKey: {
    field: 'id_mark'
  }
});

module.exports.Car = Car;
