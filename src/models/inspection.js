const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('./sequelize');

class Inspection extends Model {
}

Inspection.init({
  incp_id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  time: DataTypes.CHAR,
  adress: DataTypes.CHAR,
  car_id: DataTypes.INTEGER,
  first_name: DataTypes.CHAR,
  surname: DataTypes.CHAR,
  father_name: DataTypes.CHAR,
  phone: DataTypes.CHAR,
  email: DataTypes.CHAR,
  user_id: DataTypes.INTEGER,
  path: DataTypes.CHAR

}, {
  sequelize,
  modelName: 'inspection',
  tableName: 'inspection',
  createdAt: false,
  updatedAt: false
});

module.exports.Inspection = Inspection;
