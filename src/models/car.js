const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

class Car extends Model {}

Car.init({
  id_car: {
    primaryKey: true,
    autoIncrement: true,
    type:DataTypes.INTEGER
  },
  mark: DataTypes.CHAR,
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

module.exports.Car = Car;
