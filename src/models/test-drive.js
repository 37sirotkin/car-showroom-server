const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('./sequelize');

class TestDrive extends Model {
}

TestDrive.init({
  id_testdrive: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  date_of_td: DataTypes.CHAR,
  status: DataTypes.BOOLEAN,
  id_car: DataTypes.INTEGER,
  id_user: DataTypes.INTEGER,
  experience: DataTypes.CHAR,
  first_name: DataTypes.CHAR,
  surname: DataTypes.CHAR,
  phone: DataTypes.CHAR,
  email: DataTypes.CHAR,
  path: DataTypes.INTEGER


}, {
  sequelize,
  modelName: 'test_drive',
  tableName: 'test_drive',
  createdAt: false,
  updatedAt: false
});

module.exports.TestDrive = TestDrive;
