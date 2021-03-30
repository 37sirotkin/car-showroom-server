const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

class Marks extends Model {}

Marks.init({
    id_mark: {
        primaryKey: true,
        autoIncrement: true,
        type:DataTypes.INTEGER
    },
    name: DataTypes.CHAR,
}, {
    sequelize,
    modelName: 'marks',
    tableName: 'marks',
    createdAt: false,
    updatedAt: false
});

module.exports.Marks = Marks;
