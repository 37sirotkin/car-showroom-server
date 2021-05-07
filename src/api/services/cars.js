const ServerError = require('../../lib/error');
const {Car} = require('./../../models/car');
const {Mark} = require('./../../models/mark');

/**
 * @param {Object} options
 * @param {Integer} options.markId Filters on specified mark id
 * @param {String} options.color Filters on specified mark id
 * @throws {Error}
 * @return {Promise}
 */
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


