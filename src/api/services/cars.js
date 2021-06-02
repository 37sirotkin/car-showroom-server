const ServerError = require('../../lib/error');
const {Car} = require('./../../models/car');

module.exports.findCars = async (options) => {
  const where = {};
  if (!!options.markId) {
    where.id_mark = options.markId;
  }

  if (!!options.color) {
    where.color = options.color;
  }

  const cars = await Car.findAll({
    where
  });

  return {
    status: 200,
    data: cars.map(c => c.dataValues)
  };
};

module.exports.createCar = async (options) => {
  const cars = await Car.create(options.cars);
  return {
    status: 200,
    data: cars
  };
};


