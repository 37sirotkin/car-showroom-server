const ServerError = require('../../lib/error');
const {Order} = require('./../../models/order');

module.exports.findOrder = async () => {
  const order = await Order.findAll();
  return {
    status: 200,
    data: order.map(c => c.dataValues)
  };
};

module.exports.createOrder = async (options) => {
  const order = await Order.create(options.order);
  console.log(order);
  return {
    status: 200,
    data: order
  };
};





