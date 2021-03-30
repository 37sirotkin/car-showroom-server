const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

class User extends Model {}

User.init({
    id_person: {
        primaryKey: true,
        autoIncrement: true,
        type:DataTypes.INTEGER
    },
    first_name: DataTypes.CHAR,
    surname: DataTypes.CHAR,
    email: DataTypes.CHAR,
    phone: DataTypes.CHAR,
    login: DataTypes.CHAR,
    pass: DataTypes.INTEGER,
    blocked: DataTypes.BOOLEAN,
    id_status: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'user',
    tableName: 'person',
    createdAt: false,
    updatedAt: false
});

module.exports.User = User;