const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

class Mark extends Model {}

Mark.init({
  mark_id: {
    primaryKey: true,
    autoIncrement: true,
    type:DataTypes.INTEGER
  },
  name: DataTypes.CHAR
}, {
  sequelize,
  modelName: 'mark',
  tableName: 'marks',
  createdAt: false,
  updatedAt: false
});

module.exports.Mark = Mark;
