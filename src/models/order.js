const {Model, DataTypes} = require('sequelize');
const {sequelize} = require('./sequelize');

class Order extends Model {
}

Order.init({
  id_order: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  date_of_order: DataTypes.CHAR,
  id_user: DataTypes.INTEGER,
  id_car: DataTypes.INTEGER,
  price: DataTypes.INTEGER,

}, {
  sequelize,
  modelName: 'my_order',
  tableName: 'my_order',
  createdAt: false,
  updatedAt: false
});

module.exports.Order = Order;
